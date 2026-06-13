import { ClipboardList, Menu, X } from "lucide-react";
import { useState } from "react";
import logo from "../assets/storkas-stork-logo.png";

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "Network", href: "#network" },
  { label: "Operations", href: "#operations" },
  { label: "Services", href: "#services" },
  { label: "Pricing", href: "#pricing" },
  { label: "Contact", href: "#contact" },
];

function Header({ quoteCount }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-slate-200/70 bg-white/88 backdrop-blur-xl">
      <nav className="section-shell flex min-h-20 items-center justify-between gap-4">
        <a href="#home" className="flex items-center gap-3" aria-label="Storkas home">
          <span className="grid h-12 w-12 place-items-center rounded-2xl border border-slate-200 bg-white shadow-sm">
            <img src={logo} alt="" className="h-10 w-10 object-contain" />
          </span>
          <span>
            <span className="block text-xl font-extrabold tracking-tight text-ink">Storkas</span>
            <span className="hidden text-xs font-semibold text-slate-500 sm:block">Logistics that move with precision.</span>
          </span>
        </a>

        <div className="hidden items-center gap-7 lg:flex">
          {navLinks.map((link) => (
            <a key={link.href} href={link.href} className="text-sm font-semibold text-slate-600 transition hover:text-harbor">
              {link.label}
            </a>
          ))}
        </div>

        <div className="hidden items-center gap-3 lg:flex">
          <div
            className="relative rounded-full border border-slate-200 bg-white p-3 text-slate-700"
            aria-label={`${quoteCount} services added to quote`}
          >
            <ClipboardList className="h-5 w-5" />
            <span className="absolute -right-2 -top-2 grid h-6 min-w-6 place-items-center rounded-full bg-harbor px-1 text-xs font-bold text-white">
              {quoteCount}
            </span>
          </div>
          <a href="#quote-request" className="primary-button">
            Get Logistics Quote
          </a>
        </div>

        <button
          type="button"
          className="rounded-2xl border border-slate-200 bg-white p-3 text-ink lg:hidden"
          onClick={() => setIsOpen((open) => !open)}
          aria-label="Toggle navigation"
        >
          {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </nav>

      {isOpen && (
        <div className="border-t border-slate-100 bg-white lg:hidden">
          <div className="section-shell flex flex-col gap-3 py-4">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="rounded-2xl px-3 py-3 text-sm font-semibold text-slate-700 hover:bg-slate-50"
                onClick={() => setIsOpen(false)}
              >
                {link.label}
              </a>
            ))}
            <div className="flex items-center justify-between rounded-2xl bg-slate-50 px-3 py-3 text-sm font-semibold text-slate-700">
              <span className="inline-flex items-center gap-2">
                <ClipboardList className="h-5 w-5" /> Quote list
              </span>
              <span>{quoteCount}</span>
            </div>
            <a href="#quote-request" className="primary-button" onClick={() => setIsOpen(false)}>
              Get Logistics Quote
            </a>
          </div>
        </div>
      )}
    </header>
  );
}

export default Header;
