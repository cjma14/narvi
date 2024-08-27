/* empty css                         */
import { b as createComponent, d as renderTemplate, m as maybeRenderHead, f as renderComponent } from './astro/server_CxlEycRW.mjs';
import 'kleur/colors';
import { b as $$AuthBtn, a as $$MainLayout, S as SITE } from './MainLayout_CAlHLmIZ.mjs';
import { $ as $$TextInput, a as $$EmailContactInput, b as $$PhoneInput, c as $$TextAreaInput, d as $$ContactIconBlock } from './TextAreaInput_C_jGp3T4.mjs';

const $$ContactSection = createComponent(($$result, $$props, $$slots) => {
  const title = "Contactanos";
  const subTitle = "Tu futuro comienza aqu\xED. \xA1Escr\xEDbenos!";
  const formTitle = "Complete la informaci\xF3n del formulario, o contactenos por nuestros otros canales";
  const formSubTitle = "Nuestro tiempo de respuesta es de 24hrs";
  return renderTemplate`<!-- Contact Us -->${maybeRenderHead()}<section class="mx-auto max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14"> <div class="mx-auto max-w-2xl lg:max-w-5xl"> <div class="text-center"> <h1 class="text-balance text-2xl font-bold tracking-tight text-neutral-800 dark:text-neutral-200 md:text-4xl md:leading-tight"> ${title} </h1> <p class="mt-1 text-pretty text-neutral-600 dark:text-neutral-400"> ${subTitle} </p> </div> <div class="mt-12 grid items-center gap-6 lg:grid-cols-2 lg:gap-16"> <div class="flex flex-col rounded-xl p-4 sm:p-6 lg:p-8"> <h2 class="mb-8 text-xl font-bold text-neutral-700 dark:text-neutral-300"> ${formTitle} </h2> <!-- Form for user input with various input fields.--> <!-- Each field utilizes a different input component for the specific type of input (text, email, phone, and textarea)--> <form> <div class="grid gap-4"> <div class="grid grid-cols-1 gap-4 sm:grid-cols-2"> ${renderComponent($$result, "TextInput", $$TextInput, { "id": "hs-firstname-contacts", "label": "Nombre", "name": "hs-firstname-contacts" })} ${renderComponent($$result, "TextInput", $$TextInput, { "id": "hs-lastname-contacts", "label": "Apellido", "name": "hs-firstname-contacts" })} </div> ${renderComponent($$result, "EmailContactInput", $$EmailContactInput, { "id": "hs-email-contacts" })} ${renderComponent($$result, "PhoneInput", $$PhoneInput, { "id": "hs-phone-number" })} ${renderComponent($$result, "TextAreaInput", $$TextAreaInput, { "id": "hs-about-contacts", "label": "Mensaje", "name": "hs-about-contacts" })} </div> <div class="mt-4 grid"> ${renderComponent($$result, "AuthBtn", $$AuthBtn, { "title": "Enviar Mensaje" })} </div> <div class="mt-3 text-center"> <p class="text-sm text-neutral-600 dark:text-neutral-400"> ${formSubTitle} </p> </div> </form> </div> <!--ContactIconBlocks are used to display different methods of contacting, including visiting office, email, browsing knowledgebase, and FAQ.--> <div class="divide-y divide-neutral-300 dark:divide-neutral-700"> ${renderComponent($$result, "ContactIconBlock", $$ContactIconBlock, { "heading": "Tel\xE9fono", "content": "+56 9 9978 8857" })} ${renderComponent($$result, "ContactIconBlock", $$ContactIconBlock, { "heading": "Correo", "content": "emartinez@cepaonline.cl - contacto@cepaonline.cl" })} ${renderComponent($$result, "ContactIconBlock", $$ContactIconBlock, { "heading": "Direcci\xF3n", "content": "Uribe 636, Oficina N\xB0 302, Antofagasta | Lunes a Viernes 9:00 AM - 6:00 PM" })} </div> </div> </div> </section>`;
}, "/var/www/html/cepaonline/src/components/sections/misc/ContactSection.astro", void 0);

const $$Contact = createComponent(($$result, $$props, $$slots) => {
  const pageTitle = `Contacto | ${SITE.title}`;
  return renderTemplate`<!--Utilizing MainLayout for the outer layout of the page, and defining meta for SEO purposes-->${renderComponent($$result, "MainLayout", $$MainLayout, { "title": pageTitle, "structuredData": {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "@id": "https://cepaonline.cl/contact",
    "url": "https://cepaonline.cl/contact",
    "name": "Contacto | CEPA - Centro de Estudios Psicom\xE9tricos y del Aprendizaje",
    "description": "Para mayor informaci\xF3n sobre TBA contactanos estamos para ayudarte",
    "isPartOf": {
      "@type": "WebSite",
      "url": "https://cepaonline.cl",
      "name": "CEPA - Centro de Estudios Psicom\xE9tricos y del Aprendizaje",
      "description": "ScrewFast offers top-tier hardware tools and expert construction services to meet all your project needs."
    },
    "inLanguage": "es-CL"
  } }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "ContactSection", $$ContactSection, {})} ` })}`;
}, "/var/www/html/cepaonline/src/pages/contact.astro", void 0);

const $$file = "/var/www/html/cepaonline/src/pages/contact.astro";
const $$url = "/contact";

export { $$Contact as default, $$file as file, $$url as url };
