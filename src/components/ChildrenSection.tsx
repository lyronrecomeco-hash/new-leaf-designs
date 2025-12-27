import { Sparkles } from "lucide-react";

const ChildrenSection = () => {
  return (
    <section className="bg-gradient-hero parchment-texture py-12 sm:py-16 lg:py-24">
      <div className="container px-4 sm:px-6">
        <div className="grid lg:grid-cols-2 gap-8 sm:gap-10 lg:gap-12 items-center">
          <div className="order-2 lg:order-1 animate-scale-in">
            <div className="rounded-2xl sm:rounded-3xl overflow-hidden shadow-medieval border border-primary/10">
              <img
                src="https://i.imgur.com/UNMswBB.jpeg"
                alt="Criança praticando caligrafia"
                className="w-full h-auto object-cover"
              />
            </div>
          </div>

          <div className="order-1 lg:order-2 animate-fade-in text-center lg:text-left">
            <div className="flex items-center justify-center lg:justify-start gap-2 mb-3 sm:mb-4">
              <Sparkles className="h-5 w-5 sm:h-6 sm:w-6 text-primary" />
              <span className="text-primary font-semibold uppercase tracking-wide text-sm sm:text-base">
                Para toda família
              </span>
            </div>
            <h2 className="font-display text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold text-foreground mb-4 sm:mb-6">
              PREPARE SEU FILHO PARA UM{" "}
              <span className="text-gradient-gold">FUTURO BRILHANTE!</span>
            </h2>
            <p className="text-base sm:text-lg text-muted-foreground leading-relaxed max-w-xl mx-auto lg:mx-0">
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
