import { Shield, Mail, CreditCard, Lock } from "lucide-react";

const guarantees = [
  {
    icon: Shield,
    title: "Garantia de 7 dias",
    description: "Satisfação garantida ou seu dinheiro de volta em até 7 dias.",
  },
  {
    icon: Mail,
    title: "Acesso imediato via e-mail",
    description: "Após a compra, você receberá acesso imediato ao conteúdo digital.",
  },
  {
    icon: CreditCard,
    title: "Pagamento por Pix ou cartão",
    description: "Escolha a forma de pagamento que for mais conveniente para você.",
  },
  {
    icon: Lock,
    title: "Compra protegida com total segurança",
    description: "Seus dados estão protegidos por criptografia avançada.",
  },
];

const GuaranteeSection = () => {
  return (
    <section className="bg-gradient-dark py-12 sm:py-16 lg:py-24">
      <div className="container px-4 sm:px-6">
        <div className="text-center mb-8 sm:mb-12">
          <h2 className="font-display text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl text-secondary-foreground mb-2">
            Compra <span className="text-gold-400">100% Segura</span>
          </h2>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 max-w-6xl mx-auto">
          {guarantees.map((item, index) => {
            const Icon = item.icon;
            return (
              <div
                key={index}
                className="text-center animate-fade-in"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="w-12 h-12 sm:w-16 sm:h-16 rounded-xl sm:rounded-2xl bg-gold-500/10 flex items-center justify-center mx-auto mb-3 sm:mb-4">
                  <Icon className="h-6 w-6 sm:h-8 sm:w-8 text-gold-400" />
                </div>
                <h3 className="font-display text-sm sm:text-base lg:text-lg font-semibold text-secondary-foreground mb-1 sm:mb-2">
                  {item.title}
                </h3>
                <p className="text-xs sm:text-sm text-secondary-foreground/70 leading-relaxed">
                  {item.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default GuaranteeSection;
