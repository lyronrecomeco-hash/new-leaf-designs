import { Pen, Brain, Hand, Lightbulb, Heart } from "lucide-react";

const benefits = [
  {
    icon: Pen,
    title: "Escrita mais rápida e bonita",
    description: "Aprenda técnicas para tornar sua escrita mais ágil e esteticamente agradável.",
  },
  {
    icon: Brain,
    title: "Aumento da concentração",
    description: "Os exercícios de caligrafia ajudam a melhorar o foco e a concentração.",
  },
  {
    icon: Hand,
    title: "Coordenação motora aprimorada",
    description: "Desenvolva habilidades motoras finas essenciais para muitas atividades cotidianas.",
  },
  {
    icon: Lightbulb,
    title: "Aumento da capacidade de raciocínio",
    description: "Estimule conexões cerebrais importantes durante o processo de aprendizagem da caligrafia.",
  },
  {
    icon: Heart,
    title: "Melhoria na comunicação e autoestima",
    description: "Ganhe confiança com uma escrita mais clara e comunicação aprimorada.",
  },
];

const BenefitsSection = () => {
  return (
    <section className="bg-gradient-section parchment-texture py-12 sm:py-16 lg:py-24">
      <div className="container px-4 sm:px-6">
        <h2 className="font-display text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl text-center text-foreground mb-8 sm:mb-12 lg:mb-16 px-2">
          Benefícios que você terá já na{" "}
          <span className="text-gradient-gold">primeira semana</span>:
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
          {benefits.map((benefit, index) => {
            const Icon = benefit.icon;
            return (
              <div
                key={index}
                className="bg-card/80 backdrop-blur-sm rounded-xl sm:rounded-2xl p-5 sm:p-6 lg:p-8 shadow-medieval border border-primary/10 hover:shadow-soft transition-all duration-300 hover:-translate-y-1 animate-scale-in group"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="w-11 h-11 sm:w-14 sm:h-14 rounded-xl sm:rounded-2xl bg-primary/10 flex items-center justify-center mb-4 sm:mb-5 group-hover:bg-primary/20 transition-colors">
                  <Icon className="h-5 w-5 sm:h-7 sm:w-7 text-primary" />
                </div>
                <h3 className="font-display text-base sm:text-lg lg:text-xl font-semibold text-foreground mb-2 sm:mb-3">
                  {benefit.title}
                </h3>
                <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                  {benefit.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;
