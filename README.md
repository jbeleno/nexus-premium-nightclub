# 🎉 NEXUS Premium Nightclub

Una aplicación web moderna y elegante para una discoteca de alta gama, desarrollada con React.js y diseñada con una paleta **Oro y Negro Mate** premium con efectos visuales avanzados.

## 🚀 Características Principales

- **🎨 Diseño Premium**: Paleta Oro y Negro Mate elegante y sofisticada
- **🌊 Fondo Animado**: Componente Silk con shaders personalizados de Three.js
- **📱 Responsive Design**: Mobile-first, perfecto en todos los dispositivos
- **✨ Animaciones Fluidas**: Framer Motion para transiciones suaves
- **🎭 Experiencia VIP**: Enfoque en servicios premium y exclusivos
- **🔧 Sistema Unificado**: Variables CSS centralizadas para consistencia total

## 🛠️ Stack Tecnológico

- **React.js** (vía Vite) - Framework principal
- **React Router DOM** - Enrutamiento
- **Framer Motion** - Animaciones y transiciones
- **Three.js** - Motor 3D para efectos visuales
- **React Three Fiber** - Integración 3D con React
- **Tailwind CSS** - Estilos y diseño responsive

## 📦 Instalación Rápida

```bash
# Clonar el repositorio
git clone <url-del-repositorio>
cd discoteca

# Instalar dependencias
npm install

# Instalar dependencias 3D (si hay conflictos)
npm install three @react-three/fiber --legacy-peer-deps

# Ejecutar en desarrollo
npm run dev
```

La aplicación se abrirá automáticamente en `http://localhost:3000`

## 🎨 Sistema de Diseño - Oro y Negro Mate

### **Paleta Principal**
- **Negro Mate**: `#000000` - Fondo principal elegante
- **Superficie**: `#1E1E1E` - Fondo de cards y elementos
- **Dorado Premium**: `#D4AF37` - Color principal para títulos y CTAs
- **Dorado Oscuro**: `#B8950B` - Variación para hover
- **Texto Primario**: `#EAEAEA` - Blanco roto para texto principal
- **Texto Secundario**: `#AAAAAA` - Gris para subtítulos
- **Texto sobre Dorado**: `#000000` - Negro para máximo contraste

### **Variables CSS Centralizadas**
```css
:root {
  --color-background: #000000;
  --color-surface: #1E1E1E;
  --color-primary-gold: #D4AF37;
  --color-text-primary: #EAEAEA;
  --color-text-secondary: #AAAAAA;
  --color-text-on-gold: #000000;
  --border-radius-global: 12px;
  --font-titles: 'Bebas Neue', sans-serif;
  --font-body: 'Roboto', sans-serif;
}
```

## 📱 Páginas Incluidas

### 🏠 **Home** - Página Principal
- Hero section con fondo Silk animado
- Próximos eventos (3 eventos destacados)
- Galería de fotos/videos
- CTA para experiencias VIP

### 🍸 **Menú** - Precios Premium
- Sistema de pestañas (Cócteles, Botellas, VIP, Hookah)
- Precios típicos de nightclub premium
- Cards con animaciones hover
- CTA hacia reservas VIP

### 📅 **Eventos** - Calendario Interactivo
- Vista mensual con eventos destacados
- Información completa de cada evento
- Sidebar con eventos próximos
- Click en fechas para ver detalles

### 📞 **Reservas** - Formulario VIP
- Datos personales y preferencias
- Información de políticas
- Mapa de ubicación
- Validación de campos

## 🎭 Componentes Especiales

### **Silk - Fondo Animado con Shaders**
```jsx
<Silk
  speed={3}           // Velocidad de animación
  scale={1.2}         // Escala del patrón
  color="#D4AF37"     // Dorado NEXUS
  noiseIntensity={1.2} // Intensidad de ruido
  rotation={0}         // Rotación del patrón
/>
```

**Características:**
- Shaders personalizados con Three.js
- Animación fluida y orgánica
- Color dorado integrado con la marca
- Performance optimizado
- Responsive automático

### **Navigation - Header Responsive**
- Desktop: Logo + enlaces horizontales + botón VIP
- Mobile: Logo + menú hamburguesa con overlay
- Scroll: Cambios de estilo al hacer scroll
- Animaciones: Transiciones suaves con Framer Motion

### **Sistema de Botones Unificado**
- **Botón Primario**: Fondo dorado, texto negro, hover dorado oscuro
- **Botón Secundario**: Borde dorado, texto dorado, hover fondo dorado
- **Consistencia**: Variables CSS centralizadas en todo el proyecto

## 🚀 Scripts Disponibles

- `npm run dev` - Servidor de desarrollo
- `npm run build` - Build de producción
- `npm run preview` - Preview del build
- `npm run lint` - Linter de código

## 📊 Estado del Proyecto

### ✅ **Completado**
- [x] Estructura base del proyecto con React + Vite
- [x] Sistema de diseño unificado Oro y Negro Mate
- [x] Componente Silk con shaders personalizados de Three.js
- [x] Navegación responsive con menú hamburguesa
- [x] Páginas principales (Home, Menú, Eventos, Reservas)
- [x] Footer completo con información y newsletter
- [x] Sistema de espaciado responsive
- [x] Animaciones fluidas con Framer Motion
- [x] Optimización mobile-first
- [x] Variables CSS centralizadas para consistencia
- [x] Refactorización completa del tema visual
- [x] Corrección de errores de Three.js/React Three Fiber

### 🔧 **Características Técnicas**
- **Variables CSS**: Sistema centralizado en `theme.css`
- **Componentes únicos**: Clases con prefijos `nexus-` para evitar conflictos
- **Responsive**: Breakpoints optimizados para todos los dispositivos
- **Performance**: CSS optimizado y componentes eficientes
- **Accesibilidad**: Contraste perfecto y legibilidad optimizada

## 📁 Estructura del Proyecto

```
src/
├── components/
│   ├── EventModal.jsx      # Modal de eventos semanales
│   ├── Footer.jsx          # Footer con información y newsletter
│   ├── Navigation.jsx      # Header con navegación responsive
│   └── Silk.jsx            # Componente de fondo animado con shaders
├── pages/
│   ├── Home.jsx            # Página principal con hero y eventos
│   ├── Menu.jsx            # Menú de precios (no pedidos)
│   ├── Eventos.jsx        # Calendario de eventos interactivo
│   └── Reservas.jsx       # Formulario de reservas VIP
├── styles/
│   ├── globals.css        # Estilos globales y variables CSS
│   ├── Header.css         # Estilos específicos del header
│   └── theme.css          # Sistema de diseño centralizado
└── assets/
    └── images/
        ├── img.jpg        # Imagen de ejemplo para productos
        └── fondo_galeria.jpg # Fondo para galería exclusiva
```

## 🎯 Características Destacadas

- **✨ Experiencia Premium**: Paleta dorada elegante y sofisticada
- **🎭 Interactividad**: Transiciones suaves y microinteracciones
- **📱 Mobile-First**: Diseño optimizado para todos los dispositivos
- **🎨 Consistencia**: Sistema de colores y espaciado unificado
- **⚡ Performance**: Optimizado y rápido
- **🔧 Mantenible**: Código bien estructurado y documentado

---

**NEXUS Premium Nightclub** - Una experiencia web premium para la discoteca más exclusiva de la ciudad.

*Desarrollado con ❤️ y tecnología de vanguardia*