import { useState } from "react";
import type { FormEvent, ChangeEvent } from "react";
import { Send, Loader2, CheckCircle2 } from "lucide-react";
import API from "../../../api/axios";

interface FormState {
  full_name: string;
  email: string;
  phone: string;
  message: string;
}

export default function ContactForm() {
  const [form, setForm] = useState<FormState>({ full_name: "", email: "", phone: "", message: "" });
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
    if (status !== "idle") setStatus("idle");
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (!form.full_name || !form.email || !form.message) return;
    setLoading(true);
    try {
      await API.post("/contact", form);
      setStatus("success");
      setForm({ full_name: "", email: "", phone: "", message: "" });
    } catch {
      setStatus("error");
    } finally {
      setLoading(false);
    }
  };

  const inputClass =
    "w-full rounded-xl border border-line bg-cream px-4 py-3 text-sm text-ink placeholder:text-muted/60 focus:border-forest focus:outline-none focus:ring-2 focus:ring-forest/15";

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        <div className="space-y-1.5">
          <label className="block text-xs font-bold text-muted">
            Full name <span className="text-red-500">*</span>
          </label>
          <input name="full_name" value={form.full_name} onChange={handleChange} placeholder="Your full name" required className={inputClass} />
        </div>
        <div className="space-y-1.5">
          <label className="block text-xs font-bold text-muted">
            Email <span className="text-red-500">*</span>
          </label>
          <input name="email" type="email" value={form.email} onChange={handleChange} placeholder="you@example.com" required className={inputClass} />
        </div>
      </div>

      <div className="space-y-1.5">
        <label className="block text-xs font-bold text-muted">Phone</label>
        <input name="phone" type="tel" value={form.phone} onChange={handleChange} placeholder="+251 9XX XXX XXX" className={inputClass} />
      </div>

      <div className="space-y-1.5">
        <label className="block text-xs font-bold text-muted">
          Message <span className="text-red-500">*</span>
        </label>
        <textarea
          name="message"
          value={form.message}
          onChange={handleChange}
          rows={5}
          placeholder="How can we help you?"
          required
          className={`${inputClass} resize-none`}
        />
      </div>

      {status === "success" && (
        <div className="flex items-center gap-3 rounded-xl border border-emerald-200 bg-emerald-50 px-4 py-3 text-sm text-emerald-800">
          <CheckCircle2 size={16} className="shrink-0" />
          Message sent. We will get back to you within 24 hours.
        </div>
      )}
      {status === "error" && (
        <div className="rounded-xl border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-700">
          Something went wrong. Please try again.
        </div>
      )}

      <button
        type="submit"
        disabled={loading}
        className="flex h-12 w-full items-center justify-center gap-2 rounded-full bg-forest text-sm font-bold text-white hover:bg-forest-deep disabled:cursor-not-allowed disabled:opacity-60"
      >
        {loading ? <Loader2 size={17} className="animate-spin" /> : <Send size={17} />}
        {loading ? "Sending..." : "Send message"}
      </button>
    </form>
  );
}
