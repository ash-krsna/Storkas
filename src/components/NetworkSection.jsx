import { logisticsFeatures } from "../data/features.js";

function NetworkSection() {
  return (
    <section id="network" className="bg-white py-16 sm:py-20">
      <div className="section-shell">
        <div className="grid gap-8 lg:grid-cols-[0.85fr_1.15fr] lg:items-end">
          <div>
            <p className="eyebrow">Logistics network</p>
            <h2 className="section-title">A practical operating layer for moving goods.</h2>
            <p className="section-copy">
              Storkas connects shipment requests, route planning, partner coordination, warehousing, and delivery support
              into one simple front-end experience ready for MVP validation.
            </p>
          </div>
          <div className="rounded-3xl bg-gradient-to-br from-harbor/10 via-white to-sage/12 p-6">
            <p className="text-xl font-bold text-ink">Built for local sellers, growing brands, and service partners.</p>
            <p className="mt-2 text-slate-600">
              The first version focuses on clean request intake and clear operations. Payments, live tracking, and partner
              dashboards can be added in later releases.
            </p>
          </div>
        </div>

        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {logisticsFeatures.map((feature) => {
            const Icon = feature.icon;
            return (
              <article key={feature.title} className="card transition hover:-translate-y-1">
                <div className="grid h-12 w-12 place-items-center rounded-2xl bg-harbor/10 text-harbor">
                  <Icon className="h-6 w-6" />
                </div>
                <h3 className="mt-5 text-lg font-bold text-ink">{feature.title}</h3>
                <p className="mt-3 text-sm leading-6 text-slate-600">{feature.description}</p>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default NetworkSection;
