import { ArrowRight, CheckCircle2, Clock3, MapPinned, PackageCheck, Route, Truck } from "lucide-react";
import logo from "../assets/storkas-stork-logo.png";
import { logisticsStats } from "../data/features.js";

function Hero() {
  return (
    <section id="home" className="relative py-16 sm:py-20 lg:py-24">
      <div className="section-shell grid items-center gap-12 lg:grid-cols-[1.02fr_0.98fr]">
        <div>
          <div className="inline-flex items-center gap-2 rounded-full border border-harbor/20 bg-white/80 px-4 py-2 text-sm font-semibold text-harbor shadow-sm">
            <CheckCircle2 className="h-4 w-4" />
            Backend-ready logistics MVP for local commerce.
          </div>
          <h1 className="mt-6 max-w-4xl text-4xl font-extrabold tracking-tight text-ink sm:text-6xl lg:text-7xl">
            Move goods with calm precision.
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-600">
            Storkas is a logistics coordination platform for pickups, delivery routes, B2B freight, warehousing, and
            partner-led operations. Built for Indian businesses that need movement to feel dependable.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <a href="#quote-request" className="primary-button">
              Get a Logistics Quote <ArrowRight className="h-4 w-4" />
            </a>
            <a href="#services" className="secondary-button">
              Explore Services
            </a>
          </div>

          <div className="mt-8 grid gap-3 text-sm font-semibold text-slate-600 sm:grid-cols-2">
            <span className="inline-flex items-center gap-2">
              <Truck className="h-5 w-5 text-harbor" /> Local delivery and B2B movement.
            </span>
            <span className="inline-flex items-center gap-2">
              <PackageCheck className="h-5 w-5 text-sage" /> API-backed requests for dispatch and fulfillment.
            </span>
          </div>
        </div>

        <div className="relative">
          <div className="absolute -left-4 -top-6 h-28 w-28 rounded-full bg-sage/20 blur-2xl" />
          <div className="absolute -bottom-6 -right-6 h-40 w-40 rounded-full bg-harbor/15 blur-2xl" />
          <div className="relative rounded-[2rem] border border-white bg-white/85 p-4 shadow-soft backdrop-blur">
            <div className="overflow-hidden rounded-[1.5rem] bg-gradient-to-br from-slate-950 via-slate-800 to-slate-700 p-5 text-white">
              <div className="flex items-start justify-between gap-4">
                <div>
                  <p className="text-sm font-semibold text-sky-200">Storkas control view</p>
                  <h2 className="mt-1 text-2xl font-bold">Pickup to delivery, mapped clearly.</h2>
                </div>
                <span className="grid h-16 w-16 shrink-0 place-items-center rounded-3xl bg-white">
                  <img src={logo} alt="" className="h-14 w-14 object-contain" />
                </span>
              </div>

              <div className="mt-8 grid gap-4">
                {[
                  { title: "Pickup verified", text: "Address, contact, package, and time window", icon: MapPinned },
                  { title: "Route assigned", text: "Partner and route selected for the shipment", icon: Route },
                  { title: "In movement", text: "Business receives clear operating updates", icon: Truck },
                  { title: "Proof complete", text: "Delivery confirmation closes the loop", icon: Clock3 },
                ].map((item, index) => {
                  const Icon = item.icon;
                  return (
                    <div key={item.title} className="flex items-center gap-4 rounded-3xl bg-white/10 p-4 ring-1 ring-white/10">
                      <span className="grid h-11 w-11 shrink-0 place-items-center rounded-2xl bg-white text-ink">
                        <Icon className="h-5 w-5" />
                      </span>
                      <div>
                        <p className="text-xs font-bold uppercase text-sky-200">Stage {index + 1}</p>
                        <p className="font-semibold">{item.title}</p>
                        <p className="text-sm text-slate-300">{item.text}</p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>

          <div className="mt-5 grid gap-3 sm:grid-cols-2">
            {logisticsStats.map((stat) => {
              const Icon = stat.icon;
              return (
                <div key={stat.label} className="rounded-3xl border border-white bg-white/85 p-4 shadow-sm">
                  <Icon className="h-5 w-5 text-harbor" />
                  <p className="mt-3 text-xl font-extrabold text-ink">{stat.value}</p>
                  <p className="text-sm font-semibold text-slate-500">{stat.label}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
