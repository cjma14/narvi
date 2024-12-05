// An array of links for navigation bar
const navBarLinks = [
  { 
    name: "Home", 
    type: "basic", 
    url: "/" 
  },
  { 
    name: "Produtcs",
    type: "basic", 
    url: "/products" 
  },
  { 
    name: "Services",
    type: "basic", 
    url: "/services" 
  },
  { 
    name: "About us",
    type: "basic", 
    url: "/about-us" 
  },
  { 
    name: "Equipment for sale", 
    type: "basic",
    url: "/sales" 
  },
  {
     name: "Contact", 
     type: "basic",
     url: "/contact"
  }
];
// An array of links for footer
const footerLinks = [
  {
    section: "Contact",
    links: [
      { name: "+1 346 504 9060", type: 'basic'},
      { name: "info@narvi-ec.com", type: 'basic'}, ,
    ],
  },
  {
    section: "About us",
    links: [
      { name: "Mision", type: 'url', url: "/about#mision" },
      { name: "Vision", type: 'url', url: "/about#vision" },
      { name: "Contact", type: 'url', url: "/contact" },
    ],
  },
  {
    section: "Services & Products",
    links: [
      { name: "Parts & tools", type: 'url', url: "/products#exploration-production" },
      { name: "Equipment", type: 'url', url: "/products#equipment-support" },
      { name: "Trucks & tractors", type: 'url', url: "/sales" },
      { name: "Energy transition", type: 'url', url: "/products#transportation-processes" },
    ],
  },
];
// An object of links for social icons
const socialLinks = {
  instagram: "https://www.instagram.com/narvienterprise/",
  facebook: "https://www.facebook.com/narvi.enterprise",
  linkedin: "https://www.linkedin.com/in/miguel-mogollon-4b5277314?trk=profile-badge",
};

export default {
  navBarLinks,
  footerLinks,
  socialLinks,
};