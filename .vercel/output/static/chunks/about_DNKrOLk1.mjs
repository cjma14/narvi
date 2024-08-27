/* empty css                         */
import { b as createComponent, d as renderTemplate, f as renderComponent } from './astro/server_CxlEycRW.mjs';
import 'kleur/colors';
import { a as $$MainLayout, S as SITE } from './MainLayout_CAlHLmIZ.mjs';
import { $ as $$MainSection, a as $$LeftSection } from './LeftSection_CAcI42gP.mjs';
import { $ as $$RightSection } from './RightSection_B8eqidr4.mjs';

const $$About = createComponent(($$result, $$props, $$slots) => {
  const specializations = [
    {
      isRightSection: false,
      title: "Investigaci\xF3n en Psicometr\xEDa",
      subTitle: "Este departamento se dedica al estudio y an\xE1lisis de las teor\xEDas, m\xE9todos y t\xE9cnicas utilizadas en la medici\xF3n cognitiva, con el fin de desarrollar y mejorar la precisi\xF3n y validez de los instrumentos de evaluaci\xF3n.",
      img: "/img/psicology-3.png",
      imgAlt: "Analista realizando investigaci\xF3n psicometrica",
      btnExists: false
    },
    {
      isRightSection: true,
      title: "Desarrollo de Test Psicom\xE9tricos",
      subTitle: "Aqu\xED se lleva a cabo el dise\xF1o, construcci\xF3n y validaci\xF3n de pruebas psicom\xE9tricas destinadas a medir diferentes variables cognitivas, como habilidades cognitivas y aptitudes acad\xE9micas.",
      single: false,
      imgOne: "/img/psicology-4.png",
      imgOneAlt: "Ni\xF1o realizando test psicom\xE9trico",
      imgTwo: "/img/psicology-5.png",
      imgTwoAlt: "Ni\xF1a realizando test psicom\xE9trico"
    },
    {
      isRightSection: false,
      title: "Formaci\xF3n en Evaluaci\xF3n Estandarizada",
      subTitle: "Este departamento se encarga de proporcionar capacitaci\xF3n especializada en el uso y aplicaci\xF3n de instrumentos de evaluaci\xF3n estandarizada, tanto para profesionales del \xE1mbito cognitivo como para educadores y otros profesionales interesados en la medici\xF3n objetiva de habilidades y aptitudes.",
      img: "/img/psicology-7.png",
      imgAlt: "Joven adolecente realizando evaluaci\xF3n estandarizada"
    },
    {
      isRightSection: true,
      title: "Editorial",
      subTitle: "El \xE1rea editorial se dedica a la difusi\xF3n del conocimiento cient\xEDfico en el campo de la psicometr\xEDa, mediante la publicaci\xF3n de libros, revistas y otros materiales acad\xE9micos que contribuyan al avance y desarrollo de esta disciplina.",
      single: true,
      imgOne: "/img/psicology-8.png",
      imgOneAlt: "In progress building structure"
    }
  ];
  const pageTitle = `Sobre nosotros | ${SITE.title}`;
  return renderTemplate`${renderComponent($$result, "MainLayout", $$MainLayout, { "title": pageTitle, "structuredData": {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "@id": "https://cepaonline.cl/about",
    "url": "https://cepaonline.cl/about",
    "name": "Sobre nosotros | CEPA - Centro de Estudios Psicom\xE9tricos y del Aprendizaje",
    "description": "CEPA se erige como una instituci\xF3n precursora en investigaci\xF3n cient\xEDfica en el campo de la Psicometr\xEDa en Chile.",
    "isPartOf": {
      "@type": "WebSite",
      "url": "https://cepaonline.cl",
      "name": "CEPA - Centro de Estudios Psicom\xE9tricos y del Aprendizaje",
      "description": "ScrewFast offers top-tier hardware tools and expert construction services to meet all your project needs."
    },
    "inLanguage": "es-CL"
  } }, { "default": ($$result2) => renderTemplate`  ${renderComponent($$result2, "MainSection", $$MainSection, { "title": "Instituci\xF3n precursora en Psicometr\xEDa de chile", "subTitle": "El Centro de Estudios Psicom\xE9tricos y del Aprendizaje (CEPA), fundado en mayo de 2023, lidera la investigaci\xF3n en psicometr\xEDa en Chile. Con un enfoque humano y cient\xEDfico, promovemos el uso responsable de las evaluaciones cognitivas para mejorar la calidad de vida de las personas.", "btnExists": true, "btnTitle": "\xA1Trabajemos juntos!", "btnURL": "/contact", "imgOne": "img/psicology-1.png", "imgOneAlt": "Blueprints and digital tablet with construction plans.", "imgTwo": "img/psicology-2.png", "imgTwoAlt": "Person working in the office" })}  ${specializations.map((specialization) => {
    return specialization.isRightSection ? renderTemplate`${renderComponent($$result2, "RightSection", $$RightSection, { "title": specialization.title, "subTitle": specialization.subTitle, "single": specialization.single, "imgOne": specialization.imgOne, "imgOneAlt": specialization.imgOneAlt, "imgTwo": specialization.imgTwo, "imgTwoAlt": specialization.imgTwoAlt, "btnExists": specialization.btnExists, "btnTitle": specialization.btnTitle, "btnURL": specialization.btnURL })}` : renderTemplate`${renderComponent($$result2, "LeftSection", $$LeftSection, { "title": specialization.title, "subTitle": specialization.subTitle, "img": specialization.img, "imgAlt": specialization.imgAlt, "btnExists": specialization.btnExists, "btnTitle": specialization.btnTitle, "btnURL": specialization.btnURL })}`;
  })}  ` })}`;
}, "/var/www/html/cepaonline/src/pages/about.astro", void 0);

const $$file = "/var/www/html/cepaonline/src/pages/about.astro";
const $$url = "/about";

export { $$About as default, $$file as file, $$url as url };
