import { Gift, Sparkles } from "lucide-react";

const PromoBanner = () => {
  return (
    <div className="bg-gradient-dark py-2.5 sm:py-3 px-3 sm:px-4">
      <div className="container flex items-center justify-center gap-2 sm:gap-3 text-center">
        <Sparkles className="h-3.5 w-3.5 sm:h-4 sm:w-4 text-gold-400 animate-pulse flex-shrink-0" />
        <p className="text-secondary-foreground font-medium text-xs sm:text-sm md:text-base">
          <span className="hidden xs:inline">PROMOÇÃO NATAL ABENÇOADO!! </span>
          <span className="xs:hidden">NATAL ABENÇOADO! </span>
          <span className="text-gold-400 font-bold">70% OFF APENAS HOJE</span>
        </p>
        <Gift className="h-3.5 w-3.5 sm:h-4 sm:w-4 text-gold-400 animate-pulse flex-shrink-0" />
      </div>
    </div>
  );
};

export default PromoBanner;
