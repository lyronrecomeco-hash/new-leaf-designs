import { Helmet } from "react-helmet-async";
import PromoBanner from "@/components/PromoBanner";
import HeroSection from "@/components/HeroSection";
import BenefitsSection from "@/components/BenefitsSection";
import ChildrenSection from "@/components/ChildrenSection";
import ExercisesSection from "@/components/ExercisesSection";
import ContentSection from "@/components/ContentSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import HowItWorksSection from "@/components/HowItWorksSection";
import PricingSection from "@/components/PricingSection";
import GuaranteeSection from "@/components/GuaranteeSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <>
      <Helmet>
        <title>Caligrafia Bíblica - Transforme Sua Caligrafia em 7 Dias</title>
        <meta
          name="description"
          content="Aprenda caligrafia com o Método Caligra Bíblica. +300 exercícios para melhorar sua escrita em apenas 7 dias. Ideal para adultos e crianças."
        />
        <meta name="keywords" content="caligrafia, caligrafia bíblica, escrita bonita, lettering, coordenação motora" />
      </Helmet>

      <main className="min-h-screen">
        <PromoBanner />
        <HeroSection />
        <BenefitsSection />
        <ChildrenSection />
        <ExercisesSection />
        <ContentSection />
        <TestimonialsSection />
        <HowItWorksSection />
        <PricingSection />
        <GuaranteeSection />
        <Footer />
      </main>
    </>
  );
};

export default Index;
