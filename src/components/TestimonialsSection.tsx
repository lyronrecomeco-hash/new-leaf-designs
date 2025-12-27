import { Star } from "lucide-react";

const TestimonialsSection = () => {
  return (
    <section className="bg-gradient-section py-16 lg:py-24">
      <div className="container">
        <div className="text-center mb-12">
          <div className="flex items-center justify-center gap-1 mb-4">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="h-6 w-6 fill-primary text-primary" />
            ))}
          </div>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl text-primary">
            Veja o que nossos <span className="text-gradient-gold">alunos</span> estão dizendo:
          </h2>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="bg-card rounded-3xl p-4 sm:p-8 shadow-card animate-scale-in">
            <img
              src="https://cdn.xquiz.co/images/5f60deea-223e-4329-8831-682d7b7c9753"
              alt="Depoimentos de alunos"
              className="w-full h-auto rounded-2xl"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
