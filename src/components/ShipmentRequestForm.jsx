import { useState } from "react";
import { submitForm } from "../lib/api.js";

const initialState = {
  name: "",
  phone: "",
  pickupCity: "",
  dropCity: "",
  goodsType: "",
  weight: "",
  pickupDate: "",
  message: "",
};

function ShipmentRequestForm() {
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
      const result = await submitForm("/api/shipment-request", form);
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
    <form id="shipment-request" onSubmit={handleSubmit} className="card scroll-mt-28">
      <p className="eyebrow">Shipment request</p>
      <h2 className="mt-3 text-2xl font-bold text-ink">Move a package.</h2>
      <p className="mt-2 text-sm leading-6 text-slate-600">
        Share the pickup, drop, package, and timing details for a practical logistics estimate.
      </p>

      <div className="mt-6 grid gap-4">
        <label className="label">
          Name
          <input className="field" name="name" value={form.name} onChange={updateField} required />
        </label>
        <label className="label">
          Phone
          <input className="field" name="phone" value={form.phone} onChange={updateField} required />
        </label>
        <label className="label">
          Pickup city/area
          <input className="field" name="pickupCity" value={form.pickupCity} onChange={updateField} required />
        </label>
        <label className="label">
          Drop city/area
          <input className="field" name="dropCity" value={form.dropCity} onChange={updateField} required />
        </label>
        <label className="label">
          Goods type
          <input className="field" name="goodsType" value={form.goodsType} onChange={updateField} required />
        </label>
        <label className="label">
          Approx weight/volume
          <input className="field" name="weight" value={form.weight} onChange={updateField} required />
        </label>
        <label className="label">
          Pickup date
          <input className="field" type="date" name="pickupDate" value={form.pickupDate} onChange={updateField} required />
        </label>
        <label className="label">
          Notes
          <textarea className="field min-h-28" name="message" value={form.message} onChange={updateField} />
        </label>
      </div>

      <button type="submit" className="primary-button mt-6 w-full disabled:cursor-not-allowed disabled:opacity-70" disabled={isSubmitting}>
        {isSubmitting ? "Sending..." : "Send Shipment Request"}
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

export default ShipmentRequestForm;
