import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Shirt, Mail, Phone, MapPin, Instagram, Twitter, Facebook } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-foreground text-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Main Footer Content */}
        <div className="grid lg:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div className="lg:col-span-2 space-y-6">
            <div className="flex items-center space-x-2">
              <img src="/imgs/logo_ligth.png" alt="SwapMe" className="h-10 w-10 rounded-xl" />
              <span className="text-2xl font-bold">SwapMe</span>
            </div>
            
            <p className="text-background/80 max-w-md leading-relaxed">
              La aplicación líder en intercambio sostenible de ropa. Únete a miles de usuarios 
              que ya contribuyen a un futuro más verde a través de la moda circular.
            </p>
            
            <div className="space-y-2">
              <div className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-primary" />
                <span className="text-background/80">recaldecd@gmail.com</span>
              </div>
              
              <div className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-primary" />
                <span className="text-background/80">+1 (555) 123-4567</span>
              </div>
              
              <div className="flex items-center space-x-3">
                <MapPin className="h-5 w-5 text-primary" />
                <span className="text-background/80">Quito, Ecuador</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-6">
            <h3 className="text-lg font-semibold">Enlaces Rápidos</h3>
            <nav className="flex flex-col space-y-3">
              <a href="#features" className="text-background/80 hover:text-primary transition-colors">
                Características
              </a>
              <a href="#how-it-works" className="text-background/80 hover:text-primary transition-colors">
                Cómo Funciona
              </a>
              <a href="#about" className="text-background/80 hover:text-primary transition-colors">
                Acerca de
              </a>
              <a href="#contact" className="text-background/80 hover:text-primary transition-colors">
                Contacto
              </a>
              <a href="/privacy" className="text-background/80 hover:text-primary transition-colors">
                Privacidad
              </a>
              <a href="/terms" className="text-background/80 hover:text-primary transition-colors">
                Términos
              </a>
            </nav>
          </div>

          {/* Newsletter */}
          <div className="space-y-6">
            <h3 className="text-lg font-semibold">Mantente Actualizado</h3>
            <p className="text-background/80">
              Suscríbete para recibir noticias sobre nuevas funciones y consejos de moda sostenible.
            </p>
            
            <div className="space-y-3">
              <Input 
                type="email" 
                placeholder="Tu email"
                className="bg-background/10 border-background/20 text-background placeholder:text-background/60"
              />
              <Button variant="hero" size="sm" className="w-full">
                Suscribirse
              </Button>
            </div>
          </div>
        </div>

        {/* Social Links & Copyright */}
        <div className="border-t border-background/20 pt-8 mt-12">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="flex space-x-4">
              <a 
                href="#" 
                className="p-2 rounded-lg bg-background/10 hover:bg-primary/20 transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="h-5 w-5" />
              </a>
              <a 
                href="#" 
                className="p-2 rounded-lg bg-background/10 hover:bg-primary/20 transition-colors"
                aria-label="Twitter"
              >
                <Twitter className="h-5 w-5" />
              </a>
              <a 
                href="#" 
                className="p-2 rounded-lg bg-background/10 hover:bg-primary/20 transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="h-5 w-5" />
              </a>
            </div>
            
            <p className="text-background/60 text-sm">
              © 2024 SwapMe. Todos los derechos reservados. Hecho con ❤️ para un futuro más sostenible.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;