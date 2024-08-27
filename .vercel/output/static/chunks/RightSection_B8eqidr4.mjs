import { a as createAstro, b as createComponent, d as renderTemplate, m as maybeRenderHead, f as renderComponent, e as addAttribute } from './astro/server_CxlEycRW.mjs';
import 'kleur/colors';
import { $ as $$PrimaryCTA } from './PrimaryCTA_BgPrrTtI.mjs';

const $$Astro = createAstro("https://screwfast.uk");
const $$RightSection = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$RightSection;
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
  return renderTemplate`<!-- Root section of the component -->${maybeRenderHead()}<section class="mx-auto max-w-[85rem] items-center gap-16 px-4 py-10 sm:px-6 lg:grid lg:grid-cols-2 lg:px-8 lg:py-14 2xl:max-w-full"> <div> <!-- Title of the section --> <h2 class="mb-4 text-balance text-4xl font-extrabold tracking-tight text-neutral-800 dark:text-neutral-200"> ${title} </h2> <!-- Subtitle of the section --> <p class="mb-4 max-w-prose text-pretty font-light text-neutral-600 dark:text-neutral-400 sm:text-lg"> ${subTitle} </p> <!-- Conditional rendering of the Primary Call-To-Action button if 'btnExists' is true --> ${btnExists ? renderTemplate`${renderComponent($$result, "PrimaryCTA", $$PrimaryCTA, { "title": btnTitle, "url": btnURL })}` : null} </div> <!-- Conditionally render one or two images based on 'single' property --> ${single ? renderTemplate`<div class="mt-8"> <!-- Single image --> <img class="w-full rounded-lg"${addAttribute(imgOne, "src")}${addAttribute(imgOneAlt, "alt")}> </div>` : renderTemplate`<div class="mt-8 grid grid-cols-2 gap-4"> <!-- First image in a two-image layout --> <img class="w-full rounded-xl"${addAttribute(imgOne, "src")}${addAttribute(imgOneAlt, "alt")}${addAttribute("false", "draggable")}> <!-- Second image in a two-image layout --> <img class="mt-4 w-full rounded-xl lg:mt-10"${addAttribute(imgTwo, "src")}${addAttribute(imgTwoAlt, "alt")}${addAttribute("false", "draggable")}> </div>`} </section>`;
}, "/var/www/html/cepaonline/src/components/ui/blocks/RightSection.astro", void 0);

export { $$RightSection as $ };
