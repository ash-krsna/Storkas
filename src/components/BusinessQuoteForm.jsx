import { useState } from "react";

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
  const [success, setSuccess] = useState(false);

  const updateField = (event) => {
    setForm({ ...form, [event.target.name]: event.target.value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setSuccess(true);
    setForm(initialState);
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

      <button type="submit" className="primary-button mt-6 w-full">
        Get Logistics Proposal
      </button>
      {success && (
        <p className="mt-4 rounded-2xl bg-teal-50 px-4 py-3 text-sm font-semibold text-teal-800">
          Your logistics proposal request has been received.
        </p>
      )}
    </form>
  );
}

export default BusinessQuoteForm;
