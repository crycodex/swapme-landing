import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  RefreshCw, 
  Store, 
  MessageCircle, 
  Shield, 
  Palette, 
  Smartphone,
  Users,
  Leaf,
  Star
} from "lucide-react";

const Features = () => {
  const features = [
    {
      icon: RefreshCw,
      title: "Sistema de Intercambio",
      description: "Intercambia ropa directamente con otros usuarios. Propón intercambios y gestiona ofertas de manera simple.",
      badge: "Nuevo",
      color: "text-primary"
    },
    {
      icon: Store,
      title: "Marketplace Integrado",
      description: "Crea tu propia tienda personal. Vende ropa además de intercambiarla con gestión completa de inventario.",
      badge: "Popular",
      color: "text-eco-green"
    },
    {
      icon: MessageCircle,
      title: "Chat en Tiempo Real",
      description: "Comunícate directamente con otros usuarios. Negocia intercambios y ventas con mensajería instantánea.",
      badge: null,
      color: "text-nature"
    },
    {
      icon: Shield,
      title: "Autenticación Segura",
      description: "Login seguro con Firebase. Inicia sesión con Google o Apple ID para mayor comodidad y seguridad.",
      badge: null,
      color: "text-primary"
    },
    {
      icon: Palette,
      title: "Diseño Moderno",
      description: "Interfaz moderna con efectos glassmorphism. Animaciones fluidas y soporte para modo claro y oscuro.",
      badge: "Premium",
      color: "text-eco-green"
    },
    {
      icon: Smartphone,
      title: "App Móvil Nativa",
      description: "Desarrollada en Flutter para Android e iOS. Experiencia nativa optimizada en ambas plataformas.",
      badge: null,
      color: "text-nature"
    }
  ];

  const benefits = [
    {
      icon: Leaf,
      title: "Sostenible",
      description: "Reduce el impacto ambiental de la moda"
    },
    {
      icon: Users,
      title: "Comunidad",
      description: "Conecta con personas afines a la moda sostenible"
    },
    {
      icon: Star,
      title: "Calidad",
      description: "Sistema de valoraciones y reseñas integrado"
    }
  ];

  return (
    <section id="features" className="py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center space-y-4 mb-16">
          <Badge variant="secondary" className="w-fit mx-auto">
            <Leaf className="h-3 w-3 mr-1" />
            Características Principales
          </Badge>
          
          <h2 className="text-3xl lg:text-5xl font-bold text-foreground">
            Todo lo que necesitas para
            <span className="text-transparent bg-primary bg-clip-text"> intercambiar ropa</span>
          </h2>
          
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            SwapMe combina las mejores tecnologías para ofrecerte una experiencia única 
            en el intercambio y venta de ropa de segunda mano.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {features.map((feature, index) => {
            const IconComponent = feature.icon;
            return (
              <Card key={index} className="group hover:shadow-glow transition-all duration-300 border-border/50">
                <CardContent className="p-6 space-y-4">
                  <div className="flex items-center justify-between">
                    <div className={`p-3 rounded-xl bg-gradient-eco ${feature.color}`}>
                      <IconComponent className="h-6 w-6" />
                    </div>
                    {feature.badge && (
                      <Badge variant="secondary" className="text-xs">
                        {feature.badge}
                      </Badge>
                    )}
                  </div>
                  
                  <h3 className="text-xl font-semibold text-foreground group-hover:text-primary transition-colors">
                    {feature.title}
                  </h3>
                  
                  <p className="text-muted-foreground leading-relaxed">
                    {feature.description}
                  </p>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Benefits */}
        <div className="bg-gradient-eco rounded-2xl p-8 lg:p-12">
          <div className="text-center mb-12">
            <h3 className="text-2xl lg:text-3xl font-bold text-foreground mb-4">
              ¿Por qué elegir SwapMe?
            </h3>
            <p className="text-muted-foreground">
              Únete a la revolución de la moda sostenible
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => {
              const IconComponent = benefit.icon;
              return (
                <div key={index} className="text-center space-y-4">
                  <div className="mx-auto w-16 h-16 bg-primary rounded-2xl flex items-center justify-center shadow-eco">
                    <IconComponent className="h-8 w-8 text-primary-foreground" />
                  </div>
                  <h4 className="text-xl font-semibold text-foreground">
                    {benefit.title}
                  </h4>
                  <p className="text-muted-foreground">
                    {benefit.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;