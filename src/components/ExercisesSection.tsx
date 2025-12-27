import { Button } from "@/components/ui/button";
import { BookOpen, Layers } from "lucide-react";

const ExercisesSection = () => {
  return (
    <section className="bg-gradient-section py-16 lg:py-24">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl text-primary mb-4">
            Veja como são os <span className="text-gradient-gold">exercícios</span>:
          </h2>
          <div className="flex items-center justify-center gap-2 text-muted-foreground">
            <Layers className="h-5 w-5 text-primary" />
            <p className="text-lg">
              São <strong className="text-foreground">5 módulos</strong> com mais de{" "}
              <strong className="text-foreground">300 páginas</strong> para melhorar o desempenho 
              cognitivo e a escrita!
            </p>
          </div>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="bg-card rounded-3xl p-4 sm:p-8 shadow-card animate-scale-in">
            <div className="rounded-2xl overflow-hidden">
              <img
                src="https://cdn.xquiz.co/images/c6b57c3c-9b2e-4387-b4c6-3ff614680963"
                alt="Exemplo de atividade do curso"
                className="w-full h-auto"
              />
            </div>
          </div>

          <div className="text-center mt-10">
            <Button variant="gold" size="xl" asChild>
              <a href="#planos" className="flex items-center gap-2">
                <BookOpen className="h-5 w-5" />
                QUERO COMEÇAR AGORA
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExercisesSection;
