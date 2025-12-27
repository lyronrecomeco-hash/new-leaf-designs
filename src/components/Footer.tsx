const Footer = () => {
  return (
    <footer className="bg-foreground py-8">
      <div className="container text-center">
        <p className="font-display italic text-xl text-gold-400 mb-2">
          Caligrafia Bíblica
        </p>
        <p className="text-navy-300 text-sm">
          © {new Date().getFullYear()} Todos os direitos reservados
        </p>
      </div>
    </footer>
  );
};

export default Footer;
