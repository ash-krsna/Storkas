import { Facebook, Instagram, Linkedin, Mail, MapPin, Phone, Twitter } from "lucide-react";
import { useState } from "react";
import { submitForm } from "../lib/api.js";

const initialState = {
  name: "",
  contact: "",
  message: "",
};

function Contact() {
  const [form, setForm] = useState(initialState);
  const [status, setStatus] = useState({ type: "", message: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const updateField = (event) => {
    setForm({ ...form, [event.target.name]: event.target.value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setIsSubmitting(true);
    setStatus({ type: "", message: "" });

    try {
      const result = await submitForm("/api/contact", form);
      setStatus({
        type: "success",
        message: `${result.message} Reference: ${result.referenceId}`,
      });
      setForm(initialState);
    } catch (error) {
      setStatus({ type: "error", message: error.message });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="bg-white py-16 sm:py-20">
      <div className="section-shell grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
        <div>
          <p className="eyebrow">Contact</p>
          <h2 className="section-title">Talk to Storkas logistics.</h2>
          <p className="section-copy">
            For shipments, business routes, partner onboarding, warehousing, cold-chain handling, and local delivery planning.
          </p>
          <div className="mt-8 space-y-4">
            <p className="flex items-center gap-3 font-semibold text-slate-700">
              <Mail className="h-5 w-5 text-harbor" /> hello@storkas.com
            </p>
            <p className="flex items-center gap-3 font-semibold text-slate-700">
              <Phone className="h-5 w-5 text-harbor" /> +91 XXXXXXXXXX
            </p>
            <p className="flex items-center gap-3 font-semibold text-slate-700">
              <MapPin className="h-5 w-5 text-harbor" /> India
            </p>
          </div>
          <div className="mt-8 flex gap-3">
            {[Instagram, Linkedin, Twitter, Facebook].map((Icon, index) => (
              <a
                key={index}
                href="#contact"
                className="grid h-11 w-11 place-items-center rounded-2xl border border-slate-200 bg-white text-slate-600 transition hover:border-harbor hover:text-harbor"
                aria-label="Storkas social link"
              >
                <Icon className="h-5 w-5" />
              </a>
            ))}
          </div>
        </div>

        <form onSubmit={handleSubmit} className="card">
          <div className="grid gap-4">
            <label className="label">
              Name
              <input className="field" name="name" value={form.name} onChange={updateField} required />
            </label>
            <label className="label">
              Email/Phone
              <input className="field" name="contact" value={form.contact} onChange={updateField} required />
            </label>
            <label className="label">
              Message
              <textarea className="field min-h-36" name="message" value={form.message} onChange={updateField} required />
            </label>
          </div>
          <button type="submit" className="primary-button mt-6 w-full disabled:cursor-not-allowed disabled:opacity-70" disabled={isSubmitting}>
            {isSubmitting ? "Sending..." : "Send Message"}
          </button>
          {status.message && (
            <p
              className={`mt-4 rounded-2xl px-4 py-3 text-sm font-semibold ${
                status.type === "success" ? "bg-teal-50 text-teal-800" : "bg-red-50 text-red-700"
              }`}
            >
              {status.message}
            </p>
          )}
        </form>
      </div>
    </section>
  );
}

export default Contact;
