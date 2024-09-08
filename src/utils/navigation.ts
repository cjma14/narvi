// An array of links for navigation bar
const navBarLinks = [
  { name: "Inicio", type: "basic", url: "/" },
  { 
    name: "TBA", 
    type: "dropdown",
    childrens: [
      { name: "¿Que es?", type: "basic", url: "/tba" },
      { name: "Formación TBA", type: "basic", url: "/course" },
    ]
  },
  { 
    name: "Certificados y Cursos", 
    type: "dropdown",
    childrens: [
      { name: "Cursos y diplomas", type: "basic", url: "/courses-diplomas" },
      { name: "Certificados TBA", type: "basic", url: "/tba-certificates" },
    ]
  },
  { name: "Sobre nosotros", url: "/about" },
  { name: "Contacto", url: "/contact" }
];
// An array of links for footer
const footerLinks = [
  {
    section: "Empresa",
    links: [
      { name: "Sobre nosotros", url: "/about" },
      { name: "TBA", url: "/tba" }, ,
    ],
  },
];
// An object of links for social icons
const socialLinks = {
  facebook: "https://www.instagram.com/cepaonline/",
  x: "https://twitter.com/",
  google: "https://www.google.com/",
  slack: "https://slack.com/",
};

export default {
  navBarLinks,
  footerLinks,
  socialLinks,
};