import { useState } from "react";

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

      <button type="submit" className="primary-button mt-6 w-full">
        Send Shipment Request
      </button>
      {success && (
        <p className="mt-4 rounded-2xl bg-teal-50 px-4 py-3 text-sm font-semibold text-teal-800">
          Your shipment request has been received. Storkas will contact you soon.
        </p>
      )}
    </form>
  );
}

export default ShipmentRequestForm;
