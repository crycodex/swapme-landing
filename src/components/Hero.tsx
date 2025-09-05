import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, Download, Star, Users, RefreshCw, Leaf } from "lucide-react";
import heroClothes from "@/assets/hero-clothes.jpg";
import appMockup from "@/assets/app-mockup.jpg";

const Hero = () => {
  return (
    <section className="relative py-20 lg:py-32 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-eco opacity-50" />
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8 animate-slide-up">
            <Badge variant="secondary" className="w-fit animate-fade-in">
              <Leaf className="h-3 w-3 mr-1" />
              Revolución de la Moda Sostenible
            </Badge>
            
            <div className="space-y-4">
              <h1 className="text-4xl lg:text-6xl font-bold text-foreground leading-tight animate-slide-up">
                Intercambia Ropa de
                <span className="text-transparent bg-gradient-primary bg-clip-text"> Manera Sostenible</span>
              </h1>
              
              <p className="text-lg lg:text-xl text-muted-foreground leading-relaxed max-w-lg animate-fade-in">
                SwapMe es la app que te permite intercambiar y vender ropa de segunda mano. 
                Únete a la revolución de la moda circular y contribuye al cuidado del planeta.
              </p>
            </div>

            {/* Stats */}
            <div className="flex flex-wrap gap-6">
              <div className="flex items-center space-x-2">
                <Users className="h-5 w-5 text-primary" />
                <div>
                  <p className="font-semibold text-lg">10K+</p>
                  <p className="text-sm text-muted-foreground">Usuarios Activos</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-2">
                <RefreshCw className="h-5 w-5 text-primary" />
                <div>
                  <p className="font-semibold text-lg">50K+</p>
                  <p className="text-sm text-muted-foreground">Intercambios Realizados</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-2">
                <Star className="h-5 w-5 text-primary" />
                <div>
                  <p className="font-semibold text-lg">4.8</p>
                  <p className="text-sm text-muted-foreground">Rating en App Store</p>
                </div>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button variant="hero" size="lg" className="group">
                <Download className="h-5 w-5 mr-2" />
                Descargar App
                <ArrowRight className="h-4 w-4 ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
              
              <Button variant="outline" size="lg">
                Ver Demo
              </Button>
            </div>
            
            <p className="text-sm text-muted-foreground">
              Disponible en iOS y Android • Gratis para descargar
            </p>
          </div>

          {/* Right Content - App Mockup */}
          <div className="relative lg:flex justify-center">
            <div className="relative animate-float">
              <img 
                src={appMockup}
                alt="SwapMe App Interface"
                className="w-full max-w-sm mx-auto rounded-3xl shadow-glow"
              />
              
              {/* Floating Elements */}
              <div className="absolute -top-4 -left-4 bg-card rounded-xl p-4 shadow-eco animate-pulse-glow">
                <div className="flex items-center space-x-2">
                  <div className="w-3 h-3 bg-success rounded-full"></div>
                  <span className="text-sm font-medium">+5 intercambios hoy</span>
                </div>
              </div>
              
              <div className="absolute -bottom-4 -right-4 bg-card rounded-xl p-4 shadow-eco">
                <div className="flex items-center space-x-2">
                  <Leaf className="h-4 w-4 text-primary" />
                  <span className="text-sm font-medium">Eco-friendly</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Background Elements */}
      <div className="absolute top-1/4 right-0 w-72 h-72 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 left-0 w-96 h-96 bg-eco-green/5 rounded-full blur-3xl" />
    </section>
  );
};

export default Hero;