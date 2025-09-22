import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft, FileText, Scale, Users, AlertTriangle, Shield, Mail } from "lucide-react";
import { Link } from "react-router-dom";

const Terms = () => {
  const sections = [
    {
      icon: Users,
      title: "1. Aceptación de los Términos",
      content: [
        "Al usar SwapMe, aceptas estos términos de servicio y nuestra política de privacidad",
        "Si no estás de acuerdo con alguno de estos términos, no debes usar nuestra aplicación",
        "El uso continuado de la aplicación constituye aceptación de estos términos"
      ]
    },
    {
      icon: FileText,
      title: "2. Contenido Generado por Usuarios",
      content: [
        "No publicar contenido inapropiado, ofensivo, ilegal o que viole los derechos de otros",
        "No usar la aplicación para spam, acoso o intimidación",
        "No compartir información personal de otros usuarios",
        "No publicar contenido falso o engañoso",
        "No usar la aplicación para actividades comerciales no autorizadas"
      ]
    },
    {
      icon: Shield,
      title: "3. Política de Tolerancia Cero",
      content: [
        "Contenido sexual o pornográfico",
        "Acoso, bullying o intimidación",
        "Discriminación por raza, género, religión u orientación sexual",
        "Violencia o amenazas",
        "Spam o contenido fraudulento",
        "Productos falsos o engañosos"
      ]
    },
    {
      icon: Scale,
      title: "4. Moderación de Contenido",
      content: [
        "Revisar y moderar todo el contenido generado por usuarios",
        "Remover contenido que viole estos términos",
        "Suspender o banear cuentas que violen nuestras políticas",
        "Actuar sobre reportes de contenido inapropiado dentro de 24 horas"
      ]
    },
    {
      icon: Users,
      title: "5. Sistema de Reportes",
      content: [
        "Los usuarios pueden reportar contenido inapropiado o usuarios abusivos",
        "Todos los reportes serán revisados y actuados dentro de 24 horas",
        "Los usuarios que violen repetidamente estos términos serán permanentemente suspendidos",
        "Mantenemos un registro de todas las violaciones para seguimiento"
      ]
    },
    {
      icon: Shield,
      title: "6. Bloqueo de Usuarios",
      content: [
        "Los usuarios pueden bloquear a otros usuarios que consideren abusivos",
        "Los usuarios bloqueados no podrán contactar al usuario que los bloqueó",
        "El bloqueo es inmediato y efectivo",
        "Los usuarios bloqueados no recibirán notificación del bloqueo"
      ]
    }
  ];

  const additionalSections = [
    {
      title: "7. Responsabilidad del Usuario",
      items: [
        "El contenido que publican en la aplicación",
        "Las interacciones con otros usuarios",
        "Cumplir con todas las leyes aplicables",
        "Mantener la seguridad de su cuenta"
      ]
    },
    {
      title: "8. Limitación de Responsabilidad",
      items: [
        "SwapMe no se hace responsable por el contenido generado por usuarios",
        "Las interacciones entre usuarios son responsabilidad de los mismos",
        "Las transacciones realizadas fuera de la aplicación no son responsabilidad de SwapMe",
        "No garantizamos la calidad o autenticidad de los productos intercambiados"
      ]
    },
    {
      title: "9. Modificaciones",
      items: [
        "Nos reservamos el derecho de modificar estos términos en cualquier momento",
        "Los usuarios serán notificados de cambios significativos",
        "El uso continuado después de los cambios constituye aceptación",
        "Los cambios entrarán en vigor inmediatamente después de la notificación"
      ]
    },
    {
      title: "10. Contacto",
      items: [
        "Para reportar violaciones de estos términos: support@swapme.app",
        "Para preguntas sobre moderación: moderation@swapme.app",
        "Para soporte general: recaldecd@gmail.com",
        "Respuesta garantizada dentro de 24 horas"
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
                  <span>Última actualización: Septiembre 2025</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-primary rounded-full"></div>
                  <span>Vigente desde: Septiembre 2025</span>
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

            {/* Additional Sections */}
            {additionalSections.map((section, index) => (
              <Card key={index} className="border-0 bg-card/50 backdrop-blur-sm">
                <CardContent className="p-8">
                  <h2 className="text-2xl font-bold text-foreground mb-4">
                    {section.title}
                  </h2>
                  <ul className="space-y-3">
                    {section.items.map((item, itemIndex) => (
                      <li key={itemIndex} className="flex items-start space-x-3">
                        <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                        <span className="text-muted-foreground">{item}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}

            {/* Security Commitment */}
            <Card className="border-0 bg-gradient-to-r from-primary/10 to-eco-green/10 border-l-4 border-primary">
              <CardContent className="p-8">
                <div className="flex items-start space-x-4">
                  <Shield className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="text-xl font-bold text-foreground mb-4">
                      Compromiso de Seguridad
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">
                      Nos comprometemos a mantener un entorno seguro y respetuoso para todos nuestros usuarios. 
                      Si encuentras contenido inapropiado, repórtalo inmediatamente y actuaremos dentro de 24 horas.
                    </p>
                    <div className="mt-4 space-y-2">
                      <div className="flex items-center space-x-2">
                        <div className="w-2 h-2 bg-primary rounded-full"></div>
                        <span className="text-sm text-muted-foreground">
                          Moderación activa 24/7
                        </span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <div className="w-2 h-2 bg-primary rounded-full"></div>
                        <span className="text-sm text-muted-foreground">
                          Respuesta garantizada en 24 horas
                        </span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <div className="w-2 h-2 bg-primary rounded-full"></div>
                        <span className="text-sm text-muted-foreground">
                          Política de tolerancia cero para abuso
                        </span>
                      </div>
                    </div>
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
                
                <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
                  <div className="flex flex-col items-center space-y-2">
                    <Mail className="h-5 w-5 text-primary" />
                    <span className="text-sm font-medium text-foreground">Soporte General</span>
                    <span className="text-sm text-muted-foreground">recaldecd@gmail.com</span>
                  </div>
                  <div className="flex flex-col items-center space-y-2">
                    <Shield className="h-5 w-5 text-primary" />
                    <span className="text-sm font-medium text-foreground">Reportar Violaciones</span>
                    <span className="text-sm text-muted-foreground">ecaldecd@gmail.com</span>
                  </div>
                  <div className="flex flex-col items-center space-y-2">
                    <AlertTriangle className="h-5 w-5 text-primary" />
                    <span className="text-sm font-medium text-foreground">Moderación</span>
                    <span className="text-sm text-muted-foreground">ecaldecd@gmail.com</span>
                  </div>
                </div>
                
                <div className="mt-6 p-4 bg-primary/10 rounded-lg">
                  <p className="text-sm text-muted-foreground">
                    <strong>Respuesta garantizada dentro de 24 horas</strong>
                  </p>
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
