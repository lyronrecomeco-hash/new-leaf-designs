import { Gift, Sparkles } from "lucide-react";

const PromoBanner = () => {
  return (
    <div className="bg-gradient-dark py-3 px-4">
      <div className="container flex items-center justify-center gap-3 text-center">
        <Sparkles className="h-4 w-4 text-gold-400 animate-pulse hidden sm:block" />
        <p className="text-secondary-foreground font-medium text-sm sm:text-base">
          PROMOÇÃO NATAL ABENÇOADO!! 
          <span className="ml-2 text-gold-400 font-bold">70% OFF APENAS HOJE</span>
        </p>
        <Gift className="h-4 w-4 text-gold-400 animate-pulse hidden sm:block" />
      </div>
    </div>
  );
};

export default PromoBanner;
