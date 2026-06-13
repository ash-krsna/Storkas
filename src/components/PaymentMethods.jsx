import { paymentMethods } from "../data/features.js";

function PaymentMethods() {
  return (
    <section className="py-16 sm:py-20">
      <div className="section-shell">
        <div className="rounded-[2rem] bg-gradient-to-br from-slate-950 via-slate-900 to-slate-700 p-6 text-white shadow-soft sm:p-8 lg:p-10">
          <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
            <div>
              <p className="text-sm font-semibold uppercase tracking-wide text-sky-200">Accepted Payment Methods</p>
              <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">Payments stay simple in the MVP.</h2>
              <p className="mt-4 max-w-2xl text-slate-300">
                Online payment integration will be added in the next version. Until then, payment methods are displayed as
                supported operating options after a shipment quote is confirmed.
              </p>
            </div>
          </div>
          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {paymentMethods.map((method) => {
              const Icon = method.icon;
              return (
                <div key={method.name} className="flex items-center gap-4 rounded-3xl bg-white/10 p-5 ring-1 ring-white/10">
                  <span className="grid h-12 w-12 place-items-center rounded-2xl bg-white text-ink">
                    <Icon className="h-6 w-6" />
                  </span>
                  <span className="font-bold">{method.name}</span>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

export default PaymentMethods;
