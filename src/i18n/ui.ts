// Centralized internationalization dictionary and structured content for Spanish and English locales.

export const languages = {
  es: "Español",
  en: "English",
};

export const defaultLang = "es";

export const ui = {
  es: {
    // Navigation
    "nav.home": "Inicio",
    "nav.services": "Servicios",
    "nav.products": "Mis Apps",
    "nav.contact": "Contacto",
    "nav.cta": "Hablemos",
    "nav.menu": "Menú",
    "nav.language": "Idioma",

    // Hero Section
    "hero.badge": "Disponible para proyectos freelance y consultoría",
    "hero.greeting": "¡Hola! Soy Luis Urruela",
    "hero.role": "Desarrollador Full-Stack, Arquitecto Web & Creador de Apps",
    "hero.description":
      "Con más de 25 años de experiencia transformando ideas en productos digitales rentables, modernos y escalables desde México. Desarrollo sistemas a la medida, sitios web de alto impacto y aplicaciones listas para impulsar las ventas de tu negocio.",
    "hero.primary-cta": "Iniciar un proyecto",
    "hero.secondary-cta": "Explorar mis servicios",
    "hero.tertiary-cta": "Ver App para Restaurantes",
    "hero.stat1.value": "+25",
    "hero.stat1.label": "Años de experiencia",
    "hero.stat2.value": "100%",
    "hero.stat2.label": "Soluciones a medida",
    "hero.stat3.value": "24/7",
    "hero.stat3.label": "Productos en la nube",

    // Services Section
    "services.badge": "Servicios como Freelance",
    "services.title": "Soluciones digitales pensadas para hacer crecer tu negocio",
    "services.subtitle":
      "Te acompaño desde la conceptualización y el diseño UI/UX hasta el despliegue en la nube, creando herramientas rápidas, seguras y fáciles de usar.",
    "services.cta": "Cotizar este servicio",

    // Products / Apps Section (Restaurant Platform based on Sazón Casero)
    "products.badge": "Mis Apps • Producto Destacado",
    "products.title": "Plataforma de Menú Inteligente y Pedidos por WhatsApp para Restaurantes",
    "products.subtitle":
      "Digitaliza tu restaurante, fonda gourmet, cafetería o dark kitchen sin pagar comisiones por pedido. Nacida y probada en operación real con nuestro caso de éxito Sazón Casero.",
    "products.case-study-badge": "Caso de Éxito Real: Sazón Casero v2.0",
    "products.problem-solution":
      "Olvídate de contestar \"¿qué hay de comer hoy y cuánto cuesta?\" decenas de veces al día. Tus comensales arman su pedido o paquete desde su celular en segundos y tú recibes la orden lista y calculada directamente en tu WhatsApp.",
    "products.tab.diner": "Menú Digital y Platillos",
    "products.tab.admin": "Panel Admin en 1 Clic",
    "products.tab.orders": "Pedidos por WhatsApp",
    "products.tab.brand": "Personalización de Marca",
    "products.cta.demo": "Quiero esta App para mi Restaurante",
    "products.cta.whatsapp": "Solicitar Demo por WhatsApp",
    "products.zero-commission": "0% Comisiones por venta • 100% Tu propia marca y tus clientes",
    "products.steps.title": "¿Cómo funciona para tus clientes y tu cocina?",
    "products.step1.title": "1. El comensal arma su orden",
    "products.step1.desc":
      "Elige platillos, paquetes de comida corrida, guarniciones, bebidas y postres desde una interfaz móvil rápida y apetitosa.",
    "products.step2.title": "2. Pedido directo a tu WhatsApp",
    "products.step2.desc":
      "Con un solo toque, la app envía un mensaje estructurado con el desglose completo y el total exacto calculado.",
    "products.step3.title": "3. Control total desde tu celular",
    "products.step3.desc":
      "¿Se terminó un guisado a las 2:30 PM? Apágalo en 1 clic desde tu teléfono y actualiza precios o promociones al instante.",

    // Contact Section
    "contact.badge": "Contacto",
    "contact.title": "¿Listo para llevar tu negocio o restaurante al siguiente nivel?",
    "contact.subtitle":
      "Cuéntame sobre tu proyecto freelance o solicita una demostración personalizada de la App para Restaurantes. Te responderé a la brevedad.",
    "contact.form.name": "Nombre completo",
    "contact.form.name.placeholder": "Ej. Carlos Mendoza",
    "contact.form.email": "Correo electrónico",
    "contact.form.email.placeholder": "carlos@tuempresa.com",
    "contact.form.phone": "Teléfono / WhatsApp",
    "contact.form.phone.placeholder": "+52 993 000 0000",
    "contact.form.interest": "¿En qué te puedo ayudar?",
    "contact.form.interest.restaurant": "App de Menú y Pedidos para mi Restaurante",
    "contact.form.interest.web": "Diseño y Desarrollo de Sitio Web / Landing Page",
    "contact.form.interest.system": "Sistema Web / Software a la Medida",
    "contact.form.interest.mobile": "Aplicación Móvil / PWA",
    "contact.form.interest.other": "Consultoría Tecnológica / Otro proyecto",
    "contact.form.message": "Detalles de tu proyecto o negocio",
    "contact.form.message.placeholder":
      "Platícame brevemente qué necesitas, el giro de tu negocio o cómo te gustaría empezar...",
    "contact.form.submit": "Enviar Mensaje",
    "contact.form.submitting": "Enviando...",
    "contact.form.submit-whatsapp": "Enviar por WhatsApp",
    "contact.form.success":
      "¡Mensaje enviado con éxito! Recibí tu solicitud en Netlify y te responderé a la brevedad.",
    "contact.form.error":
      "Ocurrió un problema al enviar el formulario. Por favor intenta de nuevo o escríbeme directamente por WhatsApp.",
    "contact.info.title": "Canales de contacto directo",
    "contact.info.desc":
      "Prefieres trato directo e inmediato: escríbeme por WhatsApp o envíame un correo y conversemos sin compromiso.",
    "contact.info.whatsapp.label": "WhatsApp Directo",
    "contact.info.email.label": "Correo Electrónico",
    "contact.info.location.label": "Ubicación",
    "contact.info.location.value": "Villahermosa, Tabasco, México (Trabajo remoto global)",

    // Footer
    "footer.tagline":
      "Más de 25 años creando software a la medida, sitios web de alto rendimiento y productos digitales que impulsan negocios reales.",
    "footer.navigation": "Navegación",
    "footer.social": "Conecta en redes sociales",
    "footer.rights": "Todos los derechos reservados.",
    "footer.made-with": "Diseñado y desarrollado por Luis Urruela.",
  },
  en: {
    // Navigation
    "nav.home": "Home",
    "nav.services": "Services",
    "nav.products": "My Apps",
    "nav.contact": "Contact",
    "nav.cta": "Let's Talk",
    "nav.menu": "Menu",
    "nav.language": "Language",

    // Hero Section
    "hero.badge": "Available for freelance projects & consulting",
    "hero.greeting": "Hi! I'm Luis Urruela",
    "hero.role": "Full-Stack Developer, Web Architect & App Creator",
    "hero.description":
      "With over 25 years of experience turning ideas into profitable, modern, and scalable digital products from Mexico. I build custom software, high-converting websites, and ready-to-launch apps designed to grow your business.",
    "hero.primary-cta": "Start a project",
    "hero.secondary-cta": "Explore my services",
    "hero.tertiary-cta": "See Restaurant App",
    "hero.stat1.value": "+25",
    "hero.stat1.label": "Years of experience",
    "hero.stat2.value": "100%",
    "hero.stat2.label": "Tailored solutions",
    "hero.stat3.value": "24/7",
    "hero.stat3.label": "Cloud-powered apps",

    // Services Section
    "services.badge": "Freelance Services",
    "services.title": "Digital solutions engineered to grow your business",
    "services.subtitle":
      "I partner with you from concept and UI/UX design to cloud deployment, building fast, secure, and user-friendly digital tools.",
    "services.cta": "Request a quote",

    // Products / Apps Section
    "products.badge": "My Apps • Featured Product",
    "products.title": "Smart Digital Menu & WhatsApp Ordering Platform for Restaurants",
    "products.subtitle":
      "Digitize your restaurant, bistro, café, or dark kitchen with zero commission fees per order. Built and battle-tested in production with our success story Sazón Casero.",
    "products.case-study-badge": "Real Success Story: Sazón Casero v2.0",
    "products.problem-solution":
      "Stop answering \"what's on the menu today and how much is it?\" dozens of times a day. Diners build their meal or combo from their phone in seconds, and you receive the structured, calculated order straight in your WhatsApp.",
    "products.tab.diner": "Interactive Digital Menu",
    "products.tab.admin": "1-Click Admin Panel",
    "products.tab.orders": "WhatsApp Direct Orders",
    "products.tab.brand": "Brand Customization",
    "products.cta.demo": "I want this App for my Restaurant",
    "products.cta.whatsapp": "Request a Demo via WhatsApp",
    "products.zero-commission": "0% Sales Commission • 100% Your Own Brand & Customers",
    "products.steps.title": "How does it work for your diners and kitchen?",
    "products.step1.title": "1. Diners build their meal",
    "products.step1.desc":
      "Customers pick main dishes, daily combos, sides, drinks, and desserts from an appetizing mobile-first interface.",
    "products.step2.title": "2. Direct order to your WhatsApp",
    "products.step2.desc":
      "With one tap, the app sends a structured WhatsApp message with the full item breakdown and exact total.",
    "products.step3.title": "3. Full control from your phone",
    "products.step3.desc":
      "Sold out of a dish at 2:30 PM? Toggle it off with 1 click from your mobile phone and update prices or promos instantly.",

    // Contact Section
    "contact.badge": "Contact",
    "contact.title": "Ready to take your business or restaurant to the next level?",
    "contact.subtitle":
      "Tell me about your freelance project or request a personalized demo of the Restaurant App. I'll get back to you right away.",
    "contact.form.name": "Full name",
    "contact.form.name.placeholder": "e.g. John Doe",
    "contact.form.email": "Email address",
    "contact.form.email.placeholder": "john@yourcompany.com",
    "contact.form.phone": "Phone / WhatsApp",
    "contact.form.phone.placeholder": "+1 555 000 0000",
    "contact.form.interest": "How can I help you?",
    "contact.form.interest.restaurant": "Smart Menu & Ordering App for my Restaurant",
    "contact.form.interest.web": "Website Design & Development / Landing Page",
    "contact.form.interest.system": "Custom Web System / Business Software",
    "contact.form.interest.mobile": "Mobile Application / PWA",
    "contact.form.interest.other": "Tech Consulting / Other Project",
    "contact.form.message": "Project or business details",
    "contact.form.message.placeholder":
      "Tell me briefly about what you need, your business type, or how you'd like to get started...",
    "contact.form.submit": "Send Message",
    "contact.form.submitting": "Sending...",
    "contact.form.submit-whatsapp": "Send via WhatsApp",
    "contact.form.success":
      "Message sent successfully! I received your inquiry via Netlify and will reply shortly.",
    "contact.form.error":
      "There was an issue sending your message. Please try again or reach out directly via WhatsApp.",
    "contact.info.title": "Direct contact channels",
    "contact.info.desc":
      "Prefer direct and immediate communication? Message me on WhatsApp or send an email and let's chat with no obligation.",
    "contact.info.whatsapp.label": "Direct WhatsApp",
    "contact.info.email.label": "Email",
    "contact.info.location.label": "Location",
    "contact.info.location.value": "Villahermosa, Tabasco, Mexico (Available worldwide)",

    // Footer
    "footer.tagline":
      "Over 25 years building custom software, high-performing websites, and digital products that power real businesses.",
    "footer.navigation": "Navigation",
    "footer.social": "Connect on social media",
    "footer.rights": "All rights reserved.",
    "footer.made-with": "Designed and built by Luis Urruela.",
  },
} as const;

export interface ServiceItem {
  id: string;
  icon: string;
  title: string;
  description: string;
  features: string[];
  accentColor: "primary" | "secondary";
  interestValue: string;
}

export const freelanceServices: Record<keyof typeof languages, ServiceItem[]> = {
  es: [
    {
      id: "web-design",
      icon: "mdi:monitor-shimmer",
      title: "Diseño y Desarrollo Web Profesional",
      description:
        "Sitios web corporativos, landing pages de alta conversión y portafolios modernos optimizados para velocidad, dispositivos móviles y buscadores (SEO).",
      features: [
        "Diseño UI/UX atractivo y 100% responsivo",
        "Carga ultra-rápida con tecnologías modernas (Astro, Next.js)",
        "Optimización SEO técnico e integración con WhatsApp y analítica",
      ],
      accentColor: "primary",
      interestValue: "Diseño y Desarrollo de Sitio Web / Landing Page",
    },
    {
      id: "custom-systems",
      icon: "mdi:layers-triple-outline",
      title: "Sistemas Web y Software a la Medida",
      description:
        "Plataformas empresariales en la nube diseñadas específicamente para automatizar la operación, ventas, inventarios y administración de tu empresa.",
      features: [
        "Paneles administrativos (Dashboards), CRM y control operativo",
        "Bases de datos seguras en tiempo real con roles y permisos",
        "Reportes ejecutivos, flujos de trabajo y APIs integradas",
      ],
      accentColor: "secondary",
      interestValue: "Sistema Web / Software a la Medida",
    },
    {
      id: "mobile-apps",
      icon: "mdi:cellphone-check",
      title: "Aplicaciones Móviles y Web Apps (PWA)",
      description:
        "Lleva tu servicio al bolsillo de tus clientes con aplicaciones interactivas para iOS, Android y navegadores móviles con experiencia nativa.",
      features: [
        "Interfaces táctiles intuitivas pensadas para el usuario móvil",
        "Catálogos interactivos, carritos de pedido y notificaciones",
        "Sincronización en la nube sin fricciones de instalación",
      ],
      accentColor: "primary",
      interestValue: "Aplicación Móvil / PWA",
    },
    {
      id: "consulting-modernization",
      icon: "mdi:rocket-launch-outline",
      title: "Modernización de Sistemas y Consultoría",
      description:
        "¿Tu página o sistema actual quedó obsoleto o es difícil de actualizar? Renuevo tu plataforma tecnológica para darte autonomía y alto rendimiento.",
      features: [
        "Migración de sitios antiguos a arquitecturas Cloud veloces",
        "Autonomía total con paneles autogestionables desde tu celular",
        "Acompañamiento técnico directo con +25 años de experiencia",
      ],
      accentColor: "secondary",
      interestValue: "Consultoría Tecnológica / Otro proyecto",
    },
  ],
  en: [
    {
      id: "web-design",
      icon: "mdi:monitor-shimmer",
      title: "Professional Web Design & Development",
      description:
        "Corporate websites, high-converting landing pages, and modern digital storefronts optimized for speed, mobile devices, and search engines (SEO).",
      features: [
        "Compelling, 100% responsive UI/UX design",
        "Ultra-fast performance powered by Astro & Next.js",
        "Technical SEO, WhatsApp lead capture & analytics integration",
      ],
      accentColor: "primary",
      interestValue: "Website Design & Development / Landing Page",
    },
    {
      id: "custom-systems",
      icon: "mdi:layers-triple-outline",
      title: "Custom Web Systems & Business Software",
      description:
        "Cloud-based business platforms tailored specifically to automate your operations, sales, inventory, and internal workflows.",
      features: [
        "Admin dashboards, custom CRMs & operational management",
        "Secure real-time databases with role-based access control",
        "Automated reporting, custom workflows & API integrations",
      ],
      accentColor: "secondary",
      interestValue: "Custom Web System / Business Software",
    },
    {
      id: "mobile-apps",
      icon: "mdi:cellphone-check",
      title: "Mobile Applications & Web Apps (PWA)",
      description:
        "Put your business in your customers' pockets with interactive applications for iOS, Android, and mobile browsers with native-grade feel.",
      features: [
        "Intuitive touch interfaces designed for mobile users",
        "Interactive catalogs, smart carts & instant checkouts",
        "Seamless cloud synchronization across all devices",
      ],
      accentColor: "primary",
      interestValue: "Mobile Application / PWA",
    },
    {
      id: "consulting-modernization",
      icon: "mdi:rocket-launch-outline",
      title: "Legacy Modernization & Tech Consulting",
      description:
        "Is your current site or system outdated or hard to maintain? I rebuild and modernize your digital platform for speed, security, and autonomy.",
      features: [
        "Migration from legacy websites to modern Cloud architectures",
        "Self-managed admin panels accessible from your phone",
        "Direct senior guidance backed by 25+ years of experience",
      ],
      accentColor: "secondary",
      interestValue: "Tech Consulting / Other Project",
    },
  ],
};

export interface ProductShowcaseTab {
  id: string;
  label: string;
  badge: string;
  title: string;
  description: string;
  image: string;
  highlights: string[];
}

export const restaurantAppShowcase: Record<keyof typeof languages, ProductShowcaseTab[]> = {
  es: [
    {
      id: "diner-menu",
      label: "Menú Digital y Platillos",
      badge: "Módulo Comensal",
      title: "Menú Digital Apetitoso con Fotos Reales y Armador de Comida Corrida",
      description:
        "Tus clientes ven fotografías nítidas y atractivas de cada guisado, eligen su paquete del día (Lonchico, Lunch Grande, Promoción), seleccionan sus guarniciones caseras y calculan el total automáticamente sin interrupciones ni ventanas molestas.",
      image: "/images/apps/menu_dishes_desktop.png",
      highlights: [
        "Fotografías apetitosas por platillo que aumentan la decisión de compra inmediata",
        "Armador dinámico de comida corrida (1 plato fuerte + 2 guarniciones caseras)",
        "Barra flotante de pedido siempre visible con precio transparente en vivo",
      ],
    },
    {
      id: "admin-dishes",
      label: "Control de Menú en 1 Clic",
      badge: "Autonomía Total",
      title: "Activa o Apaga Guisados en 1 Segundo desde tu Teléfono Celular",
      description:
        "Olvídate de depender de un programador para actualizar tu menú diario. Si se termina un guisado a mediodía, lo desactivas con un switch desde tu teléfono y desaparece al instante del menú visible al público.",
      image: "/images/apps/admin_dishes.png",
      highlights: [
        "Capacidad probada para gestionar más de 230 platillos con buscador instantáneo",
        "Switches de encendido/apagado en tiempo real diseñados para pantallas táctiles",
        "Edición rápida de precios, categorías, descripciones y fotografías",
      ],
    },
    {
      id: "whatsapp-orders",
      label: "Pedidos en WhatsApp (0% Comisión)",
      badge: "Cero Intermediarios",
      title: "Recepción de Pedidos Estructurados Directamente en tu WhatsApp",
      description:
        "Dile adiós a las comisiones del 25% al 35% de aplicaciones de delivery externas. El comensal arma su paquete y tú recibes un mensaje estructurado con el desglose exacto y el total ya sumado.",
      image: "/images/apps/menu_clean_desktop.png",
      highlights: [
        "Mensaje estructurado con selección de platillo, guarniciones y adicionales",
        "Total ya calculado sin errores humanos ni llamadas repetitivas",
        "Fidelización directa: tú eres el dueño de los datos y el contacto de tus clientes",
      ],
    },
    {
      id: "brand-identity",
      label: "Tu Marca y Negocio",
      badge: "100% Personalizable",
      title: "Adaptado a la Identidad Visual, Horarios y Ubicación de tu Restaurante",
      description:
        "Aunque probada con el éxito de Sazón Casero, la plataforma se entrega configurada con el nombre, logotipo, colores, foto de portada, horarios y Google Maps de tu propio restaurante o cocina.",
      image: "/images/apps/admin_general.png",
      highlights: [
        "Recorte inteligente y auto-centrado de logotipo en círculo perfecto",
        "Configuración de horarios de atención, teléfonos de contacto y enlace a Google Maps",
        "Modo mantenimiento con aviso de cocina abierta para cerrar pedidos fuera de horario",
      ],
    },
  ],
  en: [
    {
      id: "diner-menu",
      label: "Interactive Digital Menu",
      badge: "Diner Module",
      title: "Appetizing Digital Menu with Real Dish Photos & Daily Combo Builder",
      description:
        "Your diners browse crisp, appetizing dish photos, select their combo tier (Regular Lunch, Large, Daily Special), pick homemade sides, and calculate totals in real-time without intrusive popups.",
      image: "/images/apps/menu_dishes_desktop.png",
      highlights: [
        "High-definition food photography that accelerates customer buying decisions",
        "Interactive combo builder (main dish + 2 homemade sides + extras)",
        "Sticky live order bar with transparent instant calculation",
      ],
    },
    {
      id: "admin-dishes",
      label: "1-Click Admin Panel",
      badge: "Total Autonomy",
      title: "Toggle Dishes On or Off in 1 Second Right From Your Smartphone",
      description:
        "Never wait on a developer to update today's menu. When a dish sells out during lunch rush, flip a switch on your phone and it disappears from the live menu immediately.",
      image: "/images/apps/admin_dishes.png",
      highlights: [
        "Proven capacity to manage 230+ dishes with instant search & pagination",
        "Real-time active/inactive toggles optimized for mobile screens",
        "Quick editing for prices, categories, descriptions, and dish photos",
      ],
    },
    {
      id: "whatsapp-orders",
      label: "WhatsApp Orders (0% Fees)",
      badge: "Zero Intermediaries",
      title: "Structured Orders Delivered Directly to Your Restaurant's WhatsApp",
      description:
        "Say goodbye to 25%-35% commission fees from third-party delivery apps. Diners build their meal and you receive an organized, pre-calculated message ready to prepare.",
      image: "/images/apps/menu_clean_desktop.png",
      highlights: [
        "Organized message format with dish choices, sides, and extras breakdown",
        "Accurate pre-calculated total with zero manual typing or phone confusion",
        "Direct customer retention: you own your customer contacts and database",
      ],
    },
    {
      id: "brand-identity",
      label: "Your Brand & Location",
      badge: "100% Customizable",
      title: "Tailored to Your Restaurant's Brand Identity, Hours & Location",
      description:
        "Battle-tested with our Sazón Casero success story, this platform is delivered branded with your restaurant's logo, colors, cover photo, social links, and Google Maps location.",
      image: "/images/apps/admin_general.png",
      highlights: [
        "Built-in smart logo cropper and customizable hero cover image",
        "Self-service business hours, phone numbers, WhatsApp line & Google Maps",
        "Maintenance mode switch with open-kitchen alert for off-hours",
      ],
    },
  ],
};
