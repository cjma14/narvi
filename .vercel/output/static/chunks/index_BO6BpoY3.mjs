/* empty css                         */
import { b as createComponent, d as renderTemplate, f as renderComponent } from './astro/server_CxlEycRW.mjs';
import 'kleur/colors';
import { a as $$MainLayout } from './MainLayout_CAlHLmIZ.mjs';
import { b as avatar, $ as $$HeroSection, h as heroImage, a as $$ClientsSection, c as $$FeaturesNavs, d as $$TestimonialsSection, e as $$FAQ, f as $$HeroSectionAlt } from './avatar_HOyw0mXO.mjs';
import { $ as $$PricingSection } from './PricingSection_DOfBVMBe.mjs';
import { p as pricing } from './pricing_CHjkLdmV.mjs';

const subTitle = "¿Tienes dudas? ¡Aquí están las respuestas! Una guía completa para resolver tus preguntas.";
const faqs = [
	{
		question: "¿Qué es TBA y para qué sirve?",
		answer: "TBA es una herramienta de análisis de aprendizaje que permite evaluar de manera precisa y eficiente las habilidades de los estudiantes. A través de un análisis detallado, TBA identifica las fortalezas y áreas de oportunidad de cada alumno, proporcionando información valiosa para personalizar el proceso de enseñanza."
	},
	{
		question: "¿Qué soporte técnico ofrecen?",
		answer: "Ofrecemos un soporte técnico completo a través de nuestros canales de 'Contactanos'. Nuestro equipo de expertos está disponible para resolver cualquier duda o incidencia que puedas tener"
	},
	{
		question: "¿Qué tipo de dispositivos y sistemas operativos son compatibles con TBA?",
		answer: "TBA es compatible con una amplia variedad de dispositivos y sistemas operativos, incluyendo computadoras de escritorio, portátiles, tablets y smartphones. Puedes acceder a TBA desde cualquier dispositivo con conexión a internet y un navegador web moderno."
	},
	{
		question: "¿Qué tipo de capacitación se ofrece para utilizar TBA?",
		answer: "Ofrecemos una certificación dada por el Doctor Pablo San Martín Catalán, la cual templa todo aspecto teórico y práctico para usar TBA."
	}
];
const faqs$1 = {
	subTitle: subTitle,
	faqs: faqs
};

const featuresTabs = [
	{
		heading: "TBA herramienta psicopedagógica integral",
		content: "es una batería informatizada, lo que permite automatizar procesos evaluativos y generar análisis cuantitativos y cualitativos para cada variable evaluada. Esta característica no solo agiliza el proceso de evaluación, sino que también proporciona resultados más detallados y precisos.",
		svg: "question",
		src: "/img/profecional-tba.png",
		alt: "Profecional reallizando prueba TBA",
		first: true
	},
	{
		heading: "Metodología de trabajo",
		content: "El programa consta de 4 módulos que cubren desde la comprensión de los fundamentos teóricos y clínicos de las Dificultades Específicas de Aprendizaje (DEA), hasta los fundamentos teóricos, técnicos y propiedades psicométricas del Test Básico de Aprendizaje (TBA), incluyendo el análisis de reactivos y el manejo de datos e informe de resultados.",
		svg: "verified",
		src: "/img/tba-book.png",
		alt: "Libro digital: Test Básico de Aprendizaje (TBA)",
		second: true
	},
	{
		heading: "Certificación",
		content: "Los estudiantes podrán obtener un certificado de aprobación del curso otorgado por el Centro de Estudios Psicométricos y del Aprendizaje (CEPA). El requisito es aprobar el examen con nota igual o superior a 4.0 con 60% de exigencia.",
		svg: "books",
		src: "/img/cetificacion-tba.png",
		alt: "Estudiante completando certificación TBA"
	},
	{
		heading: "Destinatarios",
		content: "El curso está dirigido a psicopedagogos/as, estudiantes de Psicopedagogía y profesionales afines.",
		svg: "groups",
		src: "/img/team.png",
		alt: "test"
	}
];

const $$Index = createComponent(($$result, $$props, $$slots) => {
  const avatarSrcs = [
    avatar.src
  ];
  return renderTemplate`${renderComponent($$result, "MainLayout", $$MainLayout, {}, { "default": ($$result2) => renderTemplate`  ${renderComponent($$result2, "HeroSection", $$HeroSection, { "title": `Evaluaciones precisas, futuro prometedor.`, "subTitle": "TBA: Tu gu\xEDa para el \xE9xito. Eval\xFAa y automatizar procesos evaluativos", "primaryBtn": "\xA1Empecemos!", "primaryBtnURL": "/products", "secondaryBtn": "Contactar con ventas", "secondaryBtnURL": "/contact", "withReview": false, "avatars": avatarSrcs, "rating": `<span class="font-bold">4.8</span> / 5`, "starCount": 4, "reviews": `From Over <span class="font-bold">12.8k</span> Reviews`, "src": heroImage, "alt": "El Test B\xE1sico de Aprendizaje (TBA) es una herramienta psicopedag\xF3gica integral dise\xF1ada para evaluar un amplio espectro de variables cognitivas" })} ${renderComponent($$result2, "ClientsSection", $$ClientsSection, { "title": "Instituciones l\xEDderes nos prefieren", "subTitle": "Confianza de l\xEDderes en nuestras evaluaciones" })}  ${renderComponent($$result2, "FeaturesNavs", $$FeaturesNavs, { "title": `<span class="text-primary-500 dark:text-primary-400">TBA</span> Bater\xEDa informatizada para evaluaciones automatizadas y an\xE1lisis profundos.`, "tabs": featuresTabs })} ${renderComponent($$result2, "TestimonialsSection", $$TestimonialsSection, { "title": "Resultados reales con TBA", "subTitle": "En CEPA demostramos nuestra valia, Insp\xEDrate con historias reales de superaci\xF3n. Descubre c\xF3mo nuestros usuarios han transformado sus vidas gracias a TBA.", ";": true, "testimonials": [
    {
      content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras dignissim nunc tellus, sed placerat mauris maximus a. Pellentesque congue odio eget quam fringilla iaculis. Sed purus nisi, faucibus sit amet orci sit amet, ullamcorper maximus orci. ",
      author: "Samantha Ruiz",
      role: "Chief Operating Officer | ConstructIt Inc.",
      avatarSrc: "https://images.unsplash.com/photo-1593104547489-5cfb3839a3b5?q=80&w=1453&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D8&auto=format&fit=facearea&facepad=2&w=320&h=320&q=80"
    }
  ], "statistics": [
    {
      count: "1 Mil+",
      description: "Resultados precisos en chile, descubre c\xF3mo TBA ha transformado la evaluaci\xF3n educativa."
    },
    {
      count: "100+",
      description: "Profesionales de la educaci\xF3n conf\xEDan en TBA para optimizar sus evaluaciones."
    },
    {
      count: "98.4%",
      description: "En Test-Retest. La estabilidad de las puntuaciones del TBA demuestra su alta confiabilidad en la evaluaci\xF3n de habilidades."
    },
    {
      count: "2x",
      description: "Mayor velocidad al momento de cuantificar resultados reales."
    }
  ] })} ${renderComponent($$result2, "PricingSection", $$PricingSection, { "pricing": pricing })} ${renderComponent($$result2, "FAQ", $$FAQ, { "title": "Preguntas<br />Frecuentes", "faqs": faqs$1 })} ${renderComponent($$result2, "HeroSectionAlt", $$HeroSectionAlt, { "title": "\xA1Trabajemos juntos!", "subTitle": "TBA est\xE1 para facilitar tus an\xE1lisis y evaluaciones. El futuro es hoy el futuro es TBA.", "url": "/contact" })} ` })}`;
}, "/var/www/html/cepaonline/src/pages/index.astro", void 0);

const $$file = "/var/www/html/cepaonline/src/pages/index.astro";
const $$url = "";

export { $$Index as default, $$file as file, $$url as url };
