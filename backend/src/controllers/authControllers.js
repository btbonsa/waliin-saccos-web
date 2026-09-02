const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const db = require("../config");

const signToken = (id, role) =>
  jwt.sign({ id, role }, process.env.JWT_SECRET, { expiresIn: "7d" });

exports.register = (req, res, next) => {
  const { member_id, phone, password, full_name } = req.body;
  if (!member_id || !phone || !password || !full_name) {
    return res.status(400).json({ message: "All fields are required." });
  }

  bcrypt.hash(password, 10, (err, hash) => {
    if (err) return next(err);
    const sql =
      "INSERT INTO members (member_id, phone, password, full_name) VALUES (?, ?, ?, ?)";
    db.query(sql, [member_id, phone, hash, full_name], (err, result) => {
      if (err) {
        if (err.code === "ER_DUP_ENTRY")
          return res.status(409).json({ message: "Member ID or phone already exists." });
        return next(err);
      }
      res.status(201).json({ message: "Registration successful." });
    });
  });
};

exports.login = (req, res, next) => {
  const { username, password } = req.body;
  if (!username || !password)
    return res.status(400).json({ message: "Username and password are required." });

  const sql = "SELECT * FROM members WHERE member_id = ? OR phone = ?";
  db.query(sql, [username, username], (err, rows) => {
    if (err) return next(err);
    if (!rows.length) return res.status(401).json({ message: "Invalid credentials." });

    const member = rows[0];
    bcrypt.compare(password, member.password, (err, match) => {
      if (err) return next(err);
      if (!match) return res.status(401).json({ message: "Invalid credentials." });

      const token = signToken(member.id, member.role);
      res.json({
        token,
        user: { id: member.id, member_id: member.member_id, full_name: member.full_name, role: member.role },
      });
    });
  });
};
