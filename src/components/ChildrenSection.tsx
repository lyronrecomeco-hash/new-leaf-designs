import { Sparkles } from "lucide-react";

const ChildrenSection = () => {
  return (
    <section className="bg-gradient-hero py-16 lg:py-24">
      <div className="container">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="order-2 lg:order-1 animate-scale-in">
            <div className="rounded-3xl overflow-hidden shadow-card">
              <img
                src="https://i.imgur.com/UNMswBB.jpeg"
                alt="Criança praticando caligrafia"
                className="w-full h-auto object-cover"
              />
            </div>
          </div>

          <div className="order-1 lg:order-2 animate-fade-in">
            <div className="flex items-center gap-2 mb-4">
              <Sparkles className="h-6 w-6 text-primary" />
              <span className="text-primary font-semibold uppercase tracking-wide">
                Para toda família
              </span>
            </div>
            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6">
              PREPARE SEU FILHO PARA UM{" "}
              <span className="text-gradient-gold">FUTURO BRILHANTE!</span>
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              O método é ideal tanto para adultos quanto para crianças que estão na fase de 
              alfabetização e aprendendo a escrever, faça seu filho se destacar estimulando 
              a escrita com diversão e confiança!
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ChildrenSection;
