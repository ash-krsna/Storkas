import { trustCards } from "../data/features.js";

function TrustSection() {
  return (
    <section className="py-16 sm:py-20">
      <div className="section-shell">
        <div className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr] lg:items-center">
          <div>
            <p className="eyebrow">Trust</p>
            <h2 className="section-title">A logistics brand should feel quiet, exact, and accountable.</h2>
            <p className="section-copy">
              Storkas uses calm design, clear forms, grounded service language, and operationally useful sections so the MVP
              feels trustworthy before backend automation is added.
            </p>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            {trustCards.map((card) => {
              const Icon = card.icon;
              return (
                <div key={card.title} className="rounded-3xl border border-white bg-white p-5 shadow-sm">
                  <Icon className="h-6 w-6 text-harbor" />
                  <h3 className="mt-4 font-bold text-ink">{card.title}</h3>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

export default TrustSection;
