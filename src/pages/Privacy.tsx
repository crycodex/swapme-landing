import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft, Shield, Eye, Lock, Database, Users, Mail } from "lucide-react";
import { Link } from "react-router-dom";

const Privacy = () => {
  const sections = [
    {
      icon: Database,
      title: "Información que Recopilamos",
      content: [
        "Información de perfil (nombre, email, foto de perfil)",
        "Información de productos (fotos, descripciones, precios)",
        "Mensajes y comunicaciones en el chat",
        "Datos de uso de la aplicación",
        "Información de ubicación (opcional, para intercambios locales)",
        "Información de pago (procesada por terceros seguros)"
      ]
    },
    {
      icon: Eye,
      title: "Cómo Usamos tu Información",
      content: [
        "Proporcionar y mejorar nuestros servicios",
        "Facilitar intercambios y comunicaciones entre usuarios",
        "Personalizar tu experiencia en la aplicación",
        "Enviar notificaciones sobre intercambios y mensajes",
        "Analizar el uso de la aplicación para mejoras",
        "Cumplir con obligaciones legales"
      ]
    },
    {
      icon: Lock,
      title: "Protección de Datos",
      content: [
        "Encriptación de datos en tránsito y en reposo",
        "Autenticación segura con Firebase",
        "Acceso restringido a información personal",
        "Monitoreo continuo de seguridad",
        "Cumplimiento con estándares de seguridad internacionales",
        "Respaldo seguro de datos"
      ]
    },
    {
      icon: Users,
      title: "Compartir Información",
      content: [
        "No vendemos tu información personal a terceros",
        "Compartimos datos solo con tu consentimiento explícito",
        "Información de perfil visible para otros usuarios (nombre, foto)",
        "Datos de productos compartidos en el marketplace",
        "Información necesaria para procesar pagos",
        "Datos requeridos por autoridades legales (si es necesario)"
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
                <Shield className="h-4 w-4 mr-1" />
                Protección de Datos
              </Badge>
              
              <h1 className="text-4xl lg:text-6xl font-bold text-foreground mb-6">
                Política de
                <span className="text-transparent bg-primary bg-clip-text"> Privacidad</span>
              </h1>
              
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed mb-8">
                En SwapMe, tu privacidad es nuestra prioridad. Esta política explica cómo recopilamos, 
                usamos y protegemos tu información personal.
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
                  SwapMe es una aplicación móvil que facilita el intercambio sostenible de ropa. 
                  Esta Política de Privacidad describe cómo recopilamos, usamos, almacenamos y 
                  protegemos tu información personal cuando utilizas nuestra aplicación.
                </p>
                <p className="text-muted-foreground leading-relaxed mt-4">
                  Al usar SwapMe, aceptas las prácticas descritas en esta política. Si no estás 
                  de acuerdo con alguna parte de esta política, por favor no uses nuestra aplicación.
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

            {/* Your Rights */}
            <Card className="border-0 bg-card/50 backdrop-blur-sm">
              <CardContent className="p-8">
                <h2 className="text-2xl font-bold text-foreground mb-6">
                  Tus Derechos
                </h2>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h3 className="text-lg font-semibold text-foreground mb-3">Acceso y Control</h3>
                    <ul className="space-y-2 text-muted-foreground">
                      <li>• Acceder a tu información personal</li>
                      <li>• Corregir datos inexactos</li>
                      <li>• Eliminar tu cuenta y datos</li>
                      <li>• Exportar tus datos</li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-foreground mb-3">Comunicación</h3>
                    <ul className="space-y-2 text-muted-foreground">
                      <li>• Optar por no recibir notificaciones</li>
                      <li>• Controlar la visibilidad de tu perfil</li>
                      <li>• Gestionar preferencias de privacidad</li>
                      <li>• Contactar nuestro soporte</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Contact */}
            <Card className="border-0 bg-gradient-to-r from-primary/5 to-eco-green/5">
              <CardContent className="p-8 text-center">
                <h2 className="text-2xl font-bold text-foreground mb-4">
                  ¿Tienes Preguntas?
                </h2>
                <p className="text-muted-foreground mb-6">
                  Si tienes preguntas sobre esta Política de Privacidad o sobre cómo manejamos 
                  tu información, no dudes en contactarnos.
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
                Esta política puede actualizarse ocasionalmente. Te notificaremos sobre cambios 
                significativos a través de la aplicación o por email.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Privacy;
