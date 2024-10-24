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
      { name: "Mision", type: 'url', url: "/" },
      { name: "Vision", type: 'url', url: "/" },
      { name: "Contact", type: 'url', url: "/" },
    ],
  },
  {
    section: "Services & Products",
    links: [
      { name: "Parts & tools", type: 'url', url: "/" },
      { name: "Equipment", type: 'url', url: "/" },
      { name: "Trucks & tractors", type: 'url', url: "/" },
      { name: "Energy transition", type: 'url', url: "/" },
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