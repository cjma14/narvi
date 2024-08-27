/* empty css                         */
import { b as createComponent, d as renderTemplate, f as renderComponent } from './astro/server_CxlEycRW.mjs';
import 'kleur/colors';
import { a as $$MainLayout } from './MainLayout_CAlHLmIZ.mjs';
import { $ as $$MainSection, a as $$LeftSection } from './LeftSection_CAcI42gP.mjs';
import { $ as $$RightSection } from './RightSection_B8eqidr4.mjs';
import { $ as $$FeaturesStats } from './FeaturesStats_mG3VouBG.mjs';
import { g as getRelativeLocaleUrl } from './i18n_BfHasysp.mjs';

const $$Services = createComponent(($$result, $$props, $$slots) => {
  const articles = [
    // {
    //   isRightSection: true,
    //   title: "Fournir des conseils d'experts",
    //   subTitle:
    //     "Se lancer dans un projet de construction peut être accablant. Avec nos services de consultation professionnelle, nous vous guidons à chaque étape, en veillant à ce que vous preniez des décisions éclairées. Que vous soyez un passionné du bricolage ou un entrepreneur qualifié, nos experts sont là pour vous offrir des conseils sur mesure sur la sélection de produits, l'envergure du projet et la conformité aux réglementations locales.",
    //   single: false,
    //   imgOne: blueprints,
    //   imgOneAlt: "Plans et tablette numérique avec des plans de construction.",
    //   imgTwo: personWorking,
    //   imgTwoAlt: "Personne travaillant au bureau",
    // },
    // {
    //   isRightSection: false,
    //   title: "Transformer les conceptions en réalité",
    //   subTitle:
    //     "Nos artisans qualifiés apportent précision et excellence à chaque projet de construction. Des installations mineures aux travaux structuraux substantiels, ScrewFast offre des services de construction fiables pour concrétiser vos plans. Nous assurons les normes les plus élevées de sécurité et de savoir-faire, en utilisant des outils et des matériaux de haute qualité de notre vaste inventaire.",
    //   img: beforeAfter,
    //   imgAlt: "Chantier de construction avant et après",
    //   btnExists: true,
    //   btnTitle: "En savoir plus",
    //   btnURL: "#",
    // },
    // {
    //   isRightSection: true,
    //   title: "Naviguer dans les projets avec une supervision professionnelle",
    //   subTitle:
    //     "La gestion de projet efficace est au cœur de toute construction réussie. ScrewFast offre une planification approfondie et des services de gestion solides qui maintiennent votre projet dans les délais et dans le budget. Laissez-nous gérer les complexités de la coordination des flux de travail, de l'allocation des ressources et de la communication avec les parties prenantes pendant que vous vous concentrez sur votre vision.",
    //   single: false,
    //   imgOne: constructionWorkers,
    //   imgOneAlt: "Ouvriers du bâtiment orchestrant un projet",
    //   imgTwo: aerialView,
    //   imgTwoAlt: "Vue aérienne d'une construction gérée",
    // },
    // {
    //   isRightSection: false,
    //   title: "Garantir des performances durables",
    //   subTitle:
    //     "Notre engagement envers votre projet ne s'arrête pas à son achèvement. ScrewFast propose des services de maintenance et de support continus pour assurer la longévité et les performances de votre construction. Des vérifications régulières à l'assistance en cas d'urgence, notre équipe réactive est là pour vous fournir un soutien sans faille.",
    //   img: usingTools,
    //   imgAlt:
    //     "Homme en gilet orange et noir portant un casque blanc tenant un outil électrique jaune et noir",
    // },
    // {
    //   isRightSection: true,
    //   title: "Élaboration de stratégies sur mesure pour des défis uniques",
    //   subTitle:
    //     "Pour nos clients d'entreprise de plus grande envergure, ScrewFast propose des solutions personnalisées conçues pour répondre à des défis spécifiques de l'industrie. En comprenant vos besoins uniques, nous concevons des stratégies sur mesure visant à optimiser vos opérations, à améliorer l'efficacité et à faire avancer votre entreprise.",
    //   single: false,
    //   imgOne: progressBuilding,
    //   imgOneAlt: "Structure de bâtiment en cours de construction",
    //   imgTwo: underConstruction,
    //   imgTwoAlt: "Bâtiment marron et gris en construction",
    //   btnExists: true,
    //   btnTitle: "Lire la suite",
    //   btnURL: "#",
    // },
  ];
  return renderTemplate`${renderComponent($$result, "MainLayout", $$MainLayout, { "title": "Services | ScrewFast", "lang": "fr", "structuredData": {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "@id": "https://screwfast.uk/fr/services",
    url: "https://screwfast.uk/fr/services",
    name: "Services de Consultation d'Experts | ScrewFast",
    description: "Unissant l'expertise \xE0 votre vision, ScrewFast fournit un service exceptionnel et des solutions compl\xE8tes dans le secteur du mat\xE9riel et de la construction, de la consultation \xE0 l'ach\xE8vement du projet.",
    isPartOf: {
      "@type": "WebSite",
      url: "https://screwfast.uk/fr",
      name: "ScrewFast",
      description: "ScrewFast propose des outils mat\xE9riels de premier ordre et des services de construction experts pour r\xE9pondre \xE0 tous vos besoins de projet."
    },
    inLanguage: "fr"
  } }, { "default": ($$result2) => renderTemplate`  ${renderComponent($$result2, "MainSection", $$MainSection, { "title": "Unir l'expertise \xE0 votre vision", "subTitle": "Chez ScrewFast, nous sommes fiers de fournir des solutions compl\xE8tes et un service exceptionnel dans l'industrie du mat\xE9riel et de la construction. Notre \xE9quipe exp\xE9riment\xE9e est d\xE9di\xE9e \xE0 soutenir votre projet de sa conception \xE0 son ach\xE8vement avec une gamme de services sp\xE9cialis\xE9s.", "btnExists": true, "btnTitle": "Planifier une consultation", "btnURL": getRelativeLocaleUrl("fr", "#") })}  ${articles.map((article) => {
    return article.isRightSection ? renderTemplate`${renderComponent($$result2, "RightSection", $$RightSection, { "title": article.title, "subTitle": article.subTitle, "single": article.single, "imgOne": article.imgOne, "imgOneAlt": article.imgOneAlt, "imgTwo": article.imgTwo, "imgTwoAlt": article.imgTwoAlt, "btnExists": article.btnExists, "btnTitle": article.btnTitle, "btnURL": article.btnURL })}` : renderTemplate`${renderComponent($$result2, "LeftSection", $$LeftSection, { "title": article.title, "subTitle": article.subTitle, "img": article.img, "imgAlt": article.imgAlt, "btnExists": article.btnExists, "btnTitle": article.btnTitle, "btnURL": article.btnURL })}`;
  })} ${renderComponent($$result2, "FeaturesStats", $$FeaturesStats, { "title": "Par les chiffres", "subTitle": "Notre engagement envers la qualit\xE9 et la fiabilit\xE9 est \xE9vident dans chaque projet que nous entreprenons. Chez ScrewFast, nous nous engageons \xE0 fournir des services de premier plan dans l'industrie qui garantissent que vos projets de construction sont con\xE7us pour durer.", "mainStatTitle": "96%", "mainStatSubTitle": "de nos clients \xE9valuent leur exp\xE9rience avec ScrewFast comme exceptionnelle", "stats": [
    {
      stat: "99,8%",
      description: "taux de r\xE9alisation de projets"
    },
    {
      stat: "5 000+",
      description: "installations r\xE9ussies"
    },
    {
      stat: "85%",
      description: "croissance client ann\xE9e apr\xE8s ann\xE9e"
    }
  ] })} ` })}`;
}, "/var/www/html/cepaonline/src/pages/fr/services.astro", void 0);

const $$file = "/var/www/html/cepaonline/src/pages/fr/services.astro";
const $$url = "/fr/services";

export { $$Services as default, $$file as file, $$url as url };
