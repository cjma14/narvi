
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
    url: "/es/memberships-alliances" 
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
      { name: "info@narvienterprise.com", type: 'url', url: 'mailto:info@narvienterprise.com', icon: 'mail' },
      { name: "+58 422-1906731", type: 'basic', icon: 'phone' },
    ],
  },
  {
    section: "Cobertura",
    links: [
      { name: "Norteamerica", type: 'basic' },
      { name: "Latinoamerica y el Caribe", type: 'basic' },
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