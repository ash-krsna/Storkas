import { ArrowRight } from "lucide-react";

const customerSteps = [
  "Submit shipment or business quote request",
  "Storkas verifies pickup, drop, and handling details",
  "Best route or partner option is matched",
  "Pickup and movement are coordinated",
  "Delivery closes with confirmation",
];

const partnerSteps = [
  "Partner applies with service capacity",
  "Coverage and compliance details are reviewed",
  "Suitable shipment categories are mapped",
  "Storkas coordinates jobs and communication",
  "Performance history improves future allocation",
];

function StepList({ title, steps, accent }) {
  return (
    <div className="card">
      <h3 className="text-2xl font-bold text-ink">{title}</h3>
      <div className="mt-6 space-y-4">
        {steps.map((step, index) => (
          <div key={step} className="flex gap-4">
            <span className={`grid h-9 w-9 shrink-0 place-items-center rounded-full text-sm font-extrabold text-white ${accent}`}>
              {index + 1}
            </span>
            <div className="flex flex-1 items-center justify-between gap-3 rounded-2xl bg-slate-50 px-4 py-3">
              <span className="font-semibold text-slate-700">{step}</span>
              {index < steps.length - 1 && <ArrowRight className="hidden h-4 w-4 text-slate-400 sm:block" />}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function HowItWorks() {
  return (
    <section className="bg-white py-16 sm:py-20">
      <div className="section-shell">
        <div className="mx-auto max-w-3xl text-center">
          <p className="eyebrow">How it works</p>
          <h2 className="section-title">Simple intake. Controlled coordination. Clear outcomes.</h2>
        </div>
        <div className="mt-10 grid gap-6 lg:grid-cols-2">
          <StepList title="For Customers and Businesses" steps={customerSteps} accent="bg-harbor" />
          <StepList title="For Logistics Partners" steps={partnerSteps} accent="bg-sage" />
        </div>
      </div>
    </section>
  );
}

export default HowItWorks;
