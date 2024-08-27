import { a as createAstro, b as createComponent, d as renderTemplate, m as maybeRenderHead, f as renderComponent, e as addAttribute } from './astro/server_CxlEycRW.mjs';
import 'kleur/colors';
import { $ as $$PrimaryCTA } from './PrimaryCTA_BgPrrTtI.mjs';

const $$Astro$1 = createAstro("https://screwfast.uk");
const $$MainSection = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$MainSection;
  const {
    title,
    subTitle,
    btnExists,
    btnTitle,
    btnURL,
    single,
    imgOne,
    imgOneAlt,
    imgTwo,
    imgTwoAlt
  } = Astro2.props;
  return renderTemplate`<!-- Root section of the component -->${maybeRenderHead()}<section class="mx-auto max-w-[85rem] items-center gap-16 px-4 py-10 sm:px-6 lg:grid lg:grid-cols-2 lg:px-8 lg:py-14 2xl:max-w-full"> <div class=""> <!-- Section title --> <h1 class="mb-4 text-balance text-4xl font-extrabold tracking-tight text-neutral-800 dark:text-neutral-200"> ${title} </h1> <!-- Section subtitle --> <p class="mb-8 max-w-prose text-pretty font-light text-neutral-600 dark:text-neutral-400 sm:text-xl"> ${subTitle} </p> <!-- Conditional rendering of PrimaryCTA component if 'btnExists' property is truthy --> ${btnExists ? renderTemplate`<div class="flex flex-col space-y-4 sm:flex-row sm:space-x-4 sm:space-y-0"> ${renderComponent($$result, "PrimaryCTA", $$PrimaryCTA, { "title": btnTitle, "url": btnURL })} </div>` : null} </div> <!-- Conditionally render one or two images based on 'single' property --> ${single ? renderTemplate`<div class="mt-8"> <!-- Single image --> <img class="w-full rounded-lg"${addAttribute(imgOne, "src")}${addAttribute(imgOneAlt, "alt")}> </div>` : renderTemplate`<div class="mt-8 grid grid-cols-2 gap-4"> <!-- First image in a two-image layout --> <img class="w-full rounded-xl"${addAttribute(imgOne, "src")}${addAttribute(imgOneAlt, "alt")}${addAttribute("false", "draggable")}> <!-- Second image in a two-image layout --> <img class="mt-4 w-full rounded-xl lg:mt-10"${addAttribute(imgTwo, "src")}${addAttribute(imgTwoAlt, "alt")}${addAttribute("false", "draggable")}> </div>`} </section>`;
}, "/var/www/html/cepaonline/src/components/ui/blocks/MainSection.astro", void 0);

const $$Astro = createAstro("https://screwfast.uk");
const $$LeftSection = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$LeftSection;
  const { title, subTitle, btnExists, btnTitle, btnURL, img, imgAlt } = Astro2.props;
  return renderTemplate`<!-- The root section of the component -->${maybeRenderHead()}<section class="mx-auto max-w-[85rem] items-center gap-8 px-4 py-10 sm:px-6 sm:py-16 md:grid md:grid-cols-2 lg:grid lg:grid-cols-2 lg:px-8 lg:py-14 xl:gap-16 2xl:max-w-full"> <!-- The Image component which renders the image --> <img class="w-full rounded-xl"${addAttribute(img, "src")}${addAttribute(imgAlt, "alt")}${addAttribute("false", "draggable")}> <!-- The container for title, subtitle, and optional CTA button --> <div class="mt-4 md:mt-0"> <!-- The title of the section --> <h2 class="mb-4 text-balance text-4xl font-extrabold tracking-tight text-neutral-800 dark:text-neutral-200"> ${title} </h2> <!-- The subtitle of the section --> <p class="mb-4 max-w-prose text-pretty font-light text-neutral-600 dark:text-neutral-400 sm:text-lg"> ${subTitle} </p> <!-- Conditionally render the Primary CTA button if btnExists is true --> ${btnExists ? renderTemplate`${renderComponent($$result, "PrimaryCTA", $$PrimaryCTA, { "title": btnTitle, "url": btnURL })}` : null} </div> </section>`;
}, "/var/www/html/cepaonline/src/components/ui/blocks/LeftSection.astro", void 0);

export { $$MainSection as $, $$LeftSection as a };
