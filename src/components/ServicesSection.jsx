import { ClipboardPlus, MapPin, MessageCircle, PackageSearch } from "lucide-react";
import { useMemo, useState } from "react";
import { serviceCategories, services } from "../data/products.js";

function ServicesSection({ onAddToQuote, quoteCount }) {
  const [activeCategory, setActiveCategory] = useState("Express");
  const [notice, setNotice] = useState("");

  const filteredServices = useMemo(
    () => services.filter((service) => service.category === activeCategory),
    [activeCategory],
  );

  const handleAdd = (serviceName) => {
    onAddToQuote();
    setNotice(`${serviceName} added to your quote list. Selected services: ${quoteCount + 1}.`);
  };

  const requestCallback = () => {
    document.getElementById("quote-request")?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <section id="services" className="bg-white py-16 sm:py-20">
      <div className="section-shell">
        <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <p className="eyebrow">Service catalog</p>
            <h2 className="section-title">Choose the movement your business needs.</h2>
            <p className="section-copy">
              This MVP service catalog lets customers explore logistics options and build a quote request without requiring
              accounts, payment gateways, or a database.
            </p>
          </div>
          <div className="inline-flex items-center gap-2 rounded-full bg-fog px-4 py-3 text-sm font-bold text-harbor">
            <PackageSearch className="h-5 w-5" /> Quote list: {quoteCount}
          </div>
        </div>

        <div className="mt-8 flex flex-wrap gap-3" aria-label="Service category filters">
          {serviceCategories.map((category) => (
            <button
              key={category}
              type="button"
              onClick={() => setActiveCategory(category)}
              className={`rounded-full px-5 py-3 text-sm font-bold transition ${
                activeCategory === category
                  ? "bg-ink text-white shadow-lg shadow-slate-900/15"
                  : "border border-slate-200 bg-white text-slate-600 hover:border-harbor/40 hover:text-harbor"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {notice && (
          <div className="mt-6 rounded-2xl border border-teal-200 bg-teal-50 px-4 py-3 text-sm font-semibold text-teal-800">
            {notice}
          </div>
        )}

        <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {filteredServices.map((service) => (
            <article key={service.id} className="card overflow-hidden p-0">
              <img src={service.image} alt={service.name} className="h-52 w-full object-cover" />
              <div className="p-5">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <h3 className="text-xl font-bold text-ink">{service.name}</h3>
                    <p className="mt-1 text-sm font-semibold text-slate-500">{service.partner}</p>
                  </div>
                  <div className="rounded-2xl bg-fog px-3 py-2 text-right">
                    <p className="font-extrabold text-harbor">{service.price}</p>
                    <p className="text-xs font-semibold text-slate-500">{service.unit}</p>
                  </div>
                </div>
                <p className="mt-4 flex items-center gap-2 text-sm text-slate-600">
                  <MapPin className="h-4 w-4 text-sage" />
                  {service.location}
                </p>
                <div className="mt-5 grid gap-3 sm:grid-cols-2">
                  <button type="button" onClick={() => handleAdd(service.name)} className="primary-button px-4 py-2.5">
                    <ClipboardPlus className="h-4 w-4" /> Add
                  </button>
                  <button type="button" onClick={requestCallback} className="secondary-button px-4 py-2.5">
                    <MessageCircle className="h-4 w-4" /> Callback
                  </button>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default ServicesSection;
