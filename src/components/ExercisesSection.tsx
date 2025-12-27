import { Button } from "@/components/ui/button";
import { BookOpen, Layers } from "lucide-react";

const ExercisesSection = () => {
  return (
    <section className="bg-gradient-section parchment-texture py-12 sm:py-16 lg:py-24">
      <div className="container px-4 sm:px-6">
        <div className="text-center mb-8 sm:mb-12">
          <h2 className="font-display text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl text-foreground mb-3 sm:mb-4">
            Veja como são os <span className="text-gradient-gold">exercícios</span>:
          </h2>
          <div className="flex items-center justify-center gap-2 text-muted-foreground">
            <Layers className="h-4 w-4 sm:h-5 sm:w-5 text-primary flex-shrink-0" />
            <p className="text-sm sm:text-base lg:text-lg">
              São <strong className="text-foreground">5 módulos</strong> com mais de{" "}
              <strong className="text-foreground">300 páginas</strong> para melhorar o desempenho 
              cognitivo e a escrita!
            </p>
          </div>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="bg-card/80 backdrop-blur-sm rounded-2xl sm:rounded-3xl p-3 sm:p-4 lg:p-8 shadow-medieval border border-primary/10 animate-scale-in">
            <div className="rounded-xl sm:rounded-2xl overflow-hidden">
              <img
                src="https://cdn.xquiz.co/images/c6b57c3c-9b2e-4387-b4c6-3ff614680963"
                alt="Exemplo de atividade do curso"
                className="w-full h-auto"
              />
            </div>
          </div>

          <div className="text-center mt-8 sm:mt-10">
            <Button variant="gold" size="xl" className="w-full sm:w-auto text-sm sm:text-base" asChild>
              <a href="#planos" className="flex items-center justify-center gap-2">
                <BookOpen className="h-4 w-4 sm:h-5 sm:w-5" />
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
