import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import {
  Download,
  Smartphone,
  Star,
  Users,
  Shield,
  Zap,
} from "lucide-react";

const DownloadSection = () => {
  const features = [
    {
      icon: Smartphone,
      title: "App Nativa",
      description: "Optimizada para iOS y Android",
    },
    {
      icon: Shield,
      title: "100% Seguro",
      description: "Datos protegidos con Firebase",
    },
    {
      icon: Zap,
      title: "Tiempo Real",
      description: "Chat y notificaciones instantáneas",
    },
  ];

  const storeButtons = [
    {
      name: "Google Play",
      icon: "📱",
      url: "#",
      description: "Disponible en Android",
      badge: "4.2★",
    },
    {
      name: "App Store",
      icon: "🍎",
      url: "#",
      description: "Disponible en iOS",
      badge: "4.5★",
    },
  ];

  return (
    <section id="download" className="py-20 lg:py-32 bg-gradient-to-br from-primary/5 via-background to-eco-green/5">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <Badge variant="secondary" className="w-fit mx-auto mb-4">
              <Download className="h-4 w-4 mr-1" />
              Descarga Gratuita
            </Badge>
            
            <h2 className="text-3xl lg:text-5xl font-bold text-foreground mb-6">
              Descarga
              <span className="text-transparent bg-primary bg-clip-text"> SwapMe</span>
              <br />
              <span className="text-2xl lg:text-4xl text-muted-foreground">
                y comienza a intercambiar
              </span>
            </h2>
            
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed mb-8">
              Únete a la revolución de la moda circular. Intercambia ropa de manera 
              sostenible, ahorra dinero y contribuye al cuidado del planeta.
            </p>

            {/* Stats */}
            <div className="flex flex-wrap justify-center gap-8 mb-12">
              <div className="flex items-center space-x-2">
                <Users className="h-5 w-5 text-primary" />
                <div className="text-center">
                  <p className="font-bold text-2xl text-foreground">100+</p>
                  <p className="text-sm text-muted-foreground">Usuarios Activos</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-2">
                <Star className="h-5 w-5 text-primary" />
                <div className="text-center">
                  <p className="font-bold text-2xl text-foreground">4.3</p>
                  <p className="text-sm text-muted-foreground">Rating Promedio</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-2">
                <Download className="h-5 w-5 text-primary" />
                <div className="text-center">
                  <p className="font-bold text-2xl text-foreground">1K+</p>
                  <p className="text-sm text-muted-foreground">Descargas</p>
                </div>
              </div>
            </div>
          </div>

          {/* Store Buttons */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16">
            {storeButtons.map((store, index) => (
              <Card key={index} className="group hover:shadow-xl transition-all duration-300 border-0 bg-card/80 backdrop-blur-sm hover:scale-105">
                <CardContent className="p-8 text-center min-w-[280px]">
                  <div className="text-6xl mb-4">{store.icon}</div>
                  
                  <div className="flex items-center justify-center space-x-2 mb-2">
                    <h3 className="text-xl font-bold text-foreground">{store.name}</h3>
                    <Badge variant="secondary" className="text-xs">
                      {store.badge}
                    </Badge>
                  </div>
                  
                  <p className="text-muted-foreground mb-6">{store.description}</p>
                  
                  <Button 
                    variant="hero" 
                    size="lg" 
                    className="w-full group-hover:shadow-lg transition-all duration-300"
                    asChild
                  >
                    <a href={store.url} target="_blank" rel="noopener noreferrer">
                      <Download className="h-5 w-5 mr-2" />
                      Descargar Gratis
                    </a>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Features */}
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {features.map((feature, index) => {
              const IconComponent = feature.icon;
              return (
                <div key={index} className="text-center group">
                  <div className="w-16 h-16 mx-auto mb-4 bg-primary/10 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <IconComponent className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="text-lg font-semibold text-foreground mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-muted-foreground">
                    {feature.description}
                  </p>
                </div>
              );
            })}
          </div>

          {/* Additional Info */}
          <div className="text-center">
            <div className="inline-flex items-center space-x-2 bg-success/10 rounded-full px-6 py-3 mb-4">
              <div className="w-2 h-2 bg-success rounded-full animate-pulse"></div>
              <span className="text-sm font-medium text-foreground">
                Disponible en español e inglés
              </span>
            </div>
            
            <p className="text-muted-foreground text-sm">
              Requiere iOS 12.0+ o Android 5.0+ • Tamaño: ~50MB • Actualización automática
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DownloadSection;
