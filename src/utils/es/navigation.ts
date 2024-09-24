
const navBarLinks = [
  {
    name: "Inicio", 
    type: "basic",
    url: "/es" 
  },
  { 
    name: "Productios y servicios", 
    type: "basic",
    url: "/es/" 
  },
  {
    name: "Equipos para venta",
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
    section: "Contacto",
    links: [
      { name: "(xxx) xxx-xxx", url: "#" },
      { name: "lorem@test.com", url: "#" }, ,
    ],
  },
  {
    section: "Sobre nosotros",
    links: [
      { name: "link", url: "/" },
      { name: "link", url: "/" },
      { name: "link", url: "/" },
    ],
  },
  {
    section: "Servicios",
    links: [
      { name: "link", url: "/" },
      { name: "link", url: "/" },
      { name: "link", url: "/" },
    ],
  },
];

const socialLinks = {
  instagram: "/",
  linkedin: "/",
  cepa: "https://app.cepaonline.cl/login",
};

export default {
  navBarLinks,
  footerLinks,
  socialLinks,
};