import { useState } from "react";
import type { ChangeEvent, FormEvent } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  Eye,
  EyeOff,
  Lock,
  User,
  Loader2,
  ShieldCheck,
  Users,
  TrendingUp,
} from "lucide-react";
import API from "../api/axios";
import Container from "../components/ui/container";

const perks = [
  {
    icon: ShieldCheck,
    text: "Secure and transparent cooperative banking",
  },
  {
    icon: Users,
    text: "Member-owned with equal voting rights",
  },
  {
    icon: TrendingUp,
    text: "Competitive savings rates and fair credit",
  },
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
          ? (err as { response?: { data?: { message?: string } } }).response
              ?.data?.message
          : undefined;
      setErrorMessage(msg ?? "Login failed. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  const inputClass =
    "w-full rounded-xl border border-[#e8e4dc] bg-[#faf9f6] py-3.5 pl-11 pr-4 text-sm text-[#0e241d] placeholder:text-[#5d6f68]/45 focus:border-[#0e241d] focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#0e241d]/8 transition-colors";

  return (
    <section className="min-h-[calc(100vh-80px)] bg-[#f7f5f0] py-16 sm:py-24">
      <Container>
        <div className="mx-auto grid max-w-5xl overflow-hidden rounded-3xl border border-[#e8e4dc] bg-white shadow-sm lg:grid-cols-2">
          {/* Left panel */}
          <div className="relative hidden flex-col justify-between overflow-hidden bg-[#0e241d] p-10 text-white lg:flex lg:p-12">
            {/* Soft gold accent line */}
            <div className="absolute inset-y-0 left-0 w-1 bg-[#d4a017]" />

            <div>
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#d4af5a]">
                Waliin SACCO Ltd
              </p>
              <h2 className="mt-8 text-3xl font-bold leading-tight tracking-tight">
                Your financial future starts with membership.
              </h2>
              <p className="mt-4 max-w-xs text-sm leading-relaxed text-white/60">
                Sign in to manage savings, follow loan progress, and stay
                connected as an owner of the cooperative.
              </p>
            </div>

            <div className="space-y-5">
              {perks.map(({ icon: Icon, text }) => (
                <div key={text} className="flex items-start gap-3.5">
                  <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-white/10">
                    <Icon className="h-4 w-4 text-[#d4af5a]" strokeWidth={1.75} />
                  </div>
                  <span className="pt-1.5 text-sm leading-snug text-white/70">
                    {text}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Right panel */}
          <div className="flex flex-col justify-center p-8 sm:p-12">
            <div>
              <h3 className="text-2xl font-bold tracking-tight text-[#0e241d]">
                Welcome back
              </h3>
              <p className="mt-1.5 text-sm text-[#5d6f68]">
                Sign in to your Waliin account
              </p>
            </div>

            {errorMessage && (
              <div className="mt-6 rounded-xl border border-red-200 bg-red-50 px-4 py-3.5 text-sm text-red-700">
                {errorMessage}
              </div>
            )}

            <form onSubmit={handleSubmit} className="mt-8 space-y-5">
              {/* Username */}
              <div className="space-y-1.5">
                <label className="block text-xs font-bold tracking-wide text-[#5d6f68]">
                  Member ID or phone
                </label>
                <div className="relative">
                  <User
                    size={16}
                    className="absolute left-3.5 top-1/2 -translate-y-1/2 text-[#5d6f68]"
                    strokeWidth={1.75}
                  />
                  <input
                    name="username"
                    type="text"
                    value={formData.username}
                    onChange={handleChange}
                    placeholder="e.g. WS-1024"
                    autoComplete="username"
                    className={inputClass}
                  />
                </div>
              </div>

              {/* Password */}
              <div className="space-y-1.5">
                <div className="flex items-center justify-between">
                  <label className="block text-xs font-bold tracking-wide text-[#5d6f68]">
                    Password
                  </label>
                  <Link
                    to="/forgot-password"
                    className="text-xs font-bold text-[#0e241d] transition-colors hover:text-[#d4a017]"
                  >
                    Forgot?
                  </Link>
                </div>
                <div className="relative">
                  <Lock
                    size={16}
                    className="absolute left-3.5 top-1/2 -translate-y-1/2 text-[#5d6f68]"
                    strokeWidth={1.75}
                  />
                  <input
                    name="password"
                    type={showPassword ? "text" : "password"}
                    value={formData.password}
                    onChange={handleChange}
                    placeholder="••••••••"
                    autoComplete="current-password"
                    className={`${inputClass} pr-11`}
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-3.5 top-1/2 -translate-y-1/2 text-[#5d6f68] transition-colors hover:text-[#0e241d]"
                    aria-label="Toggle password visibility"
                  >
                    {showPassword ? <EyeOff size={16} /> : <Eye size={16} />}
                  </button>
                </div>
              </div>

              {/* Remember me */}
              <label className="flex cursor-pointer items-center gap-2.5">
                <input
                  type="checkbox"
                  checked={rememberMe}
                  onChange={(e) => setRememberMe(e.target.checked)}
                  className="h-4 w-4 rounded border-[#e8e4dc] text-[#0e241d] focus:ring-[#0e241d]/20"
                />
                <span className="text-sm text-[#5d6f68]">
                  Remember this device
                </span>
              </label>

              {/* Submit */}
              <button
                type="submit"
                disabled={isLoading}
                className="flex h-12 w-full items-center justify-center gap-2 rounded-full bg-[#0e241d] text-sm font-bold text-white transition-all duration-200 hover:bg-[#16382e] hover:shadow-md disabled:cursor-not-allowed disabled:opacity-60"
              >
                {isLoading ? (
                  <>
                    <Loader2 size={17} className="animate-spin" />
                    Signing in...
                  </>
                ) : (
                  "Sign in"
                )}
              </button>
            </form>

            <p className="mt-8 border-t border-[#e8e4dc] pt-6 text-center text-sm text-[#5d6f68]">
              Not a member yet?{" "}
              <Link
                to="/contact"
                className="font-bold text-[#0e241d] underline underline-offset-4 transition-colors hover:text-[#d4a017]"
              >
                Apply at our office
              </Link>
            </p>
          </div>
        </div>
      </Container>
    </section>
  );
}