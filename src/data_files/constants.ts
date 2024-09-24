import ogImageSrc from "@images/social.png";

export const SITE = {
  title: "Narvi EC",
  tagline: "Boost your business. Innovate your operations.",
  description: "Narvi leaders in Oil & Gas in North America and Latin America. Professional services in project engineering, asset management and equipment maintenance. Increase the efficiency and profitability of your operations.",
  description_short: "Oil & Gas Experts. Comprehensive solutions for your business.",
  url: "https://narvi-ec.com",
  author: "Miguel Mogollón",
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

export const OG = {
  locale: "en_US",
  type: "website",
  url: SITE.url,
  title:`${SITE.title}: Oil & Gas Experts. Comprehensive solutions for your business.`,
  description: "Professional services in project engineering, asset management and equipment maintenance. Increase the efficiency and profitability of your operations.",
  image: ogImageSrc,
};
