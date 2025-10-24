# 🎉 NEXUS Premium Nightclub

A modern and elegant web application for a high-end nightclub, built with React.js and designed with a premium **Gold and Matte Black** theme featuring advanced 3D animations and smooth interactions.

## 🚀 Key Features

- **🎨 Premium Design**: Elegant Gold and Matte Black color scheme
- **🌊 Animated Background**: Custom Silk component with Three.js shaders
- **📱 Responsive Design**: Mobile-first approach, perfect on all devices
- **✨ Smooth Animations**: Framer Motion for fluid transitions
- **🎭 VIP Experience**: Focus on premium and exclusive services
- **🔧 Unified System**: Centralized CSS variables for total consistency

## 🛠️ Tech Stack

- **React.js** (via Vite) - Main framework
- **React Router DOM** - Client-side routing with lazy loading
- **Framer Motion** - Animations and transitions
- **Three.js** - 3D graphics engine
- **React Three Fiber** - 3D integration with React
- **Zustand** - Global state management
- **React Hook Form** - Form validation
- **Zod** - Schema validation
- **React Hot Toast** - Toast notifications
- **React Helmet Async** - SEO optimization
- **CSS Custom Properties** - Centralized theming system

## 📦 Quick Installation

```bash
# Clone the repository
git clone https://github.com/your-username/nexus-premium-nightclub.git
cd nexus-premium-nightclub

# Install dependencies
npm install

# Install 3D dependencies (if conflicts occur)
npm install three @react-three/fiber --legacy-peer-deps

# Run development server
npm run dev
```

The application will automatically open at `http://localhost:3000`

## 🎨 Design System - Gold and Matte Black

### **Color Palette**
- **Matte Black**: `#000000` - Elegant main background
- **Surface**: `#1E1E1E` - Background for cards and elements
- **Premium Gold**: `#D4AF37` - Primary color for titles and CTAs
- **Dark Gold**: `#B8950B` - Variation for hover states
- **Primary Text**: `#EAEAEA` - Off-white for main text
- **Secondary Text**: `#AAAAAA` - Gray for subtitles
- **Text on Gold**: `#000000` - Black for maximum contrast

### **Centralized CSS Variables**
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

## 📱 Included Pages

### 🏠 **Home** - Main Page
- Hero section with animated Silk background
- Upcoming events preview (3 featured events)
- Photo/video gallery
- VIP experience CTA

### 🍸 **Menu** - Premium Pricing
- Tabbed system (Cocktails, Bottles, VIP, Hookah)
- Premium nightclub pricing
- Cards with hover animations
- CTA towards VIP reservations

### 📅 **Events** - Interactive Calendar
- Monthly view with highlighted events
- Complete event information
- Sidebar with upcoming events
- Click on dates to view details

### 📞 **Reservations** - VIP Form
- Personal data and preferences
- Policy information
- Location map
- Field validation

## 🎭 Special Components

### **Silk - Animated Background with Shaders**
```jsx
<Silk
  speed={3}           // Animation speed
  scale={1.2}         // Pattern scale
  color="#D4AF37"     // NEXUS gold
  noiseIntensity={1.2} // Noise intensity
  rotation={0}         // Pattern rotation
/>
```

**Features:**
- Custom shaders with Three.js
- Fluid and organic animation
- Gold color integrated with brand
- Optimized performance
- Automatic responsive behavior

### **Navigation - Responsive Header**
- Desktop: Logo + horizontal links + VIP button
- Mobile: Logo + hamburger menu with overlay
- Scroll: Dynamic style changes
- Animations: Smooth transitions with Framer Motion

### **Unified Button System**
- **Primary Button**: Gold background, black text, dark gold hover
- **Secondary Button**: Gold border, gold text, gold background hover
- **Consistency**: Centralized CSS variables throughout the project

## 🚀 Available Scripts

- `npm run dev` - Development server
- `npm run build` - Production build
- `npm run preview` - Preview the build
- `npm run lint` - Code linter
- `npm start` - Start production preview

## 📊 Project Status

### ✅ **Completed**
- [x] Project base structure with React + Vite
- [x] Unified Gold and Matte Black design system
- [x] Silk component with custom Three.js shaders
- [x] Responsive navigation with hamburger menu
- [x] Main pages (Home, Menu, Events, Reservations)
- [x] Complete footer with information and newsletter
- [x] Responsive spacing system
- [x] Fluid animations with Framer Motion
- [x] Mobile-first optimization
- [x] Centralized CSS variables for consistency
- [x] Complete visual theme refactoring
- [x] Three.js/React Three Fiber error fixes

### 🔧 **Technical Features**
- **CSS Variables**: Centralized system in `theme.css`
- **Unique Components**: Classes with `nexus-` prefixes to avoid conflicts
- **Responsive**: Optimized breakpoints for all devices
- **Performance**: Code splitting, lazy loading, and efficient bundle size
- **Accessibility**: WCAG compliant with ARIA labels and focus management
- **Form Validation**: Client-side validation with Zod schemas
- **Error Handling**: Error boundaries for graceful error recovery
- **SEO Optimized**: Meta tags and Open Graph support
- **State Management**: Zustand for global state with persistence

## 📁 Project Structure

```
src/
├── components/
│   ├── Calendar.jsx           # Interactive event calendar
│   ├── DatePicker.jsx         # Custom date picker
│   ├── ErrorBoundary.jsx      # Error handling component
│   ├── Footer.jsx             # Footer with information and newsletter
│   ├── LoadingSpinner.jsx     # Loading state component
│   ├── Navigation.jsx         # Responsive header navigation
│   ├── OptimizedImage.jsx     # Image with lazy loading
│   ├── ProductModal.jsx       # Product detail modal
│   ├── SEO.jsx                # SEO meta tags component
│   ├── Select.jsx             # Custom select component
│   └── Silk.jsx               # Animated background with shaders
├── pages/
│   ├── Home.jsx               # Main page with hero and events
│   ├── Menu.jsx               # Pricing menu (not ordering)
│   ├── Eventos.jsx            # Interactive events calendar
│   └── Reservas.jsx           # VIP reservations form with validation
├── constants/
│   ├── apiEndpoints.js        # API endpoint definitions
│   ├── errorMessages.js       # Centralized error messages
│   └── routes.js              # Route constants
├── data/
│   ├── events.js              # Event data
│   └── menu.js                # Menu items and categories
├── hooks/
│   ├── useScrollLock.js       # Custom scroll lock hook
│   └── useToast.js            # Toast notification hook
├── services/
│   ├── api/
│   │   ├── client.js          # API client
│   │   ├── events.js          # Events service
│   │   └── reservations.js    # Reservations service
│   └── validation/
│       ├── contactSchema.js   # Contact form validation
│       └── reservationSchema.js # Reservation form validation
├── store/
│   ├── useReservationStore.js # Reservation state management
│   └── useUIStore.js          # UI state management
├── styles/
│   ├── globals.css            # Global styles and CSS variables
│   ├── Header.css             # Header-specific styles
│   └── theme.css              # Centralized design system
├── utils/
│   └── ScrollToTop.jsx        # Scroll restoration component
└── assets/
    └── images/
        ├── img.jpg            # Example image for products
        └── fondo_galeria.jpg  # Background for exclusive gallery
```

## 🎯 Highlighted Features

- **✨ Premium Experience**: Elegant and sophisticated gold color scheme
- **🎭 Interactivity**: Smooth transitions and microinteractions
- **📱 Mobile-First**: Optimized design for all devices
- **🎨 Consistency**: Unified color and spacing system
- **⚡ Performance**: Optimized and fast
- **🔧 Maintainable**: Well-structured and documented code

## 🚀 Deployment

### **Vercel (Recommended)**
1. Connect your GitHub repository to Vercel
2. Automatic deployment configuration:
   - Framework: Vite
   - Build Command: `npm run build`
   - Output Directory: `dist`
   - Install Command: `npm install`

### **Other Platforms**
- **Netlify**: Compatible with Vite builds
- **GitHub Pages**: Requires additional configuration
- **AWS S3**: Static hosting compatible

## 📈 Performance

- **Build Size**: Optimized chunks with code splitting
- **CSS**: 82KB minified and gzipped
- **JavaScript**: Separated into vendor, router, motion, three, and icons chunks
- **Images**: Optimized and compressed
- **Loading**: Efficient lazy loading and chunking

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🎭 About NEXUS

NEXUS Premium Nightclub represents the pinnacle of nightlife entertainment, combining cutting-edge technology with luxurious design to create an unforgettable digital experience that mirrors the exclusivity and sophistication of our physical venue.

---

## 🔄 Latest Updates

### **Version 2.0.0 - October 2024** 🎉

#### 🏗️ **Arquitectura y Estado**
- ✅ **Zustand State Management**: Gestión de estado global eficiente
- ✅ **Service Layer**: Capa de servicios con API client y servicios específicos
- ✅ **Custom Hooks**: Hooks personalizados para funcionalidades reutilizables
- ✅ **Arquitectura Escalable**: Separación clara de responsabilidades

#### 📝 **Validación y Formularios**
- ✅ **React Hook Form**: Manejo avanzado de formularios
- ✅ **Zod Schemas**: Validación robusta con esquemas tipados
- ✅ **Toast Notifications**: Feedback visual con React Hot Toast
- ✅ **Error Messages**: Mensajes de error centralizados y consistentes

#### 🔒 **Manejo de Errores**
- ✅ **Error Boundaries**: Recuperación elegante de errores
- ✅ **Loading States**: Estados de carga personalizados
- ✅ **Graceful Degradation**: Experiencia fluida ante fallos

#### 🚀 **Rendimiento**
- ✅ **Lazy Loading**: Carga diferida de rutas con React.lazy
- ✅ **Code Splitting**: División automática de código por rutas
- ✅ **Image Optimization**: Imágenes con lazy loading y aspectRatio
- ✅ **Memoización**: Componentes optimizados con React.memo

#### ♿ **Accesibilidad (WCAG 2.1)**
- ✅ **ARIA Labels**: Etiquetas descriptivas en todos los componentes interactivos
- ✅ **Keyboard Navigation**: Navegación completa por teclado
- ✅ **Focus Management**: Gestión apropiada del foco
- ✅ **Screen Reader Support**: Soporte para lectores de pantalla
- ✅ **Semantic HTML**: Uso correcto de elementos semánticos

#### 🔍 **SEO**
- ✅ **React Helmet Async**: Meta tags dinámicos por página
- ✅ **Open Graph**: Optimización para redes sociales
- ✅ **Meta Descriptions**: Descripciones únicas por página
- ✅ **Canonical URLs**: URLs canónicas para SEO

#### 📊 **Organización de Datos**
- ✅ **Data Layer**: Datos separados en archivos independientes
- ✅ **Constants**: Constantes centralizadas (rutas, endpoints, mensajes)
- ✅ **Type Safety**: Validación de datos con Zod

### **Version 1.1.0 - December 2024**
- ✅ **Simplified Architecture**: Removed internationalization for streamlined experience
- ✅ **Performance Optimization**: Faster loading times and improved responsiveness
- ✅ **UI Refinements**: Enhanced visual consistency across all pages
- ✅ **Mobile Experience**: Improved touch interactions and navigation
- ✅ **Code Cleanup**: Removed unused components and optimized bundle size

### **Deployment Status**
- **Live Demo**: [https://nexus-premium-nightclub.vercel.app](https://nexus-premium-nightclub.vercel.app)
- **Last Updated**: December 2024
- **Status**: ✅ Active and Deployed
- **Performance**: Optimized for production

---

**NEXUS Premium Nightclub** - A premium web experience for the city's most exclusive nightclub.

*Built with ❤️ and cutting-edge technology*

## 🌐 Live Demo

Visit the live application: [https://nexus-premium-nightclub.vercel.app](https://nexus-premium-nightclub.vercel.app)

## 📱 Features Showcase

- **Hero Section**: Animated Silk background with custom shaders
- **Events Calendar**: Interactive monthly calendar with event details
- **Premium Menu**: Luxury pricing display for VIP services
- **Reservation System**: Complete VIP booking form
- **Responsive Design**: Perfect on desktop, tablet, and mobile
- **Gold Theme**: Elegant Gold and Matte Black color scheme