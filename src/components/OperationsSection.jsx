import { operationsFeatures } from "../data/features.js";

function OperationsSection() {
  return (
    <section id="operations" className="py-16 sm:py-20">
      <div className="section-shell">
        <div className="grid gap-10 lg:grid-cols-[1fr_1fr] lg:items-center">
          <div className="relative overflow-hidden rounded-[2rem] bg-slate-950 shadow-soft">
            <img
              src="https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=1200&q=80"
              alt="Logistics warehouse with parcels prepared for dispatch"
              className="h-[420px] w-full object-cover opacity-80"
            />
            <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-slate-950 via-slate-950/70 to-transparent p-7 text-white">
              <p className="text-sm font-semibold text-sky-200">Storkas Operations</p>
              <h2 className="mt-2 text-3xl font-bold">From pickup request to completed delivery.</h2>
            </div>
          </div>

          <div>
            <p className="eyebrow">Operations</p>
            <h2 className="section-title">Soothing for customers. Structured for operators.</h2>
            <p className="section-copy">
              Good logistics is not loud. It is accurate intake, visible next steps, realistic promises, and disciplined
              partner coordination. Storkas is designed around that operating truth.
            </p>
            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              {operationsFeatures.map((feature) => {
                const Icon = feature.icon;
                return (
                  <article key={feature.title} className="rounded-3xl border border-slate-100 bg-white p-5 shadow-sm">
                    <Icon className="h-6 w-6 text-sage" />
                    <h3 className="mt-4 font-bold text-ink">{feature.title}</h3>
                    <p className="mt-2 text-sm leading-6 text-slate-600">{feature.description}</p>
                  </article>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default OperationsSection;
