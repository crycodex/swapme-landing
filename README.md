# SwapMe Landing Page 👕♻️

**SwapMe** es una landing page moderna y responsive para la aplicación móvil de intercambio sostenible de ropa. Desarrollada con React, TypeScript y Tailwind CSS, presenta una interfaz elegante con efectos glassmorphism y navegación fluida.

## 🌟 Características de la Landing Page

### 🎨 Diseño Moderno
- **Efectos Glassmorphism** - Interfaz moderna con efectos de cristal
- **Diseño Responsive** - Optimizado para desktop, tablet y móvil
- **Tema Adaptativo** - Soporte para modo claro y oscuro
- **Animaciones Suaves** - Transiciones fluidas y hover effects
- **Gradientes Sutiles** - Colores de marca (primary, eco-green)

### 📱 Secciones Principales

#### **Hero Section**
- Presentación impactante de la app
- Estadísticas destacadas (usuarios, intercambios, rating)
- Call-to-action principal con navegación suave
- Mockup de la aplicación con elementos flotantes
- Botón "Descargar App" que lleva a la sección de descarga

#### **Características (Features)**
- Sistema de intercambio directo
- Marketplace integrado
- Sistema de chat en tiempo real
- Autenticación segura con Firebase
- Interfaz moderna con glassmorphism
- Funcionalidades de perfil completas

#### **Cómo Funciona (How It Works)**
- **4 pasos claros del proceso:**
  1. Sube tu Ropa - Fotografiar y organizar prendas
  2. Explora y Busca - Navegar con filtros avanzados
  3. Negocia - Chat directo con otros usuarios
  4. Intercambia - Coordinar la entrega
- Características adicionales de seguridad
- Diseño con tarjetas interactivas

#### **Sección de Descarga (Download)**
- Botones de descarga para Google Play y App Store
- Estadísticas de la app (usuarios, rating, descargas)
- Características destacadas (app nativa, seguridad, tiempo real)
- Información de compatibilidad y requisitos
- Diseño con tarjetas atractivas

### 🧭 Navegación Inteligente
- **Navbar Responsive** - Con efectos de scroll y menú móvil
- **Navegación Suave** - Scroll automático entre secciones
- **Enlaces Funcionales** - Todos los enlaces llevan a sus secciones
- **Menú Móvil** - Se cierra automáticamente al navegar
- **Botones de Descarga** - En navbar y hero, todos funcionales

### 📄 Páginas Legales
- **Política de Privacidad** (`/privacy`) - Información detallada sobre protección de datos
- **Términos de Uso** (`/terms`) - Condiciones y responsabilidades
- **Diseño Profesional** - Con iconografía clara y secciones organizadas
- **Información de Contacto** - Datos actualizados de SwapMe

### 🎯 Funcionalidades Técnicas
- **Newsletter** - Sistema de suscripción (comentado, listo para implementar)
- **Notificaciones Toast** - Feedback visual con Sonner
- **Validaciones** - Formularios con validación en tiempo real
- **Estados de Carga** - Indicadores visuales durante procesos
- **Manejo de Errores** - Mensajes claros y específicos

## 🚀 Tecnologías Utilizadas

### Frontend
- **React 18** - Biblioteca de interfaz de usuario
- **TypeScript** - Tipado estático para mayor robustez
- **Vite** - Herramienta de build rápida y moderna
- **Tailwind CSS** - Framework de CSS utility-first
- **shadcn/ui** - Componentes de UI modernos y accesibles

### Componentes UI
- **Lucide React** - Iconografía moderna y consistente
- **Sonner** - Sistema de notificaciones toast
- **React Router** - Navegación entre páginas
- **React Query** - Manejo de estado del servidor

### Herramientas de Desarrollo
- **ESLint** - Linter para calidad de código
- **PostCSS** - Procesador de CSS
- **Autoprefixer** - Prefijos CSS automáticos

## 📂 Estructura del Proyecto

```
src/
├── components/           # Componentes reutilizables
│   ├── ui/              # Componentes base de shadcn/ui
│   ├── Hero.tsx         # Sección principal
│   ├── Features.tsx     # Características de la app
│   ├── HowItWorks.tsx   # Proceso de intercambio
│   ├── DownloadSection.tsx # Sección de descarga
│   ├── ScrollNavbar.tsx # Navegación principal
│   ├── Footer.tsx       # Pie de página
│   └── ThemeProvider.tsx # Proveedor de temas
├── pages/               # Páginas de la aplicación
│   ├── Index.tsx        # Página principal
│   ├── Privacy.tsx      # Política de privacidad
│   ├── Terms.tsx        # Términos de uso
│   └── NotFound.tsx     # Página 404
├── hooks/               # Hooks personalizados
│   └── use-newsletter.ts # Hook para newsletter (comentado)
├── assets/              # Recursos estáticos
│   └── app-mockup.png   # Mockup de la aplicación
├── lib/                 # Utilidades
│   └── utils.ts         # Funciones helper
└── App.tsx             # Componente principal
```

## 🛠️ Instalación y Configuración

### Prerrequisitos
- Node.js 18+ 
- npm o yarn
- Git

### 1. Clonar el Repositorio
```bash
git clone https://github.com/tu-usuario/swapme-landing.git
cd swapme-landing
```

### 2. Instalar Dependencias
```bash
npm install
# o
yarn install
```

### 3. Ejecutar en Desarrollo
```bash
npm run dev
# o
yarn dev
```

### 4. Construir para Producción
```bash
npm run build
# o
yarn build
```

### 5. Preview de Producción
```bash
npm run preview
# o
yarn preview
```

## 🎨 Personalización

### Colores de Marca
Los colores principales están definidos en `tailwind.config.ts`:
- **Primary**: Color principal de la marca
- **Eco-green**: Verde ecológico para elementos sostenibles
- **Success**: Verde para estados exitosos
- **Foreground/Background**: Colores de texto y fondo

### Componentes
Todos los componentes están en `src/components/` y son fácilmente personalizables:
- Modifica estilos en las clases de Tailwind
- Ajusta contenido en los archivos TSX
- Agrega nuevas secciones siguiendo el patrón existente

### Contenido
- **Textos**: Edita directamente en los componentes
- **Imágenes**: Reemplaza archivos en `src/assets/`
- **Enlaces**: Actualiza URLs en los componentes
- **Información de contacto**: Modifica en Footer.tsx

## 📱 Responsive Design

### Breakpoints
- **Mobile**: < 768px
- **Tablet**: 768px - 1024px
- **Desktop**: > 1024px

### Adaptaciones
- **Navbar**: Se convierte en menú hamburguesa en móvil
- **Grids**: Se adaptan de columnas a filas según el tamaño
- **Tipografía**: Tamaños escalables con `lg:` y `sm:` prefixes
- **Espaciado**: Padding y margin responsivos

## 🚀 Despliegue

### Vercel (Recomendado)
1. Conecta tu repositorio de GitHub
2. Configura el build command: `npm run build`
3. Configura el output directory: `dist`
4. Despliega automáticamente

### Netlify
1. Conecta tu repositorio
2. Build command: `npm run build`
3. Publish directory: `dist`
4. Despliega

### GitHub Pages
```bash
npm run build
# Sube la carpeta dist/ a tu repositorio
```

## 🔧 Comandos Útiles

```bash
# Desarrollo
npm run dev          # Servidor de desarrollo
npm run build        # Construir para producción
npm run preview      # Preview de producción
npm run lint         # Ejecutar ESLint

# Instalación
npm install          # Instalar dependencias
npm update           # Actualizar dependencias
```

## 📈 Optimizaciones

### Performance
- **Lazy Loading** - Componentes cargados bajo demanda
- **Code Splitting** - Código dividido por rutas
- **Image Optimization** - Imágenes optimizadas
- **Bundle Size** - Build optimizado con Vite

### SEO
- **Meta Tags** - Configurados en index.html
- **Semantic HTML** - Estructura semántica correcta
- **Alt Text** - Imágenes con texto alternativo
- **Structured Data** - Preparado para schema markup

## 🤝 Contribución

1. Fork el proyecto
2. Crea una rama para tu feature (`git checkout -b feature/nueva-funcionalidad`)
3. Commit tus cambios (`git commit -am 'Añadir nueva funcionalidad'`)
4. Push a la rama (`git push origin feature/nueva-funcionalidad`)
5. Abre un Pull Request

### Estándares de Código
- Usa TypeScript para tipado
- Sigue las convenciones de React
- Usa Prettier para formateo
- Escribe componentes reutilizables
- Documenta funciones complejas

## 📄 Licencia

Este proyecto está bajo la Licencia MIT - ver el archivo [LICENSE](LICENSE) para más detalles.

## 👥 Equipo

- **Desarrollador Principal**: Cristhian Recalde
- **Email**: recaldecd@gmail.com
- **Ubicación**: Ibarra, Ecuador

## 🙏 Agradecimientos

- **React Team** por el increíble framework
- **Tailwind CSS** por el sistema de diseño
- **shadcn/ui** por los componentes de UI
- **Lucide** por la iconografía
- **Vite** por la herramienta de build
- **Open Source Community** por las librerías utilizadas

## 📈 Roadmap

### Versión 1.1 (En Progreso)
- [ ] Implementar newsletter funcional
- [ ] Agregar analytics
- [ ] Optimizar SEO
- [ ] Agregar más animaciones

### Versión 1.2 (Próximamente)
- [ ] Sección de testimonios
- [ ] Blog integrado
- [ ] Chat en vivo
- [ ] Múltiples idiomas

### Versión 2.0 (Futuro)
- [ ] Dashboard de administración
- [ ] API de contenido
- [ ] Sistema de comentarios
- [ ] Integración con redes sociales

## 🔄 Estado del Proyecto

**Estado Actual**: 🟢 Activo en desarrollo
**Última Actualización**: Diciembre 2024
**Versión**: 1.0.0

---

<div align="center">
  <strong>🌱 Hecho con ❤️ para un futuro más sostenible</strong>
  
  Si te gusta este proyecto, ¡dale una ⭐️!
</div>