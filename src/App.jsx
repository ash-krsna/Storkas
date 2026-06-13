import { useState } from "react";
import BusinessQuoteForm from "./components/BusinessQuoteForm.jsx";
import Contact from "./components/Contact.jsx";
import Footer from "./components/Footer.jsx";
import Header from "./components/Header.jsx";
import Hero from "./components/Hero.jsx";
import HowItWorks from "./components/HowItWorks.jsx";
import NetworkSection from "./components/NetworkSection.jsx";
import OperationsSection from "./components/OperationsSection.jsx";
import PartnerApplicationForm from "./components/PartnerApplicationForm.jsx";
import PaymentMethods from "./components/PaymentMethods.jsx";
import Pricing from "./components/Pricing.jsx";
import ServicesSection from "./components/ServicesSection.jsx";
import ShipmentRequestForm from "./components/ShipmentRequestForm.jsx";
import TrustSection from "./components/TrustSection.jsx";

function App() {
  const [quoteCount, setQuoteCount] = useState(0);

  const handleAddToQuote = () => {
    setQuoteCount((count) => count + 1);
  };

  return (
    <div className="min-h-screen overflow-hidden bg-[radial-gradient(circle_at_top_left,_rgba(64,112,128,0.14),_transparent_30%),linear-gradient(180deg,#f7fbfb_0%,#eef6f4_46%,#f9fbfa_100%)] text-ink">
      <Header quoteCount={quoteCount} />
      <main>
        <Hero />
        <NetworkSection />
        <OperationsSection />
        <ServicesSection onAddToQuote={handleAddToQuote} quoteCount={quoteCount} />
        <section className="py-12 sm:py-16" id="requests">
          <div className="section-shell grid gap-6 lg:grid-cols-3">
            <ShipmentRequestForm />
            <PartnerApplicationForm />
            <BusinessQuoteForm />
          </div>
        </section>
        <Pricing />
        <PaymentMethods />
        <HowItWorks />
        <TrustSection />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
