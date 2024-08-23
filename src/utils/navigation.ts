// An array of links for navigation bar
const navBarLinks = [
  { name: "Inicio", url: "/" },
  { name: "TBA", url: "/tba" },
  { name: "Sobre nosotros", url: "/about" },
  { name: "Contacto", url: "/contact" },
];
// An array of links for footer
const footerLinks = [
  {
    section: "Empresa",
    links: [
      { name: "Sobre nosotros", url: "/about" },
      { name: "TBA", url: "/tba" },,
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