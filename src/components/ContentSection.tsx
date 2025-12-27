import { Button } from "@/components/ui/button";
import { Target, Calendar, Type, Palette } from "lucide-react";

const contents = [
  {
    icon: Target,
    title: "Exercícios para coordenação motora",
    description: "Atividades especialmente desenvolvidas para aprimorar suas habilidades motoras finas, fundamentais para uma boa caligrafia.",
  },
  {
    icon: Calendar,
    title: "Caligrafia prática com treino diário",
    description: "Rotinas de treino progressivas que garantem evolução constante na sua escrita, com exercícios simples e eficazes.",
  },
  {
    icon: Type,
    title: "9 tipos de alfabetos para treino",
    description: "Aprenda diferentes estilos de escrita, desde a básica até estilos artísticos, ampliando seu repertório caligráfico.",
  },
  {
    icon: Palette,
    title: "Técnicas de lettering",
    description: "Fundamentos de lettering para transformar sua escrita em verdadeiras obras de arte, com técnicas acessíveis para todos os níveis.",
  },
];

const ContentSection = () => {
  return (
    <section className="bg-gradient-hero py-16 lg:py-24">
      <div className="container">
        <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl text-center text-primary mb-12 lg:mb-16">
          O que você vai aprender com o{" "}
          <span className="text-gradient-gold block sm:inline">Método Caligrafia Bíblica?</span>
        </h2>

        <div className="grid sm:grid-cols-2 gap-6 lg:gap-8 max-w-5xl mx-auto mb-12">
          {contents.map((content, index) => {
            const Icon = content.icon;
            return (
              <div
                key={index}
                className="bg-card rounded-2xl p-6 lg:p-8 shadow-card hover:shadow-soft transition-all duration-300 hover:-translate-y-1 animate-slide-up group"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0 group-hover:bg-primary/20 transition-colors">
                    <Icon className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-display text-xl font-semibold text-foreground mb-2">
                      {content.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {content.description}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <div className="text-center">
          <Button variant="gold" size="xl" asChild>
            <a href="#planos">QUERO COMPRAR AGORA</a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ContentSection;
