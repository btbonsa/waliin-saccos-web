const db = require("../config");

exports.getAll = (req, res, next) => {
  db.query(
    "SELECT * FROM announcements ORDER BY created_at DESC",
    (err, rows) => {
      if (err) return next(err);
      res.json(rows);
    }
  );
};

exports.getOne = (req, res, next) => {
  db.query(
    "SELECT * FROM announcements WHERE id = ?",
    [req.params.id],
    (err, rows) => {
      if (err) return next(err);
      if (!rows.length) return res.status(404).json({ message: "Not found." });
      res.json(rows[0]);
    }
  );
};

exports.create = (req, res, next) => {
  const { title, body, category } = req.body;
  if (!title || !body) return res.status(400).json({ message: "Title and body are required." });
  db.query(
    "INSERT INTO announcements (title, body, category, created_by) VALUES (?, ?, ?, ?)",
    [title, body, category || "general", req.user.id],
    (err, result) => {
      if (err) return next(err);
      res.status(201).json({ id: result.insertId, title, body, category });
    }
  );
};

exports.update = (req, res, next) => {
  const { title, body, category } = req.body;
  db.query(
    "UPDATE announcements SET title = ?, body = ?, category = ? WHERE id = ?",
    [title, body, category, req.params.id],
    (err, result) => {
      if (err) return next(err);
      if (!result.affectedRows) return res.status(404).json({ message: "Not found." });
      res.json({ message: "Updated." });
    }
  );
};

exports.remove = (req, res, next) => {
  db.query(
    "DELETE FROM announcements WHERE id = ?",
    [req.params.id],
    (err, result) => {
      if (err) return next(err);
      if (!result.affectedRows) return res.status(404).json({ message: "Not found." });
      res.json({ message: "Deleted." });
    }
  );
};
