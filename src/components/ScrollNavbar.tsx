import { Button } from "@/components/ui/button";
import { ThemeToggle } from "@/components/ThemeToggle";
import { Shirt, Menu, X } from "lucide-react";
import { useState, useEffect } from "react";

const ScrollNavbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { href: "#inicio", label: "Inicio" },
    { href: "#caracteristicas", label: "Características" },
    { href: "#como-funciona", label: "Cómo Funciona" },
    { href: "#acerca-de", label: "Acerca de" },
    { href: "#contacto", label: "Contacto" }
  ];

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-out ${
        isScrolled 
          ? "py-2" 
          : "py-4"
      }`}
    >
      <div className={`container mx-auto px-4 transition-all duration-500 ease-out ${
        isScrolled 
          ? "max-w-4xl" 
          : "max-w-7xl"
      }`}>
        <div 
          className={`
            relative overflow-hidden transition-all duration-500 ease-out
            ${isScrolled 
              ? "bg-background/80 backdrop-blur-xl border border-border/50 rounded-2xl shadow-lg px-6 py-3" 
              : "bg-background/60 backdrop-blur-md border-b border-border/30 px-6 py-4"
            }
          `}
        >
          <div className="flex items-center justify-between">
            {/* Logo */}
            <div className={`flex items-center space-x-2 transition-all duration-300 ${
              isScrolled ? "scale-90" : "scale-100"
            }`}>
              <div className="bg-gradient-primary p-2 rounded-xl shadow-eco">
                <Shirt className="h-5 w-5 text-primary-foreground" />
              </div>
              <span className="text-xl font-bold text-foreground">SwapMe</span>
            </div>

            {/* Desktop Navigation */}
            <nav className={`hidden md:flex items-center transition-all duration-500 ${
              isScrolled ? "space-x-6" : "space-x-8"
            }`}>
              {navItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  className="story-link text-foreground hover:text-primary transition-colors text-sm font-medium"
                >
                  {item.label}
                </a>
              ))}
            </nav>

            {/* Right Actions */}
            <div className="flex items-center space-x-3">
              <ThemeToggle />
              
              <div className="hidden md:flex items-center space-x-3">
                <Button variant="ghost" size="sm" className="text-sm">
                  Iniciar Sesión
                </Button>
                <Button variant="hero" size="sm" className={`transition-all duration-300 ${
                  isScrolled ? "text-xs px-4" : "text-sm px-6"
                }`}>
                  Descargar App
                </Button>
              </div>

              {/* Mobile Menu Button */}
              <button
                className="md:hidden p-2 rounded-lg hover:bg-accent/50 transition-colors"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                aria-label="Toggle menu"
              >
                {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
              </button>
            </div>
          </div>

          {/* Mobile Menu */}
          <div className={`md:hidden overflow-hidden transition-all duration-300 ease-out ${
            isMenuOpen 
              ? "max-h-96 opacity-100 pt-4 border-t border-border/30 mt-4" 
              : "max-h-0 opacity-0"
          }`}>
            <nav className="flex flex-col space-y-3">
              {navItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  className="story-link text-foreground hover:text-primary transition-colors py-2 text-sm font-medium"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.label}
                </a>
              ))}
              
              <div className="flex flex-col space-y-2 pt-4">
                <Button variant="ghost" size="sm" className="w-full justify-start">
                  Iniciar Sesión
                </Button>
                <Button variant="hero" size="sm" className="w-full">
                  Descargar App
                </Button>
              </div>
            </nav>
          </div>

          {/* Background decoration for scrolled state */}
          {isScrolled && (
            <div className="absolute inset-0 -z-10 bg-gradient-to-r from-primary/5 via-transparent to-eco-green/5 rounded-2xl" />
          )}
        </div>
      </div>
    </header>
  );
};

export default ScrollNavbar;