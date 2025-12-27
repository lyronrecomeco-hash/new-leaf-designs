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
    <section className="bg-gradient-dark py-16 lg:py-24">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl text-secondary-foreground mb-2">
            Compra <span className="text-gold-400">100% Segura</span>
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {guarantees.map((item, index) => {
            const Icon = item.icon;
            return (
              <div
                key={index}
                className="text-center animate-fade-in"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="w-16 h-16 rounded-2xl bg-gold-500/10 flex items-center justify-center mx-auto mb-4">
                  <Icon className="h-8 w-8 text-gold-400" />
                </div>
                <h3 className="font-display text-lg font-semibold text-secondary-foreground mb-2">
                  {item.title}
                </h3>
                <p className="text-navy-200 text-sm leading-relaxed">
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
