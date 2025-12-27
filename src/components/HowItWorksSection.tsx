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
    <section className="bg-gradient-hero py-16 lg:py-24">
      <div className="container">
        <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl text-center text-primary mb-12 lg:mb-16">
          Veja como é <span className="text-gradient-gold">Fácil, Prático e Seguro</span>:
        </h2>

        <div className="grid md:grid-cols-3 gap-8 lg:gap-12 max-w-6xl mx-auto">
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <div
                key={index}
                className="text-center animate-slide-up"
                style={{ animationDelay: `${index * 150}ms` }}
              >
                <div className="relative inline-flex items-center justify-center mb-6">
                  <div className="w-16 h-16 rounded-full bg-gradient-gold flex items-center justify-center text-primary-foreground shadow-glow">
                    <span className="font-display text-2xl font-bold">{step.number}</span>
                  </div>
                </div>

                <div className="bg-card rounded-2xl p-6 shadow-card mb-5">
                  <img
                    src={step.image}
                    alt={step.title}
                    className="w-full h-32 object-contain"
                  />
                </div>

                <h3 className="font-display text-xl font-semibold text-foreground mb-2">
                  {step.title}
                </h3>
                <p className="text-muted-foreground">{step.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;
