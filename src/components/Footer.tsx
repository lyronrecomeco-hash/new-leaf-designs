import { ScrollText } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-foreground py-6 sm:py-8">
      <div className="container px-4 sm:px-6 text-center">
        <div className="flex items-center justify-center gap-2 mb-2">
          <ScrollText className="h-4 w-4 sm:h-5 sm:w-5 text-gold-400" />
          <p className="font-uncial text-lg sm:text-xl text-gold-400">
            Caligrafia Bíblica
          </p>
        </div>
        <p className="text-secondary-foreground/60 text-xs sm:text-sm">
          © {new Date().getFullYear()} Todos os direitos reservados
        </p>
      </div>
    </footer>
  );
};

export default Footer;
