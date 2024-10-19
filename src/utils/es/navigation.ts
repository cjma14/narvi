
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
    url: "/es/" 
  },
  {
    name: "Sobre nosotros",
    type: "basic", 
    url: "/es/" 
  },
  { 
    name: "Contacto", 
    type: "basic",
    url: "/es/" 
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
      { name: "Misión", type: 'url', url: "/" },
      { name: "Visión", type: 'url', url: "/" },
      { name: "Contácto", type: 'url', url: "/" },
    ],
  },
  {
    section: "Servicios y Productos",
    links: [
      { name: "Partes y herramientas", type: 'url', url: "/" },
      { name: "Equipos", type: 'url', url: "/" },
      { name: "Camiones y tractores", type: 'url', url: "/" },
      { name: "Transición energética", type: 'url', url: "/" },
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