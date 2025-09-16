import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft, FileText, Scale, Users, AlertTriangle, Shield, Mail } from "lucide-react";
import { Link } from "react-router-dom";

const Terms = () => {
  const sections = [
    {
      icon: Users,
      title: "Uso de la Aplicación",
      content: [
        "Debes ser mayor de 18 años para usar SwapMe",
        "Solo puedes crear una cuenta por persona",
        "Eres responsable de mantener la seguridad de tu cuenta",
        "Debes proporcionar información veraz y actualizada",
        "No puedes usar la aplicación para actividades ilegales",
        "Debes respetar a otros usuarios y sus derechos"
      ]
    },
    {
      icon: FileText,
      title: "Contenido y Productos",
      content: [
        "Eres responsable del contenido que publicas",
        "Las fotos deben ser propias o tener derechos de uso",
        "Los productos deben estar en buenas condiciones",
        "No puedes vender productos ilegales o peligrosos",
        "Debes describir honestamente el estado de los productos",
        "SwapMe no se hace responsable por la calidad de los productos"
      ]
    },
    {
      icon: Scale,
      title: "Intercambios y Transacciones",
      content: [
        "Los intercambios son responsabilidad de los usuarios",
        "SwapMe facilita la conexión, no garantiza transacciones",
        "Los usuarios deben coordinar la entrega entre ellos",
        "No hay reembolsos por intercambios realizados",
        "Los problemas entre usuarios deben resolverse directamente",
        "SwapMe puede mediar en disputas si es necesario"
      ]
    },
    {
      icon: Shield,
      title: "Prohibiciones",
      content: [
        "No publicar contenido ofensivo o inapropiado",
        "No hacer spam o publicidad no autorizada",
        "No intentar hackear o dañar la aplicación",
        "No crear cuentas falsas o impersonar a otros",
        "No usar la aplicación para actividades comerciales no autorizadas",
        "No compartir información personal de otros usuarios"
      ]
    }
  ];

  const responsibilities = [
    {
      title: "Responsabilidades del Usuario",
      items: [
        "Verificar la identidad de otros usuarios antes de intercambiar",
        "Tomar fotos claras y honestas de los productos",
        "Comunicarse de manera respetuosa con otros usuarios",
        "Reportar contenido inapropiado o usuarios problemáticos",
        "Mantener actualizada la información de su perfil",
        "Cumplir con las leyes locales aplicables"
      ]
    },
    {
      title: "Responsabilidades de SwapMe",
      items: [
        "Proporcionar una plataforma segura y funcional",
        "Proteger la información personal de los usuarios",
        "Responder a reportes de contenido inapropiado",
        "Mantener la aplicación actualizada y sin errores",
        "Proporcionar soporte técnico cuando sea necesario",
        "Cumplir con las regulaciones de privacidad de datos"
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <div className="bg-gradient-to-br from-primary/5 via-background to-eco-green/5 py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center space-x-4 mb-6">
              <Button variant="ghost" size="sm" asChild>
                <Link to="/">
                  <ArrowLeft className="h-4 w-4 mr-2" />
                  Volver al Inicio
                </Link>
              </Button>
            </div>

            <div className="text-center">
              <Badge variant="secondary" className="w-fit mx-auto mb-4">
                <FileText className="h-4 w-4 mr-1" />
                Términos Legales
              </Badge>
              
              <h1 className="text-4xl lg:text-6xl font-bold text-foreground mb-6">
                Términos de
                <span className="text-transparent bg-primary bg-clip-text"> Uso</span>
              </h1>
              
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed mb-8">
                Estos términos y condiciones rigen el uso de la aplicación SwapMe. 
                Al usar nuestra aplicación, aceptas estos términos en su totalidad.
              </p>

              <div className="flex flex-wrap justify-center gap-4 text-sm text-muted-foreground">
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-success rounded-full"></div>
                  <span>Última actualización: Diciembre 2024</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-primary rounded-full"></div>
                  <span>Vigente desde: Enero 2024</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto space-y-12">
            
            {/* Introduction */}
            <Card className="border-0 bg-card/50 backdrop-blur-sm">
              <CardContent className="p-8">
                <h2 className="text-2xl font-bold text-foreground mb-4">
                  Introducción
                </h2>
                <p className="text-muted-foreground leading-relaxed">
                  Bienvenido a SwapMe, la aplicación que facilita el intercambio sostenible de ropa. 
                  Estos Términos de Uso establecen las reglas y regulaciones para el uso de nuestra 
                  aplicación móvil y servicios relacionados.
                </p>
                <p className="text-muted-foreground leading-relaxed mt-4">
                  Al acceder y usar SwapMe, aceptas estar sujeto a estos términos. Si no estás 
                  de acuerdo con alguna parte de estos términos, no debes usar nuestra aplicación.
                </p>
              </CardContent>
            </Card>

            {/* Main Sections */}
            {sections.map((section, index) => {
              const IconComponent = section.icon;
              return (
                <Card key={index} className="border-0 bg-card/50 backdrop-blur-sm">
                  <CardContent className="p-8">
                    <div className="flex items-start space-x-4 mb-6">
                      <div className="flex-shrink-0 w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center">
                        <IconComponent className="h-6 w-6 text-primary" />
                      </div>
                      <h2 className="text-2xl font-bold text-foreground">
                        {section.title}
                      </h2>
                    </div>
                    
                    <ul className="space-y-3">
                      {section.content.map((item, itemIndex) => (
                        <li key={itemIndex} className="flex items-start space-x-3">
                          <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                          <span className="text-muted-foreground">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              );
            })}

            {/* Responsibilities */}
            <div className="grid md:grid-cols-2 gap-8">
              {responsibilities.map((section, index) => (
                <Card key={index} className="border-0 bg-card/50 backdrop-blur-sm">
                  <CardContent className="p-6">
                    <h3 className="text-xl font-bold text-foreground mb-4">
                      {section.title}
                    </h3>
                    <ul className="space-y-2">
                      {section.items.map((item, itemIndex) => (
                        <li key={itemIndex} className="flex items-start space-x-3">
                          <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                          <span className="text-muted-foreground text-sm">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Important Notices */}
            <Card className="border-0 bg-gradient-to-r from-orange-500/10 to-red-500/10 border-l-4 border-orange-500">
              <CardContent className="p-8">
                <div className="flex items-start space-x-4">
                  <AlertTriangle className="h-6 w-6 text-orange-500 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="text-xl font-bold text-foreground mb-4">
                      Avisos Importantes
                    </h3>
                    <ul className="space-y-3 text-muted-foreground">
                      <li>• SwapMe es una plataforma de conexión, no un vendedor de productos</li>
                      <li>• Los intercambios son responsabilidad exclusiva de los usuarios</li>
                      <li>• No garantizamos la calidad o autenticidad de los productos</li>
                      <li>• Nos reservamos el derecho de suspender cuentas que violen estos términos</li>
                      <li>• Estos términos pueden cambiar sin previo aviso</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Limitation of Liability */}
            <Card className="border-0 bg-card/50 backdrop-blur-sm">
              <CardContent className="p-8">
                <h2 className="text-2xl font-bold text-foreground mb-4">
                  Limitación de Responsabilidad
                </h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  SwapMe actúa únicamente como una plataforma de conexión entre usuarios. 
                  No somos responsables por:
                </p>
                <ul className="space-y-2 text-muted-foreground">
                  <li>• La calidad, autenticidad o condición de los productos intercambiados</li>
                  <li>• Disputas entre usuarios</li>
                  <li>• Pérdidas o daños resultantes de intercambios</li>
                  <li>• Problemas de entrega o logística</li>
                  <li>• Contenido publicado por usuarios</li>
                </ul>
              </CardContent>
            </Card>

            {/* Contact */}
            <Card className="border-0 bg-gradient-to-r from-primary/5 to-eco-green/5">
              <CardContent className="p-8 text-center">
                <h2 className="text-2xl font-bold text-foreground mb-4">
                  ¿Necesitas Ayuda?
                </h2>
                <p className="text-muted-foreground mb-6">
                  Si tienes preguntas sobre estos Términos de Uso o necesitas aclaraciones 
                  sobre cualquier aspecto de la aplicación, contáctanos.
                </p>
                
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <div className="flex items-center space-x-3">
                    <Mail className="h-5 w-5 text-primary" />
                    <span className="text-foreground">recaldecd@gmail.com</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Footer Note */}
            <div className="text-center text-sm text-muted-foreground">
              <p>
                Al continuar usando SwapMe, confirmas que has leído, entendido y aceptado 
                estos Términos de Uso en su totalidad.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Terms;
