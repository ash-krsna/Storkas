import { Check } from "lucide-react";
import { pricingPlans } from "../data/pricing.js";

function Pricing() {
  return (
    <section id="pricing" className="bg-white py-16 sm:py-20">
      <div className="section-shell">
        <div className="mx-auto max-w-3xl text-center">
          <p className="eyebrow">Pricing</p>
          <h2 className="section-title">Clear starting points for logistics planning.</h2>
          <p className="section-copy mx-auto">
            Pricing depends on distance, package type, weight, handling needs, and route availability. These plans give
            customers a simple way to start the conversation.
          </p>
        </div>

        <div className="mt-10 grid gap-6 lg:grid-cols-3">
          {pricingPlans.map((plan) => (
            <article
              key={plan.name}
              className={`rounded-3xl border p-6 shadow-soft ${
                plan.featured
                  ? "border-harbor bg-gradient-to-br from-harbor/10 via-white to-sage/12"
                  : "border-slate-100 bg-white"
              }`}
            >
              {plan.featured && (
                <span className="rounded-full bg-ink px-3 py-1 text-xs font-bold uppercase text-white">Most useful</span>
              )}
              <h3 className="mt-5 text-2xl font-bold text-ink">{plan.name}</h3>
              <p className="mt-3 text-sm leading-6 text-slate-600">{plan.description}</p>
              <p className="mt-6 text-4xl font-extrabold text-ink">{plan.price}</p>
              <ul className="mt-6 space-y-3">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-center gap-3 text-sm font-semibold text-slate-700">
                    <span className="grid h-6 w-6 place-items-center rounded-full bg-fog text-harbor">
                      <Check className="h-4 w-4" />
                    </span>
                    {feature}
                  </li>
                ))}
              </ul>
              <a href="#quote-request" className="primary-button mt-8 w-full">
                Request This Plan
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Pricing;
