import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Upload,
  Search,
  MessageCircle,
  RefreshCw,
  CheckCircle,
  Star,
} from "lucide-react";

const HowItWorks = () => {
  const steps = [
    {
      icon: Upload,
      title: "1. Sube tu Ropa",
      description: "Fotografía y sube las prendas que ya no uses. Organízalas por categoría, talla y condición.",
      color: "text-blue-500",
      bgColor: "bg-blue-50 dark:bg-blue-950/20",
    },
    {
      icon: Search,
      title: "2. Explora y Busca",
      description: "Navega por el catálogo de otros usuarios. Usa filtros avanzados para encontrar exactamente lo que buscas.",
      color: "text-green-500",
      bgColor: "bg-green-50 dark:bg-green-950/20",
    },
    {
      icon: MessageCircle,
      title: "3. Negocia",
      description: "Chatea directamente con otros usuarios para discutir detalles del intercambio o venta.",
      color: "text-purple-500",
      bgColor: "bg-purple-50 dark:bg-purple-950/20",
    },
    {
      icon: RefreshCw,
      title: "4. Intercambia",
      description: "Acuerda el intercambio y coordina la entrega. ¡Disfruta de tu nueva prenda sostenible!",
      color: "text-orange-500",
      bgColor: "bg-orange-50 dark:bg-orange-950/20",
    },
  ];

  const features = [
    {
      icon: CheckCircle,
      title: "Verificación de Usuarios",
      description: "Sistema de verificación para mayor seguridad",
    },
    {
      icon: Star,
      title: "Sistema de Valoraciones",
      description: "Califica y reseña a otros usuarios",
    },
  ];

  return (
    <section id="how-it-works" className="py-20 lg:py-32 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <Badge variant="secondary" className="w-fit mx-auto mb-4">
            <RefreshCw className="h-4 w-4 mr-1" />
            Proceso Simple
          </Badge>
          
          <h2 className="text-3xl lg:text-5xl font-bold text-foreground mb-6">
            Cómo Funciona
            <span className="text-transparent bg-primary bg-clip-text"> SwapMe</span>
          </h2>
          
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Intercambiar ropa nunca fue tan fácil. Sigue estos simples pasos para 
            unirte a la revolución de la moda circular.
          </p>
        </div>

        {/* Steps */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {steps.map((step, index) => {
            const IconComponent = step.icon;
            return (
              <Card key={index} className="group hover:shadow-lg transition-all duration-300 border-0 bg-card/50 backdrop-blur-sm">
                <CardContent className="p-6 text-center">
                  <div className={`w-16 h-16 mx-auto mb-4 rounded-2xl ${step.bgColor} flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                    <IconComponent className={`h-8 w-8 ${step.color}`} />
                  </div>
                  
                  <h3 className="text-xl font-semibold text-foreground mb-3">
                    {step.title}
                  </h3>
                  
                  <p className="text-muted-foreground leading-relaxed">
                    {step.description}
                  </p>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Additional Features */}
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {features.map((feature, index) => {
            const IconComponent = feature.icon;
            return (
              <div key={index} className="flex items-start space-x-4 p-6 rounded-2xl bg-card/50 backdrop-blur-sm border border-border/50">
                <div className="flex-shrink-0 w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center">
                  <IconComponent className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-foreground mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-muted-foreground">
                    {feature.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* CTA Section */}
        <div className="text-center mt-16">
          <div className="inline-flex items-center space-x-2 bg-primary/10 rounded-full px-6 py-3 mb-6">
            <CheckCircle className="h-5 w-5 text-primary" />
            <span className="text-sm font-medium text-foreground">
              ¡Es completamente gratis!
            </span>
          </div>
          
          <h3 className="text-2xl font-bold text-foreground mb-4">
            ¿Listo para empezar?
          </h3>
          
          <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
            Únete a miles de usuarios que ya están intercambiando ropa de manera 
            sostenible y contribuyendo a un futuro más verde.
          </p>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
