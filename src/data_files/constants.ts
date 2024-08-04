import ogImageSrc from "@images/social.png";

export const SITE = {
  title: "Centro de Estudios Psicométricos y del Aprendizaje",
  tagline: "Evaluaciones precisas, futuro prometedor.",
  description: "El Test Básico de Aprendizaje (TBA) es la solución definitiva para conocer tu potencial de aprendizaje. Gracias a su avanzada tecnología, el TBA ofrece evaluaciones personalizadas y precisas en tiempo récord. Descubre tus fortalezas, identifica áreas de mejora y recibe recomendaciones personalizadas para alcanzar tus metas. ¿Listo para dar el siguiente paso en tu desarrollo?",
  description_short: "Evaluación rápida y precisa de tus habilidades cognitivas",
  url: "https://cepaonline.cl",
  author: "Pablo Martin",
};

export const SEO = {
  title: SITE.title,
  description: SITE.description,
  structuredData: {
    "@context": "https://schema.org",
    "@type": "WebPage",
    inLanguage: "es-CL",
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
  locale: "es_CL",
  type: "website",
  url: SITE.url,
  title:`${SITE.title}: Evaluaciones Psicométricas y del Aprendizaje`,
  description: "El Test Básico de Aprendizaje (TBA) es la solución definitiva para conocer tu potencial de aprendizaje. Gracias a su avanzada tecnología, el TBA ofrece evaluaciones personalizadas y precisas en tiempo récord. Descubre tus fortalezas, identifica áreas de mejora y recibe recomendaciones personalizadas para alcanzar tus metas. ¿Listo para dar el siguiente paso en tu desarrollo?",
  image: ogImageSrc,
};
