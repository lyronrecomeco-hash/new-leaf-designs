import { Check } from "lucide-react";
import { Button } from "@/components/ui/button";

const HeroSection = () => {
  const features = [
    "+300 exercícios para melhorar sua escrita",
    "Resultados visíveis em 7 dias",
    "Método prático e divertido",
  ];

  return (
    <section className="bg-gradient-hero py-16 lg:py-24 overflow-hidden">
      <div className="container">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Content */}
          <div className="animate-fade-in">
            <span className="font-display italic text-2xl sm:text-3xl text-primary mb-2 block">
              Caligrafia Bíblica
            </span>
            <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground leading-tight mb-6">
              TRANSFORME SUA{" "}
              <span className="text-gradient-gold">CALIGRAFIA</span>{" "}
              EM 7 DIAS!
            </h1>
            <p className="text-lg sm:text-xl text-muted-foreground mb-8 leading-relaxed">
              Se você quer ter uma letra <strong className="text-foreground">bonita</strong> e{" "}
              <strong className="text-foreground">redondinha</strong>, escrever com mais{" "}
              <strong className="text-foreground">agilidade</strong> e{" "}
              <strong className="text-foreground">traços firmes</strong>, o Método Caligra Bíblica é pra você! 
              Serve para adultos e crianças.
            </p>

            {/* Features */}
            <div className="bg-card rounded-2xl p-6 shadow-card mb-8">
              <div className="grid sm:grid-cols-3 gap-4">
                {features.map((feature, index) => (
                  <div
                    key={index}
                    className="flex items-start gap-3 animate-slide-up"
                    style={{ animationDelay: `${index * 100}ms` }}
                  >
                    <div className="flex-shrink-0 w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center">
                      <Check className="h-4 w-4 text-primary" />
                    </div>
                    <span className="text-sm font-medium text-foreground">{feature}</span>
                  </div>
                ))}
              </div>
            </div>

            <Button variant="gold" size="xl" className="w-full sm:w-auto" asChild>
              <a href="#planos">QUERO MELHORAR MINHA LETRA AGORA</a>
            </Button>
          </div>

          {/* Right Content - Before/After */}
          <div className="animate-slide-up delay-200">
            <div className="bg-card rounded-3xl p-6 sm:p-8 shadow-card">
              <h3 className="font-display text-xl sm:text-2xl text-center text-primary mb-6">
                Esse é o resultado de uma de nossas alunas em apenas{" "}
                <span className="text-gradient-gold font-bold">7 DIAS</span>:
              </h3>
              
              <div className="grid grid-cols-2 gap-4">
                <div className="text-center">
                  <span className="inline-block bg-destructive/10 text-destructive font-bold text-sm px-4 py-1.5 rounded-full mb-3">
                    ANTES
                  </span>
                  <div className="rounded-2xl overflow-hidden border-2 border-destructive/20 shadow-sm">
                    <img
                      src="https://cdn.xquiz.co/images/5f8da06f-b89b-4e3d-b73e-c121aa502ae6"
                      alt="Antes da Caligra Fácil"
                      className="w-full h-48 sm:h-56 object-cover"
                    />
                  </div>
                </div>
                <div className="text-center">
                  <span className="inline-block bg-primary/10 text-primary font-bold text-sm px-4 py-1.5 rounded-full mb-3">
                    DEPOIS
                  </span>
                  <div className="rounded-2xl overflow-hidden border-2 border-primary/20 shadow-soft">
                    <img
                      src="https://cdn.xquiz.co/images/fb05578a-60d6-4078-9db6-57a781422384"
                      alt="Depois da Caligra Fácil"
                      className="w-full h-48 sm:h-56 object-cover"
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
