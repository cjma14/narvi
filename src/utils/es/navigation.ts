
const navBarLinks = [
  {
    name: "Inicio", 
    type: "basic",
    url: "/es" 
  },
  { 
    name: "Productos", 
    type: "basic",
    url: "/es/products" 
  },
  { 
    name: "Servicios", 
    type: "basic",
    url: "/es/services" 
  },
  {
    name: "Equipos para venta",
    type: "basic", 
    url: "/es/sales" 
  },
  {
    name: "Sobre nosotros",
    type: "basic", 
    url: "/es/about-us" 
  },
  { 
    name: "Contacto", 
    type: "basic",
    url: "/es/contact" 
  },
];

const footerLinks = [
  {
    section: "Contact",
    links: [
      { name: "US +1 346-508-9060 Houston, Tx. USA", type: 'basic'},
      { name: "VE +58 412-783-2848 Caracas, DC. VEN", type: 'basic'},
      { name: "info@narvi-ec.com", type: 'basic'}, ,
    ],
  },
  {
    section: "Sobre nostros",
    links: [
      { name: "Misión", type: 'url', url: "/es/about#mision" },
      { name: "Visión", type: 'url', url: "/es/about#vision" },
      { name: "Contácto", type: 'url', url: "/es/contact" },
    ],
  },
  {
    section: "Servicios y Productos",
    links: [
      { name: "Partes y herramientas", type: 'url', url: "/es/products#exploration-production" },
      { name: "Equipos", type: 'url', url: "/es/products#equipment-support" },
      { name: "Camiones y tractores", type: 'url', url: "/es/sales" },
      { name: "Transición energética", type: 'url', url: "/es/products#transportation-processes" },
    ],
  },
];

const socialLinks = {
  instagram: "https://www.instagram.com/narvienterprise/",
  linkedin: "https://www.linkedin.com/in/miguel-mogollon-4b5277314?trk=profile-badge",
  facebook: "https://www.facebook.com/narvi.enterprise",
};

export default {
  navBarLinks,
  footerLinks,
  socialLinks,
};