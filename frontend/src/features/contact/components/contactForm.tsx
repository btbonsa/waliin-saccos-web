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
    "w-full px-4 py-3 rounded-xl border border-gray-200 bg-gray-50 text-sm text-gray-900 placeholder-gray-400 focus:outline-none focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500/20 transition-all duration-200";

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div className="space-y-1.5">
          <label className="block text-xs font-bold text-gray-600 uppercase tracking-wider">
            Full Name <span className="text-red-400">*</span>
          </label>
          <input name="full_name" value={form.full_name} onChange={handleChange} placeholder="Your full name" required className={inputClass} />
        </div>
        <div className="space-y-1.5">
          <label className="block text-xs font-bold text-gray-600 uppercase tracking-wider">
            Email <span className="text-red-400">*</span>
          </label>
          <input name="email" type="email" value={form.email} onChange={handleChange} placeholder="you@example.com" required className={inputClass} />
        </div>
      </div>

      <div className="space-y-1.5">
        <label className="block text-xs font-bold text-gray-600 uppercase tracking-wider">Phone</label>
        <input name="phone" type="tel" value={form.phone} onChange={handleChange} placeholder="+251 9XX XXX XXX" className={inputClass} />
      </div>

      <div className="space-y-1.5">
        <label className="block text-xs font-bold text-gray-600 uppercase tracking-wider">
          Message <span className="text-red-400">*</span>
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
        <div className="flex items-center gap-3 text-sm text-emerald-700 bg-emerald-50 border border-emerald-200 rounded-xl px-4 py-3">
          <CheckCircle2 size={16} className="shrink-0" />
          Message sent! We'll get back to you within 24 hours.
        </div>
      )}
      {status === "error" && (
        <div className="text-sm text-red-700 bg-red-50 border border-red-200 rounded-xl px-4 py-3">
          Something went wrong. Please try again.
        </div>
      )}

      <button
        type="submit"
        disabled={loading}
        className="w-full h-12 rounded-xl bg-emerald-950 text-white text-sm font-bold shadow-md hover:bg-emerald-800 disabled:opacity-60 disabled:cursor-not-allowed transition-all duration-200 flex items-center justify-center gap-2"
      >
        {loading ? <Loader2 size={17} className="animate-spin" /> : <Send size={17} />}
        {loading ? "Sending..." : "Send Message"}
      </button>
    </form>
  );
}
