import { useState } from "react";

const initialState = {
  partnerName: "",
  phone: "",
  baseLocation: "",
  partnerType: "Delivery Partner",
  fleetSize: "",
  coverage: "",
  compliance: "GST Available",
  message: "",
};

function PartnerApplicationForm() {
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
    <form onSubmit={handleSubmit} className="card">
      <p className="eyebrow">Partner onboarding</p>
      <h2 className="mt-3 text-2xl font-bold text-ink">Join the network.</h2>
      <p className="mt-2 text-sm leading-6 text-slate-600">
        For delivery partners, fleet owners, warehouse operators, and local coordinators.
      </p>

      <div className="mt-6 grid gap-4">
        <label className="label">
          Partner name
          <input className="field" name="partnerName" value={form.partnerName} onChange={updateField} required />
        </label>
        <label className="label">
          Phone
          <input className="field" name="phone" value={form.phone} onChange={updateField} required />
        </label>
        <label className="label">
          Base location
          <input className="field" name="baseLocation" value={form.baseLocation} onChange={updateField} required />
        </label>
        <label className="label">
          Partner type
          <select className="field" name="partnerType" value={form.partnerType} onChange={updateField}>
            <option>Delivery Partner</option>
            <option>Fleet Owner</option>
            <option>Warehouse Partner</option>
            <option>Cold-chain Partner</option>
            <option>Operations Coordinator</option>
          </select>
        </label>
        <label className="label">
          Fleet/space capacity
          <input className="field" name="fleetSize" value={form.fleetSize} onChange={updateField} required />
        </label>
        <label className="label">
          Coverage area
          <input className="field" name="coverage" value={form.coverage} onChange={updateField} required />
        </label>
        <label className="label">
          Compliance status
          <select className="field" name="compliance" value={form.compliance} onChange={updateField}>
            <option>GST Available</option>
            <option>Vehicle Documents Available</option>
            <option>Warehouse Documents Available</option>
            <option>Needs Assistance</option>
          </select>
        </label>
        <label className="label">
          Message
          <textarea className="field min-h-28" name="message" value={form.message} onChange={updateField} />
        </label>
      </div>

      <button type="submit" className="primary-button mt-6 w-full">
        Apply as Partner
      </button>
      {success && (
        <p className="mt-4 rounded-2xl bg-teal-50 px-4 py-3 text-sm font-semibold text-teal-800">
          Your partner application has been received.
        </p>
      )}
    </form>
  );
}

export default PartnerApplicationForm;
