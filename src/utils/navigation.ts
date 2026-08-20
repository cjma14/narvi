// An array of links for navigation bar
const navBarLinks = [
  { 
    name: "Home", 
    type: "basic", 
    url: "/" 
  },
  { 
    name: "About Us",
    type: "basic", 
    url: "/about-us" 
  },
  { 
    name: "Products and Services",
    type: "basic", 
    url: "/services" 
  },
  { 
    name: "Sustainability",
    type: "basic", 
    url: "/products" 
  },
  { 
    name: "Memberships and Alliances", 
    type: "basic", 
    url: "/memberships-alliances" 
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
      { name: "Well Pumping", type: 'url', url: "/services#bombeo-a-pozos" },
      { name: "In-house Laboratory", type: 'url', url: "/services" },
      { name: "Asset Management", type: 'url', url: "/services#asset-management" },
    ],
  },
  {
    section: "Contact",
    links: [
      { name: "Zona Industrial San José de Guanipa, Edo Anzoátegui. El Tigre, VE", type: 'basic', icon: 'location' },
      { name: "info@narvienterprise.com", type: 'url', url: 'mailto:info@narvienterprise.com', icon: 'mail' },
      { name: "+58 422-1906731", type: 'basic', icon: 'phone' },
    ],
  },
  {
    section: "Coverage",
    links: [
      { name: "North America", type: 'basic' },
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