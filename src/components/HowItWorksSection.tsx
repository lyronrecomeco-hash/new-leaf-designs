import { MessageCircle, Mail, Download } from "lucide-react";

const steps = [
  {
    number: 1,
    icon: MessageCircle,
    title: "Receba pelo WhatsApp",
    description: "Após a compra você recebe imediatamente o acesso pelo Whatsapp.",
    image: "https://i.imgur.com/9hq0sOV.png",
  },
  {
    number: 2,
    icon: Mail,
    title: "Acesso por E-mail",
    description: "Também recebe o acesso pelo e-mail cadastrado na compra.",
    image: "https://i.imgur.com/eDp0tM9.png",
  },
  {
    number: 3,
    icon: Download,
    title: "Baixe e Imprima",
    description: "Baixe todos os materiais em nossa Área de Membros e imprima.",
    image: "https://i.imgur.com/hJmTlXr.png",
  },
];

const HowItWorksSection = () => {
  return (
    <section className="bg-gradient-hero parchment-texture py-12 sm:py-16 lg:py-24">
      <div className="container px-4 sm:px-6">
        <h2 className="font-display text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl text-center text-foreground mb-8 sm:mb-12 lg:mb-16 px-2">
          Veja como é <span className="text-gradient-gold">Fácil, Prático e Seguro</span>:
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 lg:gap-12 max-w-6xl mx-auto">
          {steps.map((step, index) => {
            return (
              <div
                key={index}
                className="text-center animate-slide-up"
                style={{ animationDelay: `${index * 150}ms` }}
              >
                <div className="relative inline-flex items-center justify-center mb-4 sm:mb-6">
                  <div className="w-12 h-12 sm:w-16 sm:h-16 rounded-full bg-gradient-gold flex items-center justify-center text-primary-foreground shadow-glow">
                    <span className="font-display text-xl sm:text-2xl font-bold">{step.number}</span>
                  </div>
                </div>

                <div className="bg-card/80 backdrop-blur-sm rounded-xl sm:rounded-2xl p-4 sm:p-6 shadow-medieval border border-primary/10 mb-4 sm:mb-5">
                  <img
                    src={step.image}
                    alt={step.title}
                    className="w-full h-24 sm:h-32 object-contain"
                  />
                </div>

                <h3 className="font-display text-base sm:text-lg lg:text-xl font-semibold text-foreground mb-1 sm:mb-2">
                  {step.title}
                </h3>
                <p className="text-sm sm:text-base text-muted-foreground">{step.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;
