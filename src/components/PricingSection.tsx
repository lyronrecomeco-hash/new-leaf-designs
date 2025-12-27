import { Check, Flame, Briefcase, Crown, Infinity } from "lucide-react";
import { Button } from "@/components/ui/button";

const PricingSection = () => {
  return (
    <section id="planos" className="bg-gradient-section py-16 lg:py-24">
      <div className="container">
        <div className="text-center mb-6">
          <span className="inline-block bg-destructive/10 text-destructive font-bold text-sm px-6 py-2 rounded-full mb-4 animate-pulse">
            OFERTA DISPONÍVEL SOMENTE HOJE!
          </span>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl text-primary">
            Escolha seu <span className="text-gradient-gold">pacote ideal</span>:
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 max-w-5xl mx-auto mt-12">
          {/* Basic Package */}
          <div className="bg-card rounded-3xl p-8 shadow-card hover:shadow-soft transition-all duration-300 animate-scale-in">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-xl bg-secondary/10 flex items-center justify-center">
                <Briefcase className="h-6 w-6 text-secondary" />
              </div>
              <h3 className="font-display text-2xl font-bold text-foreground">
                Pacote Básico
              </h3>
            </div>

            <div className="mb-6">
              <img
                src="https://i.imgur.com/LpDyWbo.png"
                alt="Pacote Básico"
                className="w-full h-40 object-contain"
              />
            </div>

            <ul className="space-y-3 mb-8">
              {[
                "Combo +300 atividades caligrafia",
                "Módulo de coordenação motora",
                "Módulo de alfabeto cursivo",
                "Módulo de lettering",
              ].map((item, i) => (
                <li key={i} className="flex items-center gap-3">
                  <Check className="h-5 w-5 text-primary flex-shrink-0" />
                  <span className="text-muted-foreground">{item}</span>
                </li>
              ))}
            </ul>

            <div className="mb-6">
              <span className="text-muted-foreground line-through text-lg">De R$97</span>
              <div className="flex items-baseline gap-2">
                <span className="font-display text-5xl font-bold text-foreground">R$27</span>
              </div>
              <span className="text-sm text-muted-foreground">Oferta disponível somente hoje</span>
            </div>

            <Button variant="outline" size="lg" className="w-full" asChild>
              <a href="https://pay.cakto.com.br/wv3dubw?utm_source=organic">
                EU QUERO O PACOTE BÁSICO
              </a>
            </Button>

            <div className="mt-4 flex justify-center">
              <img
                src="https://i.imgur.com/LbES88D.png"
                alt="Pagamento seguro"
                className="h-10 object-contain opacity-70"
              />
            </div>
          </div>

          {/* Premium Package */}
          <div className="relative bg-card rounded-3xl p-8 shadow-card border-2 border-primary animate-scale-in delay-100">
            <div className="absolute -top-4 left-1/2 -translate-x-1/2">
              <span className="inline-flex items-center gap-1.5 bg-gradient-gold text-primary-foreground font-bold text-sm px-4 py-1.5 rounded-full shadow-glow">
                <Flame className="h-4 w-4" />
                MAIS VENDIDO
              </span>
            </div>

            <div className="flex items-center gap-3 mb-6 mt-2">
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                <Crown className="h-6 w-6 text-primary" />
              </div>
              <h3 className="font-display text-2xl font-bold text-foreground">
                Pacote Premium
              </h3>
            </div>

            <div className="mb-6">
              <img
                src="https://i.imgur.com/LpDyWbo.png"
                alt="Pacote Premium"
                className="w-full h-40 object-contain"
              />
            </div>

            <ul className="space-y-3 mb-6">
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
                <li key={i} className="flex items-center gap-3">
                  <Check className="h-5 w-5 text-primary flex-shrink-0" />
                  <span className={item.bold ? "font-semibold text-foreground" : "text-muted-foreground"}>
                    {item.text}
                  </span>
                </li>
              ))}
            </ul>

            <div className="bg-primary/5 rounded-xl p-4 mb-6">
              <div className="flex items-center gap-2 text-primary font-semibold mb-1">
                <Infinity className="h-5 w-5" />
                <span>Bônus Exclusivo!</span>
              </div>
              <p className="text-sm text-muted-foreground">
                Acesso vitalício! + Atualizações mensais
              </p>
            </div>

            <div className="mb-6">
              <span className="text-muted-foreground line-through text-lg">De R$137</span>
              <div className="flex items-baseline gap-2">
                <span className="font-display text-5xl font-bold text-gradient-gold">R$37</span>
              </div>
              <span className="text-sm text-muted-foreground">Oferta disponível somente hoje</span>
            </div>

            <Button variant="gold" size="lg" className="w-full" asChild>
              <a href="https://pay.cakto.com.br/3cw8q38?utm_source=organic">
                QUERO O PACOTE PREMIUM AGORA
              </a>
            </Button>

            <div className="mt-4 flex justify-center">
              <img
                src="https://i.imgur.com/LbES88D.png"
                alt="Pagamento seguro"
                className="h-10 object-contain opacity-70"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
