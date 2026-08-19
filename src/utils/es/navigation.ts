
const navBarLinks = [
  {
    name: "Inicio", 
    type: "basic",
    url: "/es" 
  },
  { 
    name: "Nosotros", 
    type: "basic",
    url: "/es/about-us" 
  },
  { 
    name: "Productos y Servicios", 
    type: "basic",
    url: "/es/services" 
  },
  {
    name: "Sostenibilidad",
    type: "basic", 
    url: "/es/products" 
  },
  {
    name: "Membresias y Alianzas",
    type: "basic",
    url: "/es#tech-partners" 
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
      { name: "Bombeo a Pozos", type: 'url', url: "/es/services#bombeo-a-pozos" },
      { name: "Laboratorio In house", type: 'url', url: "/es/services" },
      { name: "Gestión de Activos", type: 'url', url: "/es/services#asset-management" },
    ],
  },
  {
    section: "Contacto",
    links: [
      { name: "Zona Industrial San José de Guanipa, Edo Anzoátegui. El Tigre, VE", type: 'basic', icon: 'location' },
      { name: "info@narvi.corp", type: 'url', url: 'mailto:info@narvi.corp', icon: 'mail' },
      { name: "Soporte 24/7", type: 'basic', icon: 'phone' },
    ],
  },
  {
    section: "Ubicación",
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