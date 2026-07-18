
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
    section: "Soluciones",
    links: [
      { name: "Suministro de Equipos", type: 'url', url: "/es/products" },
      { name: "Transporte Industrial", type: 'url', url: "/es/services" },
      { name: "Bombeo a Pozos", type: 'url', url: "/es/services#bombeo-a-pozos" },
      { name: "Partes Industriales", type: 'url', url: "/es/products" },
      { name: "Logística Estratégica", type: 'url', url: "/es/services" },
    ],
  },
  {
    section: "Contacto",
    links: [
      { name: "Operaciones en Norte y LATAM", type: 'basic', icon: 'location' },
      { name: "info@narvi.corp", type: 'url', url: 'mailto:info@narvi.corp', icon: 'mail' },
      { name: "Soporte 24/7", type: 'basic', icon: 'phone' },
    ],
  },
  {
    section: "Cobertura",
    links: [
      { name: "Houston, Texas (EE.UU.)", type: 'basic' },
      { name: "El Tigre, Anzoátegui (Venezuela)", type: 'basic' },
      { name: "Ciudad de Panamá (Panamá)", type: 'basic' },
      { name: "Latinoamérica y el Caribe", type: 'basic' },
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