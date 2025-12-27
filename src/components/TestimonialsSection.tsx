import { Star } from "lucide-react";

const TestimonialsSection = () => {
  return (
    <section className="bg-gradient-section parchment-texture py-12 sm:py-16 lg:py-24">
      <div className="container px-4 sm:px-6">
        <div className="text-center mb-8 sm:mb-12">
          <div className="flex items-center justify-center gap-0.5 sm:gap-1 mb-3 sm:mb-4">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="h-5 w-5 sm:h-6 sm:w-6 fill-primary text-primary" />
            ))}
          </div>
          <h2 className="font-display text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl text-foreground px-2">
            Veja o que nossos <span className="text-gradient-gold">alunos</span> estão dizendo:
          </h2>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="bg-card/80 backdrop-blur-sm rounded-2xl sm:rounded-3xl p-3 sm:p-4 lg:p-8 shadow-medieval border border-primary/10 animate-scale-in">
            <img
              src="https://cdn.xquiz.co/images/5f60deea-223e-4329-8831-682d7b7c9753"
              alt="Depoimentos de alunos"
              className="w-full h-auto rounded-xl sm:rounded-2xl"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
