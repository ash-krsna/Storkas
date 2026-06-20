const footerLinks = {
  Storkas: ["Home", "Trust", "How it works"],
  Network: ["Route planning", "Partner coordination", "Reverse logistics"],
  Services: ["Express", "Freight", "Cold chain", "Warehousing"],
  Partners: ["Fleet owners", "Delivery teams", "Warehouse operators"],
  Contact: ["hello@storkas.com", "Phone support launching soon", "India"],
};

function Footer() {
  return (
    <footer className="bg-slate-950 py-12 text-white">
      <div className="section-shell">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-5">
          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title}>
              <h3 className="font-bold">{title}</h3>
              <ul className="mt-4 space-y-3 text-sm text-slate-300">
                {links.map((link) => (
                  <li key={link}>{link}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="mt-10 border-t border-white/10 pt-6 text-sm text-slate-400">
          Copyright 2026 Storkas. Built for logistics, local commerce, partners, and future movement.
        </div>
      </div>
    </footer>
  );
}

export default Footer;
