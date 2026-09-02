import { useState } from "react";
import type { ChangeEvent, FormEvent } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Eye, EyeOff, Lock, User, Loader2, ShieldCheck, Users, TrendingUp } from "lucide-react";
import API from "../api/axios";
import Container from "../components/ui/container";

const perks = [
  { icon: ShieldCheck, text: "Secure and transparent cooperative banking" },
  { icon: Users, text: "Member-owned with equal voting rights" },
  { icon: TrendingUp, text: "Competitive savings rates and fair credit" },
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
    "w-full rounded-xl border border-line bg-cream py-3 pl-10 pr-4 text-sm text-ink placeholder:text-muted/50 focus:border-forest focus:outline-none focus:ring-2 focus:ring-forest/15";

  return (
    <section className="bg-cream py-16 sm:py-20">
      <Container>
        <div className="mx-auto grid max-w-5xl overflow-hidden rounded-3xl border border-line bg-paper lg:grid-cols-2">
          <div className="hidden flex-col justify-between bg-forest-deep p-10 text-white lg:flex">
            <div>
              <p className="text-sm font-bold text-gold-soft">Waliin SACCO Ltd</p>
              <h2 className="mt-8 text-3xl font-bold leading-tight">
                Your financial future starts with membership.
              </h2>
              <p className="mt-4 max-w-xs text-sm leading-relaxed text-white/65">
                Sign in to manage savings, follow loan progress, and stay connected as an owner of the cooperative.
              </p>
            </div>
            <div className="space-y-4">
              {perks.map(({ icon: Icon, text }) => (
                <div key={text} className="flex items-center gap-3">
                  <div className="rounded-lg bg-white/10 p-2">
                    <Icon className="h-4 w-4 text-gold-soft" />
                  </div>
                  <span className="text-sm text-white/75">{text}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="p-8 sm:p-12">
            <h3 className="text-2xl font-bold text-ink">Welcome back</h3>
            <p className="mt-1.5 text-sm text-muted">Sign in to your Waliin account</p>

            {errorMessage && (
              <div className="mt-6 rounded-xl border border-red-200 bg-red-50 p-3.5 text-sm text-red-700">
                {errorMessage}
              </div>
            )}

            <form onSubmit={handleSubmit} className="mt-8 space-y-5">
              <div className="space-y-1.5">
                <label className="block text-xs font-bold text-muted">Member ID or phone</label>
                <div className="relative">
                  <User size={16} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-muted" />
                  <input
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
                  <label className="block text-xs font-bold text-muted">Password</label>
                  <Link to="/forgot-password" className="text-xs font-bold text-forest hover:underline">
                    Forgot?
                  </Link>
                </div>
                <div className="relative">
                  <Lock size={16} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-muted" />
                  <input
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
                    className="absolute right-3.5 top-1/2 -translate-y-1/2 text-muted hover:text-ink"
                    aria-label="Toggle password visibility"
                  >
                    {showPassword ? <EyeOff size={16} /> : <Eye size={16} />}
                  </button>
                </div>
              </div>

              <label className="flex cursor-pointer items-center gap-2.5">
                <input
                  type="checkbox"
                  checked={rememberMe}
                  onChange={(e) => setRememberMe(e.target.checked)}
                  className="h-4 w-4 rounded border-line text-forest"
                />
                <span className="text-sm text-muted">Remember this device</span>
              </label>

              <button
                type="submit"
                disabled={isLoading}
                className="flex h-12 w-full items-center justify-center gap-2 rounded-full bg-forest text-sm font-bold text-white hover:bg-forest-deep disabled:opacity-60"
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

            <p className="mt-8 border-t border-line pt-6 text-center text-sm text-muted">
              Not a member yet?{" "}
              <Link to="/contact" className="font-bold text-forest underline underline-offset-4">
                Apply at our office
              </Link>
            </p>
          </div>
        </div>
      </Container>
    </section>
  );
}
