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
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
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
    "w-full rounded-xl border border-[#e6e0d6] bg-[#f7f5f0] px-4 py-3 text-sm text-[#0e241d] placeholder:text-[#5d6f68]/50 transition-all duration-200 focus:border-[#d4a017]/50 focus:outline-none focus:ring-2 focus:ring-[#d4a017]/15 focus:bg-white";

  return (
    <form onSubmit={handleSubmit} className="w-full space-y-5">
      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
        <div className="space-y-1.5">
          <label htmlFor="full_name" className="block text-xs font-bold uppercase tracking-wider text-[#5d6f68]">
            Full name <span className="text-red-500">*</span>
          </label>
          <input
            id="full_name" name="full_name" value={form.full_name}
            onChange={handleChange} placeholder="Your full name" required
            className={inputClass}
          />
        </div>
        <div className="space-y-1.5">
          <label htmlFor="email" className="block text-xs font-bold uppercase tracking-wider text-[#5d6f68]">
            Email <span className="text-red-500">*</span>
          </label>
          <input
            id="email" name="email" type="email" value={form.email}
            onChange={handleChange} placeholder="you@example.com" required
            className={inputClass}
          />
        </div>
      </div>

      <div className="space-y-1.5">
        <label htmlFor="phone" className="block text-xs font-bold uppercase tracking-wider text-[#5d6f68]">
          Phone <span className="text-xs font-normal normal-case text-[#5d6f68]/60">(optional)</span>
        </label>
        <input
          id="phone" name="phone" type="tel" value={form.phone}
          onChange={handleChange} placeholder="+251 9XX XXX XXX"
          className={inputClass}
        />
      </div>

      <div className="space-y-1.5">
        <label htmlFor="message" className="block text-xs font-bold uppercase tracking-wider text-[#5d6f68]">
          Message <span className="text-red-500">*</span>
        </label>
        <textarea
          id="message" name="message" value={form.message}
          onChange={handleChange} rows={5} placeholder="How can we help you?" required
          className={`${inputClass} resize-y min-h-[120px]`}
        />
      </div>

      {status === "success" && (
        <div className="flex items-start gap-3 rounded-xl border border-emerald-200 bg-emerald-50 px-4 py-3.5 text-sm text-emerald-800">
          <CheckCircle2 size={16} className="mt-0.5 shrink-0 text-emerald-600" />
          Message sent. We'll get back to you within 24 hours.
        </div>
      )}
      {status === "error" && (
        <div className="rounded-xl border border-red-200 bg-red-50 px-4 py-3.5 text-sm text-red-700">
          Something went wrong. Please try again.
        </div>
      )}

      <button
        type="submit"
        disabled={loading}
        className="flex h-12 w-full items-center justify-center gap-2 rounded-full bg-[#0e241d] text-sm font-bold text-white transition-colors hover:bg-[#16382e] focus:outline-none focus:ring-2 focus:ring-[#d4a017]/40 focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-60"
      >
        {loading ? (
          <><Loader2 size={16} className="animate-spin" /> Sending...</>
        ) : (
          <><Send size={16} /> Send message</>
        )}
      </button>
    </form>
  );
}
