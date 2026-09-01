import { useState } from "react";
import type { ChangeEvent, FormEvent } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Eye, EyeOff, Lock, User, Loader2, ShieldCheck, Users, TrendingUp } from "lucide-react";
import { motion } from "framer-motion";
import API from "../api/axios";

const perks = [
  { icon: ShieldCheck, text: "Secure & transparent cooperative banking" },
  { icon: Users, text: "Member-owned with equal voting rights" },
  { icon: TrendingUp, text: "Competitive savings rates & flexible credit" },
];

export default function LoginPage() {
  const [formData, setFormData] = useState({ username: "", password: "" });
  const [showPassword, setShowPassword] = useState(false);
  const [rememberMe, setRememberMe] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const navigate = useNavigate();

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    if (errorMessage) setErrorMessage("");
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!formData.username || !formData.password) {
      setErrorMessage("Please fill in both fields.");
      return;
    }
    setIsLoading(true);
    try {
      const { data } = await API.post("/auth/login", formData);
      localStorage.setItem("saccos_token", data.token);
      navigate("/");
    } catch (err: unknown) {
      const msg =
        err && typeof err === "object" && "response" in err
          ? (err as { response?: { data?: { message?: string } } }).response?.data?.message
          : undefined;
      setErrorMessage(msg ?? "Login failed. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  const inputClass =
    "w-full pl-10 pr-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-white/25 text-sm focus:outline-none focus:border-amber-400/60 focus:ring-2 focus:ring-amber-400/20 transition-all duration-200";

  return (
    <div className="min-h-screen w-full bg-emerald-950 flex items-center justify-center p-4 relative overflow-hidden">
      {/* Ambient glows */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -top-40 -left-40 h-96 w-96 rounded-full bg-emerald-500/10 blur-3xl" />
        <div className="absolute -bottom-40 -right-40 h-96 w-96 rounded-full bg-amber-500/8 blur-3xl" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-64 w-64 rounded-full bg-emerald-400/5 blur-3xl" />
      </div>

      <div className="relative w-full max-w-5xl grid grid-cols-1 lg:grid-cols-2 rounded-3xl overflow-hidden border border-white/8 shadow-2xl shadow-black/40">
        {/* Left panel */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="hidden lg:flex flex-col justify-between bg-gradient-to-br from-emerald-900 to-emerald-950 p-12 border-r border-white/6"
        >
          <div>
            <div className="flex items-center gap-3 mb-12">
              <div className="h-10 w-10 rounded-full border border-amber-400/40 bg-emerald-800 flex items-center justify-center text-base font-extrabold text-amber-400">
                W
              </div>
              <div className="leading-none">
                <p className="text-sm font-extrabold tracking-[0.15em] text-amber-400 uppercase">Waliin</p>
                <p className="text-[9px] font-semibold tracking-[0.3em] text-emerald-300/50 uppercase mt-0.5">Saccos</p>
              </div>
            </div>

            <h2 className="text-3xl font-extrabold text-white leading-tight mb-4">
              Your Financial<br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-yellow-300">
                Future Starts Here
              </span>
            </h2>
            <p className="text-sm text-emerald-200/60 leading-relaxed max-w-xs">
              Join thousands of members building stronger financial habits through trusted cooperative banking.
            </p>
          </div>

          <div className="space-y-4">
            {perks.map(({ icon: Icon, text }, i) => (
              <div key={i} className="flex items-center gap-3">
                <div className="p-2 rounded-lg bg-white/5 border border-white/8">
                  <Icon className="h-4 w-4 text-amber-400" />
                </div>
                <span className="text-sm text-emerald-200/70">{text}</span>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Right panel — form */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
          className="flex flex-col justify-center bg-emerald-950/80 backdrop-blur-xl p-8 sm:p-12"
        >
          <div className="mb-8">
            <h3 className="text-2xl font-extrabold text-white">Welcome Back</h3>
            <p className="text-sm text-emerald-200/50 mt-1.5">Sign in to your Waliin account</p>
          </div>

          {errorMessage && (
            <div className="mb-6 p-3.5 rounded-xl bg-red-500/10 border border-red-500/20 text-red-300 text-sm font-medium">
              {errorMessage}
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-5">
            <div className="space-y-1.5">
              <label className="block text-xs font-bold text-emerald-200/60 uppercase tracking-wider">
                Member ID or Phone
              </label>
              <div className="relative">
                <User size={16} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-emerald-400/60" />
                <input
                  id="username"
                  name="username"
                  type="text"
                  value={formData.username}
                  onChange={handleChange}
                  placeholder="e.g. WS-1024"
                  className={inputClass}
                />
              </div>
            </div>

            <div className="space-y-1.5">
              <div className="flex items-center justify-between">
                <label className="block text-xs font-bold text-emerald-200/60 uppercase tracking-wider">
                  Password
                </label>
                <Link to="/forgot-password" className="text-xs font-semibold text-amber-400/80 hover:text-amber-400 transition-colors duration-200">
                  Forgot?
                </Link>
              </div>
              <div className="relative">
                <Lock size={16} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-emerald-400/60" />
                <input
                  id="password"
                  name="password"
                  type={showPassword ? "text" : "password"}
                  value={formData.password}
                  onChange={handleChange}
                  placeholder="••••••••"
                  className={`${inputClass} pr-10`}
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3.5 top-1/2 -translate-y-1/2 text-emerald-400/60 hover:text-amber-400 transition-colors duration-200"
                  aria-label="Toggle password"
                >
                  {showPassword ? <EyeOff size={16} /> : <Eye size={16} />}
                </button>
              </div>
            </div>

            <label className="flex items-center gap-2.5 cursor-pointer">
              <input
                type="checkbox"
                checked={rememberMe}
                onChange={(e) => setRememberMe(e.target.checked)}
                className="h-4 w-4 rounded border-white/20 bg-white/5 text-amber-400 focus:ring-amber-400/30 focus:ring-offset-0"
              />
              <span className="text-sm text-emerald-200/60">Remember this device</span>
            </label>

            <button
              type="submit"
              disabled={isLoading}
              className="w-full mt-2 py-3.5 rounded-xl bg-gradient-to-r from-amber-400 to-yellow-400 text-emerald-950 font-extrabold text-sm shadow-xl shadow-amber-500/20 hover:brightness-105 active:scale-[0.99] disabled:opacity-60 disabled:cursor-not-allowed transition-all duration-200 flex items-center justify-center gap-2"
            >
              {isLoading ? (
                <><Loader2 size={17} className="animate-spin" /><span>Signing in...</span></>
              ) : (
                "Sign In to Account"
              )}
            </button>
          </form>

          <div className="mt-8 pt-6 border-t border-white/6 text-center">
            <p className="text-xs text-emerald-200/40">
              Not a member yet?{" "}
              <Link to="/register" className="font-bold text-amber-400/80 hover:text-amber-400 transition-colors duration-200 underline underline-offset-4">
                Apply for Membership
              </Link>
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
