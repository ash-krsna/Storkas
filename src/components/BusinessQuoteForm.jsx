import { useState } from "react";
import { submitForm } from "../lib/api.js";

const initialState = {
  name: "",
  email: "",
  businessName: "",
  serviceType: "Local Delivery",
  monthlyShipments: "",
  message: "",
};

function BusinessQuoteForm() {
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
      const result = await submitForm("/api/business-quote", form);
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
    <form id="quote-request" onSubmit={handleSubmit} className="card scroll-mt-28">
      <p className="eyebrow">Business quote</p>
      <h2 className="mt-3 text-2xl font-bold text-ink">Plan recurring logistics.</h2>
      <p className="mt-2 text-sm leading-6 text-slate-600">
        Best for brands, sellers, stores, marketplaces, and teams with repeated movement needs.
      </p>

      <div className="mt-6 grid gap-4">
        <label className="label">
          Name
          <input className="field" name="name" value={form.name} onChange={updateField} required />
        </label>
        <label className="label">
          Email
          <input className="field" type="email" name="email" value={form.email} onChange={updateField} required />
        </label>
        <label className="label">
          Business name
          <input className="field" name="businessName" value={form.businessName} onChange={updateField} required />
        </label>
        <label className="label">
          Service type
          <select className="field" name="serviceType" value={form.serviceType} onChange={updateField}>
            <option>Local Delivery</option>
            <option>B2B Freight</option>
            <option>Cold Chain</option>
            <option>Warehousing</option>
            <option>Reverse Logistics</option>
          </select>
        </label>
        <label className="label">
          Monthly shipment volume
          <input className="field" name="monthlyShipments" value={form.monthlyShipments} onChange={updateField} required />
        </label>
        <label className="label">
          Requirement details
          <textarea className="field min-h-28" name="message" value={form.message} onChange={updateField} required />
        </label>
      </div>

      <button type="submit" className="primary-button mt-6 w-full disabled:cursor-not-allowed disabled:opacity-70" disabled={isSubmitting}>
        {isSubmitting ? "Sending..." : "Get Logistics Proposal"}
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
  );
}

export default BusinessQuoteForm;
