import { Check, ScrollText } from "lucide-react";
import { Button } from "@/components/ui/button";

const HeroSection = () => {
  const features = [
    "+300 exercícios para melhorar sua escrita",
    "Resultados visíveis em 7 dias",
    "Método prático e divertido",
  ];

  return (
    <section className="bg-gradient-hero parchment-texture py-12 sm:py-16 lg:py-24 overflow-hidden">
      <div className="container px-4 sm:px-6">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center">
          {/* Left Content */}
          <div className="animate-fade-in text-center lg:text-left">
            <div className="flex items-center justify-center lg:justify-start gap-2 mb-3">
              <ScrollText className="h-5 w-5 sm:h-6 sm:w-6 text-primary" />
              <span className="font-uncial text-xl sm:text-2xl lg:text-3xl text-primary">
                Caligrafia Bíblica
              </span>
            </div>
            <h1 className="font-display text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-foreground leading-tight mb-4 sm:mb-6">
              TRANSFORME SUA{" "}
              <span className="text-gradient-gold">CALIGRAFIA</span>{" "}
              EM 7 DIAS!
            </h1>
            <p className="text-base sm:text-lg lg:text-xl text-muted-foreground mb-6 sm:mb-8 leading-relaxed max-w-xl mx-auto lg:mx-0">
              Se você quer ter uma letra <strong className="text-foreground">bonita</strong> e{" "}
              <strong className="text-foreground">redondinha</strong>, escrever com mais{" "}
              <strong className="text-foreground">agilidade</strong> e{" "}
              <strong className="text-foreground">traços firmes</strong>, o Método Caligra Bíblica é pra você! 
              Serve para adultos e crianças.
            </p>

            {/* Features */}
            <div className="bg-card/80 backdrop-blur-sm rounded-xl sm:rounded-2xl p-4 sm:p-6 shadow-medieval border border-primary/10 mb-6 sm:mb-8">
              <div className="flex flex-col sm:flex-row sm:justify-between gap-3 sm:gap-4">
                {features.map((feature, index) => (
                  <div
                    key={index}
                    className="flex items-center sm:items-start gap-3 animate-slide-up"
                    style={{ animationDelay: `${index * 100}ms` }}
                  >
                    <div className="flex-shrink-0 w-5 h-5 sm:w-6 sm:h-6 rounded-full bg-primary/15 flex items-center justify-center">
                      <Check className="h-3 w-3 sm:h-4 sm:w-4 text-primary" />
                    </div>
                    <span className="text-sm font-medium text-foreground">{feature}</span>
                  </div>
                ))}
              </div>
            </div>

            <Button variant="gold" size="xl" className="w-full sm:w-auto text-sm sm:text-base" asChild>
              <a href="#planos">QUERO MELHORAR MINHA LETRA AGORA</a>
            </Button>
          </div>

          {/* Right Content - Before/After */}
          <div className="animate-slide-up delay-200">
            <div className="bg-card/90 backdrop-blur-sm rounded-2xl sm:rounded-3xl p-4 sm:p-6 lg:p-8 shadow-medieval border border-primary/10">
              <h3 className="font-display text-lg sm:text-xl lg:text-2xl text-center text-foreground mb-4 sm:mb-6">
                Esse é o resultado de uma de nossas alunas em apenas{" "}
                <span className="text-gradient-gold font-bold">7 DIAS</span>:
              </h3>
              
              <div className="grid grid-cols-2 gap-3 sm:gap-4">
                <div className="text-center">
                  <span className="inline-block bg-destructive/10 text-destructive font-bold text-xs sm:text-sm px-3 sm:px-4 py-1 sm:py-1.5 rounded-full mb-2 sm:mb-3">
                    ANTES
                  </span>
                  <div className="rounded-xl sm:rounded-2xl overflow-hidden border-2 border-destructive/20 shadow-sm">
                    <img
                      src="https://cdn.xquiz.co/images/5f8da06f-b89b-4e3d-b73e-c121aa502ae6"
                      alt="Antes da Caligra Fácil"
                      className="w-full h-36 sm:h-48 lg:h-56 object-cover"
                    />
                  </div>
                </div>
                <div className="text-center">
                  <span className="inline-block bg-primary/15 text-primary font-bold text-xs sm:text-sm px-3 sm:px-4 py-1 sm:py-1.5 rounded-full mb-2 sm:mb-3">
                    DEPOIS
                  </span>
                  <div className="rounded-xl sm:rounded-2xl overflow-hidden border-2 border-primary/20 shadow-soft">
                    <img
                      src="https://cdn.xquiz.co/images/fb05578a-60d6-4078-9db6-57a781422384"
                      alt="Depois da Caligra Fácil"
                      className="w-full h-36 sm:h-48 lg:h-56 object-cover"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
