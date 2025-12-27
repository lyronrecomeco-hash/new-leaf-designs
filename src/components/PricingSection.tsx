import { Check, Flame, Briefcase, Crown, Infinity } from "lucide-react";
import { Button } from "@/components/ui/button";

const PricingSection = () => {
  return (
    <section id="planos" className="bg-gradient-section parchment-texture py-12 sm:py-16 lg:py-24">
      <div className="container px-4 sm:px-6">
        <div className="text-center mb-4 sm:mb-6">
          <span className="inline-block bg-destructive/10 text-destructive font-bold text-xs sm:text-sm px-4 sm:px-6 py-1.5 sm:py-2 rounded-full mb-3 sm:mb-4 animate-pulse">
            OFERTA DISPONÍVEL SOMENTE HOJE!
          </span>
          <h2 className="font-display text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl text-foreground px-2">
            Escolha seu <span className="text-gradient-gold">pacote ideal</span>:
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 max-w-5xl mx-auto mt-8 sm:mt-12">
          {/* Basic Package */}
          <div className="bg-card/80 backdrop-blur-sm rounded-2xl sm:rounded-3xl p-5 sm:p-6 lg:p-8 shadow-medieval border border-primary/10 hover:shadow-soft transition-all duration-300 animate-scale-in">
            <div className="flex items-center gap-2 sm:gap-3 mb-4 sm:mb-6">
              <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-lg sm:rounded-xl bg-secondary/10 flex items-center justify-center">
                <Briefcase className="h-5 w-5 sm:h-6 sm:w-6 text-secondary" />
              </div>
              <h3 className="font-display text-lg sm:text-xl lg:text-2xl font-bold text-foreground">
                Pacote Básico
              </h3>
            </div>

            <div className="mb-4 sm:mb-6">
              <img
                src="https://i.imgur.com/LpDyWbo.png"
                alt="Pacote Básico"
                className="w-full h-28 sm:h-36 lg:h-40 object-contain"
              />
            </div>

            <ul className="space-y-2 sm:space-y-3 mb-6 sm:mb-8">
              {[
                "Combo +300 atividades caligrafia",
                "Módulo de coordenação motora",
                "Módulo de alfabeto cursivo",
                "Módulo de lettering",
              ].map((item, i) => (
                <li key={i} className="flex items-center gap-2 sm:gap-3">
                  <Check className="h-4 w-4 sm:h-5 sm:w-5 text-primary flex-shrink-0" />
                  <span className="text-sm sm:text-base text-muted-foreground">{item}</span>
                </li>
              ))}
            </ul>

            <div className="mb-4 sm:mb-6">
              <span className="text-muted-foreground line-through text-sm sm:text-lg">De R$97</span>
              <div className="flex items-baseline gap-2">
                <span className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground">R$27</span>
              </div>
              <span className="text-xs sm:text-sm text-muted-foreground">Oferta disponível somente hoje</span>
            </div>

            <Button variant="outline" size="lg" className="w-full text-sm sm:text-base" asChild>
              <a href="https://pay.cakto.com.br/wv3dubw?utm_source=organic">
                EU QUERO O PACOTE BÁSICO
              </a>
            </Button>

            <div className="mt-3 sm:mt-4 flex justify-center">
              <img
                src="https://i.imgur.com/LbES88D.png"
                alt="Pagamento seguro"
                className="h-8 sm:h-10 object-contain opacity-70"
              />
            </div>
          </div>

          {/* Premium Package */}
          <div className="relative bg-card/80 backdrop-blur-sm rounded-2xl sm:rounded-3xl p-5 sm:p-6 lg:p-8 shadow-medieval border-2 border-primary animate-scale-in delay-100">
            <div className="absolute -top-3 sm:-top-4 left-1/2 -translate-x-1/2">
              <span className="inline-flex items-center gap-1 sm:gap-1.5 bg-gradient-gold text-primary-foreground font-bold text-xs sm:text-sm px-3 sm:px-4 py-1 sm:py-1.5 rounded-full shadow-glow">
                <Flame className="h-3 w-3 sm:h-4 sm:w-4" />
                MAIS VENDIDO
              </span>
            </div>

            <div className="flex items-center gap-2 sm:gap-3 mb-4 sm:mb-6 mt-2">
              <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-lg sm:rounded-xl bg-primary/10 flex items-center justify-center">
                <Crown className="h-5 w-5 sm:h-6 sm:w-6 text-primary" />
              </div>
              <h3 className="font-display text-lg sm:text-xl lg:text-2xl font-bold text-foreground">
                Pacote Premium
              </h3>
            </div>

            <div className="mb-4 sm:mb-6">
              <img
                src="https://i.imgur.com/LpDyWbo.png"
                alt="Pacote Premium"
                className="w-full h-28 sm:h-36 lg:h-40 object-contain"
              />
            </div>

            <ul className="space-y-2 sm:space-y-3 mb-4 sm:mb-6">
              {[
                { text: "Tudo do pacote básico", bold: true },
                { text: "+250 exercícios caligrafia bônus" },
                { text: "Mega pack atividades infantis (+350 páginas)" },
                { text: "Apostila reforço para crianças" },
                { text: "Alfabeto letra de forma" },
                { text: "Alfabeto letra itálico" },
                { text: "Alfabeto letra medieval" },
                { text: "Alfabeto letra jutai côrte + vídeo" },
              ].map((item, i) => (
                <li key={i} className="flex items-center gap-2 sm:gap-3">
                  <Check className="h-4 w-4 sm:h-5 sm:w-5 text-primary flex-shrink-0" />
                  <span className={`text-sm sm:text-base ${item.bold ? "font-semibold text-foreground" : "text-muted-foreground"}`}>
                    {item.text}
                  </span>
                </li>
              ))}
            </ul>

            <div className="bg-primary/5 rounded-lg sm:rounded-xl p-3 sm:p-4 mb-4 sm:mb-6 border border-primary/10">
              <div className="flex items-center gap-2 text-primary font-semibold mb-1 text-sm sm:text-base">
                <Infinity className="h-4 w-4 sm:h-5 sm:w-5" />
                <span>Bônus Exclusivo!</span>
              </div>
              <p className="text-xs sm:text-sm text-muted-foreground">
                Acesso vitalício! + Atualizações mensais
              </p>
            </div>

            <div className="mb-4 sm:mb-6">
              <span className="text-muted-foreground line-through text-sm sm:text-lg">De R$137</span>
              <div className="flex items-baseline gap-2">
                <span className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-gradient-gold">R$37</span>
              </div>
              <span className="text-xs sm:text-sm text-muted-foreground">Oferta disponível somente hoje</span>
            </div>

            <Button variant="gold" size="lg" className="w-full text-sm sm:text-base" asChild>
              <a href="https://pay.cakto.com.br/3cw8q38?utm_source=organic">
                QUERO O PACOTE PREMIUM AGORA
              </a>
            </Button>

            <div className="mt-3 sm:mt-4 flex justify-center">
              <img
                src="https://i.imgur.com/LbES88D.png"
                alt="Pagamento seguro"
                className="h-8 sm:h-10 object-contain opacity-70"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
