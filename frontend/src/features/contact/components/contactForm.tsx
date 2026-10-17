import { useState } from "react";
import type { FormEvent, ChangeEvent } from "react";
import { Send, Loader2, CheckCircle2 } from "lucide-react";
import emailjs from '@emailjs/browser';
import { useLang } from "../../../context/LanguageContext";
import { EMAILJS_CONFIG } from "../../../config/emailjs";

interface FormState {
  full_name: string;
  email: string;
  phone: string;
  message: string;
}

export default function ContactForm() {
  const { t } = useLang();
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
      const emailData = {
        name: form.full_name,
        from_email: form.email,
        phone: form.phone || "Not provided",
        time: new Date().toLocaleString(),
        message: form.message,
      };

      console.log("Sending email with data:", emailData);

      const response = await emailjs.send(
        EMAILJS_CONFIG.SERVICE_ID,
        EMAILJS_CONFIG.TEMPLATE_ID,
        emailData,
        EMAILJS_CONFIG.PUBLIC_KEY
      );

      console.log("EmailJS response:", response);
      setStatus("success");
      setForm({ full_name: "", email: "", phone: "", message: "" });
    } catch (error) {
      console.error("EmailJS error:", error);
      alert(`Email sending failed: ${error instanceof Error ? error.message : 'Unknown error'}`);
      setStatus("error");
    } finally {
      setLoading(false);
    }
  };

  const inputClass =
    "w-full rounded-xl shadow-sm border border-[#e6e0d6] bg-gray-100 px-4 py-3 text-sm text-[#0e241d] placeholder:text-[#5d6f68]/30 transition-all duration-200 focus:border-[#d4a017]/50 focus:outline-none focus:ring-2 focus:ring-[#d4a017]/15 focus:bg-white";

  return (
    <form onSubmit={handleSubmit} className="w-full space-y-5">
      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
        <div className="space-y-1.5">
          <label htmlFor="full_name" className="block text-xs font-bold uppercase tracking-wider text-[#5d6f68]">
            {t("fullNameLabel")} <span className="text-red-500">*</span>
          </label>
          <input
            id="full_name" name="full_name" value={form.full_name}
            onChange={handleChange} placeholder={t("placeholderFullName")} required
            className={inputClass}
          />
        </div>
        <div className="space-y-1.5">
          <label htmlFor="email" className="block text-xs font-bold uppercase tracking-wider text-[#5d6f68]">
            {t("emailLabelForm")} <span className="text-red-500">*</span>
          </label>
          <input
            id="email" name="email" type="email" value={form.email}
            onChange={handleChange} placeholder={t("placeholderEmail")} required
            className={inputClass}
          />
        </div>
      </div>

      <div className="space-y-1.5">
        <label htmlFor="phone" className="block text-xs font-bold uppercase tracking-wider text-[#5d6f68]">
          {t("phoneLabelForm")} <span className="text-xs font-normal normal-case text-[#5d6f68]/60">(optional)</span>
        </label>
        <input
          id="phone" name="phone" type="tel" value={form.phone}
          onChange={handleChange} placeholder={t("placeholderPhone")}
          className={inputClass}
        />
      </div>

      <div className="space-y-1.5">
        <label htmlFor="message" className="block text-xs font-bold uppercase tracking-wider text-[#5d6f68]">
          {t("messageLabel")} <span className="text-red-500">*</span>
        </label>
        <textarea
          id="message" name="message" value={form.message}
          onChange={handleChange} rows={5} placeholder={t("placeholderMessage")} required
          className={`${inputClass} resize-y min-h-[120px]`}
        />
      </div>

      {status === "success" && (
        <div className="flex items-start gap-3 rounded-xl border border-emerald-200 bg-emerald-50 px-4 py-3.5 text-sm text-emerald-800">
          <CheckCircle2 size={16} className="mt-0.5 shrink-0 text-emerald-600" />
          {t("messageSent")}
        </div>
      )}
      {status === "error" && (
        <div className="rounded-xl border border-red-200 bg-red-50 px-4 py-3.5 text-sm text-red-700">
          {t("messageFailed")}
        </div>
      )}

      <button
        type="submit"
        disabled={loading}
        className="flex h-12 w-full items-center justify-center gap-2 rounded-full bg-[#0e241d] text-sm font-bold text-white transition-colors hover:bg-[#16382e] focus:outline-none focus:ring-2 focus:ring-[#d4a017]/40 focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-60"
      >
        {loading ? (
          <><Loader2 size={16} className="animate-spin" /> {t("sending")}</>
        ) : (
          <><Send size={16} /> {t("sendMessage")}</>
        )}
      </button>
    </form>
  );
}
