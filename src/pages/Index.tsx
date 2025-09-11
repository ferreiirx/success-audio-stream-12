import { HeroSection } from "@/components/sections/HeroSection";
import { BenefitsSection } from "@/components/sections/BenefitsSection";
import { PricingSection } from "@/components/sections/PricingSection";
import { GuaranteeSection } from "@/components/sections/GuaranteeSection";
import { TestimonialsSection } from "@/components/sections/TestimonialsSection";
import { ValuePropositionSection } from "@/components/sections/ValuePropositionSection";
import { FinalCTASection } from "@/components/sections/FinalCTASection";
import { FAQSection } from "@/components/sections/FAQSection";
import { Footer } from "@/components/sections/Footer";
import { useEffect } from "react";

const Index = () => {
  useEffect(() => {
    // Set page title and meta description for SEO
    document.title = "Desvende Seu Potencial - 200 Audiobooks Best-Sellers por R$ 9,90";
    
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Transforme sua vida com 200 audiobooks best-sellers. Desenvolvimento pessoal, finanças e empreendedorismo. Acesso vitalício por apenas R$ 19,90. Comece hoje!');
    }
  }, []);

  return (
    <main className="min-h-screen">
      <HeroSection />
      <BenefitsSection />
      <ValuePropositionSection />
      <TestimonialsSection />
      <PricingSection />
      <GuaranteeSection />
      <FinalCTASection />
      <FAQSection />
      <Footer />
    </main>
  );
};

export default Index;
