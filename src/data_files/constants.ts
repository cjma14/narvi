import ogImageSrc from "@images/social.png";

export const SITE = {
  title: "NARVI Enterprise Corporation",
  tagline: "Equipos y Servicios para Petróleo, Gas e Industria",
  description: "NARVI Enterprise Corporation - Proveedor líder de equipos, repuestos y soluciones para la industria energética e industrial (Oil & Gas). Más de 25 años de experiencia en Norteamérica y Latinoamérica.",
  description_short: "Equipos industriales Oil & Gas, maquinaria y servicios técnicos.",
  url: "https://narvi-ec.com",
  author: "Miguel Mogollón",
  keywords: "NARVI Enterprise, equipo industrial, Oil & Gas, maquinaria energética, repuestos industriales, gestión de activos, servicios técnicos energéticos, Houston, Latinoamérica, equipos petroleros, suministro industrial, mantenimiento maquinaria, soluciones energéticas",
};

export const SEO = {
  title: SITE.title,
  description: SITE.description,
  structuredData: {
    "@context": "https://schema.org",
    "@type": "WebPage",
    inLanguage: "en_US",
    "@id": SITE.url,
    url: SITE.url,
    name: SITE.title,
    description: SITE.description,
    isPartOf: {
      "@type": "WebSite",
      url: SITE.url,
      name: SITE.title,
      description: SITE.description,
    },
  },
};

// Organization Schema for better SEO
export const ORGANIZATION = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "NARVI Enterprise Corporation",
  url: "https://narvi-ec.com/",
  logo: "https://narvi-ec.com/img/logo/logo_white.png",
  description: "Proveedor líder de equipos, maquinaria y servicios para la industria energética e industrial (Oil & Gas).",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Houston",
    addressRegion: "TX",
    addressCountry: "US"
  },
  contactPoint: {
    "@type": "ContactPoint",
    contactType: "Sales",
    email: "info@narvi-ec.com",
    availableLanguage: ["English", "Spanish"]
  },
  sameAs: [
    "https://www.linkedin.com/in/miguel-mogollon-4b5277314",
    "https://www.facebook.com/narvi.enterprise",
    "https://www.instagram.com/narvienterprise/"
  ]
};

export const OG = {
  locale: "en_US",
  type: "website",
  url: SITE.url,
  title: `${SITE.title} | Equipos y Servicios para Petróleo, Gas e Industria`,
  description: "Proveedor líder de equipos, repuestos y soluciones para la industria energética e industrial (Oil & Gas). Más de 25 años de experiencia.",
  image: ogImageSrc,
};
