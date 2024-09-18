
const navBarLinks = [
  { name: "Accueil", url: "/es" },
  { name: "Produits", url: "/es/products" },
  { name: "Services", url: "/es/services" },
  { name: "Blog", url: "/es/blog" },
  { name: "Contact", url: "/es/contact" },
];

const footerLinks = [
  {
    section: "Écosystème",
    links: [
      { name: "Documentation", url: "/es/welcome-to-docs/" },
      { name: "Outils et Équipements", url: "/es/products" },
      { name: "Services de Construction", url: "/es/services" },
    ],
  },
  {
    section: "Société",
    links: [
      { name: "À propos de nous", url: "#" },
      { name: "Blog", url: "/es/blog" },
      { name: "Carrières", url: "#" },
      { name: "Clients", url: "#" },
    ],
  },
];

const socialLinks = {
  facebook: "#",
  x: "#",
  github: "https://github.com/mearashadowfax/ScrewFast",
  google: "#",
  slack: "#",
};

export default {
  navBarLinks,
  footerLinks,
  socialLinks,
};