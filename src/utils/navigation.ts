// An array of links for navigation bar
const navBarLinks = [
  { 
    name: "Home", 
    type: "basic", 
    url: "/" 
  },
  { 
    name: "Produtcs and services",
    type: "basic", 
    url: "/" 
  },
  { 
    name: "Equipment for sale", 
    type: "basic",
    url: "/" 
  },
  {
     name: "Contact", 
     type: "basic",
     url: "/"
  }
  // { 
  //   name: "TBA", 
  //   type: "dropdown",
  //   childrens: [
  //     { name: "¿Qué es?", type: "basic", url: "/tba" },
  //     { name: "Formación TBA", type: "basic", url: "/course" },
  //   ]
  // },
];
// An array of links for footer
const footerLinks = [
  {
    section: "Contact",
    links: [
      { name: "(xxx) xxx-xxx", url: "#" },
      { name: "lorem@test.com", url: "#" }, ,
    ],
  },
  {
    section: "About us",
    links: [
      { name: "link", url: "/" },
      { name: "link", url: "/" },
      { name: "link", url: "/" },
    ],
  },
  {
    section: "Services",
    links: [
      { name: "link", url: "/" },
      { name: "link", url: "/" },
      { name: "link", url: "/" },
    ],
  },
];
// An object of links for social icons
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