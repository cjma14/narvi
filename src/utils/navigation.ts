// An array of links for navigation bar
const navBarLinks = [
  { 
    name: "Home", 
    type: "basic", 
    url: "/" 
  },
  { 
    name: "Products",
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
    section: "Solutions",
    links: [
      { name: "Equipment Supply", type: 'url', url: "/products" },
      { name: "Industrial Transport", type: 'url', url: "/services" },
      { name: "Well Pumping Services", type: 'url', url: "/services#bombeo-a-pozos" },
      { name: "Industrial Parts", type: 'url', url: "/products" },
      { name: "Strategic Logistics", type: 'url', url: "/services" },
    ],
  },
  {
    section: "Contact",
    links: [
      { name: "Operations in North and LATAM", type: 'basic', icon: 'location' },
      { name: "info@narvi.corp", type: 'url', url: 'mailto:info@narvi.corp', icon: 'mail' },
      { name: "Support 24/7", type: 'basic', icon: 'phone' },
    ],
  },
  {
    section: "Coverage",
    links: [
      { name: "Houston, Texas (USA)", type: 'basic' },
      { name: "El Tigre, Anzoategui (Venezuela)", type: 'basic' },
      { name: "Panama City (Panama)", type: 'basic' },
      { name: "Latin America and the Caribbean", type: 'basic' },
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