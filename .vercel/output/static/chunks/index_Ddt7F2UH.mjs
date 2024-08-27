/* empty css                         */
import { b as createComponent, j as renderUniqueStylesheet, k as renderScriptElement, l as createHeadAndContent, d as renderTemplate, f as renderComponent, u as unescapeHTML, a as createAstro, m as maybeRenderHead, g as renderSlot, n as defineStyleVars, s as spreadAttributes, e as addAttribute, h as renderScript, F as Fragment, i as renderHead } from './astro/server_CxlEycRW.mjs';
import 'kleur/colors';
import { fileURLToPath } from 'node:url';
import { basename, dirname } from 'node:path';
import { spawnSync } from 'node:child_process';
import { f as AstroUserError, A as AstroError, U as UnknownContentCollectionError, p as prependForwardSlash } from './astro/assets-service_jgp3noYQ.mjs';
import pLimit from 'p-limit';
import * as z from 'zod';
/* empty css                         */
import 'clsx';
import { select } from 'hast-util-select';
import { rehype } from 'rehype';
import { visit, CONTINUE, SKIP } from 'unist-util-visit';
import rehypeFormat from 'rehype-format';
import { h, s } from 'hastscript';
import { fromHtml } from 'hast-util-from-html';
import { toString } from 'hast-util-to-string';
import { addClassName, toHtml } from 'rehype-expressive-code/hast';
import { $ as $$Image } from './_astro_assets_-91fX3jZ.mjs';

const project = {"build":{"format":"directory"},"root":"file:///var/www/html/cepaonline/","srcDir":"file:///var/www/html/cepaonline/src/","trailingSlash":"ignore"};

const starlightConfig = {"social":{"github":{"label":"GitHub","url":"https://github.com/mearashadowfax/ScrewFast"}},"tableOfContents":{"minHeadingLevel":2,"maxHeadingLevel":3},"editLink":{},"sidebar":[{"label":"Quick Start Guides","translations":{"de":"Schnellstartanleitungen","es":"Guías de Inicio Rápido","fa":"راهنمای شروع سریع","fr":"Guides de Démarrage Rapide","ja":"クイックスタートガイド","zh-cn":"快速入门指南"},"collapsed":false,"autogenerate":{"directory":"guides"}},{"label":"Tools & Equipment","translations":{},"collapsed":false,"items":[{"label":"Tool Guides","translations":{},"link":"tools/tool-guides/","attrs":{}},{"label":"Equipment Care","translations":{},"link":"tools/equipment-care/","attrs":{}}]},{"label":"Construction Services","translations":{},"collapsed":false,"autogenerate":{"directory":"construction"}},{"label":"Advanced Topics","translations":{},"collapsed":false,"autogenerate":{"directory":"advanced"}}],"head":[{"tag":"meta","attrs":{"property":"og:image","content":"https://screwfast.uk/social.webp"},"content":""},{"tag":"meta","attrs":{"property":"twitter:image","content":"https://screwfast.uk/social.webp"},"content":""}],"customCss":["./src/assets/styles/starlight.css"],"lastUpdated":false,"pagination":true,"favicon":{"href":"/favicon.ico","type":"image/x-icon"},"pagefind":true,"components":{"Head":"./src/components/ui/starlight/Head.astro","ThemeProvider":"@astrojs/starlight/components/ThemeProvider.astro","SkipLink":"@astrojs/starlight/components/SkipLink.astro","PageFrame":"@astrojs/starlight/components/PageFrame.astro","MobileMenuToggle":"@astrojs/starlight/components/MobileMenuToggle.astro","TwoColumnContent":"@astrojs/starlight/components/TwoColumnContent.astro","Header":"@astrojs/starlight/components/Header.astro","SiteTitle":"./src/components/ui/starlight/SiteTitle.astro","Search":"@astrojs/starlight/components/Search.astro","SocialIcons":"@astrojs/starlight/components/SocialIcons.astro","ThemeSelect":"./src/components/ui/starlight/ThemeSelect.astro","LanguageSelect":"@astrojs/starlight/components/LanguageSelect.astro","Sidebar":"@astrojs/starlight/components/Sidebar.astro","MobileMenuFooter":"./src/components/ui/starlight/MobileMenuFooter.astro","PageSidebar":"@astrojs/starlight/components/PageSidebar.astro","TableOfContents":"@astrojs/starlight/components/TableOfContents.astro","MobileTableOfContents":"@astrojs/starlight/components/MobileTableOfContents.astro","Banner":"@astrojs/starlight/components/Banner.astro","ContentPanel":"@astrojs/starlight/components/ContentPanel.astro","PageTitle":"@astrojs/starlight/components/PageTitle.astro","FallbackContentNotice":"@astrojs/starlight/components/FallbackContentNotice.astro","DraftContentNotice":"@astrojs/starlight/components/DraftContentNotice.astro","Hero":"@astrojs/starlight/components/Hero.astro","MarkdownContent":"@astrojs/starlight/components/MarkdownContent.astro","Footer":"@astrojs/starlight/components/Footer.astro","LastUpdated":"@astrojs/starlight/components/LastUpdated.astro","Pagination":"@astrojs/starlight/components/Pagination.astro","EditLink":"@astrojs/starlight/components/EditLink.astro"},"titleDelimiter":"|","disable404Route":true,"credits":false,"title":{"en":"ScrewFast Docs"},"isMultilingual":true,"isUsingBuiltInDefaultLocale":false,"defaultLocale":{"label":"English","lang":"en","dir":"ltr","locale":"root"},"locales":{"root":{"label":"English","lang":"en","dir":"ltr"},"de":{"label":"Deutsch","lang":"de","dir":"ltr"},"es":{"label":"Español","lang":"es","dir":"ltr"},"fa":{"label":"Persian","lang":"fa","dir":"rtl"},"fr":{"label":"Français","lang":"fr","dir":"ltr"},"ja":{"label":"日本語","lang":"ja","dir":"ltr"},"zh-cn":{"label":"简体中文","lang":"zh-CN","dir":"ltr"}}};

const PAGE_TITLE_ID = "_top";

function generateToC(headings, { minHeadingLevel, maxHeadingLevel, title }) {
  headings = headings.filter(({ depth }) => depth >= minHeadingLevel && depth <= maxHeadingLevel);
  const toc = [{ depth: 2, slug: PAGE_TITLE_ID, text: title, children: [] }];
  for (const heading of headings) injectChild(toc, { ...heading, children: [] });
  return toc;
}
function injectChild(items, item) {
  const lastItem = items.at(-1);
  if (!lastItem || lastItem.depth >= item.depth) {
    items.push(item);
  } else {
    return injectChild(lastItem.children, item);
  }
}

function getNewestCommitDate(file) {
  const result = spawnSync("git", ["log", "--format=%ct", "--max-count=1", basename(file)], {
    cwd: dirname(file),
    encoding: "utf-8"
  });
  if (result.error) {
    throw new Error(`Failed to retrieve the git history for file "${file}"`);
  }
  const output = result.stdout.trim();
  const regex = /^(?<timestamp>\d+)$/;
  const match = output.match(regex);
  if (!match?.groups?.timestamp) {
    throw new Error(`Failed to validate the timestamp for file "${file}"`);
  }
  const timestamp = Number(match.groups.timestamp);
  const date = new Date(timestamp * 1e3);
  return date;
}

function ensureLeadingSlash(href) {
  if (href[0] !== "/") href = "/" + href;
  return href;
}
function ensureTrailingSlash(href) {
  if (href[href.length - 1] !== "/") href += "/";
  return href;
}
function stripLeadingSlash(href) {
  if (href[0] === "/") href = href.slice(1);
  return href;
}
function stripTrailingSlash(href) {
  if (href[href.length - 1] === "/") href = href.slice(0, -1);
  return href;
}
function stripLeadingAndTrailingSlashes(href) {
  href = stripLeadingSlash(href);
  href = stripTrailingSlash(href);
  return href;
}
function stripHtmlExtension(path) {
  const pathWithoutTrailingSlash = stripTrailingSlash(path);
  return pathWithoutTrailingSlash.endsWith(".html") ? pathWithoutTrailingSlash.slice(0, -5) : path;
}
function ensureHtmlExtension(path) {
  path = stripLeadingAndTrailingSlashes(path);
  if (!path.endsWith(".html")) {
    path = path ? path + ".html" : "/index.html";
  }
  return ensureLeadingSlash(path);
}

const base = stripTrailingSlash("/");
function pathWithBase(path) {
  path = stripLeadingSlash(path);
  return path ? base + "/" + path : base + "/";
}
function fileWithBase(path) {
  path = stripLeadingSlash(path);
  return path ? base + "/" + path : base;
}

const defaultFormatStrategy = {
  addBase: pathWithBase,
  handleExtension: (href) => stripHtmlExtension(href)
};
const formatStrategies = {
  file: {
    addBase: fileWithBase,
    handleExtension: (href) => ensureHtmlExtension(href)
  },
  directory: defaultFormatStrategy,
  preserve: defaultFormatStrategy
};
const trailingSlashStrategies = {
  always: ensureTrailingSlash,
  never: stripTrailingSlash,
  ignore: (href) => href
};
function formatPath$1(href, { format = "directory", trailingSlash = "ignore" }) {
  const formatStrategy = formatStrategies[format];
  const trailingSlashStrategy = trailingSlashStrategies[trailingSlash];
  href = formatStrategy.addBase(href);
  href = formatStrategy.handleExtension(href);
  if (format === "file") return href;
  href = href === "/" ? href : trailingSlashStrategy(href);
  return href;
}
function createPathFormatter(opts) {
  return (href) => formatPath$1(href, opts);
}

const formatPath = createPathFormatter({
  format: project.build.format,
  trailingSlash: project.trailingSlash
});

const BuiltInDefaultLocale = { ...getLocaleInfo("en"), lang: "en" };
const wellKnownRTL = ["ar", "fa", "he", "prs", "ps", "syc", "ug", "ur"];
function getLocaleInfo(lang) {
  try {
    const locale = new Intl.Locale(lang);
    const label = new Intl.DisplayNames(locale, { type: "language" }).of(lang);
    if (!label || lang === label) throw new Error("Label not found.");
    return {
      label: label[0]?.toLocaleUpperCase(locale) + label.slice(1),
      dir: getLocaleDir(locale)
    };
  } catch (error) {
    throw new AstroUserError(
      `Failed to get locale informations for the '${lang}' locale.`,
      "Make sure to provide a valid BCP-47 tags (e.g. en, ar, or zh-CN)."
    );
  }
}
function getLocaleDir(locale) {
  if ("textInfo" in locale) {
    return locale.textInfo.direction;
  } else if ("getTextInfo" in locale) {
    return locale.getTextInfo().direction;
  }
  return wellKnownRTL.includes(locale.language) ? "rtl" : "ltr";
}
function pickLang(dictionary, lang) {
  return dictionary[lang];
}

function createCollectionToGlobResultMap({
  globResult,
  contentDir
}) {
  const collectionToGlobResultMap = {};
  for (const key in globResult) {
    const keyRelativeToContentDir = key.replace(new RegExp(`^${contentDir}`), "");
    const segments = keyRelativeToContentDir.split("/");
    if (segments.length <= 1) continue;
    const collection = segments[0];
    collectionToGlobResultMap[collection] ??= {};
    collectionToGlobResultMap[collection][key] = globResult[key];
  }
  return collectionToGlobResultMap;
}
function createGetCollection({
  contentCollectionToEntryMap,
  dataCollectionToEntryMap,
  getRenderEntryImport,
  cacheEntriesByCollection
}) {
  return async function getCollection(collection, filter) {
    let type;
    if (collection in contentCollectionToEntryMap) {
      type = "content";
    } else if (collection in dataCollectionToEntryMap) {
      type = "data";
    } else {
      console.warn(
        `The collection ${JSON.stringify(
          collection
        )} does not exist or is empty. Ensure a collection directory with this name exists.`
      );
      return [];
    }
    const lazyImports = Object.values(
      type === "content" ? contentCollectionToEntryMap[collection] : dataCollectionToEntryMap[collection]
    );
    let entries = [];
    if (!Object.assign({"BASE_URL": "/", "MODE": "production", "DEV": false, "PROD": true, "SSR": true, "SITE": "https://screwfast.uk", "ASSETS_PREFIX": undefined}, { _: process.env._ })?.DEV && cacheEntriesByCollection.has(collection)) {
      entries = cacheEntriesByCollection.get(collection);
    } else {
      const limit = pLimit(10);
      entries = await Promise.all(
        lazyImports.map(
          (lazyImport) => limit(async () => {
            const entry = await lazyImport();
            return type === "content" ? {
              id: entry.id,
              slug: entry.slug,
              body: entry.body,
              collection: entry.collection,
              data: entry.data,
              async render() {
                return render({
                  collection: entry.collection,
                  id: entry.id,
                  renderEntryImport: await getRenderEntryImport(collection, entry.slug)
                });
              }
            } : {
              id: entry.id,
              collection: entry.collection,
              data: entry.data
            };
          })
        )
      );
      cacheEntriesByCollection.set(collection, entries);
    }
    if (typeof filter === "function") {
      return entries.filter(filter);
    } else {
      return entries.slice();
    }
  };
}
async function render({
  collection,
  id,
  renderEntryImport
}) {
  const UnexpectedRenderError = new AstroError({
    ...UnknownContentCollectionError,
    message: `Unexpected error while rendering ${String(collection)} → ${String(id)}.`
  });
  if (typeof renderEntryImport !== "function") throw UnexpectedRenderError;
  const baseMod = await renderEntryImport();
  if (baseMod == null || typeof baseMod !== "object") throw UnexpectedRenderError;
  const { default: defaultMod } = baseMod;
  if (isPropagatedAssetsModule(defaultMod)) {
    const { collectedStyles, collectedLinks, collectedScripts, getMod } = defaultMod;
    if (typeof getMod !== "function") throw UnexpectedRenderError;
    const propagationMod = await getMod();
    if (propagationMod == null || typeof propagationMod !== "object") throw UnexpectedRenderError;
    const Content = createComponent({
      factory(result, baseProps, slots) {
        let styles = "", links = "", scripts = "";
        if (Array.isArray(collectedStyles)) {
          styles = collectedStyles.map((style) => {
            return renderUniqueStylesheet(result, {
              type: "inline",
              content: style
            });
          }).join("");
        }
        if (Array.isArray(collectedLinks)) {
          links = collectedLinks.map((link) => {
            return renderUniqueStylesheet(result, {
              type: "external",
              src: prependForwardSlash(link)
            });
          }).join("");
        }
        if (Array.isArray(collectedScripts)) {
          scripts = collectedScripts.map((script) => renderScriptElement(script)).join("");
        }
        let props = baseProps;
        if (id.endsWith("mdx")) {
          props = {
            components: propagationMod.components ?? {},
            ...baseProps
          };
        }
        return createHeadAndContent(
          unescapeHTML(styles + links + scripts),
          renderTemplate`${renderComponent(
            result,
            "Content",
            propagationMod.Content,
            props,
            slots
          )}`
        );
      },
      propagation: "self"
    });
    return {
      Content,
      headings: propagationMod.getHeadings?.() ?? [],
      remarkPluginFrontmatter: propagationMod.frontmatter ?? {}
    };
  } else if (baseMod.Content && typeof baseMod.Content === "function") {
    return {
      Content: baseMod.Content,
      headings: baseMod.getHeadings?.() ?? [],
      remarkPluginFrontmatter: baseMod.frontmatter ?? {}
    };
  } else {
    throw UnexpectedRenderError;
  }
}
function isPropagatedAssetsModule(module) {
  return typeof module === "object" && module != null && "__astroPropagation" in module;
}

// astro-head-inject

const contentDir = '/src/content/';

const contentEntryGlob = /* #__PURE__ */ Object.assign({"/src/content/about/Fully-Customizable.md": () => import('./Fully-Customizable_kkaxNpUc.mjs'),"/src/content/about/React-18-Nextjs-13-and-TypeScript.md": () => import('./React-18-Nextjs-13-and-TypeScript_DenlLpfj.mjs'),"/src/content/blogs/3-Simple-ways-to-improve-your-coding-skills.md": () => import('./3-Simple-ways-to-improve-your-coding-skills_D6ToRZf6.mjs'),"/src/content/blogs/9-simple-ways-to-improve-your-design-digital-product.md": () => import('./9-simple-ways-to-improve-your-design-digital-product_Cey6Dgeg.mjs'),"/src/content/blogs/Free-advertising-for-your-digital-product.md": () => import('./Free-advertising-for-your-digital-product_DX_CDDke.mjs'),"/src/content/blogs/Free-advertising-for-your-online-business.md": () => import('./Free-advertising-for-your-online-business_BCrTP5jZ.mjs'),"/src/content/blogs/Tips-to-quickly-improve-your-coding-speed.md": () => import('./Tips-to-quickly-improve-your-coding-speed_BmO5N-HA.mjs'),"/src/content/blogs/how-to-make-money-online.md": () => import('./how-to-make-money-online_CprBfgBp.mjs'),"/src/content/brands/brands.md": () => import('./brands_1R1-TIX6.mjs'),"/src/content/faq/que-1.md": () => import('./que-1_D-eES39s.mjs'),"/src/content/faq/que-2.md": () => import('./que-2_CI14BAgX.mjs'),"/src/content/faq/que-3.md": () => import('./que-3_BDUWmDqz.mjs'),"/src/content/featureTab/-Fully-Functional-Integrations.md": () => import('./-Fully-Functional-Integrations_dA0dBNXt.mjs'),"/src/content/featureTab/Clean-User-Interface.md": () => import('./Clean-User-Interface_D_tQWGIv.mjs'),"/src/content/featureTab/Essential-Business-Pages.md": () => import('./Essential-Business-Pages_CPTBHkWy.mjs'),"/src/content/features/Crafted-for-SaaS.md": () => import('./Crafted-for-SaaS_BO2NG23s.mjs'),"/src/content/features/DB-Auth-and-Stripe.md": () => import('./DB-Auth-and-Stripe_CIchR6oM.mjs'),"/src/content/features/High-quality-Design.md": () => import('./High-quality-Design_DEdS5q02.mjs'),"/src/content/features/Nextjs--TypeScript.md": () => import('./Nextjs--TypeScript_BTPXvo7r.mjs'),"/src/content/features/Regular-Free-Updates.md": () => import('./Regular-Free-Updates_C5XwKHaC.mjs'),"/src/content/features/Sanity-Blog-and-Docs.md": () => import('./Sanity-Blog-and-Docs_DL9XsFDO.mjs'),"/src/content/integrations/integrations.md": () => import('./integrations_CxZFgyF6.mjs'),"/src/content/prices/Large-Pack.md": () => import('./Large-Pack_C_-KYYxu.mjs'),"/src/content/prices/Medium-Pack.md": () => import('./Medium-Pack_CDpqYD8K.mjs'),"/src/content/prices/Small-Pack.md": () => import('./Small-Pack_C1un21Uv.mjs'),"/src/content/sectionTitles/titles.md": () => import('./titles_CjiDumM4.mjs'),"/src/content/siteConfig/config.md": () => import('./config_CVX-cMtT.mjs'),"/src/content/stats/stats.md": () => import('./stats_tIkMwWLM.mjs'),"/src/content/testimonials/Carl-Hanson.md": () => import('./Carl-Hanson_bprS_N4N.mjs'),"/src/content/testimonials/Devid-Smith.md": () => import('./Devid-Smith_DIoczpbr.mjs'),"/src/content/testimonials/Jhon-Abraham.md": () => import('./Jhon-Abraham_CY2Apkev.mjs'),"/src/content/testimonials/John-Doe.md": () => import('./John-Doe_Bs4qR41G.mjs')});
const contentCollectionToEntryMap = createCollectionToGlobResultMap({
	globResult: contentEntryGlob,
	contentDir,
});

const dataEntryGlob = /* #__PURE__ */ Object.assign({});
const dataCollectionToEntryMap = createCollectionToGlobResultMap({
	globResult: dataEntryGlob,
	contentDir,
});
createCollectionToGlobResultMap({
	globResult: { ...contentEntryGlob, ...dataEntryGlob },
	contentDir,
});

let lookupMap = {};
lookupMap = {"about":{"type":"content","entries":{"fully-customizable":"/src/content/about/Fully-Customizable.md","react-18-nextjs-13-and-typescript":"/src/content/about/React-18-Nextjs-13-and-TypeScript.md"}},"brands":{"type":"content","entries":{"brands":"/src/content/brands/brands.md"}},"blogs":{"type":"content","entries":{"3-simple-ways-to-improve-your-coding-skills":"/src/content/blogs/3-Simple-ways-to-improve-your-coding-skills.md","9-simple-ways-to-improve-your-design-digital-product":"/src/content/blogs/9-simple-ways-to-improve-your-design-digital-product.md","free-advertising-for-your-digital-product":"/src/content/blogs/Free-advertising-for-your-digital-product.md","free-advertising-for-your-online-business":"/src/content/blogs/Free-advertising-for-your-online-business.md","tips-to-quickly-improve-your-coding-speed":"/src/content/blogs/Tips-to-quickly-improve-your-coding-speed.md","how-to-make-money-online":"/src/content/blogs/how-to-make-money-online.md"}},"faq":{"type":"content","entries":{"que-1":"/src/content/faq/que-1.md","que-2":"/src/content/faq/que-2.md","que-3":"/src/content/faq/que-3.md"}},"featureTab":{"type":"content","entries":{"-fully-functional-integrations":"/src/content/featureTab/-Fully-Functional-Integrations.md","clean-user-interface":"/src/content/featureTab/Clean-User-Interface.md","essential-business-pages":"/src/content/featureTab/Essential-Business-Pages.md"}},"features":{"type":"content","entries":{"crafted-for-saas":"/src/content/features/Crafted-for-SaaS.md","db-auth-and-stripe":"/src/content/features/DB-Auth-and-Stripe.md","high-quality-design":"/src/content/features/High-quality-Design.md","nextjs--typescript":"/src/content/features/Nextjs--TypeScript.md","regular-free-updates":"/src/content/features/Regular-Free-Updates.md","sanity-blog-and-docs":"/src/content/features/Sanity-Blog-and-Docs.md"}},"integrations":{"type":"content","entries":{"integrations":"/src/content/integrations/integrations.md"}},"prices":{"type":"content","entries":{"large-pack":"/src/content/prices/Large-Pack.md","medium-pack":"/src/content/prices/Medium-Pack.md","small-pack":"/src/content/prices/Small-Pack.md"}},"sectionTitles":{"type":"content","entries":{"titles":"/src/content/sectionTitles/titles.md"}},"siteConfig":{"type":"content","entries":{"config":"/src/content/siteConfig/config.md"}},"stats":{"type":"content","entries":{"stats":"/src/content/stats/stats.md"}},"testimonials":{"type":"content","entries":{"carl-hanson":"/src/content/testimonials/Carl-Hanson.md","devid-smith":"/src/content/testimonials/Devid-Smith.md","jhon-abraham":"/src/content/testimonials/Jhon-Abraham.md","john-doe":"/src/content/testimonials/John-Doe.md"}}};

function createGlobLookup(glob) {
	return async (collection, lookupId) => {
		const filePath = lookupMap[collection]?.entries[lookupId];

		if (!filePath) return undefined;
		return glob[collection][filePath];
	};
}

const renderEntryGlob = /* #__PURE__ */ Object.assign({"/src/content/about/Fully-Customizable.md": () => import('./Fully-Customizable_rPY5C38X.mjs'),"/src/content/about/React-18-Nextjs-13-and-TypeScript.md": () => import('./React-18-Nextjs-13-and-TypeScript_ZqhsIKgT.mjs'),"/src/content/blogs/3-Simple-ways-to-improve-your-coding-skills.md": () => import('./3-Simple-ways-to-improve-your-coding-skills_CCUdjF5N.mjs'),"/src/content/blogs/9-simple-ways-to-improve-your-design-digital-product.md": () => import('./9-simple-ways-to-improve-your-design-digital-product_DXNUq1yi.mjs'),"/src/content/blogs/Free-advertising-for-your-digital-product.md": () => import('./Free-advertising-for-your-digital-product_BDChtOPQ.mjs'),"/src/content/blogs/Free-advertising-for-your-online-business.md": () => import('./Free-advertising-for-your-online-business_BaaRHcWi.mjs'),"/src/content/blogs/Tips-to-quickly-improve-your-coding-speed.md": () => import('./Tips-to-quickly-improve-your-coding-speed_C96B1NcJ.mjs'),"/src/content/blogs/how-to-make-money-online.md": () => import('./how-to-make-money-online_D0HKsnlW.mjs'),"/src/content/brands/brands.md": () => import('./brands_BXujG78B.mjs'),"/src/content/faq/que-1.md": () => import('./que-1_Drkmeyf4.mjs'),"/src/content/faq/que-2.md": () => import('./que-2_UPacEXr0.mjs'),"/src/content/faq/que-3.md": () => import('./que-3_BZg2Myek.mjs'),"/src/content/featureTab/-Fully-Functional-Integrations.md": () => import('./-Fully-Functional-Integrations_CRNT0uRR.mjs'),"/src/content/featureTab/Clean-User-Interface.md": () => import('./Clean-User-Interface_CFN50BrB.mjs'),"/src/content/featureTab/Essential-Business-Pages.md": () => import('./Essential-Business-Pages_CVna2VdB.mjs'),"/src/content/features/Crafted-for-SaaS.md": () => import('./Crafted-for-SaaS_AaHoYlTf.mjs'),"/src/content/features/DB-Auth-and-Stripe.md": () => import('./DB-Auth-and-Stripe_BbCjoOZa.mjs'),"/src/content/features/High-quality-Design.md": () => import('./High-quality-Design_C6qAqGAG.mjs'),"/src/content/features/Nextjs--TypeScript.md": () => import('./Nextjs--TypeScript_BdRg7HZ8.mjs'),"/src/content/features/Regular-Free-Updates.md": () => import('./Regular-Free-Updates_BEHZCvXA.mjs'),"/src/content/features/Sanity-Blog-and-Docs.md": () => import('./Sanity-Blog-and-Docs_CDdnEzik.mjs'),"/src/content/integrations/integrations.md": () => import('./integrations_gOLT43So.mjs'),"/src/content/prices/Large-Pack.md": () => import('./Large-Pack_Dgy-e6Ut.mjs'),"/src/content/prices/Medium-Pack.md": () => import('./Medium-Pack_DqH0OGRi.mjs'),"/src/content/prices/Small-Pack.md": () => import('./Small-Pack_Ba-HYQVS.mjs'),"/src/content/sectionTitles/titles.md": () => import('./titles_9hJsX0zE.mjs'),"/src/content/siteConfig/config.md": () => import('./config_D5v0Xa1M.mjs'),"/src/content/stats/stats.md": () => import('./stats_bXpXYFov.mjs'),"/src/content/testimonials/Carl-Hanson.md": () => import('./Carl-Hanson_BRM_Lhde.mjs'),"/src/content/testimonials/Devid-Smith.md": () => import('./Devid-Smith_DCf9-mby.mjs'),"/src/content/testimonials/Jhon-Abraham.md": () => import('./Jhon-Abraham_DMaNXzlc.mjs'),"/src/content/testimonials/John-Doe.md": () => import('./John-Doe_C2y-5RCZ.mjs')});
const collectionToRenderEntryMap = createCollectionToGlobResultMap({
	globResult: renderEntryGlob,
	contentDir,
});

const cacheEntriesByCollection = new Map();
const getCollection = createGetCollection({
	contentCollectionToEntryMap,
	dataCollectionToEntryMap,
	getRenderEntryImport: createGlobLookup(collectionToRenderEntryMap),
	cacheEntriesByCollection,
});

function slugToLocale(slug) {
  const locales = Object.keys(starlightConfig.locales || {});
  const baseSegment = slug.split("/")[0];
  if (baseSegment && locales.includes(baseSegment)) return baseSegment;
  return void 0;
}
function slugToLocaleData(slug) {
  const locale = slugToLocale(slug);
  return { dir: localeToDir(locale), lang: localeToLang$1(locale), locale };
}
function localeToLang$1(locale) {
  const lang = locale ? starlightConfig.locales?.[locale]?.lang : starlightConfig.locales?.root?.lang;
  const defaultLang = starlightConfig.defaultLocale?.lang || starlightConfig.defaultLocale?.locale;
  return lang || defaultLang || BuiltInDefaultLocale.lang;
}
function localeToDir(locale) {
  const dir = locale ? starlightConfig.locales?.[locale]?.dir : starlightConfig.locales?.root?.dir;
  return dir || starlightConfig.defaultLocale.dir;
}
function slugToParam(slug) {
  return slug === "index" || slug === "" ? void 0 : slug.endsWith("/index") ? slug.replace(/\/index$/, "") : slug;
}
function slugToPathname(slug) {
  const param = slugToParam(slug);
  return param ? "/" + param + "/" : "/";
}
function localizedSlug(slug, locale) {
  const slugLocale = slugToLocale(slug);
  if (slugLocale === locale) return slug;
  locale = locale || "";
  if (slugLocale === slug) return locale;
  if (slugLocale) {
    return slug.replace(slugLocale + "/", locale ? locale + "/" : "").replace(/\/$/, "");
  }
  return slug ? locale + "/" + slug : locale;
}
function localizedId(id, locale) {
  const idLocale = slugToLocale(id);
  if (idLocale) {
    return id.replace(idLocale + "/", locale ? locale + "/" : "");
  } else if (locale) {
    return locale + "/" + id;
  } else {
    return id;
  }
}
function urlToSlug(url) {
  let pathname = url.pathname;
  const base = "/".replace(/\/$/, "");
  if (pathname.startsWith(base)) pathname = pathname.replace(base, "");
  const segments = pathname.split("/");
  const htmlExt = ".html";
  if (segments.at(-1) === "index.html") {
    segments.pop();
  } else if (segments.at(-1)?.endsWith(htmlExt)) {
    const last = segments.pop();
    if (last) segments.push(last.slice(0, -1 * htmlExt.length));
  }
  return segments.filter(Boolean).join("/");
}

const logos = {};

function validateLogoImports() {
  if (starlightConfig.logo) {
    let err;
    if ("src" in starlightConfig.logo) {
      if (!logos.dark || !logos.light) {
        err = `Could not resolve logo import for "${starlightConfig.logo.src}" (logo.src)`;
      }
    } else {
      if (!logos.dark) {
        err = `Could not resolve logo import for "${starlightConfig.logo.dark}" (logo.dark)`;
      } else if (!logos.light) {
        err = `Could not resolve logo import for "${starlightConfig.logo.light}" (logo.light)`;
      }
    }
    if (err) throw new Error(err);
  }
}

validateLogoImports();
const normalizeIndexSlug = (slug) => slug === "index" ? "" : slug;
const docs = (await getCollection("docs", ({ data }) => {
  return data.draft === false;
}) ?? []).map(({ slug, ...entry }) => ({
  ...entry,
  slug: normalizeIndexSlug(slug)
}));
function getRoutes() {
  const routes2 = docs.map((entry) => ({
    entry,
    slug: entry.slug,
    id: entry.id,
    entryMeta: slugToLocaleData(entry.slug),
    ...slugToLocaleData(entry.slug)
  }));
  if (starlightConfig.isMultilingual) {
    const defaultLocaleDocs = getLocaleDocs(
      starlightConfig.defaultLocale?.locale === "root" ? void 0 : starlightConfig.defaultLocale?.locale
    );
    for (const key in starlightConfig.locales) {
      if (key === starlightConfig.defaultLocale.locale) continue;
      const localeConfig = starlightConfig.locales[key];
      if (!localeConfig) continue;
      const locale = key === "root" ? void 0 : key;
      const localeDocs = getLocaleDocs(locale);
      for (const fallback of defaultLocaleDocs) {
        const slug = localizedSlug(fallback.slug, locale);
        const id = localizedId(fallback.id, locale);
        const doesNotNeedFallback = localeDocs.some((doc) => doc.slug === slug);
        if (doesNotNeedFallback) continue;
        routes2.push({
          entry: fallback,
          slug,
          id,
          isFallback: true,
          lang: localeConfig.lang || BuiltInDefaultLocale.lang,
          locale,
          dir: localeConfig.dir,
          entryMeta: slugToLocaleData(fallback.slug)
        });
      }
    }
  }
  return routes2;
}
const routes = getRoutes();
function getPaths() {
  return routes.map((route) => ({
    params: { slug: slugToParam(route.slug) },
    props: route
  }));
}
const paths = getPaths();
function getLocaleRoutes(locale) {
  return filterByLocale(routes, locale);
}
function getLocaleDocs(locale) {
  return filterByLocale(docs, locale);
}
function filterByLocale(items, locale) {
  if (starlightConfig.locales) {
    if (locale && locale in starlightConfig.locales) {
      return items.filter((i) => i.slug === locale || i.slug.startsWith(locale + "/"));
    } else if (starlightConfig.locales.root) {
      const langKeys = Object.keys(starlightConfig.locales).filter((k) => k !== "root");
      const isLangIndex = new RegExp(`^(${langKeys.join("|")})$`);
      const isLangDir = new RegExp(`^(${langKeys.join("|")})/`);
      return items.filter((i) => !isLangIndex.test(i.slug) && !isLangDir.test(i.slug));
    }
  }
  return items;
}

const DirKey = Symbol("DirKey");
const SlugKey = Symbol("SlugKey");
function makeDir(slug) {
  const dir = {};
  Object.defineProperty(dir, DirKey, { enumerable: false });
  Object.defineProperty(dir, SlugKey, { value: slug, enumerable: false });
  return dir;
}
function isDir(data) {
  return DirKey in data;
}
function configItemToEntry(item, currentPathname, locale, routes2) {
  if ("link" in item) {
    return linkFromSidebarLinkItem(item, locale, currentPathname);
  } else if ("autogenerate" in item) {
    return groupFromAutogenerateConfig(item, locale, routes2, currentPathname);
  } else if ("slug" in item) {
    return linkFromInternalSidebarLinkItem(item, locale, currentPathname);
  } else {
    return {
      type: "group",
      label: pickLang(item.translations, localeToLang$1(locale)) || item.label,
      entries: item.items.map((i) => configItemToEntry(i, currentPathname, locale, routes2)),
      collapsed: item.collapsed,
      badge: item.badge
    };
  }
}
function groupFromAutogenerateConfig(item, locale, routes2, currentPathname) {
  const { collapsed: subgroupCollapsed, directory } = item.autogenerate;
  const localeDir = locale ? locale + "/" + directory : directory;
  const dirDocs = routes2.filter(
    (doc) => (
      // Match against `foo.md` or `foo/index.md`.
      stripExtension(doc.id) === localeDir || // Match against `foo/anything/else.md`.
      doc.id.startsWith(localeDir + "/")
    )
  );
  const tree = treeify(dirDocs, localeDir);
  return {
    type: "group",
    label: pickLang(item.translations, localeToLang$1(locale)) || item.label,
    entries: sidebarFromDir(tree, currentPathname, locale, subgroupCollapsed ?? item.collapsed),
    collapsed: item.collapsed,
    badge: item.badge
  };
}
const isAbsolute = (link) => /^https?:\/\//.test(link);
function linkFromSidebarLinkItem(item, locale, currentPathname) {
  let href = item.link;
  if (!isAbsolute(href)) {
    href = ensureLeadingSlash(href);
    if (locale) href = "/" + locale + href;
  }
  const label = pickLang(item.translations, localeToLang$1(locale)) || item.label;
  return makeSidebarLink(href, label, currentPathname, item.badge, item.attrs);
}
function linkFromInternalSidebarLinkItem(item, locale, currentPathname) {
  let slugWithLocale = locale ? locale + "/" + item.slug : item.slug;
  slugWithLocale = slugWithLocale.replace(/\/?index$/, "");
  const entry = routes.find((entry2) => slugWithLocale === entry2.slug);
  if (!entry) {
    const hasExternalSlashes = item.slug.at(0) === "/" || item.slug.at(-1) === "/";
    if (hasExternalSlashes) {
      throw new AstroUserError(
        `The slug \`"${item.slug}"\` specified in the Starlight sidebar config must not start or end with a slash.`,
        `Please try updating \`"${item.slug}"\` to \`"${stripLeadingAndTrailingSlashes(item.slug)}"\`.`
      );
    } else {
      throw new AstroUserError(
        `The slug \`"${item.slug}"\` specified in the Starlight sidebar config does not exist.`,
        "Update the Starlight config to reference a valid entry slug in the docs content collection.\nLearn more about Astro content collection slugs at https://docs.astro.build/en/reference/api-reference/#getentry"
      );
    }
  }
  const label = pickLang(item.translations, localeToLang$1(locale)) || item.label || entry.entry.data.title;
  return makeSidebarLink(entry.slug, label, currentPathname, item.badge, item.attrs);
}
function makeSidebarLink(href, label, currentPathname, badge, attrs) {
  if (!isAbsolute(href)) {
    href = formatPath(href);
  }
  const isCurrent = pathsMatch(encodeURI(href), currentPathname);
  return makeLink({ label, href, isCurrent, badge, attrs });
}
function makeLink({
  isCurrent = false,
  attrs = {},
  badge = void 0,
  ...opts
}) {
  return { type: "link", ...opts, badge, isCurrent, attrs };
}
function pathsMatch(pathA, pathB) {
  const format = createPathFormatter({ trailingSlash: "never" });
  return format(pathA) === format(pathB);
}
function getBreadcrumbs(path, baseDir) {
  const pathWithoutExt = stripExtension(path);
  if (pathWithoutExt === baseDir) return [];
  baseDir = ensureTrailingSlash(baseDir);
  const relativePath = pathWithoutExt.startsWith(baseDir) ? pathWithoutExt.replace(baseDir, "") : pathWithoutExt;
  return relativePath.split("/");
}
function treeify(routes2, baseDir) {
  const treeRoot = makeDir(baseDir);
  routes2.filter((doc) => !doc.entry.data.sidebar.hidden).sort((a, b) => b.id.split("/").length - a.id.split("/").length).forEach((doc) => {
    const parts = getBreadcrumbs(doc.id, baseDir);
    let currentNode = treeRoot;
    parts.forEach((part, index) => {
      const isLeaf = index === parts.length - 1;
      if (isLeaf && currentNode.hasOwnProperty(part)) {
        currentNode = currentNode[part];
        part = "index";
      }
      if (!isLeaf) {
        const path = currentNode[SlugKey];
        currentNode[part] ||= makeDir(stripLeadingAndTrailingSlashes(path + "/" + part));
        currentNode = currentNode[part];
      } else {
        currentNode[part] = doc;
      }
    });
  });
  return treeRoot;
}
function linkFromRoute(route, currentPathname) {
  return makeSidebarLink(
    slugToPathname(route.slug),
    route.entry.data.sidebar.label || route.entry.data.title,
    currentPathname,
    route.entry.data.sidebar.badge,
    route.entry.data.sidebar.attrs
  );
}
function getOrder(routeOrDir) {
  return isDir(routeOrDir) ? Math.min(...Object.values(routeOrDir).flatMap(getOrder)) : (
    // If no order value is found, set it to the largest number possible.
    routeOrDir.entry.data.sidebar.order ?? Number.MAX_VALUE
  );
}
function sortDirEntries(dir) {
  const collator = new Intl.Collator(localeToLang$1(void 0));
  return dir.sort(([_keyA, a], [_keyB, b]) => {
    const [aOrder, bOrder] = [getOrder(a), getOrder(b)];
    if (aOrder !== bOrder) return aOrder < bOrder ? -1 : 1;
    return collator.compare(isDir(a) ? a[SlugKey] : a.slug, isDir(b) ? b[SlugKey] : b.slug);
  });
}
function groupFromDir(dir, fullPath, dirName, currentPathname, locale, collapsed) {
  const entries = sortDirEntries(Object.entries(dir)).map(
    ([key, dirOrRoute]) => dirToItem(dirOrRoute, `${fullPath}/${key}`, key, currentPathname, locale, collapsed)
  );
  return {
    type: "group",
    label: dirName,
    entries,
    collapsed,
    badge: void 0
  };
}
function dirToItem(dirOrRoute, fullPath, dirName, currentPathname, locale, collapsed) {
  return isDir(dirOrRoute) ? groupFromDir(dirOrRoute, fullPath, dirName, currentPathname, locale, collapsed) : linkFromRoute(dirOrRoute, currentPathname);
}
function sidebarFromDir(tree, currentPathname, locale, collapsed) {
  return sortDirEntries(Object.entries(tree)).map(
    ([key, dirOrRoute]) => dirToItem(dirOrRoute, key, key, currentPathname, locale, collapsed)
  );
}
function getSidebar(pathname, locale) {
  const routes2 = getLocaleRoutes(locale);
  if (starlightConfig.sidebar) {
    return starlightConfig.sidebar.map((group) => configItemToEntry(group, pathname, locale, routes2));
  } else {
    const tree = treeify(routes2, locale || "");
    return sidebarFromDir(tree, pathname, locale, false);
  }
}
function flattenSidebar(sidebar) {
  return sidebar.flatMap(
    (entry) => entry.type === "group" ? flattenSidebar(entry.entries) : entry
  );
}
function getPrevNextLinks(sidebar, paginationEnabled, config2) {
  const entries = flattenSidebar(sidebar);
  const currentIndex = entries.findIndex((entry) => entry.isCurrent);
  const prev = applyPrevNextLinkConfig(entries[currentIndex - 1], paginationEnabled, config2.prev);
  const next = applyPrevNextLinkConfig(
    currentIndex > -1 ? entries[currentIndex + 1] : void 0,
    paginationEnabled,
    config2.next
  );
  return { prev, next };
}
function applyPrevNextLinkConfig(link, paginationEnabled, config2) {
  if (config2 === false) return void 0;
  else if (config2 === true) return link;
  else if (typeof config2 === "string" && link) {
    return { ...link, label: config2 };
  } else if (typeof config2 === "object") {
    if (link) {
      return {
        ...link,
        label: config2.label ?? link.label,
        href: config2.link ?? link.href,
        // Explicitly remove sidebar link attributes for prev/next links.
        attrs: {}
      };
    } else if (config2.link && config2.label) {
      return makeLink({ href: config2.link, label: config2.label });
    }
  }
  return paginationEnabled ? link : void 0;
}
const stripExtension = (path) => path.replace(/\.\w+$/, "");

function builtinI18nSchema() {
  return starlightI18nSchema().required().strict().merge(pagefindI18nSchema()).merge(expressiveCodeI18nSchema());
}
function starlightI18nSchema() {
  return z.object({
    "skipLink.label": z.string().describe(
      "Text displayed in the accessible “Skip link” when a keyboard user first tabs into a page."
    ),
    "search.label": z.string().describe("Text displayed in the search bar."),
    "search.ctrlKey": z.string().describe(
      "Visible representation of the Control key potentially used in the shortcut key to open the search modal."
    ),
    "search.cancelLabel": z.string().describe("Text for the “Cancel” button that closes the search modal."),
    "search.devWarning": z.string().describe("Warning displayed when opening the Search in a dev environment."),
    "themeSelect.accessibleLabel": z.string().describe("Accessible label for the theme selection dropdown."),
    "themeSelect.dark": z.string().describe("Name of the dark color theme."),
    "themeSelect.light": z.string().describe("Name of the light color theme."),
    "themeSelect.auto": z.string().describe("Name of the automatic color theme that syncs with system preferences."),
    "languageSelect.accessibleLabel": z.string().describe("Accessible label for the language selection dropdown."),
    "menuButton.accessibleLabel": z.string().describe("Accessible label for the mobile menu button."),
    "sidebarNav.accessibleLabel": z.string().describe(
      "Accessible label for the main sidebar `<nav>` element to distinguish it fom other `<nav>` landmarks on the page."
    ),
    "tableOfContents.onThisPage": z.string().describe("Title for the table of contents component."),
    "tableOfContents.overview": z.string().describe(
      "Label used for the first link in the table of contents, linking to the page title."
    ),
    "i18n.untranslatedContent": z.string().describe(
      "Notice informing users they are on a page that is not yet translated to their language."
    ),
    "page.editLink": z.string().describe("Text for the link to edit a page."),
    "page.lastUpdated": z.string().describe("Text displayed in front of the last updated date in the page footer."),
    "page.previousLink": z.string().describe("Label shown on the “previous page” pagination arrow in the page footer."),
    "page.nextLink": z.string().describe("Label shown on the “next page” pagination arrow in the page footer."),
    "page.draft": z.string().describe(
      "Development-only notice informing users they are on a page that is a draft which will not be included in production builds."
    ),
    "404.text": z.string().describe("Text shown on Starlight’s default 404 page"),
    "aside.tip": z.string().describe("Text shown on the tip aside variant"),
    "aside.note": z.string().describe("Text shown on the note aside variant"),
    "aside.caution": z.string().describe("Text shown on the warning aside variant"),
    "aside.danger": z.string().describe("Text shown on the danger aside variant"),
    "fileTree.directory": z.string().describe("Label for the directory icon in the file tree component."),
    "builtWithStarlight.label": z.string().describe(
      "Label for the “Built with Starlight” badge optionally displayed in the site footer."
    )
  }).partial();
}
function pagefindI18nSchema() {
  return z.object({
    "pagefind.clear_search": z.string().describe(
      'Pagefind UI translation. English default value: `"Clear"`. See https://pagefind.app/docs/ui/#translations'
    ),
    "pagefind.load_more": z.string().describe(
      'Pagefind UI translation. English default value: `"Load more results"`. See https://pagefind.app/docs/ui/#translations'
    ),
    "pagefind.search_label": z.string().describe(
      'Pagefind UI translation. English default value: `"Search this site"`. See https://pagefind.app/docs/ui/#translations'
    ),
    "pagefind.filters_label": z.string().describe(
      'Pagefind UI translation. English default value: `"Filters"`. See https://pagefind.app/docs/ui/#translations'
    ),
    "pagefind.zero_results": z.string().describe(
      'Pagefind UI translation. English default value: `"No results for [SEARCH_TERM]"`. See https://pagefind.app/docs/ui/#translations'
    ),
    "pagefind.many_results": z.string().describe(
      'Pagefind UI translation. English default value: `"[COUNT] results for [SEARCH_TERM]"`. See https://pagefind.app/docs/ui/#translations'
    ),
    "pagefind.one_result": z.string().describe(
      'Pagefind UI translation. English default value: `"[COUNT] result for [SEARCH_TERM]"`. See https://pagefind.app/docs/ui/#translations'
    ),
    "pagefind.alt_search": z.string().describe(
      'Pagefind UI translation. English default value: `"No results for [SEARCH_TERM]. Showing results for [DIFFERENT_TERM] instead"`. See https://pagefind.app/docs/ui/#translations'
    ),
    "pagefind.search_suggestion": z.string().describe(
      'Pagefind UI translation. English default value: `"No results for [SEARCH_TERM]. Try one of the following searches:"`. See https://pagefind.app/docs/ui/#translations'
    ),
    "pagefind.searching": z.string().describe(
      'Pagefind UI translation. English default value: `"Searching for [SEARCH_TERM]..."`. See https://pagefind.app/docs/ui/#translations'
    )
  }).partial();
}
function expressiveCodeI18nSchema() {
  return z.object({
    "expressiveCode.copyButtonCopied": z.string().describe('Expressive Code UI translation. English default value: `"Copied!"`'),
    "expressiveCode.copyButtonTooltip": z.string().describe('Expressive Code UI translation. English default value: `"Copy to clipboard"`'),
    "expressiveCode.terminalWindowFallbackTitle": z.string().describe('Expressive Code UI translation. English default value: `"Terminal window"`')
  }).partial();
}

const cs = {
	"skipLink.label": "Přeskočit na obsah",
	"search.label": "Hledat",
	"search.ctrlKey": "Ctrl",
	"search.cancelLabel": "Zrušit",
	"search.devWarning": "Vyhledávání je dostupné pouze v produkčních sestaveních. \nZkuste sestavit a zobrazit náhled webu a otestovat jej lokálně.",
	"themeSelect.accessibleLabel": "Vyberte motiv",
	"themeSelect.dark": "Tmavý",
	"themeSelect.light": "Světlý",
	"themeSelect.auto": "Auto",
	"languageSelect.accessibleLabel": "Vyberte jazyk",
	"menuButton.accessibleLabel": "Nabídka",
	"sidebarNav.accessibleLabel": "Hlavní",
	"tableOfContents.onThisPage": "Na této stránce",
	"tableOfContents.overview": "Přehled",
	"i18n.untranslatedContent": "Tento obsah zatím není dostupný ve vašem jazyce.",
	"page.editLink": "Upravit stránku",
	"page.lastUpdated": "Poslední aktualizace:",
	"page.previousLink": "Předchozí",
	"page.nextLink": "Další",
	"page.draft": "Tento obsah je koncept a nebude zahrnutý v produkčním sestavení.",
	"404.text": "Stránka nenalezena. Zkontrolujte adresu nebo zkuste použít vyhledávač",
	"aside.note": "Poznámka",
	"aside.tip": "Tip",
	"aside.caution": "Upozornění",
	"aside.danger": "Nebezpečí",
	"fileTree.directory": "Adresář",
	"builtWithStarlight.label": "Postavené s Starlight",
	"expressiveCode.copyButtonCopied": "Zkopírováno!",
	"expressiveCode.copyButtonTooltip": "Kopíruj do schránky",
	"expressiveCode.terminalWindowFallbackTitle": "Terminál",
	"pagefind.clear_search": "Vyčistit",
	"pagefind.load_more": "Načíst další výsledky",
	"pagefind.search_label": "Vyhledat stránku",
	"pagefind.filters_label": "Filtry",
	"pagefind.zero_results": "Žádný výsledek pro: [SEARCH_TERM]",
	"pagefind.many_results": "počet výsledků: [COUNT] pro: [SEARCH_TERM]",
	"pagefind.one_result": "[COUNT] výsledek pro: [SEARCH_TERM]",
	"pagefind.alt_search": "Žádné výsledky pro [SEARCH_TERM]. Namísto toho zobrazuji výsledky pro: [DIFFERENT_TERM]",
	"pagefind.search_suggestion": "Žádný výsledek pro [SEARCH_TERM]. Zkus nějaké z těchto hledání:",
	"pagefind.searching": "Hledám [SEARCH_TERM]..."
};

const en = {
	"skipLink.label": "Skip to content",
	"search.label": "Search",
	"search.ctrlKey": "Ctrl",
	"search.cancelLabel": "Cancel",
	"search.devWarning": "Search is only available in production builds. \nTry building and previewing the site to test it out locally.",
	"themeSelect.accessibleLabel": "Select theme",
	"themeSelect.dark": "Dark",
	"themeSelect.light": "Light",
	"themeSelect.auto": "Auto",
	"languageSelect.accessibleLabel": "Select language",
	"menuButton.accessibleLabel": "Menu",
	"sidebarNav.accessibleLabel": "Main",
	"tableOfContents.onThisPage": "On this page",
	"tableOfContents.overview": "Overview",
	"i18n.untranslatedContent": "This content is not available in your language yet.",
	"page.editLink": "Edit page",
	"page.lastUpdated": "Last updated:",
	"page.previousLink": "Previous",
	"page.nextLink": "Next",
	"page.draft": "This content is a draft and will not be included in production builds.",
	"404.text": "Page not found. Check the URL or try using the search bar.",
	"aside.note": "Note",
	"aside.tip": "Tip",
	"aside.caution": "Caution",
	"aside.danger": "Danger",
	"fileTree.directory": "Directory",
	"builtWithStarlight.label": "Built with Starlight"
};

const es = {
	"skipLink.label": "Saltearse al contenido",
	"search.label": "Buscar",
	"search.ctrlKey": "Ctrl",
	"search.cancelLabel": "Interrumpir",
	"search.devWarning": "La búsqueda solo está disponible en las versiones de producción.  \nIntenta construir y previsualizar el sitio para probarlo localmente.",
	"themeSelect.accessibleLabel": "Seleccionar tema",
	"themeSelect.dark": "Oscuro",
	"themeSelect.light": "Claro",
	"themeSelect.auto": "Automático",
	"languageSelect.accessibleLabel": "Seleccionar idioma",
	"menuButton.accessibleLabel": "Menú",
	"sidebarNav.accessibleLabel": "Primario",
	"tableOfContents.onThisPage": "En esta página",
	"tableOfContents.overview": "Sinopsis",
	"i18n.untranslatedContent": "Esta página aún no está disponible en tu idioma.",
	"page.editLink": "Edita esta página",
	"page.lastUpdated": "Última actualización:",
	"page.previousLink": "Página anterior",
	"page.nextLink": "Siguiente página",
	"page.draft": "This content is a draft and will not be included in production builds.",
	"404.text": "Página no encontrada. Verifica la URL o intenta usar la barra de búsqueda.",
	"aside.note": "Nota",
	"aside.tip": "Consejo",
	"aside.caution": "Precaución",
	"aside.danger": "Peligro",
	"expressiveCode.copyButtonCopied": "¡Copiado!",
	"expressiveCode.copyButtonTooltip": "Copiar al portapapeles",
	"expressiveCode.terminalWindowFallbackTitle": "Ventana de terminal",
	"fileTree.directory": "Directory",
	"builtWithStarlight.label": "Hecho con Starlight"
};

const de = {
	"skipLink.label": "Zum Inhalt springen",
	"search.label": "Suchen",
	"search.ctrlKey": "Strg",
	"search.cancelLabel": "Abbrechen",
	"search.devWarning": "Search is only available in production builds. \nTry building and previewing the site to test it out locally.",
	"themeSelect.accessibleLabel": "Farbschema wählen",
	"themeSelect.dark": "Dunkel",
	"themeSelect.light": "Hell",
	"themeSelect.auto": "System",
	"languageSelect.accessibleLabel": "Sprache wählen",
	"menuButton.accessibleLabel": "Menü",
	"sidebarNav.accessibleLabel": "Hauptnavigation",
	"tableOfContents.onThisPage": "Auf dieser Seite",
	"tableOfContents.overview": "Überblick",
	"i18n.untranslatedContent": "Dieser Inhalt ist noch nicht in deiner Sprache verfügbar.",
	"page.editLink": "Seite bearbeiten",
	"page.lastUpdated": "Zuletzt bearbeitet:",
	"page.previousLink": "Vorherige Seite",
	"page.nextLink": "Nächste Seite",
	"page.draft": "This content is a draft and will not be included in production builds.",
	"404.text": "Seite nicht gefunden. Überprüfe die URL oder nutze die Suchleiste.",
	"aside.note": "Hinweis",
	"aside.tip": "Tipp",
	"aside.caution": "Achtung",
	"aside.danger": "Gefahr",
	"fileTree.directory": "Directory",
	"builtWithStarlight.label": "Erstellt mit Starlight"
};

const ja = {
	"skipLink.label": "コンテンツにスキップ",
	"search.label": "検索",
	"search.ctrlKey": "Ctrl",
	"search.cancelLabel": "キャンセル",
	"search.devWarning": "検索はプロダクションビルドでのみ利用可能です。\nローカルでテストするには、サイトをビルドしてプレビューしてください。",
	"themeSelect.accessibleLabel": "テーマの選択",
	"themeSelect.dark": "ダーク",
	"themeSelect.light": "ライト",
	"themeSelect.auto": "自動",
	"languageSelect.accessibleLabel": "言語の選択",
	"menuButton.accessibleLabel": "メニュー",
	"sidebarNav.accessibleLabel": "メイン",
	"tableOfContents.onThisPage": "目次",
	"tableOfContents.overview": "概要",
	"i18n.untranslatedContent": "このコンテンツはまだ日本語訳がありません。",
	"page.editLink": "ページを編集",
	"page.lastUpdated": "最終更新日:",
	"page.previousLink": "前へ",
	"page.nextLink": "次へ",
	"page.draft": "This content is a draft and will not be included in production builds.",
	"404.text": "ページが見つかりません。 URL を確認するか、検索バーを使用してみてください。",
	"aside.note": "ノート",
	"aside.tip": "ヒント",
	"aside.caution": "注意",
	"aside.danger": "危険",
	"fileTree.directory": "ディレクトリ",
	"builtWithStarlight.label": "Built with Starlight"
};

const pt = {
	"skipLink.label": "Pular para o conteúdo",
	"search.label": "Pesquisar",
	"search.ctrlKey": "Ctrl",
	"search.cancelLabel": "Cancelar",
	"search.devWarning": "A pesquisa está disponível apenas em builds em produção. \nTente fazer a build e pré-visualize o site para testar localmente.",
	"themeSelect.accessibleLabel": "Selecionar tema",
	"themeSelect.dark": "Escuro",
	"themeSelect.light": "Claro",
	"themeSelect.auto": "Auto",
	"languageSelect.accessibleLabel": "Selecionar língua",
	"menuButton.accessibleLabel": "Menu",
	"sidebarNav.accessibleLabel": "Principal",
	"tableOfContents.onThisPage": "Nesta página",
	"tableOfContents.overview": "Visão geral",
	"i18n.untranslatedContent": "Este conteúdo não está disponível em sua língua ainda.",
	"page.editLink": "Editar página",
	"page.lastUpdated": "Última atualização:",
	"page.previousLink": "Anterior",
	"page.nextLink": "Próximo",
	"page.draft": "Esse conteúdo é um rascunho e não será incluído em builds de produção.",
	"404.text": "Página não encontrada. Verifique o URL ou tente usar a barra de pesquisa.",
	"aside.note": "Nota",
	"aside.tip": "Dica",
	"aside.caution": "Cuidado",
	"aside.danger": "Perigo",
	"fileTree.directory": "Directory",
	"builtWithStarlight.label": "Feito com Starlight"
};

const fa = {
	"skipLink.label": "رفتن به محتوا",
	"search.label": "جستجو",
	"search.ctrlKey": "Ctrl",
	"search.cancelLabel": "لغو",
	"search.devWarning": "جستجو تنها در نسخه‌های تولیدی در دسترس است. \nسعی کنید سایت را بسازید و پیش‌نمایش آن را به صورت محلی آزمایش کنید.",
	"themeSelect.accessibleLabel": "انتخاب پوسته",
	"themeSelect.dark": "تیره",
	"themeSelect.light": "روشن",
	"themeSelect.auto": "خودکار",
	"languageSelect.accessibleLabel": "انتخاب زبان",
	"menuButton.accessibleLabel": "منو",
	"sidebarNav.accessibleLabel": "اصلی",
	"tableOfContents.onThisPage": "در این صفحه",
	"tableOfContents.overview": "نگاه کلی",
	"i18n.untranslatedContent": "این محتوا هنوز به زبان شما در دسترس نیست.",
	"page.editLink": "ویرایش صفحه",
	"page.lastUpdated": "آخرین به‌روزرسانی:",
	"page.previousLink": "قبلی",
	"page.nextLink": "بعدی",
	"page.draft": "This content is a draft and will not be included in production builds.",
	"404.text": "صفحه یافت نشد. لطفاً URL را بررسی کنید یا از جستجو استفاده نمایید.",
	"aside.note": "یادداشت",
	"aside.tip": "نکته",
	"aside.caution": "احتیاط",
	"aside.danger": "خطر",
	"fileTree.directory": "فهرست",
	"builtWithStarlight.label": "Built with Starlight"
};

const fr = {
	"skipLink.label": "Aller au contenu",
	"search.label": "Rechercher",
	"search.ctrlKey": "Ctrl",
	"search.cancelLabel": "Annuler",
	"search.devWarning": "La recherche est disponible uniquement en mode production. \nEssayez de construire puis de prévisualiser votre site pour tester la recherche localement.",
	"themeSelect.accessibleLabel": "Selectionner le thème",
	"themeSelect.dark": "Sombre",
	"themeSelect.light": "Clair",
	"themeSelect.auto": "Auto",
	"languageSelect.accessibleLabel": "Selectionner la langue",
	"menuButton.accessibleLabel": "Menu",
	"sidebarNav.accessibleLabel": "principale",
	"tableOfContents.onThisPage": "Sur cette page",
	"tableOfContents.overview": "Vue d’ensemble",
	"i18n.untranslatedContent": "Ce contenu n’est pas encore disponible dans votre langue.",
	"page.editLink": "Modifier cette page",
	"page.lastUpdated": "Dernière mise à jour :",
	"page.previousLink": "Précédent",
	"page.nextLink": "Suivant",
	"page.draft": "Ce contenu est une ébauche et ne sera pas inclus dans la version de production.",
	"404.text": "Page non trouvée. Vérifiez l’URL ou essayez d’utiliser la barre de recherche.",
	"aside.note": "Note",
	"aside.tip": "Astuce",
	"aside.caution": "Attention",
	"aside.danger": "Danger",
	"expressiveCode.copyButtonCopied": "Copié !",
	"expressiveCode.copyButtonTooltip": "Copier dans le presse-papiers",
	"expressiveCode.terminalWindowFallbackTitle": "Fenêtre de terminal",
	"fileTree.directory": "Répertoire",
	"builtWithStarlight.label": "Créé avec Starlight"
};

const gl = {
	"skipLink.label": "Ir ao contido",
	"search.label": "Busca",
	"search.ctrlKey": "Ctrl",
	"search.cancelLabel": "Deixar",
	"search.devWarning": "A busca só está dispoñible nas versións de producción. \nTrata de construir e ollear o sitio para probalo localmente.",
	"themeSelect.accessibleLabel": "Seleciona tema",
	"themeSelect.dark": "Escuro",
	"themeSelect.light": "Claro",
	"themeSelect.auto": "Auto",
	"languageSelect.accessibleLabel": "Seleciona linguaxe",
	"menuButton.accessibleLabel": "Menú",
	"sidebarNav.accessibleLabel": "Principal",
	"tableOfContents.onThisPage": "Nesta paxina",
	"tableOfContents.overview": "Sinopse",
	"i18n.untranslatedContent": "Este contido aínda non está dispoñible no teu idioma.",
	"page.editLink": "Editar paxina",
	"page.lastUpdated": "Última actualización:",
	"page.previousLink": "Anterior",
	"page.nextLink": "Seguinte",
	"page.draft": "This content is a draft and will not be included in production builds.",
	"404.text": "Paxina non atopada. Comproba a URL ou intenta usar a barra de busca.",
	"aside.note": "Note",
	"aside.tip": "Tip",
	"aside.caution": "Caution",
	"aside.danger": "Danger",
	"fileTree.directory": "Directory",
	"builtWithStarlight.label": "Built with Starlight"
};

const he = {
	"skipLink.label": "דלגו לתוכן",
	"search.label": "חיפוש",
	"search.ctrlKey": "Ctrl",
	"search.cancelLabel": "ביטול",
	"search.devWarning": "החיפוש זמין רק בסביבת ייצור. \nנסו לבנות ולהציג תצוגה מקדימה של האתר כדי לבדוק אותו באופן מקומי.",
	"themeSelect.accessibleLabel": "בחרו פרופיל צבע",
	"themeSelect.dark": "כהה",
	"themeSelect.light": "בהיר",
	"themeSelect.auto": "מערכת",
	"languageSelect.accessibleLabel": "בחרו שפה",
	"menuButton.accessibleLabel": "תפריט",
	"sidebarNav.accessibleLabel": "ראשי",
	"tableOfContents.onThisPage": "בדף זה",
	"tableOfContents.overview": "סקירה כללית",
	"i18n.untranslatedContent": "תוכן זה אינו זמין עדיין בשפה שלך.",
	"page.editLink": "ערכו דף",
	"page.lastUpdated": "עדכון אחרון:",
	"page.previousLink": "הקודם",
	"page.nextLink": "הבא",
	"page.draft": "This content is a draft and will not be included in production builds.",
	"404.text": "הדף לא נמצא. אנא בדקו את כתובת האתר או נסו להשתמש בסרגל החיפוש.",
	"aside.note": "Note",
	"aside.tip": "Tip",
	"aside.caution": "Caution",
	"aside.danger": "Danger",
	"fileTree.directory": "Directory",
	"builtWithStarlight.label": "Built with Starlight"
};

const id = {
	"skipLink.label": "Lewati ke konten",
	"search.label": "Pencarian",
	"search.ctrlKey": "Ctrl",
	"search.cancelLabel": "Batal",
	"search.devWarning": "Pencarian hanya tersedia pada build produksi. \nLakukan proses build dan pratinjau situs Anda sebelum mencoba di lingkungan lokal.",
	"themeSelect.accessibleLabel": "Pilih tema",
	"themeSelect.dark": "Gelap",
	"themeSelect.light": "Terang",
	"themeSelect.auto": "Otomatis",
	"languageSelect.accessibleLabel": "Pilih Bahasa",
	"menuButton.accessibleLabel": "Menu",
	"sidebarNav.accessibleLabel": "Utama",
	"tableOfContents.onThisPage": "Di halaman ini",
	"tableOfContents.overview": "Ringkasan",
	"i18n.untranslatedContent": "Konten ini belum tersedia dalam bahasa Anda.",
	"page.editLink": "Edit halaman",
	"page.lastUpdated": "Terakhir diperbaharui:",
	"page.previousLink": "Sebelumnya",
	"page.nextLink": "Selanjutnya",
	"page.draft": "This content is a draft and will not be included in production builds.",
	"404.text": "Halaman tidak ditemukan. Cek kembali kolom URL atau gunakan fitur pencarian.",
	"aside.note": "Catatan",
	"aside.tip": "Tips",
	"aside.caution": "Perhatian",
	"aside.danger": "Bahaya",
	"fileTree.directory": "Directory",
	"builtWithStarlight.label": "Built with Starlight"
};

const it = {
	"skipLink.label": "Salta ai contenuti",
	"search.label": "Cerca",
	"search.ctrlKey": "Ctrl",
	"search.cancelLabel": "Cancella",
	"search.devWarning": "La ricerca è disponibile solo nelle build di produzione. \nProvare ad eseguire il processo di build e visualizzare la preview del sito per testarlo localmente.",
	"themeSelect.accessibleLabel": "Seleziona tema",
	"themeSelect.dark": "Scuro",
	"themeSelect.light": "Chiaro",
	"themeSelect.auto": "Auto",
	"languageSelect.accessibleLabel": "Seleziona lingua",
	"menuButton.accessibleLabel": "Menu",
	"sidebarNav.accessibleLabel": "Principale",
	"tableOfContents.onThisPage": "In questa pagina",
	"tableOfContents.overview": "Panoramica",
	"i18n.untranslatedContent": "Questi contenuti non sono ancora disponibili nella tua lingua.",
	"page.editLink": "Modifica pagina",
	"page.lastUpdated": "Ultimo aggiornamento:",
	"page.previousLink": "Indietro",
	"page.nextLink": "Avanti",
	"page.draft": "This content is a draft and will not be included in production builds.",
	"404.text": "Pagina non trovata. Verifica l'URL o prova a utilizzare la barra di ricerca.",
	"aside.note": "Nota",
	"aside.tip": "Consiglio",
	"aside.caution": "Attenzione",
	"aside.danger": "Pericolo",
	"fileTree.directory": "Directory",
	"builtWithStarlight.label": "Built with Starlight"
};

const nl = {
	"skipLink.label": "Ga naar inhoud",
	"search.label": "Zoeken",
	"search.ctrlKey": "Ctrl",
	"search.cancelLabel": "Annuleren",
	"search.devWarning": "Zoeken is alleen beschikbaar tijdens productie. \nProbeer om de site te builden en er een preview van te bekijken om lokaal te testen.",
	"themeSelect.accessibleLabel": "Selecteer thema",
	"themeSelect.dark": "Donker",
	"themeSelect.light": "Licht",
	"themeSelect.auto": "Auto",
	"languageSelect.accessibleLabel": "Selecteer taal",
	"menuButton.accessibleLabel": "Menu",
	"sidebarNav.accessibleLabel": "Hoofdnavigatie",
	"tableOfContents.onThisPage": "Op deze pagina",
	"tableOfContents.overview": "Overzicht",
	"i18n.untranslatedContent": "Deze inhoud is nog niet vertaald.",
	"page.editLink": "Bewerk pagina",
	"page.lastUpdated": "Laatst bewerkt:",
	"page.previousLink": "Vorige",
	"page.nextLink": "Volgende",
	"page.draft": "This content is a draft and will not be included in production builds.",
	"404.text": "Pagina niet gevonden. Controleer de URL of probeer de zoekbalk.",
	"aside.note": "Opmerking",
	"aside.tip": "Tip",
	"aside.caution": "Opgepast",
	"aside.danger": "Gevaar",
	"fileTree.directory": "Directory",
	"builtWithStarlight.label": "Built with Starlight"
};

const da = {
	"skipLink.label": "Gå til indhold",
	"search.label": "Søg",
	"search.ctrlKey": "Ctrl",
	"search.cancelLabel": "Annuller",
	"search.devWarning": "Søgning er kun tilgængeligt i produktions versioner. \nPrøv at bygge siden og forhåndsvis den for at teste det lokalt.",
	"themeSelect.accessibleLabel": "Vælg tema",
	"themeSelect.dark": "Mørk",
	"themeSelect.light": "Lys",
	"themeSelect.auto": "Auto",
	"languageSelect.accessibleLabel": "Vælg sprog",
	"menuButton.accessibleLabel": "Menu",
	"sidebarNav.accessibleLabel": "Hovednavigation",
	"tableOfContents.onThisPage": "På denne side",
	"tableOfContents.overview": "Oversigt",
	"i18n.untranslatedContent": "Dette indhold er ikke tilgængeligt i dit sprog endnu.",
	"page.editLink": "Rediger siden",
	"page.lastUpdated": "Sidst opdateret:",
	"page.previousLink": "Forrige",
	"page.nextLink": "Næste",
	"page.draft": "This content is a draft and will not be included in production builds.",
	"404.text": "Siden er ikke fundet. Tjek din URL eller prøv søgelinjen.",
	"aside.note": "Note",
	"aside.tip": "Tip",
	"aside.caution": "Caution",
	"aside.danger": "Danger",
	"fileTree.directory": "Directory",
	"builtWithStarlight.label": "Built with Starlight"
};

const tr = {
	"skipLink.label": "İçeriğe geç",
	"search.label": "Ara",
	"search.ctrlKey": "Ctrl",
	"search.cancelLabel": "İptal",
	"search.devWarning": "Arama yalnızca üretim derlemelerinde kullanılabilir. \nYerel bilgisayarınızda test etmek için siteyi derleyin ve önizleme yapın.",
	"themeSelect.accessibleLabel": "Tema seç",
	"themeSelect.dark": "Koyu",
	"themeSelect.light": "Açık",
	"themeSelect.auto": "Otomatik",
	"languageSelect.accessibleLabel": "Dil seçin",
	"menuButton.accessibleLabel": "Menü",
	"sidebarNav.accessibleLabel": "Ana",
	"tableOfContents.onThisPage": "Sayfa içeriği",
	"tableOfContents.overview": "Genel bakış",
	"i18n.untranslatedContent": "Bu içerik henüz dilinizde mevcut değil.",
	"page.editLink": "Sayfayı düzenle",
	"page.lastUpdated": "Son güncelleme:",
	"page.previousLink": "Önceki",
	"page.nextLink": "Sonraki",
	"page.draft": "Bu içerik taslaktır ve canlı sürümde bulunmayacaktır.",
	"404.text": "Sayfa bulunamadı. URL'i kontrol edin ya da arama çubuğunu kullanmayı deneyin.",
	"aside.note": "Not",
	"aside.tip": "İpucu",
	"aside.caution": "Dikkat",
	"aside.danger": "Tehlike",
	"fileTree.directory": "Dizin",
	"builtWithStarlight.label": "Built with Starlight"
};

const ar = {
	"skipLink.label": "تخطَّ إلى المحتوى",
	"search.label": "ابحث",
	"search.ctrlKey": "Ctrl",
	"search.cancelLabel": "إلغاء",
	"search.devWarning": "البحث متوفر فقط في بنيات اﻹنتاج. \n جرب بناء المشروع ومعاينته على جهازك",
	"themeSelect.accessibleLabel": "اختر سمة",
	"themeSelect.dark": "داكن",
	"themeSelect.light": "فاتح",
	"themeSelect.auto": "تلقائي",
	"languageSelect.accessibleLabel": "اختر لغة",
	"menuButton.accessibleLabel": "القائمة",
	"sidebarNav.accessibleLabel": "الرئيسية",
	"tableOfContents.onThisPage": "على هذه الصفحة",
	"tableOfContents.overview": "نظرة عامة",
	"i18n.untranslatedContent": "هذا المحتوى غير متوفر بلغتك بعد.",
	"page.editLink": "عدل الصفحة",
	"page.lastUpdated": "آخر تحديث:",
	"page.previousLink": "السابق",
	"page.nextLink": "التالي",
	"page.draft": "هذا المحتوى مجرد مسودة ولن يظهر في بنيات الإنتاج",
	"404.text": "الصفحة غير موجودة. تأكد من الرابط أو ابحث بإستعمال شريط البحث.",
	"aside.note": "ملاحظة",
	"aside.tip": "نصيحة",
	"aside.caution": "تنبيه",
	"aside.danger": "تحذير",
	"fileTree.directory": "Directory",
	"builtWithStarlight.label": "طوِّر بواسطة Starlight"
};

const nb = {
	"skipLink.label": "Gå til innholdet",
	"search.label": "Søk",
	"search.ctrlKey": "Ctrl",
	"search.cancelLabel": "Avbryt",
	"search.devWarning": "Søk er bare tilgjengelig i produksjonsbygg. \nPrøv å bygg siden og forhåndsvis den for å teste det lokalt.",
	"themeSelect.accessibleLabel": "Velg tema",
	"themeSelect.dark": "Mørk",
	"themeSelect.light": "Lys",
	"themeSelect.auto": "Auto",
	"languageSelect.accessibleLabel": "Velg språk",
	"menuButton.accessibleLabel": "Meny",
	"sidebarNav.accessibleLabel": "Hovednavigasjon",
	"tableOfContents.onThisPage": "På denne siden",
	"tableOfContents.overview": "Oversikt",
	"i18n.untranslatedContent": "Dette innholdet er ikke tilgjengelig på ditt språk.",
	"page.editLink": "Rediger side",
	"page.lastUpdated": "Sist oppdatert:",
	"page.previousLink": "Forrige",
	"page.nextLink": "Neste",
	"page.draft": "This content is a draft and will not be included in production builds.",
	"404.text": "Siden ble ikke funnet. Sjekk URL-en eller prøv å bruke søkefeltet.",
	"aside.note": "Merknad",
	"aside.tip": "Tips",
	"aside.caution": "Advarsel",
	"aside.danger": "Fare",
	"fileTree.directory": "Mappe",
	"builtWithStarlight.label": "Laget med Starlight"
};

const zh = {
	"skipLink.label": "跳转到内容",
	"search.label": "搜索",
	"search.ctrlKey": "Ctrl",
	"search.cancelLabel": "取消",
	"search.devWarning": "搜索仅适用于生产版本。\n尝试构建并预览网站以在本地测试。",
	"themeSelect.accessibleLabel": "选择主题",
	"themeSelect.dark": "深色",
	"themeSelect.light": "浅色",
	"themeSelect.auto": "自动",
	"languageSelect.accessibleLabel": "选择语言",
	"menuButton.accessibleLabel": "菜单",
	"sidebarNav.accessibleLabel": "主要",
	"tableOfContents.onThisPage": "本页内容",
	"tableOfContents.overview": "概述",
	"i18n.untranslatedContent": "此内容尚不支持你的语言。",
	"page.editLink": "编辑此页",
	"page.lastUpdated": "最近更新：",
	"page.previousLink": "上一页",
	"page.nextLink": "下一页",
	"page.draft": "此内容为草稿，不会包含在生产版本中。",
	"404.text": "页面未找到。检查 URL 或尝试使用搜索栏。",
	"aside.note": "注意",
	"aside.tip": "提示",
	"aside.caution": "警告",
	"aside.danger": "危险",
	"fileTree.directory": "文件夹",
	"builtWithStarlight.label": "基于 Starlight 构建"
};

const ko = {
	"skipLink.label": "컨텐츠로 건너뛰기",
	"search.label": "검색",
	"search.ctrlKey": "Ctrl",
	"search.cancelLabel": "취소",
	"search.devWarning": "검색 기능은 운영 환경에서만 사용할 수 있습니다. \n로컬에서 테스트하려면 사이트를 빌드하고 미리보기를 해보세요.",
	"themeSelect.accessibleLabel": "테마 선택",
	"themeSelect.dark": "다크",
	"themeSelect.light": "라이트",
	"themeSelect.auto": "자동",
	"languageSelect.accessibleLabel": "언어 선택",
	"menuButton.accessibleLabel": "메뉴",
	"sidebarNav.accessibleLabel": "메인",
	"tableOfContents.onThisPage": "이 페이지에서는",
	"tableOfContents.overview": "개요",
	"i18n.untranslatedContent": "이 내용은 아직 번역본이 없습니다.",
	"page.editLink": "페이지 수정",
	"page.lastUpdated": "마지막 업데이트:",
	"page.previousLink": "이전",
	"page.nextLink": "다음",
	"page.draft": "This content is a draft and will not be included in production builds.",
	"404.text": "페이지를 찾을 수 없습니다. URL을 확인하거나 검색 막대를 사용해 보세요.",
	"aside.note": "노트",
	"aside.tip": "팁",
	"aside.caution": "주의",
	"aside.danger": "위험",
	"fileTree.directory": "디렉터리",
	"builtWithStarlight.label": "Starlight로 제작됨"
};

const sv = {
	"skipLink.label": "Hoppa till innehåll",
	"search.label": "Sök",
	"search.ctrlKey": "Ctrl",
	"search.cancelLabel": "Avbryt",
	"search.devWarning": "Sökfunktionen är endast tillgänglig i produktionsbyggen. \nProva att bygga och förhandsvisa siten för att testa det lokalt.",
	"themeSelect.accessibleLabel": "Välj tema",
	"themeSelect.dark": "Mörkt",
	"themeSelect.light": "Ljust",
	"themeSelect.auto": "Auto",
	"languageSelect.accessibleLabel": "Välj språk",
	"menuButton.accessibleLabel": "Meny",
	"sidebarNav.accessibleLabel": "Huvudmeny",
	"tableOfContents.onThisPage": "På den här sidan",
	"tableOfContents.overview": "Översikt",
	"i18n.untranslatedContent": "Det här innehållet är inte tillgängligt på ditt språk än.",
	"page.editLink": "Redigera sida",
	"page.lastUpdated": "Senast uppdaterad:",
	"page.previousLink": "Föregående",
	"page.nextLink": "Nästa",
	"page.draft": "This content is a draft and will not be included in production builds.",
	"404.text": "Sidan hittades inte. Kontrollera URL:n eller testa att använda sökfältet.",
	"aside.note": "Note",
	"aside.tip": "Tip",
	"aside.caution": "Caution",
	"aside.danger": "Danger",
	"fileTree.directory": "Directory",
	"builtWithStarlight.label": "Built with Starlight"
};

const ro = {
	"skipLink.label": "Sari la conținut",
	"search.label": "Caută",
	"search.ctrlKey": "Ctrl",
	"search.cancelLabel": "Anulează",
	"search.devWarning": "Căutarea este disponibilă numai în versiunea de producție. \nÎncercă să construiești și să previzualizezi site-ul pentru a-l testa local.",
	"themeSelect.accessibleLabel": "Selectează tema",
	"themeSelect.dark": "Întunecată",
	"themeSelect.light": "Deschisă",
	"themeSelect.auto": "Auto",
	"languageSelect.accessibleLabel": "Selectează limba",
	"menuButton.accessibleLabel": "Meniu",
	"sidebarNav.accessibleLabel": "Principal",
	"tableOfContents.onThisPage": "Pe această pagină",
	"tableOfContents.overview": "Sinopsis",
	"i18n.untranslatedContent": "Acest conținut nu este încă disponibil în limba selectată.",
	"page.editLink": "Editează pagina",
	"page.lastUpdated": "Ultima actualizare:",
	"page.previousLink": "Pagina precendentă",
	"page.nextLink": "Pagina următoare",
	"page.draft": "This content is a draft and will not be included in production builds.",
	"404.text": "Pagina nu a fost găsită. Verifică adresa URL sau încercă să folosești bara de căutare.",
	"aside.note": "Mențiune",
	"aside.tip": "Sfat",
	"aside.caution": "Atenție",
	"aside.danger": "Pericol",
	"fileTree.directory": "Directory",
	"builtWithStarlight.label": "Built with Starlight"
};

const ru = {
	"skipLink.label": "Перейти к содержимому",
	"search.label": "Поиск",
	"search.ctrlKey": "Ctrl",
	"search.cancelLabel": "Отменить",
	"search.devWarning": "Поиск доступен только в производственных сборках. \nПопробуйте выполнить сборку и просмотреть сайт, чтобы протестировать его локально.",
	"themeSelect.accessibleLabel": "Выберите тему",
	"themeSelect.dark": "Тёмная",
	"themeSelect.light": "Светлая",
	"themeSelect.auto": "Авто",
	"languageSelect.accessibleLabel": "Выберите язык",
	"menuButton.accessibleLabel": "Меню",
	"sidebarNav.accessibleLabel": "Основное",
	"tableOfContents.onThisPage": "На этой странице",
	"tableOfContents.overview": "Обзор",
	"i18n.untranslatedContent": "Это содержимое пока не доступно на вашем языке.",
	"page.editLink": "Редактировать страницу",
	"page.lastUpdated": "Последнее обновление:",
	"page.previousLink": "Предыдущая",
	"page.nextLink": "Следующая",
	"page.draft": "Этот контент является черновиком и не будет добавлен в производственные сборки.",
	"404.text": "Страница не найдена. Проверьте URL или используйте поиск по сайту.",
	"aside.note": "Заметка",
	"aside.tip": "Совет",
	"aside.caution": "Осторожно",
	"aside.danger": "Опасно",
	"fileTree.directory": "Директория",
	"expressiveCode.copyButtonCopied": "Скопировано!",
	"expressiveCode.copyButtonTooltip": "Копировать",
	"expressiveCode.terminalWindowFallbackTitle": "Окно терминала",
	"builtWithStarlight.label": "Сделано с помощью Starlight"
};

const vi = {
	"skipLink.label": "Bỏ qua nội dung",
	"search.label": "Tìm kiếm",
	"search.ctrlKey": "Ctrl",
	"search.cancelLabel": "Thoát",
	"search.devWarning": "Tìm kiếm không khả dụng khi đang trong môi trường lập trình. \nThử xuất bản website và tìm kiếm.",
	"themeSelect.accessibleLabel": "Chọn giao diện",
	"themeSelect.dark": "Tối",
	"themeSelect.light": "Sáng",
	"themeSelect.auto": "Tự động",
	"languageSelect.accessibleLabel": "Chọn ngôn ngữ",
	"menuButton.accessibleLabel": "Menu",
	"sidebarNav.accessibleLabel": "Chính",
	"tableOfContents.onThisPage": "Tóm tắt",
	"tableOfContents.overview": "Tổng quát",
	"i18n.untranslatedContent": "Nội dung này không tồn tại trong ngôn ngữ của bạn",
	"page.editLink": "Chỉnh sửa trang",
	"page.lastUpdated": "Cập nhật lần cuối:",
	"page.previousLink": "Tiếp",
	"page.nextLink": "Trước",
	"page.draft": "This content is a draft and will not be included in production builds.",
	"404.text": "Không tìm thấy trang. Kiểm tra URL hoặc thử sử dụng thanh tìm kiếm.",
	"aside.note": "Ghi chú",
	"aside.tip": "Mẹo",
	"aside.caution": "Thận trọng",
	"aside.danger": "Nguy hiểm",
	"fileTree.directory": "Danh mục",
	"builtWithStarlight.label": "Tạo với Starlight"
};

const uk = {
	"skipLink.label": "Перейти до вмісту",
	"search.label": "Пошук",
	"search.ctrlKey": "Ctrl",
	"search.cancelLabel": "Скасувати",
	"search.devWarning": "Пошук доступний лише у виробничих збірках. \nСпробуйте зібрати та переглянути сайт, щоби протестувати його локально",
	"themeSelect.accessibleLabel": "Обрати тему",
	"themeSelect.dark": "Темна",
	"themeSelect.light": "Світла",
	"themeSelect.auto": "Авто",
	"languageSelect.accessibleLabel": "Обрати мову",
	"menuButton.accessibleLabel": "Меню",
	"sidebarNav.accessibleLabel": "Головне",
	"tableOfContents.onThisPage": "На цій сторінці",
	"tableOfContents.overview": "Огляд",
	"i18n.untranslatedContent": "Цей контент ще не доступний вашою мовою.",
	"page.editLink": "Редагувати сторінку",
	"page.lastUpdated": "Останнє оновлення:",
	"page.previousLink": "Назад",
	"page.nextLink": "Далі",
	"page.draft": "Цей контент є чернеткою і не буде включений до виробничих збірок.",
	"404.text": "Сторінку не знайдено. Перевірте URL або спробуйте скористатися пошуком.",
	"aside.note": "Заувага",
	"aside.tip": "Порада",
	"aside.caution": "Обережно",
	"aside.danger": "Небезпечно",
	"fileTree.directory": "Каталог",
	"builtWithStarlight.label": "Створено з Starlight"
};

const hi = {
	"skipLink.label": "इसे छोड़कर कंटेंट पर जाएं",
	"search.label": "खोजें",
	"search.ctrlKey": "Ctrl",
	"search.cancelLabel": "रद्द करे",
	"search.devWarning": "खोज केवल उत्पादन बिल्ड में उपलब्ध है। \nस्थानीय स्तर पर परीक्षण करने के लिए साइट बनाए और उसका पूर्वावलोकन करने का प्रयास करें।",
	"themeSelect.accessibleLabel": "थीम चुनें",
	"themeSelect.dark": "अँधेरा",
	"themeSelect.light": "रोशनी",
	"themeSelect.auto": "स्वत",
	"languageSelect.accessibleLabel": "भाषा चुने",
	"menuButton.accessibleLabel": "मेन्यू",
	"sidebarNav.accessibleLabel": "मुख्य",
	"tableOfContents.onThisPage": "इस पृष्ठ पर",
	"tableOfContents.overview": "अवलोकन",
	"i18n.untranslatedContent": "यह कंटेंट अभी तक आपकी भाषा में उपलब्ध नहीं है।",
	"page.editLink": "पृष्ठ संपादित करें",
	"page.lastUpdated": "आखिरी अद्यतन:",
	"page.previousLink": "पिछला",
	"page.nextLink": "अगला",
	"page.draft": "This content is a draft and will not be included in production builds.",
	"404.text": "यह पृष्ठ नहीं मिला। URL जांचें या खोज बार का उपयोग करने का प्रयास करें।",
	"aside.note": "टिप्पणी",
	"aside.tip": "संकेत",
	"aside.caution": "सावधानी",
	"aside.danger": "खतरा",
	"fileTree.directory": "Directory",
	"builtWithStarlight.label": "Starlight द्वारा निर्मित"
};

const zhTW = {
	"skipLink.label": "跳到內容",
	"search.label": "搜尋",
	"search.ctrlKey": "Ctrl",
	"search.cancelLabel": "取消",
	"search.devWarning": "正式版本才能使用搜尋功能。\n如要在本地測試，請先建置並預覽網站。",
	"themeSelect.accessibleLabel": "選擇佈景主題",
	"themeSelect.dark": "深色",
	"themeSelect.light": "淺色",
	"themeSelect.auto": "自動",
	"languageSelect.accessibleLabel": "選擇語言",
	"menuButton.accessibleLabel": "選單",
	"sidebarNav.accessibleLabel": "主要",
	"tableOfContents.onThisPage": "本頁內容",
	"tableOfContents.overview": "概述",
	"i18n.untranslatedContent": "本頁內容尚未翻譯。",
	"page.editLink": "編輯頁面",
	"page.lastUpdated": "最後更新於：",
	"page.previousLink": "前一則",
	"page.nextLink": "下一則",
	"page.draft": "This content is a draft and will not be included in production builds.",
	"404.text": "找不到頁面。請檢查網址或改用搜尋功能。",
	"aside.note": "注意",
	"aside.tip": "提示",
	"aside.caution": "警告",
	"aside.danger": "危險",
	"fileTree.directory": "目錄",
	"builtWithStarlight.label": "Built with Starlight"
};

const pl = {
	"skipLink.label": "Przejdź do głównej zawartości",
	"search.label": "Szukaj",
	"search.ctrlKey": "Ctrl",
	"search.cancelLabel": "Anuluj",
	"search.devWarning": "Wyszukiwanie jest dostępne tylko w buildach produkcyjnych. \nSpróbuj zbudować i uruchomić aplikację, aby przetestować lokalnie.",
	"themeSelect.accessibleLabel": "Wybierz motyw",
	"themeSelect.dark": "Ciemny",
	"themeSelect.light": "Jasny",
	"themeSelect.auto": "Auto",
	"languageSelect.accessibleLabel": "Wybierz język",
	"menuButton.accessibleLabel": "Menu",
	"sidebarNav.accessibleLabel": "Główne",
	"tableOfContents.onThisPage": "Na tej stronie",
	"tableOfContents.overview": "Przegląd",
	"i18n.untranslatedContent": "Ta treść nie jest jeszcze dostępna w Twoim języku.",
	"page.editLink": "Edytuj stronę",
	"page.lastUpdated": "Ostatnia aktualizacja:",
	"page.previousLink": "Poprzednia strona",
	"page.nextLink": "Następna strona",
	"page.draft": "This content is a draft and will not be included in production builds.",
	"404.text": "Nie znaleziono. Sprawdź URL lub użyj wyszukiwarki.",
	"aside.note": "Notatka",
	"aside.tip": "Wskazówka",
	"aside.caution": "Uwaga",
	"aside.danger": "Ważne",
	"fileTree.directory": "Folder",
	"expressiveCode.copyButtonCopied": "Skopiowane!",
	"expressiveCode.copyButtonTooltip": "Skopiuj do schowka",
	"expressiveCode.terminalWindowFallbackTitle": "Okno terminala",
	"builtWithStarlight.label": "Built with Starlight"
};

const sk = {
	"skipLink.label": "Preskočiť na obsah",
	"search.label": "Hľadať",
	"search.ctrlKey": "Ctrl",
	"search.cancelLabel": "Zrušiť",
	"search.devWarning": "Vyhľadávanie je dostupné len v produkčných zostaveniach. \nSkúste vytvoriť a zobraziť náhľad stránky lokálne.",
	"themeSelect.accessibleLabel": "Vyberte tému",
	"themeSelect.dark": "Tmavý",
	"themeSelect.light": "Svetlý",
	"themeSelect.auto": "Auto",
	"languageSelect.accessibleLabel": "Vyberte jazyk",
	"menuButton.accessibleLabel": "Menu",
	"sidebarNav.accessibleLabel": "Hlavný",
	"tableOfContents.onThisPage": "Na tejto stránke",
	"tableOfContents.overview": "Prehľad",
	"i18n.untranslatedContent": "Tento obsah zatiaľ nie je dostupný vo vašom jazyku.",
	"page.editLink": "Upraviť stránku",
	"page.lastUpdated": "Posledná aktualizácia:",
	"page.previousLink": "Predchádzajúce",
	"page.nextLink": "Nasledujúce",
	"page.draft": "Tento obsah je koncept a nebude zahrnutý do produkčných zostavení.",
	"404.text": "Stránka nenájdená. Skontrolujte URL alebo skúste použiť vyhľadávacie pole.",
	"aside.note": "Poznámka",
	"aside.tip": "Tip",
	"aside.caution": "Upozornenie",
	"aside.danger": "Nebezpečenstvo",
	"fileTree.directory": "Adresár",
	"builtWithStarlight.label": "Postavené so Starlight"
};

const { parse } = builtinI18nSchema();
const builtinTranslations = Object.fromEntries(
  Object.entries({
    cs,
    en,
    es,
    de,
    ja,
    pt,
    fa,
    fr,
    gl,
    he,
    id,
    it,
    nl,
    da,
    tr,
    ar,
    nb,
    zh,
    ko,
    sv,
    ro,
    ru,
    vi,
    uk,
    hi,
    "zh-TW": zhTW,
    pl,
    sk
  }).map(([key, dict]) => [key, parse(dict)])
);

function createTranslationSystem(userTranslations, config) {
  const defaultLocale = config.defaultLocale?.locale || "root";
  const defaults = buildDictionary(
    builtinTranslations.en,
    userTranslations.en,
    builtinTranslations[defaultLocale] || builtinTranslations[stripLangRegion(defaultLocale)],
    userTranslations[defaultLocale]
  );
  return function useTranslations(locale) {
    const lang = localeToLang(locale, config.locales, config.defaultLocale);
    const dictionary = buildDictionary(
      defaults,
      builtinTranslations[lang] || builtinTranslations[stripLangRegion(lang)],
      userTranslations[lang]
    );
    const t = (key) => dictionary[key];
    t.all = () => dictionary;
    return t;
  };
}
function stripLangRegion(lang) {
  return lang.replace(/-[a-zA-Z]{2}/, "");
}
function localeToLang(locale, locales, defaultLocale) {
  const lang = locale ? locales?.[locale]?.lang : locales?.root?.lang;
  const defaultLang = defaultLocale?.lang || defaultLocale?.locale;
  return lang || defaultLang || BuiltInDefaultLocale.lang;
}
function buildDictionary(base, ...dictionaries) {
  const dictionary = { ...base };
  for (const dict of dictionaries) {
    for (const key in dict) {
      const value = dict[key];
      if (value) dictionary[key] = value;
    }
  }
  return dictionary;
}

async function loadTranslations() {
  let userTranslations = {};
  const warn = console.warn;
  console.warn = () => {
  };
  try {
    userTranslations = Object.fromEntries(
      // @ts-ignore — may be an error in projects without an i18n collection
      (await getCollection("i18n")).map(({ id, data }) => [id, data])
    );
  } catch {
  }
  console.warn = warn;
  return userTranslations;
}
const useTranslations = createTranslationSystem(await loadTranslations(), starlightConfig);

function generateRouteData({
  props,
  url
}) {
  const { entry, locale, lang } = props;
  const sidebar = getSidebar(url.pathname, locale);
  const siteTitle = getSiteTitle(lang);
  return {
    ...props,
    siteTitle,
    siteTitleHref: getSiteTitleHref(locale),
    sidebar,
    hasSidebar: entry.data.template !== "splash",
    pagination: getPrevNextLinks(sidebar, starlightConfig.pagination, entry.data),
    toc: getToC(props),
    lastUpdated: getLastUpdated(props),
    editUrl: getEditUrl(props),
    labels: useTranslations(locale).all()
  };
}
function getToC({ entry, locale, headings }) {
  const tocConfig = entry.data.template === "splash" ? false : entry.data.tableOfContents !== void 0 ? entry.data.tableOfContents : starlightConfig.tableOfContents;
  if (!tocConfig) return;
  const t = useTranslations(locale);
  return {
    ...tocConfig,
    items: generateToC(headings, { ...tocConfig, title: t("tableOfContents.overview") })
  };
}
function getLastUpdated({ entry }) {
  const { lastUpdated: frontmatterLastUpdated } = entry.data;
  const { lastUpdated: configLastUpdated } = starlightConfig;
  if (frontmatterLastUpdated ?? configLastUpdated) {
    const currentFilePath = fileURLToPath(new URL("src/content/docs/" + entry.id, project.root));
    try {
      return frontmatterLastUpdated instanceof Date ? frontmatterLastUpdated : getNewestCommitDate(currentFilePath);
    } catch {
      return void 0;
    }
  }
  return void 0;
}
function getEditUrl({ entry, id, isFallback }) {
  const { editUrl } = entry.data;
  if (editUrl === false) return;
  let url;
  if (typeof editUrl === "string") {
    url = editUrl;
  } else if (starlightConfig.editLink.baseUrl) {
    const srcPath = project.srcDir.replace(project.root, "");
    const filePath = isFallback ? localizedId(id, starlightConfig.defaultLocale.locale) : id;
    url = ensureTrailingSlash(starlightConfig.editLink.baseUrl) + srcPath + "content/docs/" + filePath;
  }
  return url ? new URL(url) : void 0;
}
function getSiteTitle(lang) {
  const defaultLang = starlightConfig.defaultLocale.lang;
  if (lang && starlightConfig.title[lang]) {
    return starlightConfig.title[lang];
  }
  return starlightConfig.title[defaultLang];
}
function getSiteTitleHref(locale) {
  return formatPath(locale || "/");
}

const $$Astro$I = createAstro("https://screwfast.uk");
const $$Banner = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$I, $$props, $$slots);
  Astro2.self = $$Banner;
  const { banner } = Astro2.props.entry.data;
  return renderTemplate`${banner && renderTemplate`${maybeRenderHead()}<div class="sl-banner astro-laz2plt2">${unescapeHTML(banner.content)}</div>`}`;
}, "/var/www/html/cepaonline/node_modules/@astrojs/starlight/components/Banner.astro", void 0);

const $$ContentPanel = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<div class="content-panel astro-7nkwcw3z"> <div class="sl-container astro-7nkwcw3z">${renderSlot($$result, $$slots["default"])}</div> </div> `;
}, "/var/www/html/cepaonline/node_modules/@astrojs/starlight/components/ContentPanel.astro", void 0);

const definitions = {
  files: {
    "astro.config.js": "astro",
    "astro.config.mjs": "astro",
    "astro.config.cjs": "astro",
    "astro.config.ts": "astro",
    "pnpm-debug.log": "pnpm",
    "pnpm-lock.yaml": "pnpm",
    "pnpm-workspace.yaml": "pnpm",
    "biome.json": "biome",
    "bun.lockb": "bun",
    COMMIT_EDITMSG: "seti:git",
    MERGE_MSG: "seti:git",
    "karma.conf.js": "seti:karma",
    "karma.conf.coffee": "seti:karma",
    "README.md": "seti:info",
    "README.txt": "seti:info",
    README: "seti:info",
    "CHANGELOG.md": "seti:clock",
    "CHANGELOG.txt": "seti:clock",
    CHANGELOG: "seti:clock",
    "CHANGES.md": "seti:clock",
    "CHANGES.txt": "seti:clock",
    CHANGES: "seti:clock",
    "VERSION.md": "seti:clock",
    "VERSION.txt": "seti:clock",
    VERSION: "seti:clock",
    mvnw: "seti:maven",
    "pom.xml": "seti:maven",
    "tsconfig.json": "seti:tsconfig",
    "swagger.json": "seti:json",
    "swagger.yml": "seti:json",
    "swagger.yaml": "seti:json",
    "mime.types": "seti:config",
    Jenkinsfile: "seti:jenkins",
    "babel.config.js": "seti:babel",
    "babel.config.json": "seti:babel",
    "babel.config.cjs": "seti:babel",
    BUILD: "seti:bazel",
    "BUILD.bazel": "seti:bazel",
    WORKSPACE: "seti:bazel",
    "WORKSPACE.bazel": "seti:bazel",
    "bower.json": "seti:bower",
    "Bower.json": "seti:bower",
    "firebase.json": "seti:firebase",
    geckodriver: "seti:firefox",
    "Gruntfile.js": "seti:grunt",
    "gruntfile.babel.js": "seti:grunt",
    "Gruntfile.babel.js": "seti:grunt",
    "gruntfile.js": "seti:grunt",
    "Gruntfile.coffee": "seti:grunt",
    "gruntfile.coffee": "seti:grunt",
    "ionic.config.json": "seti:ionic",
    "Ionic.config.json": "seti:ionic",
    "ionic.project": "seti:ionic",
    "Ionic.project": "seti:ionic",
    "platformio.ini": "seti:platformio",
    "rollup.config.js": "seti:rollup",
    "sass-lint.yml": "seti:sass",
    "stylelint.config.js": "seti:stylelint",
    "stylelint.config.cjs": "seti:stylelint",
    "yarn.clean": "seti:yarn",
    "yarn.lock": "seti:yarn",
    "webpack.config.js": "seti:webpack",
    "webpack.config.cjs": "seti:webpack",
    "webpack.config.ts": "seti:webpack",
    "webpack.config.build.js": "seti:webpack",
    "webpack.config.build.cjs": "seti:webpack",
    "webpack.config.build.ts": "seti:webpack",
    "webpack.common.js": "seti:webpack",
    "webpack.common.cjs": "seti:webpack",
    "webpack.common.ts": "seti:webpack",
    "webpack.dev.js": "seti:webpack",
    "webpack.dev.cjs": "seti:webpack",
    "webpack.dev.ts": "seti:webpack",
    "webpack.prod.js": "seti:webpack",
    "webpack.prod.cjs": "seti:webpack",
    "webpack.prod.ts": "seti:webpack",
    "npm-debug.log": "seti:npm_ignored"
  },
  extensions: {
    ".astro": "astro",
    ".mdx": "mdx",
    ".pkl": "pkl",
    ".bsl": "seti:bsl",
    ".mdo": "seti:mdo",
    ".cls": "seti:salesforce",
    ".apex": "seti:salesforce",
    ".asm": "seti:asm",
    ".s": "seti:asm",
    ".bicep": "seti:bicep",
    ".bzl": "seti:bazel",
    ".bazel": "seti:bazel",
    ".BUILD": "seti:bazel",
    ".WORKSPACE": "seti:bazel",
    ".bazelignore": "seti:bazel",
    ".bazelversion": "seti:bazel",
    ".c": "seti:c",
    ".h": "seti:c",
    ".m": "seti:c",
    ".cs": "seti:c-sharp",
    ".cshtml": "seti:html",
    ".aspx": "seti:html",
    ".ascx": "seti:html",
    ".asax": "seti:html",
    ".master": "seti:html",
    ".cc": "seti:cpp",
    ".cpp": "seti:cpp",
    ".cxx": "seti:cpp",
    ".c++": "seti:cpp",
    ".hh": "seti:cpp",
    ".hpp": "seti:cpp",
    ".hxx": "seti:cpp",
    ".h++": "seti:cpp",
    ".mm": "seti:cpp",
    ".clj": "seti:clojure",
    ".cljs": "seti:clojure",
    ".cljc": "seti:clojure",
    ".edn": "seti:clojure",
    ".cfc": "seti:coldfusion",
    ".cfm": "seti:coldfusion",
    ".coffee": "seti:cjsx",
    ".litcoffee": "seti:cjsx",
    ".config": "seti:config",
    ".cfg": "seti:config",
    ".conf": "seti:config",
    ".cr": "seti:crystal",
    ".ecr": "seti:crystal_embedded",
    ".slang": "seti:crystal_embedded",
    ".cson": "seti:json",
    ".css": "seti:css",
    ".css.map": "seti:css",
    ".sss": "seti:css",
    ".csv": "seti:csv",
    ".xls": "seti:xls",
    ".xlsx": "seti:xls",
    ".cu": "seti:cu",
    ".cuh": "seti:cu",
    ".hu": "seti:cu",
    ".cake": "seti:cake",
    ".ctp": "seti:cake_php",
    ".d": "seti:d",
    ".doc": "seti:word",
    ".docx": "seti:word",
    ".ejs": "seti:ejs",
    ".ex": "seti:elixir",
    ".exs": "seti:elixir_script",
    ".elm": "seti:elm",
    ".ico": "seti:favicon",
    ".fs": "seti:f-sharp",
    ".fsx": "seti:f-sharp",
    ".gitignore": "seti:git",
    ".gitconfig": "seti:git",
    ".gitkeep": "seti:git",
    ".gitattributes": "seti:git",
    ".gitmodules": "seti:git",
    ".go": "seti:go",
    ".slide": "seti:go",
    ".article": "seti:go",
    ".gd": "seti:godot",
    ".godot": "seti:godot",
    ".tres": "seti:godot",
    ".tscn": "seti:godot",
    ".gradle": "seti:gradle",
    ".groovy": "seti:grails",
    ".gsp": "seti:grails",
    ".gql": "seti:graphql",
    ".graphql": "seti:graphql",
    ".graphqls": "seti:graphql",
    ".hack": "seti:hacklang",
    ".haml": "seti:haml",
    ".handlebars": "seti:mustache",
    ".hbs": "seti:mustache",
    ".hjs": "seti:mustache",
    ".hs": "seti:haskell",
    ".lhs": "seti:haskell",
    ".hx": "seti:haxe",
    ".hxs": "seti:haxe",
    ".hxp": "seti:haxe",
    ".hxml": "seti:haxe",
    ".html": "seti:html",
    ".jade": "seti:jade",
    ".java": "seti:java",
    ".class": "seti:java",
    ".classpath": "seti:java",
    ".properties": "seti:java",
    ".js": "seti:javascript",
    ".js.map": "seti:javascript",
    ".spec.js": "seti:javascript",
    ".test.js": "seti:javascript",
    ".es": "seti:javascript",
    ".es5": "seti:javascript",
    ".es6": "seti:javascript",
    ".es7": "seti:javascript",
    ".jinja": "seti:jinja",
    ".jinja2": "seti:jinja",
    ".json": "seti:json",
    ".jl": "seti:julia",
    ".kt": "seti:kotlin",
    ".kts": "seti:kotlin",
    ".dart": "seti:dart",
    ".less": "seti:json",
    ".liquid": "seti:liquid",
    ".ls": "seti:livescript",
    ".lua": "seti:lua",
    ".markdown": "seti:markdown",
    ".md": "seti:markdown",
    ".argdown": "seti:argdown",
    ".ad": "seti:argdown",
    ".mustache": "seti:mustache",
    ".stache": "seti:mustache",
    ".nim": "seti:nim",
    ".nims": "seti:nim",
    ".github-issues": "seti:github",
    ".ipynb": "seti:notebook",
    ".njk": "seti:nunjucks",
    ".nunjucks": "seti:nunjucks",
    ".nunjs": "seti:nunjucks",
    ".nunj": "seti:nunjucks",
    ".njs": "seti:nunjucks",
    ".nj": "seti:nunjucks",
    ".npm-debug.log": "seti:npm",
    ".npmignore": "seti:npm",
    ".npmrc": "seti:npm",
    ".ml": "seti:ocaml",
    ".mli": "seti:ocaml",
    ".cmx": "seti:ocaml",
    ".cmxa": "seti:ocaml",
    ".odata": "seti:odata",
    ".pl": "seti:perl",
    ".php": "seti:php",
    ".php.inc": "seti:php",
    ".pipeline": "seti:pipeline",
    ".pddl": "seti:pddl",
    ".plan": "seti:plan",
    ".happenings": "seti:happenings",
    ".ps1": "seti:powershell",
    ".psd1": "seti:powershell",
    ".psm1": "seti:powershell",
    ".prisma": "seti:prisma",
    ".pug": "seti:pug",
    ".pp": "seti:puppet",
    ".epp": "seti:puppet",
    ".purs": "seti:purescript",
    ".py": "seti:python",
    ".jsx": "seti:react",
    ".spec.jsx": "seti:react",
    ".test.jsx": "seti:react",
    ".cjsx": "seti:react",
    ".tsx": "seti:react",
    ".spec.tsx": "seti:react",
    ".test.tsx": "seti:react",
    ".res": "seti:rescript",
    ".resi": "seti:rescript",
    ".R": "seti:R",
    ".rmd": "seti:R",
    ".rb": "seti:ruby",
    ".erb": "seti:html",
    ".erb.html": "seti:html",
    ".html.erb": "seti:html",
    ".rs": "seti:rust",
    ".sass": "seti:sass",
    ".scss": "seti:sass",
    ".springBeans": "seti:spring",
    ".slim": "seti:slim",
    ".smarty.tpl": "seti:smarty",
    ".tpl": "seti:smarty",
    ".sbt": "seti:sbt",
    ".scala": "seti:scala",
    ".sol": "seti:ethereum",
    ".styl": "seti:stylus",
    ".svelte": "seti:svelte",
    ".swift": "seti:swift",
    ".sql": "seti:db",
    ".soql": "seti:db",
    ".tf": "seti:terraform",
    ".tf.json": "seti:terraform",
    ".tfvars": "seti:terraform",
    ".tfvars.json": "seti:terraform",
    ".tex": "seti:tex",
    ".sty": "seti:tex",
    ".dtx": "seti:tex",
    ".ins": "seti:tex",
    ".txt": "seti:default",
    ".toml": "seti:config",
    ".twig": "seti:twig",
    ".ts": "seti:typescript",
    ".spec.ts": "seti:typescript",
    ".test.ts": "seti:typescript",
    ".vala": "seti:vala",
    ".vapi": "seti:vala",
    ".component": "seti:html",
    ".vue": "seti:vue",
    ".wasm": "seti:wasm",
    ".wat": "seti:wat",
    ".xml": "seti:xml",
    ".yml": "seti:yml",
    ".yaml": "seti:yml",
    ".pro": "seti:prolog",
    ".zig": "seti:zig",
    ".jar": "seti:zip",
    ".zip": "seti:zip",
    ".wgt": "seti:wgt",
    ".ai": "seti:illustrator",
    ".psd": "seti:photoshop",
    ".pdf": "seti:pdf",
    ".eot": "seti:font",
    ".ttf": "seti:font",
    ".woff": "seti:font",
    ".woff2": "seti:font",
    ".otf": "seti:font",
    ".avif": "seti:image",
    ".gif": "seti:image",
    ".jpg": "seti:image",
    ".jpeg": "seti:image",
    ".png": "seti:image",
    ".pxm": "seti:image",
    ".svg": "seti:svg",
    ".svgx": "seti:image",
    ".tiff": "seti:image",
    ".webp": "seti:image",
    ".sublime-project": "seti:sublime",
    ".sublime-workspace": "seti:sublime",
    ".code-search": "seti:code-search",
    ".sh": "seti:shell",
    ".zsh": "seti:shell",
    ".fish": "seti:shell",
    ".zshrc": "seti:shell",
    ".bashrc": "seti:shell",
    ".mov": "seti:video",
    ".ogv": "seti:video",
    ".webm": "seti:video",
    ".avi": "seti:video",
    ".mpg": "seti:video",
    ".mp4": "seti:video",
    ".mp3": "seti:audio",
    ".ogg": "seti:audio",
    ".wav": "seti:audio",
    ".flac": "seti:audio",
    ".3ds": "seti:svg",
    ".3dm": "seti:svg",
    ".stl": "seti:svg",
    ".obj": "seti:svg",
    ".dae": "seti:svg",
    ".bat": "seti:windows",
    ".cmd": "seti:windows",
    ".babelrc": "seti:babel",
    ".babelrc.js": "seti:babel",
    ".babelrc.cjs": "seti:babel",
    ".bazelrc": "seti:bazel",
    ".bowerrc": "seti:bower",
    ".codeclimate.yml": "seti:code-climate",
    ".eslintrc": "seti:eslint",
    ".eslintrc.js": "seti:eslint",
    ".eslintrc.cjs": "seti:eslint",
    ".eslintrc.yaml": "seti:eslint",
    ".eslintrc.yml": "seti:eslint",
    ".eslintrc.json": "seti:eslint",
    ".eslintignore": "seti:eslint",
    ".firebaserc": "seti:firebase",
    ".gitlab-ci.yml": "seti:gitlab",
    ".jshintrc": "seti:javascript",
    ".jscsrc": "seti:javascript",
    ".stylelintrc": "seti:stylelint",
    ".stylelintrc.json": "seti:stylelint",
    ".stylelintrc.yaml": "seti:stylelint",
    ".stylelintrc.yml": "seti:stylelint",
    ".stylelintrc.js": "seti:stylelint",
    ".stylelintignore": "seti:stylelint",
    ".direnv": "seti:config",
    ".env": "seti:config",
    ".static": "seti:config",
    ".editorconfig": "seti:config",
    ".slugignore": "seti:config",
    ".tmp": "seti:clock",
    ".htaccess": "seti:config",
    ".key": "seti:lock",
    ".cert": "seti:lock",
    ".cer": "seti:lock",
    ".crt": "seti:lock",
    ".pem": "seti:lock",
    ".DS_Store": "seti:ignored"
  },
  partials: {
    mix: "seti:hex",
    Gemfile: "seti:ruby",
    gemfile: "seti:ruby",
    dockerfile: "seti:docker",
    Dockerfile: "seti:docker",
    DOCKERFILE: "seti:docker",
    ".dockerignore": "seti:docker",
    "docker-healthcheck": "seti:docker",
    "docker-compose.yml": "seti:docker",
    "docker-compose.yaml": "seti:docker",
    "docker-compose.override.yml": "seti:docker",
    "docker-compose.override.yaml": "seti:docker",
    GULPFILE: "seti:gulp",
    Gulpfile: "seti:gulp",
    gulpfile: "seti:gulp",
    "gulpfile.js": "seti:gulp",
    LICENSE: "seti:license",
    LICENCE: "seti:license",
    "LICENSE.txt": "seti:license",
    "LICENCE.txt": "seti:license",
    "LICENSE.md": "seti:license",
    "LICENCE.md": "seti:license",
    COPYING: "seti:license",
    "COPYING.txt": "seti:license",
    "COPYING.md": "seti:license",
    COMPILING: "seti:license",
    "COMPILING.txt": "seti:license",
    "COMPILING.md": "seti:license",
    CONTRIBUTING: "seti:license",
    "CONTRIBUTING.txt": "seti:license",
    "CONTRIBUTING.md": "seti:license",
    MAKEFILE: "seti:makefile",
    Makefile: "seti:makefile",
    makefile: "seti:makefile",
    QMAKEFILE: "seti:makefile",
    QMakefile: "seti:makefile",
    qmakefile: "seti:makefile",
    OMAKEFILE: "seti:makefile",
    OMakefile: "seti:makefile",
    omakefile: "seti:makefile",
    "CMAKELISTS.TXT": "seti:makefile",
    "CMAKELISTS.txt": "seti:makefile",
    "CMakeLists.txt": "seti:makefile",
    "cmakelists.txt": "seti:makefile",
    Procfile: "seti:heroku",
    TODO: "seti:todo",
    "TODO.txt": "seti:todo",
    "TODO.md": "seti:todo"
  }
};
const FileIcons = {
  "seti:folder": '<path d="M22.073 4.900L22.073 4.900L12.148 4.900L12.148 3.950Q12.148 3.125 11.585 2.563Q11.023 2 10.198 2L10.198 2L0.048 2L0.048 22L23.948 22L23.948 6.850Q23.998 6.025 23.448 5.462Q22.898 4.900 22.073 4.900Z"/>',
  "seti:bsl": '<path d="M23.696 15.213L12.850 15.213L12.850 18.375L23.696 18.375L23.696 15.213ZM2.446 18.375L2.446 5.625L5.642 5.625L5.642 18.375L2.446 18.375ZM0.304 9.875L0.304 6.713L2.446 6.713L2.446 9.875L0.304 9.875ZM9.892 12.017L9.892 12.017Q9.892 10.657 10.793 9.739Q11.694 8.821 13.054 8.821L13.054 8.821Q14.108 8.821 14.907 9.416Q15.706 10.011 16.046 10.963L16.046 10.963L19.344 10.963Q19.072 9.467 18.188 8.260Q17.304 7.053 15.961 6.339Q14.618 5.625 13.054 5.625L13.054 5.625Q11.354 5.625 9.875 6.492Q8.396 7.359 7.546 8.821Q6.696 10.283 6.696 12.017Q6.696 13.751 7.546 15.213Q8.396 16.675 9.875 17.525Q11.354 18.375 13.071 18.375Q14.788 18.375 16.284 17.508Q17.780 16.641 18.596 15.213L18.596 15.213L13.054 15.213Q11.694 15.213 10.793 14.295Q9.892 13.377 9.892 12.017Z"/>',
  "seti:mdo": '<path d="M14.375 14.128L14.375 14.014Q13.463 14.014 12.836 13.387Q12.209 12.760 12.209 11.867Q12.209 10.974 12.836 10.366Q13.463 9.758 14.375 9.758L14.375 9.758Q14.983 9.758 15.553 10.100Q16.123 10.442 16.389 11.050L16.389 11.050L18.175 11.050Q17.795 9.720 16.750 8.903Q15.705 8.086 14.375 8.086L14.375 8.086Q13.311 8.086 12.399 8.618Q11.487 9.150 10.955 10.043Q10.423 10.936 10.423 12Q10.423 13.064 10.955 13.957Q11.487 14.850 12.399 15.382Q13.311 15.914 14.375 15.914L14.375 15.914L19.923 15.914L19.923 14.128L14.375 14.128ZM7.839 15.800L7.839 8.086L9.625 8.086L9.625 15.800L7.839 15.800ZM6.167 11.164L6.167 9.378L7.953 9.378L7.953 11.164L6.167 11.164ZM20.189 3.792L20.189 3.792L4.153 3.792L0.125 12L2.139 16.066Q4.153 20.132 4.153 20.208L4.153 20.208L20.189 20.208Q21.671 20.208 22.773 19.125Q23.875 18.042 23.875 16.522L23.875 16.522L23.875 7.364Q23.875 5.920 22.811 4.856Q21.747 3.792 20.189 3.792ZM22.089 7.478L22.089 16.636Q22.089 17.396 21.557 17.909Q21.025 18.422 20.303 18.422L20.303 18.422L5.559 18.422L3.735 15.458Q1.873 12.456 1.873 12.228L1.873 12.228L5.559 5.692L20.303 5.692Q21.063 5.692 21.576 6.224Q22.089 6.756 22.089 7.478L22.089 7.478Z"/>',
  "seti:salesforce": '<path d="M6.648 3.525L6.696 3.525Q8.232 3.765 9.240 4.581L9.240 4.581L9.528 4.869Q9.864 5.109 9.960 5.301L9.960 5.301L10.104 5.301Q10.248 5.157 10.560 4.941Q10.872 4.725 11.016 4.581L11.016 4.581L12.072 4.101Q12.360 4.101 12.696 3.957L12.696 3.957L13.560 3.957Q14.376 3.957 15.096 4.437L15.096 4.437Q16.104 5.061 16.728 6.069L16.728 6.069Q16.728 6.165 16.800 6.165Q16.872 6.165 16.872 6.069L16.872 6.069L17.160 5.973Q17.736 5.781 18.072 5.781L18.072 5.781L19.272 5.781Q20.040 5.781 21.240 6.357L21.240 6.357L21.576 6.597Q22.200 6.933 22.440 7.269L22.440 7.269Q23.016 7.893 23.496 8.757L23.496 8.757Q23.928 9.429 23.928 10.437L23.928 10.437L23.928 11.637Q23.928 12.117 23.736 12.645L23.736 12.645Q23.640 12.981 23.304 13.557L23.304 13.557Q22.872 14.469 22.104 15.237L22.104 15.237Q21.576 15.765 20.904 15.957L20.904 15.957L19.560 16.437L17.640 16.437Q17.400 16.869 16.776 17.445L16.776 17.445L16.440 17.781Q15.864 18.117 14.904 18.357L14.904 18.357L14.040 18.357Q13.656 18.357 13.080 18.165L13.080 18.165L12.840 18.069L12.696 18.069Q12.552 18.405 12.168 18.885L12.168 18.885L11.928 19.269Q11.496 19.941 10.728 20.181L10.728 20.181Q9.336 20.853 7.824 20.493Q6.312 20.133 5.304 18.837L5.304 18.837Q4.968 18.453 4.728 17.781L4.728 17.781Q4.728 17.685 4.632 17.733L4.632 17.733L4.584 17.781L3.528 17.781Q3.288 17.781 2.952 17.709Q2.616 17.637 2.472 17.637L2.472 17.637Q1.896 17.445 1.272 17.013L1.272 17.013Q0.360 16.149 0.072 15.525L0.072 15.525Q0.312 14.613 0.072 14.181L0.072 14.181L0.072 13.269Q0.072 12.693 0.360 12.093Q0.648 11.493 0.960 11.181Q1.272 10.869 1.272 10.725L1.272 10.725Q1.704 10.293 2.040 10.149L2.040 10.149L2.088 10.101Q2.136 10.053 2.040 9.957L2.040 9.957Q1.704 9.381 1.704 8.949L1.704 8.949L1.704 7.557Q1.944 5.877 3.168 4.677Q4.392 3.477 6.072 3.381L6.072 3.381L6.360 3.381Q6.504 3.525 6.648 3.525L6.648 3.525L6.648 3.525Z"/>',
  "seti:asm": '<path d="M1.322 16.313L0.106 16.313L3.222 7.687L4.856 7.687L7.972 16.313L6.300 16.313L5.426 13.995L2.158 13.995L1.322 16.313ZM3.792 9.435L2.538 12.931L5.008 12.931L3.792 9.435ZM8.390 16.237L8.390 16.237L8.390 14.793Q10.214 15.401 11.240 15.401L11.240 15.401Q12.000 15.401 12.570 15.097L12.570 15.097Q12.836 14.907 12.950 14.717Q13.064 14.527 13.064 14.223L13.064 14.223Q13.064 13.767 12.798 13.539L12.798 13.539Q12.456 13.159 11.658 12.855L11.658 12.855L10.936 12.551Q9.758 11.943 8.960 11.221L8.960 11.221Q8.390 10.613 8.390 9.853L8.390 9.853Q8.390 8.713 9.340 8.143L9.340 8.143Q10.290 7.459 11.886 7.459L11.886 7.459Q13.330 7.459 14.622 7.763L14.622 7.763L14.622 9.131Q13.026 8.675 12.076 8.675L12.076 8.675Q11.392 8.675 10.936 8.903L10.936 8.903Q10.518 9.245 10.518 9.625Q10.518 10.005 10.822 10.233L10.822 10.233Q11.240 10.537 11.962 10.917L11.962 10.917L12.646 11.221Q14.128 11.943 14.698 12.551Q15.268 13.159 15.268 13.995L15.268 13.995Q15.268 14.603 15.002 15.097Q14.736 15.591 14.204 15.857L14.204 15.857Q13.254 16.541 11.316 16.541L11.316 16.541Q9.910 16.541 8.390 16.237ZM17.168 16.313L15.914 16.313L15.914 7.763L18.118 7.763L20.018 13.843L21.994 7.763L23.894 7.763L23.894 16.313L22.336 16.313L22.336 9.777L20.436 15.705L19.106 15.705L17.168 9.701L17.168 16.313Z"/>',
  "seti:bicep": '<path d="M19.224 14.604L19.224 14.604L8.052 14.604L10.698 8.052L15.024 8.052L15.948 6.078L12 6.078L10.698 4.104L12 2.172L15.948 2.172L15.024 0.198L10.698 0.198L7.800 4.104L8.976 6.078L1.122 15.948Q0.702 16.452 0.450 17.166Q0.198 17.880 0.198 18.552L0.198 18.552Q0.198 20.022 1.143 21.156Q2.088 22.290 3.474 22.500L3.474 22.500L10.614 23.172Q18.006 23.802 19.224 23.802Q20.442 23.802 21.492 23.172Q22.542 22.542 23.172 21.492Q23.802 20.442 23.802 19.224Q23.802 18.006 23.172 16.935Q22.542 15.864 21.492 15.234Q20.442 14.604 19.224 14.604ZM4.146 20.526L4.146 20.526Q3.348 20.526 2.760 19.938Q2.172 19.350 2.172 18.552Q2.172 17.754 2.760 17.166Q3.348 16.578 4.125 16.578Q4.902 16.578 5.490 17.166Q6.078 17.754 6.078 18.552Q6.078 19.350 5.490 19.938Q4.902 20.526 4.146 20.526ZM19.224 21.828L19.224 21.828Q18.132 21.828 17.355 21.072Q16.578 20.316 16.578 19.224Q16.578 18.132 17.355 17.355Q18.132 16.578 19.224 16.578Q20.316 16.578 21.072 17.355Q21.828 18.132 21.828 19.224Q21.828 20.316 21.072 21.072Q20.316 21.828 19.224 21.828Z"/>',
  "seti:bazel": '<path d="M0.198 6.078L6.078 0.198L12 6.078L17.922 0.198L23.802 6.078L23.802 12L12 23.802L0.198 12L0.198 6.078Z"/>',
  "seti:c": '<path d="M21.330 17.405L21.330 22.152Q19.732 22.951 18.063 23.398Q16.395 23.844 14.562 23.844L14.562 23.844Q9.063 23.844 5.867 20.648Q2.671 17.452 2.671 12Q2.671 6.548 5.867 3.352Q9.063 0.156 14.562 0.156L14.562 0.156Q16.395 0.156 18.087 0.579Q19.779 1.002 21.330 1.848L21.330 1.848L21.330 6.595Q19.732 5.467 18.204 4.950Q16.677 4.433 15.031 4.433L15.031 4.433Q11.976 4.433 10.238 6.454Q8.499 8.475 8.499 12Q8.499 15.525 10.238 17.546Q11.976 19.567 15.031 19.567L15.031 19.567Q16.677 19.567 18.204 19.050Q19.732 18.533 21.330 17.405L21.330 17.405Z"/>',
  "seti:c-sharp": '<path d="M0.261 11.937L0.261 11.937Q0.261 9.417 1.038 7.464Q1.815 5.511 3.117 4.209Q4.419 2.907 6.309 2.067L6.309 2.067Q7.779 1.437 10.089 1.437L10.089 1.437Q12.063 1.437 13.638 2.214Q15.213 2.991 16.263 4.041L16.263 4.041L13.365 7.317L13.029 7.065Q12.357 6.519 11.937 6.435L11.937 6.435L11.517 6.309Q10.677 6.015 10.089 6.015L10.089 6.015Q9.165 6.015 8.409 6.435L8.409 6.435Q7.485 6.855 6.939 7.590Q6.393 8.325 6.015 9.480Q5.637 10.635 5.637 11.937L5.637 11.937Q5.637 14.961 6.939 16.263L6.939 16.263Q7.653 17.061 8.472 17.460Q9.291 17.859 10.341 17.859Q11.391 17.859 12.189 17.439L12.189 17.439Q13.071 17.019 13.659 16.263L13.659 16.263L16.515 19.539Q15.297 20.925 13.659 21.765L13.659 21.765Q12.063 22.563 10.089 22.563L10.089 22.563Q8.283 22.563 6.309 21.891L6.309 21.891Q4.503 21.303 3.159 19.959L3.159 19.959Q2.529 19.329 2.025 18.321L2.025 18.321Q1.689 17.691 1.185 16.389L1.185 16.389Q0.261 14.751 0.261 11.937ZM19.203 15.129L19.539 13.491L18.237 13.491L17.733 16.641L16.137 16.641L16.683 13.491L15.087 13.491L15.087 12.063L17.061 12.063L17.313 9.963L15.633 9.963L15.633 8.535L17.565 8.535L18.111 5.385L19.665 5.385L19.161 8.535L20.463 8.535L21.009 5.385L22.563 5.385L22.059 8.535L23.739 8.535L23.739 9.963L21.639 9.963L21.387 12.063L23.109 12.063L23.109 13.491L21.009 13.491L20.463 16.641L18.909 16.641Q18.909 16.725 19.203 15.129L19.203 15.129ZM18.783 10.089L18.489 12.189L19.833 12.189L20.085 10.089L18.783 10.089Z"/>',
  "seti:html": '<path d="M0 13.488L0 10.512L9.024 2.112L9.024 6L2.256 12L9.024 18L9.024 21.888L0 13.488ZM24 10.368L24 13.632L15.024 22.032L15.024 18L21.888 12L15.024 6L15.024 1.968L24 10.368Z"/>',
  "seti:cpp": '<path d="M0.024 11.935L0.024 11.935Q0.024 9.398 0.841 7.377Q1.659 5.356 2.970 4.045Q4.282 2.733 6.216 1.873L6.216 1.873Q7.722 1.185 10.130 1.185L10.130 1.185Q12.151 1.185 13.763 2.002Q15.376 2.819 16.451 3.894L16.451 3.894L13.484 7.248L13.140 6.990Q12.409 6.431 12.021 6.302L12.021 6.302L11.549 6.173Q10.689 5.915 10.130 5.915L10.130 5.915Q9.184 5.915 8.367 6.302L8.367 6.302Q7.463 6.775 6.905 7.528Q6.346 8.280 5.959 9.441Q5.572 10.602 5.572 11.935L5.572 11.935Q5.572 15.031 6.905 16.364L6.905 16.364Q7.593 17.224 8.453 17.611Q9.313 17.998 10.387 17.998Q11.463 17.998 12.280 17.611L12.280 17.611Q13.183 17.138 13.742 16.364L13.742 16.364L16.709 19.761Q15.462 21.180 13.742 22.041L13.742 22.041Q12.151 22.814 10.130 22.814L10.130 22.814Q8.238 22.814 6.216 22.169L6.216 22.169Q4.411 21.567 2.992 20.148L2.992 20.148Q2.389 19.503 1.831 18.471L1.831 18.471Q1.530 17.869 0.970 16.537L0.970 16.537Q0.024 14.644 0.024 11.935ZM13.355 10.731L13.355 8.452L11.463 8.452L11.463 10.731L9.313 10.731L9.313 12.623L11.463 12.623L11.463 15.031L13.355 15.031L13.355 12.623L15.505 12.623L15.505 10.731L13.355 10.731ZM23.976 10.602L21.396 10.602L21.396 7.936L19.117 7.936L19.117 10.602L16.580 10.602L16.580 12.881L19.117 12.881L19.117 15.720L21.396 15.720L21.396 12.881L23.976 12.881L23.976 10.602Z"/>',
  "seti:clojure": '<path d="M11.426 12.105L11.426 12.105L11.006 12.903Q9.998 14.919 9.830 16.179L9.830 16.179Q9.704 16.473 9.704 17.229L9.704 17.229L9.704 17.775Q10.670 18.153 11.804 18.153L11.804 18.153Q12.476 18.153 13.778 17.901L13.778 17.901L13.400 17.523Q12.896 16.683 12.434 15.339L12.434 15.339Q12.056 14.247 11.426 12.105ZM8.402 6.729L8.402 6.729Q7.184 7.653 6.470 8.997Q5.756 10.341 5.756 11.874Q5.756 13.407 6.470 14.730Q7.184 16.053 8.402 16.977L8.402 16.977Q8.570 16.263 8.990 15.339L8.990 15.339Q9.242 14.751 9.956 13.407L9.956 13.407Q10.712 11.895 11.132 10.929L11.132 10.929Q11.090 10.803 11.027 10.551Q10.964 10.299 10.880 10.173L10.880 10.173Q10.208 8.367 9.452 7.401L9.452 7.401Q8.864 7.191 8.402 6.729ZM17.432 19.077L17.432 19.077Q15.878 18.825 15.332 18.699L15.332 18.699Q13.778 19.455 12.056 19.455L12.056 19.455Q9.998 19.455 8.297 18.447Q6.596 17.439 5.588 15.717Q4.580 13.995 4.580 11.979L4.580 11.979Q4.580 10.383 5.294 8.871L5.294 8.871Q5.924 7.485 7.100 6.351L7.100 6.351Q6.680 6.225 5.756 6.225L5.756 6.225Q3.950 6.225 2.564 7.233L2.564 7.233Q1.010 8.409 0.254 10.803L0.254 10.803Q0.128 11.349 0.128 12.105L0.128 12.105Q0.128 15.339 1.703 18.048Q3.278 20.757 5.987 22.353Q8.696 23.949 11.930 23.949L11.930 23.949Q14.828 23.949 17.432 22.563L17.432 22.563Q19.952 21.261 21.632 18.951L21.632 18.951Q19.868 19.329 18.356 19.329L18.356 19.329Q17.978 19.077 17.432 19.077ZM11.930 0.051L11.930 0.051Q9.032 0.051 6.491 1.395Q3.950 2.739 2.354 5.049L2.354 5.049Q3.824 4.125 5.630 4.125L5.630 4.125Q6.512 4.125 7.436 4.335L7.436 4.335Q8.150 4.545 8.654 4.755L8.654 4.755Q8.738 4.839 8.864 4.902Q8.990 4.965 9.032 5.049L9.032 5.049Q10.586 4.377 12.056 4.377L12.056 4.377Q14.114 4.377 15.836 5.406Q17.558 6.435 18.545 8.136Q19.532 9.837 19.532 11.853L19.532 11.853Q19.532 14.793 17.306 17.229L17.306 17.229L18.356 17.229Q20.834 17.229 22.178 16.053L22.178 16.053Q23.396 15.087 23.732 13.323L23.732 13.323Q23.732 13.029 23.816 12.483L23.816 12.483Q23.900 12.063 23.858 11.853L23.858 11.853Q23.816 8.619 22.199 5.910Q20.582 3.201 17.936 1.647L17.936 1.647Q15.164 0.051 11.930 0.051Z"/>',
  "seti:coldfusion": '<path d="M6.963 10.543L6.963 10.543Q6.808 10.543 6.560 10.512L6.560 10.512Q5.940 10.481 5.692 10.543L5.692 10.543L5.382 10.574Q3.925 10.760 3.305 10.977L3.305 10.977Q2.220 11.349 1.631 12.186L1.631 12.186Q0.577 13.519 0.407 14.945Q0.236 16.371 0.949 17.797L0.949 17.797Q2.313 20.556 5.692 20.711L5.692 20.711L9.567 20.711Q13.163 20.587 15.364 17.611L15.364 17.611Q16.542 16.154 17.131 14.418L17.131 14.418Q17.348 13.829 17.674 13.597Q17.999 13.364 18.588 13.364L18.588 13.364Q19.084 13.426 20.045 13.364L20.045 13.364L20.789 13.364Q21.130 13.364 21.254 13.302L21.254 13.302Q21.471 13.209 21.471 12.961L21.471 12.961L21.533 12.620Q21.626 11.969 21.626 11.659L21.626 11.659Q21.595 11.132 21.378 10.729L21.378 10.729Q21.254 10.481 20.975 10.419L20.975 10.419Q20.820 10.388 20.448 10.434Q20.076 10.481 19.921 10.450L19.921 10.450L19.456 10.450Q19.053 10.450 18.945 10.311Q18.836 10.171 18.960 9.768L18.960 9.768Q19.921 7.536 21.967 6.854L21.967 6.854Q22.122 6.792 22.510 6.761Q22.897 6.730 23.052 6.637L23.052 6.637Q23.331 6.544 23.424 6.296L23.424 6.296Q23.579 6.079 23.610 5.707L23.610 5.707Q23.641 5.490 23.610 4.994L23.610 4.994L23.610 3.754Q23.610 3.289 23.021 3.289L23.021 3.289Q21.471 3.444 20.386 3.878L20.386 3.878Q19.084 4.405 18.278 5.397L18.278 5.397Q17.410 6.575 16.635 8.001L16.635 8.001Q16.015 9.210 15.364 10.822L15.364 10.822L15.178 11.411Q14.558 13.054 14.217 13.829L14.217 13.829Q13.597 15.100 12.853 15.968L12.853 15.968Q11.954 17.022 10.621 17.332L10.621 17.332Q7.986 17.735 5.103 17.146L5.103 17.146Q4.390 16.991 4.018 16.526Q3.646 16.061 3.646 15.364Q3.646 14.666 4.080 14.170Q4.514 13.674 5.289 13.457L5.289 13.457Q5.878 13.333 7.025 13.302L7.025 13.302Q7.831 13.302 8.234 13.287Q8.637 13.271 8.808 13.101Q8.978 12.930 8.978 12.496L8.978 12.496L8.978 11.938Q8.978 11.070 8.947 10.853L8.947 10.853Q8.885 10.543 8.637 10.481L8.637 10.481Q8.482 10.419 7.800 10.450L7.800 10.450L7.056 10.450Q7.118 10.512 7.087 10.527Q7.056 10.543 6.963 10.543Z"/>',
  "seti:config": '<path d="M23.165 13.645L23.165 13.645Q22.829 13.561 22.199 13.309L22.199 13.309L21.695 13.099Q21.695 12.637 21.632 11.797Q21.569 10.957 21.569 10.495L21.569 10.495Q21.569 10.411 21.632 10.348Q21.695 10.285 21.695 10.201L21.695 10.201L23.165 9.571Q23.543 9.361 23.669 9.004Q23.795 8.647 23.669 8.269L23.669 8.269L22.493 5.623Q22.283 5.203 21.926 5.056Q21.569 4.909 21.191 5.119L21.191 5.119L19.721 5.749Q19.469 5.749 19.469 5.623L19.469 5.623Q19.301 5.371 18.839 4.951L18.839 4.951L18.545 4.699Q18.419 4.573 18.104 4.300Q17.789 4.027 17.621 3.901L17.621 3.901Q17.789 3.649 17.978 3.124Q18.167 2.599 18.293 2.347L18.293 2.347Q18.503 1.843 18.314 1.465Q18.125 1.087 17.621 0.919L17.621 0.919Q17.075 0.793 15.815 0.373L15.815 0.373L15.143 0.121Q14.639-0.089 14.261 0.100Q13.883 0.289 13.715 0.751L13.715 0.751Q13.631 1.087 13.379 1.717L13.379 1.717L13.169 2.221Q12.707 2.221 11.867 2.284Q11.027 2.347 10.565 2.347L10.565 2.347Q10.481 2.347 10.418 2.284Q10.355 2.221 10.271 2.221L10.271 2.221L9.641 0.751Q9.431 0.373 9.074 0.247Q8.717 0.121 8.339 0.247L8.339 0.247L5.693 1.423Q5.273 1.633 5.126 1.990Q4.979 2.347 5.189 2.725L5.189 2.725L5.819 4.195Q5.819 4.447 5.693 4.447L5.693 4.447L5.399 4.699Q5.105 4.909 5.021 5.077L5.021 5.077Q4.853 5.287 4.517 5.686Q4.181 6.085 3.971 6.295L3.971 6.295Q3.677 6.211 3.047 5.959L3.047 5.959L2.543 5.749Q2.039 5.539 1.661 5.728Q1.283 5.917 1.115 6.421L1.115 6.421L0.905 6.925Q0.401 8.185 0.191 8.773Q-0.019 9.361 0.128 9.697Q0.275 10.033 0.821 10.201L0.821 10.201Q1.157 10.285 1.787 10.537L1.787 10.537L2.291 10.747Q2.291 11.209 2.354 12.049Q2.417 12.889 2.417 13.351L2.417 13.351Q2.417 13.435 2.354 13.498Q2.291 13.561 2.291 13.645L2.291 13.645L0.821 14.275Q0.443 14.485 0.317 14.842Q0.191 15.199 0.317 15.577L0.317 15.577L1.493 18.223Q1.703 18.643 2.060 18.790Q2.417 18.937 2.795 18.727L2.795 18.727L4.265 18.097Q4.517 18.097 4.517 18.223L4.517 18.223Q4.685 18.475 5.147 18.895L5.147 18.895L5.441 19.147Q5.567 19.273 5.882 19.525Q6.197 19.777 6.365 19.945L6.365 19.945Q6.239 20.197 6.029 20.722Q5.819 21.247 5.693 21.499L5.693 21.499Q5.483 22.003 5.672 22.381Q5.861 22.759 6.365 22.969L6.365 22.969Q6.659 23.053 7.331 23.305L7.331 23.305Q8.297 23.725 8.864 23.893Q9.431 24.061 9.767 23.935Q10.103 23.809 10.271 23.221L10.271 23.221Q10.355 22.885 10.607 22.255L10.607 22.255L10.817 21.751Q11.279 21.751 12.119 21.688Q12.959 21.625 13.421 21.625L13.421 21.625Q13.505 21.625 13.568 21.688Q13.631 21.751 13.715 21.751L13.715 21.751L14.345 23.221Q14.555 23.599 14.912 23.725Q15.269 23.851 15.647 23.725L15.647 23.725L18.293 22.549Q18.713 22.339 18.860 21.982Q19.007 21.625 18.797 21.247L18.797 21.247L18.167 19.819Q18.167 19.525 18.293 19.525L18.293 19.525Q18.545 19.357 18.965 18.895L18.965 18.895L19.217 18.601Q19.343 18.475 19.595 18.160Q19.847 17.845 20.015 17.719L20.015 17.719Q20.309 17.761 20.939 18.055L20.939 18.055L21.443 18.223Q21.947 18.433 22.325 18.244Q22.703 18.055 22.871 17.551L22.871 17.551Q22.997 17.257 23.249 16.585L23.249 16.585Q23.669 15.619 23.795 15.073L23.795 15.073Q24.257 13.981 23.165 13.645ZM13.967 16.375L13.967 16.375Q12.077 17.173 10.250 16.459Q8.423 15.745 7.541 13.897L7.541 13.897Q6.743 12.007 7.457 10.180Q8.171 8.353 10.019 7.471L10.019 7.471Q11.909 6.673 13.736 7.387Q15.563 8.101 16.445 9.949L16.445 9.949Q17.243 11.839 16.529 13.666Q15.815 15.493 13.967 16.375Z"/>',
  "seti:crystal": '<path d="M17.084 3.165L12.000 0.220L6.916 3.165L1.801 6.110L1.801 17.890L12.000 23.780L22.199 17.890L22.199 6.110L17.084 3.165ZM12.000 11.938L9.334 16.557L6.668 11.938L4.002 7.319L14.666 7.319L12.000 11.938Z"/>',
  "seti:crystal_embedded": '<path d="M17.084 3.165L12.000 0.220L6.916 3.165L1.801 6.110L1.801 17.890L12.000 23.780L22.199 17.890L22.199 6.110L17.084 3.165ZM11.411 15.596L10.140 16.867L4.653 12.248L10.140 7.660L11.411 8.931L7.381 12.248L11.411 15.596ZM12.620 8.931L13.860 7.660L19.347 12.248L13.860 16.867L12.620 15.596L16.619 12.279L12.620 8.931Z"/>',
  "seti:json": '<path d="M0.734 13.269L0.562 10.732Q1.938 10.732 2.497 10.087L2.497 10.087Q2.884 9.614 2.884 8.711L2.884 8.711Q2.884 8.324 2.798 7.571Q2.712 6.819 2.712 6.410Q2.712 6.002 2.669 5.185L2.669 5.185Q2.583 4.454 2.583 4.153L2.583 4.153Q2.583 2.089 3.787 1.099Q4.991 0.111 7.184 0.111L7.184 0.111L8.259 0.111L8.259 2.648L7.700 2.648Q6.754 2.648 6.345 3.185Q5.937 3.723 5.937 4.798L5.937 4.798Q5.937 5.056 6.023 5.572L6.023 5.572Q6.109 6.217 6.109 6.561L6.109 6.561Q6.109 6.819 6.152 7.378L6.152 7.378Q6.238 8.152 6.238 8.582L6.238 8.582Q6.238 10.216 5.550 11.033L5.550 11.033Q4.948 11.764 3.658 12.065L3.658 12.065Q4.948 12.409 5.550 13.097L5.550 13.097Q6.238 13.957 6.238 15.548L6.238 15.548Q6.238 16.021 6.152 16.795L6.152 16.795Q6.066 17.354 6.088 17.612Q6.109 17.870 6.023 18.515L6.023 18.515Q5.937 18.988 5.937 19.203L5.937 19.203Q5.937 20.278 6.345 20.815Q6.754 21.353 7.700 21.353L7.700 21.353L8.259 21.353L8.259 23.890L7.184 23.890Q2.712 23.890 2.712 19.848L2.712 19.848Q2.712 18.386 2.862 17.590Q3.013 16.795 3.013 15.290L3.013 15.290Q3.013 13.269 0.734 13.269L0.734 13.269ZM23.438 10.732L23.438 13.011Q21.159 13.011 21.159 15.032L21.159 15.032Q21.159 15.419 21.224 16.171Q21.288 16.924 21.288 17.311L21.288 17.311Q21.417 18.128 21.417 19.590L21.417 19.590Q21.417 23.632 16.859 23.632L16.859 23.632L15.784 23.632L15.784 21.353L16.300 21.353Q17.246 21.353 17.654 20.815Q18.063 20.278 18.063 19.203Q18.063 18.128 17.934 17.569L17.934 17.569Q17.934 17.225 17.848 16.558Q17.762 15.892 17.762 15.548L17.762 15.548Q17.762 13.957 18.450 13.097L18.450 13.097Q19.052 12.409 20.342 12.065L20.342 12.065Q19.052 11.764 18.450 11.033L18.450 11.033Q17.762 10.216 17.762 8.582L17.762 8.582Q17.762 8.152 17.848 7.378L17.848 7.378Q17.934 6.819 17.934 6.561L17.934 6.561Q18.063 5.873 18.063 4.841Q18.063 3.809 17.633 3.293Q17.203 2.777 16.300 2.648L16.300 2.648L15.784 2.648L15.784 0.111L16.859 0.111Q19.009 0.111 20.213 1.099Q21.417 2.089 21.417 4.153L21.417 4.153Q21.417 4.540 21.352 5.292Q21.288 6.045 21.288 6.432L21.288 6.432Q21.159 7.249 21.116 8.711L21.116 8.711Q21.159 9.614 21.503 10.087L21.503 10.087Q22.062 10.732 23.438 10.732L23.438 10.732Z"/>',
  "seti:css": '<path d="M7.486 23.628L2.845 23.628L4.120 17.253L0.142 17.253L0.142 13.887L4.936 13.887L5.701 9.909L1.570 9.909L1.570 6.594L6.517 6.594L7.792 0.372L12.229 0.372L10.954 6.594L15.442 6.594L16.717 0.372L21.154 0.372L19.880 6.594L23.858 6.594L23.858 9.909L19.267 9.909L18.299 13.887L22.429 13.887L22.429 17.253L17.686 17.253L16.412 23.628L11.924 23.628L13.198 17.253L8.761 17.253L7.486 23.628ZM9.373 13.938L13.861 13.938L14.627 9.909L10.189 9.909L9.373 13.938Z"/>',
  "seti:csv": '<path d="M23.802 0.324L0.198 0.324L0.198 23.676L23.802 23.676L23.802 0.324ZM3.978 6.876L3.978 5.154L10.698 5.154L10.698 6.876L3.978 6.876ZM13.176 6.876L13.176 5.154L19.896 5.154L19.896 6.876L13.176 6.876ZM3.978 10.824L3.978 9.102L10.698 9.102L10.698 10.824L3.978 10.824ZM13.176 10.824L13.176 9.102L19.896 9.102L19.896 10.824L13.176 10.824ZM3.978 14.772L3.978 13.050L10.698 13.050L10.698 14.772L3.978 14.772ZM13.176 14.772L13.176 13.050L19.896 13.050L19.896 14.772L13.176 14.772ZM3.978 18.678L3.978 16.998L10.698 16.998L10.698 18.678L3.978 18.678ZM13.176 18.678L13.176 16.998L19.896 16.998L19.896 18.678L13.176 18.678Z"/>',
  "seti:xls": '<path d="M23.780 3.944L23.818 3.944L23.818 20.094Q23.818 20.132 23.742 20.246Q23.666 20.360 23.666 20.436L23.666 20.436Q23.286 21.044 22.716 21.044L22.716 21.044L13.596 21.044L13.596 23.400Q13.406 23.362 12.988 23.286Q12.570 23.210 12.418 23.172L12.418 23.172Q12 23.096 11.107 22.925Q10.214 22.754 9.758 22.697Q9.302 22.640 8.352 22.450Q7.402 22.260 6.927 22.203Q6.452 22.146 5.502 21.975Q4.552 21.804 4.115 21.747Q3.678 21.690 2.785 21.500Q1.892 21.310 1.474 21.272L1.474 21.272Q1.246 21.196 0.828 21.139Q0.410 21.082 0.182 21.044L0.182 21.044L0.182 3.564Q0.220 3.564 0.410 3.507Q0.600 3.450 0.638 3.450L0.638 3.450Q1.664 2.728 3.374 2.500L3.374 2.500Q3.830 2.424 4.742 2.234L4.742 2.234Q5.426 2.082 5.730 2.044L5.730 2.044L6.034 1.968Q7.364 1.778 8.010 1.550L8.010 1.550Q8.428 1.512 9.321 1.322Q10.214 1.132 10.651 1.075Q11.088 1.018 11.981 0.847Q12.874 0.676 13.368 0.600L13.368 0.600L13.482 0.600L13.482 2.842L22.716 2.842Q23.096 2.842 23.400 3.089Q23.704 3.336 23.780 3.678L23.780 3.678L23.780 3.944ZM22.868 19.714L22.868 3.792L13.482 3.792L13.482 5.236L16.674 5.236L16.674 7.250L13.482 7.250L13.482 7.972L16.674 7.972L16.674 9.986L13.482 9.986L13.482 10.708L16.674 10.708L16.674 12.722L13.482 12.722L13.482 13.558L16.788 13.558L16.788 15.572L13.482 15.572L13.482 16.294L16.674 16.294L16.674 18.308L13.482 18.308L13.482 19.714L22.868 19.714ZM10.366 17.472L10.366 17.472Q10.366 17.434 10.347 17.396Q10.328 17.358 10.252 17.358L10.252 17.358Q9.834 16.522 8.941 14.850Q8.048 13.178 7.630 12.342L7.630 12.342L7.630 12.114Q8.846 9.758 10.252 7.250L10.252 7.250L10.252 7.136L10.138 7.136Q9.530 7.136 9.302 7.250L9.302 7.250Q8.618 7.250 8.124 7.364L8.124 7.364Q8.048 7.364 8.029 7.383Q8.010 7.402 8.010 7.478L8.010 7.478L7.060 9.492L6.338 11.164Q6.300 11.050 6.224 10.746Q6.148 10.442 6.110 10.328L6.110 10.328L5.046 7.744Q4.932 7.554 4.894 7.516Q4.856 7.478 4.647 7.478Q4.438 7.478 3.963 7.535Q3.488 7.592 3.260 7.592L3.260 7.592L2.766 7.592L2.766 7.744L3.146 8.542L4.932 12.114L4.932 12.228Q4.552 12.950 3.754 14.470L3.754 14.470Q3.032 15.800 2.652 16.522L2.652 16.522Q2.652 16.560 2.595 16.636Q2.538 16.712 2.538 16.750L2.538 16.750L3.260 16.750Q3.488 16.750 3.906 16.807Q4.324 16.864 4.552 16.864L4.552 16.864Q4.666 16.864 4.666 16.845Q4.666 16.826 4.666 16.750L4.666 16.750Q5.388 15.344 5.768 14.508L5.768 14.508Q5.806 14.318 5.977 13.957Q6.148 13.596 6.224 13.444L6.224 13.444Q6.224 13.178 6.338 13.064L6.338 13.064L6.338 13.178Q6.376 13.292 6.452 13.501Q6.528 13.710 6.566 13.786L6.566 13.786Q6.870 14.394 7.402 15.610L7.402 15.610L7.896 16.750L7.972 16.864Q8.086 16.978 8.238 16.978L8.238 16.978Q8.542 16.978 9.131 17.054Q9.720 17.130 10.024 17.130L10.024 17.130Q10.100 17.358 10.176 17.415Q10.252 17.472 10.366 17.472ZM17.624 5.236L21.310 5.236L21.310 7.250L17.624 7.250L17.624 5.236ZM21.310 18.536L17.624 18.536L17.624 16.522L21.310 16.522L21.310 18.536ZM21.310 12.950L17.624 12.950L17.624 10.936L21.310 10.936L21.310 12.950ZM17.624 8.086L21.310 8.086L21.310 10.100L17.624 10.100L17.624 8.086ZM17.624 13.786L21.310 13.786L21.310 15.800L17.624 15.800L17.624 13.786Z"/>',
  "seti:cu": '<path d="M0.024 11.875L0.024 11.875Q0.024 8.736 1.745 6.070L1.745 6.070Q3.335 3.533 5.937 2.200Q8.539 0.867 11.248 1.211L11.248 1.211Q14.215 1.555 16.451 3.834L16.451 3.834L13.484 7.188Q11.549 5.898 9.957 5.855L9.957 5.855Q8.539 5.769 7.506 6.715L7.506 6.715Q6.561 7.575 6.088 9.080L6.088 9.080Q5.658 10.499 5.701 12.155Q5.744 13.810 6.303 15.229Q6.861 16.648 7.851 17.379L7.851 17.379Q8.969 18.239 10.345 18.024L10.345 18.024Q11.936 17.809 13.742 16.304L13.742 16.304L16.709 19.701Q14.473 22.238 11.506 22.754L11.506 22.754Q8.754 23.184 6.088 21.851Q3.421 20.518 1.787 17.895L1.787 17.895Q0.024 15.143 0.024 11.875ZM22.084 9.209L23.976 14.971L22.901 14.971L22.471 13.638L20.622 13.638L20.192 14.971L19.117 14.971L21.009 9.209L22.084 9.209ZM20.880 12.692L22.213 12.692L21.524 10.542L20.880 12.692ZM10.044 9.209L10.087 9.209L11.033 9.209L11.033 12.348Q11.033 13.079 11.076 13.294L11.076 13.294Q11.119 13.681 11.355 13.896Q11.591 14.111 11.979 14.111L11.979 14.111Q12.280 14.111 12.495 13.961Q12.710 13.810 12.796 13.552Q12.882 13.294 12.882 12.434L12.882 12.434L12.882 9.209L13.828 9.209L13.828 12.262Q13.828 13.423 13.720 13.939Q13.613 14.455 13.161 14.778Q12.710 15.100 12 15.100Q11.291 15.100 10.861 14.821Q10.431 14.541 10.237 14.047Q10.044 13.552 10.044 12.305L10.044 12.305L10.044 9.209ZM14.817 14.971L14.817 9.209L16.580 9.209Q17.225 9.209 17.569 9.360Q17.913 9.510 18.192 9.854Q18.472 10.198 18.644 10.779Q18.816 11.359 18.816 12.133Q18.816 12.907 18.622 13.466Q18.429 14.025 18.192 14.348Q17.956 14.670 17.569 14.821Q17.182 14.971 16.623 14.971L16.623 14.971L14.817 14.971ZM16.193 10.198L15.806 10.198L15.806 13.982L16.494 13.982Q16.966 13.982 17.182 13.918Q17.397 13.853 17.526 13.681Q17.655 13.509 17.741 13.122Q17.827 12.735 17.827 12.090Q17.827 11.445 17.741 11.123Q17.655 10.800 17.440 10.564Q17.225 10.327 17.010 10.263Q16.795 10.198 16.193 10.198L16.193 10.198Z"/>',
  "seti:cake": '<path d="M23.692 12.305L16.958 13.119Q17.328 14.340 18.179 17.522L18.179 17.522L18.956 20.408L23.692 19.816L23.692 12.305ZM10.372 21.444L8.892 13.933L0.308 14.858L0.308 22.739L10.372 21.444ZM16.033 6.311L16.033 6.311Q15.589 7.236 15.219 7.569L15.219 7.569L15.922 9.900L23.581 8.975L22.989 8.087Q22.249 7.051 21.435 6.163L21.435 6.163Q20.288 4.942 19.178 4.239L19.178 4.239Q17.772 3.351 16.403 2.944L16.403 2.944Q16.810 4.461 16.033 6.311ZM7.708 10.011L7.708 10.011Q5.747 9.826 4.489 8.383L4.489 8.383L0.308 11.639L7.967 10.714Q7.893 10.566 7.838 10.344Q7.782 10.122 7.708 10.011ZM13.998 10.825L13.147 7.680Q13.073 7.421 13.092 7.236Q13.110 7.051 13.258 6.866L13.258 6.866Q13.739 6.200 13.961 5.719L13.961 5.719Q14.775 3.906 13.850 2.500L13.850 2.500Q12.851 0.835 10.853 1.205L10.853 1.205Q10.594 1.205 10.520 1.427Q10.446 1.649 10.631 1.908L10.631 1.908L11.667 3.980L11.667 4.091Q11.704 4.165 11.686 4.202Q11.667 4.239 11.556 4.239L11.556 4.239Q10.150 5.164 9.558 5.497L9.558 5.497Q9.410 5.682 9.225 5.497L9.225 5.497Q8.781 5.016 8.078 4.091L8.078 4.091Q7.930 3.980 7.708 3.795L7.708 3.795L7.486 3.647L7.301 3.610Q7.116 3.610 7.042 3.758L7.042 3.758Q6.561 4.535 6.450 5.497L6.450 5.497Q6.302 6.607 6.783 7.347L6.783 7.347Q7.671 8.716 9.225 8.716L9.225 8.716Q9.447 8.716 9.595 8.790Q9.743 8.864 9.817 9.086L9.817 9.086L10.335 11.417Q12.518 20.556 12.703 21.703L12.703 21.703Q12.777 22.221 13.110 22.572Q13.443 22.924 13.850 22.850L13.850 22.850L14.220 22.776Q14.960 22.702 15.293 22.591L15.293 22.591Q15.885 22.406 16.292 22.036L16.292 22.036Q16.921 21.407 16.736 20.519L16.736 20.519Q16.477 20.038 13.998 10.825L13.998 10.825Z"/>',
  "seti:cake_php": '<path d="M11.924 10.157L11.924 10.157L11.924 13.843L10.518 13.843Q8.542 13.729 7.554 13.615L7.554 13.615Q5.958 13.425 4.666 13.007L4.666 13.007Q3.716 12.779 2.082 12.057L2.082 12.057Q1.588 11.943 0.866 11.487L0.866 11.487Q0.448 11.107 0.258 10.727Q0.068 10.347 0.068 9.815L0.068 9.815L0.068 6.699Q0.068 6.015 0.638 5.407L0.638 5.407Q1.398 4.647 2.918 4.229L2.918 4.229Q5.350 3.355 8.010 3.165L8.010 3.165L8.314 3.127Q11.316 2.899 12.874 2.899L12.874 2.899Q17.092 2.899 20.816 4.115L20.816 4.115Q21.310 4.267 22.222 4.761L22.222 4.761L22.982 5.179Q23.932 5.749 23.932 6.965L23.932 6.965L23.932 9.929Q23.932 11.107 23.096 11.601L23.096 11.601Q22.716 11.867 21.918 12.247L21.918 12.247L21.538 12.437Q21.462 12.513 21.196 12.437L21.196 12.437L21.082 12.437Q15.382 10.993 12.418 10.271L12.418 10.271Q12.152 10.157 11.924 10.157ZM11.924 17.985L11.924 21.101L9.568 21.101Q5.996 20.873 3.602 20.151L3.602 20.151Q3.108 19.999 2.348 19.657L2.348 19.657L1.132 19.049Q0.068 18.365 0.068 17.035L0.068 17.035L0.068 14.299Q0.752 15.249 1.968 15.857L1.968 15.857Q2.652 16.199 4.210 16.693L4.210 16.693Q7.516 17.529 11.468 17.529L11.468 17.529Q11.734 17.529 11.829 17.624Q11.924 17.719 11.924 17.985L11.924 17.985ZM23.818 14.185L23.818 14.185L23.818 17.529Q23.780 18.175 23.096 18.707L23.096 18.707Q21.918 19.429 21.310 19.657L21.310 19.657Q21.234 19.733 20.968 19.695L20.968 19.695L20.702 19.657L12.152 17.529Q12.076 17.529 12.000 17.415L12.000 17.415L11.924 17.301L11.924 13.957Q12.342 14.071 13.121 14.261Q13.900 14.451 14.318 14.565L14.318 14.565Q15.420 14.869 17.624 15.401Q19.828 15.933 20.968 16.199L20.968 16.199L21.424 16.199L21.880 15.933Q22.602 15.515 22.944 15.249L22.944 15.249Q23.476 14.793 23.818 14.185Z"/>',
  "seti:d": '<path d="M23.232 11.712L23.232 11.712Q23.232 17.760 19.464 20.880Q15.696 24 8.400 24L8.400 24L0.768 24L0.768 0L9.312 0Q16.032 0 19.632 3.168L19.632 3.168Q21.456 4.608 22.344 6.792Q23.232 8.976 23.232 11.712ZM17.232 11.856L17.232 11.856Q17.232 4.032 9.456 4.032L9.456 4.032L6.432 4.032L6.432 19.776L9.024 19.776Q13.152 19.776 15.192 17.832Q17.232 15.888 17.232 11.856Z"/>',
  "seti:word": '<path d="M23.875 6.585L23.875 6.585L23.875 3.507Q23.875 3.127 23.609 2.842Q23.343 2.557 22.925 2.557L22.925 2.557L14.223 2.557L14.223 0.429L12.589 0.429Q12.475 0.429 12.285 0.486Q12.095 0.543 11.981 0.543L11.981 0.543Q11.563 0.581 10.727 0.771Q9.891 0.961 9.473 0.999L9.473 0.999Q7.839 1.265 7.117 1.493L7.117 1.493Q5.445 1.721 4.495 1.949L4.495 1.949L1.873 2.329Q0.695 2.557 0.239 2.557L0.239 2.557L0.125 2.557L0.125 21.443Q0.581 21.481 1.531 21.671Q2.481 21.861 2.956 21.918Q3.431 21.975 4.438 22.146Q5.445 22.317 5.920 22.374Q6.395 22.431 7.345 22.621Q8.295 22.811 8.789 22.849L8.789 22.849Q9.967 23.001 11.753 23.457L11.753 23.457Q12.095 23.571 12.931 23.571L12.931 23.571L13.995 23.571L13.995 21.557Q13.995 21.481 14.014 21.462Q14.033 21.443 14.109 21.443L14.109 21.443L22.773 21.443Q23.153 21.443 23.267 21.329L23.267 21.329Q23.609 21.329 23.609 20.949L23.609 20.949Q23.609 20.835 23.666 20.664Q23.723 20.493 23.723 20.379L23.723 20.379L23.723 6.585L23.837 6.699Q23.875 6.699 23.875 6.585ZM10.803 8.371L10.803 8.371L9.739 13.007Q9.587 13.463 9.397 14.413L9.397 14.413Q9.245 15.211 9.131 15.629L9.131 15.629Q9.131 15.705 9.055 15.705L9.055 15.705L9.017 15.743Q8.865 15.819 8.523 15.781L8.523 15.781L8.295 15.743L7.573 15.743Q7.497 15.743 7.478 15.724Q7.459 15.705 7.459 15.629L7.459 15.629Q7.421 15.249 7.231 14.489Q7.041 13.729 7.003 13.349L7.003 13.349Q6.889 12.893 6.699 11.943Q6.509 10.993 6.395 10.499L6.395 10.499Q6.395 10.613 6.338 10.860Q6.281 11.107 6.281 11.221L6.281 11.221L5.559 14.793Q5.559 14.907 5.502 15.211Q5.445 15.515 5.445 15.610Q5.445 15.705 5.426 15.724Q5.407 15.743 5.331 15.743L5.331 15.743Q5.103 15.743 4.628 15.686Q4.153 15.629 3.925 15.629L3.925 15.629Q3.811 15.629 3.792 15.610Q3.773 15.591 3.773 15.515L3.773 15.515Q3.089 11.715 2.595 9.701L2.595 9.701Q2.557 9.511 2.481 9.093Q2.405 8.675 2.367 8.485L2.367 8.485L2.367 8.371L3.773 8.371Q3.887 9.131 4.153 10.689L4.153 10.689Q4.495 12.513 4.609 13.463L4.609 13.463Q4.609 13.349 4.666 13.121Q4.723 12.893 4.723 12.779L4.723 12.779Q4.913 12.057 5.217 10.575Q5.521 9.093 5.673 8.371L5.673 8.371Q5.673 8.295 5.692 8.276Q5.711 8.257 5.825 8.257L5.825 8.257L7.003 8.257Q7.155 8.257 7.212 8.295Q7.269 8.333 7.345 8.485L7.345 8.485Q8.067 11.829 8.409 13.615L8.409 13.615L8.409 13.729Q8.485 13.235 8.656 12.285Q8.827 11.335 8.884 10.898Q8.941 10.461 9.131 9.568Q9.321 8.675 9.359 8.257L9.359 8.257L9.397 8.181Q9.397 8.143 9.473 8.143L9.473 8.143Q10.423 8.143 11.031 8.029L11.031 8.029L11.145 8.029Q10.993 8.029 10.898 8.143Q10.803 8.257 10.803 8.371ZM23.039 3.507L23.039 3.507Q23.039 3.545 23.039 3.545L23.039 3.545L23.039 3.507L23.039 20.721L14.109 20.721L14.109 18.593L21.139 18.593L21.139 17.529L14.375 17.529Q14.261 17.529 14.242 17.510Q14.223 17.491 14.223 17.415L14.223 17.415L14.223 16.313Q14.223 16.237 14.242 16.218Q14.261 16.199 14.375 16.199L14.375 16.199L21.253 16.199L21.253 15.135L14.223 15.135L14.223 13.843L21.139 13.843Q21.215 13.843 21.234 13.824Q21.253 13.805 21.253 13.729L21.253 13.729L21.253 12.893Q21.253 12.817 21.234 12.798Q21.215 12.779 21.139 12.779L21.139 12.779L14.375 12.779Q14.261 12.779 14.242 12.760Q14.223 12.741 14.223 12.665L14.223 12.665L14.223 11.449L21.253 11.449L21.253 10.385L14.489 10.385Q14.375 10.385 14.356 10.366Q14.337 10.347 14.337 10.271L14.337 10.271L14.337 9.207Q14.337 9.131 14.356 9.112Q14.375 9.093 14.489 9.093L14.489 9.093L21.253 9.093L21.253 8.029L14.223 8.029L14.223 6.585L21.139 6.585Q21.215 6.585 21.234 6.566Q21.253 6.547 21.253 6.471L21.253 6.471L21.253 5.635Q21.253 5.559 21.234 5.540Q21.215 5.521 21.139 5.521L21.139 5.521L14.109 5.521L14.109 3.735Q14.109 3.659 14.128 3.640Q14.147 3.621 14.223 3.621L14.223 3.621L22.925 3.621L23.001 3.431Q23.039 3.431 23.039 3.507Z"/>',
  "seti:elixir": '<path d="M13.540 5.776L13.540 5.776Q13.995 6.721 14.800 7.736L14.800 7.736Q15.290 8.331 16.375 9.451L16.375 9.451Q17.530 10.711 18.055 11.341L18.055 11.341Q18.895 12.461 19.280 13.511L19.280 13.511Q19.735 14.806 19.595 16.276L19.595 16.276Q19.385 19.006 18.055 20.826L18.055 20.826Q17.005 22.331 15.325 23.101L15.325 23.101Q13.995 23.731 12.542 23.783Q11.090 23.836 9.725 23.416L9.725 23.416Q7.905 22.891 6.680 21.631L6.680 21.631Q5.140 20.056 4.580 17.501L4.580 17.501Q4.090 15.261 4.755 12.321L4.755 12.321Q5.385 9.731 6.785 7.001L6.785 7.001Q8.115 4.481 9.725 2.608Q11.335 0.736 12.630 0.211L12.630 0.211Q12.525 1.436 12.770 2.976L12.770 2.976Q13.015 4.656 13.540 5.776ZM10.495 21.736L10.495 21.736Q11.930 22.051 12.490 22.051L12.490 22.051Q13.295 22.086 13.400 21.666L13.400 21.666Q13.645 20.581 7.485 19.916L7.485 19.916Q8.045 20.476 8.972 21.053Q9.900 21.631 10.495 21.736Z"/>',
  "seti:elixir_script": '<path d="M15.570 8.681L15.570 8.646Q15.850 8.926 16.375 9.451L16.375 9.451Q17.530 10.711 18.055 11.341L18.055 11.341Q18.895 12.461 19.280 13.511L19.280 13.511Q19.735 14.806 19.595 16.276L19.595 16.276Q19.385 19.006 18.055 20.826L18.055 20.826Q17.005 22.331 15.325 23.101L15.325 23.101Q13.995 23.731 12.542 23.783Q11.090 23.836 9.725 23.416L9.725 23.416Q7.905 22.891 6.680 21.631L6.680 21.631Q5.140 20.056 4.580 17.501L4.580 17.501Q4.090 15.261 4.755 12.321L4.755 12.321Q5.385 9.731 6.785 7.001L6.785 7.001Q8.115 4.481 9.725 2.608Q11.335 0.736 12.630 0.211L12.630 0.211Q12.525 1.366 12.735 2.871L12.735 2.871Q12.980 4.446 13.470 5.601L13.470 5.601Q13.085 5.566 12.735 5.566L12.735 5.566Q10.530 5.566 9.147 6.756Q7.765 7.946 7.765 9.836L7.765 9.836Q7.765 10.921 8.307 11.551Q8.850 12.181 10.495 12.881L10.495 12.881L11.510 13.301Q12.070 13.546 12.385 13.931Q12.700 14.316 12.700 14.841L12.700 14.841Q12.700 15.716 12.035 16.206Q11.370 16.696 10.250 16.696L10.250 16.696Q9.340 16.696 8.412 16.328Q7.485 15.961 6.680 15.296L6.680 15.296L6.190 17.886Q7.170 18.341 8.220 18.586L8.220 18.586Q9.165 18.796 10.145 18.796L10.145 18.796Q12.490 18.796 13.872 17.623Q15.255 16.451 15.255 14.491L15.255 14.491Q15.255 13.336 14.677 12.566Q14.100 11.796 12.840 11.236L12.840 11.236L11.790 10.781Q10.215 10.046 10.215 9.311Q10.215 8.576 10.845 8.103Q11.475 7.631 12.455 7.631Q13.435 7.631 14.222 7.893Q15.010 8.156 15.570 8.681L15.570 8.681ZM10.495 21.736L10.495 21.736Q11.930 22.051 12.490 22.051L12.490 22.051Q13.295 22.086 13.400 21.666L13.400 21.666Q13.645 20.581 7.485 19.916L7.485 19.916Q8.045 20.476 8.972 21.053Q9.900 21.631 10.495 21.736Z"/>',
  "seti:hex": '<path d="M23.856 12L17.928 22.260L6.072 22.260L0.144 12L6.072 1.740L17.928 1.740L23.856 12ZM8.998 17.206L15.002 17.206L18.004 12L15.002 6.794L8.998 6.794L5.996 12L8.998 17.206Z"/>',
  "seti:elm": '<path d="M23.193 23.856L12.000 12.663L0.807 23.856L23.193 23.856ZM23.856 13.248L18.864 18.240L23.856 23.193L23.856 13.248ZM0.144 23.193L11.337 12L0.144 0.807L0.144 23.193ZM13.326 0.144L23.856 10.674L23.856 0.144L13.326 0.144ZM12.663 12L18.240 6.384L23.817 11.961L18.240 17.577L12.663 12ZM12.000 0.144L0.807 0.144L5.955 5.331L17.187 5.331L12.000 0.144ZM6.891 6.228L12.000 11.337L17.109 6.228L6.891 6.228Z"/>',
  "seti:favicon": '<path d="M8.295 8.200L11.981 0.714L15.667 8.200L23.875 9.378L17.909 15.078L19.353 23.286L11.981 19.486L4.609 23.286L6.053 15.078L0.125 9.378L8.295 8.200Z"/>',
  "seti:f-sharp": '<path d="M11.496 23.130L0.198 11.874L11.328 0.702L11.328 6.330L5.826 11.874L11.496 17.502L11.496 23.130ZM11.496 15.780L7.422 11.874L11.496 7.800L11.496 15.780ZM12.252 23.298L23.802 11.874L12.252 0.702L12.252 6.330L17.922 12L12.252 17.628L12.252 23.298Z"/>',
  "seti:git": '<path d="M0.355 12.231L0.355 12.231L0.355 11.853Q0.397 11.517 0.565 11.265L0.565 11.265Q0.691 11.097 0.943 10.803L0.943 10.803L1.279 10.425L7.831 3.831L7.873 3.873Q7.957 3.873 7.957 3.957L7.957 3.957L10.309 6.351Q10.519 6.519 10.309 6.729L10.309 6.729Q10.225 7.317 10.435 7.863Q10.645 8.409 11.107 8.703L11.107 8.703Q11.275 8.787 11.317 8.892Q11.359 8.997 11.359 9.207L11.359 9.207L11.359 15.003Q11.359 15.255 11.107 15.507L11.107 15.507Q10.603 15.843 10.372 16.389Q10.141 16.935 10.330 17.502Q10.519 18.069 10.981 18.447Q11.443 18.825 12.031 18.825Q12.619 18.825 13.081 18.489Q13.543 18.153 13.732 17.586Q13.921 17.019 13.753 16.473Q13.585 15.927 13.081 15.507L13.081 15.507Q12.913 15.423 12.871 15.318Q12.829 15.213 12.829 15.003L12.829 15.003L12.829 9.081L12.955 9.081L15.055 11.181Q15.139 11.265 15.139 11.391L15.139 11.391L15.181 11.475L15.181 12.231Q15.265 13.029 15.874 13.470Q16.483 13.911 17.281 13.806Q18.079 13.701 18.562 13.029Q19.045 12.357 18.835 11.601L18.835 11.601Q18.751 10.929 18.100 10.488Q17.449 10.047 16.735 10.131L16.735 10.131Q16.483 10.131 16.231 10.005L16.231 10.005L14.005 7.779Q13.879 7.653 13.879 7.401L13.879 7.401Q14.005 6.813 13.711 6.267Q13.417 5.721 12.871 5.448Q12.325 5.175 11.779 5.301L11.779 5.301Q11.359 5.301 11.359 5.175L11.359 5.175Q9.805 3.579 9.007 2.907L9.007 2.907Q8.797 2.739 9.007 2.529L9.007 2.529Q9.469 2.193 10.183 1.353L10.183 1.353L10.729 0.807Q11.905-0.369 13.081 0.807L13.081 0.807L23.035 10.803Q24.253 11.979 23.035 13.155L23.035 13.155L13.291 22.941Q12.913 23.319 12.745 23.445L12.745 23.445Q12.409 23.739 12.031 23.781L12.031 23.781L11.779 23.781L11.569 23.697Q11.065 23.487 10.855 23.277L10.855 23.277L10.057 22.479Q8.881 21.387 8.335 20.757L8.335 20.757L1.153 13.575Q1.069 13.365 0.775 13.029L0.775 13.029Q0.397 12.525 0.355 12.231Z"/>',
  "seti:go": '<path d="M6.119 10.273L1.933 10.247Q1.855 10.247 1.881 10.195L1.881 10.195L2.141 9.883Q2.167 9.831 2.271 9.831L2.271 9.831L6.379 9.831Q6.457 9.831 6.431 9.883L6.431 9.883L6.223 10.195Q6.171 10.273 6.119 10.273L6.119 10.273ZM5.651 11.313L0.191 11.313Q0.113 11.313 0.139 11.261L0.139 11.261L0.399 10.949Q0.425 10.897 0.529 10.897L0.529 10.897L5.781 10.897Q5.859 10.897 5.833 10.949L5.833 10.949L5.755 11.235Q5.729 11.313 5.651 11.313L5.651 11.313ZM5.495 12.379L2.973 12.379Q2.895 12.379 2.947 12.301L2.947 12.301L3.103 12.015Q3.155 11.963 3.233 11.963L3.233 11.963L5.521 11.963Q5.599 11.963 5.599 12.041L5.599 12.041L5.573 12.301Q5.573 12.379 5.495 12.379L5.495 12.379ZM14.985 10.039L14.985 10.039Q14.569 10.143 13.893 10.325L13.893 10.325L13.009 10.559Q12.905 10.585 12.853 10.572Q12.801 10.559 12.697 10.429L12.697 10.429Q12.411 10.117 12.151 9.987L12.151 9.987Q11.111 9.493 10.071 10.169L10.071 10.169Q8.875 10.949 8.875 12.379L8.875 12.379Q8.901 13.055 9.330 13.575Q9.759 14.095 10.435 14.173L10.435 14.173Q11.605 14.329 12.411 13.419L12.411 13.419L12.723 13.003L10.487 13.003Q10.305 13.003 10.253 12.899Q10.201 12.795 10.279 12.639L10.279 12.639Q10.591 11.911 10.851 11.391L10.851 11.391Q10.955 11.209 11.137 11.209L11.137 11.209L15.349 11.209L15.349 11.521Q15.323 11.937 15.297 12.145L15.297 12.145Q15.089 13.419 14.335 14.407L14.335 14.407Q13.061 16.097 11.033 16.357L11.033 16.357Q9.265 16.591 7.939 15.603L7.939 15.603Q6.665 14.641 6.457 13.029L6.457 13.029Q6.249 11.209 7.445 9.649L7.445 9.649Q8.693 8.011 10.695 7.647L10.695 7.647Q12.437 7.335 13.737 8.219L13.737 8.219Q14.647 8.817 15.089 9.857L15.089 9.857Q15.193 9.987 14.985 10.039ZM19.119 16.409L18.807 16.435Q17.117 16.409 15.973 15.421L15.973 15.421Q14.933 14.511 14.725 13.185L14.725 13.185Q14.439 11.313 15.661 9.701L15.661 9.701Q16.285 8.869 17.065 8.414Q17.845 7.959 18.911 7.777L18.911 7.777Q20.835 7.439 22.226 8.375Q23.617 9.311 23.825 10.923L23.825 10.923Q24.111 13.211 22.499 14.849L22.499 14.849Q21.381 15.993 19.717 16.331L19.717 16.331Q19.509 16.357 19.119 16.409L19.119 16.409ZM21.537 11.755L21.537 11.755Q21.537 11.729 21.537 11.651L21.537 11.651Q21.537 11.469 21.511 11.391L21.511 11.391Q21.355 10.533 20.666 10.091Q19.977 9.649 19.145 9.857L19.145 9.857Q17.507 10.221 17.143 11.859L17.143 11.859Q16.987 12.535 17.286 13.146Q17.585 13.757 18.209 14.043L18.209 14.043Q19.145 14.459 20.081 13.965L20.081 13.965Q21.459 13.263 21.537 11.755Z"/>',
  "seti:godot": '<path d="M9.606 0.870L9.606 0.870Q7.800 1.248 6.456 1.920L6.456 1.920Q6.498 3.390 6.624 4.524L6.624 4.524L6.288 4.734Q5.742 5.070 5.490 5.280L5.490 5.280L5.280 5.406Q4.692 5.910 4.398 6.162L4.398 6.162Q3.390 5.490 2.298 4.944L2.298 4.944Q0.996 6.372 0.198 7.716L0.198 7.716Q1.038 9.018 1.626 9.774L1.626 9.774L1.626 16.032L5.490 16.410Q5.658 16.410 5.763 16.515Q5.868 16.620 5.868 16.788L5.868 16.788L5.994 18.468L9.354 18.720L9.564 17.166Q9.606 16.998 9.711 16.893Q9.816 16.788 9.984 16.788L9.984 16.788L14.016 16.788Q14.184 16.788 14.289 16.893Q14.394 16.998 14.436 17.166L14.436 17.166L14.646 18.720L18.006 18.468L18.132 16.788Q18.132 16.620 18.237 16.515Q18.342 16.410 18.510 16.410L18.510 16.410L22.374 16.032L22.374 9.774Q23.088 8.850 23.802 7.716L23.802 7.716Q23.004 6.372 21.702 4.944L21.702 4.944Q20.610 5.490 19.602 6.162L19.602 6.162Q19.308 5.868 18.678 5.406L18.678 5.406L18.510 5.280Q18.258 5.070 17.712 4.734L17.712 4.734L17.334 4.524Q17.502 3.222 17.544 1.920L17.544 1.920Q16.200 1.248 14.394 0.870L14.394 0.870Q13.764 1.962 13.218 3.138L13.218 3.138Q12.630 3.054 12 3.054L12 3.054L12 3.054Q11.370 3.054 10.782 3.138L10.782 3.138Q10.236 1.962 9.606 0.870ZM6.582 10.026L6.582 10.026Q7.506 10.026 8.178 10.698Q8.850 11.370 8.850 12.315Q8.850 13.260 8.178 13.953Q7.506 14.646 6.561 14.646Q5.616 14.646 4.923 13.953Q4.230 13.260 4.230 12.315Q4.230 11.370 4.923 10.698Q5.616 10.026 6.582 10.026ZM17.418 10.026L17.418 10.026Q18.384 10.026 19.056 10.698Q19.728 11.370 19.728 12.315Q19.728 13.260 19.056 13.953Q18.384 14.646 17.439 14.646Q16.494 14.646 15.801 13.953Q15.108 13.260 15.108 12.315Q15.108 11.370 15.801 10.698Q16.494 10.026 17.418 10.026ZM12 11.370L12 11.370Q12.294 11.370 12.525 11.559Q12.756 11.748 12.756 12.042L12.756 12.042L12.756 14.184Q12.756 14.436 12.525 14.646Q12.294 14.856 12 14.856Q11.706 14.856 11.475 14.646Q11.244 14.436 11.244 14.184L11.244 14.184L11.244 12.042Q11.244 11.748 11.475 11.559Q11.706 11.370 12 11.370ZM22.374 16.872L18.930 17.208L18.804 18.888Q18.804 19.056 18.699 19.161Q18.594 19.266 18.426 19.266L18.426 19.266L14.310 19.560Q14.142 19.560 14.037 19.476Q13.932 19.392 13.890 19.224L13.890 19.224L13.680 17.628L10.320 17.628L10.110 19.224Q10.068 19.392 9.942 19.497Q9.816 19.602 9.648 19.560L9.648 19.560L5.574 19.266Q5.406 19.266 5.301 19.161Q5.196 19.056 5.196 18.888L5.196 18.888L5.070 17.208L1.626 16.872L1.626 17.712Q1.626 20.358 4.650 21.786L4.650 21.786Q7.464 23.130 12 23.130L12 23.130L12 23.130Q16.536 23.130 19.350 21.786L19.350 21.786Q22.374 20.358 22.374 17.712L22.374 17.712L22.374 16.872ZM8.304 12.462L8.304 12.462Q8.346 12.882 8.136 13.239Q7.926 13.596 7.569 13.827Q7.212 14.058 6.792 14.058Q6.372 14.058 6.015 13.827Q5.658 13.596 5.448 13.239Q5.238 12.882 5.238 12.462L5.238 12.462Q5.280 11.832 5.721 11.391Q6.162 10.950 6.792 10.950Q7.422 10.950 7.863 11.391Q8.304 11.832 8.304 12.462ZM15.696 12.462L15.696 12.462Q15.696 13.092 16.137 13.533Q16.578 13.974 17.208 13.974Q17.838 13.974 18.300 13.533Q18.762 13.092 18.762 12.462Q18.762 11.832 18.300 11.370Q17.838 10.908 17.208 10.908Q16.578 10.908 16.137 11.370Q15.696 11.832 15.696 12.462Z"/>',
  "seti:gradle": '<path d="M16.344 11.229L16.344 11.229L15.197 10.640L15.197 10.640Q15.197 10.361 15.414 10.144Q15.631 9.927 15.894 9.927Q16.158 9.927 16.344 10.067Q16.530 10.206 16.607 10.423Q16.685 10.640 16.607 10.857Q16.530 11.074 16.344 11.229ZM22.389 4.502L22.389 4.502Q21.707 3.789 20.777 3.541Q19.847 3.293 18.917 3.510Q17.987 3.727 17.243 4.409L17.243 4.409Q17.150 4.502 17.150 4.657Q17.150 4.812 17.243 4.905L17.243 4.905L17.708 5.370Q17.801 5.463 17.940 5.479Q18.080 5.494 18.173 5.401L18.173 5.401Q18.731 4.998 19.444 4.998L19.444 4.998Q20.312 4.998 20.947 5.618Q21.583 6.238 21.583 7.122Q21.583 8.005 20.978 8.594Q20.374 9.183 19.661 9.276L19.661 9.276Q19.041 9.307 18.204 8.997L18.204 8.997Q17.677 8.780 16.499 8.191L16.499 8.191Q14.639 7.261 13.554 6.889L13.554 6.889Q11.694 6.238 9.834 6.331L9.834 6.331Q7.602 6.424 5.184 7.571L5.184 7.571Q4.719 7.788 4.548 8.300Q4.378 8.811 4.657 9.245L4.657 9.245L6.176 11.911Q6.424 12.345 6.904 12.469Q7.385 12.593 7.819 12.345L7.819 12.345L7.850 12.345L7.819 12.345L8.501 11.973L9.214 11.508Q10.020 10.950 10.640 10.392L10.640 10.392Q10.733 10.299 10.872 10.284Q11.012 10.268 11.136 10.361L11.136 10.361L11.136 10.361Q11.260 10.454 11.260 10.625Q11.260 10.795 11.136 10.888L11.136 10.888Q10.082 11.849 8.873 12.593L8.873 12.593L8.191 12.996Q7.478 13.368 6.718 13.167Q5.959 12.965 5.556 12.283L5.556 12.283L4.130 9.772Q1.929 11.322 0.968 13.988L0.968 13.988Q-0.086 16.840 0.565 20.312L0.565 20.312Q0.596 20.436 0.689 20.514Q0.782 20.591 0.906 20.591L0.906 20.591L2.549 20.591Q2.704 20.591 2.797 20.498Q2.890 20.405 2.921 20.281L2.921 20.281Q3.014 19.382 3.696 18.778Q4.378 18.173 5.292 18.173Q6.207 18.173 6.889 18.778Q7.571 19.382 7.695 20.281L7.695 20.281Q7.695 20.405 7.803 20.498Q7.912 20.591 8.036 20.591L8.036 20.591L9.648 20.591Q9.772 20.591 9.865 20.498Q9.958 20.405 9.989 20.281L9.989 20.281Q10.113 19.382 10.795 18.778Q11.477 18.173 12.376 18.173Q13.275 18.173 13.957 18.778Q14.639 19.382 14.763 20.281L14.763 20.281Q14.794 20.405 14.887 20.498Q14.980 20.591 15.104 20.591L15.104 20.591L16.685 20.591Q16.840 20.591 16.948 20.483Q17.057 20.374 17.057 20.250L17.057 20.250Q17.088 18.359 17.584 16.840L17.584 16.840Q18.204 15.042 19.413 14.143L19.413 14.143Q22.110 12.097 23.133 9.958L23.133 9.958Q23.939 8.253 23.567 6.610L23.567 6.610Q23.257 5.370 22.389 4.502Z"/>',
  "seti:grails": '<path d="M11.488 18.832L11.488 18.832L11.200 18.832Q11.104 18.736 10.784 18.736L10.784 18.736L9.792 18.448Q9.568 18.288 9.504 18.128Q9.440 17.968 9.600 17.744L9.600 17.744Q9.792 17.456 10.016 16.848L10.016 16.848Q10.432 15.856 10.624 15.184L10.624 15.184Q10.848 14.224 10.688 13.360L10.688 13.360Q10.528 11.728 9.088 11.168Q7.648 10.608 6.912 9.840L6.912 9.840Q5.728 8.752 5.184 7.760L5.184 7.760Q4.544 6.544 4.608 5.136L4.608 5.136L19.392 5.136Q19.392 6.736 18.688 7.856L18.688 7.856Q17.472 10.032 14.912 11.152L14.912 11.152Q13.344 11.920 13.216 13.552L13.216 13.552Q13.120 14.480 13.472 15.568L13.472 15.568Q13.728 16.304 14.304 17.456L14.304 17.456Q14.528 17.872 14.448 18.048Q14.368 18.224 13.888 18.448L13.888 18.448L13.408 18.640Q13.248 18.704 12.896 18.752Q12.544 18.800 12.384 18.864L12.384 18.864L12 18.864Q11.840 18.672 11.488 18.832ZM24 9.360L24 9.936Q23.872 10.064 23.776 10.416L23.776 10.416Q23.744 10.576 23.712 10.640L23.712 10.640Q22.912 12.400 21.312 12.848L21.312 12.848Q20.288 13.104 20.288 14.352L20.288 14.352Q20.224 14.896 20.416 15.472L20.416 15.472Q20.512 15.856 20.800 16.560L20.800 16.560Q21.024 17.008 20.928 17.184Q20.832 17.360 20.288 17.456L20.288 17.456Q19.200 17.616 18.304 17.360L18.304 17.360Q17.824 17.200 18.112 16.752L18.112 16.752Q18.432 16.144 18.592 15.664L18.592 15.664Q18.784 15.056 18.688 14.448L18.688 14.448Q18.624 13.680 18.416 13.408Q18.208 13.136 17.696 13.040L17.696 13.040Q17.344 13.040 17.216 12.752L17.216 12.752Q17.248 12.752 17.296 12.704Q17.344 12.656 17.408 12.656L17.408 12.656Q19.616 11.824 20.896 9.552L20.896 9.552Q20.960 9.424 21.072 9.392Q21.184 9.360 21.408 9.360L21.408 9.360L24 9.360ZM0 10.160L0 9.232L2.496 9.232Q2.688 9.232 2.752 9.264Q2.816 9.296 2.912 9.456L2.912 9.456Q4.160 11.536 6.688 12.656L6.688 12.656Q6.656 12.688 6.560 12.736Q6.464 12.784 6.400 12.848L6.400 12.848Q5.792 13.072 5.552 13.472Q5.312 13.872 5.312 14.544L5.312 14.544Q5.312 15.344 5.792 16.336L5.792 16.336Q6.016 16.752 6.096 16.880Q6.176 17.008 6.160 17.120Q6.144 17.232 6.016 17.232L6.016 17.232Q4.640 17.840 3.296 17.232L3.296 17.232Q3.104 17.232 3.056 17.120Q3.008 17.008 3.104 16.752L3.104 16.752Q3.488 15.952 3.648 15.536L3.648 15.536Q3.872 14.864 3.792 14.256Q3.712 13.648 3.520 13.424Q3.328 13.200 2.816 13.040L2.816 13.040Q1.056 12.528 0.192 10.448L0.192 10.448Q0.160 10.416 0.144 10.288Q0.128 10.160 0 10.160L0 10.160Z"/>',
  "seti:graphql": '<path d="M21.337 14.958L21.337 14.958Q21.269 14.958 21.201 14.890L21.201 14.890Q20.963 14.754 20.793 14.754L20.793 14.754L20.793 9.246Q21.133 9.246 21.337 9.042L21.337 9.042Q22.085 8.600 22.323 7.767Q22.561 6.934 22.119 6.169Q21.677 5.404 20.827 5.183Q19.977 4.962 19.229 5.404L19.229 5.404Q18.923 5.540 18.787 5.846L18.787 5.846L13.993 3.092Q13.993 2.888 14.061 2.718Q14.129 2.548 14.095 2.446L14.095 2.446Q14.129 1.562 13.500 0.933Q12.871 0.304 11.987 0.304Q11.103 0.304 10.491 0.933Q9.879 1.562 9.879 2.446L9.879 2.446Q9.879 2.854 9.981 3.092L9.981 3.092L5.187 5.846Q5.119 5.676 4.881 5.506L4.881 5.506L4.779 5.404Q3.997 4.962 3.147 5.183Q2.297 5.404 1.889 6.135Q1.481 6.866 1.702 7.699Q1.923 8.532 2.637 9.042L2.637 9.042L2.773 9.110Q3.011 9.246 3.181 9.246L3.181 9.246L3.181 14.754Q2.841 14.754 2.637 14.992L2.637 14.992Q1.889 15.400 1.651 16.233Q1.413 17.066 1.855 17.831Q2.297 18.596 3.147 18.817Q3.997 19.038 4.779 18.596L4.779 18.596Q5.051 18.460 5.187 18.154L5.187 18.154L9.981 20.942Q9.981 21.112 9.930 21.282Q9.879 21.452 9.845 21.554L9.845 21.554Q9.879 22.438 10.491 23.067Q11.103 23.696 11.987 23.696Q12.871 23.696 13.500 23.067Q14.129 22.438 14.129 21.554L14.129 21.554Q14.129 21.146 13.993 20.942L13.993 20.942L18.787 18.154Q18.889 18.392 19.331 18.596L19.331 18.596Q20.045 19.004 20.878 18.783Q21.711 18.562 22.187 17.848L22.187 17.848Q22.595 17.134 22.323 16.301Q22.051 15.468 21.337 14.958ZM18.243 16.352L5.731 16.352Q5.731 16.046 5.493 15.808L5.493 15.808Q5.391 15.604 5.187 15.400L5.187 15.400L11.443 4.452Q11.579 4.452 11.817 4.520L11.817 4.520L11.987 4.554Q12.429 4.554 12.531 4.452L12.531 4.452L18.787 15.400Q18.481 15.706 18.481 15.808L18.481 15.808L18.379 15.978Q18.243 16.216 18.243 16.352L18.243 16.352ZM13.585 3.806L18.243 6.594Q18.073 7.512 18.481 8.158L18.481 8.158Q18.957 8.974 19.739 9.144L19.739 9.144L19.739 14.652L19.637 14.652L13.483 3.908L13.585 3.806ZM5.629 6.696L10.491 3.806Q10.491 3.840 10.491 3.874L10.491 3.874L10.491 3.806L4.235 14.754L4.133 14.754L4.133 9.246Q4.915 9.076 5.391 8.294L5.391 8.294Q5.799 7.614 5.629 6.696L5.629 6.696ZM18.243 17.406L13.483 20.194Q12.837 19.548 11.987 19.548L11.987 19.548Q10.967 19.548 10.491 20.194L10.491 20.194L5.731 17.406L5.731 17.304L18.243 17.304L18.243 17.406Z"/>',
  "seti:hacklang": '<path d="M11.252 0.202L11.252 0.202L11.252 6.900Q11.252 7.104 11.150 7.206L11.150 7.206L4.350 14.006L4.316 14.074Q4.282 14.142 4.248 14.142L4.248 14.142L4.248 7.342Q4.248 7.240 4.248 7.223Q4.248 7.206 4.350 7.206L4.350 7.206Q5.506 6.050 7.784 3.721Q10.062 1.392 11.252 0.202ZM19.650 9.994L19.752 9.994L19.752 16.794Q19.752 16.862 19.735 16.879Q19.718 16.896 19.650 16.896L19.650 16.896L12.748 23.798L12.612 23.798L12.612 16.998Q12.612 16.930 12.629 16.913Q12.646 16.896 12.748 16.896L12.748 16.896Q13.904 15.774 16.216 13.462Q18.528 11.150 19.752 9.994L19.752 9.994L19.650 9.994ZM12.748 8.396L19.412 8.396L12.612 15.196L12.612 8.498Q12.612 8.430 12.629 8.413Q12.646 8.396 12.748 8.396L12.748 8.396ZM11.354 8.702L11.354 8.702L11.354 15.400Q11.354 15.468 11.337 15.485Q11.320 15.502 11.252 15.502L11.252 15.502L4.554 15.502Q7.886 12.034 11.354 8.702ZM4.248 23.594L4.248 23.594Q4.248 23.560 4.248 23.560L4.248 23.560L4.248 23.594L4.248 16.896Q4.248 16.828 4.248 16.811Q4.248 16.794 4.350 16.794L4.350 16.794L11.014 16.794L8.804 19.038Q5.778 22.098 4.248 23.594Z"/>',
  "seti:haml": '<path d="M17.267 10.696L17.267 10.696Q16.679 10.444 16.595 9.772L16.595 9.772Q16.511 9.268 16.679 8.638L16.679 8.638L16.889 8.050L18.317 6.748L18.569 6.790Q18.863 6.790 19.094 6.643Q19.325 6.496 19.409 6.286Q19.493 6.076 19.493 5.866L19.493 5.866L19.493 5.698L20.585 4.480Q20.627 4.396 20.543 4.270Q20.459 4.144 20.186 3.871Q19.913 3.598 19.367 3.199Q18.821 2.800 18.359 2.632L18.359 2.632Q18.023 2.464 17.771 2.485Q17.519 2.506 17.393 2.590L17.393 2.590L16.091 3.598L15.839 3.598Q15.587 3.640 15.419 3.724Q15.251 3.808 15.335 4.102L15.335 4.102Q15.377 4.270 15.419 4.396L15.419 4.396L10.043 8.848L7.313 2.548L7.397 2.380Q7.523 2.128 7.481 1.897Q7.439 1.666 7.229 1.540L7.229 1.540L7.019 1.498Q6.599 0.742 6.305 0.448L6.305 0.448Q6.179 0.322 6.095 0.322L6.095 0.322L6.095 0.322Q4.709-0.014 3.701 0.574L3.701 0.574Q3.197 0.868 2.945 1.246L2.945 1.246L2.945 1.246Q2.861 1.330 2.987 1.750L2.987 1.750L3.113 2.170L3.029 2.212Q2.945 2.296 2.924 2.464Q2.903 2.632 2.945 2.926L2.945 2.926Q3.113 3.514 3.449 3.556L3.449 3.556Q3.617 3.556 3.743 3.472L3.743 3.472L7.313 11.326Q7.313 11.998 4.541 22.372L4.541 22.372L4.541 22.372Q5.843 23.758 7.943 23.800L7.943 23.800Q8.993 23.800 9.791 23.548L9.791 23.548L9.791 23.548Q9.791 22.246 11.345 14.644L11.345 14.644L11.345 14.644Q12.479 15.652 13.865 16.114L13.865 16.114Q14.789 16.450 15.545 16.450L15.545 16.450Q15.545 16.996 15.671 17.374L15.671 17.374L16.091 17.500Q16.595 17.584 17.099 17.584L17.099 17.584Q17.813 17.584 18.359 17.332L18.359 17.332Q19.031 16.996 19.493 16.324L19.493 16.324Q19.619 16.198 19.619 15.946L19.619 15.946L19.997 15.736Q20.417 15.484 20.711 15.148L20.711 15.148Q21.089 14.686 21.089 14.098L21.089 14.098Q21.089 12.880 19.661 11.914L19.661 11.914Q18.821 11.326 17.267 10.696ZM19.913 15.400L19.913 15.400Q19.997 15.022 19.955 14.644L19.955 14.644Q19.871 14.350 19.745 14.140L19.745 14.140L19.619 13.972L19.535 14.182Q19.409 14.434 19.115 14.686L19.115 14.686Q18.695 14.980 18.044 15.148Q17.393 15.316 16.931 15.274L16.931 15.274Q16.595 15.190 16.385 15.022L16.385 15.022L16.217 14.896L16.049 15.148Q15.839 15.484 15.713 15.820L15.713 15.820Q12.815 15.316 11.513 13.384L11.513 13.384L11.513 13.300Q11.345 12.922 11.639 11.998L11.639 11.998L15.545 9.100Q15.377 10.276 16.385 11.032L16.385 11.032Q16.889 11.452 17.393 11.620L17.393 11.620L18.191 11.914Q19.073 12.376 19.619 12.838L19.619 12.838Q20.417 13.510 20.417 14.224L20.417 14.224Q20.501 14.686 20.291 15.022L20.291 15.022Q20.165 15.274 19.913 15.400Z"/>',
  "seti:mustache": '<path d="M2.990 11.701L2.990 11.701Q2.990 11.259 2.888 11.157L2.888 11.157Q2.718 10.987 2.463 11.004Q2.208 11.021 2.140 11.259L2.140 11.259Q1.902 11.667 2.106 12.024Q2.310 12.381 2.786 12.551L2.786 12.551Q3.126 12.619 3.381 12.585Q3.636 12.551 3.840 12.313L3.840 12.313Q4.928 11.463 5.438 10.953L5.438 10.953L5.744 10.681Q6.356 10.137 6.696 9.933L6.696 9.933Q7.240 9.525 7.784 9.355L7.784 9.355Q9.994 8.607 11.388 9.865L11.388 9.865L12.238 10.715Q12.340 10.511 12.544 10.307L12.544 10.307Q13.564 9.151 15.128 9.151L15.128 9.151Q16.862 9.151 18.188 10.307L18.188 10.307Q18.494 10.579 19.089 11.106Q19.684 11.633 19.990 11.905L19.990 11.905Q20.500 12.381 21.044 12.551L21.044 12.551Q21.452 12.619 21.809 12.432Q22.166 12.245 22.319 11.871Q22.472 11.497 22.132 11.157L22.132 11.157Q21.826 10.885 21.486 11.055L21.486 11.055Q21.316 11.123 21.248 11.276Q21.180 11.429 21.282 11.565L21.282 11.565L21.282 11.701Q20.840 11.395 20.840 10.851Q20.840 10.307 21.486 10.103L21.486 10.103Q22.200 9.865 22.829 10.222Q23.458 10.579 23.594 11.361L23.594 11.361Q23.798 12.551 23.390 13.401L23.390 13.401Q23.186 13.911 22.710 14.217L22.710 14.217Q22.336 14.489 21.690 14.659L21.690 14.659Q20.670 14.965 19.548 14.795L19.548 14.795Q18.630 14.693 17.440 14.251L17.440 14.251L14.584 12.959Q12.646 12.075 10.844 12.551L10.844 12.551Q9.790 12.857 8.532 13.401L8.532 13.401L7.852 13.707Q6.492 14.319 5.744 14.557L5.744 14.557Q3.874 15.237 2.242 14.659L2.242 14.659Q0.202 13.911 0.338 11.803L0.338 11.803Q0.440 11.157 0.644 10.783L0.644 10.783Q0.882 10.341 1.392 10.205L1.392 10.205Q1.732 10.035 2.106 10.035Q2.480 10.035 2.786 10.205L2.786 10.205Q3.330 10.443 3.364 10.902Q3.398 11.361 2.990 11.701Z"/>',
  "seti:haskell": '<path d="M5.673 3.564L9.853 3.564Q10.537 4.590 11.905 6.661Q13.273 8.732 13.995 9.758L13.995 9.758L16.047 12.798Q19.391 17.776 21.025 20.322L21.025 20.322L16.845 20.322L16.731 20.208Q16.199 19.372 15.078 17.700Q13.957 16.028 13.425 15.192L13.425 15.192Q13.349 15.154 13.349 15.135Q13.349 15.116 13.349 15.116Q13.349 15.116 13.349 15.135Q13.349 15.154 13.273 15.192L13.273 15.192Q12.741 16.028 11.620 17.700Q10.499 19.372 9.967 20.208L9.967 20.208L9.853 20.322L5.673 20.322L5.673 20.208Q6.585 18.840 8.428 16.104Q10.271 13.368 11.145 12L11.145 12L11.145 11.886Q10.271 10.518 8.428 7.782Q6.585 5.046 5.673 3.678L5.673 3.678L5.673 3.564ZM4.343 20.360L4.267 20.436L0.125 20.436L0.125 20.322L0.505 19.676Q1.227 18.574 1.645 18.042L1.645 18.042L5.559 12.114L5.559 12Q2.747 7.478 0.125 3.678L0.125 3.678L4.267 3.678L4.381 3.792Q4.875 4.476 5.749 5.825Q6.623 7.174 7.117 7.858L7.117 7.858L7.915 9.036Q9.245 10.974 9.853 12L9.853 12L9.853 12.114Q8.789 13.748 6.547 17.016L6.547 17.016L4.267 20.436L4.343 20.360ZM23.875 8.428L23.875 11.278L16.389 11.278L14.603 8.542L14.603 8.428L23.875 8.428ZM23.875 12.722L23.875 15.572Q23.875 15.534 23.875 15.534L23.875 15.534L23.875 15.572L19.125 15.572L17.339 12.836L17.339 12.722L23.875 12.722Z"/>',
  "seti:haxe": '<path d="M23.802 17.376L23.676 17.250L21.072 12L23.676 6.750L23.802 6.624L23.802 0.198L17.376 0.198L17.250 0.324L12 2.928L6.750 0.324L6.624 0.198L0.198 0.198L0.198 6.624L0.324 6.750L2.928 12L0.324 17.250L0.198 17.376L0.198 23.802L6.624 23.802L6.750 23.676L12 21.072L17.250 23.676L17.376 23.802L23.802 23.802L23.802 17.376ZM22.374 1.626L19.896 11.454L12.546 4.104L22.374 1.626ZM11.496 4.104L4.146 11.454L1.626 1.626L11.496 4.104ZM1.626 22.374L4.146 12.504L11.496 19.854L1.626 22.374ZM12.546 19.854L19.896 12.504L22.374 22.374L12.546 19.854Z"/>',
  "seti:jade": '<path d="M23.247 16.411L23.247 16.411Q22.923 14.719 23.103 12.595L23.103 12.595Q23.247 11.911 23.247 11.551L23.247 11.551Q23.283 10.975 23.103 10.435L23.103 10.435Q22.887 9.751 22.671 8.419L22.671 8.419L22.635 8.203Q22.419 6.799 22.275 6.079L22.275 6.079Q22.023 4.855 21.663 3.919L21.663 3.919Q21.447 3.523 21.267 3.343L21.267 3.343Q21.015 3.127 20.655 3.127L20.655 3.127Q19.971 3.127 19.971 3.811L19.971 3.811Q20.007 4.315 20.187 5.377Q20.367 6.439 20.403 6.943L20.403 6.943Q20.475 7.339 20.637 8.077Q20.799 8.815 20.871 9.211L20.871 9.211L20.871 9.643Q20.547 9.643 20.403 9.535L20.403 9.535L20.043 9.283Q19.431 8.851 19.179 8.527L19.179 8.527Q18.351 7.339 17.847 6.151L17.847 6.151L17.307 4.927Q16.371 2.659 15.795 1.687L15.795 1.687Q15.327 0.895 14.607 0.571L14.607 0.571Q14.031 0.319 13.095 0.319L13.095 0.319Q12.663 0.319 12.663 0.751L12.663 0.751L12.735 1.111Q12.843 1.543 12.987 1.795L12.987 1.795Q13.491 2.695 14.445 4.549Q15.399 6.403 15.903 7.303L15.903 7.303Q16.191 7.735 16.839 8.599L16.839 8.599L17.055 8.851Q17.379 9.355 17.307 9.607Q17.235 9.859 16.695 10.111L16.695 10.111L16.587 10.111L16.479 10.219Q15.327 10.507 14.355 9.535L14.355 9.535Q13.419 8.815 12.303 8.635L12.303 8.635Q12.159 8.635 11.763 8.581Q11.367 8.527 11.187 8.527L11.187 8.527Q9.819 8.419 8.883 8.491L8.883 8.491Q7.659 8.599 6.579 8.995L6.579 8.995Q4.995 9.535 3.879 10.831L3.879 10.831Q2.943 11.947 2.295 13.711L2.295 13.711Q2.079 14.395 1.647 15.943L1.647 15.943Q1.503 15.727 1.395 15.619L1.395 15.619Q1.179 15.403 1.179 15.187L1.179 15.187L1.035 15.259Q0.819 15.475 0.747 15.619L0.747 15.619L0.747 16.195Q0.747 16.627 0.963 17.095L0.963 17.095Q2.259 20.227 3.195 22.927L3.195 22.927Q3.555 23.611 4.203 23.611L4.203 23.611Q6.111 23.791 7.479 23.503L7.479 23.503L9.495 23.143Q9.063 22.711 8.847 22.603L8.847 22.603Q8.847 22.531 8.901 22.477Q8.955 22.423 8.955 22.351L8.955 22.351L10.503 22.711Q13.347 23.755 16.047 23.611L16.047 23.611Q16.659 23.611 16.803 23.143L16.803 23.143L17.163 22.495Q17.415 21.415 18.279 20.119L18.279 20.119L18.315 20.047Q18.711 19.507 18.855 19.363Q18.999 19.219 19.197 19.219Q19.395 19.219 19.863 19.363L19.863 19.363L20.187 19.435Q21.195 19.795 22.023 19.345Q22.851 18.895 23.103 17.851L23.103 17.851Q23.247 17.419 23.247 16.411ZM21.987 15.043L21.987 15.043Q21.663 15.403 21.555 15.403L21.555 15.403Q19.683 15.583 18.603 15.043L18.603 15.043Q18.351 14.971 17.955 14.539L17.955 14.539L17.703 14.287Q18.387 14.035 18.603 13.927L18.603 13.927Q20.007 13.783 21.447 14.503L21.447 14.503Q21.483 14.503 21.591 14.539L21.591 14.539L21.663 14.611Q21.987 14.935 21.987 15.043Z"/>',
  "seti:java": '<path d="M12 0L12 0Q8.760 0 5.960 1.640L5.960 1.640Q3.240 3.240 1.640 5.960L1.640 5.960Q0 8.760 0 12Q0 15.240 1.640 18.040L1.640 18.040Q3.240 20.760 5.960 22.360L5.960 22.360Q8.760 24 12 24Q15.240 24 18.040 22.360L18.040 22.360Q20.760 20.760 22.360 18.040L22.360 18.040Q24 15.240 24 12Q24 8.760 22.360 5.960L22.360 5.960Q20.760 3.240 18.040 1.640L18.040 1.640Q15.240 0 12 0ZM16.280 5.600L16.280 13.600Q16.400 14.560 16.100 15.480Q15.800 16.400 15.120 17.100Q14.440 17.800 13.560 18.140Q12.680 18.480 11.720 18.400L11.720 18.400Q10.560 18.480 9.500 18.020Q8.440 17.560 7.720 16.680L7.720 16.680L9.160 14.840Q9.600 15.400 10.240 15.720Q10.880 16.040 11.640 16.040L11.640 16.040Q12.640 16.040 13.200 15.380Q13.760 14.720 13.760 13.400L13.760 13.400L13.760 5.600L16.280 5.600Z"/>',
  "seti:javascript": '<path d="M5.376 14.300L5.376 3.352L9.286 3.352L9.286 14.300Q9.286 17.842 7.630 19.452L7.630 19.452Q6.112 20.924 3.076 20.924L3.076 20.924Q2.386 20.924 1.558 20.809Q0.730 20.694 0.224 20.464L0.224 20.464L0.638 17.336Q1.512 17.750 2.662 17.750L2.662 17.750Q3.950 17.750 4.594 17.060L4.594 17.060Q5.376 16.232 5.376 14.300L5.376 14.300ZM11.862 19.912L12.736 16.600Q13.564 17.060 14.668 17.382L14.668 17.382Q15.910 17.750 17.014 17.750L17.014 17.750Q18.394 17.750 19.084 17.267Q19.774 16.784 19.774 15.910Q19.774 15.036 19.130 14.507Q18.486 13.978 16.876 13.426L16.876 13.426Q12.138 11.770 12.138 8.274L12.138 8.274Q12.138 5.974 13.909 4.525Q15.680 3.076 18.762 3.076L18.762 3.076Q21.200 3.076 23.224 3.950L23.224 3.950L22.350 7.124L22.074 6.986Q21.246 6.664 20.740 6.526L20.740 6.526Q19.774 6.250 18.762 6.250L18.762 6.250Q17.520 6.250 16.853 6.733Q16.186 7.216 16.186 7.998Q16.186 8.780 16.922 9.286L16.922 9.286Q17.474 9.700 19.314 10.436L19.314 10.436Q21.614 11.310 22.695 12.552Q23.776 13.794 23.776 15.588L23.776 15.588Q23.776 17.888 22.028 19.314L22.028 19.314Q20.142 20.924 16.738 20.924L16.738 20.924Q15.404 20.924 13.932 20.556L13.932 20.556Q12.782 20.326 11.862 19.912L11.862 19.912Z"/>',
  "seti:jinja": '<path d="M23.919 0.975L23.919 0.975Q23.919 0.926 23.772 0.828L23.772 0.828L23.674 0.730L23.527 0.730L21.469 1.661Q17.353 3.425 11.963 3.768L11.963 3.768L7.553 4.062Q5.299 4.209 4.123 4.111L4.123 4.111Q2.261 3.964 0.742 3.278L0.742 3.278Q1.330 4.552 0.056 5.091L0.056 5.091L0.056 5.238L0.301 5.385Q0.644 5.581 0.840 5.630L0.840 5.630L1.085 5.679Q1.722 5.875 2.016 6.120L2.016 6.120Q2.702 6.610 2.898 7.247L2.898 7.247Q2.947 7.394 3.290 7.394L3.290 7.394L3.633 7.443Q4.564 7.492 5.030 7.467Q5.495 7.443 5.814 7.590Q6.132 7.737 6.083 8.031Q6.034 8.325 5.691 8.595Q5.348 8.864 4.981 8.962Q4.613 9.060 3.878 9.011L3.878 9.011L3.437 8.962Q3.094 8.913 2.972 9.035Q2.849 9.158 2.996 9.501L2.996 9.501Q3.045 9.697 3.094 10.187L3.094 10.187L3.143 10.481L5.985 10.481L5.789 14.499L3.584 14.352L3.486 13.764L4.662 12.882Q4.025 12.441 3.070 12.416Q2.114 12.392 1.036 12.833L1.036 12.833L1.281 13.029Q1.575 13.323 1.771 13.421L1.771 13.421Q2.212 13.764 2.188 13.985Q2.163 14.205 1.575 14.499L1.575 14.499Q2.065 15.332 2.163 16.410L2.163 16.410Q2.261 17.145 2.163 18.419L2.163 18.419Q2.163 18.517 2.016 18.738Q1.869 18.958 1.869 19.056L1.869 19.056L1.820 19.252Q1.624 19.987 1.771 20.134L1.771 20.134Q1.967 20.330 2.016 20.624L2.016 20.624Q2.065 20.820 2.016 21.163L2.016 21.163L2.016 21.506Q2.065 21.849 2.016 22.143L2.016 22.143Q1.918 22.731 2.555 22.682L2.555 22.682L3.731 22.682L3.437 20.428L5.397 20.428L5.152 22.437L7.602 22.437L7.602 20.232L8.925 20.134L8.925 22.290L10.395 22.290L10.395 21.702L10.444 21.065Q10.542 20.232 10.542 19.791L10.542 19.791Q10.542 19.546 10.469 19.130Q10.395 18.713 10.346 18.517L10.346 18.517L10.297 17.880Q10.199 17.145 10.199 16.753L10.199 16.753Q10.199 16.116 10.444 15.626L10.444 15.626Q10.836 14.940 10.297 14.597L10.297 14.597Q10.199 14.548 10.224 14.278Q10.248 14.009 10.371 13.837Q10.493 13.666 10.934 13.323L10.934 13.323L11.179 13.078Q9.562 12.441 7.945 13.078L7.945 13.078L8.974 14.352L8.827 14.548L7.406 14.548L7.406 10.383L15.148 9.942L14.903 14.254L13.629 14.254L13.629 13.372L14.854 12.441Q12.992 11.608 10.983 12.392L10.983 12.392L11.816 13.274Q12.110 13.568 12.086 13.715Q12.061 13.862 11.865 14.107L11.865 14.107L11.620 14.352Q11.767 14.499 11.743 14.842Q11.718 15.185 11.767 15.381Q11.816 15.577 12.061 15.724L12.061 15.724Q12.159 15.724 12.110 16.018L12.110 16.018L12.110 16.753Q12.110 17.929 12.061 18.566L12.061 18.566Q12.061 18.909 11.669 19.448L11.669 19.448L11.816 20.134Q11.963 20.967 11.963 21.359L11.963 21.359Q12.012 22.094 11.914 22.682L11.914 22.682Q11.865 22.780 12.012 23.074L12.012 23.074L12.110 23.270L13.972 23.270L13.727 20.673L15.050 20.673L15.050 22.878L17.696 22.878L17.451 20.526L18.627 20.526L18.627 22.633L18.872 22.731Q19.656 22.780 19.901 22.755Q20.146 22.731 20.195 22.486Q20.244 22.241 20.244 21.506L20.244 21.506L20.244 21.457Q20.195 21.016 20.342 20.134L20.342 20.134L20.440 19.399Q20.440 19.252 20.440 19.154L20.440 19.154Q19.999 18.419 19.999 17.439L19.999 17.439Q20.048 16.851 20.244 15.724L20.244 15.724L20.244 15.577Q20.293 15.332 20.195 14.793L20.195 14.793L20.097 14.401L20.048 13.764L21.175 12.784Q19.313 12.098 17.598 12.784L17.598 12.784Q17.696 13.029 18.113 13.299Q18.529 13.568 18.627 13.715L18.627 13.715Q18.823 14.009 18.725 14.401L18.725 14.401L17.402 14.401Q17.304 14.401 17.182 14.328Q17.059 14.254 17.059 14.156L17.059 14.156L16.471 9.942L20.391 9.599L20.440 9.158Q20.587 8.521 20.587 8.178L20.587 8.178Q20.587 8.080 20.416 7.957Q20.244 7.835 20.146 7.835L20.146 7.835L20.146 7.835Q18.872 7.884 18.333 8.080L18.333 8.080Q17.892 8.227 17.500 8.080L17.500 8.080Q17.255 7.982 16.863 7.688L16.863 7.688L16.618 7.541L16.716 7.345Q16.814 7.051 16.912 6.953L16.912 6.953Q17.157 6.610 17.353 6.561L17.353 6.561L20.097 6.169Q20.538 6.071 20.587 5.924L20.587 5.924Q20.783 5.189 21.371 4.846L21.371 4.846Q21.714 4.601 22.547 4.356L22.547 4.356L23.919 3.915L23.919 3.670Q23.968 2.102 23.919 0.975ZM5.544 15.871L5.544 18.860Q4.662 18.909 3.535 19.007L3.535 19.007L3.535 15.724L5.544 15.871ZM7.406 15.871L8.925 15.871Q8.925 16.116 8.925 16.655L8.925 16.655Q8.925 17.880 8.925 18.517L8.925 18.517Q8.925 18.811 8.778 18.860Q8.631 18.909 8.386 18.860L8.386 18.860L8.043 18.860Q7.749 18.909 7.602 18.860Q7.455 18.811 7.455 18.468L7.455 18.468L7.406 15.871ZM8.141 8.668L8.141 8.668Q7.553 8.521 7.553 8.129L7.553 8.129Q7.553 7.835 7.896 7.345L7.896 7.345L9.660 7.198L9.905 8.668L9.317 8.717Q8.484 8.766 8.141 8.668ZM14.952 15.724L14.952 19.154L13.727 19.154L13.727 15.724L14.952 15.724ZM17.304 15.773L18.725 15.724L18.725 19.007L17.500 19.105L17.304 15.773ZM12.600 8.423L12.600 8.423Q12.551 7.688 12.649 7.394Q12.747 7.100 13.139 6.977Q13.531 6.855 14.658 6.806L14.658 6.806L15.197 7.492Q14.756 8.178 14.021 8.374L14.021 8.374Q13.482 8.521 12.600 8.423Z"/>',
  "seti:julia": '<path d="M0.164 17.896L0.164 17.896Q0.164 19.348 0.890 20.580Q1.616 21.812 2.848 22.538Q4.080 23.264 5.532 23.264Q6.984 23.264 8.216 22.538Q9.448 21.812 10.174 20.580Q10.900 19.348 10.900 17.896Q10.900 16.444 10.174 15.212Q9.448 13.980 8.216 13.254Q6.984 12.528 5.532 12.528Q4.080 12.528 2.848 13.254Q1.616 13.980 0.890 15.212Q0.164 16.444 0.164 17.896ZM13.100 17.896L13.100 17.896Q13.100 19.348 13.826 20.580Q14.552 21.812 15.784 22.538Q17.016 23.264 18.468 23.264Q19.920 23.264 21.152 22.538Q22.384 21.812 23.110 20.580Q23.836 19.348 23.836 17.896Q23.836 16.444 23.110 15.212Q22.384 13.980 21.152 13.276Q19.920 12.572 18.468 12.572Q17.016 12.572 15.784 13.276Q14.552 13.980 13.826 15.212Q13.100 16.444 13.100 17.896ZM6.632 6.104L6.632 6.104Q6.632 7.556 7.358 8.788Q8.084 10.020 9.316 10.724Q10.548 11.428 12.000 11.428Q13.452 11.428 14.684 10.724Q15.916 10.020 16.642 8.788Q17.368 7.556 17.368 6.104Q17.368 4.652 16.642 3.420Q15.916 2.188 14.684 1.462Q13.452 0.736 12.000 0.736Q10.548 0.736 9.316 1.462Q8.084 2.188 7.358 3.420Q6.632 4.652 6.632 6.104Z"/>',
  "seti:karma": '<path d="M8.964 0.164L2.364 0.164L2.364 6.764L6.896 23.968L8.964 23.968L8.964 17.104L10.064 17.104L14.772 23.968L21.636 23.968L13.496 11.736L13.496 11.032L21.064 0.032L13.804 0.032L10.064 6.104L8.964 6.104L8.964 0.164Z"/>',
  "seti:kotlin": '<path d="M23.739 23.739L0.261 23.739L12.043 11.957L23.739 23.739ZM0.261 12.989L0.261 0.261L12.043 0.261L0.261 12.989ZM23.739 0.261L12.043 0.261L0.261 12.645L0.261 23.739L23.739 0.261Z"/>',
  "seti:dart": '<path d="M23.840 19.720L23.840 9.880L18.880 4.960L14.920 1Q14.600 0.640 14.060 0.400Q13.520 0.160 13.080 0.160L13.080 0.160Q12.120 0.160 11.560 0.480L11.560 0.480L4.640 3.960L4.160 4.200L0.480 11.880Q0.160 12.560 0.160 13.040L0.160 13.040Q0.160 14.240 1 15.080L1 15.080L9.760 23.840L19.720 23.840L19.720 19.720L23.840 19.720ZM5.480 4.120L11.840 0.920Q12.280 0.640 13.080 0.640L13.080 0.640Q13.400 0.640 13.840 0.860Q14.280 1.080 14.560 1.360L14.560 1.360L17.360 4.160L17.280 4.160Q16.920 4.120 16.560 4.120L16.560 4.120L5.480 4.120ZM19.200 19.560L19.200 23.320L9.960 23.320L5.320 18.680Q4.880 18.240 4.760 17.900Q4.640 17.560 4.640 16.720L4.640 16.720L4.640 5L19.200 19.560Z"/>',
  "seti:liquid": '<path d="M14.413 15.173L14.451 15.287Q14.451 15.591 14.394 16.256Q14.337 16.921 14.337 17.225L14.337 17.225Q14.071 20.987 14.071 22.925L14.071 22.925L14.071 23.723Q14.071 23.837 14.052 23.856Q14.033 23.875 13.957 23.875L13.957 23.875L10.385 23.153Q10.119 23.077 9.568 23.020Q9.017 22.963 8.751 22.925L8.751 22.925L8.447 22.849Q7.573 22.659 7.193 22.659L7.193 22.659Q6.433 22.545 4.875 22.260Q3.317 21.975 2.557 21.823L2.557 21.823Q2.063 21.633 0.923 21.405L0.923 21.405L0.657 21.367Q0.543 21.367 0.543 21.139L0.543 21.139Q0.771 19.923 0.999 17.377L0.999 17.377L1.037 17.073Q1.037 16.959 1.094 16.674Q1.151 16.389 1.151 16.275L1.151 16.275Q1.189 16.199 1.189 16.047Q1.189 15.895 1.265 15.781L1.265 15.781Q1.303 15.477 1.379 14.850Q1.455 14.223 1.493 13.881L1.493 13.881Q1.721 12.703 1.721 11.981L1.721 11.981Q2.177 9.017 2.329 7.231L2.329 7.231Q2.329 6.775 2.785 6.509L2.785 6.509L4.951 5.825Q5.027 5.825 5.103 5.730Q5.179 5.635 5.179 5.445L5.179 5.445Q5.483 3.735 6.737 1.873L6.737 1.873Q7.497 0.733 8.485 0.239L8.485 0.239Q8.751 0.239 9.169 0.182Q9.587 0.125 9.815 0.125L9.815 0.125Q10.803 0.125 11.221 0.695L11.221 0.695L11.335 0.809L11.449 0.809Q11.943 0.809 12.342 0.999Q12.741 1.189 13.007 1.531L13.007 1.531Q13.387 2.025 13.843 2.975L13.843 2.975Q13.843 3.089 14.071 3.089L14.071 3.089L14.679 2.823Q14.869 2.823 14.888 2.861Q14.907 2.899 14.907 3.089L14.907 3.089Q14.907 3.621 14.850 4.628Q14.793 5.635 14.793 6.167L14.793 6.167Q14.717 6.813 14.660 8.181Q14.603 9.549 14.565 10.195L14.565 10.195Q14.489 11.031 14.432 12.627Q14.375 14.223 14.299 15.059L14.299 15.059L14.413 15.173ZM5.635 14.717L5.635 14.717Q6.129 15.173 6.471 15.439L6.471 15.439Q7.155 15.857 7.307 16.503L7.307 16.503Q7.421 16.959 7.231 17.282Q7.041 17.605 6.585 17.681L6.585 17.681L6.015 17.681Q5.141 17.529 4.229 16.845L4.229 16.845Q4.153 16.769 4.115 16.788Q4.077 16.807 4.001 16.959L4.001 16.959Q3.735 17.909 3.545 18.403Q3.355 18.897 3.735 19.125L3.735 19.125Q5.369 20.341 7.193 20.189L7.193 20.189Q8.181 20.075 8.865 19.562Q9.549 19.049 9.910 18.156Q10.271 17.263 10.271 16.389Q10.271 15.515 9.701 14.717L9.701 14.717Q9.701 14.641 9.644 14.584Q9.587 14.527 9.587 14.489L9.587 14.489Q9.321 14.071 8.903 13.729L8.903 13.729Q8.637 13.539 8.029 13.159L8.029 13.159Q7.801 13.045 7.307 12.589L7.307 12.589Q7.041 12.095 7.231 11.525Q7.421 10.955 8.029 10.803L8.029 10.803Q9.093 10.651 10.271 11.031L10.271 11.031Q10.347 11.107 10.423 11.050Q10.499 10.993 10.499 10.917L10.499 10.917L11.221 8.789Q11.335 8.523 11.297 8.447Q11.259 8.371 10.993 8.295L10.993 8.295Q9.891 7.991 8.485 8.181L8.485 8.181Q6.965 8.447 5.977 9.397L5.977 9.397Q4.913 10.461 4.837 11.981L4.837 11.981Q4.647 12.741 4.875 13.444Q5.103 14.147 5.635 14.717ZM10.385 1.037L10.385 1.037Q10.309 0.961 10.271 0.961L10.271 0.961L10.157 0.923Q10.005 0.847 9.663 0.923L9.663 0.923L9.321 0.923Q8.371 1.265 7.687 2.139L7.687 2.139Q6.661 3.279 6.015 5.445L6.015 5.445Q6.015 5.521 6.034 5.540Q6.053 5.559 6.129 5.559L6.129 5.559Q6.433 5.521 6.965 5.331Q7.497 5.141 7.801 5.103L7.801 5.103Q7.877 5.103 7.877 5.027L7.877 5.027L7.915 4.989Q7.915 4.837 7.972 4.609Q8.029 4.381 8.029 4.267L8.029 4.267Q8.447 3.127 8.903 2.443L8.903 2.443Q9.511 1.531 10.385 1.037ZM11.221 3.545L11.221 3.545Q11.221 2.975 10.993 1.987L10.993 1.987Q10.917 1.835 10.879 1.816Q10.841 1.797 10.765 1.873L10.765 1.873Q10.195 2.177 10.043 2.481L10.043 2.481Q9.359 3.317 8.979 4.495L8.979 4.495L8.979 4.609L9.093 4.609Q9.435 4.533 10.119 4.343L10.119 4.343L10.765 4.153Q11.107 4.039 11.164 3.963Q11.221 3.887 11.221 3.545ZM12.171 3.773L12.171 3.773Q12.437 3.659 13.121 3.431L13.121 3.431L13.121 3.317Q12.931 2.519 12.437 1.987L12.437 1.987Q12.171 1.759 11.943 1.645L11.943 1.645L11.829 1.645L11.829 1.759Q11.829 1.835 11.886 2.006Q11.943 2.177 11.943 2.253L11.943 2.253Q12.057 2.595 12.057 3.545L12.057 3.545Q12.057 3.773 12.171 3.773ZM22.735 18.289L23.115 19.581L23.457 22.089L23.457 22.203L23.343 22.317Q22.621 22.431 21.253 22.735Q19.885 23.039 19.201 23.153L19.201 23.153Q17.415 23.571 16.237 23.723L16.237 23.723L16.123 23.761Q16.047 23.761 16.047 23.742Q16.047 23.723 16.085 23.609L16.085 23.609Q16.085 22.773 16.199 22.431L16.199 22.431Q16.275 21.595 16.332 19.999Q16.389 18.403 16.465 17.567L16.465 17.567L16.465 16.389Q16.465 15.553 16.579 15.173L16.579 15.173L16.579 14.337L16.921 8.067L16.921 6.889Q17.035 5.939 17.035 4.153L17.035 4.153L17.035 2.937Q17.149 2.937 17.149 2.956Q17.149 2.975 17.149 3.089L17.149 3.089L17.643 3.545L17.909 3.773Q18.175 4.001 18.251 4.153Q18.327 4.305 18.460 4.343Q18.593 4.381 18.840 4.381Q19.087 4.381 19.619 4.438Q20.151 4.495 20.379 4.495L20.379 4.495Q20.455 4.495 20.531 4.571Q20.607 4.647 20.607 4.723L20.607 4.723Q20.683 4.989 20.740 5.464Q20.797 5.939 20.835 6.167L20.835 6.167L21.215 8.523Q21.329 9.131 21.500 10.385Q21.671 11.639 21.785 12.209L21.785 12.209Q21.975 13.235 22.279 15.249Q22.583 17.263 22.735 18.289L22.735 18.289Z"/>',
  "seti:livescript": '<path d="M12.222 2.158L12.222 2.158L12.222 10.853Q12.296 10.853 12.314 10.835Q12.333 10.816 12.333 10.742L12.333 10.742L12.407 10.705Q12.444 10.668 12.444 10.594L12.444 10.594L12.518 10.594Q12.555 10.557 12.555 10.483L12.555 10.483Q12.666 10.483 12.684 10.483Q12.703 10.483 12.703 10.372L12.703 10.372Q12.777 10.372 12.795 10.354Q12.814 10.335 12.814 10.261L12.814 10.261Q12.925 10.261 12.925 10.039L12.925 10.039L12.925 2.972Q12.925 2.639 13.258 2.639L13.258 2.639L13.961 2.639Q14.220 2.639 14.257 2.676Q14.294 2.713 14.294 2.972L14.294 2.972L14.294 8.744L14.405 8.744Q14.516 8.744 14.534 8.744Q14.553 8.744 14.553 8.633L14.553 8.633L14.553 8.522L14.775 8.300Q14.849 8.226 14.812 8.152L14.812 8.152L14.775 8.078L14.775 3.675L16.033 3.675L16.033 6.894Q16.107 6.894 16.163 6.838Q16.218 6.783 16.255 6.783L16.255 6.783L17.550 5.525Q17.661 5.525 17.661 5.303L17.661 5.303L17.661 3.564Q17.809 3.490 18.105 3.527L18.105 3.527L18.364 3.564L18.623 3.527Q18.956 3.490 19.030 3.564Q19.104 3.638 19.067 4.008L19.067 4.008L19.030 4.267L19.030 4.822L19.067 4.933L19.178 5.044L19.104 5.044L20.214 5.044Q20.325 5.044 20.380 5.100Q20.436 5.155 20.436 5.303L20.436 5.303L20.436 6.450L20.103 6.450Q20.140 6.376 20.251 6.376Q20.362 6.376 20.436 6.339L20.436 6.339L18.808 6.339Q18.734 6.339 18.715 6.358Q18.697 6.376 18.697 6.450L18.697 6.450L18.216 6.894Q17.513 7.560 17.180 7.967L17.180 7.967Q17.180 8.078 17.439 8.078L17.439 8.078L20.214 8.078Q20.362 8.078 20.399 8.097Q20.436 8.115 20.436 8.300L20.436 8.300L20.436 9.114Q20.436 9.299 20.380 9.373Q20.325 9.447 20.103 9.447L20.103 9.447L15.922 9.447L15.848 9.447Q15.774 9.410 15.737 9.428Q15.700 9.447 15.700 9.558L15.700 9.558L14.294 10.964L20.436 10.964L20.436 12Q20.436 12.148 20.362 12.185Q20.288 12.222 20.103 12.222L20.103 12.222L12.814 12.222Q12.703 12.222 12.703 12.241Q12.703 12.259 12.703 12.333L12.703 12.333Q12.592 12.333 12.573 12.352Q12.555 12.370 12.555 12.444L12.555 12.444Q12.481 12.444 12.463 12.463Q12.444 12.481 12.444 12.592L12.444 12.592Q12.370 12.592 12.351 12.592Q12.333 12.592 12.333 12.703L12.333 12.703Q12.259 12.703 12.240 12.722Q12.222 12.740 12.222 12.814L12.222 12.814Q12.148 12.814 12.129 12.832Q12.111 12.851 12.111 12.925L12.111 12.925Q12.037 12.925 12.018 12.944Q12.000 12.962 12.037 13.036Q12.074 13.110 12.148 13.073L12.148 13.073L12.222 13.036L20.880 13.036Q20.991 13.036 21.009 13.055Q21.028 13.073 21.028 13.147L21.028 13.147L21.028 13.961Q21.028 14.220 20.972 14.276Q20.917 14.331 20.658 14.331L20.658 14.331L10.372 14.331L10.261 14.442Q10.187 14.553 10.021 14.720Q9.854 14.886 9.780 14.997L9.780 14.997Q9.854 15.071 10.039 15.034L10.039 15.034L10.150 14.997L21.583 14.997Q21.694 14.997 21.749 15.034Q21.805 15.071 21.805 15.256L21.805 15.256L21.805 16.403L8.633 16.403Q8.411 16.403 8.300 16.514L8.300 16.514L7.005 17.772Q7.005 17.846 7.153 17.883L7.153 17.883L7.264 17.883L22.989 17.883Q23.137 17.883 23.174 17.920Q23.211 17.957 23.211 18.142L23.211 18.142L23.211 20.325Q23.211 20.584 23.174 20.621Q23.137 20.658 22.841 20.658L22.841 20.658L5.858 20.658Q5.784 20.732 5.821 20.843L5.821 20.843L5.858 20.917L5.858 23.544L3.194 23.544Q3.046 23.544 3.009 23.489Q2.972 23.433 2.972 23.322L2.972 23.322L2.972 20.658Q2.898 20.584 2.842 20.621Q2.787 20.658 2.750 20.658L2.750 20.658L0.419 20.658Q0.271 20.658 0.234 20.639Q0.197 20.621 0.197 20.436L0.197 20.436L0.197 18.142Q0.197 17.957 0.252 17.920Q0.308 17.883 0.419 17.883L0.419 17.883L2.972 17.883L0.197 17.883Q0.271 17.809 0.326 17.846Q0.382 17.883 0.419 17.883L0.419 17.883L3.083 17.883Q3.194 17.772 3.083 17.661L3.083 17.661L3.083 0.900Q3.083 0.715 3.120 0.697Q3.157 0.678 3.305 0.678L3.305 0.678L5.525 0.678Q5.784 0.678 5.821 0.715Q5.858 0.752 5.858 1.011L5.858 1.011L5.858 16.958Q6.006 16.884 6.228 16.625L6.228 16.625L6.672 16.144Q7.042 15.737 7.264 15.589L7.264 15.589Q7.375 15.589 7.375 15.367L7.375 15.367L7.375 2.158Q7.523 2.084 7.930 2.158L7.930 2.158L8.189 2.158L8.411 2.158Q8.670 2.084 8.744 2.158Q8.818 2.232 8.781 2.491L8.781 2.491L8.744 2.750L8.744 13.961Q9.669 13.036 10.261 12.592L10.261 12.592Q10.335 12.518 10.372 12.407L10.372 12.407L10.372 12.333L10.372 2.158L11.630 2.158Q11.741 2.158 11.759 2.177Q11.778 2.195 11.778 2.269L11.778 2.269Q12.037 2.121 12.148 2.158L12.148 2.158L12.222 2.158Q12.111 5.044 12.111 10.594L12.111 10.594L12.111 10.853Q12.185 10.779 12.148 10.594L12.148 10.594L12.111 10.483L12.111 2.417Q12.148 2.417 12.148 2.325Q12.148 2.232 12.222 2.158ZM23.544 20.658L6.450 20.658Q6.524 20.584 6.672 20.658L6.672 20.658L6.783 20.658L23.433 20.658Q23.692 20.658 23.747 20.621Q23.803 20.584 23.803 20.325L23.803 20.325L23.803 18.142Q23.803 17.957 23.766 17.920Q23.729 17.883 23.544 17.883L23.544 17.883L7.819 17.883L7.745 17.920Q7.671 17.920 7.634 17.901Q7.597 17.883 7.597 17.772L7.597 17.772L23.655 17.772Q23.766 17.772 23.785 17.809Q23.803 17.846 23.803 17.994L23.803 17.994L23.803 20.436Q23.803 20.621 23.766 20.639Q23.729 20.658 23.544 20.658L23.544 20.658ZM6.450 0.678L6.450 16.736Q6.376 16.662 6.413 16.514L6.413 16.514L6.450 16.403L6.450 0.789Q6.450 0.530 6.394 0.475Q6.339 0.419 6.080 0.419L6.080 0.419L3.897 0.419Q3.712 0.419 3.693 0.456Q3.675 0.493 3.675 0.678L3.675 0.678L3.675 0.567Q3.564 0.456 3.582 0.438Q3.601 0.419 3.786 0.419L3.786 0.419L6.228 0.419Q6.339 0.419 6.394 0.475Q6.450 0.530 6.450 0.678L6.450 0.678ZM15.108 7.967L15.108 7.967Q15.034 7.893 15.071 7.782L15.071 7.782L15.108 7.708L15.108 2.158Q15.108 1.899 15.071 1.862Q15.034 1.825 14.775 1.825L14.775 1.825L14.072 1.825Q13.739 1.825 13.739 2.158L13.739 2.158L13.739 9.225Q13.739 9.447 13.591 9.447L13.591 9.447Q13.739 9.336 13.739 9.114L13.739 9.114L13.739 1.936Q13.739 1.751 13.757 1.733Q13.776 1.714 13.961 1.714L13.961 1.714L14.997 1.714Q15.108 1.714 15.163 1.751Q15.219 1.788 15.219 1.936L15.219 1.936L15.219 7.486Q15.108 7.708 15.108 7.967ZM11.741 13.369L11.778 13.406Q11.852 13.295 12.000 13.369L12.000 13.369L12.111 13.369L22.064 13.369Q22.323 13.406 22.360 13.351Q22.397 13.295 22.397 13.036L22.397 13.036L22.397 12.222Q22.397 12.111 22.378 12.074Q22.360 12.037 22.286 12.111L22.286 12.111L13.369 12.111L22.286 12.111Q22.471 12.111 22.489 12.148Q22.508 12.185 22.508 12.333L22.508 12.333L22.508 13.258Q22.508 13.406 22.471 13.462Q22.434 13.517 22.286 13.517L22.286 13.517L12.111 13.517Q11.889 13.369 11.741 13.369L11.741 13.369ZM7.930 2.010L7.930 1.936Q8.004 2.010 7.967 2.066Q7.930 2.121 7.930 2.158L7.930 2.158L7.930 15.108Q7.930 15.367 7.819 15.367L7.819 15.367L7.819 2.158Q7.893 2.084 7.930 2.010L7.930 2.010ZM22.286 16.292L22.286 16.292L22.286 15.108Q22.286 14.997 22.249 14.942Q22.212 14.886 22.064 14.886L22.064 14.886L10.261 14.886L21.805 14.886Q22.064 14.886 22.119 14.923Q22.175 14.960 22.175 15.256L22.175 15.256L22.175 16.181Q22.249 16.181 22.304 16.236Q22.360 16.292 22.286 16.292ZM10.853 1.936L10.853 1.936L10.853 12.111Q10.853 12.333 10.705 12.333L10.705 12.333L10.705 2.047Q10.779 2.047 10.779 1.992Q10.779 1.936 10.853 1.936ZM17.550 7.634L17.550 7.708Q17.550 7.597 17.772 7.597L17.772 7.597L21.953 7.597Q22.286 7.597 22.286 7.264L22.286 7.264L22.286 6.450Q22.286 6.265 22.249 6.247Q22.212 6.228 22.064 6.228L22.064 6.228L19.289 6.228Q19.030 6.228 19.030 6.117L19.030 6.117L22.397 6.117Q22.471 6.117 22.508 6.154L22.508 6.154L22.508 6.228L22.508 7.597L18.105 7.597Q17.846 7.597 17.735 7.616Q17.624 7.634 17.550 7.708L17.550 7.708L17.550 7.634ZM12.222 1.936L12.222 2.158Q12.148 2.232 12.185 2.343L12.185 2.343L12.222 2.417L12.222 10.594Q12.037 6.487 12.222 2.158L12.222 2.158Q12.148 2.158 12.148 2.084Q12.148 2.010 12.222 1.936L12.222 1.936ZM14.664 10.483L14.664 10.483Q14.738 10.409 14.812 10.446L14.812 10.446L14.886 10.483L21.953 10.483Q22.138 10.483 22.212 10.446Q22.286 10.409 22.286 10.261L22.286 10.261L22.286 9.225Q22.397 9.225 22.397 9.447L22.397 9.447L22.397 10.483Q22.397 10.594 22.360 10.668Q22.323 10.742 22.175 10.742L22.175 10.742Q20.473 10.557 18.401 10.520L18.401 10.520Q17.180 10.483 14.664 10.483ZM0.678 20.436L0.678 17.772L3.453 17.772L0.900 17.772Q0.715 17.772 0.696 17.809Q0.678 17.846 0.678 17.994L0.678 17.994L0.678 20.325Q0.678 20.510 0.696 20.529Q0.715 20.547 0.900 20.547L0.900 20.547L3.453 20.547L0.789 20.547Q0.678 20.547 0.678 20.529Q0.678 20.510 0.678 20.436L0.678 20.436ZM16.625 1.936L16.625 1.936L16.625 2.047Q16.625 2.010 16.588 1.955Q16.551 1.899 16.625 1.936ZM22.286 7.597L17.661 7.597L22.286 7.597ZM17.994 1.936L17.994 5.044Q17.920 5.044 17.957 4.970L17.957 4.970L17.994 4.822L17.994 1.825Q18.068 1.825 18.031 1.899L18.031 1.899L17.994 1.936ZM21.805 4.711L20.436 4.711Q20.436 4.600 20.547 4.600L20.547 4.600L22.175 4.600Q22.101 4.674 21.990 4.674Q21.879 4.674 21.805 4.711L21.805 4.711ZM19.030 6.228L22.286 6.228L19.030 6.228ZM6.339 23.581L6.339 23.544L6.339 20.658L6.339 23.322Q6.413 23.433 6.413 23.451Q6.413 23.470 6.339 23.581L6.339 23.581ZM22.323 4.267L22.286 4.711L22.286 3.564Q22.286 3.453 22.249 3.398Q22.212 3.342 22.064 3.342L22.064 3.342L20.954 3.342L22.286 3.342Q22.360 3.638 22.323 4.267L22.323 4.267ZM19.511 1.936L19.511 1.936Q19.585 1.936 19.548 2.047L19.548 2.047L19.511 2.158L19.511 3.675L19.474 3.786L19.400 3.897Q19.400 3.453 19.474 2.750L19.474 2.750Q19.511 2.195 19.511 1.936ZM14.294 10.964L14.294 10.964Q14.294 10.890 14.312 10.872Q14.331 10.853 14.405 10.853L14.405 10.853L14.368 10.853Q14.294 10.890 14.294 10.964ZM13.480 11.667L13.480 11.667Q13.480 11.556 13.498 11.538Q13.517 11.519 13.628 11.519L13.628 11.519L13.591 11.593Q13.554 11.667 13.480 11.667ZM14.183 11.038L14.183 11.075Q14.183 11.038 14.183 11.001L14.183 11.001L14.183 11.075L14.183 11.038ZM12.296 10.890L12.333 10.853Q12.333 10.890 12.333 10.927L12.333 10.927L12.333 10.853L12.296 10.890ZM14.405 10.742L14.405 10.742Q14.405 10.631 14.460 10.631Q14.516 10.631 14.405 10.742L14.405 10.742Q14.516 10.631 14.516 10.687Q14.516 10.742 14.405 10.742ZM13.850 11.297L13.850 11.297Q13.850 11.223 13.887 11.223Q13.924 11.223 13.850 11.297L13.850 11.297Q13.924 11.223 13.924 11.260Q13.924 11.297 13.850 11.297ZM12.962 10.224L13.036 10.150Q13.036 10.224 12.999 10.224Q12.962 10.224 13.036 10.150L13.036 10.150L12.962 10.224ZM13.184 10.002L13.258 9.928Q13.258 10.002 13.221 10.002Q13.184 10.002 13.258 9.928L13.258 9.928L13.184 10.002ZM13.369 11.778L13.369 11.778ZM13.258 11.926L13.258 12Q13.258 11.963 13.258 11.926L13.258 11.926L13.258 12L13.258 11.926ZM15.589 7.560L15.700 7.486Q15.700 7.560 15.644 7.560Q15.589 7.560 15.700 7.486L15.700 7.486L15.589 7.560ZM12.444 10.742L12.444 10.742ZM12.518 10.594L12.555 10.594Q12.555 10.631 12.555 10.668L12.555 10.668L12.555 10.594L12.518 10.594ZM10.742 2.158L10.853 2.158Q10.779 2.158 10.742 2.158L10.742 2.158ZM22.286 3.342L22.286 3.342ZM10.853 14.294L10.853 14.294ZM14.072 11.075L14.072 11.075ZM14.072 11.149L14.072 11.186Q14.072 11.186 14.072 11.149L14.072 11.149L14.072 11.186L14.072 11.149ZM10.964 14.294L10.964 14.294ZM13.998 11.186L13.961 11.186Q13.961 11.186 13.998 11.186L13.998 11.186L13.961 11.186L13.998 11.186ZM10.964 14.183L10.964 14.183ZM13.850 11.297L13.850 11.297ZM13.850 11.371L13.850 11.408Q13.850 11.408 13.850 11.371L13.850 11.371L13.850 11.408L13.850 11.371ZM13.776 11.408L13.739 11.408Q13.739 11.408 13.776 11.408L13.776 11.408L13.739 11.408L13.776 11.408ZM11.038 14.183L10.964 14.183Q11.001 14.183 11.038 14.183L11.038 14.183L10.964 14.183L11.038 14.183ZM13.739 11.445L13.739 11.519Q13.739 11.482 13.739 11.445L13.739 11.445L13.739 11.519L13.739 11.445ZM13.702 11.519L13.591 11.519Q13.665 11.519 13.702 11.519L13.702 11.519L13.591 11.519L13.702 11.519ZM11.075 14.109L11.075 14.183Q11.075 14.146 11.075 14.109L11.075 14.109L11.075 14.183L11.075 14.109ZM11.112 14.072L11.075 14.072Q11.075 14.072 11.112 14.072L11.112 14.072L11.075 14.072L11.112 14.072ZM13.480 11.667L13.480 11.778Q13.480 11.741 13.480 11.667L13.480 11.667L13.480 11.778L13.480 11.667ZM11.260 13.961L11.186 13.961Q11.223 13.961 11.260 13.961L11.260 13.961L11.186 13.961L11.260 13.961ZM16.514 6.635L16.514 6.561Q16.514 6.598 16.514 6.635L16.514 6.635L16.514 6.561L16.514 6.635ZM11.778 13.517L11.778 13.517ZM11.630 13.517L11.630 13.517ZM11.630 13.591L11.630 13.628Q11.630 13.591 11.630 13.591L11.630 13.591L11.630 13.628L11.630 13.591ZM11.519 13.628L11.519 13.628ZM11.482 13.739L11.408 13.739Q11.445 13.739 11.482 13.739L11.482 13.739L11.408 13.739L11.482 13.739ZM11.408 13.739L11.408 13.739ZM11.408 13.813L11.408 13.850Q11.408 13.813 11.408 13.813L11.408 13.813L11.408 13.850L11.408 13.813ZM11.334 13.850L11.297 13.850Q11.334 13.850 11.334 13.850L11.334 13.850L11.297 13.850L11.334 13.850ZM15.219 7.967L15.219 7.967ZM15.293 7.893L15.330 7.819Q15.330 7.856 15.330 7.856L15.330 7.856L15.293 7.893L15.330 7.819L15.293 7.893ZM15.367 7.819L15.478 7.708Q15.404 7.782 15.367 7.819L15.367 7.819L15.478 7.708L15.367 7.819ZM15.478 7.708L15.478 7.708ZM15.478 7.708L15.478 7.708ZM16.255 6.931L16.255 6.931ZM15.589 7.597L15.589 7.597ZM15.700 7.486L15.700 7.486ZM15.700 7.449L15.700 7.375Q15.700 7.375 15.700 7.375L15.700 7.375L15.700 7.449L15.700 7.375L15.700 7.449ZM15.811 7.375L15.811 7.375ZM15.885 7.301L15.922 7.264Q15.922 7.264 15.885 7.301L15.885 7.301L15.885 7.301L15.922 7.264L15.885 7.301ZM15.922 7.264L15.922 7.264ZM15.959 7.227L16.033 7.153Q16.033 7.153 16.033 7.153L16.033 7.153L15.959 7.227L16.033 7.153L15.959 7.227ZM16.033 7.153L16.033 7.153ZM16.107 7.079L16.144 7.042Q16.144 7.042 16.144 7.042L16.144 7.042L16.107 7.079L16.144 7.042L16.107 7.079ZM16.144 7.042L16.144 7.042ZM16.181 7.005L16.255 6.931Q16.218 6.968 16.181 7.005L16.181 7.005L16.255 6.931L16.181 7.005ZM14.220 10.964L14.183 10.964Q14.220 10.964 14.220 10.964L14.220 10.964L14.183 10.964L14.220 10.964ZM12.407 10.779L12.444 10.742Q12.444 10.742 12.444 10.742L12.444 10.742L12.407 10.779L12.444 10.742L12.407 10.779ZM14.405 10.742L14.405 10.742ZM14.553 10.631L14.553 10.631ZM12.629 10.557L12.703 10.483Q12.666 10.520 12.666 10.520L12.666 10.520L12.629 10.557L12.703 10.483L12.629 10.557ZM12.703 10.483L12.703 10.483ZM12.814 10.372L12.814 10.372ZM12.925 10.298L12.925 10.261Q12.925 10.298 12.925 10.298L12.925 10.298L12.925 10.261L12.925 10.298ZM13.036 10.150L13.036 10.150ZM13.036 10.150L13.036 10.150ZM13.258 9.928L13.258 9.928ZM13.295 9.891L13.369 9.817Q13.332 9.854 13.295 9.891L13.295 9.891L13.369 9.817L13.295 9.891ZM13.369 9.817L13.369 9.817ZM13.443 9.743L13.480 9.706Q13.480 9.706 13.480 9.706L13.480 9.706L13.443 9.743L13.480 9.706L13.443 9.743ZM13.480 9.706L13.480 9.706ZM13.628 9.558L13.628 9.558ZM16.514 6.672L16.514 6.672Z"/>',
  "seti:lua": '<path d="M10.423 23.875L10.423 23.875Q7.649 23.875 5.274 22.488Q2.899 21.101 1.512 18.726Q0.125 16.351 0.125 13.539Q0.125 10.727 1.531 8.333Q2.937 5.939 5.293 4.609L5.293 4.609Q7.763 3.165 10.689 3.241L10.689 3.241Q13.425 3.279 15.743 4.666Q18.061 6.053 19.391 8.371L19.391 8.371Q20.759 10.765 20.759 13.558Q20.759 16.351 19.372 18.726Q17.985 21.101 15.610 22.488Q13.235 23.875 10.423 23.875ZM14.717 6.205L14.717 6.205Q13.463 6.205 12.551 7.117Q11.639 8.029 11.639 9.283Q11.639 10.537 12.513 11.449Q13.387 12.361 14.679 12.361Q15.971 12.361 16.883 11.487Q17.795 10.613 17.795 9.321Q17.795 8.029 16.902 7.117Q16.009 6.205 14.717 6.205ZM20.759 6.205L20.759 6.205Q19.505 6.205 18.612 5.312Q17.719 4.419 17.795 3.127L17.795 3.127Q17.795 1.873 18.669 0.999Q19.543 0.125 20.873 0.125L20.873 0.125Q22.127 0.125 23.001 1.056Q23.875 1.987 23.875 3.222Q23.875 4.457 22.944 5.331Q22.013 6.205 20.759 6.205Z"/>',
  "seti:markdown": '<path d="M16.660 1.240L17.940 0.360L17.940 12.760L22.700 12.760Q19.060 16.480 11.820 23.760L11.820 23.760L1.300 12.880L5.700 12.880L5.700 0.240L6.180 0.600Q8.380 2.120 9.500 2.840L9.500 2.840Q11.500 4.120 11.920 4.120Q12.340 4.120 13.860 3.120L13.860 3.120Q14.780 2.560 16.660 1.240L16.660 1.240Z"/>',
  "seti:argdown": '<path d="M17.421 0.261L17.421 12.780L21.750 12.780L12 23.739L2.250 12.780L6.579 12.780L6.579 0.261L10.245 2.562L10.245 16.875L12 18.864L13.755 16.875L13.755 2.562L17.421 0.261Z"/>',
  "seti:info": '<path d="M23.780 10.803L23.818 10.803Q23.628 8.029 21.918 5.331L21.918 5.331Q20.664 3.469 18.916 2.234Q17.168 0.999 15.002 0.467L15.002 0.467Q13.748 0.125 12.646 0.125L12.646 0.125L10.746 0.125Q7.326 0.467 4.438 2.595L4.438 2.595Q1.132 5.369 0.296 9.245L0.296 9.245Q0.068 10.423 0.068 11.145L0.068 11.145L0.068 13.045Q0.448 16.351 2.082 18.631L2.082 18.631Q4.172 21.709 7.288 22.925L7.288 22.925Q9.454 23.685 11.202 23.875L11.202 23.875L13.102 23.875Q17.434 23.495 20.474 20.303L20.474 20.303Q22.944 17.833 23.666 14.375L23.666 14.375Q23.742 14.071 23.799 13.539Q23.856 13.007 23.932 12.703L23.932 12.703L23.932 11.411Q23.780 11.145 23.780 10.803L23.780 10.803ZM11.924 21.975L11.924 21.975Q9.188 21.975 6.870 20.569L6.870 20.569Q4.590 19.239 3.279 16.921Q1.968 14.603 1.968 11.867Q1.968 9.131 3.317 6.813Q4.666 4.495 6.984 3.165L6.984 3.165Q9.378 1.759 12.152 1.759L12.152 1.759Q14.850 1.835 17.149 3.184Q19.448 4.533 20.778 6.813L20.778 6.813Q22.146 9.131 22.108 11.867Q22.070 14.603 20.683 16.921Q19.296 19.239 17.016 20.569L17.016 20.569Q14.660 21.975 11.924 21.975ZM15.496 18.289L14.774 18.289Q14.432 18.289 14.166 18.175L14.166 18.175Q14.014 18.175 13.900 17.947L13.900 17.947Q13.862 17.833 13.824 17.795L13.824 17.795L13.824 10.081Q12.874 10.157 11.031 10.214Q9.188 10.271 8.238 10.309L8.238 10.309L8.238 11.259L9.416 11.259Q9.758 11.259 9.948 11.487Q10.138 11.715 10.138 12.095L10.138 12.095L10.138 17.567Q10.138 18.289 9.416 18.289L9.416 18.289L8.352 18.289L8.352 19.239L15.496 19.239L15.496 18.289ZM11.696 8.675L11.696 8.675Q12.570 8.675 13.140 8.067Q13.710 7.459 13.710 6.642Q13.710 5.825 13.102 5.217Q12.494 4.609 11.658 4.609Q10.822 4.609 10.252 5.217Q9.682 5.825 9.682 6.642Q9.682 7.459 10.290 8.067Q10.898 8.675 11.696 8.675Z"/>',
  "seti:clock": '<path d="M11.328 0.198L11.328 0.198L12.924 0.198Q13.260 0.240 13.848 0.303Q14.436 0.366 14.772 0.450L14.772 0.450Q17.124 1.038 19.098 2.424L19.098 2.424Q20.694 3.642 21.576 5.028L21.576 5.028Q23.298 7.296 23.676 10.278L23.676 10.278Q23.676 10.404 23.739 10.698Q23.802 10.992 23.802 11.202L23.802 11.202L23.802 12.924Q23.760 13.176 23.697 13.659Q23.634 14.142 23.550 14.352L23.550 14.352Q22.920 16.914 21.597 18.804Q20.274 20.694 18.048 22.122L18.048 22.122Q16.788 22.794 15.822 23.130L15.822 23.130Q14.604 23.592 13.428 23.676L13.428 23.676Q13.302 23.676 13.050 23.739Q12.798 23.802 12.672 23.802L12.672 23.802L10.950 23.802Q10.698 23.760 10.215 23.697Q9.732 23.634 9.522 23.550L9.522 23.550Q6.960 22.920 5.070 21.597Q3.180 20.274 1.752 18.048L1.752 18.048Q1.080 16.788 0.744 15.822L0.744 15.822Q0.282 14.604 0.198 13.428L0.198 13.428Q0.282 13.344 0.240 13.071Q0.198 12.798 0.198 12.672L0.198 12.672L0.198 11.076Q0.240 10.740 0.303 10.152Q0.366 9.564 0.450 9.228L0.450 9.228Q1.038 6.876 2.424 4.902L2.424 4.902Q3.642 3.138 5.952 1.752L5.952 1.752Q8.052 0.492 10.278 0.324L10.278 0.324Q10.488 0.324 10.824 0.261Q11.160 0.198 11.328 0.198ZM2.172 12.252L2.172 12.252Q2.214 14.898 3.579 17.124Q4.944 19.350 7.212 20.673Q9.480 21.996 12.168 21.975Q14.856 21.954 17.145 20.589Q19.434 19.224 20.736 16.872Q22.038 14.520 21.996 11.748L21.996 11.748Q21.912 9.144 20.526 6.918Q19.140 4.692 16.872 3.432L16.872 3.432Q14.478 2.088 11.748 2.172L11.748 2.172Q9.144 2.214 6.918 3.558Q4.692 4.902 3.432 7.170L3.432 7.170Q2.088 9.522 2.172 12.252ZM12.546 11.958L12.546 12Q12.672 11.874 12.987 11.685Q13.302 11.496 13.428 11.328L13.428 11.328Q15.822 9.774 16.872 8.976L16.872 8.976L16.998 8.892Q17.124 8.808 17.124 8.724L17.124 8.724Q17.292 8.514 17.565 8.577Q17.838 8.640 18.027 8.829Q18.216 9.018 18.174 9.291Q18.132 9.564 17.922 9.774L17.922 9.774L15.780 11.244Q14.352 12.210 13.722 12.798L13.722 12.798L12.252 13.848Q11.958 14.016 11.643 13.890Q11.328 13.764 11.328 13.428L11.328 13.428L11.328 4.902Q11.328 4.272 11.874 4.272L11.874 4.272Q12.084 4.146 12.315 4.314Q12.546 4.482 12.546 4.776L12.546 4.776L12.546 12L12.546 11.958Z"/>',
  "seti:maven": '<path d="M12.464 0.865L12.226 1.001Q11.818 1.341 11.138 1.851L11.138 1.851Q9.982 2.769 9.540 3.177L9.540 3.177Q8.894 3.789 8.316 4.605L8.316 4.605Q7.772 5.387 7.636 6.849Q7.500 8.311 7.908 9.671L7.908 9.671Q8.384 11.201 9.370 11.949L9.370 11.949Q9.030 11.949 7.840 11.303L7.840 11.303L6.718 10.657L8.282 12.833Q10.016 15.145 10.764 15.859L10.764 15.859Q13.280 19.531 13.926 23.747L13.926 23.747Q14.402 20.245 12.668 17.049L12.668 17.049L12.668 16.947Q12.566 16.505 12.685 16.182Q12.804 15.859 13.178 15.553L13.178 15.553Q13.722 15.247 15.966 13.105L15.966 13.105L15.966 13.105L14.708 13.819Q13.382 14.533 12.974 14.601L12.974 14.601L13.756 13.785Q14.334 13.173 14.606 12.901L14.606 12.901Q15.082 12.459 15.524 12.153L15.524 12.153Q17.598 10.487 17.224 7.699L17.224 7.699Q17.224 7.359 17.054 6.747L17.054 6.747L17.020 6.543Q16.238 3.143 13.178 0.253L13.178 0.253Q12.940 0.559 12.464 0.865L12.464 0.865Z"/>',
  "seti:nim": '<path d="M13.806 5.334L12.086 3.829L10.237 5.291Q9.463 5.248 8.345 5.420L8.345 5.420Q7.098 5.592 6.367 5.850L6.367 5.850Q5.808 5.463 5.163 4.990L5.163 4.990L4.647 4.603L3.486 6.495Q2.282 7.140 1.594 7.785L1.594 7.785L0.089 7.140L0.562 8.129Q1.207 9.591 1.637 10.236L1.637 10.236Q2.325 11.311 3.228 11.913L3.228 11.913Q4.174 10.408 6.711 9.634L6.711 9.634Q9.033 8.903 11.979 8.946Q14.924 8.989 17.289 9.720L17.289 9.720Q19.826 10.537 20.815 11.870L20.815 11.870Q21.890 11.311 22.707 9.978L22.707 9.978Q23.137 9.204 23.825 7.441L23.825 7.441L23.911 7.226Q23.051 7.527 22.277 7.785L22.277 7.785Q22.019 7.527 21.524 7.140Q21.030 6.753 20.600 6.495L20.600 6.495L19.482 4.560L17.762 5.764Q15.053 5.248 13.806 5.334L13.806 5.334ZM1.035 11.053L1.035 11.053L3.185 16.299Q4.561 18.105 6.926 19.137L6.926 19.137Q9.205 20.126 11.849 20.169Q14.494 20.212 16.816 19.266L16.816 19.266Q19.267 18.277 20.772 16.385L20.772 16.385L23.137 11.010Q21.890 12.816 19.224 14.321L19.224 14.321Q18.751 14.579 17.676 14.794L17.676 14.794L16.687 14.966L12.043 12.558L7.356 14.923L6.367 14.751Q5.292 14.493 4.819 14.278L4.819 14.278Q3.658 13.676 2.755 12.859L2.755 12.859Q1.895 12.128 1.035 11.053L1.035 11.053Z"/>',
  "seti:github": '<path d="M14.250 17.360L14.250 17.360Q14.516 17.284 14.972 17.227Q15.428 17.170 15.694 17.132L15.694 17.132Q18.088 16.524 18.886 14.738L18.886 14.738Q19.912 12.686 19.380 10.330L19.380 10.330Q19.266 9.874 19.038 9.418L19.038 9.418Q18.848 9.114 18.430 8.582L18.430 8.582Q18.278 8.430 18.278 8.202L18.278 8.202Q18.658 6.758 18.164 5.466L18.164 5.466Q18.164 5.390 18.069 5.314Q17.974 5.238 17.822 5.238L17.822 5.238Q17.442 5.238 17.024 5.390L17.024 5.390Q16.758 5.466 16.283 5.713Q15.808 5.960 15.086 6.416L15.086 6.416Q14.972 6.530 14.744 6.530L14.744 6.530Q11.932 5.846 9.158 6.530L9.158 6.530Q8.930 6.530 8.778 6.416L8.778 6.416L8.512 6.264Q7.790 5.846 7.448 5.694L7.448 5.694Q6.878 5.428 6.308 5.352L6.308 5.352Q5.852 5.276 5.757 5.333Q5.662 5.390 5.586 5.846L5.586 5.846Q5.244 7.062 5.586 8.316L5.586 8.316L5.586 8.544Q4.826 9.418 4.560 10.558L4.560 10.558Q4.332 11.584 4.522 12.724L4.522 12.724Q4.598 12.952 4.655 13.370Q4.712 13.788 4.750 14.016L4.750 14.016Q5.206 15.270 6.080 16.011Q6.954 16.752 8.322 17.132L8.322 17.132Q9.272 17.360 9.880 17.474L9.880 17.474Q9.386 17.930 9.158 18.880L9.158 18.880Q9.158 18.994 9.044 19.032L9.044 19.032L9.044 19.032Q8.056 19.412 7.220 19.222L7.220 19.222Q6.308 18.994 5.700 18.082L5.700 18.082Q5.092 17.018 4.028 16.866L4.028 16.866L3.458 16.866Q3.268 16.866 3.249 16.999Q3.230 17.132 3.344 17.246L3.344 17.246L3.572 17.474Q4.522 18.044 4.864 19.146L4.864 19.146Q5.244 19.906 5.852 20.305Q6.460 20.704 7.372 20.780L7.372 20.780Q8.436 20.780 9.044 20.666L9.044 20.666L9.044 22.946Q9.044 23.212 8.797 23.345Q8.550 23.478 8.208 23.402L8.208 23.402Q6.764 22.870 5.358 21.996L5.358 21.996Q2.622 20.096 1.330 17.512L1.330 17.512Q-0.038 14.890 0.114 11.660L0.114 11.660Q0.228 8.962 1.520 6.663Q2.812 4.364 4.959 2.806Q7.106 1.248 9.728 0.716L9.728 0.716Q12.768 0.146 15.694 1.096L15.694 1.096Q18.506 2.046 20.596 4.231Q22.686 6.416 23.522 9.380L23.522 9.380Q24.282 12.306 23.522 15.232L23.522 15.232Q22.762 18.082 20.748 20.267Q18.734 22.452 15.922 23.402L15.922 23.402Q15.466 23.592 15.219 23.402Q14.972 23.212 14.972 22.680L14.972 22.680L14.972 19.830Q15.086 19.070 14.934 18.500L14.934 18.500Q14.782 17.854 14.250 17.360Z"/>',
  "seti:notebook": '<path d="M4.314 0.198L16.746 0.198Q17.838 0.198 18.615 0.975Q19.392 1.752 19.392 2.844L19.392 2.844L19.392 21.156Q19.392 22.248 18.615 23.025Q17.838 23.802 16.746 23.802L16.746 23.802L4.314 23.802Q3.222 23.802 2.445 23.025Q1.668 22.248 1.668 21.156L1.668 21.156L1.668 2.844Q1.668 1.752 2.445 0.975Q3.222 0.198 4.314 0.198L4.314 0.198ZM21.450 15.528L20.568 15.528L21.450 15.528Q21.786 15.528 22.038 15.759Q22.290 15.990 22.332 16.326L22.332 16.326L22.332 18.216Q22.332 18.552 22.122 18.783Q21.912 19.014 21.576 19.098L21.576 19.098L20.568 19.098L20.568 15.528L21.450 15.528ZM21.450 10.824L20.568 10.824L21.450 10.824Q21.786 10.824 22.038 11.034Q22.290 11.244 22.332 11.580L22.332 11.580L22.332 13.470Q22.332 13.806 22.122 14.058Q21.912 14.310 21.576 14.352L21.576 14.352L20.568 14.352L20.568 10.824L21.450 10.824ZM21.450 6.078L20.568 6.078L21.450 6.078Q21.786 6.078 22.038 6.309Q22.290 6.540 22.332 6.876L22.332 6.876L22.332 8.766Q22.332 9.102 22.122 9.333Q21.912 9.564 21.576 9.648L21.576 9.648L20.568 9.648L20.568 6.078L21.450 6.078ZM14.352 4.314L14.352 4.314L6.708 4.314Q6.372 4.314 6.120 4.545Q5.868 4.776 5.826 5.070L5.826 5.070L5.784 7.002Q5.784 7.296 6.015 7.548Q6.246 7.800 6.582 7.842L6.582 7.842L14.352 7.884Q14.688 7.884 14.940 7.653Q15.192 7.422 15.234 7.086L15.234 7.086L15.276 5.196Q15.276 4.818 15.003 4.566Q14.730 4.314 14.352 4.314Z"/>',
  "seti:nunjucks": '<path d="M23.800 21.475L19.600 6.625L17.700 7.225Q17.050 5.075 16.050 3.425L16.050 3.425Q14.400 0.825 12.400 0.825Q10.400 0.825 8.700 3.525L8.700 3.525Q7.650 5.125 6.950 7.225L6.950 7.225L4.750 6.625L0.200 21.275L5.850 23.025L10.400 8.325L8.350 7.725Q8.800 6.025 9.850 4.425L9.850 4.425Q11.100 2.375 12.250 2.375Q13.400 2.375 14.600 4.425L14.600 4.425Q15.550 5.975 16.000 7.725L16.000 7.725L13.650 8.475L18.200 23.175L23.800 21.475Z"/>',
  "seti:npm": '<path d="M24 7.296L0 7.296L0 15.296L6.816 15.296L6.816 16.704L12.096 16.704L12.096 15.392L24 15.392L24 7.296ZM6.592 8.704L6.592 13.984L5.312 13.984L5.312 10.112L4 10.112L4 13.984L1.312 13.984L1.312 8.704L6.592 8.704ZM13.184 13.984L13.216 13.984L10.496 13.984L10.496 15.392L7.808 15.392L7.808 8.800L13.088 8.800Q13.216 10.400 13.184 13.984L13.184 13.984ZM22.592 8.704L22.592 13.984L21.312 13.984L21.312 10.112L20 10.112L20 13.984L18.592 13.984L18.592 10.112L17.312 10.112L17.312 13.984L14.592 13.984L14.592 8.704L22.592 8.704ZM11.904 12.704L11.904 10.112L10.592 10.112L10.592 12.704L11.904 12.704Z"/>',
  "seti:ocaml": '<path d="M23.306 21.102L23.343 21.028L23.343 5.414Q23.343 4.489 23.195 4.008L23.195 4.008Q23.047 3.083 22.048 2.306L22.048 2.306Q21.715 2.047 21.530 1.973L21.530 1.973Q21.197 1.825 20.901 1.825L20.901 1.825Q20.827 1.825 20.808 1.806Q20.790 1.788 20.790 1.714L20.790 1.714L2.623 1.714Q2.623 1.936 2.179 1.936L2.179 1.936Q0.884 2.417 0.329 3.897L0.329 3.897Q0.218 4.156 0.218 4.600L0.218 4.600L0.218 9.928Q0.218 10.187 0.255 10.206Q0.292 10.224 0.551 10.150L0.551 10.150L1.143 9.928Q1.439 9.854 1.735 9.373L1.735 9.373Q1.846 9.188 1.920 9.114L1.920 9.114L2.031 8.966Q2.327 8.485 2.623 8.300L2.623 8.300Q2.808 8.115 2.993 8.115Q3.178 8.115 3.437 8.300L3.437 8.300L3.696 8.485Q4.029 8.707 4.251 8.781L4.251 8.781Q4.991 9.003 5.398 8.892L5.398 8.892Q5.620 8.892 5.731 8.707L5.731 8.707Q5.842 8.633 5.953 8.411L5.953 8.411L5.990 8.300Q6.212 7.856 6.360 7.745Q6.508 7.634 6.619 7.634L6.619 7.634L7.026 7.597Q7.470 7.671 7.914 8.078L7.914 8.078Q8.173 8.300 8.654 8.892L8.654 8.892Q8.802 9.188 9.098 9.336L9.098 9.336Q9.320 9.447 9.801 9.928L9.801 9.928Q10.134 10.335 10.948 10.964L10.948 10.964Q11.503 11.408 11.762 11.667L11.762 11.667Q12.391 12.259 13.168 12.592L13.168 12.592Q13.760 12.777 14.130 12.740L14.130 12.740Q14.611 12.666 15.018 12.111L15.018 12.111Q15.758 11.186 15.943 10.150L15.943 10.150Q16.017 9.928 16.313 9.521L16.313 9.521L16.498 9.225L16.609 9.225Q17.275 9.114 18.237 9.336L18.237 9.336Q18.570 9.336 18.829 9.447L18.829 9.447L19.273 9.558Q19.902 9.669 20.216 9.817Q20.531 9.965 20.642 10.279Q20.753 10.594 20.679 10.964L20.679 10.964Q20.605 11.186 20.549 11.223Q20.494 11.260 20.383 11.223Q20.272 11.186 20.198 11.186L20.198 11.186L19.865 11.186Q19.384 11.297 18.459 11.778L18.459 11.778Q18.274 11.852 18.144 12.018Q18.015 12.185 18.015 12.370L18.015 12.370Q17.830 13.036 17.312 13.406L17.312 13.406L17.238 13.480Q17.090 13.554 17.090 13.739L17.090 13.739Q16.979 13.813 16.849 13.980Q16.720 14.146 16.609 14.220L16.609 14.220Q15.536 15.293 13.612 15.478L13.612 15.478L11.762 15.478Q11.614 15.478 11.577 15.534Q11.540 15.589 11.540 15.700L11.540 15.700Q11.577 15.922 11.577 16.384Q11.577 16.847 11.669 17.087Q11.762 17.328 11.762 17.772L11.762 17.772Q11.762 18.475 12.354 19.067L12.354 19.067Q12.465 19.178 12.465 19.400L12.465 19.400Q12.465 20.214 12.576 20.547L12.576 20.547L12.613 20.806Q12.835 21.694 13.020 22.064L13.020 22.064Q13.168 22.175 13.242 22.212Q13.316 22.249 13.408 22.194Q13.501 22.138 13.723 22.064Q13.945 21.990 14.093 21.953L14.093 21.953Q14.463 21.805 15.018 21.731L15.018 21.731Q15.351 21.731 16.054 21.731L16.054 21.731Q16.424 21.731 17.201 21.694L17.201 21.694Q18.163 21.620 18.644 21.657L18.644 21.657Q19.421 21.657 20.087 21.842L20.087 21.842Q20.309 21.879 20.716 21.934Q21.123 21.990 21.345 22.064L21.345 22.064Q21.826 22.212 22.344 22.249L22.344 22.249Q22.677 22.286 23.343 22.286L23.343 22.286Q23.787 22.286 23.787 21.842L23.787 21.842Q23.454 21.583 23.380 21.435Q23.306 21.287 23.306 21.102L23.306 21.102ZM5.620 18.031L5.620 17.772L5.768 17.661Q5.953 16.662 6.545 16.033L6.545 16.033L6.434 16.033Q5.361 16.033 4.140 15.700L4.140 15.700Q2.993 15.478 2.401 14.886L2.401 14.886Q2.142 14.627 1.827 14.701Q1.513 14.775 1.365 15.145L1.365 15.145Q1.365 15.182 1.309 15.348Q1.254 15.515 1.254 15.589L1.254 15.589Q0.884 16.292 0.440 16.736L0.440 16.736Q0.181 17.217 0.218 17.550L0.218 17.550L0.218 19.733Q0.218 20.103 0.551 20.140Q0.884 20.177 1.439 20.362L1.439 20.362Q1.846 20.510 2.031 20.547L2.031 20.547L2.586 20.732Q3.622 21.139 4.140 21.139L4.140 21.139Q4.473 21.139 4.547 21.084Q4.621 21.028 4.695 20.658L4.695 20.658Q4.695 20.621 4.769 20.566Q4.843 20.510 4.843 20.436L4.843 20.436L4.695 20.436L4.843 20.436L4.843 20.214L4.843 20.325Q4.843 20.288 4.898 20.214Q4.954 20.140 4.954 20.103L4.954 20.103L4.954 19.992Q5.065 19.733 5.065 19.400L5.065 19.400Q5.065 18.956 5.176 18.808L5.176 18.808L5.176 18.697Q5.361 18.623 5.583 18.179L5.583 18.179L5.620 18.031ZM11.429 19.992L11.429 19.992Q11.133 19.696 10.948 19.178L10.948 19.178Q10.948 18.808 10.837 18.808L10.837 18.808Q10.837 18.549 10.689 18.105L10.689 18.105L10.615 17.883Q10.245 16.699 9.209 15.811L9.209 15.811Q8.765 15.552 8.524 15.571Q8.284 15.589 7.951 15.922L7.951 15.922Q7.877 15.996 7.821 16.107Q7.766 16.218 7.729 16.292L7.729 16.292Q7.026 17.439 6.693 18.142L6.693 18.142L6.619 18.253Q6.434 18.549 6.434 18.845L6.434 18.845Q6.360 18.882 6.304 19.085Q6.249 19.289 6.212 19.400L6.212 19.400Q5.916 19.696 5.546 20.510L5.546 20.510L5.398 20.806Q5.398 20.843 5.361 20.898Q5.324 20.954 5.398 21.028L5.398 21.028L5.620 21.028Q6.545 20.806 7.026 20.547L7.026 20.547Q8.025 20.066 9.209 20.436L9.209 20.436Q9.690 20.621 10.134 20.880L10.134 20.880Q10.430 21.065 10.948 21.472L10.948 21.472Q11.318 21.731 11.984 21.953L11.984 21.953L12.243 21.953L12.243 21.842Q12.058 21.509 11.873 20.954L11.873 20.954Q11.614 20.288 11.429 19.992Z"/>',
  "seti:odata": '<path d="M20.586 0.324L20.586 0.324L3.534 0.324Q2.148 0.324 1.203 1.269Q0.258 2.214 0.258 3.600L0.258 3.600L0.258 20.400Q0.258 21.786 1.203 22.731Q2.148 23.676 3.534 23.676L3.534 23.676L20.460 23.676Q21.846 23.676 22.791 22.731Q23.736 21.786 23.736 20.400L23.736 20.400L23.736 3.600Q23.820 2.214 22.896 1.269Q21.972 0.324 20.586 0.324ZM6.684 21.072L6.684 21.072Q5.298 21.072 4.290 20.043Q3.282 19.014 3.282 17.649Q3.282 16.284 4.290 15.255Q5.298 14.226 6.684 14.226Q8.070 14.226 9.078 15.255Q10.086 16.284 10.086 17.670Q10.086 19.056 9.099 20.064Q8.112 21.072 6.684 21.072ZM11.682 12.504L11.808 12.504L3.408 12.504L3.408 10.278L11.682 10.278L11.682 12.504ZM11.682 9.228L11.808 9.228L3.408 9.228L3.408 7.002L11.682 7.002L11.682 9.228ZM11.682 5.952L11.808 5.952L3.408 5.952L3.408 3.852L11.682 3.852L11.682 5.952ZM20.712 13.302L20.712 15.528L12.438 15.528L12.438 13.302L20.712 13.302ZM20.712 10.152L20.712 12.378L12.438 12.378L12.438 10.152L20.712 10.152ZM20.712 6.876L20.712 9.102L12.438 9.102L12.438 6.876L20.712 6.876ZM20.712 3.726L20.712 5.952L12.438 5.952L12.438 3.726L20.712 3.726Z"/>',
  "seti:perl": '<path d="M9.194 22.393L8.966 23.875L7.180 23.875Q7.218 23.723 7.275 23.362Q7.332 23.001 7.408 22.925L7.408 22.925Q8.054 22.697 8.206 22.165L8.206 22.165Q8.320 21.861 8.282 21.101L8.282 21.101L8.244 20.569L8.244 13.197Q7.826 13.121 6.952 13.045L6.952 13.045Q6.268 12.969 5.926 12.931L5.926 12.931Q5.394 12.817 5.052 12.627L5.052 12.627Q3.114 11.373 2.563 9.454Q2.012 7.535 2.886 5.369L2.886 5.369Q3.494 4.001 2.050 3.811L2.050 3.811Q1.822 3.811 1.100 3.583L1.100 3.583L1.100 3.355Q1.480 3.165 2.126 2.747Q2.772 2.329 3.152 2.177L3.152 2.177Q3.228 2.101 3.494 2.101L3.494 2.101Q3.950 2.063 4.102 1.911L4.102 1.911Q5.090 1.417 5.584 1.341Q6.078 1.265 6.458 1.626Q6.838 1.987 7.408 2.975L7.408 2.975Q7.826 3.849 7.788 4.685Q7.750 5.521 7.294 6.433L7.294 6.433Q6.914 7.079 6.876 7.421L6.876 7.421Q6.800 7.991 7.408 8.219L7.408 8.219L8.168 7.155Q9.536 5.179 10.296 4.267L10.296 4.267Q11.512 2.747 12.766 1.835L12.766 1.835Q14.248 0.695 15.958 0.125L15.958 0.125L16.794 0.125Q17.022 0.467 17.592 1.075L17.592 1.075Q18.428 1.949 18.694 2.519L18.694 2.519Q19.302 3.507 20.366 5.559L20.366 5.559Q21.544 7.839 22.266 8.941L22.266 8.941Q22.722 9.625 22.855 10.689Q22.988 11.753 22.722 12.722Q22.456 13.691 21.886 14.147L21.886 14.147L21.886 10.005L21.430 10.005Q20.898 10.765 20.822 11.791L20.822 11.791Q20.746 12.399 20.860 13.691L20.860 13.691Q20.936 14.641 20.936 15.097L20.936 15.097Q20.936 16.617 20.898 19.581L20.898 19.581Q20.822 22.469 20.822 23.875L20.822 23.875L19.986 23.875L19.986 23.571Q19.910 23.191 19.986 22.925L19.986 22.925Q20.708 17.491 18.694 12.019L18.694 12.019Q17.212 13.349 17.022 15.591L17.022 15.591Q16.946 16.313 16.718 17.187L16.718 17.187Q16.566 17.719 16.186 18.783L16.186 18.783Q16.110 19.011 15.882 19.429L15.882 19.429Q15.540 20.113 15.502 20.455L15.502 20.455Q15.464 21.025 16.072 21.519L16.072 21.519Q16.148 21.595 16.053 22.070Q15.958 22.545 15.958 22.811L15.958 22.811L15.502 22.241Q15.160 21.785 15.008 21.633L15.008 21.633L15.008 22.013Q14.590 22.127 13.697 22.298Q12.804 22.469 12.386 22.583L12.386 22.583Q12.386 22.545 12.329 22.355Q12.272 22.165 12.272 22.127L12.272 22.127Q12.766 21.861 12.994 21.633L12.994 21.633Q13.868 21.101 13.963 20.550Q14.058 19.999 13.336 19.391L13.336 19.391Q11.018 17.567 12.044 14.983L12.044 14.983Q12.196 14.679 12.234 13.919L12.234 13.919Q12.234 13.349 12.272 12.969L12.272 12.969L11.588 13.349Q11.094 13.577 10.942 13.691L10.942 13.691Q10.676 13.881 10.638 14.033L10.638 14.033Q10.182 15.705 9.726 19.201L9.726 19.201L9.688 19.505Q9.422 20.569 9.194 22.393L9.194 22.393ZM12.994 17.605L14.438 19.391Q15.654 17.795 15.844 16.123Q16.034 14.451 15.122 13.197L15.122 13.197Q13.716 16.047 12.994 17.605L12.994 17.605Z"/>',
  "seti:php": '<path d="M8.154 16.514L8.154 16.514Q7.964 15.298 6.976 14.956L6.976 14.956L6.140 14.462Q5.418 14.234 5.190 14.120L5.190 14.120Q4.848 13.968 4.468 14.348L4.468 14.348Q4.316 14.690 4.582 14.956L4.582 14.956Q4.696 15.184 5.076 15.564L5.076 15.564Q5.304 15.906 5.912 16.514L5.912 16.514L5.988 16.628Q6.178 16.894 6.216 17.046L6.216 17.046Q6.330 17.274 6.254 17.578L6.254 17.578Q6.064 18.946 5.190 19.820L5.190 19.820Q5.114 19.896 5.000 19.934L5.000 19.934L4.962 19.934Q4.696 19.934 4.373 19.801Q4.050 19.668 3.860 19.478L3.860 19.478Q3.632 19.212 3.670 18.965Q3.708 18.718 4.012 18.528L4.012 18.528Q4.088 18.528 4.164 18.452Q4.240 18.376 4.240 18.262L4.240 18.262Q4.620 17.882 4.468 17.464L4.468 17.464Q4.392 17.388 4.335 17.274Q4.278 17.160 4.240 17.084L4.240 17.084Q3.746 16.628 2.568 15.678L2.568 15.678Q0.364 13.968 0.212 11.384L0.212 11.384Q0.022 8.648 1.504 6.064L1.504 6.064Q2.150 4.962 3.062 4.506L3.062 4.506Q3.518 4.278 4.468 4.012L4.468 4.012Q6.862 3.366 8.610 3.670L8.610 3.670Q10.624 4.088 11.118 5.684L11.118 5.684Q11.498 7.052 11.346 8.078L11.346 8.078Q11.270 9.294 10.415 10.282Q9.560 11.270 8.382 11.612L8.382 11.612Q7.850 11.802 7.546 11.707Q7.242 11.612 6.976 11.156L6.976 11.156L6.786 10.890Q6.330 10.206 6.140 9.864L6.140 9.864L6.140 9.712Q6.140 9.674 6.083 9.617Q6.026 9.560 6.026 9.484L6.026 9.484Q6.140 10.206 6.216 10.548L6.216 10.548Q6.368 11.118 6.596 11.498L6.596 11.498Q6.824 11.802 7.033 11.954Q7.242 12.106 7.546 12.106L7.546 12.106Q9.864 12.296 11.232 10.548L11.232 10.548Q12.562 8.724 12.182 6.064L12.182 6.064Q12.182 5.760 12.030 5.304L12.030 5.304L11.954 5.114Q11.954 4.886 11.992 4.791Q12.030 4.696 12.182 4.620L12.182 4.620Q12.410 4.620 12.410 4.506L12.410 4.506Q14.462 4.088 16.096 4.278L16.096 4.278Q18.452 4.468 20.010 5.570L20.010 5.570Q22.746 7.280 23.696 10.662L23.696 10.662Q23.810 11.042 23.810 11.612L23.810 11.612Q23.810 11.802 23.734 11.821Q23.658 11.840 23.487 11.745Q23.316 11.650 23.088 11.422L23.088 11.422L23.012 11.270Q22.936 11.232 22.822 11.042Q22.708 10.852 22.632 10.776Q22.556 10.700 22.480 10.700Q22.404 10.700 22.404 10.776Q22.404 10.852 22.347 10.966Q22.290 11.080 22.290 11.156L22.290 11.156Q21.682 13.208 20.618 14.234L20.618 14.234Q20.542 14.348 20.466 14.481Q20.390 14.614 20.390 14.728L20.390 14.728L20.352 15.184Q20.314 15.830 20.390 16.134L20.390 16.134L20.732 19.098Q20.808 19.516 20.675 19.744Q20.542 19.972 20.124 20.162L20.124 20.162Q19.440 20.428 18.946 20.428L18.946 20.428L17.046 20.428Q17.046 19.706 16.970 19.402L16.970 19.402Q16.856 18.870 16.476 18.642L16.476 18.642Q16.704 17.692 16.837 17.084Q16.970 16.476 16.590 15.906L16.590 15.906Q16.286 15.450 15.640 15.678L15.640 15.678Q14.348 16.476 12.676 15.906L12.676 15.906Q12.258 15.792 12.011 15.868Q11.764 15.944 11.612 16.248L11.612 16.248Q11.232 16.970 11.232 17.692Q11.232 18.414 11.460 19.592L11.460 19.592Q11.460 19.896 11.422 19.991Q11.384 20.086 11.118 20.162L11.118 20.162Q9.978 20.504 8.762 20.314L8.762 20.314L8.610 20.314Q8.610 19.592 8.534 19.288L8.534 19.288Q8.344 18.756 7.812 18.528L7.812 18.528Q8.382 17.920 8.154 16.514ZM3.290 13.778L3.290 13.778Q3.518 13.512 3.518 13.284L3.518 13.284Q3.594 13.018 3.404 12.676Q3.214 12.334 2.910 12.220L2.910 12.220Q2.758 12.144 2.663 12.182Q2.568 12.220 2.454 12.334L2.454 12.334Q2.264 12.524 1.979 12.885Q1.694 13.246 1.504 13.398L1.504 13.398Q1.504 13.474 1.447 13.531Q1.390 13.588 1.390 13.664L1.390 13.664Q1.276 13.816 1.352 13.968Q1.428 14.120 1.618 14.120L1.618 14.120Q1.960 14.120 2.112 14.234L2.112 14.234Q2.796 14.234 3.290 13.778ZM3.290 9.864L3.290 9.864Q3.290 9.674 3.138 9.522Q2.986 9.370 2.796 9.370Q2.606 9.370 2.435 9.541Q2.264 9.712 2.340 9.978L2.340 9.978Q2.340 10.168 2.511 10.301Q2.682 10.434 2.910 10.434L2.910 10.434Q3.290 10.092 3.290 9.864Z"/>',
  "seti:pipeline": '<path d="M15.948 15.948L15.948 18.888L7.926 18.888Q7.800 18.384 7.506 17.922L7.506 17.922L17.922 7.506Q18.804 8.052 19.896 8.052L19.896 8.052Q21.408 8.052 22.542 7.023Q23.676 5.994 23.802 4.461Q23.928 2.928 22.983 1.710Q22.038 0.492 20.526 0.240Q19.014-0.012 17.733 0.828Q16.452 1.668 16.074 3.138L16.074 3.138L7.926 3.138Q7.548 1.710 6.330 0.870Q5.112 0.030 3.621 0.219Q2.130 0.408 1.164 1.521Q0.198 2.634 0.198 4.125Q0.198 5.616 1.164 6.729Q2.130 7.842 3.621 8.031Q5.112 8.220 6.330 7.380Q7.548 6.540 7.926 5.112L7.926 5.112L16.074 5.112Q16.200 5.616 16.494 6.078L16.494 6.078L6.078 16.494Q5.196 15.948 4.146 15.948L4.146 15.948Q2.592 15.948 1.458 16.977Q0.324 18.006 0.198 19.539Q0.072 21.072 1.017 22.290Q1.962 23.508 3.474 23.760Q4.986 24.012 6.267 23.172Q7.548 22.332 7.926 20.862L7.926 20.862L15.948 20.862L15.948 23.802L23.802 23.802L23.802 15.948L15.948 15.948ZM4.146 6.078L4.146 6.078Q3.432 6.078 2.886 5.637Q2.340 5.196 2.214 4.503Q2.088 3.810 2.403 3.201Q2.718 2.592 3.369 2.319Q4.020 2.046 4.692 2.256Q5.364 2.466 5.763 3.033Q6.162 3.600 6.099 4.314Q6.036 5.028 5.532 5.532L5.532 5.532Q4.944 6.078 4.146 6.078ZM19.854 2.172L19.854 2.172Q20.484 2.172 20.967 2.487Q21.450 2.802 21.681 3.369Q21.912 3.936 21.807 4.524Q21.702 5.112 21.282 5.532Q20.862 5.952 20.274 6.057Q19.686 6.162 19.119 5.931Q18.552 5.700 18.237 5.217Q17.922 4.734 17.922 4.104L17.922 4.104Q17.922 3.306 18.489 2.739Q19.056 2.172 19.854 2.172ZM4.146 21.828L4.146 21.828Q3.306 21.828 2.739 21.261Q2.172 20.694 2.172 19.875Q2.172 19.056 2.739 18.489Q3.306 17.922 4.125 17.922Q4.944 17.922 5.532 18.489Q6.120 19.056 6.120 19.875Q6.120 20.694 5.532 21.261Q4.944 21.828 4.146 21.828ZM17.922 21.828L17.922 17.922L21.828 17.922L21.828 21.828L17.922 21.828Z"/>',
  "seti:pddl": '<path d="M4.608 21.520L4.608 21.800L2.480 21.800Q2.004 20.792 1.598 19.728Q1.192 18.664 0.912 17.432L0.912 17.432Q0.632 16.312 0.478 14.912Q0.324 13.512 0.324 12L0.324 12Q0.324 10.376 0.492 9.032Q0.660 7.688 0.912 6.596L0.912 6.596Q1.192 5.392 1.584 4.314Q1.976 3.236 2.480 2.200L2.480 2.200L4.608 2.200L4.608 2.508Q4.132 3.236 3.712 4.146Q3.292 5.056 2.942 6.274Q2.592 7.492 2.368 8.934Q2.144 10.376 2.144 12L2.144 12Q2.144 13.708 2.354 15.094Q2.564 16.480 2.928 17.712L2.928 17.712Q3.264 18.888 3.698 19.854Q4.132 20.820 4.608 21.520L4.608 21.520ZM23.676 12L23.676 12Q23.676 13.512 23.522 14.898Q23.368 16.284 23.088 17.432L23.088 17.432Q22.808 18.664 22.402 19.728Q21.996 20.792 21.520 21.800L21.520 21.800L19.392 21.800L19.392 21.520Q19.840 20.820 20.288 19.854Q20.736 18.888 21.086 17.684Q21.436 16.480 21.646 15.094Q21.856 13.708 21.856 12L21.856 12Q21.856 10.376 21.632 8.934Q21.408 7.492 21.058 6.274Q20.708 5.056 20.288 4.146Q19.868 3.236 19.392 2.508L19.392 2.508L19.392 2.200L21.520 2.200Q22.024 3.236 22.416 4.314Q22.808 5.392 23.088 6.596L23.088 6.596Q23.340 7.688 23.508 9.032Q23.676 10.376 23.676 12ZM6.260 10.068L6.260 10.068Q5.476 10.068 4.958 9.522Q4.440 8.976 4.440 8.150Q4.440 7.324 4.972 6.792Q5.504 6.260 6.316 6.260Q7.128 6.260 7.646 6.792Q8.164 7.324 8.164 8.164Q8.164 9.004 7.632 9.536Q7.100 10.068 6.260 10.068ZM6.260 18.552L6.260 18.552Q5.476 18.552 4.958 17.992Q4.440 17.432 4.440 16.606Q4.440 15.780 4.972 15.248Q5.504 14.716 6.316 14.716Q7.128 14.716 7.646 15.262Q8.164 15.808 8.164 16.634Q8.164 17.460 7.632 18.006Q7.100 18.552 6.260 18.552ZM18.972 11.160L18.972 18.244L15.976 18.244L15.976 16.564L15.920 16.564Q14.884 18.552 12.868 18.552L12.868 18.552Q11.384 18.552 10.530 17.572Q9.676 16.592 9.676 14.968L9.676 14.968Q9.676 11.496 13.204 10.964L13.204 10.964L15.976 10.544Q15.976 8.612 14.156 8.612Q12.336 8.612 10.684 9.872L10.684 9.872L10.684 7.100Q11.328 6.708 12.476 6.414Q13.624 6.120 14.576 6.120L14.576 6.120Q18.972 6.120 18.972 11.160L18.972 11.160ZM16.004 13.428L16.004 13.428L16.004 12.644L14.128 12.924Q12.588 13.148 12.588 14.520L12.588 14.520Q12.588 15.164 12.966 15.556Q13.344 15.948 13.988 15.948L13.988 15.948Q14.856 15.948 15.430 15.234Q16.004 14.520 16.004 13.428Z"/>',
  "seti:plan": '<path d="M0.127 6.839L0.127 0.608L16.929 0.608L16.929 6.839L0.127 6.839ZM7.040 15.116L7.040 8.885L23.873 8.885L23.873 15.116L7.040 15.116ZM17.053 23.393L17.053 17.162L23.873 17.162L23.873 23.393L17.053 23.393Z"/>',
  "seti:happenings": '<path d="M7.635 6.765L7.635 0.735L23.925 0.735L23.925 6.765L7.635 6.765ZM0.015 3.735L0.015 3.735Q0.015 4.845 0.735 5.610Q1.455 6.375 2.475 6.375Q3.495 6.375 4.230 5.610Q4.965 4.845 4.965 3.750Q4.965 2.655 4.230 1.890Q3.495 1.125 2.475 1.125Q1.455 1.125 0.735 1.890Q0.015 2.655 0.015 3.735ZM7.695 15.015L7.695 8.985L23.985 8.985L23.985 15.015L7.695 15.015ZM0.075 11.985L0.075 11.985Q0.075 13.065 0.795 13.830Q1.515 14.595 2.550 14.595Q3.585 14.595 4.305 13.830Q5.025 13.065 5.025 11.985Q5.025 10.905 4.305 10.140Q3.585 9.375 2.550 9.375Q1.515 9.375 0.795 10.140Q0.075 10.905 0.075 11.985ZM7.695 23.265L7.695 17.205L23.985 17.205L23.985 23.265L7.695 23.265ZM0.075 20.235L0.075 20.235Q0.075 21.315 0.795 22.080Q1.515 22.845 2.550 22.845Q3.585 22.845 4.305 22.080Q5.025 21.315 5.025 20.235Q5.025 19.155 4.305 18.390Q3.585 17.625 2.550 17.625Q1.515 17.625 0.795 18.390Q0.075 19.155 0.075 20.235Z"/>',
  "seti:powershell": '<path d="M0.090 22.968L0.090 17.023L9.438 11.980L0.131 6.322L0.131 0.336L15.875 10.504L15.875 13.948L0.090 22.968ZM23.910 20.262L23.910 23.665L10.258 23.665L10.258 20.262L23.910 20.262Z"/>',
  "seti:prisma": '<path d="M20.093 18.987L20.093 18.987L9.113 22.155Q8.861 22.227 8.663 22.047Q8.465 21.867 8.537 21.651L8.537 21.651L12.461 3.327Q12.497 3.075 12.785 3.039Q13.073 3.003 13.181 3.255L13.181 3.255L20.417 18.267Q20.525 18.483 20.435 18.699Q20.345 18.915 20.093 18.987ZM22.001 18.231L22.001 18.231L13.577 0.843Q13.397 0.519 13.091 0.321Q12.785 0.123 12.425 0.087Q12.065 0.051 11.723 0.231Q11.381 0.411 11.201 0.699L11.201 0.699L2.093 15.099Q1.877 15.423 1.877 15.819Q1.877 16.215 2.093 16.539L2.093 16.539L6.557 23.271Q6.737 23.595 7.061 23.757Q7.385 23.919 7.745 23.919L7.745 23.919Q7.961 23.919 8.177 23.847L8.177 23.847L21.101 20.139Q21.713 19.959 21.983 19.383Q22.253 18.807 22.001 18.231Z"/>',
  "seti:pug": '<path d="M16.267 5.578L16.267 5.578L16.267 5.578L16.267 5.578ZM13.717 12.276L13.717 12.276Q13.343 12.106 13.207 11.885Q13.071 11.664 12.782 11.562Q12.493 11.460 12.170 11.460Q11.847 11.460 11.558 11.562Q11.269 11.664 11.116 11.885Q10.963 12.106 10.623 12.276L10.623 12.276Q9.569 12.752 8.957 13.755Q8.345 14.758 8.413 15.914L8.413 15.914Q8.379 15.914 8.464 16.509Q8.549 17.104 8.651 17.546L8.651 17.546Q8.821 18.158 8.991 18.277Q9.161 18.396 10.147 18.566L10.147 18.566Q11.337 18.804 12.170 18.804Q13.003 18.804 14.227 18.566L14.227 18.566Q15.247 18.396 15.417 18.277Q15.587 18.158 15.723 17.546L15.723 17.546Q15.825 17.104 15.893 16.458L15.893 16.458Q15.961 15.914 15.927 15.914L15.927 15.914Q15.961 14.758 15.366 13.755Q14.771 12.752 13.717 12.276ZM22.455 8.094L22.455 8.094Q22.285 7.958 21.979 7.652L21.979 7.652Q21.027 6.700 20.449 6.326Q19.871 5.952 19.021 5.782L19.021 5.782Q18.443 5.646 17.457 5.578L17.457 5.578Q17.355 5.748 17.525 5.952L17.525 5.952L18.069 6.496Q19.633 8.094 19.973 9.964L19.973 9.964L20.007 10.406Q20.381 13.092 20.449 13.160L20.449 13.160Q20.585 13.534 20.721 13.568Q20.857 13.602 21.129 13.296L21.129 13.296Q21.163 13.262 21.401 12.786L21.401 12.786Q21.945 11.596 22.183 11.290Q22.421 10.984 23.237 10.304L23.237 10.304Q23.781 9.896 23.815 9.794Q23.849 9.692 23.356 9.097Q22.863 8.502 22.455 8.094ZM5.897 6.496L6.407 5.986Q6.407 5.952 6.441 5.952L6.441 5.952Q6.611 5.748 6.509 5.578L6.509 5.578Q5.523 5.646 4.945 5.782L4.945 5.782Q4.095 5.952 3.517 6.326Q2.939 6.700 1.987 7.652L1.987 7.652L1.511 8.094Q1.103 8.502 0.661 9.080L0.661 9.080Q0.151 9.692 0.185 9.794Q0.219 9.896 0.729 10.304L0.729 10.304Q1.545 10.984 1.800 11.290Q2.055 11.596 2.599 12.786L2.599 12.786Q2.803 13.262 2.837 13.296L2.837 13.296Q3.109 13.602 3.245 13.568Q3.381 13.534 3.517 13.160L3.517 13.160Q3.585 13.092 3.959 10.406L3.959 10.406L4.027 9.930Q4.333 8.094 5.897 6.496L5.897 6.496ZM19.259 13.160L19.259 13.160L19.259 13.160ZM16.879 6.496L16.879 6.496Q16.811 6.428 16.709 6.326L16.709 6.326L16.335 5.918Q16.165 5.748 16.267 5.578L16.267 5.578L15.111 5.442Q13.989 5.306 13.411 5.238L13.411 5.238Q10.827 5.068 8.243 5.578L8.243 5.578L8.175 5.612Q7.903 5.646 7.767 5.578L7.767 5.578L7.733 5.646Q7.767 5.782 7.631 5.918L7.631 5.918L7.087 6.496Q5.523 8.094 5.217 9.930L5.217 9.930L5.047 10.984L5.047 11.120L5.047 11.086Q4.979 11.596 4.928 12.276Q4.877 12.956 4.911 13.160L4.911 13.160L4.945 13.228Q5.047 13.976 5.285 14.282L5.285 14.282Q5.387 14.452 5.625 14.758L5.625 14.758Q6.033 15.268 6.067 15.608L6.067 15.608Q6.339 17.036 7.767 17.546L7.767 17.546Q7.563 17.138 7.393 16.152L7.393 16.152Q7.257 15.234 7.325 15.200L7.325 15.200Q7.257 13.942 8.022 12.854Q8.787 11.766 10.147 11.256L10.147 11.256Q10.589 11.086 10.776 10.848Q10.963 10.610 11.320 10.508Q11.677 10.406 12.102 10.406Q12.527 10.406 12.884 10.508Q13.241 10.610 13.428 10.848Q13.615 11.086 14.057 11.256L14.057 11.256Q15.417 11.766 16.182 12.854Q16.947 13.942 16.879 15.200L16.879 15.200Q16.947 15.234 16.811 16.118L16.811 16.118Q16.641 17.070 16.437 17.512L16.437 17.512Q17.729 16.968 17.967 15.744L17.967 15.744Q18.069 15.234 18.375 14.860L18.375 14.860L18.409 14.792Q18.613 14.554 18.647 14.384L18.647 14.384Q18.783 14.282 18.919 13.976L18.919 13.976L18.987 13.738Q19.123 13.330 19.259 13.160L19.259 13.160Q19.191 13.024 18.851 10.440L18.851 10.440L18.783 9.930Q18.443 8.094 16.879 6.496ZM6.747 8.060L6.747 8.060Q6.713 8.026 6.730 8.026Q6.747 8.026 6.747 8.060ZM7.699 11.630L7.699 11.630Q7.087 11.630 6.662 11.205Q6.237 10.780 6.237 10.168Q6.237 9.556 6.662 9.114Q7.087 8.672 7.699 8.672Q8.311 8.672 8.753 9.114Q9.195 9.556 9.195 10.168Q9.195 10.780 8.753 11.205Q8.311 11.630 7.699 11.630ZM15.315 11.052L15.315 11.052Q15.315 11.052 15.315 11.052L15.315 11.052L15.315 11.052ZM16.607 11.630L16.607 11.630Q15.995 11.630 15.553 11.205Q15.111 10.780 15.111 10.168Q15.111 9.556 15.553 9.114Q15.995 8.672 16.607 8.672Q17.219 8.672 17.644 9.114Q18.069 9.556 18.069 10.168Q18.069 10.780 17.644 11.205Q17.219 11.630 16.607 11.630ZM18.171 10.746L18.171 10.746Q18.171 10.712 18.171 10.678L18.171 10.678L18.171 10.576L18.171 10.610Q18.171 10.678 18.171 10.746ZM18.171 10.406L18.171 10.406Q18.171 10.406 18.171 10.440L18.171 10.440L18.171 10.406Q18.205 10.372 18.171 10.406Z"/>',
  "seti:puppet": '<path d="M4.426 7.310L4.426 0.338L11.398 0.338L11.426 5.658L14.254 8.486L14.282 8.486L19.574 8.486L19.574 15.486L14.310 15.486Q14.254 15.458 14.170 15.570L14.170 15.570L11.426 18.314L11.398 23.662L4.426 23.662L4.426 16.662L9.774 16.662L12.630 13.806L12.630 10.166L9.774 7.310L4.426 7.310ZM6.778 4.986L6.778 2.662L9.074 2.662L9.074 4.986L6.778 4.986ZM6.778 21.310L6.778 19.014L9.074 19.014L9.074 21.310L6.778 21.310Z"/>',
  "seti:purescript": '<path d="M16.968 17.184L15.132 15.456L7.032 15.456L8.868 17.184L16.968 17.184ZM8.868 11.136L7.032 12.864L15.132 12.864L16.968 11.136L8.868 11.136ZM16.968 8.544L15.132 6.816L7.032 6.816L8.868 8.544L16.968 8.544ZM2.244 14.160L6.168 10.236L4.944 9.012L0.408 13.548Q0.156 13.800 0.156 14.160Q0.156 14.520 0.408 14.772L0.408 14.772L4.944 19.308L6.168 18.084L2.244 14.160ZM23.592 9.228L23.592 9.228L19.056 4.692L17.832 5.916L21.756 9.840L17.832 13.764L19.056 14.988L23.592 10.452Q23.844 10.200 23.844 9.840Q23.844 9.480 23.592 9.228Z"/>',
  "seti:python": '<path d="M11.460 11.300L11.460 11.300L8.688 11.300Q7.236 11.300 6.378 12.158Q5.520 13.016 5.520 14.468L5.520 14.468L5.520 16.932Q5.520 17.372 5.124 17.372L5.124 17.372L3.892 17.372Q1.956 17.372 1.120 15.700L1.120 15.700Q0.460 14.336 0.460 13.236L0.460 13.236Q0.196 10.508 0.856 8.704L0.856 8.704Q1.560 6.592 3.452 6.240L3.452 6.240L11.416 6.240Q11.856 6.240 11.856 6.108L11.856 6.108L11.856 5.404L11.680 5.316Q11.504 5.272 11.460 5.272L11.460 5.272L6.752 5.272Q6.444 5.272 6.334 5.140Q6.224 5.008 6.224 4.700L6.224 4.700L6.224 2.940Q6.224 1.400 7.456 1.004L7.456 1.004Q8.820 0.432 9.524 0.300L9.524 0.300Q12.164-0.140 14.452 0.432L14.452 0.432Q15.596 0.696 16.388 1.268L16.388 1.268Q16.872 1.752 17.048 2.148L17.048 2.148Q17.312 2.632 17.224 3.204L17.224 3.204L17.224 8.132Q17.224 9.584 16.432 10.376Q15.640 11.168 14.188 11.168L14.188 11.168Q13.220 11.300 11.460 11.300ZM7.588 3.072L7.588 3.072Q7.588 3.512 7.896 3.842Q8.204 4.172 8.644 4.172Q9.084 4.172 9.436 3.820Q9.788 3.468 9.788 3.072Q9.788 2.676 9.458 2.368Q9.128 2.060 8.688 1.972L8.688 1.972Q8.204 1.972 7.896 2.302Q7.588 2.632 7.588 3.072ZM12.560 12.708L12.560 12.708L15.288 12.708Q16.740 12.708 17.598 11.850Q18.456 10.992 18.456 9.540L18.456 9.540L18.456 7.032Q18.456 6.636 18.852 6.636L18.852 6.636L20.084 6.636Q22.020 6.636 22.856 8.308L22.856 8.308Q23.560 9.672 23.560 10.772L23.560 10.772Q23.780 13.500 23.120 15.304L23.120 15.304Q22.416 17.416 20.524 17.768L20.524 17.768L12.560 17.768Q12.120 17.768 12.120 17.900L12.120 17.900L12.120 18.604L12.296 18.692Q12.472 18.736 12.560 18.736L12.560 18.736L17.224 18.736Q17.532 18.736 17.642 18.868Q17.752 19.000 17.752 19.308L17.752 19.308L17.752 21.068Q17.752 22.608 16.520 23.004L16.520 23.004Q15.156 23.532 14.452 23.708L14.452 23.708Q11.812 24.148 9.524 23.532L9.524 23.532Q8.380 23.312 7.588 22.740L7.588 22.740Q7.104 22.256 6.928 21.860L6.928 21.860Q6.664 21.376 6.752 20.804L6.752 20.804L6.752 15.832Q6.752 14.424 7.544 13.632Q8.336 12.840 9.788 12.840L9.788 12.840Q10.756 12.708 12.560 12.708ZM16.388 20.936L16.388 20.936Q16.388 20.496 16.080 20.166Q15.772 19.836 15.332 19.836Q14.892 19.836 14.540 20.188Q14.188 20.540 14.188 20.936Q14.188 21.332 14.518 21.640Q14.848 21.948 15.288 22.036L15.288 22.036Q15.772 22.036 16.080 21.706Q16.388 21.376 16.388 20.936Z"/>',
  "seti:react": '<path d="M18.955 15.993L18.993 15.993Q18.993 16.107 18.993 16.297L18.993 16.297Q19.221 18.615 19.221 19.774Q19.221 20.933 18.651 21.693Q18.081 22.453 17.207 22.529L17.207 22.529Q16.333 22.719 15.307 22.301L15.307 22.301Q14.547 21.921 13.179 21.009L13.179 21.009Q12.305 20.439 11.849 20.173L11.849 20.173Q10.671 21.123 9.949 21.579L9.949 21.579Q9.341 21.997 8.771 22.187L8.771 22.187Q7.707 22.643 6.795 22.472Q5.883 22.301 5.332 21.579Q4.781 20.857 4.762 19.679Q4.743 18.501 4.971 15.879L4.971 15.879Q3.527 15.423 2.805 14.929L2.805 14.929Q1.855 14.473 0.905 13.523L0.905 13.523Q0.145 12.725 0.183 11.794Q0.221 10.863 1.057 10.065L1.057 10.065Q1.665 9.343 2.691 8.849L2.691 8.849Q3.299 8.507 4.591 8.051L4.591 8.051Q4.667 8.051 4.838 7.994Q5.009 7.937 5.085 7.937L5.085 7.937L4.743 5.315Q4.705 4.479 4.971 3.073L4.971 3.073Q5.237 2.085 6.054 1.667Q6.871 1.249 7.935 1.515L7.935 1.515Q8.885 1.743 9.835 2.351L9.835 2.351Q10.519 2.769 11.393 3.529L11.393 3.529Q11.545 3.605 11.735 3.871L11.735 3.871L11.849 4.023Q13.749 2.579 14.813 1.971L14.813 1.971Q16.029 1.173 17.207 1.515L17.207 1.515Q18.081 1.705 18.594 2.446Q19.107 3.187 19.221 4.365L19.221 4.365L19.221 6.265Q19.221 6.645 19.031 7.405L19.031 7.405Q18.917 7.899 18.841 8.165L18.841 8.165Q19.905 8.507 20.874 8.982Q21.843 9.457 22.261 9.761L22.261 9.761Q22.983 10.255 23.401 10.882Q23.819 11.509 23.819 12.193Q23.819 12.877 23.401 13.504Q22.983 14.131 22.261 14.625L22.261 14.625Q21.805 14.929 20.855 15.423L20.855 15.423Q20.171 15.537 18.955 15.993L18.955 15.993ZM10.861 15.841L12.077 15.879Q12.267 15.879 12.685 15.841L12.685 15.841Q13.255 15.765 13.521 15.765L13.521 15.765Q14.015 15.765 14.357 15.271L14.357 15.271Q15.535 13.371 15.991 12.307L15.991 12.307Q16.105 12.155 16.105 11.927Q16.105 11.699 15.991 11.623L15.991 11.623Q15.421 10.521 14.205 8.659L14.205 8.659Q14.053 8.279 13.635 8.279L13.635 8.279Q11.621 8.279 10.557 8.165L10.557 8.165Q9.607 8.165 9.113 9.001L9.113 9.001Q8.657 9.723 8.391 10.179L8.391 10.179L7.859 11.167Q7.517 11.661 7.460 11.870Q7.403 12.079 7.460 12.288Q7.517 12.497 7.859 13.029L7.859 13.029L8.391 13.979L8.847 14.739Q9.227 15.347 9.379 15.499L9.379 15.499Q9.607 15.765 9.911 15.803L9.911 15.803Q10.139 15.841 10.861 15.841L10.861 15.841ZM5.199 14.929L5.199 14.929Q5.921 13.029 6.263 12.193L6.263 12.193L6.263 11.737L5.199 9.001Q3.071 9.647 1.893 10.521L1.893 10.521Q1.057 11.167 1.057 11.908Q1.057 12.649 1.893 13.257L1.893 13.257Q2.501 13.903 3.451 14.321L3.451 14.321Q4.021 14.587 5.199 14.929ZM18.613 8.887L18.613 8.887Q18.157 9.951 17.435 11.851L17.435 11.851L17.397 11.965Q17.359 12.079 17.435 12.079L17.435 12.079Q18.157 13.979 18.613 15.157L18.613 15.157Q19.069 14.929 20.019 14.435L20.019 14.435Q21.273 13.865 21.805 13.523L21.805 13.523Q22.793 12.877 22.793 12.079Q22.793 11.281 21.843 10.673L21.843 10.673Q21.197 10.103 19.753 9.419L19.753 9.419Q18.955 9.077 18.613 8.887ZM5.883 7.481L5.921 7.671Q7.821 7.481 8.885 7.215L8.885 7.215Q8.961 7.215 9.037 7.139L9.037 7.139L9.113 7.101Q9.797 6.151 11.013 4.707L11.013 4.707Q10.063 3.909 9.569 3.529L9.569 3.529Q8.733 2.883 7.935 2.579L7.935 2.579Q6.947 2.237 6.339 2.598Q5.731 2.959 5.541 4.023L5.541 4.023Q5.465 4.745 5.579 5.695L5.579 5.695Q5.655 6.265 5.883 7.481L5.883 7.481ZM17.777 7.709L17.777 7.671Q17.777 7.633 17.834 7.462Q17.891 7.291 17.891 7.215L17.891 7.215Q18.157 6.037 18.157 5.391L18.157 5.391Q18.233 4.327 17.891 3.529L17.891 3.529Q17.739 2.921 17.321 2.655Q16.903 2.389 16.371 2.465L16.371 2.465Q15.421 2.617 14.509 3.225L14.509 3.225Q13.939 3.567 12.951 4.479L12.951 4.479L12.685 4.707Q13.293 5.543 14.471 6.987L14.471 6.987L14.813 7.329L17.777 7.709ZM5.921 16.221L5.921 16.221Q5.883 16.449 5.807 16.867L5.807 16.867Q5.579 17.931 5.541 18.425L5.541 18.425Q5.465 19.299 5.693 20.059L5.693 20.059Q5.845 20.933 6.434 21.275Q7.023 21.617 7.935 21.351L7.935 21.351Q8.695 21.123 9.493 20.591L9.493 20.591Q9.949 20.249 10.823 19.489L10.823 19.489L11.127 19.223Q10.443 18.273 9.227 16.829L9.227 16.829Q8.999 16.601 8.885 16.601L8.885 16.601Q7.517 16.601 5.921 16.221ZM12.571 19.223L12.571 19.223Q13.065 19.869 14.015 20.553L14.015 20.553Q14.889 21.199 15.649 21.465L15.649 21.465Q17.549 22.035 17.891 20.173L17.891 20.173Q18.043 19.337 17.967 18.349L17.967 18.349Q17.929 17.741 17.701 16.525L17.701 16.525L17.663 16.373L16.903 16.449Q15.307 16.563 14.585 16.829L14.585 16.829Q14.243 17.019 13.939 17.361L13.939 17.361Q13.749 17.589 13.445 18.045L13.445 18.045Q13.179 18.425 13.046 18.634Q12.913 18.843 12.571 19.223ZM10.443 7.101L13.293 7.101Q13.027 6.797 12.552 6.265Q12.077 5.733 11.849 5.429L11.849 5.429L11.659 5.695Q10.937 6.607 10.443 7.101L10.443 7.101ZM12.837 17.361L13.293 16.829L10.557 16.829Q10.785 17.133 11.260 17.665Q11.735 18.197 11.963 18.501L11.963 18.501Q12.229 18.083 12.837 17.361L12.837 17.361ZM8.391 15.651L8.391 15.651Q8.239 15.385 7.935 14.853L7.935 14.853Q7.289 13.789 6.985 13.143L6.985 13.143L6.263 15.157Q6.909 15.423 8.391 15.651ZM16.713 13.143L16.713 13.143L15.307 15.651L17.435 15.271Q17.283 14.511 16.713 13.143ZM6.985 10.787L6.985 10.787L8.391 8.279L6.263 8.621L6.415 9.115Q6.681 10.217 6.985 10.787ZM15.307 8.279L15.307 8.279Q15.535 8.773 16.010 9.476Q16.485 10.179 16.713 10.673L16.713 10.673Q17.207 9.229 17.435 8.659L17.435 8.659Q16.523 8.621 15.307 8.279Z"/>',
  "seti:rescript": '<path d="M23.825 5.486L23.825 5.486Q23.825 6.861 23.115 8.066Q22.406 9.270 21.202 10.000Q19.998 10.732 18.557 10.732Q17.117 10.732 15.913 10.044Q14.709 9.355 14.021 8.151Q13.333 6.948 13.333 5.486Q13.333 4.023 14.021 2.820Q14.709 1.616 15.913 0.928Q17.117 0.239 18.536 0.239Q19.955 0.239 21.159 0.928Q22.363 1.616 23.094 2.820Q23.825 4.023 23.825 5.486ZM4.862 0.111L9.291 0.111L9.291 19.332Q9.291 20.492 9.248 20.922L9.248 20.922Q9.205 21.568 9.011 22.041Q8.818 22.514 8.366 22.965Q7.915 23.416 7.399 23.632L7.399 23.632Q7.055 23.803 6.410 23.847L6.410 23.847Q6.023 23.890 4.733 23.890L4.733 23.890Q3.572 23.890 3.142 23.847L3.142 23.847Q2.497 23.803 2.024 23.610Q1.551 23.416 1.099 22.965Q0.648 22.514 0.433 21.998L0.433 21.998Q0.261 21.654 0.175 21.009L0.175 21.009Q0.175 20.579 0.175 19.332L0.175 19.332L0.175 4.797Q0.175 3.378 0.175 2.863L0.175 2.863Q0.261 2.088 0.454 1.701Q0.648 1.315 1.013 0.949Q1.379 0.584 1.809 0.390Q2.239 0.197 2.970 0.154L2.970 0.154Q3.443 0.111 4.862 0.111L4.862 0.111Z"/>',
  "seti:R": '<path d="M12.000 18.678L12.000 18.678Q8.808 18.678 6.120 17.628Q3.432 16.578 1.836 14.772Q0.240 12.966 0.240 10.824Q0.240 8.682 1.836 6.876Q3.432 5.070 6.120 3.999Q8.808 2.928 12.000 2.928Q15.192 2.928 17.880 3.999Q20.568 5.070 22.164 6.876Q23.760 8.682 23.760 10.824Q23.760 12.966 22.164 14.772Q20.568 16.578 17.880 17.628Q15.192 18.678 12.000 18.678ZM13.806 6.036L13.806 6.036Q11.370 6.036 9.312 6.750Q7.254 7.464 6.057 8.703Q4.860 9.942 4.860 11.391Q4.860 12.840 6.057 14.079Q7.254 15.318 9.312 16.053Q11.370 16.788 13.806 16.788L13.806 16.788Q17.712 16.788 19.938 15.486L19.938 15.486Q22.374 14.100 22.374 11.412Q22.374 8.724 19.938 7.296L19.938 7.296Q17.712 6.036 13.806 6.036ZM18.678 15.024L18.132 15.108Q18.342 15.192 18.552 15.276L18.552 15.276Q19.014 15.402 19.266 15.570L19.266 15.570Q19.602 15.738 19.854 15.948L19.854 15.948Q19.938 16.074 20.022 16.200L20.022 16.200L22.920 21.030L18.384 21.030L16.242 17.082L15.990 16.662Q15.738 16.242 15.570 16.116L15.570 16.116Q15.234 15.864 15.024 15.864L15.024 15.864L13.932 15.864L13.932 21.072L9.942 21.072L9.942 7.842L18.006 7.842L18.552 7.884Q19.266 8.010 19.812 8.304L19.812 8.304Q20.610 8.682 21.072 9.354L21.072 9.354Q21.660 10.194 21.660 11.391Q21.660 12.588 21.114 13.428L21.114 13.428Q20.652 14.142 19.896 14.562L19.896 14.562Q19.350 14.856 18.678 15.024L18.678 15.024ZM16.410 10.698L16.410 10.698L13.974 10.698L13.974 12.966L16.410 12.924L16.704 12.882Q17.040 12.798 17.250 12.588L17.250 12.588Q17.544 12.294 17.502 11.790L17.502 11.790Q17.544 11.076 16.956 10.824L16.956 10.824Q16.662 10.698 16.410 10.698L16.410 10.698Z"/>',
  "seti:ruby": '<path d="M13.913 0.300L14.453 0.030L20.212 0.030Q20.302 0.030 20.438 0.098Q20.573 0.165 20.663 0.165L20.663 0.165Q23.363 0.840 23.768 3.270L23.768 3.270Q23.768 3.405 23.835 3.698Q23.902 3.990 23.902 4.125L23.902 4.125L23.902 5.250Q23.902 5.385 23.835 5.678Q23.768 5.970 23.768 6.105L23.768 6.105L23.272 12.855Q22.732 18.975 22.643 22.125L22.643 22.125Q22.598 22.530 22.463 22.688Q22.327 22.845 21.923 22.845L21.923 22.845Q21.157 22.890 19.672 22.957Q18.188 23.025 17.422 23.115L17.422 23.115Q15.892 23.160 12.788 23.385Q9.683 23.610 8.152 23.655L8.152 23.655Q7.297 23.655 5.588 23.970L5.588 23.970L4.193 23.970Q4.148 23.970 3.990 23.880Q3.832 23.790 3.787 23.790L3.787 23.790Q2.482 23.610 1.605 22.845Q0.728 22.080 0.413 20.865L0.413 20.865Q0.322 20.640 0.255 20.212Q0.188 19.785 0.098 19.605L0.098 19.605L0.098 18.885Q0.098 18.840 0.188 18.660Q0.277 18.480 0.277 18.345L0.277 18.345Q0.277 17.760 0.345 16.567Q0.413 15.375 0.413 14.835L0.413 14.835Q0.413 13.530 0.548 12.990L0.548 12.990Q1.402 10.785 2.213 9.345L2.213 9.345Q3.248 7.455 4.598 6.105L4.598 6.105Q6.532 4.035 8.468 2.775L8.468 2.775Q10.672 1.335 13.058 0.750L13.058 0.750Q13.328 0.570 13.913 0.300L13.913 0.300Z"/>',
  "seti:rust": '<path d="M18.419 2.539L18.419 2.983L18.419 3.686L18.530 3.797L18.642 3.797Q18.826 3.760 19.178 3.704Q19.529 3.649 19.696 3.575Q19.863 3.501 19.992 3.630Q20.122 3.760 20.047 3.926Q19.973 4.093 19.918 4.444Q19.863 4.796 19.825 4.981L19.825 4.981L19.825 5.092L19.936 5.203Q19.936 5.314 20.159 5.314L20.159 5.314L21.194 5.314Q21.564 5.314 21.527 5.647L21.527 5.647L21.527 5.906Q21.453 6.128 21.232 6.572L21.232 6.572L21.084 6.831L21.084 6.942L21.157 7.016Q21.194 7.090 21.194 7.164L21.194 7.164L21.305 7.164Q21.491 7.238 21.842 7.293Q22.194 7.349 22.360 7.367Q22.526 7.386 22.601 7.589Q22.674 7.793 22.601 7.978L22.601 7.978L22.305 8.385Q22.082 8.644 22.008 8.792L22.008 8.792L22.008 9.014Q22.008 9.088 22.119 9.162L22.119 9.162L22.230 9.236L23.155 9.606Q23.340 9.680 23.396 9.846Q23.451 10.013 23.267 10.161L23.267 10.161Q22.822 10.642 22.489 10.864L22.489 10.864L22.489 11.197L22.526 11.271Q22.637 11.308 22.712 11.308L22.712 11.308L22.970 11.493Q23.303 11.715 23.488 11.789Q23.674 11.863 23.674 12.066Q23.674 12.270 23.526 12.381L23.526 12.381L22.601 12.936L22.601 13.047Q22.601 13.232 22.601 13.269Q22.601 13.306 22.712 13.417L22.712 13.417Q23.155 13.861 23.415 13.972L23.415 13.972Q23.563 14.157 23.507 14.305Q23.451 14.453 23.267 14.564L23.267 14.564Q22.601 14.786 22.341 14.897L22.341 14.897L22.305 14.934Q22.230 14.971 22.194 15.045Q22.156 15.119 22.230 15.267L22.230 15.267L22.230 15.378Q22.415 15.526 22.637 15.933L22.637 15.933L22.822 16.192Q22.896 16.266 22.878 16.414Q22.860 16.562 22.712 16.636L22.712 16.636L22.601 16.673L22.453 16.747Q22.305 16.747 22.008 16.821Q21.712 16.895 21.564 16.895L21.564 16.895L21.416 16.895Q21.416 16.932 21.361 16.987Q21.305 17.043 21.305 17.117L21.305 17.117L21.343 17.228L21.416 17.339L21.787 18.153Q21.860 18.227 21.805 18.375Q21.749 18.523 21.675 18.597L21.675 18.597L20.270 18.597Q20.159 18.745 20.159 18.967L20.159 18.967Q20.232 19.115 20.288 19.411Q20.343 19.707 20.418 19.873Q20.491 20.040 20.343 20.188Q20.195 20.336 19.936 20.336L19.936 20.336Q19.752 20.299 19.400 20.243Q19.049 20.188 18.901 20.114L18.901 20.114L18.790 20.114L18.604 20.299Q18.567 20.336 18.642 20.336L18.642 20.336L18.642 21.372Q18.642 21.742 18.308 21.742L18.308 21.742L18.087 21.742Q17.605 21.594 17.162 21.261L17.162 21.261L17.050 21.261Q16.939 21.261 16.866 21.335Q16.791 21.409 16.791 21.520L16.791 21.520Q16.791 21.668 16.736 21.964Q16.680 22.260 16.680 22.426Q16.680 22.593 16.477 22.667Q16.273 22.741 16.125 22.667L16.125 22.667Q15.756 22.297 15.311 22.075L15.311 22.075L15.200 22.075Q15.090 22.075 15.015 22.149Q14.942 22.223 14.942 22.297L14.942 22.297L14.608 23.222Q14.497 23.481 14.276 23.481L14.276 23.481Q14.201 23.481 14.165 23.407L14.165 23.407L14.128 23.370Q13.683 22.889 13.462 22.556L13.462 22.556L13.203 22.556Q13.128 22.556 13.055 22.630Q12.980 22.704 12.980 22.778L12.980 22.778L12.537 23.592Q12.425 23.740 12.222 23.740Q12.018 23.740 11.945 23.592L11.945 23.592L11.352 22.667L11.020 22.667L10.206 23.481Q10.095 23.592 9.762 23.592L9.762 23.592Q9.651 23.592 9.651 23.370L9.651 23.370L9.280 22.260Q9.243 22.186 9.169 22.186L9.169 22.186L8.837 22.186Q8.651 22.371 8.281 22.593L8.281 22.593L8.023 22.778L7.800 22.667Q7.467 22.519 7.338 22.426Q7.208 22.334 7.208 22.186L7.208 22.186Q7.097 21.853 7.097 21.150L7.097 21.150L7.060 21.113Q7.060 21.039 6.986 21.039Q6.912 21.039 6.857 20.983Q6.801 20.928 6.764 20.928L6.764 20.928L6.616 20.928L6.505 21.039L5.691 21.372Q5.543 21.483 5.395 21.409Q5.247 21.335 5.247 21.150L5.247 21.150L5.247 19.892L5.136 19.781L5.026 19.781Q4.840 19.818 4.489 19.873Q4.138 19.929 3.971 20.003Q3.804 20.077 3.675 19.947Q3.545 19.818 3.619 19.651Q3.693 19.485 3.749 19.133Q3.804 18.782 3.841 18.597L3.841 18.597L3.841 18.486L3.731 18.375L2.583 18.375Q2.250 18.375 2.250 18.042L2.250 18.042L2.250 17.783Q2.324 17.561 2.583 17.117L2.583 17.117L2.694 16.858L2.694 16.710Q2.657 16.636 2.583 16.636L2.583 16.636Q2.583 16.562 2.510 16.562L2.510 16.562L2.472 16.525Q2.287 16.525 1.936 16.469Q1.584 16.414 1.418 16.414Q1.251 16.414 1.177 16.210Q1.103 16.007 1.214 15.822L1.214 15.822Q1.548 15.489 1.769 15.008L1.769 15.008L1.769 14.786L1.584 14.638Q1.510 14.564 1.436 14.564L1.436 14.564L0.622 14.231Q0.437 14.120 0.382 13.953Q0.326 13.787 0.511 13.639L0.511 13.639Q0.696 13.565 1.066 13.269L1.066 13.269Q1.288 13.047 1.436 12.936L1.436 12.936L1.436 12.714Q1.436 12.492 1.325 12.492L1.325 12.492L0.511 12.011Q0.326 11.937 0.326 11.733Q0.326 11.530 0.511 11.456L0.511 11.456L1.436 10.864L1.436 10.642L0.622 9.828Q0.548 9.754 0.548 9.606Q0.548 9.458 0.622 9.347L0.622 9.347L0.659 9.347Q0.733 9.310 0.733 9.236L0.733 9.236L1.769 8.903L1.769 8.792Q1.843 8.718 1.806 8.533L1.806 8.533L1.769 8.422Q1.658 8.311 1.492 8.089Q1.325 7.867 1.214 7.719Q1.103 7.571 1.177 7.367Q1.251 7.164 1.418 7.127Q1.584 7.090 1.936 7.034Q2.287 6.979 2.472 6.942L2.472 6.942L2.583 6.942Q2.583 6.868 2.639 6.812Q2.694 6.757 2.694 6.683L2.694 6.683L2.694 6.572L2.583 6.461L2.250 5.647Q2.139 5.499 2.213 5.351Q2.287 5.203 2.472 5.203L2.472 5.203L3.731 5.203L3.767 5.129Q3.767 5.092 3.841 5.092L3.841 5.092L3.841 4.981Q3.619 4.278 3.619 3.945L3.619 3.945Q3.545 3.760 3.675 3.630Q3.804 3.501 3.989 3.575L3.989 3.575Q4.322 3.575 5.026 3.797L5.026 3.797L5.136 3.797L5.284 3.649Q5.321 3.575 5.247 3.575L5.247 3.575L5.247 2.539Q5.247 2.206 5.580 2.206L5.580 2.206L5.840 2.206Q6.061 2.280 6.505 2.539L6.505 2.539L6.764 2.650L6.912 2.650Q6.986 2.613 6.986 2.539L6.986 2.539Q7.060 2.539 7.060 2.465L7.060 2.465L7.097 2.428Q7.097 2.243 7.153 1.891Q7.208 1.540 7.208 1.373Q7.208 1.207 7.412 1.133Q7.615 1.059 7.800 1.133L7.800 1.133Q8.133 1.503 8.614 1.725L8.614 1.725L8.837 1.725L8.947 1.614L8.947 1.540Q8.985 1.466 9.058 1.392L9.058 1.392L9.392 0.578Q9.503 0.430 9.576 0.393Q9.651 0.356 9.872 0.356L9.872 0.356L9.983 0.467Q10.058 0.652 10.354 1.022L10.354 1.022Q10.576 1.244 10.686 1.392L10.686 1.392L10.797 1.392Q10.872 1.392 10.945 1.318L10.945 1.318L11.020 1.281L11.500 0.467Q11.648 0.282 11.815 0.263Q11.982 0.245 12.055 0.356L12.055 0.356L12.166 0.467L12.759 1.392L13.091 1.392Q13.166 1.392 13.203 1.318L13.203 1.318L13.239 1.281Q13.683 0.800 13.794 0.578L13.794 0.578Q13.869 0.504 14.017 0.504Q14.165 0.504 14.276 0.578L14.276 0.578L14.276 0.689Q14.497 1.392 14.608 1.614L14.608 1.614L14.720 1.725L14.942 1.725Q15.459 1.540 15.866 1.133L15.866 1.133Q16.052 1.059 16.255 1.133Q16.459 1.207 16.459 1.373Q16.459 1.540 16.514 1.891Q16.569 2.243 16.569 2.428L16.569 2.428L16.607 2.465Q16.607 2.539 16.680 2.539L16.680 2.539L16.791 2.539Q16.902 2.613 16.976 2.613Q17.050 2.613 17.050 2.539L17.050 2.539Q17.273 2.428 17.976 2.206L17.976 2.206Q18.160 2.095 18.290 2.187Q18.419 2.280 18.419 2.539L18.419 2.539ZM5.580 6.128L5.580 6.128L14.386 6.128Q15.090 6.128 15.422 6.239L15.422 6.239Q16.532 6.609 17.050 7.275L17.050 7.275Q17.605 7.867 17.605 8.681L17.605 8.681Q17.605 9.347 17.273 10.050L17.273 10.050Q16.902 10.605 16.348 10.975L16.348 10.975Q16.125 11.197 15.977 11.197L15.977 11.197Q16.052 11.271 16.163 11.326Q16.273 11.382 16.348 11.456L16.348 11.456L16.532 11.604Q16.939 11.974 17.050 12.233L17.050 12.233Q17.383 12.788 17.383 13.417L17.383 13.417Q17.383 13.528 17.605 13.750L17.605 13.750Q17.753 13.898 18.049 13.972L18.049 13.972Q18.197 13.972 18.549 13.972Q18.901 13.972 19.122 13.750L19.122 13.750Q19.270 13.602 19.381 13.306L19.381 13.306L19.456 13.047L19.456 12.492Q19.456 12.381 19.474 12.381Q19.492 12.381 19.566 12.381L19.566 12.381L20.380 12.381L20.380 10.864Q20.232 10.790 19.881 10.623Q19.529 10.457 19.345 10.383L19.345 10.383Q19.308 10.346 19.122 10.290Q18.938 10.235 18.901 10.161L18.901 10.161Q18.346 9.976 18.530 9.236L18.530 9.236Q19.011 8.089 19.345 7.497L19.345 7.497L19.345 7.386Q18.901 6.683 18.642 6.387L18.642 6.387Q18.197 5.832 17.716 5.425L17.716 5.425Q16.014 3.871 13.573 3.353L13.573 3.353L13.462 3.353Q12.759 4.056 12.314 4.389L12.314 4.389Q12.130 4.574 11.834 4.574Q11.538 4.574 11.352 4.389L11.352 4.389L10.317 3.353L10.206 3.353Q9.762 3.464 9.058 3.686L9.058 3.686Q7.245 4.352 5.802 5.758L5.802 5.758Q5.580 6.017 5.580 6.128ZM18.642 16.747L18.642 16.747L15.200 16.747Q14.831 16.747 14.720 16.636L14.720 16.636Q14.128 16.340 13.905 15.489L13.905 15.489L13.869 15.267Q13.683 14.601 13.683 14.231L13.683 14.231Q13.683 13.972 13.480 13.528Q13.276 13.084 12.944 12.843Q12.610 12.603 12.166 12.603L12.166 12.603L10.095 12.603L10.095 14.083L12.166 14.083Q12.277 14.083 12.296 14.101Q12.314 14.120 12.314 14.231L12.314 14.231L12.314 16.525Q12.314 16.599 12.296 16.617Q12.277 16.636 12.166 16.636L12.166 16.636L5.247 16.636Q5.469 17.006 5.950 17.450L5.950 17.450L6.061 17.450Q6.986 17.228 7.430 17.228L7.430 17.228Q7.689 17.154 7.930 17.283Q8.171 17.413 8.244 17.672L8.244 17.672L8.614 19.189L8.614 19.300Q9.540 19.670 9.983 19.781L9.983 19.781Q10.761 20.003 11.352 20.003L11.352 20.003Q11.907 20.077 12.573 20.040L12.573 20.040Q12.980 20.003 13.794 19.892L13.794 19.892Q14.386 19.781 15.534 19.300L15.534 19.300L15.534 19.189L15.866 17.672Q16.088 17.080 16.680 17.228L16.680 17.228L18.087 17.561L18.197 17.561Q18.197 17.228 18.642 16.747ZM6.283 8.681L4.914 8.681L5.247 9.347L5.284 9.458Q5.321 9.643 5.247 9.717L5.247 9.717Q5.247 9.902 4.988 10.087L4.988 10.087L4.914 10.161Q3.989 10.642 3.508 10.753L3.508 10.753L3.434 10.753Q3.397 10.790 3.397 10.864L3.397 10.864L3.397 11.456Q3.397 12.603 3.731 13.972L3.731 13.972L3.767 14.046Q3.767 14.120 3.841 14.120L3.841 14.120L6.283 14.120L6.283 8.681ZM9.872 10.272L9.872 10.272Q9.910 10.272 9.947 10.272L9.947 10.272L9.872 10.272L12.537 10.272Q12.980 10.272 13.239 10.161L13.239 10.161L13.351 10.087Q13.498 9.976 13.573 9.809Q13.646 9.643 13.628 9.402Q13.610 9.162 13.462 9.014L13.462 9.014Q13.091 8.681 12.648 8.681L12.648 8.681L9.762 8.681Q9.872 9.236 9.872 10.272ZM2.917 9.125L2.917 9.125Q2.917 9.384 3.138 9.606Q3.360 9.828 3.619 9.828Q3.878 9.828 4.100 9.606Q4.322 9.384 4.322 9.125Q4.322 8.866 4.100 8.644Q3.878 8.422 3.619 8.422Q3.360 8.422 3.138 8.644Q2.917 8.866 2.917 9.125ZM17.605 18.856L17.605 18.856Q17.605 18.597 17.402 18.375Q17.198 18.153 16.921 18.153Q16.643 18.153 16.440 18.375Q16.236 18.597 16.236 18.856Q16.236 19.115 16.440 19.318Q16.643 19.522 16.921 19.522Q17.198 19.522 17.402 19.337Q17.605 19.152 17.605 18.856ZM6.764 18.153L6.764 18.153Q6.468 18.153 6.265 18.375Q6.061 18.597 6.061 18.856Q6.061 19.115 6.265 19.318Q6.468 19.522 6.746 19.522Q7.023 19.522 7.227 19.318Q7.430 19.115 7.430 18.856Q7.430 18.597 7.227 18.375Q7.023 18.153 6.764 18.153ZM12.537 2.983L12.537 2.983Q12.537 2.724 12.352 2.520Q12.166 2.317 11.852 2.317Q11.538 2.317 11.334 2.502Q11.131 2.687 11.131 2.983Q11.131 3.279 11.316 3.482Q11.500 3.686 11.834 3.686L11.834 3.686Q12.314 3.686 12.537 2.983ZM20.047 9.939L20.047 9.939Q20.306 9.939 20.529 9.717Q20.750 9.495 20.750 9.236Q20.750 8.977 20.529 8.755Q20.306 8.533 20.047 8.533Q19.788 8.533 19.566 8.755Q19.345 8.977 19.345 9.254Q19.345 9.532 19.529 9.735Q19.715 9.939 20.047 9.939Z"/>',
  "seti:sass": '<path d="M14.594 13.680L14.594 13.806Q13.838 14.268 12.284 15.234L12.284 15.234L9.974 16.662Q10.730 18.384 10.100 20.232L10.100 20.232Q9.638 21.744 8.525 22.647Q7.412 23.550 5.900 23.760L5.900 23.760Q5.312 23.928 4.472 23.634L4.472 23.634Q3.800 23.466 3.548 22.710L3.548 22.710Q2.750 20.946 3.926 19.560L3.926 19.560L4.346 19.140Q5.144 18.300 5.648 18.006L5.648 18.006Q6.026 17.670 6.950 17.166L6.950 17.166Q7.664 16.788 8.000 16.536L8.000 16.536Q8.084 16.452 8.294 16.410L8.294 16.410L8.546 16.284Q8.378 16.200 8.147 15.990Q7.916 15.780 7.748 15.780L7.748 15.780Q5.984 14.646 4.724 13.386L4.724 13.386Q3.674 12.336 3.296 11.706L3.296 11.706Q2.414 11.034 2.267 10.110Q2.120 9.186 2.624 8.262L2.624 8.262Q3.254 6.750 4.976 4.986L4.976 4.986Q8.000 2.340 12.074 0.912L12.074 0.912Q14.972-0.096 17.576 0.282L17.576 0.282Q17.870 0.408 18.521 0.597Q19.172 0.786 19.424 0.912L19.424 0.912Q20.936 1.542 21.482 2.676Q22.028 3.810 21.524 5.406L21.524 5.406Q20.684 8.094 18.374 9.438L18.374 9.438Q16.778 10.446 15.140 10.824Q13.502 11.202 11.696 10.908L11.696 10.908Q10.604 10.740 9.596 9.732L9.596 9.732Q9.344 9.186 9.176 9.060L9.176 9.060L9.218 8.976Q9.260 8.892 9.344 8.808L9.344 8.808L9.386 8.808Q9.512 8.850 9.596 8.934L9.596 8.934Q10.940 10.320 12.998 9.858L12.998 9.858Q14.804 9.522 16.106 8.892L16.106 8.892Q17.618 8.178 18.626 6.960Q19.634 5.742 19.970 4.608L19.970 4.608Q20.306 3.138 18.794 2.256L18.794 2.256Q17.534 1.626 15.644 1.836L15.644 1.836Q12.116 2.382 8.546 4.608L8.546 4.608Q6.572 5.700 5.522 7.086L5.522 7.086Q5.144 7.632 4.598 8.682L4.598 8.682Q4.304 9.480 4.430 10.236Q4.556 10.992 5.144 11.538L5.144 11.538Q6.194 12.588 6.698 13.008L6.698 13.008L9.176 15.108L9.344 15.150Q9.512 15.192 9.596 15.108L9.596 15.108Q10.100 14.772 10.646 14.562L10.646 14.562Q12.620 13.470 14.300 13.134L14.300 13.134Q14.300 13.428 14.342 13.533Q14.384 13.638 14.510 13.722L14.510 13.722L14.594 13.806L14.594 13.680ZM8.924 17.082L8.924 17.082Q7.160 18.048 5.900 19.308L5.900 19.308Q5.186 20.022 4.976 20.988L4.976 20.988Q4.892 21.576 5.228 21.870Q5.564 22.164 6.194 22.038L6.194 22.038Q7.664 21.702 8.546 20.358L8.546 20.358Q9.008 19.602 9.092 18.804L9.092 18.804Q9.134 18.132 8.924 17.082Z"/>',
  "seti:spring": '<path d="M21.571 1.813L21.655 1.603Q22.915 5.005 23.377 7.483L23.377 7.483Q24.007 10.675 23.629 13.531L23.629 13.531Q23.041 18.067 19.555 21.175L19.555 21.175Q17.749 22.561 15.775 23.275L15.775 23.275Q13.675 24.031 11.575 23.905L11.575 23.905Q6.451 23.737 3.154 19.873Q-0.143 16.009 0.277 11.053L0.277 11.053Q0.487 7.231 3.049 4.501L3.049 4.501Q5.569 1.057 10.651 0.175L10.651 0.175Q15.187-0.413 19.177 2.527L19.177 2.527Q19.975 3.199 20.227 3.283L20.227 3.283Q20.563 3.451 20.815 3.157L20.815 3.157Q20.983 2.947 21.403 1.981L21.403 1.981Q21.487 1.981 21.571 1.813L21.571 1.813ZM20.605 9.205L20.605 9.205Q19.723 13.153 15.775 16.429L15.775 16.429Q14.767 17.269 13.339 17.941L13.339 17.941Q12.457 18.361 10.609 19.033L10.609 19.033L9.853 19.327Q9.601 19.411 9.076 19.600Q8.551 19.789 8.299 19.873L8.299 19.873Q8.299 20.125 8.425 20.251L8.425 20.251Q9.223 20.209 10.903 20.167L10.903 20.167Q13.045 20.125 14.095 20.083L14.095 20.083Q15.817 19.957 17.203 19.705L17.203 19.705Q19.807 19.327 21.214 17.857Q22.621 16.387 23.125 13.699L23.125 13.699Q23.629 10.507 22.579 6.727L22.579 6.727Q22.369 6.055 21.991 4.669L21.991 4.669L21.529 3.031Q21.193 3.577 21.025 3.577L21.025 3.577Q19.471 5.971 16.153 7.525L16.153 7.525Q15.187 7.945 13.843 8.155L13.843 8.155Q13.003 8.281 11.365 8.365L11.365 8.365L10.525 8.449Q7.585 8.659 5.905 10.003L5.905 10.003Q4.897 10.759 4.288 12.019Q3.679 13.279 3.658 14.602Q3.637 15.925 4.225 16.975L4.225 16.975Q4.687 17.941 5.317 18.214Q5.947 18.487 6.955 18.277L6.955 18.277Q7.291 18.193 7.942 18.004Q8.593 17.815 8.929 17.731L8.929 17.731Q13.045 16.681 15.775 14.833L15.775 14.833Q18.841 12.691 20.605 9.205ZM4.729 18.781L4.729 18.781Q4.351 18.781 4.078 19.117Q3.805 19.453 3.805 19.852Q3.805 20.251 4.141 20.503Q4.477 20.755 4.855 20.755Q5.233 20.755 5.506 20.440Q5.779 20.125 5.779 19.663Q5.779 19.201 5.548 18.991Q5.317 18.781 4.729 18.781Z"/>',
  "seti:slim": '<path d="M0.135 20.463L0.135 20.463L0.135 3.663Q0.135 3.579 0.198 3.516Q0.261 3.453 0.261 3.411L0.261 3.411Q0.723 1.731 1.983 1.017L1.983 1.017L3.537 0.261L20.337 0.261Q20.421 0.261 20.484 0.324Q20.547 0.387 20.589 0.387L20.589 0.387Q22.311 0.975 23.361 2.613L23.361 2.613Q23.571 3.201 23.865 3.537L23.865 3.537L23.865 20.337Q23.865 20.379 23.802 20.463Q23.739 20.547 23.739 20.589L23.739 20.589Q23.319 22.017 22.059 22.941L22.059 22.941Q21.219 23.571 20.337 23.739L20.337 23.739L3.537 23.739Q3.453 23.739 3.390 23.676Q3.327 23.613 3.285 23.613L3.285 23.613Q1.563 23.025 0.513 21.387L0.513 21.387Q0.387 21.261 0.135 20.463ZM3.789 6.687L3.789 6.687Q4.209 7.191 5.049 8.241L5.049 8.241Q6.435 10.047 7.233 10.887L7.233 10.887Q7.317 10.971 7.485 11.055Q7.653 11.139 7.737 11.139L7.737 11.139L16.137 11.139Q16.221 11.139 16.410 11.076Q16.599 11.013 16.683 11.013L16.683 11.013L17.901 9.459Q19.329 7.653 20.085 6.813L20.085 6.813Q18.111 4.461 15.087 3.579Q12.063 2.697 9.081 3.453L9.081 3.453Q5.889 4.251 3.789 6.687ZM14.037 6.015L14.961 4.713Q14.709 5.553 14.310 7.401Q13.911 9.249 13.659 10.089L13.659 10.089L11.139 10.089Q12.231 8.703 14.037 6.015L14.037 6.015Z"/>',
  "seti:smarty": '<path d="M11.882 16.016L11.882 16.016L9.572 16.016Q8.977 16.016 8.837 15.911Q8.697 15.806 8.592 15.246L8.592 15.246Q8.102 12.761 6.947 10.661L6.947 10.661Q6.387 9.681 5.862 8.246L5.862 8.246Q5.232 6.461 5.547 4.501L5.547 4.501Q5.687 3.241 6.439 2.279Q7.192 1.316 8.382 0.791L8.382 0.791Q10.202-0.014 12.057 0.004Q13.912 0.021 15.697 0.896L15.697 0.896Q17.342 1.631 18.059 3.206Q18.777 4.781 18.462 6.706L18.462 6.706Q18.287 7.826 17.832 8.981L17.832 8.981Q17.517 9.786 16.817 11.081L16.817 11.081Q15.662 13.391 15.382 15.141L15.382 15.141Q15.277 15.666 15.189 15.841Q15.102 16.016 14.909 16.069Q14.717 16.121 14.192 16.121L14.192 16.121Q13.317 16.016 11.882 16.016ZM11.777 23.996L11.777 23.996L9.152 23.996Q8.802 23.996 8.644 23.856Q8.487 23.716 8.487 23.331L8.487 23.331L8.487 22.876Q8.487 22.386 8.522 22.229Q8.557 22.071 8.749 22.036Q8.942 22.001 9.502 22.001L9.502 22.001L14.507 22.036Q14.892 22.001 15.032 22.159Q15.172 22.316 15.172 22.666L15.172 22.666Q15.172 23.331 15.119 23.559Q15.067 23.786 14.839 23.839Q14.612 23.891 13.947 23.891L13.947 23.891Q13.317 23.996 11.777 23.996ZM14.227 20.041L11.882 20.041L9.152 20.041Q8.837 20.041 8.714 19.936Q8.592 19.831 8.592 19.516L8.592 19.516L8.592 19.201Q8.592 18.641 8.627 18.466Q8.662 18.291 8.837 18.239Q9.012 18.186 9.537 18.186L9.537 18.186L14.507 18.186Q15.172 18.186 15.172 18.851L15.172 18.851L15.172 19.131Q15.172 19.656 15.137 19.814Q15.102 19.971 14.927 20.006Q14.752 20.041 14.227 20.041L14.227 20.041Z"/>',
  "seti:sbt": '<path d="M23.839 13.145L23.877 13.145Q23.877 13.677 23.687 14.551L23.687 14.551L23.611 14.817L7.955 14.817Q6.397 14.817 6.397 16.375L6.397 16.375Q6.397 16.983 6.834 17.325Q7.271 17.667 8.069 17.667L8.069 17.667L22.547 17.667Q21.141 20.365 18.842 21.923Q16.543 23.481 13.484 23.842Q10.425 24.203 7.537 23.025L7.537 23.025Q4.763 21.847 2.825 19.529Q0.887 17.211 0.355 14.209L0.355 14.209Q-0.253 11.131 0.735 8.205L0.735 8.205Q1.723 5.355 3.927 3.284Q6.131 1.213 9.133 0.453L9.133 0.453Q11.603-0.193 14.130 0.263Q16.657 0.719 18.785 2.163Q20.913 3.607 22.205 5.773L22.205 5.773Q21.939 5.925 21.255 5.925L21.255 5.925L13.541 5.925Q12.895 5.925 12.496 6.324Q12.097 6.723 12.097 7.350Q12.097 7.977 12.439 8.300Q12.781 8.623 13.427 8.623L13.427 8.623L23.383 8.623Q23.725 9.535 23.725 10.409L23.725 10.409L10.805 10.409Q9.133 10.409 9.133 11.853L9.133 11.853Q9.133 12.461 9.570 12.803Q10.007 13.145 10.805 13.145L10.805 13.145L22.775 13.145Q23.307 12.993 23.839 13.145L23.839 13.145Z"/>',
  "seti:scala": '<path d="M19.350 0.198L19.350 0.198L19.350 5.700L19.224 5.826Q19.182 5.952 19.098 5.952L19.098 5.952Q18.510 6.540 17.628 6.750L17.628 6.750Q16.662 7.086 14.520 7.548L14.520 7.548L13.974 7.674Q11.622 8.094 7.800 8.598L7.800 8.598Q5.700 8.850 4.650 9.102L4.650 9.102L4.650 3.600Q4.776 3.474 5.196 3.474L5.196 3.474Q8.220 2.970 10.152 2.802L10.152 2.802L11.622 2.592Q13.596 2.298 14.604 2.088L14.604 2.088Q16.242 1.794 17.502 1.374L17.502 1.374L17.670 1.290Q18.300 1.038 18.594 0.870L18.594 0.870Q19.098 0.576 19.350 0.198ZM19.350 7.548L19.350 7.548L19.350 13.050L19.098 13.302Q18.510 13.764 17.250 14.268L17.250 14.268L16.998 14.352Q14.898 14.898 13.848 15.024L13.848 15.024Q13.176 15.150 11.937 15.339Q10.698 15.528 10.026 15.654L10.026 15.654L8.304 15.906Q5.910 16.200 4.650 16.452L4.650 16.452L4.650 10.950Q4.776 10.824 5.028 10.824L5.028 10.824Q6.162 10.698 8.388 10.362Q10.614 10.026 11.748 9.900L11.748 9.900Q14.772 9.480 17.376 8.724L17.376 8.724Q18.090 8.472 18.468 8.262L18.468 8.262Q18.972 7.968 19.350 7.548ZM5.028 23.760L4.776 23.802L4.650 23.802L4.650 18.300Q4.776 18.174 5.028 18.174L5.028 18.174Q5.826 18.048 7.338 17.838Q8.850 17.628 9.648 17.502L9.648 17.502L11.034 17.292Q13.134 16.998 14.142 16.830L14.142 16.830Q15.864 16.494 17.250 16.074L17.250 16.074Q18.048 15.822 18.384 15.612L18.384 15.612Q19.014 15.318 19.350 14.898L19.350 14.898L19.350 20.400Q19.266 20.568 18.972 20.820L18.972 20.820L18.678 21.072Q17.712 21.534 16.200 21.954L16.200 21.954Q14.814 22.332 11.916 22.794L11.916 22.794L11.328 22.878Q7.926 23.424 6.246 23.550L6.246 23.550Q5.784 23.550 5.028 23.760L5.028 23.760Z"/>',
  "seti:ethereum": '<path d="M6.740 12.560L7.460 13L11.940 15.640L12.060 15.640Q16.580 12.880 18.940 11.640L18.940 11.640L18.940 11.520Q18.100 10 16.940 8.240L16.940 8.240L12.060 0.120L11.060 1.760Q10.020 3.480 9.580 4.360L9.580 4.360Q9.260 4.920 8.560 6.060Q7.860 7.200 7.580 7.760L7.580 7.760Q6.060 10.240 5.300 11.360L5.300 11.360L5.300 11.520Q5.660 11.920 6.740 12.560L6.740 12.560ZM12.820 17.760L12.820 17.760Q12.700 17.800 12.380 18L12.380 18L11.940 18.240Q11.460 17.920 10.460 17.360Q9.460 16.800 8.920 16.500Q8.380 16.200 7.260 15.500Q6.140 14.800 5.580 14.480L5.580 14.480Q5.500 14.440 5.300 14.360L5.300 14.360L5.060 14.240L6.060 15.640Q7.820 18.120 8.820 19.360L8.820 19.360Q9.300 20.120 10.360 21.560Q11.420 23 11.940 23.760L11.940 23.760L11.940 23.800Q11.980 23.880 12.060 23.880L12.060 23.880L16.700 17.360Q17.060 16.880 17.820 15.820Q18.580 14.760 18.940 14.240L18.940 14.240Q15.500 16.080 12.820 17.760Z"/>',
  "seti:stylus": '<path d="M20.197 0.406L20.197 0.406Q19.936 0.406 19.559 0.580L19.559 0.580Q19.037 0.754 18.515 1.218L18.515 1.218Q18.225 1.479 17.674 2.117L17.674 2.117Q16.079 3.828 14.948 6.119L14.948 6.119Q13.556 8.555 12.686 11.542L12.686 11.542Q12.309 12.992 12.309 13.920L12.309 13.920Q12.338 14.239 12.556 14.427Q12.773 14.616 13.034 14.558L13.034 14.558Q13.556 14.500 13.962 14.152L13.962 14.152Q14.223 13.920 14.658 13.427L14.658 13.427L14.774 13.282L14.774 12.992Q14.223 13.543 13.962 13.717L13.962 13.717Q13.759 13.862 13.629 13.804Q13.498 13.746 13.498 13.543L13.498 13.543L13.498 12.644Q13.498 11.223 14.136 9.454L14.136 9.454Q14.861 7.482 15.325 6.583L15.325 6.583Q16.427 4.176 17.848 2.755L17.848 2.755Q18.573 1.624 19.849 1.508L19.849 1.508Q20.197 1.508 20.400 1.595Q20.603 1.682 20.661 1.943L20.661 1.943Q20.661 2.030 20.748 2.030L20.748 2.030L20.806 2.001Q20.864 1.943 20.922 1.943L20.922 1.943Q21.125 1.392 21.125 1.116Q21.125 0.841 20.835 0.594Q20.545 0.348 20.197 0.406ZM11.149 9.570L11.149 9.570Q10.685 9.570 10.076 9.990Q9.467 10.411 9.235 10.817L9.235 10.817L9.235 11.020L9.322 10.991L9.438 10.904L9.496 10.817Q9.670 10.614 9.786 10.556L9.786 10.556Q9.960 10.382 10.076 10.324L10.076 10.324Q10.250 10.237 10.424 10.295Q10.598 10.353 10.642 10.556Q10.685 10.759 10.598 10.904L10.598 10.904Q10.511 11.890 10.221 13.572L10.221 13.572L10.134 13.920Q9.525 16.298 8.713 17.806L8.713 17.806Q7.495 20.213 5.987 21.605L5.987 21.605Q5.465 22.040 5.088 22.243L5.088 22.243Q4.566 22.504 4.073 22.504L4.073 22.504Q3.725 22.504 3.566 22.402Q3.406 22.301 3.348 21.982L3.348 21.982Q3.348 21.924 3.261 21.866L3.261 21.866L3.174 21.779Q2.768 22.330 2.913 22.968Q3.058 23.606 3.435 23.606L3.435 23.606Q3.899 23.606 4.450 23.432L4.450 23.432Q4.798 23.316 5.175 23.026L5.175 23.026Q5.378 22.852 5.784 22.446L5.784 22.446L5.987 22.243Q7.553 20.677 8.713 18.531L8.713 18.531Q10.482 15.486 11.410 12.180L11.410 12.180L11.468 12.035Q11.613 11.397 11.671 11.078L11.671 11.078Q11.758 10.556 11.700 10.092L11.700 10.092Q11.700 9.889 11.526 9.729Q11.352 9.570 11.149 9.570Z"/>',
  "seti:svelte": '<path d="M10.924 1.248L5.422 4.734L10.924 1.248Q12.436 0.240 14.284 0.177Q16.132 0.114 17.812 0.933Q19.492 1.752 20.584 3.306L20.584 3.306Q21.382 4.398 21.676 5.721Q21.970 7.044 21.739 8.367Q21.508 9.690 20.794 10.740L20.794 10.740Q21.844 12.798 21.424 15.024L21.424 15.024Q21.214 16.242 20.542 17.292Q19.870 18.342 18.862 19.056L18.862 19.056L13.066 22.752Q11.554 23.760 9.706 23.823Q7.858 23.886 6.178 23.067Q4.498 22.248 3.406 20.694L3.406 20.694Q2.650 19.602 2.335 18.258Q2.020 16.914 2.272 15.612Q2.524 14.310 3.238 13.218L3.238 13.218Q2.146 11.202 2.566 8.976L2.566 8.976Q2.776 7.758 3.448 6.708Q4.120 5.658 5.128 4.944L5.128 4.944L10.924 1.248ZM18.316 4.776L18.316 4.776Q17.518 3.642 16.237 3.159Q14.956 2.676 13.612 3.012L13.612 3.012Q13.192 3.138 12.772 3.348L12.772 3.348L7.018 7.002Q6.304 7.422 5.863 8.094Q5.422 8.766 5.275 9.564Q5.128 10.362 5.317 11.160Q5.506 11.958 5.968 12.630L5.968 12.630Q6.766 13.764 8.047 14.226Q9.328 14.688 10.672 14.352L10.672 14.352Q11.092 14.226 11.512 14.016L11.512 14.016L13.864 12.546Q14.032 12.420 14.200 12.378L14.200 12.378Q14.620 12.294 15.019 12.420Q15.418 12.546 15.628 12.924L15.628 12.924Q15.922 13.302 15.838 13.806L15.838 13.806Q15.754 14.226 15.460 14.478L15.460 14.478L9.832 18.090Q9.664 18.216 9.496 18.258L9.496 18.258Q9.076 18.342 8.698 18.195Q8.320 18.048 8.089 17.733Q7.858 17.418 7.858 17.082L7.858 17.082L7.858 16.704L7.648 16.620Q6.682 16.326 5.842 15.780L5.842 15.780L5.212 15.360L5.128 15.654Q5.044 15.906 5.002 16.200L5.002 16.200Q4.834 16.998 5.023 17.796Q5.212 18.594 5.674 19.224L5.674 19.224Q6.430 20.316 7.627 20.799Q8.824 21.282 10.126 21.030L10.126 21.030L10.378 20.988Q10.840 20.862 11.218 20.652L11.218 20.652L17.014 16.998Q17.686 16.578 18.127 15.906Q18.568 15.234 18.715 14.436Q18.862 13.638 18.673 12.840Q18.484 12.042 18.022 11.370L18.022 11.370Q17.224 10.236 15.943 9.774Q14.662 9.312 13.318 9.648L13.318 9.648Q12.898 9.774 12.478 9.984L12.478 9.984L10.126 11.454Q9.958 11.580 9.790 11.622L9.790 11.622Q9.370 11.706 8.992 11.580Q8.614 11.454 8.362 11.076L8.362 11.076Q8.068 10.698 8.152 10.194L8.152 10.194Q8.236 9.774 8.530 9.522L8.530 9.522L14.158 5.910Q14.326 5.784 14.494 5.742L14.494 5.742Q14.914 5.658 15.292 5.805Q15.670 5.952 15.901 6.267Q16.132 6.582 16.132 6.918L16.132 6.918L16.132 7.296L16.342 7.380Q17.308 7.674 18.148 8.220L18.148 8.220L18.778 8.640L18.862 8.346Q18.946 8.052 18.988 7.800L18.988 7.800Q19.156 7.002 18.967 6.204Q18.778 5.406 18.316 4.776Z"/>',
  "seti:swift": '<path d="M4.419 7.307L4.419 7.307Q4.419 7.231 4.362 7.174Q4.305 7.117 4.305 7.041L4.305 7.041Q4.191 6.889 3.887 6.528Q3.583 6.167 3.469 5.977L3.469 5.977Q3.013 5.559 2.861 5.331L2.861 5.331Q2.557 4.989 2.405 4.685L2.405 4.685Q2.861 5.179 3.583 5.635L3.583 5.635Q3.697 5.711 3.887 5.882Q4.077 6.053 4.191 6.091L4.191 6.091Q4.419 6.281 4.837 6.642Q5.255 7.003 5.483 7.193L5.483 7.193Q5.825 7.497 6.585 8.067L6.585 8.067L7.041 8.371Q8.219 9.321 8.827 9.663L8.827 9.663Q9.283 10.043 10.233 10.689Q11.183 11.335 11.677 11.677L11.677 11.677L11.677 11.563Q10.233 9.929 9.397 9.093L9.397 9.093Q8.447 7.877 7.991 7.421L7.991 7.421L6.813 5.863Q6.813 5.825 6.737 5.768Q6.661 5.711 6.661 5.635L6.661 5.635L5.597 4.191L5.445 3.925Q5.217 3.621 5.141 3.393L5.141 3.393Q5.445 3.621 5.977 4.153Q6.509 4.685 6.794 4.951Q7.079 5.217 7.744 5.806Q8.409 6.395 8.675 6.699L8.675 6.699Q8.941 6.889 9.416 7.307Q9.891 7.725 10.119 7.877L10.119 7.877L11.563 8.941Q11.715 9.093 12.019 9.321Q12.323 9.549 12.475 9.663L12.475 9.663Q15.097 11.563 16.541 12.513L16.541 12.513Q16.617 12.627 16.693 12.608Q16.769 12.589 16.769 12.399L16.769 12.399Q17.377 10.917 17.377 8.713L17.377 8.713Q17.377 7.117 16.769 5.521L16.769 5.521Q16.769 5.293 16.541 4.571L16.541 4.571L16.351 4.191Q15.971 3.393 15.705 3.013L15.705 3.013Q15.553 2.405 14.869 1.721L14.869 1.721Q14.869 1.645 14.812 1.588Q14.755 1.531 14.755 1.493L14.755 1.493Q15.211 1.721 15.933 2.177L15.933 2.177Q18.479 4.077 20.341 6.813L20.341 6.813L20.607 7.383Q21.215 8.523 21.405 9.093L21.405 9.093Q22.241 11.145 22.241 12.893L22.241 12.893L22.241 13.007Q22.241 14.071 22.127 14.527L22.127 14.527Q22.051 14.793 21.994 15.268Q21.937 15.743 21.899 15.971Q21.861 16.199 21.975 16.313L21.975 16.313Q23.419 18.099 23.761 20.227L23.761 20.227Q23.875 20.607 23.875 21.443L23.875 21.443Q23.875 22.013 23.761 22.393L23.761 22.393Q23.761 22.469 23.761 22.488Q23.761 22.507 23.666 22.507Q23.571 22.507 23.571 22.431L23.571 22.431L23.533 22.393Q22.735 20.759 21.291 20.607L21.291 20.607Q20.607 20.417 19.923 20.569L19.923 20.569Q19.391 20.645 18.669 20.949L18.669 20.949Q18.403 21.063 17.947 21.291L17.947 21.291Q17.377 21.595 17.111 21.671L17.111 21.671Q14.603 22.735 11.905 22.393L11.905 22.393Q9.929 22.165 8.333 21.557L8.333 21.557L8.219 21.557Q7.877 21.367 7.155 21.063Q6.433 20.759 6.091 20.607L6.091 20.607Q2.633 18.707 0.277 15.249L0.277 15.249L0.125 15.135L0.277 15.135L0.391 15.249Q1.075 15.743 1.569 15.971L1.569 15.971L2.025 16.237Q2.671 16.617 2.975 16.693L2.975 16.693Q3.849 17.187 5.027 17.377L5.027 17.377Q5.065 17.453 5.122 17.453Q5.179 17.453 5.255 17.529L5.255 17.529Q6.851 17.985 9.055 17.985L9.055 17.985Q11.487 17.795 13.311 16.807L13.311 16.807Q13.501 16.693 13.501 16.674Q13.501 16.655 13.311 16.579L13.311 16.579Q12.779 16.161 11.715 15.211L11.715 15.211L10.955 14.527Q10.651 14.299 10.119 13.767Q9.587 13.235 9.283 13.007L9.283 13.007Q8.827 12.627 8.105 11.677L8.105 11.677Q7.991 11.525 7.687 11.221Q7.383 10.917 7.269 10.727L7.269 10.727Q7.041 10.499 6.566 9.967Q6.091 9.435 5.882 9.188Q5.673 8.941 5.312 8.542Q4.951 8.143 4.761 7.877L4.761 7.877Q4.761 7.649 4.419 7.307Z"/>',
  "seti:db": '<path d="M12.546 9.327L12.546 9.327Q9.858 9.327 7.884 9.201L7.884 9.201Q5.448 9.033 3.348 8.571L3.348 8.571Q2.844 8.487 1.920 8.109L1.920 8.109Q1.416 7.857 1.122 7.773L1.122 7.773Q0.576 7.605 0.576 6.975L0.576 6.975L0.576 2.397Q0.576 2.187 0.681 2.019Q0.786 1.851 0.954 1.851L0.954 1.851L1.374 1.683Q2.802 1.053 3.600 0.927L3.600 0.927Q5.784 0.423 8.472 0.255L8.472 0.255Q10.068 0.171 13.302 0.171L13.302 0.171Q17.712 0.171 21.198 1.095L21.198 1.095Q21.996 1.263 22.878 1.725L22.878 1.725Q23.424 1.893 23.424 2.523L23.424 2.523L23.424 7.101Q23.424 7.395 23.046 7.773L23.046 7.773Q21.996 8.277 21.450 8.445L21.450 8.445L19.602 8.739Q17.166 9.117 15.948 9.201L15.948 9.201Q15.360 9.285 14.205 9.285Q13.050 9.285 12.546 9.327ZM23.424 9.621L23.424 9.621L23.424 14.325Q23.424 14.535 23.193 14.766Q22.962 14.997 22.752 14.997L22.752 14.997L22.080 15.249Q20.820 15.669 20.274 15.795L20.274 15.795Q15.360 16.635 8.976 16.425L8.976 16.425L8.892 16.425Q6.792 16.299 5.700 16.173L5.700 16.173Q3.936 15.963 2.550 15.501L2.550 15.501Q2.004 15.375 0.996 14.871L0.996 14.871Q0.576 14.661 0.576 14.199L0.576 14.199L0.576 9.621Q3.180 10.503 6.288 10.839L6.288 10.839Q8.514 11.049 12 11.049L12 11.049Q15.150 11.175 17.712 10.881L17.712 10.881Q20.736 10.545 23.424 9.621ZM23.424 16.971L23.424 16.971L23.424 21.549Q23.424 21.759 23.193 21.990Q22.962 22.221 22.752 22.347L22.752 22.347Q21.702 22.725 21.198 22.893L21.198 22.893Q20.316 23.187 19.602 23.271L19.602 23.271Q11.580 24.447 3.726 23.145L3.726 23.145Q3.054 23.019 1.710 22.557L1.710 22.557L1.122 22.347Q0.828 22.263 0.702 22.053Q0.576 21.843 0.576 21.423L0.576 21.423L0.576 16.971Q3.096 17.853 6.204 18.189L6.204 18.189Q8.430 18.399 12 18.399L12 18.399Q15.486 18.399 17.712 18.189L17.712 18.189Q20.820 17.853 23.424 16.971Z"/>',
  "seti:terraform": '<path d="M8.584 11.604L8.584 4.773L15.415 8.238L15.415 15.102L8.584 11.604ZM23.666 11.604L23.666 4.773L16.834 8.238L16.834 15.102L23.666 11.604ZM0.334 7.479L0.334 0.648L7.165 4.113L7.165 10.977L0.334 7.479ZM8.584 19.854L8.584 13.023L15.415 16.488L15.415 23.352L8.584 19.854Z"/>',
  "seti:tex": '<path d="M3.651 6.951L3.651 13.650L2.199 13.650L2.199 14.970L6.753 14.970L6.753 13.650L5.400 13.650L5.400 6.951L5.829 6.951Q6.456 6.951 6.753 7.017Q7.050 7.083 7.198 7.281Q7.347 7.479 7.479 7.974L7.479 7.974L8.700 7.974L8.502 5.598L0.450 5.598L0.153 9.327L1.374 9.327L1.374 8.799Q1.473 7.842 1.605 7.545L1.605 7.545Q1.770 7.149 2.100 7.050L2.100 7.050Q2.397 6.951 3.222 6.951L3.222 6.951L3.651 6.951ZM11.802 17.346L11.802 17.346L10.053 17.346L10.053 14.475L10.647 14.475Q11.076 14.475 11.191 14.508Q11.307 14.541 11.340 14.706Q11.373 14.871 11.373 15.399L11.373 15.399L11.373 15.927L12.627 15.927L12.627 11.670L11.373 11.670L11.373 12.198Q11.373 12.726 11.340 12.891Q11.307 13.056 11.191 13.089Q11.076 13.122 10.647 13.122L10.647 13.122L10.053 13.122L10.053 10.647L11.703 10.647Q12.462 10.647 12.809 10.812Q13.155 10.977 13.287 11.373L13.287 11.373Q13.386 11.703 13.452 12.495L13.452 12.495L14.673 12.495L14.376 9.195L7.149 9.195L7.149 10.548L8.172 10.548L8.172 17.148L7.149 17.148L7.149 18.501L14.475 18.501L14.871 15.795L13.551 15.795Q13.551 16.686 13.171 17.016Q12.792 17.346 11.802 17.346ZM17.874 14.970L17.874 13.749L17.379 13.749L18.897 11.472L20.448 13.749L20.151 13.749L20.151 14.871L23.847 14.871L23.847 13.650L23.352 13.650Q22.890 13.650 22.791 13.617Q22.692 13.584 22.626 13.452L22.626 13.452L20.151 9.822L21.801 7.446L21.900 7.347Q22.098 7.116 22.263 7.017L22.263 7.017Q22.527 6.852 22.923 6.852L22.923 6.852L23.451 6.852L23.451 5.499L20.250 5.499L20.250 6.720L20.778 6.720L20.679 6.852L19.425 8.601L18.072 6.951L18.402 6.951L18.402 5.499L14.673 5.499L14.673 6.951L15.201 6.951Q15.663 6.951 15.745 6.967Q15.828 6.984 15.927 7.149L15.927 7.149L18.072 10.350L16.224 13.122L15.927 13.452Q15.597 13.749 15.102 13.749L15.102 13.749L14.574 13.749L14.574 14.970L17.874 14.970Z"/>',
  "seti:default": '<path d="M1.082 16.876L1.082 14.014L22.918 14.014L22.918 16.876L1.082 16.876ZM1.082 9.986L1.082 7.071L13.272 7.071L13.272 9.986L1.082 9.986ZM1.082 3.096L1.082 0.181L22.918 0.181L22.918 3.096L1.082 3.096ZM1.082 23.819L1.082 20.904L17.300 20.904L17.300 23.819L1.082 23.819Z"/>',
  "seti:twig": '<path d="M17.640 0.080L17.640 0.120Q17.680 0.120 17.760 0.120L17.760 0.120L18.080 0.120L18.080 0.120L17.640 0.120L17.640 0.080ZM16.680 0.720L16.360 0.720Q17.080 0.160 17.640 0.120L17.640 0.120L18.160 0.120Q18.280 0.120 18.280 0.160L18.280 0.160L17.920 0.160Q17.400 0.160 16.680 0.720L16.680 0.720ZM16.680 0.720L16.680 0.720Q17.400 0.160 17.920 0.160L17.920 0.160Q17.360 0.360 17.040 0.640L17.040 0.640Q16.880 0.760 16.640 1.040L16.640 1.040L16.440 1.200Q16.240 1.160 16.080 1.320L16.080 1.320Q16.320 1 16.680 0.720ZM17.920 0.160L17.920 0.160Q18.040 0.160 18.280 0.160L18.280 0.160Q18.920 0.280 19.560 1.040L19.560 1.040L19.520 1.120Q18.880 0.480 18.240 0.360L18.240 0.360Q18.080 0.320 18 0.360L18 0.360Q17.640 0.440 17.400 0.600L17.400 0.600Q17.280 0.640 17.120 0.800L17.120 0.800L17 0.920Q16.880 0.840 17 0.680L17 0.680L17.040 0.640Q17.360 0.360 17.920 0.160ZM18 0.360L18 0.360Q18.080 0.320 18.240 0.360L18.240 0.360Q18.120 0.440 18 0.360ZM16 1.800L16.440 1.200Q16.480 1.160 16.640 1.040L16.640 1.040Q16.880 0.760 17.040 0.640L17.040 0.640L17 0.680Q16.880 0.840 17 0.920L17 0.920Q16.600 1.440 16 2.560L16 2.560L15.960 2.680Q15.920 2.800 15.840 2.840L15.840 2.840L15.880 2.680L15.520 2.640L15.520 2.600L16 1.800ZM15.440 1.640L15.480 1.520Q15.600 1.440 15.800 1.200L15.800 1.200Q16.160 0.840 16.360 0.720L16.360 0.720L16.680 0.720Q16.360 0.960 16.080 1.320L16.080 1.320L15.840 1.600Q15.760 1.640 15.600 1.560L15.600 1.560L15.560 1.520L15.520 1.560Q15.480 1.640 15.440 1.640L15.440 1.640ZM19.520 1.120L19.560 1.040Q19.680 1.160 19.720 1.280L19.720 1.280L19.720 1.320L19.640 1.240Q19.520 1.160 19.520 1.120L19.520 1.120ZM15.840 1.600L16.080 1.320Q16.240 1.160 16.440 1.200L16.440 1.200L16 1.800L15.840 1.920L15.640 1.880L15.840 1.600ZM19.720 1.320L19.720 1.280Q19.840 1.360 19.880 1.520L19.880 1.520Q19.760 1.440 19.720 1.320L19.720 1.320ZM15.520 1.560L15.560 1.520Q15.560 1.560 15.600 1.560L15.600 1.560Q15.760 1.640 15.840 1.600L15.840 1.600L15.640 1.880Q15.280 2.440 14.960 3L14.960 3L14.600 3.760L14.080 3.720L13.920 3.880Q14.480 2.800 15.240 1.840L15.240 1.840L15.280 1.760Q15.360 1.640 15.420 1.640Q15.480 1.640 15.520 1.560L15.520 1.560ZM15.640 1.880L15.840 1.920Q15.880 1.920 15.920 1.880L15.920 1.880L16 1.800L15.560 2.600L15.400 2.680L15.240 2.640Q15.200 2.680 15.120 2.840Q15.040 3 14.960 3L14.960 3Q15.280 2.400 15.640 1.880L15.640 1.880ZM15.240 2.640L15.400 2.680Q15.440 2.680 15.480 2.640L15.480 2.640L15.560 2.600L15.520 2.640Q15.320 3.040 14.960 3.920L14.960 3.920L14.720 4.560Q14.520 5.040 14.480 5.280L14.480 5.280L14.440 5.400Q14.360 5.440 14.280 5.640Q14.200 5.840 14.120 5.880Q14.040 5.920 13.980 5.780Q13.920 5.640 13.840 5.640L13.840 5.640L13.920 5.280L14.560 3.760L14.960 3Q15.040 3 15.120 2.840Q15.200 2.680 15.240 2.640L15.240 2.640ZM15.520 2.640L15.520 2.640Q15.760 2.640 15.880 2.680L15.880 2.680L15.840 2.840Q15.320 4.080 14.880 5.360L14.880 5.360L14.800 5.320Q14.560 5.320 14.480 5.280L14.480 5.280Q14.520 5.040 14.720 4.560L14.720 4.560L14.960 3.920Q15.320 3.040 15.520 2.640ZM13.920 3.880L13.920 3.880Q13.960 3.840 14.040 3.760L14.040 3.760L14.080 3.720L14.560 3.760L13.920 5.280Q13.880 5.320 13.840 5.420Q13.800 5.520 13.760 5.520L13.760 5.520L13.720 5.440Q13.560 5.240 13.560 5.120L13.560 5.120Q13.440 5.080 13.400 5.180Q13.360 5.280 13.300 5.460Q13.240 5.640 13.160 5.720L13.160 5.720Q13.160 5.600 13.240 5.400L13.240 5.400L13.360 5.120Q13.720 4.280 13.920 3.880ZM13.400 5.200L13.400 5.200Q13.440 5.080 13.560 5.120L13.560 5.120Q13.560 5.240 13.720 5.440L13.720 5.440L13.760 5.520Q13.800 5.520 13.840 5.420Q13.880 5.320 13.920 5.280L13.920 5.280L13.840 5.640Q13.400 6.800 13.240 7.480L13.240 7.480Q13.120 7.840 12.960 8.560L12.960 8.560L12.840 9.160L12.760 9.200Q12.640 9.280 12.560 9.280L12.560 9.280Q12.240 9.440 12.160 9.720L12.160 9.720Q12.160 9.640 12.160 9.560L12.160 9.560Q12.560 7.520 13.080 5.880L13.080 5.880L13.160 5.720Q13.240 5.640 13.300 5.460Q13.360 5.280 13.400 5.200ZM14.240 5.920L14.480 5.280Q14.560 5.320 14.800 5.320L14.800 5.320L14.880 5.360Q14.800 5.400 14.800 5.520L14.800 5.520L14.800 5.560Q14.760 5.800 14.600 6.280L14.600 6.280L14.440 6.760Q14.240 7.520 14.040 8.320L14.040 8.320L14.040 8.400Q14.040 8.440 14 8.440L14 8.440Q13.840 8.440 13.640 8.440L13.640 8.440Q13.560 8.520 13.480 8.680L13.480 8.680Q13.560 8.240 13.800 7.400L13.800 7.400L13.920 6.920Q14.040 6.560 14.240 5.920L14.240 5.920ZM14.800 5.560L14.800 5.560Q14.800 5.560 14.800 5.520L14.800 5.520Q14.800 5.400 14.880 5.360L14.880 5.360L14.840 5.400Q14.840 5.560 14.800 5.560ZM14.160 5.920L14.160 5.920Q14.200 5.840 14.280 5.640Q14.360 5.440 14.440 5.400L14.440 5.400L13.920 6.920Q13.880 6.960 13.760 7.120L13.760 7.120L13.760 7.200Q13.640 7.200 13.580 7.180Q13.520 7.160 13.520 7.100Q13.520 7.040 13.440 7.080L13.440 7.080L13.440 7.120Q13.360 7.400 13.240 7.480L13.240 7.480Q13.400 6.800 13.840 5.640L13.840 5.640Q13.920 5.640 13.980 5.780Q14.040 5.920 14.160 5.920ZM13.760 7.200L13.760 7.200Q13.760 7.160 13.760 7.120L13.760 7.120Q13.880 6.960 13.920 6.920L13.920 6.920L13.800 7.440Q13.560 8.240 13.480 8.680L13.480 8.680L13.320 9.240Q13.240 9.360 13.180 9.600Q13.120 9.840 13.080 9.920L13.080 9.920L13 9.960Q12.800 10 12.720 10.040L12.720 10.040L12.640 10.440Q12.640 10.320 12.660 10.160Q12.680 10 12.760 9.660Q12.840 9.320 12.840 9.160L12.840 9.160L12.960 8.560Q13.120 7.840 13.240 7.480L13.240 7.480Q13.360 7.400 13.440 7.120L13.440 7.120L13.440 7.080Q13.520 7.040 13.520 7.100Q13.520 7.160 13.580 7.180Q13.640 7.200 13.760 7.200ZM13.640 8.440L13.640 8.440Q13.840 8.440 14 8.440L14 8.440L13.840 9.480Q13.640 10.440 13.560 10.920L13.560 10.920L13.560 10.920Q13.520 10.760 13.600 10.440L13.600 10.440L13.600 10.400Q13.520 10.360 13.360 10.420Q13.200 10.480 13.140 10.500Q13.080 10.520 13.080 10.600L13.080 10.600L13.040 10.640Q13.080 10.360 13.200 9.840L13.200 9.840L13.320 9.240L13.480 8.680Q13.560 8.520 13.640 8.440ZM12.560 9.280L12.560 9.280Q12.640 9.280 12.760 9.200L12.760 9.200L12.840 9.160Q12.840 9.320 12.760 9.660Q12.680 10 12.640 10.200L12.640 10.200Q12.360 10.120 12.080 10.200L12.080 10.200Q12.080 10.080 12.120 9.940Q12.160 9.800 12.160 9.720L12.160 9.720Q12.240 9.440 12.560 9.280ZM13 9.960L13.080 9.920Q13.120 9.840 13.180 9.600Q13.240 9.360 13.320 9.240L13.320 9.240L13.200 9.840Q13.080 10.360 13.040 10.640L13.040 10.640L13.040 10.800L13 10.680Q12.960 10.680 12.960 10.760Q12.960 10.840 12.940 10.880Q12.920 10.920 12.760 10.880L12.760 10.880L12.640 10.880L12.560 11.040L12.560 10.800L12.720 10.040Q12.800 10 13 9.960L13 9.960ZM12.080 10.200L12.080 10.200Q12.400 10.120 12.640 10.200L12.640 10.200Q12.640 10.320 12.640 10.440L12.640 10.440L12.560 10.800Q12.480 10.840 12.320 10.820Q12.160 10.800 12.080 10.840Q12 10.880 11.960 11.040L11.960 11.040L11.960 11.080Q11.960 10.640 12.080 10.200ZM13.120 10.480L13.120 10.480Q13.200 10.480 13.360 10.420Q13.520 10.360 13.600 10.400L13.600 10.400L13.600 10.480Q13.520 10.760 13.560 10.920L13.560 10.920Q13.520 11.200 13.480 11.680L13.480 11.680L13.440 11.680Q13.480 11.560 13.360 11.440L13.360 11.440L13 11.440L12.880 11.720L12.920 11.360L13.080 10.560Q13.120 10.520 13.120 10.480ZM12.960 10.840L12.960 10.840Q12.960 10.840 12.960 10.760Q12.960 10.680 13 10.680L13 10.680L13.040 10.800L12.920 11.360L12.800 11.600L12.560 11.560L12.440 11.760L12.480 11.320Q12.520 11.120 12.560 11.040L12.560 11.040L12.640 10.880L12.760 10.880Q12.920 10.920 12.960 10.840ZM12.080 10.840L12.080 10.840Q12.160 10.800 12.320 10.820Q12.480 10.840 12.560 10.800L12.560 10.800L12.560 11.040Q12.520 11.120 12.480 11.320L12.480 11.320L12.440 11.520Q12.360 11.600 12.160 11.560L12.160 11.560L12 11.520L11.840 11.800Q11.840 11.440 11.960 11.080L11.960 11.080L11.960 11.040Q12 10.880 12.080 10.840ZM16 11L16 11Q16.040 11 16.080 10.960L16.080 10.960Q16.240 10.840 16.320 10.880L16.320 10.880Q14.800 12.480 14.240 15.560L14.240 15.560L14.200 15.520Q14.040 15.480 13.880 15.480L13.880 15.480L13.880 15.320Q14.160 14.200 14.360 13.640L14.360 13.640Q14.640 12.720 15.080 12.040L15.080 12.040L15.120 12Q15.200 11.880 15.180 11.820Q15.160 11.760 15.240 11.640L15.240 11.640L15.400 11.520Q15.760 11.160 16 11ZM12.560 11.560L12.800 11.600Q12.800 11.600 12.800 11.560L12.800 11.560L12.920 11.360L12.880 11.720Q12.840 11.800 12.760 12L12.760 12L12.720 12.160L12.480 12.120L12.360 12.400L12.360 12.360Q12.400 12.040 12.440 11.760L12.440 11.760L12.560 11.560ZM12.880 11.720L13 11.440L13.360 11.440Q13.480 11.560 13.440 11.680Q13.400 11.800 13.400 11.940Q13.400 12.080 13.360 12.400Q13.320 12.720 13.320 12.840L13.320 12.840L13.280 12.840L13.280 12.720Q13.320 12.520 13.240 12.500Q13.160 12.480 13.040 12.440L13.040 12.440Q12.800 12.400 12.800 12.560L12.800 12.560L12.760 12.520L12.760 12.400L12.800 12.120Q12.880 11.880 12.880 11.720L12.880 11.720ZM11.840 11.800L12 11.520Q12.040 11.520 12.160 11.560L12.160 11.560Q12.360 11.600 12.440 11.520L12.440 11.520L12.440 11.760Q12.400 12.040 12.360 12.360L12.360 12.360L12.280 12.560Q12.240 12.600 12.040 12.540Q11.840 12.480 11.800 12.640Q11.760 12.800 11.720 13L11.720 13Q11.680 12.800 11.760 12.400L11.760 12.400L11.800 12.160Q11.800 11.920 11.840 11.800L11.840 11.800ZM13.400 11.920L13.400 11.920Q13.400 11.800 13.440 11.680L13.440 11.680Q13.520 11.880 13.400 11.920ZM12.480 12.120L12.720 12.160Q12.720 12.120 12.760 12L12.760 12Q12.840 11.800 12.880 11.720L12.880 11.720Q12.880 11.880 12.800 12.120L12.800 12.120L12.760 12.400L12.640 12.680L12.440 12.640Q12.400 12.680 12.360 12.840L12.360 12.840L12.360 12.880L12.360 12.400L12.480 12.120ZM14.800 12.280L14.800 12.280Q14.840 12.240 14.880 12.120L14.880 12.120Q15.040 11.880 15.160 11.800L15.160 11.800Q15.200 11.880 15.120 12L15.120 12L15.080 12.040Q14.640 12.720 14.360 13.640L14.360 13.640Q14.160 14.200 13.880 15.320L13.880 15.320L13.880 15.480Q13.760 15.640 13.720 16.040L13.720 16.040L13.680 16.320Q13.600 16.320 13.480 16.200L13.480 16.200L13.400 16.080Q13.360 16.080 13.240 16.120L13.240 16.120L13.200 16.120Q13.280 15.720 13.520 15L13.520 15L13.640 14.640Q14.200 13.160 14.800 12.280ZM12.280 12.560L12.280 12.560Q12.320 12.520 12.320 12.440L12.320 12.440L12.360 12.360L12.280 13.560L12.200 15.320Q12.160 15.640 12.160 16.200L12.160 16.200L12.160 17.760L12.120 17.760L11.920 17.360Q11.760 17.040 11.640 16.880L11.640 16.880L11.600 16.880Q11.560 16.800 11.520 16.820Q11.480 16.840 11.540 17.020Q11.600 17.200 11.720 17.600L11.720 17.600Q11.920 18.200 11.920 18.560L11.920 18.560L11.840 18.320Q11.720 17.680 11.480 17.120L11.480 17.120L11.400 16.880Q11.440 16.680 11.440 16.560L11.440 16.560L11.440 16.360Q11.480 16.080 11.480 15.840L11.480 15.840L11.480 15.600Q11.480 15.440 11.520 15.120L11.520 15.120L11.560 14.600Q11.600 14.480 11.600 14.360L11.600 14.360L11.600 14.120Q11.600 13.760 11.680 13.400L11.680 13.400L11.720 13Q11.760 12.800 11.800 12.640Q11.840 12.480 12.040 12.540Q12.240 12.600 12.280 12.560ZM12.640 12.720L12.640 12.680Q12.640 12.680 12.640 12.680L12.640 12.680L12.760 12.400L12.760 12.520L12.680 12.880Q12.640 13.200 12.560 13.400L12.560 13.400L12.400 13.360Q12.360 13.480 12.280 13.720L12.280 13.720L12.280 13.760L12.360 12.840Q12.400 12.680 12.440 12.640L12.440 12.640L12.640 12.720ZM12.800 12.560L12.800 12.560Q12.800 12.400 13.040 12.440L13.040 12.440Q13.160 12.480 13.240 12.500Q13.320 12.520 13.280 12.720L13.280 12.720L13.280 12.840Q13.320 13.280 13.200 13.720L13.200 13.720L13.200 14Q13.160 14.200 13.160 14.400L13.160 14.400L13.160 14.960L13.120 15.240Q13.080 15.440 13.080 15.680L13.080 15.680L13.040 16.640L13 16.760Q12.920 16.960 12.920 17.040L12.920 17.040Q12.880 17.040 12.880 17.120L12.880 17.120L12.880 17.200Q12.760 17.280 12.680 17.360L12.680 17.360Q12.720 17.120 12.680 16.600L12.680 16.600L12.640 16.120Q12.560 15.480 12.640 14.160L12.640 14.160L12.640 13.520Q12.680 13.200 12.800 12.560ZM12.680 12.880L12.760 12.520L12.800 12.560Q12.680 13.200 12.640 13.520L12.640 13.520Q12.480 15 12.600 16.520L12.600 16.520Q12.560 16.840 12.400 17.440L12.400 17.440L12.280 18.040Q12.280 18.080 12.200 18.120L12.200 18.120L12.160 18.120L12.160 16.440Q12.200 16.160 12.200 15.600L12.200 15.600L12.200 15.320L12.280 13.720Q12.360 13.480 12.400 13.360L12.400 13.360L12.560 13.400Q12.640 13.200 12.680 12.880L12.680 12.880ZM5.360 13.080L5.360 12.680Q5.440 12.680 5.440 12.800L5.440 12.800L5.400 13.080L5.360 13.080ZM5.400 13.080L5.400 13.080L5.440 12.840L5.640 13.840Q5.680 13.920 5.640 14L5.640 14Q5.600 14.200 5.680 14.600L5.680 14.600Q5.760 15.200 5.600 15.440L5.600 15.440L5.520 15.360L5.520 15.200Q5.520 15.040 5.480 14.960L5.480 14.960L5.480 14.400Q5.520 14.280 5.480 14.160Q5.440 14.040 5.440 13.880L5.440 13.880L5.440 13.760Q5.440 13.560 5.420 13.400Q5.400 13.240 5.400 13.080ZM11.680 13.080L11.680 13.400Q11.680 13.360 11.660 13.220Q11.640 13.080 11.680 13.080L11.680 13.080ZM5.440 13.440L5.440 13.440Q5.440 13.560 5.440 13.760L5.440 13.760L5.440 13.880L5.400 13.880Q5.400 13.680 5.440 13.440ZM12.600 16.520L12.600 16.520Q12.480 15 12.640 13.520L12.640 13.520L12.640 14.160Q12.560 15.480 12.640 16.120L12.640 16.120L12.680 16.600Q12.720 17.120 12.680 17.360L12.680 17.360Q12.760 17.280 12.880 17.200L12.880 17.200L12.880 17.280L12.600 18.640L12.560 18.600Q12.520 18.560 12.480 18.600L12.480 18.600L12.360 18.600Q12.200 18.640 12.160 18.720L12.160 18.720L12.160 18.120L12.200 18.120Q12.280 18.080 12.280 18.040L12.280 18.040L12.400 17.440Q12.560 16.840 12.600 16.520ZM13.200 14.040L13.200 14Q13.200 14 13.200 13.960L13.200 13.960L13.200 13.720Q13.240 13.880 13.200 14.040L13.200 14.040ZM7.680 14.040L7.680 14.040Q7.640 14.080 7.540 14.020Q7.440 13.960 7.460 13.920Q7.480 13.880 7.640 13.960L7.640 13.960Q8.280 13.920 9 14.160L9 14.160L9 14.160L8.720 14.480L8.400 14.320Q7.920 14.080 7.680 14.040ZM5.520 15.360L5.640 15.440Q5.760 15.200 5.680 14.600L5.680 14.600Q5.600 14.200 5.640 14L5.640 14Q5.720 14.200 5.800 14.600L5.800 14.600L5.840 14.920Q5.760 14.840 5.720 14.940Q5.680 15.040 5.720 15.080L5.720 15.080Q5.760 15.320 5.720 15.800L5.720 15.800L5.720 16.080L5.640 16.240Q5.560 16.200 5.520 16.040L5.520 16.040L5.520 15.360ZM13.200 14.400L13.160 14.400Q13.160 14.200 13.200 14.040L13.200 14.040L13.200 14.400ZM11.600 14.360L11.560 14.360Q11.480 14.160 11.600 14.120L11.600 14.120L11.600 14.360ZM5.480 14.160L5.480 14.160Q5.520 14.280 5.480 14.400L5.480 14.400L5.480 14.400Q5.400 14.280 5.480 14.160ZM8.720 14.480L9 14.160Q9.240 14.240 9.440 14.360L9.440 14.360L9.360 14.480L9.480 14.560Q9.640 14.680 9.720 14.760Q9.800 14.840 9.820 15.080Q9.840 15.320 9.960 15.400L9.960 15.400Q9.920 15.440 9.960 15.560L9.960 15.560L9.960 15.720Q9.880 15.640 9.800 15.480L9.800 15.480L9.680 15.320L9.480 15.120Q9.040 14.720 8.800 14.560L8.800 14.560L8.760 14.520Q8.720 14.480 8.720 14.480L8.720 14.480ZM11.560 14.360L11.560 14.360L11.600 14.360Q11.600 14.480 11.560 14.600L11.560 14.600Q11.520 14.440 11.560 14.360ZM9.480 14.560L9.360 14.480Q9.400 14.400 9.440 14.360L9.440 14.360Q10.320 14.880 11 16.080L11 16.080Q10.920 16.160 10.800 16.240L10.800 16.240Q10.800 16.440 10.960 16.720L10.960 16.720Q11.080 17.320 10.880 17.880L10.880 17.880L10.920 18.280L10.880 18.280Q10.760 17.080 9.960 15.720L9.960 15.720L9.960 15.560Q9.920 15.440 9.960 15.400L9.960 15.400Q9.840 15.320 9.820 15.080Q9.800 14.840 9.720 14.760Q9.640 14.680 9.480 14.560L9.480 14.560ZM13.160 14.680L13.160 14.400L13.200 14.400L13.200 14.480Q13.200 14.640 13.160 14.680L13.160 14.680ZM5.480 14.400L5.480 14.400L5.480 14.400L5.480 14.680L5.440 14.680Q5.400 14.520 5.480 14.400ZM11.560 14.640L11.520 14.920Q11.520 14.880 11.520 14.840L11.520 14.840Q11.480 14.640 11.560 14.640L11.560 14.640ZM5.440 14.680L5.440 14.680L5.480 14.680L5.480 14.920L5.440 14.960Q5.440 14.800 5.440 14.680ZM5.720 15.080L5.720 15.080Q5.680 15.040 5.720 14.940Q5.760 14.840 5.840 14.920L5.840 14.920L5.920 15.520L5.880 15.520Q5.760 15.600 5.840 15.720L5.840 15.720Q5.800 15.840 5.840 16.040Q5.880 16.240 5.840 16.360L5.840 16.360L5.760 16.520L5.720 16.080L5.720 15.800Q5.760 15.320 5.720 15.080ZM5.480 14.960L5.480 14.960Q5.520 15.040 5.520 15.200L5.520 15.200L5.520 15.280L5.480 15.280Q5.480 15.120 5.480 14.960ZM13.120 15.280L13.120 15.240Q13.120 15.200 13.120 15.160L13.120 15.160L13.160 14.960L13.160 15.280L13.120 15.280ZM13.120 15.680L13.080 15.680Q13.080 15.360 13.120 15.240L13.120 15.240L13.120 15.360Q13.120 15.560 13.120 15.680L13.120 15.680ZM5.480 15.600L5.480 15.280L5.520 15.280L5.520 15.600L5.480 15.600ZM12.160 16.440L12.160 16.440Q12.160 16.360 12.160 16.200L12.160 16.200Q12.160 15.640 12.200 15.320L12.200 15.320L12.200 15.600Q12.200 16.160 12.160 16.440ZM13.680 16.320L13.680 16.320Q13.720 16.240 13.720 16.040L13.720 16.040Q13.760 15.640 13.880 15.480L13.880 15.480Q14 15.480 14.200 15.520L14.200 15.520Q14.160 15.680 14.160 15.920L14.160 15.920L14.160 15.960Q14.120 16.120 14.080 16.280Q14.040 16.440 14.060 16.540Q14.080 16.640 14.040 16.760L14.040 16.760L14 16.840Q13.880 16.840 13.840 16.880L13.840 16.880L13.680 17.040Q13.600 17.240 13.560 17.600L13.560 17.600Q13.480 18.120 13.360 18.360L13.360 18.360Q13.320 18.360 13.200 18.320L13.200 18.320L13.120 18.280L13.040 18.280Q12.920 18.240 12.840 18.200Q12.760 18.160 12.840 18.040L12.840 18.040Q12.880 17.480 13.080 16.680L13.080 16.680Q13.120 16.560 13.080 16.480L13.080 16.480L13.080 16.360Q13.160 16.280 13.200 16.120L13.200 16.120L13.240 16.120Q13.360 16.080 13.400 16.080L13.400 16.080L13.480 16.200Q13.600 16.320 13.680 16.320ZM5.840 15.720L5.840 15.720Q5.760 15.600 5.880 15.520L5.880 15.520L5.920 15.520L6.080 16.400Q6 16.360 5.960 16.440L5.960 16.440L5.960 17L5.880 17.080Q5.840 17.160 5.840 17.240L5.840 17.240Q5.800 17.080 5.720 16.960L5.720 16.960L5.760 16.520L5.840 16.360Q5.880 16.240 5.840 16.040Q5.800 15.840 5.840 15.720ZM14.160 15.960L14.160 15.960Q14.160 15.960 14.160 15.920L14.160 15.920Q14.160 15.680 14.200 15.520L14.200 15.520Q14.200 15.600 14.200 15.760Q14.200 15.920 14.160 15.960ZM5.480 15.920L5.480 15.600L5.520 15.600L5.520 15.920L5.480 15.920ZM11.480 15.840L11.480 15.840Q11.400 15.640 11.480 15.600L11.480 15.600L11.480 15.840ZM13.080 15.920L13.080 15.680L13.120 15.680Q13.160 15.800 13.120 15.920L13.120 15.920L13.080 15.920ZM11.480 15.840L11.480 15.840L11.480 15.840Q11.480 16.160 11.440 16.360L11.440 16.360L11.440 16.120Q11.440 15.920 11.480 15.840ZM5.480 16.040L5.480 15.920L5.520 15.920L5.520 16.280Q5.440 16.240 5.480 16.040L5.480 16.040ZM13.080 16.400L13.080 15.920L13.120 15.920L13.120 16.160Q13.120 16.200 13.140 16.160Q13.160 16.120 13.200 16.120L13.200 16.120Q13.160 16.280 13.080 16.400L13.080 16.400ZM13.080 16.360L13.040 16.640Q13.040 16.480 13.040 16.240L13.040 16.240L13.080 15.920L13.080 16.360ZM5.520 16.600L5.520 16Q5.520 16 5.520 16.040L5.520 16.040Q5.560 16.200 5.640 16.240L5.640 16.240L5.720 16.080L5.760 16.520L5.720 16.960Q5.640 16.920 5.560 16.920L5.560 16.920L5.560 16.800Q5.560 16.680 5.520 16.600L5.520 16.600ZM10.800 16.240L10.800 16.240Q10.920 16.160 11 16.080L11 16.080Q11.160 16.320 11.320 16.680L11.320 16.680L11.160 16.800L11.240 17.080Q11.360 17.520 11.320 17.760L11.320 17.760L11.240 18Q11.040 18.440 11 18.680L11 18.680L10.960 18.680Q10.960 18.600 10.920 18.480L10.920 18.480L10.880 17.880Q11.080 17.320 10.960 16.720L10.960 16.720Q10.840 16.480 10.800 16.240ZM11.440 16.560L11.400 16.560Q11.440 16.520 11.420 16.360Q11.400 16.200 11.440 16.200L11.440 16.200L11.440 16.560ZM14.080 16.600L14.080 16.560Q14.040 16.440 14.080 16.320L14.080 16.320Q14.200 16.520 14.080 16.600L14.080 16.600ZM5.920 17L5.960 16.440Q6 16.360 6.040 16.420Q6.080 16.480 6.120 16.660Q6.160 16.840 6.100 16.940Q6.040 17.040 6.080 17.160L6.080 17.160Q6.080 17.800 6.160 18.400L6.160 18.400L6.200 18.640Q6.200 18.920 6.280 19.040L6.280 19.040L6.280 19.040L6.200 19.160L6.120 19.160Q5.960 19.120 5.920 19.160L5.920 19.160L5.880 18.520Q5.880 18.280 5.840 17.800L5.840 17.800L5.840 17.240Q5.840 17.160 5.880 17.080L5.880 17.080L5.920 17ZM13 16.760L13.040 16.640L13.080 16.480Q13.120 16.560 13.080 16.680L13.080 16.680Q12.880 17.360 12.840 18.040L12.840 18.040Q12.760 18.160 12.840 18.200Q12.920 18.240 13.040 18.280L13.040 18.280L13.120 18.280L13.200 18.320Q13.320 18.360 13.360 18.360L13.360 18.360Q13.480 18.120 13.560 17.600L13.560 17.600Q13.600 17.240 13.680 17.040L13.680 17.040L13.840 16.880Q13.880 16.840 14 16.840L14 16.840L14 17.080Q14 17.200 13.960 17.480L13.960 17.480L13.880 18.040Q13.800 18.160 13.640 18.160L13.640 18.160Q13.520 18.280 13.480 18.560L13.480 18.560L13.400 18.800Q13.280 18.800 13.120 18.640Q12.960 18.480 12.800 18.500Q12.640 18.520 12.680 18.240L12.680 18.240L12.920 17.040Q12.920 16.960 13 16.760L13 16.760ZM11.400 16.880L11.400 16.560L11.440 16.560Q11.440 16.680 11.400 16.880L11.400 16.880ZM5.520 16.600L5.520 16.600Q5.560 16.680 5.560 16.840L5.560 16.840L5.560 16.960L5.520 16.960L5.520 16.960Q5.520 16.720 5.520 16.600ZM11.240 17.080L11.160 16.800Q11.200 16.760 11.320 16.680L11.320 16.680L11.320 16.760Q11.360 16.840 11.400 16.880L11.400 16.880L11.480 17.120L11.480 17.240Q11.400 17.280 11.440 17.480L11.440 17.480L11.480 17.760Q11.520 18.080 11.520 18.240L11.520 18.240L11.360 18.520Q11.160 18.880 11.120 19.080L11.120 19.080Q11.080 19.160 11.100 19.360Q11.120 19.560 11.120 19.640L11.120 19.640L11.080 19.640L11.040 19.360Q11.080 19.240 11.040 19.120Q11 19 11 18.720L11 18.720L11 18.680Q11.040 18.440 11.240 18L11.240 18L11.320 17.760Q11.360 17.520 11.240 17.080L11.240 17.080ZM14 17.080L14 16.840Q14 16.800 14.040 16.800L14.040 16.800L14.040 16.880Q14.080 17.040 14 17.080L14 17.080ZM11.560 17L11.560 17Q11.480 16.840 11.520 16.820Q11.560 16.800 11.600 16.880L11.600 16.880L11.640 16.880Q11.760 17.040 11.920 17.360L11.920 17.360L12.120 17.760L12.160 17.760L12.160 18.320Q12.080 18.440 11.960 18.560L11.960 18.560L11.920 18.800L11.800 18.800Q11.920 18.640 11.920 18.560L11.920 18.560Q11.920 18.200 11.720 17.600L11.720 17.600Q11.600 17.200 11.560 17ZM5.560 18.200L5.560 16.920Q5.640 16.920 5.720 16.960L5.720 16.960Q5.800 17.080 5.840 17.240L5.840 17.240L5.840 17.800Q5.880 18.280 5.880 18.520L5.880 18.520L5.840 18.360Q5.800 18.120 5.760 18L5.760 18Q5.680 18 5.640 18.120L5.640 18.120L5.560 18.200ZM6.080 17.160L6.080 17.160Q6.040 17.040 6.160 16.920L6.160 16.920Q6.200 17.320 6.320 18.080L6.320 18.080L6.400 18.640Q6.360 18.680 6.400 18.840Q6.440 19 6.440 19.080L6.440 19.080L6.360 18.960L6.280 19.040Q6.200 18.920 6.200 18.640L6.200 18.640L6.160 18.400Q6.080 17.800 6.080 17.160ZM5.520 17.360L5.520 16.960L5.560 16.960L5.560 17.360L5.520 17.360ZM12.880 17.280L12.880 17.200Q12.880 17.160 12.880 17.100Q12.880 17.040 12.920 17.040L12.920 17.040L12.880 17.280ZM11.480 17.240L11.480 17.120Q11.720 17.640 11.840 18.320L11.840 18.320L11.760 18.280L11.760 18.160Q11.640 17.680 11.480 17.240L11.480 17.240ZM11.480 17.760L11.480 17.560Q11.480 17.520 11.440 17.480L11.440 17.480Q11.400 17.280 11.480 17.240L11.480 17.240Q11.680 17.760 11.760 18.160L11.760 18.160L11.640 18.240Q11.600 18.280 11.620 18.380Q11.640 18.480 11.600 18.520L11.600 18.520L11.520 18.640Q11.320 18.840 11.320 18.960L11.320 18.960Q11.240 19.200 11.340 19.600Q11.440 20 11.400 20.200L11.400 20.200Q11.400 20.320 11.280 20.560L11.280 20.560L11.240 20.600Q11.200 20.680 11.180 20.840Q11.160 21 11.120 21.080L11.120 21.080L11.120 19.640Q11.120 19.560 11.100 19.360Q11.080 19.160 11.120 19.080L11.120 19.080Q11.160 18.880 11.360 18.520L11.360 18.520L11.520 18.240Q11.520 18.080 11.480 17.760L11.480 17.760ZM5.520 17.800L5.520 17.360L5.560 17.360L5.560 17.800L5.520 17.800ZM13.960 17.920L13.920 17.920Q13.920 17.880 13.920 17.840L13.920 17.840L13.960 17.560L13.960 17.920ZM13.920 18.400L13.880 18.040L13.920 17.920L13.920 18.400L13.920 18.400ZM5.600 18.880L5.560 18.200Q5.600 18.160 5.640 18.080Q5.680 18 5.760 18L5.760 18Q5.800 18.120 5.840 18.360L5.840 18.360L5.880 18.520L5.880 19Q5.880 19.240 5.800 19.200Q5.720 19.160 5.640 19L5.640 19L5.600 18.880ZM13.640 18.160L13.640 18.160Q13.800 18.160 13.880 18.040L13.880 18.040L13.880 18.640Q13.840 18.640 13.740 18.760Q13.640 18.880 13.520 18.840L13.520 18.840Q13.440 18.920 13.400 19.120L13.400 19.120L13.360 19.240Q13.360 19.040 13.220 18.860Q13.080 18.680 12.880 18.660Q12.680 18.640 12.640 18.440L12.640 18.440L12.680 18.240Q12.640 18.520 12.800 18.500Q12.960 18.480 13.120 18.640Q13.280 18.800 13.400 18.800L13.400 18.800L13.480 18.560Q13.520 18.280 13.640 18.160ZM11.760 18.280L11.640 18.240Q11.680 18.200 11.760 18.160L11.760 18.160L11.760 18.280ZM5.560 18.200L5.560 18.200Q5.600 18.320 5.600 18.560L5.600 18.560L5.600 18.640L5.560 18.640Q5.560 18.440 5.560 18.200ZM11.520 18.640L11.600 18.520Q11.640 18.480 11.620 18.380Q11.600 18.280 11.640 18.240L11.640 18.240L11.800 18.320Q11.720 18.360 11.660 18.500Q11.600 18.640 11.560 18.680L11.560 18.680Q11.440 18.840 11.380 19.020Q11.320 19.200 11.380 19.360Q11.440 19.520 11.600 19.760L11.600 19.760L11.680 19.920Q11.720 20.200 11.520 20.720L11.520 20.720Q11.440 21.040 11.400 21.200L11.400 21.200L11.400 21.280Q11.400 22.240 11.520 22.680L11.520 22.680L11.280 22.640Q11.240 22.600 11.240 22.600L11.240 22.600L11.040 21.800Q11.080 21.760 11.080 21.640L11.080 21.640L11.120 21.080Q11.160 21 11.180 20.840Q11.200 20.680 11.240 20.600L11.240 20.600L11.280 20.560Q11.400 20.320 11.400 20.200L11.400 20.200Q11.440 20 11.340 19.600Q11.240 19.200 11.320 18.960L11.320 18.960Q11.320 18.840 11.520 18.640L11.520 18.640ZM11.560 18.680L11.560 18.680Q11.600 18.640 11.660 18.500Q11.720 18.360 11.800 18.320L11.800 18.320L11.840 18.320Q11.880 18.440 11.720 18.560L11.720 18.560Q11.680 18.640 11.560 18.780Q11.440 18.920 11.440 19.040L11.440 19.040Q11.360 19.240 11.460 19.420Q11.560 19.600 11.760 19.760L11.760 19.760Q11.840 19.760 11.840 19.880L11.840 19.880L11.840 19.920Q11.920 20.400 11.840 21.160L11.840 21.160L11.800 21.480Q11.800 22.160 11.840 22.520L11.840 22.520Q11.880 22.640 11.840 22.760L11.840 22.760L11.520 22.680Q11.400 22.240 11.400 21.240L11.400 21.240L11.400 21.200Q11.440 21.040 11.520 20.720L11.520 20.720Q11.720 20.200 11.680 19.920L11.680 19.920L11.600 19.760Q11.440 19.520 11.380 19.360Q11.320 19.200 11.380 19.020Q11.440 18.840 11.560 18.680ZM11.840 18.320L11.840 18.320L11.920 18.560Q11.920 18.640 11.800 18.800L11.800 18.800Q11.520 18.920 11.520 19.200L11.520 19.200Q11.480 19.360 11.720 19.560L11.720 19.560L11.880 19.680Q11.920 19.920 11.960 20.360L11.960 20.360L11.960 20.680Q12.040 21.480 12 22.760L12 22.760L11.840 22.760Q11.880 22.640 11.840 22.520L11.840 22.520Q11.800 22.160 11.800 21.520L11.800 21.520L11.840 21.160Q11.920 20.400 11.840 19.920L11.840 19.920L11.840 19.880Q11.840 19.760 11.760 19.760L11.760 19.760Q11.560 19.600 11.460 19.420Q11.360 19.240 11.440 19.040L11.440 19.040Q11.440 18.920 11.560 18.780Q11.680 18.640 11.720 18.560L11.720 18.560Q11.880 18.440 11.840 18.320ZM11.920 18.800L11.960 18.560Q12.080 18.440 12.160 18.320L12.160 18.320L12.160 18.720L12.080 18.840L11.920 18.800ZM13.880 18.920L13.920 18.400L13.920 18.400L13.920 18.920L13.880 18.920ZM12.760 18.720L12.600 18.640L12.640 18.440Q12.680 18.640 12.880 18.660Q13.080 18.680 13.220 18.860Q13.360 19.040 13.360 19.240L13.360 19.240L13.400 19.120Q13.440 18.920 13.520 18.840L13.520 18.840Q13.640 18.880 13.740 18.760Q13.840 18.640 13.880 18.640L13.880 18.640L13.880 18.920L13.880 18.960Q13.720 19.080 13.640 19.240L13.640 19.240L13.600 19.200Q13.520 19.160 13.480 19.120L13.480 19.120L13.480 19.240Q13.440 19.440 13.440 19.520L13.440 19.520Q13.440 19.720 13.380 20.120Q13.320 20.520 13.320 20.760L13.320 20.760L13.240 21.080Q13.120 21.040 12.920 21.080Q12.720 21.120 12.640 21.120L12.640 21.120Q12.520 21 12.520 20.800L12.520 20.800L12.640 21L12.720 20.920Q12.880 20.800 12.960 20.820Q13.040 20.840 13.160 20.760L13.160 20.760L13.240 20.720Q13.320 20.520 13.320 20.080L13.320 20.080L13.360 19.800Q13.400 19.560 13.320 19.360L13.320 19.360L13.120 19.640L13.040 19.680Q12.800 19.760 12.700 19.740Q12.600 19.720 12.440 19.720L12.440 19.720L12.440 19.720L12.440 19.720Q12.520 19.640 12.720 19.620Q12.920 19.600 13 19.560L13 19.560Q13.160 19.440 13.180 19.220Q13.200 19 13.040 18.840L13.040 18.840Q13 18.760 12.760 18.720L12.760 18.720ZM4.240 18.560L4.120 18.480Q4.320 18.560 4.680 18.920L4.680 18.920L4.680 18.960Q4.600 18.960 4.600 19.080L4.600 19.080L4.560 19.080Q4.480 18.880 4.240 18.560L4.240 18.560ZM12.080 18.880L12.160 18.720Q12.200 18.640 12.360 18.600L12.360 18.600L12.480 18.600Q12.520 18.560 12.560 18.600L12.560 18.600L12.600 18.640L12.600 18.840Q12.440 18.880 12.400 19.060Q12.360 19.240 12.480 19.360L12.480 19.360Q12.480 19.480 12.440 19.580Q12.400 19.680 12.320 19.680Q12.240 19.680 12.200 19.600L12.200 19.600L12.080 19.360Q12.200 19.240 12.200 19.100Q12.200 18.960 12.080 18.880L12.080 18.880ZM5.560 19.120L5.560 18.640L5.600 18.640L5.600 19.120L5.560 19.120ZM12.600 18.840L12.600 18.640L12.600 18.640L12.760 18.720Q13 18.760 13.040 18.840L13.040 18.840Q13.200 19 13.180 19.220Q13.160 19.440 13 19.560L13 19.560Q12.920 19.600 12.720 19.620Q12.520 19.640 12.440 19.720L12.440 19.720L12.440 19.600Q12.480 19.480 12.480 19.360L12.480 19.360Q12.600 19.480 12.780 19.440Q12.960 19.400 13.040 19.240Q13.120 19.080 12.940 18.920Q12.760 18.760 12.600 18.840L12.600 18.840ZM11.520 19.200L11.520 19.200Q11.520 18.920 11.800 18.800L11.800 18.800L11.920 18.800L12.080 18.840Q12.200 18.960 12.200 19.100Q12.200 19.240 12.080 19.360L12.080 19.360L12 19.440Q11.680 19.520 11.520 19.200ZM12.600 18.840L12.600 18.840Q12.760 18.760 12.940 18.920Q13.120 19.080 13.040 19.240Q12.960 19.400 12.780 19.440Q12.600 19.480 12.480 19.360Q12.360 19.240 12.400 19.060Q12.440 18.880 12.600 18.840ZM5.600 19.280L5.600 18.880Q5.640 18.920 5.680 19.040Q5.720 19.160 5.800 19.200Q5.880 19.240 5.880 19L5.880 19L5.880 18.960L5.920 19.320L5.920 19.560L5.720 19.480Q5.680 19.440 5.640 19.360L5.640 19.360L5.600 19.280ZM13.880 19.240L13.840 18.960L13.880 18.920L13.880 19.240L13.880 19.240ZM4.680 19.280L4.600 19.080Q4.600 18.960 4.680 18.960L4.680 18.960Q5.040 19.280 5.280 19.800L5.280 19.800L5.200 19.880Q5.040 20.040 5 20.120L5 20.120L5 20.120Q4.920 19.840 4.680 19.280L4.680 19.280ZM6.280 19.080L6.280 19.040Q6.320 19 6.360 18.960L6.360 18.960L6.440 19.080L6.440 19.200Q6.480 19.360 6.480 19.440L6.480 19.440Q6.360 19.520 6.340 19.700Q6.320 19.880 6.300 19.960Q6.280 20.040 6.080 20.080L6.080 20.080L5.960 20.120L5.960 19.840Q5.960 19.760 6.100 19.760Q6.240 19.760 6.280 19.720L6.280 19.720L6.280 19.320Q6.320 19.160 6.280 19.080L6.280 19.080ZM13.600 19.200L13.640 19.240Q13.720 19.080 13.840 18.960L13.840 18.960L13.880 20.240Q13.760 20.160 13.620 20.300Q13.480 20.440 13.400 20.440L13.400 20.440L13.320 20.760Q13.320 20.520 13.380 20.120Q13.440 19.720 13.440 19.520L13.440 19.520Q13.440 19.440 13.480 19.240L13.480 19.240L13.480 19.120Q13.520 19.160 13.600 19.200L13.600 19.200ZM6.120 19.160L6.200 19.160Q6.200 19.160 6.240 19.120L6.240 19.120L6.280 19.040Q6.320 19.160 6.320 19.320L6.320 19.320L6.280 19.440Q6.240 19.480 6.100 19.460Q5.960 19.440 5.920 19.560L5.920 19.560L5.920 19.200Q5.960 19.120 6.120 19.160L6.120 19.160ZM5.560 19.600L5.560 19.120L5.600 19.120L5.600 19.600L5.560 19.600ZM11.040 19.120L11.040 19.120Q11.080 19.240 11.040 19.360L11.040 19.360L11.040 19.360Q11 19.240 11.040 19.120ZM11.880 19.680L11.880 19.680Q11.840 19.640 11.720 19.560L11.720 19.560Q11.480 19.360 11.520 19.200L11.520 19.200Q11.680 19.520 12 19.440L12 19.440L11.840 19.480Q11.880 19.520 11.960 19.580Q12.040 19.640 12.080 19.680L12.080 19.680L12.120 19.840Q12.160 19.960 12.200 20.040L12.200 20.040Q12.240 20.280 12.240 20.520L12.240 20.520L12.120 20.480L12.120 20.600Q12.080 20.760 12.080 20.840L12.080 20.840Q12.080 21.120 12.080 21.720L12.080 21.720Q12.080 22.440 12.120 22.800L12.120 22.800L12 22.800L12 22.760Q12.040 21.480 11.960 20.680L11.960 20.680L11.960 20.360Q11.920 19.920 11.880 19.680ZM13.880 20.080L13.880 19.240L13.880 19.240L13.920 19.520Q13.920 19.880 13.880 20.080L13.880 20.080L13.880 20.080ZM5.600 19.720L5.600 19.280Q5.600 19.280 5.640 19.360Q5.680 19.440 5.720 19.480L5.720 19.480L5.920 19.560L5.920 19.680L5.920 19.720Q5.880 19.960 5.680 19.880L5.680 19.880Q5.640 19.880 5.640 19.800L5.640 19.800L5.600 19.720ZM11.040 19.440L11.040 19.360L11.040 19.360L11.080 19.640Q11 19.640 11.040 19.440L11.040 19.440ZM11.840 19.480L12 19.440Q12.040 19.360 12.080 19.360L12.080 19.360L12.200 19.600L12.200 20.040Q12.160 19.960 12.120 19.840L12.120 19.840L12.080 19.680Q12.040 19.640 11.960 19.580Q11.880 19.520 11.840 19.480L11.840 19.480ZM13.120 19.680L13.120 19.640Q13.160 19.600 13.280 19.440L13.280 19.440L13.320 19.360Q13.360 19.480 13.360 19.800L13.360 19.800L13.320 20.080Q13.320 20.520 13.240 20.720L13.240 20.720L13.160 20.760Q13.040 20.840 12.960 20.820Q12.880 20.800 12.720 20.920L12.720 20.920L12.640 21L12.520 20.800Q12.440 20.600 12.400 20.200L12.400 20.200L12.400 20Q12.400 19.880 12.440 19.760L12.440 19.760L12.440 19.720Q12.600 19.720 12.700 19.740Q12.800 19.760 13.040 19.680L13.040 19.680L13.120 19.680ZM5.960 19.840L5.920 19.560Q5.960 19.440 6.100 19.460Q6.240 19.480 6.280 19.440L6.280 19.440L6.280 19.720Q6.240 19.760 6.100 19.760Q5.960 19.760 5.960 19.840L5.960 19.840ZM6.280 19.960L6.320 19.960Q6.320 19.880 6.340 19.700Q6.360 19.520 6.480 19.440L6.480 19.440L6.480 19.480Q6.520 19.720 6.520 19.800L6.520 19.800L6.480 19.840Q6.400 19.880 6.400 19.920L6.400 19.920L6.360 20.160Q6.360 20.440 6.280 20.600L6.280 20.600L6 20.840L5.960 20.120L6.080 20.080Q6.280 20.040 6.280 19.960L6.280 19.960ZM12.200 20.040L12.200 19.600Q12.240 19.680 12.320 19.680Q12.400 19.680 12.440 19.600L12.440 19.600L12.440 19.720Q12.400 19.880 12.400 20L12.400 20L12.360 20.240Q12.320 20.520 12.280 20.640L12.280 20.640L12.240 20.520Q12.240 20.280 12.200 20.040L12.200 20.040ZM11.080 19.960L11.080 19.640L11.120 19.640L11.080 19.960L11.080 19.960ZM5.920 19.720L5.920 19.680Q5.920 19.760 5.960 19.840L5.960 19.840L5.960 20.200L5.640 20.240L5.600 20.080Q5.560 19.920 5.600 19.720L5.600 19.720L5.640 19.800Q5.640 19.880 5.680 19.880L5.680 19.880Q5.880 19.960 5.920 19.720L5.920 19.720ZM5.080 20.520L5 20.120Q5.040 20.040 5.200 19.880L5.200 19.880L5.280 19.800Q5.480 20.120 5.560 20.400L5.560 20.400L5.640 20.600Q5.760 20.880 5.800 21.040L5.800 21.040Q5.680 21.080 5.700 21.280Q5.720 21.480 5.680 21.520L5.680 21.520L5.600 21.560Q5.320 21.720 5.320 21.840L5.320 21.840L5.320 21.840Q5.320 21.400 5.080 20.520L5.080 20.520ZM6.360 20.160L6.400 19.920Q6.400 19.880 6.480 19.840L6.480 19.840L6.520 19.800Q6.560 20.080 6.600 20.600L6.600 20.600L6.600 20.760Q6.600 21 6.500 21.060Q6.400 21.120 6.320 21.360L6.320 21.360L6.320 21.360Q6.280 21.440 6.240 21.640L6.240 21.640L6.240 21.680L6.160 21.800L6.080 22.280L6.040 22.320Q6 22.120 6 21.960L6 21.960L6 21.760Q6.040 21.600 6 21.300Q5.960 21 6 20.840L6 20.840L6.280 20.600Q6.360 20.440 6.360 20.160L6.360 20.160ZM11.040 19.960L11.080 19.960L11.080 19.960L11.080 21.040L11.080 21.040L11.040 19.960ZM12.320 20.680L12.280 20.640Q12.320 20.520 12.360 20.240L12.360 20.240L12.400 20L12.400 20.200Q12.440 20.600 12.480 20.800Q12.520 21 12.640 21.120L12.640 21.120Q12.720 21.120 12.920 21.080Q13.120 21.040 13.240 21.080L13.240 21.080L13.320 20.800L13.320 21L13.240 21.560Q13.160 21.520 12.980 21.600Q12.800 21.680 12.720 21.640L12.720 21.640L12.560 21.280Q12.520 21.240 12.440 21.200L12.440 21.200L12.320 21.120L12.320 20.960Q12.360 20.800 12.320 20.680L12.320 20.680ZM13.880 20.240L13.880 20.080L13.880 20.080Q13.920 20.120 13.920 20.240L13.920 20.240L13.880 20.320L13.880 20.240ZM5.560 20.400L5.600 20.080Q5.600 20.160 5.640 20.240L5.640 20.240L5.600 20.520L5.560 20.400ZM5.600 20.520L5.640 20.240Q5.680 20.240 5.840 20.240L5.840 20.240L5.960 20.200L6 20.840Q5.960 21 6 21.300Q6.040 21.600 6 21.760L6 21.760L5.880 21.720Q5.920 21.560 5.840 21.240L5.840 21.240L5.800 21.040Q5.760 20.880 5.640 20.600L5.640 20.600L5.600 20.520ZM13.320 20.800L13.400 20.440Q13.480 20.440 13.620 20.300Q13.760 20.160 13.880 20.240L13.880 20.240L13.880 20.320Q13.840 20.520 13.880 20.720L13.880 20.720L13.880 20.880L13.840 20.720L13.720 20.760Q13.520 20.840 13.420 20.900Q13.320 20.960 13.320 21.120L13.320 21.120L13.320 20.800ZM13.880 20.760L13.880 20.280L13.920 20.280L13.920 20.760L13.880 20.760ZM13.880 20.320L13.880 20.720Q13.840 20.520 13.880 20.320L13.880 20.320ZM7.560 20.440L7.560 20.400L7.960 20.400L7.960 20.440L7.560 20.440ZM6.600 20.640L6.640 20.880Q7.040 20.440 7.560 20.440L7.560 20.440L8.040 20.440Q8.160 20.400 8.120 20.440L8.120 20.440Q8 20.440 7.880 20.480L7.880 20.480Q7.400 20.560 7.160 21.040L7.160 21.040Q7.120 21.080 7.080 21.200L7.080 21.200L7 21.280Q6.920 21.600 6.880 22.040L6.880 22.040L6.840 22.040Q6.800 21.840 6.680 21.640L6.680 21.640L6.560 21.600Q6.320 21.480 6.360 21.360L6.360 21.360L6.400 21.280Q6.480 21.160 6.540 21.080Q6.600 21 6.600 20.760L6.600 20.760L6.600 20.640L6.600 20.640ZM7.880 20.480L7.880 20.480Q8 20.440 8.120 20.440L8.120 20.440Q8.120 20.520 8.040 20.520Q7.960 20.520 7.880 20.480ZM12.120 20.640L12.120 20.480Q12.200 20.520 12.240 20.520L12.240 20.520L12.320 20.680L12.320 20.880Q12.280 21.080 12.320 21.160Q12.360 21.240 12.360 21.360L12.360 21.360L12.400 21.920L12.400 22.200Q12.440 22.520 12.480 22.640L12.480 22.640Q12.360 22.640 12.360 22.740Q12.360 22.840 12.320 22.840L12.320 22.840L12.120 22.800Q12.080 22.440 12.080 21.720L12.080 21.720Q12.080 21.120 12.080 20.840L12.080 20.840Q12.080 20.760 12.120 20.640L12.120 20.640ZM12.320 20.880L12.320 20.680Q12.360 20.800 12.320 20.960L12.320 20.960L12.320 21.160Q12.280 21.080 12.320 20.880L12.320 20.880ZM13.320 21.120L13.320 21.120Q13.320 20.960 13.420 20.900Q13.520 20.840 13.720 20.760L13.720 20.760L13.840 20.720L13.880 20.880L13.880 21.040L13.720 21.160Q13.480 21.280 13.400 21.400L13.400 21.400Q13.320 21.760 13.320 22.520L13.320 22.520L13.320 22.640L13.280 22.680L13.280 22.520Q13.280 21.600 13.320 21.120ZM13.880 21.040L13.880 20.760L13.920 20.720L13.920 21.080L13.880 21.040ZM10.760 21.480L10.760 21.040Q10.880 21.080 10.840 21.120L10.840 21.120Q10.800 21.280 10.800 21.440L10.800 21.440L10.800 21.480L10.760 21.480ZM11.080 21.480L11.080 21.040L11.080 21.040L11.080 21.480ZM13.240 21.560L13.240 21.560Q13.280 21.520 13.280 21.400L13.280 21.400L13.320 21L13.320 21.120Q13.280 21.600 13.280 22.520L13.280 22.520L13.280 22.680L12.760 22.680L12.720 22.320Q12.680 21.800 12.560 21.560L12.560 21.560Q12.400 21.520 12.360 21.360L12.360 21.360L12.360 21.360Q12.360 21.240 12.320 21.160L12.320 21.160L12.320 21.120L12.440 21.200Q12.520 21.240 12.560 21.280L12.560 21.280L12.720 21.640Q12.800 21.680 12.980 21.600Q13.160 21.520 13.240 21.560ZM5.600 21.560L5.680 21.520Q5.720 21.480 5.700 21.280Q5.680 21.080 5.800 21.040L5.800 21.040L5.840 21.240Q5.920 21.560 5.880 21.720L5.880 21.720Q5.760 21.680 5.680 21.720Q5.600 21.760 5.600 21.880L5.600 21.880Q5.600 22.080 5.840 22.120L5.840 22.120L5.720 22.160Q5.840 22.240 5.880 22.320L5.880 22.320L5.880 22.440Q5.880 22.640 5.840 22.720L5.840 22.720L5.400 22.720L5.400 22.600L5.320 21.840Q5.320 21.680 5.600 21.560L5.600 21.560ZM6.360 21.360L6.320 21.360Q6.320 21.360 6.320 21.360L6.320 21.360Q6.400 21.120 6.520 21.040L6.520 21.040Q6.480 21.160 6.400 21.280L6.400 21.280L6.360 21.360ZM13.400 21.400L13.400 21.400Q13.480 21.280 13.720 21.160L13.720 21.160L13.880 21.040L13.880 21.120Q13.880 21.320 13.920 21.440L13.920 21.440L13.920 21.600L13.880 21.560L13.800 21.680Q13.600 21.880 13.560 22.040L13.560 22.040Q13.560 22.120 13.480 22.120L13.480 22.120L13.400 22.160Q13.400 22.320 13.320 22.560L13.320 22.560L13.320 22.520Q13.320 21.760 13.400 21.400ZM13.880 21.120L13.880 21.040L13.920 21.080L13.920 21.440Q13.880 21.320 13.880 21.120L13.880 21.120ZM10.800 21.440L10.800 21.440Q10.800 21.280 10.840 21.120L10.840 21.120Q10.880 21.400 11 21.720L11 21.720Q11.040 21.760 11.020 21.660Q11 21.560 11.040 21.600L11.040 21.600L11.080 21.640Q11.080 21.760 11.040 21.800L11.040 21.800L11.240 22.600Q11.240 22.600 11.280 22.640L11.280 22.640L11.360 22.640Q11.240 22.640 11.280 22.800L11.280 22.800L11.360 23L11.160 23Q10.920 23 10.840 22.920L10.840 22.920L10.840 22.360Q10.840 21.760 10.800 21.440ZM13.920 21.560L13.920 21.280Q14 21.280 13.960 21.440L13.960 21.440L13.960 21.560L13.920 21.560ZM6.320 21.360L6.320 21.360L6.360 21.360Q6.320 21.480 6.560 21.600L6.560 21.600L6.680 21.640Q6.800 21.840 6.840 22.040L6.840 22.040L6.800 22.520Q6.640 22.520 6.580 22.580Q6.520 22.640 6.520 22.840L6.520 22.840L6.520 22.920L6.440 23.160Q6.280 23.200 6.080 23.200L6.080 23.200L6.040 22.720L6.160 22.840L6.440 22.760Q6.520 22.520 6.560 22.240L6.560 22.240L6.400 22.240Q6.160 22.200 6.080 22.280L6.080 22.280L6.160 21.800Q6.040 22 6.240 22.080Q6.440 22.160 6.520 22.020Q6.600 21.880 6.480 21.760Q6.360 21.640 6.240 21.720L6.240 21.720L6.240 21.640Q6.280 21.440 6.320 21.360ZM12.400 21.920L12.360 21.360Q12.400 21.520 12.560 21.560L12.560 21.560Q12.680 21.800 12.720 22.320L12.720 22.320L12.760 22.680L12.720 22.680L12.600 22.200Q12.520 22.240 12.480 22.080Q12.440 21.920 12.400 21.920L12.400 21.920ZM10.800 22.960L10.800 21.440Q10.840 21.760 10.840 22.360L10.840 22.360L10.840 22.920L10.800 22.960ZM13.800 21.680L13.880 21.560L13.920 21.600L13.920 21.640Q13.920 21.840 13.960 21.920L13.960 21.920L13.960 22Q14 22.120 14 22.200L14 22.200L14.040 22.640L13.320 22.640L13.360 22.560Q13.400 22.320 13.400 22.120L13.400 22.120L13.480 22.120Q13.560 22.120 13.560 22.040L13.560 22.040Q13.600 21.880 13.800 21.680L13.800 21.680ZM13.920 21.680L13.920 21.560L13.960 21.560L13.960 21.600Q13.960 21.840 13.960 21.920L13.960 21.920Q13.920 21.840 13.920 21.680L13.920 21.680ZM6.160 21.800L6.240 21.680Q6.360 21.640 6.480 21.760Q6.600 21.880 6.520 22.020Q6.440 22.160 6.240 22.080Q6.040 22 6.160 21.800L6.160 21.800ZM5.600 21.880L5.600 21.880Q5.600 21.760 5.680 21.720Q5.760 21.680 5.880 21.720L5.880 21.720L6 21.800L6 21.960Q5.960 22.040 5.840 22.120L5.840 22.120Q5.600 22.080 5.600 21.880ZM14.080 22.880L14.360 22.360Q14.400 22.320 14.480 22.160L14.480 22.160Q14.640 21.840 14.760 21.680L14.760 21.680Q14.720 21.880 14.600 22.280L14.600 22.280L14.400 22.760Q14.360 22.920 14.320 22.960L14.320 22.960L14.040 22.960Q14.040 22.920 14.080 22.880L14.080 22.880ZM12.400 22.200L12.360 21.920Q12.440 21.920 12.480 22.080Q12.520 22.240 12.600 22.200L12.600 22.200L12.720 22.680L12.480 22.640Q12.440 22.520 12.400 22.200L12.400 22.200ZM5.720 22.160L5.840 22.120Q5.960 22.040 6 21.960L6 21.960Q6 22.160 6.040 22.320L6.040 22.320L6.040 22.720Q6 22.960 6.040 23.320L6.040 23.320L5.920 23.200Q5.880 23.040 5.900 22.760Q5.920 22.480 5.880 22.360Q5.840 22.240 5.720 22.160L5.720 22.160ZM9.760 22L9.760 22Q9.800 22.040 9.920 22.200L9.920 22.200L10.240 22.600Q10.080 22.680 9.960 22.440L9.960 22.440L9.840 22.240Q9.760 22.120 9.760 22ZM15.360 22.240L15.440 22.160L15.480 22.160Q15.360 22.400 15.240 22.640L15.240 22.640L15 22.640Q15.080 22.520 15.360 22.240L15.360 22.240ZM10 22.320L10.040 22.320Q10.160 22.360 10.420 22.280Q10.680 22.200 10.800 22.200L10.800 22.200L10.800 22.280Q10.600 22.280 10.440 22.360L10.440 22.360L10.440 22.360Q10.280 22.480 10.320 22.600L10.320 22.600Q10.480 22.720 10.800 22.800L10.800 22.800L10.800 22.880Q10.160 22.760 9.800 22.600L9.800 22.600Q9.800 22.400 9.880 22.360L9.880 22.360L9.960 22.440Q10.080 22.680 10.240 22.600L10.240 22.600L10 22.320ZM14.040 22.680L14 22.200Q14.040 22.200 14.040 22.260Q14.040 22.320 14.080 22.320L14.080 22.320L14.360 22.400L14.160 22.720Q14.160 22.640 14.040 22.680L14.040 22.680L14.040 22.680ZM6.040 22.320L6.080 22.280Q6.160 22.200 6.400 22.240L6.400 22.240L6.560 22.240Q6.520 22.520 6.440 22.760L6.440 22.760L6.160 22.840L6.040 22.720L6.040 22.320ZM6.800 22.600L6.800 22.520Q6.800 22.360 6.840 22.240L6.840 22.240L6.840 22.320Q6.840 22.520 6.840 22.600L6.840 22.600L6.800 22.600ZM10.440 22.360L10.440 22.360Q10.600 22.280 10.800 22.280L10.800 22.280L10.800 22.320Q10.600 22.360 10.600 22.520Q10.600 22.680 10.800 22.720L10.800 22.720L10.800 22.800Q10.480 22.720 10.320 22.600L10.320 22.600Q10.280 22.480 10.440 22.360L10.440 22.360ZM5.880 22.440L5.880 22.320Q5.920 22.480 5.900 22.760Q5.880 23.040 5.920 23.200L5.920 23.200L5.960 23.680Q5.840 23.680 5.720 23.680L5.720 23.680L5.480 23.640L5.400 23.360L5.400 22.720L5.840 22.720Q5.880 22.640 5.880 22.440L5.880 22.440ZM10.560 22.520L10.560 22.520Q10.600 22.360 10.800 22.320L10.800 22.320L10.800 22.720Q10.600 22.680 10.560 22.520ZM5.040 22.560L5.040 22.440Q5.080 22.440 5.120 22.560L5.120 22.560L5.080 22.720Q5 22.760 5.040 22.560L5.040 22.560ZM6.560 22.560L6.560 22.560Q6.640 22.520 6.800 22.520L6.800 22.520L6.800 22.800Q6.600 22.800 6.520 22.920L6.520 22.920L6.520 22.840Q6.520 22.640 6.560 22.560ZM5.200 23.880L5.080 22.720Q5.080 22.640 5.120 22.600L5.120 22.600L5.560 23.840L5.400 23.880L5.200 23.880ZM6.800 22.840L6.800 22.600L6.840 22.600Q6.840 22.720 6.840 22.840L6.840 22.840L6.800 22.840ZM5.400 22.600L5.400 22.600L5.400 22.720L5.400 23.040L5.360 23.040Q5.360 22.840 5.400 22.600ZM11.720 22.840L11.280 22.800Q11.240 22.640 11.360 22.640L11.360 22.640L11.400 22.720Q11.760 22.800 12.120 22.800L12.120 22.800L12.320 22.840L12.320 22.880Q12.080 22.880 11.720 22.840L11.720 22.840ZM11.400 22.720L11.360 22.640Q11.440 22.680 11.520 22.680L11.520 22.680L12 22.760L12 22.800Q11.680 22.800 11.400 22.720L11.400 22.720ZM12.560 22.720L12.360 22.760Q12.360 22.640 12.480 22.640L12.480 22.640L12.760 22.680Q12.720 22.720 12.560 22.720L12.560 22.720ZM12.760 22.680L12.760 22.680Q12.920 22.680 13.040 22.680L13.040 22.680Q12.760 22.800 12.400 22.760L12.400 22.760L12.560 22.720Q12.720 22.720 12.760 22.680ZM13.040 22.680L13.040 22.680Q13.160 22.680 13.280 22.680L13.280 22.680Q13.200 22.720 13 22.760L13 22.760L12.800 22.800L12.440 22.800L12.400 22.880L12.320 22.880L12.320 22.840Q12.360 22.840 12.360 22.760L12.360 22.760L12.400 22.760Q12.800 22.800 13.040 22.680ZM13.280 22.680L13.280 22.680L13.280 22.680L14.040 22.640L14.040 22.680L13.920 22.720L13.640 22.720Q13.520 22.680 13.240 22.740Q12.960 22.800 12.840 22.800L12.840 22.800L12.800 22.800L13 22.760Q13.200 22.720 13.280 22.680ZM13.920 22.720L14.040 22.680Q14.040 22.680 14.040 22.680L14.040 22.680Q14.160 22.640 14.160 22.720L14.160 22.720L14.080 22.880L14.080 22.800Q12.720 23 11.320 22.920L11.320 22.920L11.280 22.800L11.720 22.840Q12.080 22.880 12.320 22.880L12.320 22.880L12.400 22.880Q12.880 22.880 13.160 22.840L13.160 22.840Q13.560 22.880 13.920 22.720L13.920 22.720ZM7.280 23.760L7.640 22.720L7.680 22.680Q7.680 22.920 7.560 23.360L7.560 23.360L7.480 23.760L7.280 23.760ZM12.840 22.800L12.840 22.800Q12.960 22.800 13.240 22.740Q13.520 22.680 13.680 22.720L13.680 22.720Q13.520 22.760 13.240 22.800L13.240 22.800L13.160 22.840Q12.760 22.880 12.400 22.880L12.400 22.880L12.400 22.840L12.560 22.840Q12.760 22.840 12.840 22.800ZM13.640 22.720L13.680 22.720L13.920 22.720Q13.560 22.880 13.160 22.840L13.160 22.840L13.240 22.800Q13.520 22.760 13.640 22.720L13.640 22.720ZM6.040 23.560L6.040 23.320Q6 23 6.040 22.720L6.040 22.720L6.080 23.200Q6.280 23.200 6.440 23.160L6.440 23.160L6.520 22.920L6.560 23.440L6.040 23.560ZM6.560 23.360L6.520 22.920Q6.600 22.800 6.800 22.800L6.800 22.800L6.800 22.920Q6.800 23.120 6.840 23.200L6.840 23.200L6.840 23.320L6.800 23.320Q6.720 23.240 6.640 23.280L6.640 23.280L6.560 23.360ZM12.400 22.840L12.440 22.800L12.800 22.800L12.840 22.800Q12.760 22.840 12.560 22.840L12.560 22.840L12.400 22.840ZM6.800 22.920L6.800 22.840L6.840 22.840Q6.840 23 6.840 23.200L6.840 23.200Q6.800 23.120 6.800 22.920L6.800 22.920ZM8.120 23.120L8.120 23.120L8.160 23.120L8.080 23.480L7.880 23.480Q7.960 23.360 8.120 23.120ZM4.400 23.160L4.400 23.160Q4.480 23.200 4.600 23.320L4.600 23.320L4.680 23.440Q4.920 23.640 4.720 23.640L4.720 23.640Q4.640 23.600 4.560 23.440L4.560 23.440L4.480 23.320Q4.440 23.200 4.400 23.160ZM5.960 23.680L5.920 23.200Q6 23.240 6.040 23.320L6.040 23.320L6.040 23.720L5.960 23.720L5.960 23.680ZM6.840 23.520L6.840 23.200Q6.880 23.160 6.880 23.280L6.880 23.280L6.840 23.520ZM5.120 23.360L5.160 23.240Q5.160 23.520 5.200 23.760L5.200 23.760Q5.080 23.760 5.020 23.680Q4.960 23.600 5 23.520L5 23.520L5.040 23.480Q5.120 23.440 5.120 23.360L5.120 23.360ZM6.600 23.760L6.560 23.360Q6.560 23.360 6.600 23.320L6.600 23.320L6.640 23.280Q6.720 23.240 6.800 23.320L6.800 23.320L6.920 23.680Q6.840 23.720 6.640 23.760L6.640 23.760L6.600 23.760ZM4.680 23.440L4.680 23.440Q4.760 23.440 4.920 23.400L4.920 23.400L5.120 23.360Q5.120 23.440 5.040 23.480L5.040 23.480L5 23.520Q4.960 23.600 5.020 23.680Q5.080 23.760 5.200 23.760L5.200 23.760L5.200 23.840L5.120 23.800Q4.840 23.760 4.720 23.640L4.720 23.640Q4.920 23.640 4.680 23.440ZM6.880 23.440L6.880 23.360Q6.920 23.400 7.040 23.400L7.040 23.400Q7.280 23.440 7.360 23.480L7.360 23.480L7.280 23.760Q6.760 23.880 6.200 23.840L6.200 23.840L6.240 23.840Q6.480 23.800 6.600 23.800L6.600 23.800L6.720 23.800Q7 23.760 7.080 23.640Q7.160 23.520 6.880 23.440L6.880 23.440L6.880 23.440ZM4.320 23.520L4.360 23.520Q4.400 23.480 4.520 23.400L4.520 23.400L4.520 23.400L4.560 23.440Q4.640 23.600 4.740 23.680Q4.840 23.760 5.120 23.800L5.120 23.800L5.200 23.840L5.200 23.880Q5.040 23.880 4.760 23.800L4.760 23.800L4.560 23.760Q4.360 23.760 4.240 23.600L4.240 23.600Q4.200 23.560 4.320 23.520L4.320 23.520ZM6.040 23.880L6.040 23.560Q6.160 23.520 6.400 23.480L6.400 23.480L6.560 23.440L6.600 23.800Q6.480 23.800 6.240 23.840L6.240 23.840L6.040 23.880ZM6.840 23.520L6.880 23.440Q6.880 23.440 6.880 23.440L6.880 23.440Q7.160 23.520 7.080 23.640Q7 23.760 6.720 23.800L6.720 23.800L6.600 23.800L6.600 23.760L6.600 23.760Q6.800 23.720 6.920 23.680L6.920 23.680L6.840 23.520ZM5.520 23.720L5.480 23.640Q5.600 23.680 5.720 23.720Q5.840 23.760 5.960 23.720L5.960 23.720L6.040 23.720L6.040 23.760L5.520 23.720ZM5.720 23.680L5.720 23.680Q5.840 23.680 5.960 23.680L5.960 23.680L5.960 23.720Q5.840 23.760 5.720 23.680ZM5.560 23.800L5.520 23.720Q5.560 23.720 5.600 23.720L5.600 23.720L6.040 23.760L6.040 23.800L5.840 23.800Q5.640 23.760 5.560 23.800L5.560 23.800ZM5.560 23.840L5.560 23.800Q5.640 23.760 5.840 23.800L5.840 23.800L6.040 23.800L6.040 23.840L5.560 23.840ZM5.400 23.880L5.560 23.840Q5.680 23.840 5.960 23.840L5.960 23.840L6.040 23.840L6.040 23.880L6 23.880Q5.600 23.880 5.400 23.920L5.400 23.920L5.400 23.880Z"/>',
  "seti:typescript": '<path d="M11.376 6.833L11.532 6.833L7.359 6.833L7.359 19.235L4.317 19.235L4.317 6.833L0.183 6.833L0.183 4.610L11.376 4.610L11.376 6.833ZM20.892 15.491L20.892 15.491Q20.892 15.062 20.736 14.750Q20.580 14.438 20.307 14.126L20.307 14.126Q20.073 13.931 19.605 13.697L19.605 13.697Q19.293 13.580 18.513 13.268L18.513 13.268L18.201 13.151Q15.666 12.410 14.184 11.318L14.184 11.318Q12.858 10.187 12.858 8.510L12.858 8.510Q12.858 6.677 14.457 5.585L14.457 5.585Q15.900 4.492 18.299 4.492Q20.697 4.492 22.257 5.858L22.257 5.858Q23.700 7.145 23.700 9.017L23.700 9.017L20.892 9.017Q20.892 8.471 20.716 8.081Q20.541 7.691 20.151 7.301L20.151 7.301Q19.371 6.716 18.201 6.716Q17.031 6.716 16.407 7.184Q15.783 7.652 15.783 8.510L15.783 8.510Q15.783 9.212 16.524 9.758L16.524 9.758Q16.836 9.992 17.460 10.226L17.460 10.226Q17.928 10.421 18.942 10.733L18.942 10.733Q21.321 11.434 22.569 12.507Q23.817 13.580 23.817 15.491L23.817 15.491Q23.817 16.427 23.447 17.187Q23.076 17.948 22.374 18.416L22.374 18.416Q20.892 19.508 18.474 19.508L18.474 19.508Q15.900 19.508 14.301 18.260L14.301 18.260Q12.468 16.817 12.624 14.750L12.624 14.750L15.549 14.750Q15.549 15.998 16.407 16.700L16.407 16.700Q16.758 16.973 17.343 17.129Q17.928 17.285 18.591 17.285L18.591 17.285Q19.917 17.285 20.424 16.817L20.424 16.817Q20.892 16.076 20.892 15.491Z"/>',
  "seti:tsconfig": '<path d="M1.668 0.198L1.668 0.198L22.332 0.198Q22.962 0.198 23.382 0.618Q23.802 1.038 23.802 1.668L23.802 1.668L23.802 22.332Q23.802 22.962 23.382 23.382Q22.962 23.802 22.332 23.802L22.332 23.802L1.668 23.802Q1.038 23.802 0.618 23.382Q0.198 22.962 0.198 22.332L0.198 22.332L0.198 1.668Q0.198 1.038 0.618 0.618Q1.038 0.198 1.668 0.198ZM10.572 12.546L13.470 12.546L13.470 10.530L5.364 10.530L5.364 12.546L8.262 12.546L8.262 21.576L10.572 21.576L10.572 12.546ZM14.268 19.140L14.268 21.702Q14.898 22.038 15.675 22.185Q16.452 22.332 17.313 22.332Q18.174 22.332 18.951 22.164Q19.728 21.996 20.337 21.576Q20.946 21.156 21.282 20.526Q21.618 19.896 21.618 18.930L21.618 18.930Q21.618 18.216 21.408 17.712Q21.198 17.208 20.820 16.788Q20.442 16.368 19.917 16.032Q19.392 15.696 18.804 15.444L18.804 15.444Q18.342 15.234 17.985 15.045Q17.628 14.856 17.355 14.667Q17.082 14.478 16.914 14.226Q16.746 13.974 16.746 13.701Q16.746 13.428 16.893 13.218Q17.040 13.008 17.271 12.861Q17.502 12.714 17.838 12.630Q18.174 12.546 18.594 12.546L18.594 12.546Q19.602 12.546 20.526 13.008L20.526 13.008Q20.862 13.134 21.114 13.344L21.114 13.344L21.114 10.950Q20.526 10.740 19.938 10.614L19.938 10.614Q19.182 10.530 18.426 10.530L18.426 10.530Q17.586 10.530 16.809 10.719Q16.032 10.908 15.465 11.328Q14.898 11.748 14.562 12.378Q14.226 13.008 14.226 13.932L14.226 13.932Q14.226 15.066 14.835 15.864Q15.444 16.662 16.704 17.208L16.704 17.208L17.628 17.628Q18.048 17.838 18.363 18.069Q18.678 18.300 18.867 18.573Q19.056 18.846 19.056 19.140L19.056 19.140Q19.056 19.686 18.594 19.980L18.594 19.980Q18.384 20.148 18.006 20.232Q17.628 20.316 17.208 20.316L17.208 20.316Q16.410 20.316 15.654 20.022Q14.898 19.728 14.268 19.140L14.268 19.140Z"/>',
  "seti:vala": '<path d="M13.452 8.241L13.490 8.241Q15.010 8.241 16.454 8.583L16.454 8.583L17.024 8.849Q18.050 9.343 18.278 10.255L18.278 10.255Q18.506 11.053 18.088 11.927L18.088 11.927Q17.974 12.307 17.670 12.725L17.670 12.725Q17.480 12.953 17.024 13.333L17.024 13.333L16.796 13.599Q16.112 14.169 14.592 15.157L14.592 15.157L13.718 15.727Q13.414 15.917 12.806 16.297L12.806 16.297Q11.704 17.019 11.210 17.513L11.210 17.513Q11.096 17.627 10.925 17.855Q10.754 18.083 10.602 18.197L10.602 18.197Q10.450 18.463 10.431 18.786Q10.412 19.109 10.488 19.413L10.488 19.413Q10.754 19.945 11.267 20.363Q11.780 20.781 12.445 20.952Q13.110 21.123 13.604 20.743Q14.098 20.363 14.174 19.641L14.174 19.641L14.174 19.147Q14.174 18.691 14.554 18.349L14.554 18.349Q15.162 17.893 15.846 17.741L15.846 17.741Q17.100 17.475 17.746 17.627L17.746 17.627Q17.974 17.627 18.088 17.741L18.088 17.741Q18.544 17.931 18.658 18.197Q18.772 18.463 18.696 18.919L18.696 18.919Q18.202 20.895 16.568 22.377L16.568 22.377Q15.124 23.631 13.338 23.783L13.338 23.783Q11.932 23.973 10.488 23.441L10.488 23.441Q5.814 21.655 4.218 16.791L4.218 16.791Q3.686 15.005 4.180 13.447Q4.674 11.889 6.118 10.749L6.118 10.749Q7.752 9.229 10.754 8.583L10.754 8.583Q11.704 8.355 12.160 8.355L12.160 8.355Q12.768 8.241 13.452 8.241L13.452 8.241ZM15.010 4.783L15.010 4.783Q15.200 1.933 17.518 0.641L17.518 0.641Q18.924-0.081 20.368 0.299L20.368 0.299Q21.166 0.451 21.470 0.907Q21.774 1.363 21.641 2.199Q21.508 3.035 20.824 3.966Q20.140 4.897 19.722 5.353L19.722 5.353Q19.038 6.075 18.354 6.455L18.354 6.455Q17.594 7.025 16.796 7.177L16.796 7.177Q16.226 7.253 15.827 7.063Q15.428 6.873 15.238 6.341L15.238 6.341Q15.010 5.619 15.010 4.783ZM13.338 2.769L13.338 2.769Q13.338 4.479 12.502 5.619L12.502 5.619Q12.350 5.961 12.046 6.113L12.046 6.113Q11.780 6.379 11.457 6.379Q11.134 6.379 10.868 6.113L10.868 6.113Q10.488 5.733 10.260 5.049L10.260 5.049Q9.842 3.605 10.146 2.427L10.146 2.427Q10.526 1.097 11.932 1.097L11.932 1.097Q12.388 1.097 12.711 1.287Q13.034 1.477 13.110 1.819L13.110 1.819Q13.224 1.933 13.224 2.199L13.224 2.199Q13.224 2.541 13.338 2.769ZM8.474 4.897L8.474 5.277Q8.474 5.847 8.436 6.151L8.436 6.151Q8.360 6.607 8.132 6.949L8.132 6.949Q7.942 7.405 7.600 7.462Q7.258 7.519 6.840 7.177L6.840 7.177Q5.814 6.341 5.624 5.049L5.624 5.049L5.624 4.213Q5.738 3.643 6.137 3.263Q6.536 2.883 7.068 2.883L7.068 2.883Q7.676 2.883 8.018 3.377L8.018 3.377Q8.474 4.023 8.474 4.897L8.474 4.897ZM5.168 8.735L5.168 8.697Q5.168 9.077 4.940 9.533L4.940 9.533Q4.750 10.065 4.218 9.913L4.218 9.913L4.104 9.875L3.990 9.799Q3.268 9.533 2.793 8.716Q2.318 7.899 2.318 7.177L2.318 7.177Q2.318 6.759 2.584 6.417Q2.850 6.075 3.268 5.847L3.268 5.847Q3.800 5.695 4.332 6.227L4.332 6.227Q4.636 6.531 4.788 7.025L4.788 7.025Q4.902 7.291 5.016 7.899L5.016 7.899L5.054 8.013Q5.168 8.355 5.168 8.735L5.168 8.735Z"/>',
  "seti:vue": '<path d="M6.117 1.659L12.000 11.870L17.883 1.659L14.775 1.659L12.000 6.469L9.225 1.659L6.117 1.659ZM23.951 1.659L19.178 1.659L12.000 14.090L4.822 1.659L0.049 1.659L12.000 22.341L23.951 1.659Z"/>',
  "seti:wasm": '<path d="M9.396 0.198L0.198 0.198L0.198 23.802L23.802 23.802L23.802 0.198L14.646 0.198Q14.646 1.164 13.806 1.983Q12.966 2.802 12 2.802Q11.034 2.802 10.215 1.983Q9.396 1.164 9.396 0.198L9.396 0.198ZM8.976 21.198L7.002 13.302L8.598 13.302L9.774 17.838L10.950 13.302L12.126 13.302L13.302 17.838L14.478 13.302L16.074 13.302L14.100 21.198L12.714 21.198L11.538 16.074L11.328 17.166Q10.782 19.770 10.362 21.198L10.362 21.198L8.976 21.198ZM15.486 21.198L17.460 13.302L19.812 13.302L21.786 21.198L20.022 21.198L19.602 19.224L17.628 19.224L17.250 21.198L15.486 21.198ZM19.434 17.838L18.846 14.898L18.426 14.898L17.838 17.838L19.434 17.838Z"/>',
  "seti:wat": '<path d="M11.702 18.563L9.532 18.563L7.327 9.813L5.157 18.563L2.952 18.563L0.222 5.438L2.532 5.438L4.072 13.102L6.242 5.438L8.447 5.438L10.617 13.102L12.158 5.438L14.467 5.438L11.702 18.563ZM23.778 18.563L21.013 5.438L16.638 5.438L13.943 18.563L16.638 18.563L17.197 15.308L20.453 15.308L21.013 18.563L23.778 18.563ZM20.208 13.102L17.443 13.102L18.282 8.203L19.367 8.203L20.208 13.102Z"/>',
  "seti:xml": '<path d="M0.372 0.202L0.372 0.202Q6.803 0.084 12.408 3.506L12.408 3.506Q17.718 6.751 20.845 12.208Q23.972 17.666 23.795 23.625L23.795 23.625L19.016 23.625Q18.839 19.731 17.541 16.486Q16.243 13.241 13.677 10.527Q11.110 7.813 7.688 6.456L7.688 6.456Q4.384 5.158 0.549 5.158L0.549 5.158Q0.372 3.506 0.372 0.202ZM16.243 23.802L16.243 23.802L11.464 23.802L10.874 20.852Q9.753 17.489 7.600 15.542Q5.446 13.595 2.024 12.946L2.024 12.946Q1.670 12.710 0.726 12.710L0.726 12.710Q0.490 12.710 0.431 12.621Q0.372 12.533 0.372 12.356L0.372 12.356L0.372 7.754Q5.977 7.754 10.520 11.471L10.520 11.471Q15.948 16.368 16.243 23.802ZM6.862 20.498L6.862 20.498Q6.862 21.855 5.889 22.828Q4.915 23.802 3.529 23.802Q2.142 23.802 1.228 22.858Q0.313 21.914 0.195 20.498L0.195 20.498Q0.195 19.082 1.169 18.108Q2.142 17.135 3.529 17.135Q4.915 17.135 5.889 18.108Q6.862 19.082 6.862 20.498Z"/>',
  "seti:yml": '<path d="M13.615 15.116L13.415 16.076Q13.095 16.076 12.575 16.156L12.575 16.156Q12.215 16.196 12.055 16.196L12.055 16.196L9.815 16.196Q10.055 13.516 10.495 8.196Q10.935 2.876 11.175 0.196L11.175 0.196L12.655 0.196Q14.375 0.116 15.175 0.196L15.175 0.196Q15.455 0.196 15.735 0.556Q16.015 0.916 15.935 1.196L15.935 1.196Q15.655 3.196 14.935 7.236L14.935 7.236L14.415 9.956Q14.215 11.636 13.615 15.116L13.615 15.116ZM13.935 21.076L13.935 21.076Q14.015 22.116 13.255 22.936Q12.495 23.756 11.295 23.836Q10.095 23.916 9.115 23.256Q8.135 22.596 8.055 21.596L8.055 21.596Q7.975 20.436 8.735 19.676Q9.495 18.916 10.815 18.836Q12.135 18.756 12.995 19.356Q13.855 19.956 13.935 21.076Z"/>',
  "seti:prolog": '<path d="M20.167 0.198L20.167 0.198Q19.915 0.450 19.621 0.744L19.621 0.744Q18.907 1.374 18.067 1.962L18.067 1.962Q16.849 2.718 15.505 3.138L15.505 3.138Q13.783 3.684 11.977 3.684Q10.171 3.684 8.491 3.138L8.491 3.138Q7.147 2.718 5.929 1.962L5.929 1.962Q5.089 1.374 4.375 0.744L4.375 0.744L3.829 0.198L3.367 0.996Q2.821 2.004 2.359 3.054L2.359 3.054Q1.729 4.566 1.435 5.994L1.435 5.994Q1.015 7.800 1.099 9.354L1.099 9.354Q1.267 11.790 1.981 13.722L1.981 13.722Q2.863 16.116 4.753 18.258L4.753 18.258Q7.357 21.156 11.977 23.802L11.977 23.802Q16.219 21.408 18.739 18.804L18.739 18.804Q20.923 16.536 21.931 13.974L21.931 13.974Q22.729 11.916 22.897 9.354L22.897 9.354Q23.065 6.540 21.637 3.054L21.637 3.054Q20.923 1.332 20.167 0.198L20.167 0.198ZM4.249 2.676L4.249 2.676Q5.047 3.264 5.887 3.684L5.887 3.684Q4.207 4.272 3.115 5.658L3.115 5.658Q3.577 4.104 4.249 2.676ZM19.369 15.528L19.369 15.528Q18.277 17.208 16.555 18.720L16.555 18.720L16.555 17.334L15.001 17.334L15.001 20.022Q13.993 20.778 12.775 21.534L12.775 21.534L12.775 19.266L11.221 19.266L11.221 21.534Q10.087 20.820 8.995 20.022L8.995 20.022L8.995 17.334L7.441 17.334L7.441 18.720Q6.643 18.048 5.929 17.250L5.929 17.250Q4.417 15.528 3.619 13.638L3.619 13.638Q4.795 14.772 6.391 15.171Q7.987 15.570 9.541 15.066L9.541 15.066L11.977 17.544L14.455 15.066Q16.009 15.570 17.605 15.171Q19.201 14.772 20.377 13.638L20.377 13.638Q19.957 14.646 19.369 15.528ZM11.977 15.318L11.053 14.394Q11.557 14.058 11.977 13.638L11.977 13.638Q12.439 14.058 12.943 14.394L12.943 14.394L11.977 15.318ZM16.177 13.806L16.177 13.806Q14.749 13.806 13.594 12.966Q12.439 12.126 11.977 10.782L11.977 10.782Q11.473 12.336 10.087 13.155Q8.701 13.974 7.084 13.722Q5.467 13.470 4.417 12.231Q3.367 10.992 3.367 9.375Q3.367 7.758 4.417 6.519Q5.467 5.280 7.084 5.007Q8.701 4.734 10.087 5.574Q11.473 6.414 11.977 7.926L11.977 7.926Q12.523 6.330 14.014 5.511Q15.505 4.692 17.164 5.049Q18.823 5.406 19.810 6.792Q20.797 8.178 20.608 9.858Q20.419 11.538 19.159 12.672Q17.899 13.806 16.177 13.806ZM18.109 3.684L18.109 3.684Q18.949 3.264 19.747 2.676L19.747 2.676Q20.419 4.104 20.881 5.658L20.881 5.658Q19.789 4.272 18.109 3.684ZM5.593 9.354L5.593 9.354Q5.593 10.278 6.244 10.929Q6.895 11.580 7.798 11.580Q8.701 11.580 9.352 10.929Q10.003 10.278 10.003 9.354Q10.003 8.430 9.352 7.800Q8.701 7.170 7.798 7.170Q6.895 7.170 6.244 7.800Q5.593 8.430 5.593 9.354ZM13.993 9.354L13.993 9.354Q13.993 10.278 14.644 10.929Q15.295 11.580 16.198 11.580Q17.101 11.580 17.752 10.929Q18.403 10.278 18.403 9.354Q18.403 8.430 17.752 7.800Q17.101 7.170 16.198 7.170Q15.295 7.170 14.644 7.800Q13.993 8.430 13.993 9.354Z"/>',
  "seti:zig": '<path d="M3.120 5.821L7.301 4.600L4.526 8.004L3.120 5.821ZM0.197 4.600L7.301 4.600L5.303 6.302L4.526 8.004L3.601 8.004L3.601 15.848L4.970 15.848L3.305 16.625L2.047 19.252L0.197 19.252L0.197 4.600ZM0.826 17.550L4.970 15.848L2.047 19.252L0.826 17.550ZM5.895 8.004L8.855 4.600L9.780 6.746L5.895 8.004ZM8.855 6.154L8.855 4.600L17.328 4.600L17.328 8.004L5.895 8.004L8.855 6.154ZM14.072 17.254L18.105 15.848L15.145 19.252L14.072 17.254ZM6.672 15.848L18.105 15.848L15.626 17.254L15.145 19.252L6.672 19.252L6.672 15.848ZM15.774 4.600L23.322 1.196L8.226 19.252L0.678 22.804L15.774 4.600ZM19.030 8.152L21.953 4.600L21.805 7.375L19.030 8.152ZM21.953 4.600L23.803 4.600L23.803 19.252L16.551 19.252L18.697 17.402L19.474 15.848L20.399 15.848L20.399 8.152L19.030 8.152L20.547 6.746L21.953 4.600ZM16.551 19.252L19.474 15.848L20.251 18.179L16.551 19.252Z"/>',
  "seti:zip": '<path d="M21.348 23.894L21.348 23.894L2.652 23.894Q2.386 23.894 2.234 23.723Q2.082 23.552 2.082 23.324L2.082 23.324L2.082 0.714Q2.082 0.486 2.234 0.315Q2.386 0.144 2.652 0.144L2.652 0.144L21.348 0.144Q21.576 0.144 21.747 0.315Q21.918 0.486 21.918 0.714L21.918 0.714L21.918 23.324Q21.918 23.552 21.766 23.723Q21.614 23.894 21.348 23.894ZM11.620 14.546L11.620 0.106L12.380 0.106L12.380 14.546L11.620 14.546ZM11.810 1.778L11.810 0.980L14.128 0.980L14.128 1.778L11.810 1.778ZM11.810 3.412L11.810 2.614L14.128 2.614L14.128 3.412L11.810 3.412ZM11.810 5.084L11.810 4.286L14.128 4.286L14.128 5.084L11.810 5.084ZM11.810 6.718L11.810 5.920L14.128 5.920L14.128 6.718L11.810 6.718ZM11.810 8.390L11.810 7.592L14.128 7.592L14.128 8.390L11.810 8.390ZM11.810 10.024L11.810 9.264L14.128 9.264L14.128 10.024L11.810 10.024ZM11.810 11.696L11.810 10.898L14.128 10.898L14.128 11.696L11.810 11.696ZM11.810 13.330L11.810 12.532L14.128 12.532L14.128 13.330L11.810 13.330ZM9.796 2.538L9.796 1.740L12.152 1.740L12.152 2.538L9.796 2.538ZM9.796 4.172L9.796 3.412L12.152 3.412L12.152 4.172L9.796 4.172ZM9.796 5.844L9.796 5.046L12.152 5.046L12.152 5.844L9.796 5.844ZM9.796 7.516L9.796 6.718L12.152 6.718L12.152 7.516L9.796 7.516ZM9.796 9.150L9.796 8.352L12.152 8.352L12.152 9.150L9.796 9.150ZM9.796 10.822L9.796 10.024L12.152 10.024L12.152 10.822L9.796 10.822ZM9.796 12.456L9.796 11.658L12.152 11.658L12.152 12.456L9.796 12.456ZM9.796 0.904L9.796 0.106L12.152 0.106L12.152 0.904L9.796 0.904ZM9.796 14.090L9.796 13.330L12.152 13.330L12.152 14.090L9.796 14.090ZM14.812 19.410L14.812 19.410Q14.736 18.726 14.470 17.358L14.470 17.358L14.318 16.408L14.280 16.294Q14.090 15.914 13.558 15.724Q13.026 15.534 12.019 15.534Q11.012 15.534 10.461 15.724Q9.910 15.914 9.720 16.294L9.720 16.294L9.682 16.408L9.530 17.358Q9.264 18.726 9.188 19.410L9.188 19.410Q9.112 19.942 9.530 20.265Q9.948 20.588 10.746 20.626L10.746 20.626L13.254 20.626Q14.052 20.588 14.470 20.265Q14.888 19.942 14.812 19.410ZM12.038 18.308L12.038 18.308L11.962 18.308Q11.392 18.308 11.050 18.061Q10.708 17.814 10.689 17.377Q10.670 16.940 11.031 16.655Q11.392 16.370 11.962 16.408L11.962 16.408L11.962 16.408L12.038 16.370Q12.608 16.370 12.969 16.655Q13.330 16.940 13.311 17.377Q13.292 17.814 12.950 18.061Q12.608 18.308 12.038 18.308Z"/>',
  "seti:wgt": '<path d="M11.751 0.458L11.751 0.458Q11.681 0.458 11.646 0.493L11.646 0.493L11.436 0.633Q9.826 1.613 9.056 2.208L9.056 2.208Q7.761 3.293 7.446 4.273L7.446 4.273Q7.341 4.588 7.341 4.833L7.341 4.833Q7.341 4.973 7.411 5.288L7.411 5.288L7.446 5.393Q7.691 6.233 8.251 7.108L8.251 7.108Q8.391 7.388 8.793 7.895Q9.196 8.403 9.231 8.403L9.231 8.403Q11.156 7.178 12.136 6.233L12.136 6.233L12.136 3.538Q12.136 1.823 12.101 1.298Q12.066 0.773 11.978 0.633Q11.891 0.493 11.751 0.458ZM7.061 5.008L7.061 5.008Q6.956 5.008 6.868 5.463Q6.781 5.918 6.448 7.230Q6.116 8.543 5.906 9.208L5.906 9.208Q5.766 9.733 5.713 10.223Q5.661 10.713 5.766 10.853L5.766 10.853Q5.906 11.098 9.476 12.218L9.476 12.218Q10.246 12.463 10.491 12.445Q10.736 12.428 10.876 12.148L10.876 12.148L10.911 12.113Q11.051 11.833 11.033 11.640Q11.016 11.448 10.666 10.923L10.666 10.923Q10.386 10.538 9.406 9.208L9.406 9.208L9.266 8.963Q8.076 7.353 7.743 6.793Q7.411 6.233 7.271 5.498L7.271 5.498Q7.131 5.008 7.061 5.008ZM17.946 5.673L17.946 5.673Q17.806 5.673 17.666 5.673L17.666 5.673Q17.211 5.743 15.846 5.830Q14.481 5.918 13.816 5.953L13.816 5.953Q13.256 5.953 12.766 6.058Q12.276 6.163 12.171 6.303L12.171 6.303Q11.996 6.513 12.066 10.258L12.066 10.258Q12.066 11.063 12.153 11.290Q12.241 11.518 12.521 11.588L12.521 11.588L12.591 11.588Q12.906 11.658 13.081 11.570Q13.256 11.483 13.641 10.958L13.641 10.958Q13.921 10.608 14.901 9.278L14.901 9.278L15.076 9.033Q16.231 7.423 16.668 6.933Q17.106 6.443 17.736 6.058L17.736 6.058Q18.191 5.813 18.156 5.743Q18.121 5.673 17.946 5.673ZM18.961 5.883L18.961 5.883Q18.646 5.883 18.436 5.953L18.436 5.953Q18.261 5.988 18.016 6.163L18.016 6.163L17.911 6.198Q17.176 6.688 16.511 7.493L16.511 7.493Q16.301 7.738 15.933 8.280Q15.566 8.823 15.601 8.858L15.601 8.858Q17.351 10.328 18.576 10.923L18.576 10.923L21.131 10.118Q22.741 9.593 23.248 9.400Q23.756 9.208 23.861 9.068Q23.966 8.928 23.931 8.788L23.931 8.788Q23.896 8.718 23.861 8.718L23.861 8.718L23.686 8.543Q22.251 7.318 21.411 6.793L21.411 6.793Q20.011 5.883 18.961 5.883ZM0.411 9.243L0.411 9.243Q0.341 9.243 0.306 9.278L0.306 9.278Q0.131 9.313 0.096 9.453L0.096 9.453Q0.061 9.488 0.061 9.558L0.061 9.558L0.131 9.768Q0.586 11.623 0.901 12.533L0.901 12.533Q1.531 14.108 2.371 14.703L2.371 14.703Q2.651 14.913 2.861 14.983L2.861 14.983Q3.001 15.018 3.316 15.053L3.316 15.053L3.421 15.053Q4.296 15.088 5.311 14.843L5.311 14.843Q5.626 14.773 6.238 14.545Q6.851 14.318 6.851 14.283L6.851 14.283Q6.291 12.078 5.696 10.853L5.696 10.853L3.106 10.013Q0.761 9.243 0.411 9.243ZM18.506 11.028L18.471 10.993Q17.981 10.993 14.726 12.113L14.726 12.113Q13.956 12.358 13.763 12.515Q13.571 12.673 13.606 12.988L13.606 12.988L13.606 13.023Q13.641 13.338 13.781 13.478Q13.921 13.618 14.516 13.863L14.516 13.863Q14.936 14.003 16.546 14.493L16.546 14.493L16.791 14.598Q18.716 15.193 19.311 15.473Q19.906 15.753 20.466 16.243L20.466 16.243Q20.851 16.558 20.921 16.505Q20.991 16.453 20.798 16.033Q20.606 15.613 20.098 14.353Q19.591 13.093 19.381 12.463L19.381 12.463Q19.171 11.938 18.926 11.500Q18.681 11.063 18.506 11.028L18.506 11.028ZM10.421 13.583L10.421 13.583Q10.176 13.583 9.546 13.758L9.546 13.758Q9.126 13.898 7.656 14.353L7.656 14.353L7.411 14.458Q5.486 15.088 4.838 15.210Q4.191 15.333 3.456 15.263L3.456 15.263Q2.966 15.228 2.931 15.315Q2.896 15.403 3.316 15.630Q3.736 15.858 4.873 16.593Q6.011 17.328 6.571 17.713L6.571 17.713Q7.026 17.993 7.481 18.203Q7.936 18.413 8.111 18.378L8.111 18.378Q8.391 18.308 10.526 15.228L10.526 15.228Q11.016 14.563 11.086 14.335Q11.156 14.108 10.911 13.898L10.911 13.898L10.876 13.863Q10.736 13.688 10.648 13.635Q10.561 13.583 10.421 13.583ZM12.871 14.353L12.871 14.353Q12.766 14.353 12.591 14.423L12.591 14.423L12.556 14.458Q12.276 14.563 12.188 14.738Q12.101 14.913 12.066 15.543L12.066 15.543Q12.031 15.998 12.066 17.678L12.066 17.678L12.066 17.958Q12.066 19.953 11.996 20.618Q11.926 21.283 11.611 21.948L11.611 21.948Q11.436 22.403 11.506 22.455Q11.576 22.508 11.926 22.193Q12.276 21.878 13.308 21.020Q14.341 20.163 14.901 19.743L14.901 19.743Q15.321 19.393 15.653 19.025Q15.986 18.658 15.986 18.483L15.986 18.483Q16.021 18.203 13.781 15.228L13.781 15.228Q13.396 14.703 13.203 14.528Q13.011 14.353 12.871 14.353ZM17.141 15.053L17.141 15.053Q17.141 15.053 17.141 15.053L17.141 15.053L17.141 15.053Q16.301 17.188 16.091 18.518L16.091 18.518L17.666 20.688Q18.646 22.053 18.996 22.473Q19.346 22.893 19.503 22.963Q19.661 23.033 19.801 22.928L19.801 22.928Q19.836 22.928 19.836 22.858L19.836 22.858L19.941 22.648Q20.676 20.898 20.921 19.953L20.921 19.953Q21.341 18.343 21.026 17.328L21.026 17.328Q20.921 17.013 20.781 16.838L20.781 16.838Q20.676 16.698 20.466 16.488L20.466 16.488L20.361 16.418Q19.696 15.893 18.716 15.508L18.716 15.508Q18.436 15.403 17.841 15.210Q17.246 15.018 17.141 15.053ZM9.896 18.343L9.896 18.343Q8.881 18.378 8.111 18.483L8.111 18.483L6.536 20.653Q5.521 22.053 5.223 22.490Q4.926 22.928 4.926 23.103Q4.926 23.278 5.031 23.383L5.031 23.383Q5.066 23.418 5.136 23.418L5.136 23.418L5.381 23.418Q7.271 23.593 8.216 23.523L8.216 23.523Q9.896 23.453 10.736 22.823L10.736 22.823Q11.016 22.613 11.156 22.438L11.156 22.438Q11.226 22.298 11.366 22.018L11.366 22.018L11.401 21.913Q11.716 21.108 11.786 20.058L11.786 20.058Q11.821 19.743 11.786 19.095Q11.751 18.448 11.716 18.413L11.716 18.413Q10.666 18.343 9.896 18.343Z"/>',
  "seti:illustrator": '<path d="M23.802 23.151L23.802 0.849L0.198 0.849L0.198 23.151L23.802 23.151ZM13.848 16.977L13.848 16.977L12.546 16.977Q12.336 16.977 12.273 16.956Q12.210 16.935 12.126 16.725L12.126 16.725Q12 16.263 11.664 15.276Q11.328 14.289 11.202 13.827L11.202 13.827Q11.202 13.743 11.097 13.659Q10.992 13.575 10.824 13.575L10.824 13.575L8.052 13.575Q7.884 13.575 7.758 13.743L7.758 13.743L7.674 13.827L6.876 16.725Q6.876 16.809 6.792 16.893Q6.708 16.977 6.624 16.977L6.624 16.977L5.196 16.977Q4.986 16.977 4.944 16.914Q4.902 16.851 4.902 16.725L4.902 16.725Q5.154 15.885 5.616 14.289L5.616 14.289Q6.078 12.441 6.372 11.601L6.372 11.601Q6.624 10.635 7.212 8.598Q7.800 6.561 8.052 5.595L8.052 5.595L8.136 5.469Q8.178 5.301 8.241 5.259Q8.304 5.217 8.472 5.301L8.472 5.301L10.446 5.301Q10.572 5.301 10.635 5.343Q10.698 5.385 10.698 5.595L10.698 5.595Q11.034 6.561 11.622 8.598Q12.210 10.635 12.546 11.601L12.546 11.601L14.100 16.725Q14.184 16.935 14.163 16.956Q14.142 16.977 13.848 16.977ZM17.796 16.347L17.796 16.347Q17.796 16.809 17.712 16.893Q17.628 16.977 17.124 16.977L17.124 16.977L16.200 16.977Q15.990 16.977 15.969 16.956Q15.948 16.935 15.948 16.725L15.948 16.725L15.948 8.199Q15.948 7.989 16.032 7.905Q16.116 7.821 16.200 7.947L16.200 7.947L17.376 7.947Q17.544 7.947 17.586 8.010Q17.628 8.073 17.628 8.199L17.628 8.199Q17.754 10.971 17.796 16.347ZM16.872 7.023L16.872 7.023Q16.452 7.023 16.137 6.750Q15.822 6.477 15.822 6.078Q15.822 5.679 16.095 5.364Q16.368 5.049 16.809 5.049Q17.250 5.049 17.586 5.322Q17.922 5.595 17.922 5.973L17.922 5.973Q17.922 6.477 17.628 6.750Q17.334 7.023 16.872 7.023ZM9.648 7.821L9.648 7.821Q9.648 7.695 9.564 7.695Q9.480 7.695 9.396 7.821L9.396 7.821Q9.396 7.863 9.312 7.989Q9.228 8.115 9.228 8.199L9.228 8.199Q8.724 10.551 8.304 11.601L8.304 11.601Q8.346 11.895 8.472 11.895L8.472 11.895L10.278 11.895Q10.488 11.895 10.509 11.811Q10.530 11.727 10.446 11.601L10.446 11.601Q10.236 9.543 9.648 7.821Z"/>',
  "seti:photoshop": '<path d="M23.802 23.172L23.802 0.702L23.802 0.198L0.198 0.198L0.198 23.802L23.172 23.802Q23.550 23.802 23.676 23.676Q23.802 23.550 23.802 23.172L23.802 23.172ZM9.900 13.428L9.900 13.428Q9.144 13.638 7.716 13.764L7.716 13.764L6.750 13.848L6.750 18.552L4.398 18.552Q4.314 18.552 4.230 18.342Q4.146 18.132 4.146 17.922L4.146 17.922L4.146 5.448Q4.146 5.364 4.839 5.259Q5.532 5.154 6.078 5.154L6.078 5.154Q8.472 5.154 9.522 5.322L9.522 5.322Q11.118 5.490 12.042 6.477Q12.966 7.464 13.050 8.976L13.050 8.976Q13.134 10.656 12.294 11.853Q11.454 13.050 9.900 13.428ZM20.022 16.074L20.022 16.074Q19.812 17.796 18.174 18.426L18.174 18.426Q15.948 19.350 13.428 18.300L13.428 18.300Q13.344 18.300 13.260 18.153Q13.176 18.006 13.176 17.922L13.176 17.922Q13.428 16.872 13.554 16.452L13.554 16.452Q14.100 16.536 15.108 16.746L15.108 16.746Q15.864 16.914 16.242 16.998Q16.620 17.082 16.956 16.872Q17.292 16.662 17.376 16.200L17.376 16.200Q17.544 15.486 16.578 14.898L16.578 14.898Q16.284 14.688 15.528 14.436L15.528 14.436L15.276 14.352Q14.184 13.848 13.701 13.134Q13.218 12.420 13.302 11.328L13.302 11.328Q13.428 10.446 14.079 9.795Q14.730 9.144 15.822 8.850L15.822 8.850Q17.502 8.472 19.224 9.102L19.224 9.102Q19.308 9.102 19.434 9.333Q19.560 9.564 19.476 9.648L19.476 9.648L19.098 11.076Q17.796 10.824 17.250 10.698L17.250 10.698Q16.578 10.698 16.326 10.824L16.326 10.824Q15.822 11.034 15.738 11.496Q15.654 11.958 16.074 12.252L16.074 12.252Q16.200 12.420 16.515 12.546Q16.830 12.672 17.019 12.798Q17.208 12.924 17.796 13.176L17.796 13.176Q18.216 13.344 18.426 13.428L18.426 13.428Q20.022 14.016 20.022 16.074ZM9.228 7.422L9.228 7.422Q8.724 7.338 7.842 7.254L7.842 7.254L6.750 7.128L6.750 11.622Q7.800 11.706 8.325 11.664Q8.850 11.622 9.480 11.349Q10.110 11.076 10.362 10.446L10.362 10.446Q10.572 9.984 10.572 9.270Q10.572 8.556 10.215 8.073Q9.858 7.590 9.228 7.422Z"/>',
  "seti:pdf": '<path d="M0.051 21.261L0.051 21.261Q0.135 20.715 0.471 20.211L0.471 20.211Q0.681 19.917 1.227 19.392Q1.773 18.867 3.201 18.069L3.201 18.069L3.579 17.817Q4.503 17.313 6.351 16.515L6.351 16.515Q6.435 16.515 6.519 16.431Q6.603 16.347 6.603 16.263L6.603 16.263Q8.157 13.113 8.829 11.517L8.829 11.517Q9.039 11.055 9.354 10.152Q9.669 9.249 9.879 8.787L9.879 8.787L9.879 8.661Q9.123 6.855 8.955 5.637L8.955 5.637Q8.619 4.209 8.829 2.487L8.829 2.487Q8.997 1.647 9.879 0.765L9.879 0.765Q10.005 0.639 10.551 0.639L10.551 0.639L11.601 0.639Q12.063 0.639 12.231 1.017L12.231 1.017Q12.651 1.311 13.155 2.067L13.155 2.067Q13.323 2.445 13.449 3.117L13.449 3.117L13.575 3.663Q13.575 4.713 13.407 5.931L13.407 5.931Q13.281 6.687 13.029 8.115L13.029 8.115L12.651 9.585L12.651 9.711Q13.617 11.475 15.549 13.617L15.549 13.617Q15.633 13.743 15.675 13.764Q15.717 13.785 15.927 13.743L15.927 13.743Q17.355 13.491 20.127 13.491L20.127 13.491Q21.555 13.491 22.605 14.037L22.605 14.037Q23.403 14.541 23.655 14.961L23.655 14.961Q23.949 15.465 23.949 15.717L23.949 15.717L23.949 16.641Q23.949 17.103 23.529 17.313L23.529 17.313L23.403 17.439Q23.193 17.691 23.025 17.775L23.025 17.775Q22.773 17.985 22.479 17.943L22.479 17.943Q22.353 17.985 22.017 18.048Q21.681 18.111 21.555 18.111L21.555 18.111Q20.043 18.195 18.657 17.733L18.657 17.733Q17.397 17.313 16.053 16.389L16.053 16.389Q15.927 16.263 15.591 15.990Q15.255 15.717 15.129 15.591L15.129 15.591Q15.087 15.591 15.003 15.528Q14.919 15.465 14.877 15.465L14.877 15.465Q13.281 15.717 12.525 16.011L12.525 16.011Q11.979 16.137 10.929 16.452Q9.879 16.767 9.375 16.893L9.375 16.893Q9.291 16.893 9.228 16.977Q9.165 17.061 9.081 17.061L9.081 17.061Q8.157 18.741 6.855 20.463L6.855 20.463Q5.847 21.681 4.629 22.689L4.629 22.689Q3.915 23.151 3.201 23.361L3.201 23.361L2.151 23.361Q1.731 23.361 1.479 23.193L1.479 23.193Q0.975 23.025 0.618 22.647Q0.261 22.269 0.177 21.765L0.177 21.765Q0.051 21.765 0.051 21.261ZM12.273 12.945L11.601 12.063Q11.391 12.567 10.929 13.617Q10.467 14.667 10.299 15.213L10.299 15.213L13.449 14.415Q13.029 13.953 12.273 12.945L12.273 12.945ZM17.229 15.465L17.229 15.465Q18.363 16.221 19.875 16.641L19.875 16.641Q20.127 16.725 20.379 16.683L20.379 16.683Q20.505 16.641 20.736 16.536Q20.967 16.431 21.030 16.200Q21.093 15.969 20.925 15.843L20.925 15.843Q20.925 15.717 20.631 15.717L20.631 15.717Q20.505 15.675 20.148 15.612Q19.791 15.549 19.581 15.465L19.581 15.465Q18.405 15.255 17.229 15.465ZM4.377 19.749L4.881 19.161Q4.881 19.161 4.839 19.161L4.839 19.161L4.881 19.161Q3.747 19.707 2.655 20.589L2.655 20.589Q2.277 20.841 1.731 21.639L1.731 21.639L1.731 21.891L1.899 22.017L2.025 22.017L2.445 21.681Q2.781 21.471 2.949 21.387L2.949 21.387Q3.495 20.883 4.377 19.749L4.377 19.749ZM10.425 5.511L10.551 5.889Q10.593 5.889 10.635 5.889L10.635 5.889L10.551 5.889Q10.929 4.713 10.929 3.663L10.929 3.663Q10.929 2.865 10.803 2.487L10.803 2.487Q10.803 2.361 10.551 2.361L10.551 2.361Q10.467 2.361 10.404 2.424Q10.341 2.487 10.299 2.487L10.299 2.487Q10.089 2.739 10.047 3.075L10.047 3.075Q10.005 3.285 10.005 3.789L10.005 3.789Q10.005 4.461 10.131 4.839L10.131 4.839Q10.341 5.007 10.425 5.511L10.425 5.511Z"/>',
  "seti:font": '<path d="M19.565 16.346L18.663 14.952L14.440 14.952L13.948 16.100L13.825 16.387Q13.661 16.797 13.661 17.002L13.661 17.002Q13.702 17.576 14.071 17.781L14.071 17.781Q14.153 17.863 14.645 17.904L14.645 17.904L15.219 18.027L15.219 18.396L11.242 18.396L11.242 18.027Q12.021 17.781 12.267 17.494L12.267 17.494Q12.718 17.043 13.292 15.731L13.292 15.731L17.515 6.219L17.638 6.219L21.902 15.977Q22.476 17.330 22.927 17.781L22.927 17.781Q23.419 18.027 23.788 18.027L23.788 18.027L23.788 18.396L18.047 18.396L18.047 18.027L18.540 18.027Q19.073 18.027 19.565 17.781L19.565 17.781Q19.852 17.494 19.811 17.371L19.811 17.371L19.811 17.002L19.565 16.346ZM14.850 14.173L18.416 14.173L16.613 10.073L14.850 14.173ZM0.213 20.856L0.213 20.200Q1.074 20.200 1.709 19.298Q2.345 18.396 2.796 17.125L2.796 17.125L8.413 3.144L9.192 3.144L14.973 16.592Q15.465 17.822 16.162 19.175L16.162 19.175L16.367 19.544Q16.695 20.200 17.802 20.200L17.802 20.200L17.802 20.856L9.438 20.856L9.438 20.200Q10.586 20.200 11.119 19.954L11.119 19.954Q11.488 19.749 11.488 19.175L11.488 19.175Q11.488 18.970 11.365 18.560L11.365 18.560L11.242 18.273Q10.996 17.781 10.873 17.371L10.873 17.371L10.217 15.854L4.477 15.854L3.698 17.904Q3.288 18.847 3.288 19.298L3.288 19.298Q3.288 19.872 4.067 20.077L4.067 20.077Q4.313 20.200 5.338 20.200L5.338 20.200L5.338 20.856L0.213 20.856ZM4.846 14.829L9.848 14.829L7.388 8.925L7.142 8.925L4.846 14.829Z"/>',
  "seti:image": '<path d="M18.640 13.480L18.640 13.480Q19.560 13.480 20.220 12.840Q20.880 12.200 20.880 11.260Q20.880 10.320 20.220 9.660Q19.560 9 18.620 9Q17.680 9 17.020 9.660Q16.360 10.320 16.360 11.260Q16.360 12.200 17.020 12.840Q17.680 13.480 18.640 13.480ZM23.880 6.640L4.760 6.640L4.760 22.120L23.880 22.120L23.880 6.640ZM5.640 19L5.640 7.480L23 7.480L23 21L18.520 15.880L15.760 19.120L10.240 13.240L5.640 19ZM17.880 4L17.880 1.880L0.120 1.880L0.120 15.360L2.520 15.360L2.520 4L17.880 4Z"/>',
  "seti:svg": '<path d="M6.360 13.120L6.360 6.240L13.240 6.240Q13.240 5 12.360 3.540Q11.480 2.080 10.080 1.160L10.080 1.160Q8.520 0.120 6.840 0.120Q5.160 0.120 3.620 1.020Q2.080 1.920 1.160 3.420Q0.240 4.920 0.240 6.600Q0.240 8.280 1.280 9.880L1.280 9.880Q2.200 11.280 3.660 12.200Q5.120 13.120 6.360 13.120L6.360 13.120ZM9.000 23.880L9.000 9.120L23.760 9.120L23.760 23.880L9.000 23.880Z"/>',
  "seti:sublime": '<path d="M23.787 11.131L23.787 11.131L23.787 10.501Q23.409 8.023 22.233 5.881L22.233 5.881Q21.057 4.117 19.461 2.731L19.461 2.731Q18.159 1.639 16.563 1.051L16.563 1.051Q11.355-0.965 6.483 1.555L6.483 1.555Q3.669 3.151 2.031 5.755L2.031 5.755Q1.107 7.183 0.645 8.569L0.645 8.569Q0.183 10.039 0.183 11.677L0.183 11.677L0.183 13.105Q0.561 16.171 2.031 18.481L2.031 18.481Q3.585 20.749 5.433 21.883L5.433 21.883Q6.903 22.891 8.163 23.227L8.163 23.227Q11.061 24.109 13.413 23.731L13.413 23.731Q19.965 22.765 22.737 16.801L22.737 16.801Q23.997 14.281 23.787 11.131ZM14.883 17.431L14.883 17.431Q14.169 17.809 13.287 17.893L13.287 17.893Q12.783 17.977 11.733 17.977L11.733 17.977Q9.717 17.977 7.533 16.633L7.533 16.633Q7.155 16.465 7.407 16.255L7.407 16.255L8.163 14.701L8.331 14.575L8.457 14.533Q9.927 15.667 11.985 15.877L11.985 15.877Q12.783 15.877 13.161 15.751L13.161 15.751Q13.833 15.583 14.085 14.827L14.085 14.827Q14.085 14.113 13.413 13.777L13.413 13.777Q12.657 13.357 11.061 12.853L11.061 12.853L10.893 12.811Q10.011 12.559 9.591 12.349L9.591 12.349Q8.835 12.013 8.457 11.551L8.457 11.551Q7.785 10.879 7.785 9.451L7.785 9.451Q7.869 7.939 8.835 7.057L8.835 7.057Q9.675 6.217 11.061 6.007L11.061 6.007Q13.665 5.629 15.933 7.057L15.933 7.057Q16.059 7.183 16.059 7.477L16.059 7.477L15.261 8.905Q15.219 9.031 15.177 9.052Q15.135 9.073 15.051 9.073L15.051 9.073L14.883 9.031Q14.001 8.527 13.245 8.275L13.245 8.275Q12.405 8.023 11.481 8.107L11.481 8.107Q11.313 8.107 11.061 8.170Q10.809 8.233 10.683 8.233L10.683 8.233Q10.347 8.485 10.179 8.716Q10.011 8.947 10.011 9.325L10.011 9.325Q10.011 9.997 10.578 10.375Q11.145 10.753 11.733 10.753L11.733 10.753Q12.153 10.879 13.077 11.131L13.077 11.131L14.211 11.425Q14.337 11.257 14.757 11.257L14.757 11.257Q14.337 11.257 14.211 11.383L14.211 11.383L15.219 11.803Q15.261 11.845 15.261 11.929L15.261 11.929L15.345 11.929Q15.387 11.971 15.387 12.055L15.387 12.055L15.555 12.181Q15.639 12.223 15.639 12.307L15.639 12.307L15.807 12.475Q16.395 12.979 16.584 13.987Q16.773 14.995 16.353 15.919L16.353 15.919Q15.933 16.969 14.883 17.431Z"/>',
  "seti:code-search": '<path d="M15.067 0.258L15.067 0.223Q12.792 0.223 10.849 1.500Q8.907 2.777 7.979 4.895Q7.052 7.012 7.384 9.305Q7.717 11.598 9.257 13.348L9.257 13.348L1.627 22.098L2.677 23.043L10.272 14.328Q11.777 15.518 13.632 15.867Q15.487 16.218 17.289 15.675Q19.092 15.133 20.457 13.803Q21.822 12.473 22.434 10.670Q23.047 8.867 22.784 6.995Q22.522 5.122 21.419 3.565Q20.317 2.008 18.637 1.133Q16.957 0.258 15.067 0.258L15.067 0.258ZM15.067 14.572L15.067 14.572Q13.142 14.572 11.532 13.470Q9.922 12.367 9.187 10.565Q8.452 8.762 8.837 6.855Q9.222 4.947 10.587 3.565Q11.952 2.183 13.842 1.797Q15.732 1.412 17.517 2.165Q19.302 2.918 20.369 4.545Q21.437 6.172 21.437 8.098L21.437 8.098Q21.437 9.392 20.964 10.582Q20.492 11.773 19.599 12.683Q18.707 13.593 17.534 14.082Q16.362 14.572 15.067 14.572ZM15.102 1.657L15.102 1.657Q13.212 1.657 11.602 2.690Q9.992 3.723 9.204 5.473Q8.417 7.223 8.714 9.113Q9.012 11.003 10.272 12.438L10.272 12.438L3.937 19.648L4.847 20.453L11.112 13.277Q12.372 14.258 13.912 14.537Q15.452 14.818 16.939 14.380Q18.427 13.943 19.564 12.840Q20.702 11.738 21.209 10.250Q21.717 8.762 21.489 7.205Q21.262 5.648 20.352 4.370Q19.442 3.092 18.059 2.375Q16.677 1.657 15.102 1.657L15.102 1.657ZM15.102 13.453L15.102 13.453Q13.492 13.453 12.162 12.560Q10.832 11.668 10.219 10.180Q9.607 8.692 9.922 7.117Q10.237 5.543 11.374 4.387Q12.512 3.232 14.087 2.918Q15.662 2.602 17.132 3.232Q18.602 3.863 19.512 5.192L19.512 5.192Q20.562 6.767 20.369 8.657Q20.177 10.547 18.847 11.913L18.847 11.913Q18.112 12.648 17.132 13.050Q16.152 13.453 15.102 13.453ZM3.622 23.778L1.137 21.608L9.782 11.808L12.232 13.978L3.622 23.778Z"/>',
  "seti:shell": '<path d="M9.977 3.222L9.935 3.222Q9.305 3.432 8.717 3.810L8.717 3.810Q8.549 3.894 8.213 4.146L8.213 4.146Q7.709 4.524 7.289 5.070L7.289 5.070L6.995 5.448Q6.575 6.120 6.449 6.666L6.449 6.666Q6.365 6.918 6.323 7.254L6.323 7.254Q6.239 7.884 6.323 8.556L6.323 8.556Q6.365 8.976 6.449 9.396L6.449 9.396Q6.617 10.026 6.995 10.614L6.995 10.614L7.289 10.992Q7.667 11.454 8.255 11.874L8.255 11.874L8.885 12.336Q9.347 12.672 10.061 12.966L10.061 12.966L11.069 13.386L11.531 13.554Q12.119 13.764 12.329 13.848L12.329 13.848L12.413 13.932Q13.757 14.310 14.345 15.360L14.345 15.360Q14.597 15.864 14.597 16.284L14.597 16.284L14.597 16.452Q14.681 16.998 14.555 17.250L14.555 17.250Q14.051 18.258 13.253 18.552L13.253 18.552Q12.749 18.720 11.447 18.678L11.447 18.678Q10.565 18.468 10.061 17.922L10.061 17.922Q9.599 17.418 9.305 16.494L9.305 16.494L9.263 16.326Q9.221 16.032 9.032 15.843Q8.843 15.654 8.549 15.654L8.549 15.654L6.449 15.654Q6.155 15.654 5.966 15.843Q5.777 16.032 5.819 16.326L5.819 16.326Q5.819 16.956 5.966 17.544Q6.113 18.132 6.449 18.804L6.449 18.804Q6.659 19.140 6.911 19.455Q7.163 19.770 7.877 20.316L7.877 20.316Q8.213 20.568 8.465 20.694L8.465 20.694Q8.843 20.904 9.683 21.240L9.683 21.240L9.977 21.324Q10.271 21.408 10.460 21.597Q10.649 21.786 10.649 22.080L10.649 22.080L10.649 23.130Q10.649 23.424 10.838 23.613Q11.027 23.802 11.321 23.802L11.321 23.802L12.749 23.802Q13.043 23.802 13.232 23.613Q13.421 23.424 13.421 23.130L13.421 23.130L13.421 22.080Q13.421 21.786 13.610 21.555Q13.799 21.324 14.051 21.282L14.051 21.282Q14.219 21.240 14.513 21.114L14.513 21.114Q15.269 20.820 15.731 20.568L15.731 20.568Q16.613 20.022 17.411 18.888L17.411 18.888Q17.873 18.216 17.999 17.712L17.999 17.712Q18.125 17.418 18.167 16.998L18.167 16.998Q18.209 16.326 18.167 15.696L18.167 15.696Q18.125 15.276 17.999 14.982L17.999 14.982Q17.831 14.310 17.453 13.764L17.453 13.764Q16.907 12.882 15.563 11.916L15.563 11.916Q14.975 11.538 14.387 11.244L14.387 11.244Q13.925 11.034 12.959 10.656L12.959 10.656L12.035 10.320Q11.153 9.984 10.859 9.732L10.859 9.732Q10.355 9.312 10.124 8.913Q9.893 8.514 9.851 8.094L9.851 8.094L9.851 8.052Q9.851 7.590 9.914 7.254Q9.977 6.918 10.313 6.414L10.313 6.414Q10.565 6.078 10.943 5.994L10.943 5.994Q11.405 5.826 11.825 5.826L11.825 5.826Q12.539 5.784 12.896 5.847Q13.253 5.910 13.694 6.267Q14.135 6.624 14.345 7.044L14.345 7.044Q14.597 7.590 14.597 8.094L14.597 8.094L14.597 8.094Q14.639 8.388 14.828 8.577Q15.017 8.766 15.269 8.766L15.269 8.766L17.369 8.766Q17.663 8.766 17.852 8.556Q18.041 8.346 17.999 8.094L17.999 8.094Q17.957 7.590 17.852 7.107Q17.747 6.624 17.411 5.868L17.411 5.868Q17.285 5.574 17.117 5.322L17.117 5.322Q16.697 4.650 16.277 4.272L16.277 4.272Q16.067 4.062 15.857 3.894Q15.647 3.726 15.017 3.390L15.017 3.390L14.681 3.222L14.345 3.054Q14.051 2.928 13.862 2.697Q13.673 2.466 13.673 2.214L13.673 2.214L13.673 0.870Q13.673 0.576 13.484 0.387Q13.295 0.198 13.043 0.198L13.043 0.198L11.573 0.198Q11.279 0.198 11.090 0.387Q10.901 0.576 10.901 0.870L10.901 0.870L10.901 2.340Q10.901 2.802 10.313 3.054L10.313 3.054Q10.229 3.138 9.977 3.222L9.977 3.222Z"/>',
  "seti:video": '<path d="M12.000 23.802L12.000 23.802Q8.808 23.802 6.078 22.185Q3.348 20.568 1.752 17.838L1.752 17.838Q0.114 15.024 0.198 11.748L0.198 11.748Q0.240 8.598 1.836 5.952Q3.432 3.306 6.078 1.794L6.078 1.794Q8.850 0.198 12.126 0.198L12.126 0.198Q15.318 0.198 18.027 1.815Q20.736 3.432 22.290 6.162L22.290 6.162Q23.886 8.976 23.802 12.252L23.802 12.252Q23.760 15.360 22.143 18.027Q20.526 20.694 17.880 22.206L17.880 22.206Q15.150 23.802 12.000 23.802ZM7.800 4.650L7.800 4.650L7.800 19.224L7.926 19.224L18.552 12.126L18.678 12Q18.678 12 18.552 12L18.552 12Q11.496 7.254 7.800 4.902L7.800 4.902Q7.884 4.818 7.884 4.734Q7.884 4.650 7.800 4.650Z"/>',
  "seti:audio": '<path d="M12.475 21.282L12.323 21.282Q12.171 21.282 11.867 21.054L11.867 21.054L11.639 20.902Q8.067 17.824 6.167 16.266L6.167 16.266L6.053 16.190L5.939 16.152L0.923 16.152Q0.315 16.152 0.125 15.582L0.125 15.582L0.125 8.818Q0.125 8.362 0.372 8.115Q0.619 7.868 1.075 7.868L1.075 7.868L6.053 7.868Q6.281 7.868 6.281 7.716L6.281 7.716L11.753 2.966Q12.095 2.700 12.437 2.719Q12.779 2.738 13.045 3.118L13.045 3.118Q13.159 3.232 13.159 3.574L13.159 3.574L13.159 20.332Q13.159 20.978 12.703 21.168L12.703 21.168L12.589 21.168L12.475 21.282ZM23.837 12.124L23.875 12.124Q23.875 12.846 23.723 13.188L23.723 13.188Q23.571 15.354 22.659 17.482L22.659 17.482Q21.899 19.382 20.759 20.674L20.759 20.674Q20.607 20.978 20.075 21.168L20.075 21.168Q19.581 21.168 19.239 20.788L19.239 20.788Q19.049 20.636 19.049 20.389Q19.049 20.142 19.239 19.952L19.239 19.952Q19.277 19.838 19.467 19.610Q19.657 19.382 19.695 19.268L19.695 19.268Q21.481 16.760 21.823 13.910L21.823 13.910Q22.545 8.514 19.239 4.296L19.239 4.296Q18.783 3.650 19.239 3.232L19.239 3.232Q19.505 2.852 19.904 2.852Q20.303 2.852 20.645 3.232L20.645 3.232Q22.089 5.056 22.659 6.652L22.659 6.652Q23.571 8.780 23.723 11.174L23.723 11.174L23.723 12.010Q23.799 12.010 23.837 12.086L23.837 12.086L23.837 12.124ZM20.645 11.896L20.645 11.896Q20.645 15.468 18.631 18.432L18.631 18.432Q18.479 18.698 17.909 18.888L17.909 18.888Q17.453 18.888 17.073 18.546L17.073 18.546Q16.921 18.356 16.921 18.109Q16.921 17.862 17.073 17.596L17.073 17.596Q17.073 17.520 17.149 17.463Q17.225 17.406 17.187 17.368L17.187 17.368Q18.517 15.582 18.859 13.188L18.859 13.188Q19.391 9.502 17.073 6.310L17.073 6.310Q16.845 5.816 16.845 5.588L16.845 5.588Q16.959 5.284 17.073 5.132Q17.187 4.980 17.453 4.866L17.453 4.866Q18.023 4.676 18.384 5.189Q18.745 5.702 19.467 6.918L19.467 6.918Q20.531 9.236 20.531 11.060L20.531 11.060Q20.645 11.554 20.645 11.896ZM17.339 12.010L17.339 12.010Q17.339 14.366 16.123 16.038L16.123 16.038Q15.971 16.380 15.648 16.475Q15.325 16.570 14.983 16.380Q14.641 16.190 14.546 15.867Q14.451 15.544 14.717 15.202L14.717 15.202Q15.325 14.290 15.553 12.846L15.553 12.846Q15.705 11.820 15.477 10.775Q15.249 9.730 14.717 8.818L14.717 8.818Q14.527 8.438 14.603 8.115Q14.679 7.792 14.945 7.621Q15.211 7.450 15.591 7.526Q15.971 7.602 16.123 7.868L16.123 7.868Q16.655 8.666 17.073 10.110L17.073 10.110L17.149 10.414Q17.339 11.516 17.339 12.010Z"/>',
  "seti:windows": '<path d="M0.125 11.544L0.125 3.450L9.815 2.120L9.815 11.506L0.125 11.544ZM0.125 12.532L9.815 12.570L9.815 21.956L0.125 20.626L0.125 12.532ZM10.993 11.468L10.993 1.968L23.837 0.106L23.837 11.392L10.993 11.468ZM10.955 12.646L23.875 12.684L23.837 23.894L10.993 22.108L10.955 12.646Z"/>',
  "seti:jenkins": '<path d="M13.216 8.608L13.216 8.608Q13.248 8.608 13.344 8.608L13.344 8.608L13.376 8.608Q14.176 8.544 15.200 7.904L15.200 7.904Q15.232 7.872 15.264 7.776L15.264 7.776L15.360 7.488Q15.488 7.200 15.232 6.976L15.232 6.976Q14.496 6.304 13.952 5.440L13.952 5.440Q13.888 5.312 13.792 5.088L13.792 5.088L13.696 4.864Q13.664 4.832 13.600 4.768L13.600 4.768L13.568 4.736L13.504 4.896Q13.504 4.992 13.536 5.152L13.536 5.152Q13.664 5.728 14.208 6.400L14.208 6.400Q14.528 6.816 14.848 7.168L14.848 7.168Q14.976 7.328 14.944 7.552Q14.912 7.776 14.688 7.840L14.688 7.840Q14.592 7.872 14.400 7.968L14.400 7.968L14.176 8.096Q13.632 8.320 13.344 8.320L13.344 8.320Q13.152 8.288 13.056 8.224Q12.960 8.160 12.928 8L12.928 8L12.864 7.712Q12.608 7.968 12.800 8.384L12.800 8.384Q12.832 8.544 12.944 8.576Q13.056 8.608 13.216 8.608ZM11.552 9.088L11.680 9.312Q11.936 9.568 12.416 9.728L12.416 9.728Q13.120 9.920 13.824 9.888L13.824 9.888L13.824 9.536Q13.824 9.312 13.632 9.312L13.632 9.312Q12.864 9.312 12.416 9.248L12.416 9.248Q12.224 9.248 11.840 9.152L11.840 9.152L11.552 9.088ZM11.168 5.760L11.136 5.760Q11.008 5.760 10.960 5.808Q10.912 5.856 10.960 5.984Q11.008 6.112 11.104 6.176L11.104 6.176Q11.616 6.400 12.080 6.208Q12.544 6.016 12.384 5.440L12.384 5.440Q12.320 5.184 12.032 4.800Q11.744 4.416 11.632 4.464Q11.520 4.512 11.776 5.184L11.776 5.184Q11.904 5.664 11.888 5.744Q11.872 5.824 11.168 5.760L11.168 5.760ZM10.176 4.352L10.176 4.352Q10.208 4.288 10.272 4.192L10.272 4.192Q10.752 3.232 11.616 3.424L11.616 3.424Q11.776 3.424 11.776 3.296Q11.776 3.168 11.680 3.072Q11.584 2.976 11.456 2.944L11.456 2.944Q11.072 2.848 10.720 3.104L10.720 3.104Q10.080 3.520 10.016 4.096L10.016 4.096Q10.016 4.320 10.176 4.352ZM14.112 9.280L14.112 9.280Q14.048 9.280 14.048 9.376L14.048 9.376L14.048 9.856Q14.528 9.856 14.928 9.536Q15.328 9.216 15.552 8.704L15.552 8.704L15.456 8.736L15.232 8.864Q14.528 9.248 14.112 9.280ZM15.136 6.016L15.136 6.016Q15.616 6.080 16 5.728L16 5.728Q16.096 5.632 16.032 5.504L16.032 5.504L15.840 5.120Q15.552 4.416 15.456 4.432Q15.360 4.448 15.424 4.768L15.424 4.768Q15.488 4.992 15.616 5.248L15.616 5.248Q15.680 5.440 15.648 5.488Q15.616 5.536 15.424 5.568L15.424 5.568L15.296 5.568Q14.912 5.536 14.864 5.632Q14.816 5.728 14.896 5.872Q14.976 6.016 15.136 6.016ZM19.264 16.960L19.264 16.960Q19.072 16.320 18.688 16.112Q18.304 15.904 17.632 16.064L17.632 16.064Q17.408 16.128 16.896 16.320L16.896 16.320L16.384 16.544L17.600 12.896Q17.856 12.128 17.248 11.648L17.248 11.648L16.608 11.136L16.224 10.816Q16 10.592 15.984 10.496Q15.968 10.400 16.128 10.112L16.128 10.112Q16.640 9.248 16.880 7.808Q17.120 6.368 17.088 5.056L17.088 5.056Q16.992 3.264 16.160 2.144L16.160 2.144Q14.848 0.352 12.800 0.128L12.800 0.128L12.480 0.096L11.776 0.096L10.944 0.224Q9.536 0.448 8.128 1.312L8.128 1.312L7.744 1.568Q7.008 2.016 6.720 2.816L6.720 2.816Q6.656 2.912 6.528 3.008L6.528 3.008Q5.888 3.456 5.856 4.320L5.856 4.320Q5.856 4.608 5.856 5.120L5.856 5.120L5.888 5.664Q5.888 5.728 5.824 5.856L5.824 5.856L5.728 6.144Q5.600 6.432 5.568 6.592L5.568 6.592Q5.408 7.840 6.208 8.736L6.208 8.736Q6.464 9.024 6.976 9.152L6.976 9.152Q7.104 9.216 7.136 9.344L7.136 9.344Q7.232 9.920 7.552 10.400L7.552 10.400Q7.648 10.528 7.680 10.688L7.680 10.688Q7.712 10.944 7.488 11.072L7.488 11.072L5.248 12.448Q5.120 12.512 5.024 12.576L5.024 12.576Q4.544 12.736 4.416 13.120L4.416 13.120L4.416 13.344L4.672 14.016Q5.056 15.040 5.216 15.584L5.216 15.584Q5.568 16.640 5.696 18.304L5.696 18.304L5.728 19.616Q5.760 19.936 6.048 20.064L6.048 20.064L8.000 20.928Q8.544 21.152 9.120 21.120L9.120 21.120Q9.248 21.120 9.312 21.248L9.312 21.248L10.016 23.488Q10.048 23.616 10.208 23.648L10.208 23.648L11.616 23.904L12.928 23.904L13.664 23.840Q14.080 23.744 14.368 23.648L14.368 23.648Q14.752 23.520 14.688 23.040L14.688 23.040Q14.656 22.816 14.704 22.768Q14.752 22.720 14.976 22.656L14.976 22.656L14.976 22.656Q15.424 22.528 15.536 22.336Q15.648 22.144 15.552 21.696L15.552 21.696L15.360 20.672L15.360 20.416Q15.360 20.256 15.536 20.208Q15.712 20.160 15.776 19.936L15.776 19.936Q15.776 19.840 15.840 19.808L15.840 19.808Q16.352 19.584 16.928 19.648L16.928 19.648Q16.992 19.648 16.992 19.648L16.992 19.648Q17.056 19.840 17.184 19.888Q17.312 19.936 17.536 19.936L17.536 19.936L17.536 19.936Q18.144 19.968 18.528 19.936L18.528 19.936Q19.232 19.872 19.488 19.008L19.488 19.008L19.584 18.560L19.584 18.176Q19.392 17.440 19.264 16.960ZM8.160 10.848L8.192 10.816Q7.744 9.920 7.616 9.216L7.616 9.216Q7.584 8.992 7.744 8.832Q7.904 8.672 7.936 8.592Q7.968 8.512 7.904 8.352L7.904 8.352Q7.904 8.352 7.840 8.352L7.840 8.352L7.744 8.384Q7.680 8.416 7.584 8.480L7.584 8.480L7.520 8.512Q7.104 8.800 6.688 8.512L6.688 8.512Q6.208 8.192 6.016 7.456L6.016 7.456Q5.856 6.848 6.144 6.400L6.144 6.400Q6.528 5.888 7.104 5.952L7.104 5.952Q7.456 6.016 7.648 6.400L7.648 6.400Q7.712 6.528 7.776 6.848L7.776 6.848L7.776 6.848Q7.808 6.976 7.936 6.976L7.936 6.976L8.288 6.912Q8.480 6.880 8.544 6.784Q8.608 6.688 8.544 6.464L8.544 6.464L8.384 5.728Q8.320 5.376 8.416 4.736L8.416 4.736L8.416 4.704Q8.576 3.936 8.608 3.552L8.608 3.552Q8.608 3.456 8.544 3.168L8.544 3.168L8.512 2.976Q8.512 2.816 8.544 2.720L8.544 2.720Q8.864 2.112 9.536 1.664Q10.208 1.216 10.944 0.832L10.944 0.832Q11.488 0.544 12.480 0.640Q13.472 0.736 14.464 1.248L14.464 1.248Q14.944 1.472 15.488 2.144L15.488 2.144L15.936 2.720Q15.648 2.688 15.488 2.720L15.488 2.720Q15.232 2.752 15.104 2.944L15.104 2.944Q15.040 3.040 15.008 3.296L15.008 3.296Q15.424 3.008 15.920 3.264Q16.416 3.520 16.576 3.936L16.576 3.936Q16.672 4.256 16.704 4.512L16.704 4.512Q16.832 5.952 16.736 6.880L16.736 6.880Q16.576 8.672 15.840 9.824L15.840 9.824Q15.360 10.624 15.008 10.912L15.008 10.912Q14.464 11.456 13.408 11.712L13.408 11.712Q12.704 11.872 12.096 11.680L12.096 11.680Q11.360 11.424 10.784 10.912L10.784 10.912Q10.336 10.528 9.696 9.632L9.696 9.632L9.568 9.472Q9.504 9.696 9.696 10.016L9.696 10.016Q9.984 10.528 10.656 11.200L10.656 11.200Q10.784 11.328 11.072 11.552L11.072 11.552L11.264 11.680L10.976 11.712Q9.408 11.808 9.088 11.712L9.088 11.712Q8.544 11.584 8.160 10.848L8.160 10.848ZM12.288 14.432L12.480 14.240Q12.768 14.528 13.184 15.328L13.184 15.328Q13.536 15.936 13.760 16.480L13.760 16.480L13.568 16.448Q13.312 16.384 13.184 16.320L13.184 16.320L11.488 15.616Q11.360 15.552 11.424 15.456L11.424 15.456L11.488 15.296Q11.680 14.976 11.808 14.832Q11.936 14.688 12.288 14.432L12.288 14.432ZM13.696 15.328L13.696 15.328Q13.568 15.072 13.280 14.560L13.280 14.560L13.056 14.144Q12.992 14.016 13.024 13.952L13.024 13.952Q13.088 13.792 13.216 13.824L13.216 13.824Q13.312 13.856 13.472 13.760L13.472 13.760Q13.728 13.632 14.016 13.824L14.016 13.824Q14.112 13.888 14.336 13.984L14.336 13.984L14.464 14.048Q14.464 14.592 14.400 15.328L14.400 15.328Q14.336 16.256 14.176 16.448L14.176 16.448L14.080 16.160Q13.824 15.584 13.696 15.328ZM13.152 23.200L13.152 23.200Q12.224 23.328 11.264 23.136L11.264 23.136Q10.976 23.104 10.528 22.976L10.528 22.976Q10.432 22.976 10.400 22.880L10.400 22.880L10.240 22.304Q9.952 21.184 9.824 20.608Q9.696 20.032 9.536 18.848L9.536 18.848L9.440 18.144L9.440 17.984L10.112 17.888Q11.648 17.664 12.768 17.728L12.768 17.728Q12.960 17.728 13.280 17.760L13.280 17.760L13.568 17.824Q13.664 17.824 13.696 17.952L13.696 17.952L13.952 22.240Q13.952 22.432 14.016 22.784L14.016 22.784L14.048 23.040L13.792 23.104Q13.376 23.168 13.152 23.200ZM14.944 22.176L14.944 22.176Q14.848 22.208 14.688 22.240L14.688 22.240L14.432 22.304L14.368 20.448L14.784 20.352Q14.816 20.352 14.864 20.368Q14.912 20.384 14.912 20.416L14.912 20.416L14.944 20.544Q15.104 21.408 15.168 21.856L15.168 21.856L15.168 21.856Q15.168 22.080 15.152 22.112Q15.136 22.144 14.944 22.176L14.944 22.176ZM14.624 16.416L14.624 16.384Q14.592 16.416 14.592 16.416Q14.592 16.416 14.592 16.416L14.592 16.416L14.816 14.656Q14.848 14.464 14.848 14.176L14.848 14.176Q14.848 14.016 15.040 13.968Q15.232 13.920 15.472 14.032Q15.712 14.144 15.808 14.336L15.808 14.336Q15.872 14.400 15.808 14.432L15.808 14.432L14.624 16.416ZM18.112 19.296L18.144 19.296Q18.112 19.296 18.048 19.296L18.048 19.296Q17.632 19.296 17.440 19.264L17.440 19.264L17.440 19.200L18.208 19.040L18.208 19.008L17.952 18.944L16.992 18.976Q16.864 19.008 16.832 18.976Q16.800 18.944 16.800 18.816L16.800 18.816L16.608 17.344Q16.576 17.280 16.640 17.248L16.640 17.248L17.344 16.928L17.824 16.736Q18.048 16.608 18.272 16.672Q18.496 16.736 18.592 16.992L18.592 16.992Q18.848 17.856 18.912 18.336L18.912 18.336Q18.976 18.720 18.752 18.992Q18.528 19.264 18.112 19.296L18.112 19.296ZM15.616 2.912L15.520 3.168Q15.584 3.168 15.648 3.200L15.648 3.200Q15.808 3.264 15.936 3.392L15.936 3.392Q16.160 3.552 16.320 3.808L16.320 3.808Q16.544 4.192 16.672 4.864L16.672 4.864L16.704 5.440L16.704 6.016Q16.704 6.720 16.608 7.296L16.608 7.296Q16.480 8.256 16 9.280L16 9.280Q15.616 10.016 15.104 10.688L15.104 10.688L14.656 11.232L15.808 10.272L16.608 8.640L16.928 6.688L16.928 4.768L16.640 3.136L15.616 2.912Z"/>',
  "seti:babel": '<path d="M18.766 8.158L18.766 8.158L20.738 6.356Q21.554 5.064 21.554 3.534L21.554 3.534L21.554 3.296Q21.554 2.990 21.418 2.718L21.418 2.718Q20.874 1.630 19.582 1.120L19.582 1.120Q18.562 0.440 15.570 0.304L15.570 0.304Q12.170 0.780 9.450 1.970L9.450 1.970Q8.226 2.820 7.104 3.432L7.104 3.432L7.104 3.602Q7.138 3.602 7.206 3.568Q7.274 3.534 7.308 3.534L7.308 3.534Q7.444 3.534 7.444 3.602L7.444 3.602L7.614 3.534L7.682 3.534L7.682 3.602L7.614 3.704Q7.512 3.806 7.308 3.908Q7.104 4.010 6.424 4.520L6.424 4.520L5.982 4.860L6.220 5.030L6.050 4.928Q6.050 5.030 5.846 5.030L5.846 5.030L5.846 5.098L5.982 5.302Q5.846 5.302 5.744 5.234L5.744 5.234Q5.098 5.336 4.724 5.982L4.724 5.982L4.724 6.288L4.758 6.254Q5.030 5.982 5.234 5.846L5.234 5.846L5.234 6.050L5.166 6.050L5.030 6.152L5.030 6.220L5.166 6.424L5.166 6.526Q5.268 6.356 5.404 6.220L5.404 6.220L5.982 5.608L6.356 5.404Q6.662 5.506 6.662 5.608L6.662 5.608L6.798 5.608Q8.566 4.316 10.334 3.670L10.334 3.670L10.334 3.806Q10.266 3.976 10.028 4.180L10.028 4.180Q9.960 4.282 9.892 4.282L9.892 4.282Q9.892 4.418 10.028 4.554L10.028 4.554Q9.314 6.866 8.430 8.600L8.430 8.600Q5.880 15.298 2.446 21.588L2.446 21.588Q2.446 21.622 2.480 21.707Q2.514 21.792 2.514 21.826L2.514 21.826L2.718 21.758Q2.956 21.656 3.262 21.520L3.262 21.520L3.330 21.520L3.330 21.656L3.466 21.656L3.636 21.588L3.772 21.588L3.772 21.894L3.534 22.438Q3.092 23.152 3.024 23.628L3.024 23.628L3.024 23.696L3.262 23.696L3.466 23.390Q4.350 22.370 4.724 21.520L4.724 21.520L5.472 21.282Q6.220 21.078 6.798 20.840L6.798 20.840L6.934 20.772Q8.430 20.194 9.144 19.820L9.144 19.820Q9.756 19.820 10.385 19.599Q11.014 19.378 11.524 18.970L11.524 18.970L11.524 18.902L11.150 19.072L11.082 19.072L11.082 18.902Q12.034 18.800 12.612 18.392L12.612 18.392Q14.278 17.134 15.944 15.910L15.944 15.910Q19.378 13.360 19.276 10.980L19.276 10.980Q18.630 9.926 17.950 9.348L17.950 9.348L17.712 9.042Q17.712 8.770 18.766 8.158ZM15.196 13.836L15.196 13.836L13.156 15.468Q11.524 16.522 10.708 16.964L10.708 16.964Q8.702 18.188 6.492 18.970L6.492 18.970L6.220 19.072L6.118 19.072Q6.186 18.834 7.818 15.536L7.818 15.536L9.382 12.408Q11.592 12.068 13.666 11.150L13.666 11.150L14.176 11.082Q14.788 10.946 15.366 11.116Q15.944 11.286 16.386 11.660L16.386 11.660L16.386 11.966Q15.842 13.496 15.196 13.836ZM16.454 7.036L16.454 7.036Q15.672 7.818 14.686 8.362L14.686 8.362Q12.680 9.008 11.218 9.790L11.218 9.790Q11.150 9.790 11.082 9.722L11.082 9.722L10.844 9.722L10.844 9.586Q10.844 8.940 11.218 8.464L11.218 8.464Q11.456 7.138 11.728 7.036L11.728 7.036L13.428 3.228Q13.428 3.058 13.717 2.905Q14.006 2.752 14.550 2.718L14.550 2.718L14.754 2.718L14.754 2.922Q15.502 2.786 16.114 2.786L16.114 2.786Q16.998 2.684 17.525 2.854Q18.052 3.024 18.154 3.432L18.154 3.432L18.154 3.602L18.324 3.602L18.324 3.092L18.460 3.092Q18.936 3.330 19.038 3.738L19.038 3.738L19.038 3.908Q19.038 4.350 18.698 4.724L18.698 4.724Q18.528 4.724 18.528 4.486L18.528 4.486L18.392 4.486L18.392 4.928Q17.406 6.526 16.896 6.526L16.896 6.526Q16.726 6.798 16.454 7.036Z"/>',
  "seti:bower": '<path d="M22.745 11.388L22.745 11.388Q22.631 11.350 22.327 11.198L22.327 11.198Q21.871 11.008 21.567 10.932L21.567 10.932Q19.971 10.476 16.779 9.982L16.779 9.982L15.145 9.754Q14.993 9.754 14.613 9.678Q14.233 9.602 13.967 9.640L13.967 9.640Q14.081 9.146 14.309 8.956Q14.537 8.766 15.145 8.652L15.145 8.652Q15.221 8.728 15.278 8.899Q15.335 9.070 15.373 9.165Q15.411 9.260 15.487 9.298Q15.563 9.336 15.639 9.260L15.639 9.260L16.475 9.260Q17.539 9.070 18.261 8.500Q18.983 7.930 19.439 6.904L19.439 6.904Q19.667 5.954 19.781 5.574L19.781 5.574Q20.009 3.940 20.959 2.952L20.959 2.952L21.225 2.724Q20.351 2.496 19.211 2.781Q18.071 3.066 17.045 3.788L17.045 3.788Q15.943 4.624 15.411 5.802L15.411 5.802Q15.297 5.764 14.993 5.707Q14.689 5.650 14.575 5.612Q14.461 5.574 14.404 5.498Q14.347 5.422 14.347 5.346L14.347 5.346Q13.587 3.332 11.725 2.154L11.725 2.154Q11.041 1.736 10.091 1.584L10.091 1.584Q9.255 1.432 8.381 1.546L8.381 1.546Q4.695 2.078 2.339 5.004L2.339 5.004Q1.199 6.410 0.648 8.120Q0.097 9.830 0.211 11.654L0.211 11.654Q0.363 15.340 2.567 18.646L2.567 18.646Q2.947 19.178 4.011 20.204L4.011 20.204L4.467 20.660Q5.113 21.040 5.835 20.983Q6.557 20.926 7.089 20.432L7.089 20.432Q7.127 20.356 7.260 20.185Q7.393 20.014 7.431 19.938L7.431 19.938Q7.431 20.014 7.488 20.071Q7.545 20.128 7.545 20.204L7.545 20.204Q7.659 20.394 7.849 20.926L7.849 20.926Q8.039 21.534 8.153 21.724L8.153 21.724Q8.343 22.104 8.856 22.294Q9.369 22.484 9.825 22.332L9.825 22.332Q9.977 22.142 10.167 22.332L10.167 22.332Q10.889 22.674 11.611 22.332L11.611 22.332Q11.687 22.294 11.839 22.142L11.839 22.142Q12.029 21.990 12.181 21.933Q12.333 21.876 12.675 21.952L12.675 21.952L12.903 21.990Q13.435 21.876 13.701 21.648L13.701 21.648Q14.081 21.344 14.081 20.774L14.081 20.774L14.119 20.736Q14.119 20.660 14.195 20.660L14.195 20.660Q14.385 20.584 14.537 20.413Q14.689 20.242 14.689 20.052L14.689 20.052Q14.841 19.558 14.689 18.874L14.689 18.874L14.309 18.228Q13.815 17.240 13.511 16.860L13.511 16.860L13.397 16.746Q14.081 16.974 14.575 17.088L14.575 17.088Q15.639 17.316 16.209 16.746L16.209 16.746Q16.285 16.746 16.342 16.803Q16.399 16.860 16.475 16.860L16.475 16.860Q17.159 17.316 18.033 17.164Q18.907 17.012 19.439 16.404L19.439 16.404L19.667 16.404Q20.769 16.556 21.567 15.910L21.567 15.910Q21.795 15.682 21.909 15.530L21.909 15.530Q22.061 15.302 22.061 15.074L22.061 15.074L22.061 14.960Q22.973 14.884 23.391 14.466Q23.809 14.048 23.809 13.174L23.809 13.174Q23.733 12.490 23.505 12.072Q23.277 11.654 22.745 11.388ZM17.539 8.196L17.539 8.196Q16.817 8.538 15.867 8.538L15.867 8.538L15.829 8.538Q15.753 8.500 15.715 8.405Q15.677 8.310 15.620 8.082Q15.563 7.854 15.544 7.740Q15.525 7.626 15.544 7.607Q15.563 7.588 15.639 7.588L15.639 7.588Q15.943 7.588 16.019 7.664Q16.095 7.740 16.095 8.082L16.095 8.082Q16.285 7.816 16.361 7.778Q16.437 7.740 16.703 7.854L16.703 7.854Q16.817 7.892 17.064 7.949Q17.311 8.006 17.425 8.082L17.425 8.082L17.615 8.196Q17.615 8.196 17.539 8.196ZM15.981 5.688L15.981 5.688Q16.475 4.814 17.767 3.788L17.767 3.788Q18.755 3.218 19.667 3.218L19.667 3.218Q19.439 3.446 19.325 3.674L19.325 3.674Q19.059 4.016 18.907 4.890L18.907 4.890L18.831 5.346Q18.603 6.524 18.375 7.132L18.375 7.132Q18.375 7.284 18.223 7.436L18.223 7.436Q18.147 7.550 18.147 7.588L18.147 7.588Q17.843 7.322 17.235 6.866L17.235 6.866L16.931 6.638L16.931 6.410L17.083 6.144Q17.539 5.384 17.805 5.004L17.805 5.004Q18.223 4.396 18.717 4.054L18.717 4.054Q17.919 4.358 17.387 5.004L17.387 5.004Q17.007 5.422 16.475 6.410L16.475 6.410L15.867 6.068Q15.867 5.992 15.924 5.878Q15.981 5.764 15.981 5.688ZM12.789 7.702L12.789 7.702Q12.789 6.676 13.245 6.068L13.245 6.068Q13.245 5.992 13.397 5.954L13.397 5.954L13.511 5.954Q15.221 6.106 16.589 7.132L16.589 7.132Q16.703 7.170 16.874 7.360Q17.045 7.550 17.159 7.588L17.159 7.588Q17.045 7.550 16.760 7.493Q16.475 7.436 16.361 7.360L16.361 7.360Q15.297 7.132 14.461 7.474L14.461 7.474Q13.853 7.930 12.789 7.702L12.789 7.702Q13.017 7.968 13.302 8.006Q13.587 8.044 13.967 7.968L13.967 7.968Q14.271 7.968 14.727 7.778L14.727 7.778L14.917 7.740Q14.917 7.778 14.879 7.892L14.879 7.892L14.803 7.968Q14.423 8.234 13.359 8.652L13.359 8.652L13.017 8.804L12.903 8.804Q12.789 8.424 12.789 7.702ZM9.217 4.852L9.217 4.852Q10.053 4.852 10.699 5.498Q11.345 6.144 11.345 7.018Q11.345 7.892 10.737 8.519Q10.129 9.146 9.236 9.146Q8.343 9.146 7.716 8.519Q7.089 7.892 7.089 6.980Q7.089 6.068 7.697 5.460Q8.305 4.852 9.217 4.852ZM14.689 12.110L14.689 12.110Q15.639 12.338 16.361 12.338L16.361 12.338L18.489 12.718Q18.679 12.718 18.717 12.813Q18.755 12.908 18.603 13.060L18.603 13.060Q18.413 13.326 18.033 13.478Q17.653 13.630 17.311 13.554L17.311 13.554L17.045 13.554Q17.159 13.706 17.083 13.934Q17.007 14.162 16.817 14.238L16.817 14.238Q16.361 14.732 15.639 14.732L15.639 14.732Q15.525 14.732 15.221 14.675Q14.917 14.618 14.803 14.618L14.803 14.618Q14.727 14.960 14.347 15.150Q13.967 15.340 13.454 15.302Q12.941 15.264 12.561 14.960L12.561 14.960Q12.789 15.682 12.903 16.138L12.903 16.138L12.903 16.518Q12.713 17.848 11.763 18.741Q10.813 19.634 9.445 19.710L9.445 19.710Q6.861 19.900 4.695 18.304L4.695 18.304Q2.833 17.088 1.845 14.960L1.845 14.960Q1.845 14.922 1.788 14.846Q1.731 14.770 1.731 14.732L1.731 14.732Q2.681 14.960 3.061 15.074L3.061 15.074Q3.783 15.188 4.277 15.112L4.277 15.112Q4.961 14.998 5.531 14.618L5.531 14.618L5.797 14.618Q7.165 14.998 8.381 14.846L8.381 14.846Q9.331 14.694 10.129 14.162L10.129 14.162Q10.851 13.668 11.611 12.832L11.611 12.832Q11.953 12.490 12.447 11.540L12.447 11.540Q12.675 11.160 13.131 10.704L13.131 10.704L13.397 10.704L16.361 11.046L17.615 11.274Q19.325 11.616 20.275 11.768L20.275 11.768L20.313 11.768Q20.389 11.806 20.389 11.882L20.389 11.882L19.173 11.958Q16.171 12.224 14.689 12.110ZM9.217 8.196L9.217 8.196Q9.787 8.196 10.148 7.873Q10.509 7.550 10.528 7.018Q10.547 6.486 10.167 6.144Q9.787 5.802 9.236 5.802Q8.685 5.802 8.305 6.182Q7.925 6.562 7.925 7.018Q7.925 7.474 8.286 7.835Q8.647 8.196 9.217 8.196ZM8.495 6.068L8.495 6.068Q8.571 5.992 8.780 5.935Q8.989 5.878 9.103 5.802L9.103 5.802L9.711 6.068Q9.863 6.144 9.863 6.315Q9.863 6.486 9.692 6.657Q9.521 6.828 9.141 6.828Q8.761 6.828 8.381 6.638L8.381 6.638Q8.191 6.220 8.495 6.068Z"/>',
  "seti:docker": '<path d="M10.109 6.473L10.109 4.427L12.188 4.427L12.188 6.473L10.109 6.473ZM10.109 8.849L10.109 6.803L12.188 6.803L12.188 8.849L10.109 8.849ZM10.109 11.324L10.109 9.277L12.188 9.277L12.188 11.324L10.109 11.324ZM7.733 8.849L7.733 6.803L9.812 6.803L9.812 8.849L7.733 8.849ZM7.733 11.324L7.733 9.277L9.812 9.277L9.812 11.324L7.733 11.324ZM5.258 8.849L5.258 6.803L7.337 6.803L7.337 8.849L5.258 8.849ZM5.258 11.324L5.258 9.277L7.337 9.277L7.337 11.324L5.258 11.324ZM2.882 11.324L2.882 9.277L4.961 9.277L4.961 11.324L2.882 11.324ZM12.584 11.324L12.584 9.277L14.663 9.277L14.663 11.324L12.584 11.324ZM23.111 9.575L23.111 9.575Q22.286 9.377 21.758 9.377L21.758 9.377Q21.032 9.509 20.735 8.750Q20.438 7.991 19.811 7.495L19.811 7.495Q19.349 6.968 18.920 7.083Q18.491 7.198 18.260 7.826L18.260 7.826Q17.963 8.816 18.161 10.103L18.161 10.103Q18.326 10.796 18.177 11.043Q18.029 11.291 17.319 11.456Q16.610 11.620 8.492 11.654L8.492 11.654Q4.433 11.654 0.539 11.620L0.539 11.620L0.539 11.620Q0.374 11.620 0.291 11.934Q0.209 12.248 0.209 12.677L0.209 12.677Q0.209 13.238 0.308 13.997L0.308 13.997Q0.407 14.987 0.638 15.449L0.638 15.449Q1.430 17.230 2.717 18.287L2.717 18.287Q4.136 19.442 5.984 19.574L5.984 19.574L10.637 19.574Q12.782 19.508 14.696 18.485L14.696 18.485Q16.412 17.593 18.062 15.878L18.062 15.878Q19.382 14.360 20.108 12.776L20.108 12.776Q20.405 12.215 21.065 12.082Q21.725 11.951 22.055 11.852L22.055 11.852Q22.550 11.720 22.913 11.422L22.913 11.422Q23.012 11.225 23.309 10.928L23.309 10.928Q23.837 10.532 23.787 10.136Q23.738 9.739 23.111 9.575ZM7.733 14.822L7.733 14.822Q8.063 14.822 8.310 15.053Q8.558 15.284 8.558 15.663Q8.558 16.043 8.343 16.257Q8.129 16.471 7.766 16.471Q7.403 16.471 7.155 16.257Q6.908 16.043 6.908 15.663Q6.908 15.284 7.155 15.053Q7.403 14.822 7.733 14.822ZM2.684 17.099L2.684 17.099Q3.047 17.066 3.740 17.099L3.740 17.099Q4.664 17.132 5.060 17.000L5.060 17.000Q5.819 16.736 6.330 16.917Q6.842 17.099 7.238 17.825L7.238 17.825Q7.403 18.188 7.799 18.485L7.799 18.485Q8.030 18.650 8.624 18.980L8.624 18.980L8.987 19.178Q7.271 19.409 5.555 18.831Q3.839 18.254 2.684 17.099Z"/>',
  "seti:code-climate": '<path d="M15.627 15.494L15.813 15.742Q15.782 15.804 15.689 15.897L15.689 15.897L13.364 18.098Q13.271 18.222 13.178 18.207Q13.085 18.191 12.992 18.067L12.992 18.067L8.094 13.386L3.320 18.005Q3.134 18.160 3.010 18.160Q2.886 18.160 2.731 18.005L2.731 18.005Q2.204 17.478 1.057 16.393L1.057 16.393L0.282 15.649L0.499 15.494Q0.778 15.339 0.871 15.215L0.871 15.215Q4.653 11.619 7.846 8.550L7.846 8.550Q8.001 8.395 8.110 8.395Q8.218 8.395 8.373 8.519L8.373 8.519L15.627 15.494ZM11.535 10.038L15.968 5.791Q16.681 6.473 18.107 7.837L18.107 7.837L23.718 13.200L21.083 15.742L15.968 10.875L14.170 12.580L11.535 10.038Z"/>',
  "seti:eslint": '<path d="M23.862 12.000L18.570 1.884L5.862 1.884L0.138 12.000L5.862 22.116L18.570 22.116L23.862 12.000ZM19.146 16.176L12.054 20.208L4.962 16.176L4.962 8.184L12.054 3.792L19.146 8.184L19.146 16.176ZM12.054 6.492L7.338 9.408L7.338 14.808L12.054 17.508L16.770 14.808L16.770 9.408L12.054 6.492Z"/>',
  "seti:firebase": '<path d="M12.297 4.025L14.640 8.777L12.297 10.955L10.119 6.566L11.241 4.025Q11.472 3.662 11.769 3.662Q12.066 3.662 12.297 4.025L12.297 4.025ZM10.119 6.566L12.297 10.955L3.552 19.073L10.119 6.566ZM3.552 19.073L17.214 5.444Q17.511 5.114 17.792 5.213Q18.072 5.312 18.171 5.741L18.171 5.741L20.448 18.974L12.891 23.495Q12.726 23.594 12.297 23.660L12.297 23.660L11.934 23.693L11.571 23.660Q11.208 23.594 11.043 23.495L11.043 23.495L3.552 19.073ZM7.215 0.659L10.119 6.566L3.552 19.073L6.489 0.791Q6.555 0.362 6.770 0.312Q6.984 0.263 7.215 0.659L7.215 0.659Z"/>',
  "seti:firefox": '<path d="M23.928 10.888L23.886 10.594Q23.718 9.544 23.634 8.998L23.634 8.998L23.214 9.880L23.130 9.880Q23.550 6.058 20.946 3.790L20.946 3.790L20.862 4.000Q20.442 3.454 19.434 2.740L19.434 2.740Q19.308 3.118 19.644 3.454L19.644 3.454Q20.862 4.546 21.576 5.806L21.576 5.806L21.702 6.016Q21.282 5.428 20.232 4.420L20.232 4.420L19.812 4.000Q18.636 2.740 16.746 2.152L16.746 2.152L16.200 1.984L16.662 2.404Q17.544 3.076 17.964 3.454L17.964 3.454Q18.468 3.958 18.909 4.525Q19.350 5.092 19.392 5.302L19.392 5.302Q18.342 4.462 17.376 4.378L17.376 4.378Q19.980 6.730 19.686 10.132L19.686 10.132Q19.308 9.418 18.720 9.040L18.720 9.040L18.888 10.636Q19.014 11.854 18.888 12.484L18.888 12.484L18.636 13.618L18.342 13.030L18.216 13.618Q17.964 14.542 17.838 15.004L17.838 15.004Q17.544 16.054 16.872 16.684L16.872 16.684Q16.704 16.810 16.494 16.936L16.494 16.936Q16.452 16.978 16.368 16.978L16.368 16.978L16.284 16.978L16.284 16.684L16.200 16.684Q16.074 16.684 16.032 16.726L16.032 16.726Q15.864 16.894 15.696 17.062L15.696 17.062Q15.402 17.482 14.898 17.776L14.898 17.776L14.982 17.440L13.890 17.692Q13.218 17.818 12.882 17.860L12.882 17.860Q12.336 17.944 11.874 17.860L11.874 17.860Q11.160 17.734 10.824 17.356L10.824 17.356L11.538 17.356Q11.412 17.230 11.286 17.188L11.286 17.188L10.026 16.894Q9.438 16.726 9.165 16.558Q8.892 16.390 8.430 15.886L8.430 15.886L8.346 15.802Q7.044 14.542 7.338 12.484L7.338 12.484Q7.422 11.854 7.506 11.560L7.506 11.560Q7.674 11.098 8.052 10.804L8.052 10.804Q7.632 10.510 7.170 10.510L7.170 10.510Q6.498 10.468 5.910 10.909Q5.322 11.350 5.112 12.022L5.112 12.022Q4.566 13.618 5.742 15.172L5.742 15.172L5.868 15.340Q5.112 14.710 4.839 13.639Q4.566 12.568 4.986 11.602L4.986 11.602Q5.322 10.804 6.015 10.405Q6.708 10.006 7.485 10.132Q8.262 10.258 8.850 10.846L8.850 10.846L9.060 11.098Q9.186 10.720 9.165 10.237Q9.144 9.754 8.934 9.460L8.934 9.460Q7.884 8.032 8.199 6.457Q8.514 4.882 9.774 3.664L9.774 3.664L9.942 3.496Q9.060 3.286 8.094 3.874Q7.128 4.462 6.204 5.722L6.204 5.722L6.372 4.714L6.036 4.672Q4.104 4.420 2.634 5.638L2.634 5.638Q1.206 6.772 0.576 8.830L0.576 8.830L0.072 10.636L0.114 10.636L0.450 10.132Q0.282 11.056 0.198 12.148Q0.114 13.240 0.156 13.786L0.156 13.786L0.408 13.030Q0.954 17.062 3.516 19.750L3.516 19.750Q4.776 21.052 6.855 22.249Q8.934 23.446 9.858 23.362L9.858 23.362L9.396 23.068Q9.648 23.110 10.110 23.236L10.110 23.236L10.530 23.320L11.916 23.656L12.672 23.656L12.294 23.320L13.596 23.236Q15.528 23.110 17.418 22.438L17.418 22.438Q17.964 22.270 18.468 21.808L18.468 21.808Q18.804 21.472 19.266 20.884L19.266 20.884Q19.434 20.632 19.644 20.506L19.644 20.506Q21.492 19.498 22.542 17.608L22.542 17.608Q23.046 16.726 22.794 15.592L22.794 15.592Q22.752 15.382 22.836 15.172L22.836 15.172L23.088 14.584Q23.382 13.996 23.487 13.681Q23.592 13.366 23.760 12.694L23.760 12.694L23.928 12.064L23.928 10.888ZM8.178 12.946L7.800 12.694Q7.632 13.618 8.052 14.542Q8.472 15.466 9.270 15.928L9.270 15.928Q9.354 15.970 9.480 15.970L9.480 15.970Q11.412 16.096 12.798 14.962L12.798 14.962L13.092 14.710Q13.470 14.374 14.058 14.458L14.058 14.458Q14.268 14.500 14.373 14.395Q14.478 14.290 14.436 14.080L14.436 14.080Q14.352 13.618 13.932 13.366L13.932 13.366Q12.630 12.694 11.412 13.366L11.412 13.366Q11.076 13.576 10.740 13.660L10.740 13.660Q9.942 13.870 9.018 13.408L9.018 13.408Q8.766 13.282 8.178 12.946L8.178 12.946ZM3.894 4.126L3.978 4.084Q4.062 4.000 4.104 3.958L4.104 3.958Q8.430-0.074 14.100 1.102L14.100 1.102Q15.024 1.312 16.830 1.858L16.830 1.858L18.006 2.194Q15.822 0.682 13.134 0.409Q10.446 0.136 7.905 1.018Q5.364 1.900 3.558 3.832L3.558 3.832L3.894 4.126ZM11.664 7.234L11.664 7.234Q11.706 6.982 11.622 6.898Q11.538 6.814 11.328 6.772L11.328 6.772Q10.908 6.730 10.026 6.730L10.026 6.730L9.816 6.730Q9.438 6.688 9.270 6.646L9.270 6.646Q8.934 6.604 8.724 6.352L8.724 6.352Q8.472 6.940 8.682 7.864Q8.892 8.788 9.354 9.208L9.354 9.208L9.858 8.914Q10.614 8.494 11.034 8.284L11.034 8.284Q11.622 7.990 11.664 7.234ZM3.642 4.420L3.642 4.420Q2.844 3.748 2.760 2.614L2.760 2.614Q2.130 3.286 1.836 4.168L1.836 4.168Q1.626 4.882 1.584 5.890L1.584 5.890Q2.550 4.882 3.642 4.420Z"/>',
  "seti:gitlab": '<path d="M8.048 9.283L12.000 23.799L15.952 9.283L8.048 9.283ZM2.538 9.283L12.000 23.799L8.048 9.283L2.538 9.283ZM12.000 23.799L2.538 9.283L1.360 13.691Q1.284 13.995 1.360 14.299Q1.436 14.603 1.664 14.793L1.664 14.793L12.000 23.799ZM4.932 0.543L2.538 9.283L8.048 9.283L5.692 0.543Q5.616 0.201 5.312 0.201Q5.008 0.201 4.932 0.543L4.932 0.543ZM21.462 9.283L12.000 23.799L15.952 9.283L21.462 9.283ZM12.000 23.799L21.462 9.283L22.640 13.691Q22.716 13.995 22.640 14.299Q22.564 14.603 22.336 14.793L22.336 14.793L12.000 23.799ZM19.068 0.543L21.462 9.283L15.952 9.283L18.308 0.543Q18.384 0.201 18.688 0.201Q18.992 0.201 19.068 0.543L19.068 0.543Z"/>',
  "seti:grunt": '<path d="M19.485 12.265L19.485 12.265Q19.596 12.228 19.855 12.117L19.855 12.117Q20.632 11.747 21.002 11.488L21.002 11.488Q21.483 11.118 21.668 10.637Q21.853 10.156 21.668 9.712Q21.483 9.268 21.002 9.046L21.002 9.046Q20.706 8.898 20.521 8.343L20.521 8.343Q20.373 7.344 20.891 6.493L20.891 6.493Q21.483 5.642 21.113 5.013Q20.743 4.384 19.596 4.310L19.596 4.310L19.485 4.310L19.374 4.199L19.374 4.125Q19.263 3.607 19.300 3.385L19.300 3.385Q19.374 2.978 19.818 2.682L19.818 2.682Q20.077 2.571 20.743 2.349L20.743 2.349Q21.002 2.238 21.335 2.238L21.335 2.238Q21.335 2.090 21.224 2.090L21.224 2.090L21.224 2.090Q20.669 1.461 19.818 1.202L19.818 1.202Q19.078 0.980 18.227 1.054L18.227 1.054Q17.265 1.165 16.488 1.646L16.488 1.646Q15.896 2.016 15.193 2.793L15.193 2.793Q15.045 3.126 14.638 2.904L14.638 2.904Q14.416 2.793 14.416 2.571L14.416 2.571Q14.416 2.460 14.471 2.220Q14.527 1.979 14.527 1.868L14.527 1.868L14.860 1.165Q14.453 1.165 14.046 1.350L14.046 1.350Q13.824 1.461 13.343 1.757L13.343 1.757L13.121 1.868Q12.862 1.461 12.843 1.091Q12.825 0.721 13.010 0.240L13.010 0.240Q12.159 0.536 11.715 0.906L11.715 0.906Q11.197 1.387 11.049 2.090L11.049 2.090Q10.864 1.942 10.827 1.646L10.827 1.646Q10.790 1.461 10.790 1.128L10.790 1.128L10.827 0.832L10.716 0.832Q10.642 0.832 10.586 0.888Q10.531 0.943 10.457 0.943L10.457 0.943Q9.606 1.646 9.421 2.571L9.421 2.571Q9.421 2.645 9.365 2.756Q9.310 2.867 9.310 2.904L9.310 2.904Q9.273 2.867 9.143 2.812Q9.014 2.756 8.977 2.682L8.977 2.682Q8.755 2.497 8.292 2.109Q7.830 1.720 7.571 1.535L7.571 1.535Q6.535 0.943 5.554 0.925Q4.574 0.906 3.538 1.424L3.538 1.424L2.613 2.349Q2.835 2.460 3.297 2.571Q3.760 2.682 3.982 2.793L3.982 2.793Q4.611 2.978 4.777 3.348Q4.944 3.718 4.685 4.421L4.685 4.421Q4.574 4.421 4.352 4.477Q4.130 4.532 3.982 4.532L3.982 4.532Q3.390 4.717 3.131 5.106Q2.872 5.494 2.946 6.049L2.946 6.049Q3.020 6.197 3.186 6.549Q3.353 6.900 3.427 7.085L3.427 7.085Q3.427 7.122 3.482 7.252Q3.538 7.381 3.538 7.418L3.538 7.418L3.538 8.602Q3.538 8.824 3.057 9.268L3.057 9.268L2.872 9.453Q2.465 9.823 2.391 10.082L2.391 10.082Q2.132 10.489 2.317 10.970Q2.502 11.451 2.946 11.821L2.946 11.821Q3.538 12.265 4.463 12.635L4.463 12.635Q5.388 13.079 5.388 14.004L5.388 14.004Q5.388 15.299 5.277 15.965L5.277 15.965Q5.277 16.076 5.203 16.372L5.203 16.372Q5.166 16.705 5.166 16.890L5.166 16.890Q4.574 16.446 4.259 15.984Q3.945 15.521 3.871 14.929L3.871 14.929Q2.835 15.817 2.835 16.779L2.835 16.779Q2.650 18.000 3.168 18.962L3.168 18.962Q3.723 19.998 5.055 20.479L5.055 20.479Q5.166 20.479 5.388 20.738L5.388 20.738Q6.424 22.440 8.496 22.810L8.496 22.810Q8.755 22.810 8.755 22.921L8.755 22.921Q9.643 23.476 10.642 23.661L10.642 23.661Q11.530 23.809 12.677 23.735L12.677 23.735Q13.417 23.624 13.787 23.513L13.787 23.513Q14.342 23.365 14.749 23.032L14.749 23.032Q14.823 22.995 14.989 22.921Q15.156 22.847 15.193 22.810L15.193 22.810Q17.117 22.477 18.227 20.849L18.227 20.849L18.560 20.479Q19.707 20.109 20.188 19.332L20.188 19.332Q20.595 18.777 20.743 18.000L20.743 18.000Q20.854 17.334 20.780 16.668L20.780 16.668Q20.669 16.187 20.428 15.799Q20.188 15.410 19.707 14.929L19.707 14.929Q19.559 15.558 19.263 16.021Q18.967 16.483 18.449 16.890L18.449 16.890Q18.338 15.854 18.338 13.893L18.338 13.893Q18.523 13.227 18.782 12.839Q19.041 12.450 19.485 12.265ZM14.971 18.407L9.791 18.407L14.971 18.407Z"/>',
  "seti:gulp": '<path d="M15.840 18.343L15.840 18.343Q15.660 18.643 15.465 19.018Q15.270 19.393 15.270 19.663L15.270 19.663L15 22.573Q15 23.083 14.520 23.233L14.520 23.233Q14.190 23.323 13.500 23.563Q12.810 23.803 12.480 23.893L12.480 23.893L11.430 23.893Q11.400 23.893 11.250 23.848Q11.100 23.803 11.070 23.803L11.070 23.803Q9.930 23.413 9.480 23.143L9.480 23.143Q9.180 22.843 9.180 22.663L9.180 22.663Q9.090 21.913 9.090 20.503L9.090 20.503Q9.090 19.753 9.030 19.423L9.030 19.423Q8.910 18.823 8.520 18.463L8.520 18.463L8.520 18.343Q12.060 19.333 15.840 18.343ZM17.250 6.463L17.250 6.463Q17.190 7.093 17.055 8.413Q16.920 9.733 16.890 10.393L16.890 10.393L16.230 17.233Q16.230 18.103 15.270 18.253L15.270 18.253Q14.250 18.463 12.570 18.643L12.570 18.643Q10.470 18.793 8.640 18.253L8.640 18.253Q8.310 18.193 8.160 17.953L8.160 17.953Q8.070 17.803 7.980 17.413L7.980 17.413Q7.980 16.843 7.770 16.123L7.770 16.123L7.410 12.643Q7.410 12.583 7.365 12.493Q7.320 12.403 7.320 12.373L7.320 12.373Q7.260 11.383 6.960 9.493L6.960 9.493L6.750 7.963Q6.660 7.483 6.660 6.553L6.660 6.553Q12.120 7.693 17.250 6.463ZM6.660 5.893L6.660 5.893Q7.020 5.713 7.230 5.713L7.230 5.713L9.840 5.413Q9.900 5.413 10.080 5.323L10.080 5.323L10.230 5.233Q10.140 4.993 10.020 4.513L10.020 4.513Q9.900 3.943 9.780 3.643L9.780 3.643Q9.600 3.193 9.270 2.893L9.270 2.893Q8.910 2.503 8.205 1.708Q7.500 0.913 7.140 0.553L7.140 0.553Q7.440 0.223 7.560 0.148Q7.680 0.073 7.785 0.133Q7.890 0.193 8.160 0.463L8.160 0.463L8.520 0.823Q8.940 1.303 9.180 1.483L9.180 1.483Q10.770 2.773 11.070 4.753L11.070 4.753Q11.190 5.173 11.400 5.293Q11.610 5.413 12 5.413L12 5.413L16.680 5.713Q16.830 5.713 17.130 5.803L17.130 5.803L17.340 5.893Q16.590 6.463 14.070 6.673L14.070 6.673Q11.760 6.883 9.480 6.673L9.480 6.673Q7.110 6.433 6.660 5.893Z"/>',
  "seti:ionic": '<path d="M22.555 6.765L22.555 6.765Q23.277 6.081 23.277 4.789Q23.277 3.497 22.384 2.585Q21.491 1.673 20.199 1.673L20.199 1.673Q19.477 1.673 18.527 2.167L18.527 2.167Q15.753 0.115 11.991 0.115L11.991 0.115Q8.761 0.115 6.025 1.749L6.025 1.749Q3.327 3.345 1.731 6.043L1.731 6.043Q0.097 8.779 0.116 12.009Q0.135 15.239 1.731 17.975L1.731 17.975Q3.327 20.673 6.025 22.269L6.025 22.269Q8.761 23.903 11.991 23.884Q15.221 23.865 17.957 22.269L17.957 22.269Q20.655 20.673 22.251 17.975L22.251 17.975Q23.885 15.239 23.885 12.009L23.885 12.009Q23.885 9.197 22.555 6.765ZM11.991 21.965L11.991 21.965Q9.255 22.003 6.937 20.597L6.937 20.597Q4.657 19.305 3.346 17.006Q2.035 14.707 2.035 12.009Q2.035 9.311 3.384 7.031Q4.733 4.751 7.013 3.402Q9.293 2.053 11.991 2.053L11.991 2.053Q15.069 2.015 17.463 3.687L17.463 3.687Q17.235 4.409 17.197 4.751L17.197 4.751Q17.235 6.043 18.109 6.955Q18.983 7.867 20.313 7.867L20.313 7.867Q20.769 7.867 21.035 7.715L21.035 7.715Q21.985 9.843 21.985 12.009L21.985 12.009Q21.985 14.745 20.655 17.044Q19.325 19.343 17.026 20.654Q14.727 21.965 11.991 21.965ZM11.991 7.145L11.991 7.145Q10.661 7.145 9.540 7.791Q8.419 8.437 7.735 9.539Q7.051 10.641 7.032 11.990Q7.013 13.339 7.659 14.460Q8.305 15.581 9.407 16.265Q10.509 16.949 11.858 16.968Q13.207 16.987 14.328 16.341Q15.449 15.695 16.133 14.593Q16.817 13.491 16.836 12.142Q16.855 10.793 16.209 9.634Q15.563 8.475 14.442 7.810Q13.321 7.145 11.991 7.145Z"/>',
  "seti:platformio": '<path d="M16.482 5.484L16.482 5.484L17.166 3.036Q17.706 3 18.084 2.604Q18.462 2.208 18.462 1.668Q18.462 1.128 18.048 0.714Q17.634 0.300 17.058 0.300Q16.482 0.300 16.068 0.714Q15.654 1.128 15.654 1.668L15.654 1.668Q15.654 2.028 15.834 2.352Q16.014 2.676 16.338 2.856L16.338 2.856L15.618 5.268Q14.754 5.052 13.818 4.944L13.818 4.944Q13.134 4.836 12.486 4.800L12.486 4.800L11.982 4.800L11.694 4.944L11.694 23.592L11.982 23.700Q12.738 23.700 14.358 22.764L14.358 22.764Q16.086 21.756 17.706 20.244L17.706 20.244Q19.614 18.516 20.694 16.644L20.694 16.644Q22.026 14.448 22.026 12.396L22.026 12.396Q22.026 9.552 20.262 7.716L20.262 7.716Q18.858 6.240 16.482 5.484ZM14.502 17.508L14.502 17.508Q13.710 16.248 13.728 14.232Q13.746 12.216 14.718 10.668L14.718 10.668Q15.798 8.904 17.742 8.508L17.742 8.508Q18.678 8.364 19.506 8.940L19.506 8.940Q20.406 9.516 20.694 10.668L20.694 10.668Q21.054 11.856 20.334 13.368L20.334 13.368Q19.686 14.664 18.426 15.888L18.426 15.888Q17.238 17.004 16.086 17.508Q14.934 18.012 14.502 17.508ZM17.022 12.252L17.022 12.252Q16.482 12.252 16.104 12.612Q15.726 12.972 15.726 13.494Q15.726 14.016 16.104 14.376Q16.482 14.736 17.004 14.736Q17.526 14.736 17.904 14.376Q18.282 14.016 18.282 13.494Q18.282 12.972 17.904 12.612Q17.526 12.252 17.022 12.252ZM17.382 13.404L17.382 13.404Q17.274 13.404 17.166 13.314Q17.058 13.224 17.058 13.098Q17.058 12.972 17.166 12.864Q17.274 12.756 17.400 12.756Q17.526 12.756 17.616 12.864Q17.706 12.972 17.706 13.098Q17.706 13.224 17.616 13.314Q17.526 13.404 17.382 13.404ZM8.346 5.304L8.346 5.304L7.662 2.820Q7.950 2.640 8.130 2.334Q8.310 2.028 8.310 1.668L8.310 1.668Q8.310 1.092 7.896 0.696Q7.482 0.300 6.888 0.300Q6.294 0.300 5.898 0.696Q5.502 1.092 5.502 1.650Q5.502 2.208 5.898 2.622Q6.294 3.036 6.906 3.036L6.906 3.036L7.590 5.520Q5.178 6.312 3.774 7.752L3.774 7.752Q1.974 9.588 1.974 12.396L1.974 12.396Q2.010 14.484 3.306 16.680L3.306 16.680Q4.422 18.552 6.330 20.280L6.330 20.280Q7.914 21.792 9.642 22.800L9.642 22.800Q11.262 23.700 11.982 23.700L11.982 23.700L11.982 4.800L11.478 4.836Q10.830 4.872 10.182 4.944L10.182 4.944Q9.210 5.088 8.346 5.304ZM9.750 17.508L9.750 17.508Q9.354 18.012 8.202 17.508Q7.050 17.004 5.862 15.888L5.862 15.888Q4.602 14.664 3.954 13.368L3.954 13.368Q3.234 11.856 3.594 10.668L3.594 10.668Q3.882 9.516 4.782 8.940L4.782 8.940Q5.610 8.364 6.546 8.508L6.546 8.508Q8.454 8.904 9.570 10.668L9.570 10.668Q10.506 12.216 10.542 14.232Q10.578 16.248 9.750 17.508ZM7.194 12.288L7.194 12.288Q6.654 12.288 6.276 12.648Q5.898 13.008 5.898 13.530Q5.898 14.052 6.276 14.412Q6.654 14.772 7.194 14.772Q7.734 14.772 8.112 14.412Q8.490 14.052 8.490 13.530Q8.490 13.008 8.112 12.648Q7.734 12.288 7.194 12.288ZM6.798 13.440L6.798 13.440Q6.654 13.440 6.564 13.350Q6.474 13.260 6.474 13.134Q6.474 13.008 6.564 12.900Q6.654 12.792 6.798 12.792Q6.942 12.792 7.032 12.900Q7.122 13.008 7.122 13.134Q7.122 13.260 7.032 13.350Q6.942 13.440 6.798 13.440Z"/>',
  "seti:rollup": '<path d="M20.108 22.374L20.108 22.374L16.580 15.276Q16.454 15.066 16.475 14.961Q16.496 14.856 16.706 14.772L16.706 14.772Q17.882 14.184 18.680 13.176L18.680 13.176Q19.730 11.916 20.213 10.362Q20.696 8.808 20.486 7.149Q20.276 5.490 19.562 4.272L19.562 4.272Q19.520 4.188 19.457 4.062Q19.394 3.936 19.310 3.852L19.310 3.852Q18.974 3.516 18.428 3.222L18.428 3.222Q18.050 3.054 17.336 2.802L17.336 2.802Q16.538 2.676 16.160 2.676L16.160 2.676Q15.530 2.634 15.026 2.781Q14.522 2.928 14.249 3.054Q13.976 3.180 13.808 3.474L13.808 3.474Q12.884 4.566 13.262 5.952L13.262 5.952Q13.472 6.666 13.934 7.296L13.934 7.296Q14.270 7.758 14.984 8.304L14.984 8.304Q15.530 8.598 15.908 8.724L15.908 8.724Q16.160 8.724 16.307 8.661Q16.454 8.598 16.580 8.304L16.580 8.304Q16.706 8.178 16.706 7.800L16.706 7.800Q16.706 7.296 16.412 6.498L16.412 6.498Q16.160 5.952 16.160 5.700L16.160 5.700Q16.328 6.162 16.790 7.002L16.790 7.002L17.084 7.548Q17.210 7.842 17.168 8.199Q17.126 8.556 16.958 8.850L16.958 8.850L16.706 9.102Q16.370 9.354 15.719 9.963Q15.068 10.572 14.732 10.824L14.732 10.824Q13.346 12 12.380 13.176L12.380 13.176Q11.288 14.478 9.482 17.124L9.482 17.124Q8.978 17.796 8.180 19.140L8.180 19.140L7.634 20.022Q7.382 20.400 6.920 21.177Q6.458 21.954 6.227 22.353Q5.996 22.752 5.492 23.508L5.492 23.508L5.282 23.802L20.486 23.802Q20.780 23.802 20.885 23.634Q20.990 23.466 20.906 23.172L20.906 23.172Q20.528 22.962 20.360 22.752L20.360 22.752Q20.234 22.626 20.108 22.374ZM7.508 10.824L7.508 10.824Q7.802 10.320 8.348 9.270L8.348 9.270Q9.818 6.666 10.658 5.448L10.658 5.448Q11.708 3.852 12.212 3.222L12.212 3.222Q13.052 2.382 13.934 2.004L13.934 2.004Q15.320 1.752 16.160 1.878L16.160 1.878Q17.798 2.088 18.932 3.222L18.932 3.222L19.184 3.474L19.184 3.348Q16.664 0.198 12.884 0.198L12.884 0.198L3.434 0.198Q3.056 0.198 3.056 0.702L3.056 0.702L3.056 19.602Q3.686 17.922 5.534 14.478L5.534 14.478Q6.206 13.176 7.508 10.824Z"/>',
  "seti:stylelint": '<path d="M10.540 4.860L10.540 3.060L13.540 3.060L13.540 4.860L10.540 4.860ZM17.060 1.060L17.100 7.020L13.940 5.020Q13.860 4.980 13.860 3.900L13.860 3.900L13.900 2.820L17.060 1.060ZM6.980 0.980L6.900 6.940L10.100 4.980Q10.180 4.900 10.180 3.820L10.180 3.820L10.140 2.780L6.980 0.980ZM11.140 7.540L11.140 7.540Q11.140 7.220 11.380 6.980Q11.620 6.740 11.960 6.740Q12.300 6.740 12.520 6.980Q12.740 7.220 12.740 7.560Q12.740 7.900 12.520 8.140Q12.300 8.380 11.960 8.380Q11.620 8.380 11.380 8.140Q11.140 7.900 11.140 7.540ZM11.140 12.540L11.140 12.540Q11.140 12.180 11.380 11.940Q11.620 11.700 11.960 11.700Q12.300 11.700 12.520 11.940Q12.740 12.180 12.740 12.520Q12.740 12.860 12.520 13.100Q12.300 13.340 11.960 13.340Q11.620 13.340 11.380 13.100Q11.140 12.860 11.140 12.540ZM11.140 17.500L11.140 17.500Q11.140 17.180 11.380 16.940Q11.620 16.700 11.960 16.700Q12.300 16.700 12.520 16.940Q12.740 17.180 12.740 17.520Q12.740 17.860 12.520 18.100Q12.300 18.340 11.960 18.340Q11.620 18.340 11.380 18.100Q11.140 17.860 11.140 17.500ZM21.780 5.580L23.940 3.620L20.500 0.420L18.580 0.420L17.580 3.980L17.500 7.740L16.580 7.220L12.220 23.620L23.300 7.380L21.780 5.580ZM2.220 5.540L0.060 3.540L3.500 0.380L5.460 0.380L6.460 3.900L6.500 7.700L7.420 7.140L11.780 23.540L0.700 7.340L2.220 5.540ZM7.300 7.420L7.300 7.420Z"/>',
  "seti:yarn": '<path d="M6.729 21.545L6.729 21.545Q6.393 21.377 6.225 21.041L6.225 21.041Q6.099 20.915 6.078 20.915Q6.057 20.915 5.973 21.041Q5.889 21.167 5.826 21.419Q5.763 21.671 5.679 21.839L5.679 21.839Q5.385 22.805 4.839 23.141Q4.293 23.477 3.327 23.267L3.327 23.267Q3.075 23.267 2.529 23.015L2.529 23.015Q1.731 22.595 2.151 21.839L2.151 21.839Q2.151 21.755 2.214 21.629Q2.277 21.503 2.277 21.419L2.277 21.419Q1.563 21.419 1.353 20.789L1.353 20.789Q0.849 19.445 1.017 18.416Q1.185 17.387 2.151 16.421L2.151 16.421L2.235 16.253Q2.403 15.959 2.403 15.791L2.403 15.791Q2.403 14.363 2.697 13.313L2.697 13.313Q3.033 12.053 3.831 11.045L3.831 11.045Q4.503 10.163 5.427 9.617L5.427 9.617Q5.595 9.533 5.616 9.407Q5.637 9.281 5.553 9.071L5.553 9.071Q4.839 8.189 4.629 6.971L4.629 6.971Q4.545 6.635 4.671 6.215L4.671 6.215Q4.755 5.921 5.007 5.417L5.007 5.417L5.175 5.039Q5.427 4.745 5.553 4.745L5.553 4.745Q5.931 4.661 6.561 4.199L6.561 4.199L6.855 3.989Q8.157 2.645 10.131 2.645L10.131 2.645Q10.341 2.645 10.446 2.582Q10.551 2.519 10.551 2.393L10.551 2.393Q10.719 1.595 11.307 0.839L11.307 0.839L11.727 0.419Q11.937 0.209 12.168 0.230Q12.399 0.251 12.525 0.545L12.525 0.545Q12.777 1.007 13.155 1.847L13.155 1.847L13.407 2.393Q13.617 2.729 13.827 2.519L13.827 2.519Q14.331 2.309 14.499 2.288Q14.667 2.267 14.751 2.393Q14.835 2.519 15.003 3.065L15.003 3.065Q16.011 7.265 13.701 10.919L13.701 10.919Q13.617 11.045 13.428 11.318Q13.239 11.591 13.155 11.759Q13.071 11.927 13.092 12.053Q13.113 12.179 13.281 12.389L13.281 12.389Q14.163 13.145 14.751 14.195Q15.339 15.245 15.507 16.421L15.507 16.421Q15.717 17.891 15.507 19.319L15.507 19.319Q15.423 19.697 15.507 19.760Q15.591 19.823 15.927 19.739L15.927 19.739Q17.397 19.277 18.531 18.521L18.531 18.521L18.867 18.353Q19.623 17.891 20.043 17.723L20.043 17.723Q20.673 17.429 21.303 17.345L21.303 17.345L21.681 17.345Q22.101 17.261 22.374 17.366Q22.647 17.471 22.836 17.723Q23.025 17.975 23.025 18.269L23.025 18.269Q23.025 18.857 22.353 19.067L22.353 19.067Q20.631 19.403 18.804 20.726Q16.977 22.049 14.457 22.721L14.457 22.721Q14.373 22.721 14.205 22.805Q14.037 22.889 13.953 23.015L13.953 23.015Q13.659 23.225 13.323 23.309L13.323 23.309Q13.113 23.393 12.651 23.435L12.651 23.435L12.231 23.519L11.895 23.561Q9.375 23.771 8.031 23.771L8.031 23.771Q7.275 23.771 6.729 23.645L6.729 23.645Q5.973 23.393 5.805 22.889L5.805 22.889Q5.595 22.091 6.225 21.671L6.225 21.671Q6.351 21.671 6.519 21.608Q6.687 21.545 6.729 21.545Z"/>',
  "seti:webpack": '<path d="M18.403 16.275L21.975 18.441L12.475 23.875L12.475 19.619L18.403 16.275ZM19.125 15.819L22.697 17.833L22.697 6.433L19.125 8.447L19.125 15.819ZM5.711 16.275L2.025 18.441L11.639 23.875L11.639 19.619L5.711 16.275ZM4.875 15.819L1.303 17.833L1.303 6.433L4.875 8.447L4.875 15.819ZM5.217 7.611L1.683 5.711L11.525 0.125L11.525 4.191L5.217 7.611ZM18.783 7.611L22.317 5.711L12.475 0.125L12.475 4.191L18.783 7.611ZM11.525 12.513L11.525 18.669L5.597 15.477L5.597 9.055L11.525 12.513ZM12.475 12.513L12.475 18.669L18.403 15.477L18.403 9.055L12.475 12.513ZM12.019 11.677L6.053 8.219L12.019 5.027L17.947 8.219L12.019 11.677Z"/>',
  "seti:lock": '<path d="M18.838 10.302L22.270 10.302L22.270 23.979L1.730 23.979L1.730 10.302L5.162 10.302L5.162 6.918Q5.162 6.354 5.255 5.884L5.255 5.884Q5.490 4.051 6.642 2.618Q7.793 1.184 9.509 0.503Q11.224-0.179 13.104 0.103L13.104 0.103Q15.548 0.526 17.194 2.453Q18.838 4.380 18.838 6.871L18.838 6.871L18.838 10.302ZM8.545 10.302L15.407 10.302Q15.407 10.255 15.407 10.208L15.407 10.208L15.407 6.777Q15.407 6.542 15.360 6.213L15.360 6.213Q15.078 4.850 14.021 4.098Q12.963 3.346 11.553 3.487L11.553 3.487Q10.284 3.581 9.415 4.592Q8.545 5.602 8.545 6.918L8.545 6.918L8.545 10.302Z"/>',
  "seti:license": '<path d="M14.768 8.750L14.768 8.750Q14.636 7.067 13.431 5.994Q12.227 4.922 10.445 4.823L10.445 4.823L8.894 4.823Q8.795 3.602 9.356 2.710L9.356 2.710Q10.016 1.556 11.484 1.407Q12.953 1.259 13.943 2.248L13.943 2.248Q14.768 3.206 14.768 4.724L14.768 4.724Q14.768 5.021 14.900 5.152L14.900 5.152L15.824 6.076Q16.253 4.756 15.923 3.271L15.923 3.271Q15.527 1.919 14.454 1.093Q13.382 0.268 11.897 0.203L11.897 0.203Q10.940 0.203 10.280 0.401L10.280 0.401Q9.488 0.631 8.894 1.226L8.894 1.226Q8.168 1.919 7.821 3.041Q7.475 4.163 7.739 5.318L7.739 5.318Q8.036 6.572 8.993 7.495L8.993 7.495Q9.323 7.826 10.148 8.222L10.148 8.222Q10.511 8.387 10.791 8.172Q11.072 7.957 11.072 7.628L11.072 7.628Q11.072 6.934 10.346 6.803L10.346 6.803Q10.247 6.803 10.049 6.572L10.049 6.572L10.049 6.473Q10.346 6.407 10.692 6.489Q11.039 6.572 11.270 6.803L11.270 6.803Q11.732 7.265 11.567 8.024L11.567 8.024Q11.435 8.585 10.989 8.799Q10.544 9.014 9.917 8.849L9.917 8.849Q8.366 8.419 7.574 6.803L7.574 6.803Q7.508 6.637 7.359 6.324Q7.211 6.011 7.145 5.846L7.145 5.846Q6.518 6.506 6.188 6.968L6.188 6.968Q5.759 7.628 5.594 8.321L5.594 8.321Q5.000 11.093 7.046 12.974L7.046 12.974Q7.145 13.073 7.178 13.155Q7.211 13.238 7.145 13.403L7.145 13.403Q6.980 14.822 6.749 15.746L6.749 15.746Q6.584 16.637 6.320 18.336Q6.056 20.035 5.907 20.894Q5.759 21.752 5.924 22.577L5.924 22.577Q6.089 23.236 6.749 23.501L6.749 23.501Q6.782 23.303 6.831 22.890Q6.881 22.478 6.947 22.247L6.947 22.247Q7.112 21.389 7.359 19.689Q7.607 17.989 7.772 17.099L7.772 17.099Q7.871 16.571 8.019 15.498Q8.168 14.426 8.300 13.898L8.300 13.898Q8.300 13.601 8.597 13.601L8.597 13.601Q8.729 13.601 8.762 13.700Q8.795 13.799 8.795 13.997L8.795 13.997Q8.663 15.218 8.300 17.000L8.300 17.000Q8.135 18.089 7.805 20.102L7.805 20.102Q7.409 22.412 7.244 23.501L7.244 23.501Q7.244 23.567 7.310 23.633L7.310 23.633L7.343 23.699Q7.607 23.699 8.069 23.748Q8.531 23.797 8.795 23.797L8.795 23.797Q9.422 23.797 10.049 22.973L10.049 22.973Q10.478 22.544 10.148 21.851L10.148 21.851Q9.950 21.653 9.950 21.521L9.950 21.521Q9.488 20.927 10.148 20.597L10.148 20.597Q10.181 20.564 10.346 20.514Q10.511 20.465 10.544 20.399L10.544 20.399Q10.709 20.333 10.758 20.135Q10.808 19.937 10.643 19.772L10.643 19.772L10.346 19.474Q10.016 19.079 9.851 18.947Q9.686 18.815 9.735 18.567Q9.785 18.320 9.933 18.221Q10.082 18.122 10.445 17.973Q10.808 17.825 10.973 17.726Q11.138 17.627 11.171 17.495Q11.204 17.363 11.072 17.198L11.072 17.198Q10.874 17.000 10.742 16.802L10.742 16.802Q10.544 16.571 10.577 16.241Q10.610 15.911 10.841 15.729Q11.072 15.548 11.270 15.548L11.270 15.548Q11.567 15.416 11.600 15.152L11.600 15.152Q11.567 14.987 11.633 14.673Q11.699 14.360 11.699 14.228L11.699 14.228Q11.699 14.129 11.765 13.997Q11.831 13.865 11.897 13.799L11.897 13.799Q12.194 13.502 13.019 13.073L13.019 13.073Q14.075 12.314 14.504 11.208Q14.933 10.103 14.768 8.750ZM18.497 20.498L18.497 20.498Q18.497 20.102 18.068 20.102L18.068 20.102Q17.837 20.102 17.738 20.069L17.738 20.069Q17.540 20.003 17.474 19.772L17.474 19.772Q17.309 19.309 17.474 18.848L17.474 18.848Q17.804 18.188 17.045 18.023L17.045 18.023Q16.946 18.023 16.715 17.973Q16.484 17.924 16.319 17.924L16.319 17.924Q16.022 17.924 16.022 17.627L16.022 17.627Q16.022 17.528 15.972 17.313Q15.923 17.099 15.923 17.000L15.923 17.000Q15.923 16.802 16.055 16.604L16.055 16.604Q16.121 16.471 16.302 16.257Q16.484 16.043 16.467 15.927Q16.451 15.812 16.220 15.647L16.220 15.647Q16.187 15.614 16.022 15.515Q15.857 15.416 15.824 15.350L15.824 15.350Q15.527 15.185 15.477 15.020Q15.428 14.855 15.593 14.525L15.593 14.525Q15.824 14.327 15.824 14.228L15.824 14.228Q16.088 13.931 15.923 13.601L15.923 13.601L15.824 13.436Q15.659 13.040 15.494 12.875L15.494 12.875Q15.362 12.578 15.494 12.248L15.494 12.248Q16.814 9.640 15.824 7.198L15.824 7.198Q15.032 5.515 13.118 5.053L13.118 5.053L13.019 5.152Q13.085 5.186 13.184 5.351Q13.283 5.515 13.349 5.549L13.349 5.549Q15.296 7.198 15.296 9.575L15.296 9.575Q15.296 12.248 13.019 13.898L13.019 13.898Q12.854 13.997 12.804 14.129Q12.755 14.261 12.821 14.426L12.821 14.426Q13.019 14.921 13.382 15.911Q13.745 16.901 13.943 17.396L13.943 17.396L16.418 23.171L16.484 23.270Q16.583 23.402 16.748 23.402L16.748 23.402Q17.672 22.940 18.167 22.148Q18.662 21.356 18.497 20.498ZM12.293 14.426L12.293 14.426Q12.260 14.624 12.210 14.954Q12.161 15.284 12.095 15.449L12.095 15.449L12.062 15.647Q12.029 15.944 12.095 16.076L12.095 16.076L14.273 21.422Q14.636 22.346 15.296 22.873L15.296 22.873Q15.692 23.072 15.824 23.204L15.824 23.204L15.923 23.072Q14.768 20.201 12.293 14.426Z"/>',
  "seti:makefile": '<path d="M12 9.249L4.398 0.975L0.198 2.025L0.198 23.025L5.700 23.025L5.700 10.005L10.404 15.129L13.596 15.129L18.300 10.005L18.300 23.025L23.802 23.025L23.802 2.025L19.602 0.975L12 9.249Z"/>',
  "seti:heroku": '<path d="M8.143 20.493L4.267 23.875L4.267 17.111L8.143 20.493ZM18.213 10.157L18.213 10.157Q19.163 11.069 19.505 12.399L19.505 12.399Q19.733 13.121 19.695 13.729L19.695 13.729L19.695 23.875L16.275 23.875L16.275 13.767Q16.275 13.045 15.857 12.589L15.857 12.589Q15.325 12.019 14.147 12.019L14.147 12.019Q11.943 12.019 9.131 12.893L9.131 12.893Q7.535 13.387 6.699 13.767L6.699 13.767L4.267 14.869L4.267 0.125L7.725 0.125L7.725 9.777Q11.297 8.637 14.147 8.637L14.147 8.637Q16.693 8.637 18.213 10.157ZM17.149 5.673L13.729 5.673Q15.705 3.051 16.275 0.125L16.275 0.125L19.733 0.125Q19.353 3.203 17.149 5.673L17.149 5.673Z"/>',
  "seti:todo": '<path d="M3.726 0.261L12 0.261L19.476 0.261Q21.030 0.261 22.206 1.227Q23.382 2.193 23.676 3.663L23.676 3.663Q23.802 3.915 23.802 4.461L23.802 4.461L23.802 19.413Q23.802 21.009 22.815 22.206Q21.828 23.403 20.274 23.613L20.274 23.613Q20.148 23.613 19.875 23.676Q19.602 23.739 19.476 23.739L19.476 23.739L4.650 23.739Q2.676 23.739 1.437 22.521Q0.198 21.303 0.198 19.413L0.198 19.413L0.198 4.587Q0.198 2.907 1.164 1.731Q2.130 0.555 3.726 0.261L3.726 0.261ZM3.726 12.063L3.726 12.063L3.726 19.539Q3.726 20.337 4.650 20.337L4.650 20.337L19.350 20.337Q19.728 20.337 20.001 20.064Q20.274 19.791 20.274 19.413L20.274 19.413L20.274 4.713Q20.148 4.209 19.917 3.999Q19.686 3.789 19.224 3.789L19.224 3.789L4.524 3.789Q4.020 3.789 3.810 3.999Q3.600 4.209 3.600 4.713L3.600 4.713Q3.726 7.065 3.726 12.063ZM6.876 10.341L6.876 10.341Q7.002 10.425 7.212 10.467L7.212 10.467L7.548 10.635Q8.010 10.803 8.913 11.265Q9.816 11.727 10.278 11.937L10.278 11.937Q10.488 12.021 10.530 12.021Q10.572 12.021 10.698 11.937L10.698 11.937L12.420 10.635Q15.066 8.661 16.452 7.737L16.452 7.737Q16.620 7.569 16.914 7.443L16.914 7.443Q17.082 7.401 17.124 7.359L17.124 7.359Q17.418 7.233 17.607 7.464Q17.796 7.695 17.796 7.989L17.796 7.989L17.628 8.241Q17.502 8.451 17.502 8.535L17.502 8.535Q16.830 9.417 15.528 11.307L15.528 11.307L14.226 13.113Q12.672 15.255 11.874 16.263L11.874 16.263Q11.370 17.019 10.698 16.977Q10.026 16.935 9.522 16.137L9.522 16.137L6.498 11.685Q6.204 11.391 6.204 11.265L6.204 11.265Q6.120 10.887 6.309 10.614Q6.498 10.341 6.876 10.341Z"/>',
  "seti:ignored": '<path d="M4.661 20.860L21.083 4.480Q21.335 3.934 21.335 3.682L21.335 3.682Q21.167 2.968 20.600 2.779Q20.033 2.590 19.361 3.010L19.361 3.010L16.715 5.656Q16.589 5.782 16.211 5.782L16.211 5.782Q13.943 4.900 11.738 4.921Q9.533 4.942 7.307 5.908L7.307 5.908Q3.191 7.714 0.335 12.082L0.335 12.082Q0.125 12.502 0.146 12.817Q0.167 13.132 0.461 13.384L0.461 13.384Q1.469 14.602 2.687 15.610L2.687 15.610Q3.485 16.282 5.039 17.332L5.039 17.332Q4.997 17.332 4.934 17.395Q4.871 17.458 4.787 17.458L4.787 17.458L4.115 18.088Q3.317 18.886 2.939 19.306L2.939 19.306Q2.519 19.768 2.687 20.482L2.687 20.482Q2.897 21.112 3.611 21.280L3.611 21.280Q4.283 21.280 4.661 20.860L4.661 20.860ZM7.811 14.560L6.887 15.484L6.635 15.484Q4.241 14.182 2.687 12.502L2.687 12.502Q4.955 9.520 7.559 8.134L7.559 8.134Q5.627 11.410 7.811 14.560L7.811 14.560ZM12.809 8.302L12.809 8.302Q12.599 8.932 11.885 8.932L11.885 8.932Q11.003 8.932 10.373 9.478Q9.743 10.024 9.659 10.906L9.659 10.906L9.659 11.284Q9.659 11.662 9.428 11.872Q9.197 12.082 8.840 12.082Q8.483 12.082 8.273 11.830Q8.063 11.578 8.063 11.158L8.063 11.158Q8.063 9.562 9.197 8.407Q10.331 7.252 11.885 7.252L11.885 7.252Q12.347 7.252 12.620 7.567Q12.893 7.882 12.809 8.302ZM23.561 11.956L23.561 11.956Q23.225 11.578 22.574 10.717Q21.923 9.856 21.587 9.478L21.587 9.478Q21.335 9.142 20.684 8.554Q20.033 7.966 19.739 7.630L19.739 7.630L18.185 9.184Q20.033 10.654 21.335 12.502L21.335 12.502Q21.083 12.754 20.957 12.754L20.957 12.754Q20.159 13.510 19.739 13.804L19.739 13.804Q15.623 17.122 10.961 16.534L10.961 16.534Q10.583 16.534 10.415 16.702L10.415 16.702Q9.911 17.206 9.659 17.584L9.659 17.584L8.861 18.382L8.987 18.382Q12.137 19.054 14.615 18.508L14.615 18.508Q19.739 17.626 23.561 13.132L23.561 13.132Q24.149 12.754 23.561 11.956Z"/>'
};

const BuiltInIcons = {
  "up-caret": '<path d="m17 13.41-4.29-4.24a.999.999 0 0 0-1.42 0l-4.24 4.24a1 1 0 1 0 1.41 1.42L12 11.29l3.54 3.54a1 1 0 0 0 1.41 0 1 1 0 0 0 .05-1.42Z"/>',
  "down-caret": '<path d="M17 9.17a1 1 0 0 0-1.41 0L12 12.71 8.46 9.17a1 1 0 1 0-1.41 1.42l4.24 4.24a1.002 1.002 0 0 0 1.42 0L17 10.59a1.002 1.002 0 0 0 0-1.42Z"/>',
  "right-caret": '<path d="m14.83 11.29-4.24-4.24a1 1 0 1 0-1.42 1.41L12.71 12l-3.54 3.54a1 1 0 0 0 0 1.41 1 1 0 0 0 .71.29 1 1 0 0 0 .71-.29l4.24-4.24a1.002 1.002 0 0 0 0-1.42Z"/>',
  "right-arrow": '<path d="M17.92 11.62a1.001 1.001 0 0 0-.21-.33l-5-5a1.003 1.003 0 1 0-1.42 1.42l3.3 3.29H7a1 1 0 0 0 0 2h7.59l-3.3 3.29a1.002 1.002 0 0 0 .325 1.639 1 1 0 0 0 1.095-.219l5-5a1 1 0 0 0 .21-.33 1 1 0 0 0 0-.76Z"/>',
  "left-arrow": '<path d="M17 11H9.41l3.3-3.29a1.004 1.004 0 1 0-1.42-1.42l-5 5a1 1 0 0 0-.21.33 1 1 0 0 0 0 .76 1 1 0 0 0 .21.33l5 5a1.002 1.002 0 0 0 1.639-.325 1 1 0 0 0-.219-1.095L9.41 13H17a1 1 0 0 0 0-2Z"/>',
  bars: '<path d="M3 8h18a1 1 0 1 0 0-2H3a1 1 0 0 0 0 2Zm18 8H3a1 1 0 0 0 0 2h18a1 1 0 0 0 0-2Zm0-5H3a1 1 0 0 0 0 2h18a1 1 0 0 0 0-2Z"/>',
  translate: '<path fill-rule="evenodd" d="M8.516 3a.94.94 0 0 0-.941.94v1.15H2.94a.94.94 0 1 0 0 1.882h7.362a7.422 7.422 0 0 1-1.787 3.958 7.42 7.42 0 0 1-1.422-2.425.94.94 0 1 0-1.774.627 9.303 9.303 0 0 0 1.785 3.043 7.422 7.422 0 0 1-4.164 1.278.94.94 0 1 0 0 1.881 9.303 9.303 0 0 0 5.575-1.855 9.303 9.303 0 0 0 4.11 1.74l-.763 1.525a.968.968 0 0 0-.016.034l-1.385 2.77a.94.94 0 1 0 1.683.841l1.133-2.267h5.806l1.134 2.267a.94.94 0 0 0 1.683-.841l-1.385-2.769a.95.95 0 0 0-.018-.036l-3.476-6.951a.94.94 0 0 0-1.682 0l-1.82 3.639a7.423 7.423 0 0 1-3.593-1.256 9.303 9.303 0 0 0 2.27-5.203h1.894a.94.94 0 0 0 0-1.881H9.456V3.94A.94.94 0 0 0 8.516 3Zm6.426 11.794a1.068 1.068 0 0 1-.02.039l-.703 1.407h3.924l-1.962-3.924-1.24 2.478Z" clip-rule="evenodd"/>',
  pencil: '<path d="M22 7.24a1 1 0 0 0-.29-.71l-4.24-4.24a1 1 0 0 0-1.1-.22 1 1 0 0 0-.32.22l-2.83 2.83L2.29 16.05a1 1 0 0 0-.29.71V21a1 1 0 0 0 1 1h4.24a1 1 0 0 0 .76-.29l10.87-10.93L21.71 8c.1-.1.17-.2.22-.33a1 1 0 0 0 0-.24v-.14l.07-.05ZM6.83 20H4v-2.83l9.93-9.93 2.83 2.83L6.83 20ZM18.17 8.66l-2.83-2.83 1.42-1.41 2.82 2.82-1.41 1.42Z"/>',
  pen: '<path d="M21 12a1 1 0 0 0-1 1v6a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V5a1 1 0 0 1 1-1h6a1 1 0 1 0 0-2H5a3 3 0 0 0-3 3v14a3 3 0 0 0 3 3h14a3 3 0 0 0 3-3v-6a1 1 0 0 0-1-1Zm-15 .76V17a1 1 0 0 0 1 1h4.24a1 1 0 0 0 .71-.29l6.92-6.93L21.71 8a1 1 0 0 0 0-1.42l-4.24-4.29a1 1 0 0 0-1.42 0l-2.82 2.83-6.94 6.93a1 1 0 0 0-.29.71Zm10.76-8.35 2.83 2.83-1.42 1.42-2.83-2.83 1.42-1.42ZM8 13.17l5.93-5.93 2.83 2.83L10.83 16H8v-2.83Z"/>',
  document: '<path d="M9 10h1a1 1 0 1 0 0-2H9a1 1 0 0 0 0 2Zm0 2a1 1 0 0 0 0 2h6a1 1 0 0 0 0-2H9Zm11-3.06a1.3 1.3 0 0 0-.06-.27v-.09c-.05-.1-.11-.2-.19-.28l-6-6a1.07 1.07 0 0 0-.28-.19h-.09a.88.88 0 0 0-.33-.11H7a3 3 0 0 0-3 3v14a3 3 0 0 0 3 3h10a3 3 0 0 0 3-3V8.94Zm-6-3.53L16.59 8H15a1 1 0 0 1-1-1V5.41ZM18 19a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1V5a1 1 0 0 1 1-1h5v3a3 3 0 0 0 3 3h3v9Zm-3-3H9a1 1 0 0 0 0 2h6a1 1 0 0 0 0-2Z"/>',
  "add-document": '<path d="M20 8.94a1.3 1.3 0 0 0-.06-.27v-.09c-.05-.1-.11-.2-.19-.28l-6-6a1.07 1.07 0 0 0-.28-.19h-.09a.88.88 0 0 0-.33-.11H7a3 3 0 0 0-3 3v14a3 3 0 0 0 3 3h10a3 3 0 0 0 3-3V8.94Zm-6-3.53L16.59 8H15a1 1 0 0 1-1-1V5.41ZM18 19a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1V5a1 1 0 0 1 1-1h5v3a3 3 0 0 0 3 3h3v9Zm-4-5h-1v-1a1 1 0 0 0-2 0v1h-1a1 1 0 0 0 0 2h1v1a1 1 0 0 0 2 0v-1h1a1 1 0 0 0 0-2Z"/>',
  setting: '<path d="m21.32 9.55-1.89-.63.89-1.78A1 1 0 0 0 20.13 6L18 3.87a1 1 0 0 0-1.15-.19l-1.78.89-.63-1.89A1 1 0 0 0 13.5 2h-3a1 1 0 0 0-.95.68l-.63 1.89-1.78-.89A1 1 0 0 0 6 3.87L3.87 6a1 1 0 0 0-.19 1.15l.89 1.78-1.89.63a1 1 0 0 0-.68.94v3a1 1 0 0 0 .68.95l1.89.63-.89 1.78A1 1 0 0 0 3.87 18L6 20.13a1 1 0 0 0 1.15.19l1.78-.89.63 1.89a1 1 0 0 0 .95.68h3a1 1 0 0 0 .95-.68l.63-1.89 1.78.89a1 1 0 0 0 1.13-.19L20.13 18a1 1 0 0 0 .19-1.15l-.89-1.78 1.89-.63a1 1 0 0 0 .68-.94v-3a1 1 0 0 0-.68-.95ZM20 12.78l-1.2.4A2 2 0 0 0 17.64 16l.57 1.14-1.1 1.1-1.11-.6a2 2 0 0 0-2.79 1.16l-.4 1.2h-1.59l-.4-1.2A2 2 0 0 0 8 17.64l-1.14.57-1.1-1.1.6-1.11a2 2 0 0 0-1.16-2.82l-1.2-.4v-1.56l1.2-.4A2 2 0 0 0 6.36 8l-.57-1.11 1.1-1.1L8 6.36a2 2 0 0 0 2.82-1.16l.4-1.2h1.56l.4 1.2A2 2 0 0 0 16 6.36l1.14-.57 1.1 1.1-.6 1.11a2 2 0 0 0 1.16 2.79l1.2.4v1.59ZM12 8a4 4 0 1 0 0 8 4 4 0 0 0 0-8Zm0 6a2 2 0 1 1 0-4 2 2 0 0 1 0 4Z"/>',
  external: '<path d="M19.33 10.18a1 1 0 0 1-.77 0 1 1 0 0 1-.62-.93l.01-1.83-8.2 8.2a1 1 0 0 1-1.41-1.42l8.2-8.2H14.7a1 1 0 0 1 0-2h4.25a1 1 0 0 1 1 1v4.25a1 1 0 0 1-.62.93Z"/><path d="M11 4a1 1 0 1 1 0 2H7a1 1 0 0 0-1 1v10a1 1 0 0 0 1 1h10a1 1 0 0 0 1-1v-4a1 1 0 1 1 2 0v4a3 3 0 0 1-3 3H7a3 3 0 0 1-3-3V7a3 3 0 0 1 3-3h4Z"/>',
  moon: '<path d="M21.64 13a1 1 0 0 0-1.05-.14 8.049 8.049 0 0 1-3.37.73 8.15 8.15 0 0 1-8.14-8.1 8.59 8.59 0 0 1 .25-2A1 1 0 0 0 8 2.36a10.14 10.14 0 1 0 14 11.69 1 1 0 0 0-.36-1.05Zm-9.5 6.69A8.14 8.14 0 0 1 7.08 5.22v.27a10.15 10.15 0 0 0 10.14 10.14 9.784 9.784 0 0 0 2.1-.22 8.11 8.11 0 0 1-7.18 4.32v-.04Z"/>',
  sun: '<path d="M5 12a1 1 0 0 0-1-1H3a1 1 0 0 0 0 2h1a1 1 0 0 0 1-1Zm.64 5-.71.71a1 1 0 0 0 0 1.41 1 1 0 0 0 1.41 0l.71-.71A1 1 0 0 0 5.64 17ZM12 5a1 1 0 0 0 1-1V3a1 1 0 0 0-2 0v1a1 1 0 0 0 1 1Zm5.66 2.34a1 1 0 0 0 .7-.29l.71-.71a1 1 0 1 0-1.41-1.41l-.66.71a1 1 0 0 0 0 1.41 1 1 0 0 0 .66.29Zm-12-.29a1 1 0 0 0 1.41 0 1 1 0 0 0 0-1.41l-.71-.71a1.004 1.004 0 1 0-1.43 1.41l.73.71ZM21 11h-1a1 1 0 0 0 0 2h1a1 1 0 0 0 0-2Zm-2.64 6A1 1 0 0 0 17 18.36l.71.71a1 1 0 0 0 1.41 0 1 1 0 0 0 0-1.41l-.76-.66ZM12 6.5a5.5 5.5 0 1 0 5.5 5.5A5.51 5.51 0 0 0 12 6.5Zm0 9a3.5 3.5 0 1 1 0-7 3.5 3.5 0 0 1 0 7Zm0 3.5a1 1 0 0 0-1 1v1a1 1 0 0 0 2 0v-1a1 1 0 0 0-1-1Z"/>',
  laptop: '<path d="M21 14h-1V7a3 3 0 0 0-3-3H7a3 3 0 0 0-3 3v7H3a1 1 0 0 0-1 1v2a3 3 0 0 0 3 3h14a3 3 0 0 0 3-3v-2a1 1 0 0 0-1-1ZM6 7a1 1 0 0 1 1-1h10a1 1 0 0 1 1 1v7H6V7Zm14 10a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1v-1h16v1Z"/>',
  "open-book": '<path d="M21.17 2.06A13.1 13.1 0 0 0 19 1.87a12.94 12.94 0 0 0-7 2.05 12.94 12.94 0 0 0-7-2 13.1 13.1 0 0 0-2.17.19 1 1 0 0 0-.83 1v12a1 1 0 0 0 1.17 1 10.9 10.9 0 0 1 8.25 1.91l.12.07h.11a.91.91 0 0 0 .7 0h.11l.12-.07A10.899 10.899 0 0 1 20.83 16 1 1 0 0 0 22 15V3a1 1 0 0 0-.83-.94ZM11 15.35a12.87 12.87 0 0 0-6-1.48H4v-10c.333-.02.667-.02 1 0a10.86 10.86 0 0 1 6 1.8v9.68Zm9-1.44h-1a12.87 12.87 0 0 0-6 1.48V5.67a10.86 10.86 0 0 1 6-1.8c.333-.02.667-.02 1 0v10.04Zm1.17 4.15a13.098 13.098 0 0 0-2.17-.19 12.94 12.94 0 0 0-7 2.05 12.94 12.94 0 0 0-7-2.05c-.727.003-1.453.066-2.17.19A1 1 0 0 0 2 19.21a1 1 0 0 0 1.17.79 10.9 10.9 0 0 1 8.25 1.91 1 1 0 0 0 1.16 0A10.9 10.9 0 0 1 20.83 20a1 1 0 0 0 1.17-.79 1 1 0 0 0-.83-1.15Z"/>',
  information: '<path d="M12 11a1 1 0 0 0-1 1v4a1 1 0 0 0 2 0v-4a1 1 0 0 0-1-1Zm.38-3.92a1 1 0 0 0-.76 0 1 1 0 0 0-.33.21 1.15 1.15 0 0 0-.21.33 1 1 0 0 0 .21 1.09c.097.088.209.16.33.21A1 1 0 0 0 13 8a1.05 1.05 0 0 0-.29-.71 1 1 0 0 0-.33-.21ZM12 2a10 10 0 1 0 0 20 10 10 0 0 0 0-20Zm0 18a8 8 0 1 1 0-16.001A8 8 0 0 1 12 20Z"/>',
  magnifier: '<path d="M21.71 20.29 18 16.61A9 9 0 1 0 16.61 18l3.68 3.68a.999.999 0 0 0 1.42 0 1 1 0 0 0 0-1.39ZM11 18a7 7 0 1 1 0-14 7 7 0 0 1 0 14Z"/>',
  "forward-slash": '<path d="M17 2H7a5 5 0 0 0-5 5v10a5 5 0 0 0 5 5h10a5 5 0 0 0 5-5V7a5 5 0 0 0-5-5Zm3 15a3 3 0 0 1-3 3H7a3 3 0 0 1-3-3V7a3 3 0 0 1 3-3h10a3 3 0 0 1 3 3v10Z"/><path d="M15.293 6.707a1 1 0 1 1 1.414 1.414l-8.485 8.486a1 1 0 0 1-1.414-1.415l8.485-8.485Z"/>',
  close: '<path d="m13.41 12 6.3-6.29a1.004 1.004 0 1 0-1.42-1.42L12 10.59l-6.29-6.3a1.004 1.004 0 0 0-1.42 1.42l6.3 6.29-6.3 6.29a1 1 0 0 0 0 1.42.998.998 0 0 0 1.42 0l6.29-6.3 6.29 6.3a.999.999 0 0 0 1.42 0 1 1 0 0 0 0-1.42L13.41 12Z"/>',
  error: '<path d="M12 7a1 1 0 0 0-1 1v4a1 1 0 0 0 2 0V8a1 1 0 0 0-1-1Zm0 8a1 1 0 1 0 0 2 1 1 0 0 0 0-2Zm9.71-7.44-5.27-5.27a1.05 1.05 0 0 0-.71-.29H8.27a1.05 1.05 0 0 0-.71.29L2.29 7.56a1.05 1.05 0 0 0-.29.71v7.46c.004.265.107.518.29.71l5.27 5.27c.192.183.445.286.71.29h7.46a1.05 1.05 0 0 0 .71-.29l5.27-5.27a1.05 1.05 0 0 0 .29-.71V8.27a1.05 1.05 0 0 0-.29-.71ZM20 15.31 15.31 20H8.69L4 15.31V8.69L8.69 4h6.62L20 8.69v6.62Z"/>',
  warning: '<path d="M12 16a1 1 0 1 0 0 2 1 1 0 0 0 0-2Zm10.67 1.47-8.05-14a3 3 0 0 0-5.24 0l-8 14A3 3 0 0 0 3.94 22h16.12a3 3 0 0 0 2.61-4.53Zm-1.73 2a1 1 0 0 1-.88.51H3.94a1 1 0 0 1-.88-.51 1 1 0 0 1 0-1l8-14a1 1 0 0 1 1.78 0l8.05 14a1 1 0 0 1 .05 1.02v-.02ZM12 8a1 1 0 0 0-1 1v4a1 1 0 0 0 2 0V9a1 1 0 0 0-1-1Z"/>',
  "approve-check-circle": '<path d="m14.72 8.79-4.29 4.3-1.65-1.65a1 1 0 1 0-1.41 1.41l2.35 2.36a1 1 0 0 0 1.41 0l5-5a1.002 1.002 0 1 0-1.41-1.42ZM12 2a10 10 0 1 0 0 20 10 10 0 0 0 0-20Zm0 18a8 8 0 1 1 0-16.001A8 8 0 0 1 12 20Z"/>',
  "approve-check": '<path d="M18.71 7.21a1 1 0 0 0-1.42 0l-7.45 7.46-3.13-3.14A1.02 1.02 0 1 0 5.29 13l3.84 3.84a1.001 1.001 0 0 0 1.42 0l8.16-8.16a1 1 0 0 0 0-1.47Z"/>',
  rocket: '<path fill-rule="evenodd" d="M1.44 8.855v-.001l3.527-3.516c.34-.344.802-.541 1.285-.548h6.649l.947-.947c3.07-3.07 6.207-3.072 7.62-2.868a1.821 1.821 0 0 1 1.557 1.557c.204 1.413.203 4.55-2.868 7.62l-.946.946v6.649a1.845 1.845 0 0 1-.549 1.286l-3.516 3.528a1.844 1.844 0 0 1-3.11-.944l-.858-4.275-4.52-4.52-2.31-.463-1.964-.394A1.847 1.847 0 0 1 .98 10.693a1.843 1.843 0 0 1 .46-1.838Zm5.379 2.017-3.873-.776L6.32 6.733h4.638l-4.14 4.14Zm8.403-5.655c2.459-2.46 4.856-2.463 5.89-2.33.134 1.035.13 3.432-2.329 5.891l-6.71 6.71-3.561-3.56 6.71-6.711Zm-1.318 15.837-.776-3.873 4.14-4.14v4.639l-3.364 3.374Z" clip-rule="evenodd"/><path d="M9.318 18.345a.972.972 0 0 0-1.86-.561c-.482 1.435-1.687 2.204-2.934 2.619a8.22 8.22 0 0 1-1.23.302c.062-.365.157-.79.303-1.229.415-1.247 1.184-2.452 2.62-2.935a.971.971 0 1 0-.62-1.842c-.12.04-.236.084-.35.13-2.02.828-3.012 2.588-3.493 4.033a10.383 10.383 0 0 0-.51 2.845l-.001.016v.063c0 .536.434.972.97.972H2.24a7.21 7.21 0 0 0 .878-.065c.527-.063 1.248-.19 2.02-.447 1.445-.48 3.205-1.472 4.033-3.494a5.828 5.828 0 0 0 .147-.407Z"/>',
  star: '<path d="M22 9.67a1 1 0 0 0-.86-.67l-5.69-.83L12.9 3a1 1 0 0 0-1.8 0L8.55 8.16 2.86 9a1 1 0 0 0-.81.68 1 1 0 0 0 .25 1l4.13 4-1 5.68a1 1 0 0 0 1.45 1.07L12 18.76l5.1 2.68c.14.08.3.12.46.12a1 1 0 0 0 .99-1.19l-1-5.68 4.13-4A1 1 0 0 0 22 9.67Zm-6.15 4a1 1 0 0 0-.29.89l.72 4.19-3.76-2a1 1 0 0 0-.94 0l-3.76 2 .72-4.19a1 1 0 0 0-.29-.89l-3-3 4.21-.61a1 1 0 0 0 .76-.55L12 5.7l1.88 3.82a1 1 0 0 0 .76.55l4.21.61-3 2.99Z"/>',
  puzzle: '<path d="M17 22H5a3 3 0 0 1-3-3V9a3 3 0 0 1 3-3h1a4 4 0 0 1 7.3-2.18c.448.64.692 1.4.7 2.18h3a1 1 0 0 1 1 1v3a4 4 0 0 1 2.18 7.3A3.86 3.86 0 0 1 18 18v3a1 1 0 0 1-1 1ZM5 8a1 1 0 0 0-1 1v10a1 1 0 0 0 1 1h11v-3.18a1 1 0 0 1 1.33-.95 1.77 1.77 0 0 0 1.74-.23 2 2 0 0 0 .93-1.37 2 2 0 0 0-.48-1.59 1.89 1.89 0 0 0-2.17-.55 1 1 0 0 1-1.33-.95V8h-3.2a1 1 0 0 1-1-1.33 1.77 1.77 0 0 0-.23-1.74 1.939 1.939 0 0 0-3-.43A2 2 0 0 0 8 6c.002.23.046.456.13.67A1 1 0 0 1 7.18 8H5Z"/>',
  "list-format": '<path d="M3.71 16.29a1 1 0 0 0-.33-.21 1 1 0 0 0-.76 0 1 1 0 0 0-.33.21 1 1 0 0 0-.21.33 1 1 0 0 0 .21 1.09c.097.088.209.16.33.21a.94.94 0 0 0 .76 0 1.15 1.15 0 0 0 .33-.21 1 1 0 0 0 .21-1.09 1 1 0 0 0-.21-.33ZM7 8h14a1 1 0 1 0 0-2H7a1 1 0 0 0 0 2Zm-3.29 3.29a1 1 0 0 0-1.09-.21 1.15 1.15 0 0 0-.33.21 1 1 0 0 0-.21.33.94.94 0 0 0 0 .76c.05.121.122.233.21.33.097.088.209.16.33.21a.94.94 0 0 0 .76 0 1.15 1.15 0 0 0 .33-.21 1.15 1.15 0 0 0 .21-.33.94.94 0 0 0 0-.76 1 1 0 0 0-.21-.33ZM21 11H7a1 1 0 0 0 0 2h14a1 1 0 0 0 0-2ZM3.71 6.29a1 1 0 0 0-.33-.21 1 1 0 0 0-1.09.21 1.15 1.15 0 0 0-.21.33.94.94 0 0 0 0 .76c.05.121.122.233.21.33.097.088.209.16.33.21a1 1 0 0 0 1.09-.21 1.15 1.15 0 0 0 .21-.33.94.94 0 0 0 0-.76 1.15 1.15 0 0 0-.21-.33ZM21 16H7a1 1 0 0 0 0 2h14a1 1 0 0 0 0-2Z"/>',
  random: '<path d="M8.7 10a1 1 0 0 0 1.41 0 1 1 0 0 0 0-1.41l-6.27-6.3a1 1 0 0 0-1.42 1.42ZM21 14a1 1 0 0 0-1 1v3.59L15.44 14A1 1 0 0 0 14 15.44L18.59 20H15a1 1 0 0 0 0 2h6a1 1 0 0 0 .38-.08 1 1 0 0 0 .54-.54A1 1 0 0 0 22 21v-6a1 1 0 0 0-1-1Zm.92-11.38a1 1 0 0 0-.54-.54A1 1 0 0 0 21 2h-6a1 1 0 0 0 0 2h3.59L2.29 20.29a1 1 0 0 0 0 1.42 1 1 0 0 0 1.42 0L20 5.41V9a1 1 0 0 0 2 0V3a1 1 0 0 0-.08-.38Z"/>',
  comment: '<path d="M12 2A10 10 0 0 0 2 12a9.9 9.9 0 0 0 2.3 6.3l-2 2a1 1 0 0 0-.3 1.1 1 1 0 0 0 1 .6h9a10 10 0 0 0 0-20m0 18H5.4l1-1a1 1 0 0 0 0-1.3A8 8 0 1 1 12 20"/>',
  "comment-alt": '<path d="M19 2H5a3 3 0 0 0-3 3v10a3 3 0 0 0 3 3h11.6l3.7 3.7a1 1 0 0 0 .7.3.8.8 0 0 0 .4 0 1 1 0 0 0 .6-1V5a3 3 0 0 0-3-3m1 16.6-2.3-2.3a1 1 0 0 0-.7-.3H5a1 1 0 0 1-1-1V5a1 1 0 0 1 1-1h14a1 1 0 0 1 1 1Z"/>',
  heart: '<path d="M20.16 5A6.29 6.29 0 0 0 12 4.36a6.27 6.27 0 0 0-8.16 9.48l6.21 6.22a2.78 2.78 0 0 0 3.9 0l6.21-6.22a6.27 6.27 0 0 0 0-8.84m-1.41 7.46-6.21 6.21a.76.76 0 0 1-1.08 0l-6.21-6.24a4.29 4.29 0 0 1 0-6 4.27 4.27 0 0 1 6 0 1 1 0 0 0 1.42 0 4.27 4.27 0 0 1 6 0 4.29 4.29 0 0 1 .08 6Z"/>',
  github: '<path d="M12 .3a12 12 0 0 0-3.8 23.38c.6.12.83-.26.83-.57L9 21.07c-3.34.72-4.04-1.61-4.04-1.61-.55-1.39-1.34-1.76-1.34-1.76-1.08-.74.09-.73.09-.73 1.2.09 1.83 1.24 1.83 1.24 1.08 1.83 2.81 1.3 3.5 1 .1-.78.42-1.31.76-1.61-2.67-.3-5.47-1.33-5.47-5.93 0-1.31.47-2.38 1.24-3.22-.14-.3-.54-1.52.1-3.18 0 0 1-.32 3.3 1.23a11.5 11.5 0 0 1 6 0c2.28-1.55 3.29-1.23 3.29-1.23.64 1.66.24 2.88.12 3.18a4.65 4.65 0 0 1 1.23 3.22c0 4.61-2.8 5.63-5.48 5.92.42.36.81 1.1.81 2.22l-.01 3.29c0 .31.2.69.82.57A12 12 0 0 0 12 .3Z"/>',
  gitlab: '<path d="m22.63 9.8-.03-.09-3-7.81a.78.78 0 0 0-.76-.5.8.8 0 0 0-.46.18.8.8 0 0 0-.26.4L16.1 8.17H7.9l-2-6.19a.79.79 0 0 0-1.5-.08l-3 7.81-.02.08a5.56 5.56 0 0 0 1.84 6.43h.01l.03.02 4.56 3.42 2.26 1.7 1.37 1.05a.92.92 0 0 0 1.12 0l1.38-1.04 2.25-1.71 4.6-3.44a5.56 5.56 0 0 0 1.84-6.43Z"/>',
  bitbucket: '<path d="M1 1.5a.8.8 0 0 0-.7.9l3.2 19.3c0 .5.5.8 1 .8h15.2c.4 0 .7-.2.8-.6l3.2-19.5a.7.7 0 0 0-.8-.9H1zm13.4 14H9.6l-1.3-7h7.3l-1.2 7z"/>',
  codePen: '<path d="M23.5 7.5 12.5.2a1 1 0 0 0-1 0L.4 7.5a1 1 0 0 0-.5.8v7.4c0 .3.2.6.5.8l11 7.3c.3.3.7.3 1 0l11-7.3c.3-.2.5-.5.5-.8V8.3a1 1 0 0 0-.5-.8zM13 3l8.1 5.3-3.6 2.5-4.5-3V3zm-2 0v4.8l-4.5 3-3.6-2.5 8-5.3zm-9 7.3L4.7 12l-2.5 1.7v-3.4zM11 21l-8.1-5.3 3.6-2.5 4.5 3V21zm1-6.6L8.4 12 12 9.6l3.6 2.4-3.6 2.4zm1 6.6v-4.8l4.5-3 3.6 2.5-8 5.3zm9-7.3L19.3 12l2.5-1.7v3.4z"/>',
  farcaster: '<path d="M6.187 3.733h11.627v16.533h-1.707v-7.573h-.017a4.107 4.107 0 0 0-8.18 0h-.017v7.573H6.186z"/><path d="m3.093 6.08.693 2.347h.587v9.493a.533.533 0 0 0-.533.533v.64h-.107a.533.533 0 0 0-.533.533v.64h5.973v-.64a.533.533 0 0 0-.533-.533h-.107v-.64A.533.533 0 0 0 8 17.92h-.64V6.08zM16.213 17.92a.533.533 0 0 0-.533.533v.64h-.107a.533.533 0 0 0-.533.533v.64h5.973v-.64a.533.533 0 0 0-.533-.533h-.107v-.64a.533.533 0 0 0-.533-.533V8.427h.587l.693-2.347h-4.267v11.84z"/>',
  discord: '<path d="M20.32 4.37a19.8 19.8 0 0 0-4.93-1.51 13.78 13.78 0 0 0-.64 1.28 18.27 18.27 0 0 0-5.5 0 12.64 12.64 0 0 0-.64-1.28h-.05A19.74 19.74 0 0 0 3.64 4.4 20.26 20.26 0 0 0 .11 18.09l.02.02a19.9 19.9 0 0 0 6.04 3.03l.04-.02a14.24 14.24 0 0 0 1.23-2.03.08.08 0 0 0-.05-.07 13.1 13.1 0 0 1-1.9-.92.08.08 0 0 1 .02-.1 10.2 10.2 0 0 0 .41-.31h.04a14.2 14.2 0 0 0 12.1 0l.04.01a9.63 9.63 0 0 0 .4.32.08.08 0 0 1-.03.1 12.29 12.29 0 0 1-1.9.91.08.08 0 0 0-.02.1 15.97 15.97 0 0 0 1.27 2.01h.04a19.84 19.84 0 0 0 6.03-3.05v-.03a20.12 20.12 0 0 0-3.57-13.69ZM8.02 15.33c-1.18 0-2.16-1.08-2.16-2.42 0-1.33.96-2.42 2.16-2.42 1.21 0 2.18 1.1 2.16 2.42 0 1.34-.96 2.42-2.16 2.42Zm7.97 0c-1.18 0-2.15-1.08-2.15-2.42 0-1.33.95-2.42 2.15-2.42 1.22 0 2.18 1.1 2.16 2.42 0 1.34-.94 2.42-2.16 2.42Z"/>',
  gitter: '<path d="M6.11 15.12H3.75V0h2.36v15.12zm4.71-11.55H8.46V24h2.36V3.57zm4.72 0h-2.36V24h2.36V3.57zm4.71 0h-2.36v11.57h2.36V3.56z"/>',
  twitter: '<path d="M24 4.4a10 10 0 0 1-2.83.78 5.05 5.05 0 0 0 2.17-2.79 9.7 9.7 0 0 1-3.13 1.23 4.89 4.89 0 0 0-5.94-1.03 5 5 0 0 0-2.17 2.38 5.15 5.15 0 0 0-.3 3.25c-1.95-.1-3.86-.63-5.61-1.53a14.04 14.04 0 0 1-4.52-3.74 5.2 5.2 0 0 0-.09 4.91c.39.74.94 1.35 1.61 1.82a4.77 4.77 0 0 1-2.23-.63v.06c0 1.16.4 2.29 1.12 3.18a4.9 4.9 0 0 0 2.84 1.74c-.73.22-1.5.26-2.24.12a4.89 4.89 0 0 0 4.59 3.49A9.78 9.78 0 0 1 0 19.73 13.65 13.65 0 0 0 7.55 22a13.63 13.63 0 0 0 9.96-4.16A14.26 14.26 0 0 0 21.6 7.65V7c.94-.72 1.75-1.6 2.4-2.6Z"/>',
  "x.com": '<path d="M 18.242188 2.25 L 21.554688 2.25 L 14.324219 10.507812 L 22.828125 21.75 L 16.171875 21.75 L 10.953125 14.933594 L 4.992188 21.75 L 1.679688 21.75 L 9.40625 12.914062 L 1.257812 2.25 L 8.082031 2.25 L 12.792969 8.480469 Z M 17.082031 19.773438 L 18.914062 19.773438 L 7.082031 4.125 L 5.113281 4.125 Z M 17.082031 19.773438 "/>',
  mastodon: '<path d="M16.45 17.77c2.77-.33 5.18-2.03 5.49-3.58.47-2.45.44-5.97.44-5.97 0-4.77-3.15-6.17-3.15-6.17-1.58-.72-4.3-1.03-7.13-1.05h-.07c-2.83.02-5.55.33-7.13 1.05 0 0-3.14 1.4-3.14 6.17v.91c-.01.88-.02 1.86 0 2.88.12 4.67.87 9.27 5.2 10.4 2 .53 3.72.64 5.1.57 2.51-.14 3.92-.9 3.92-.9l-.08-1.8s-1.8.56-3.8.5c-2-.08-4.1-.22-4.43-2.66a4.97 4.97 0 0 1-.04-.68s1.96.48 4.44.59c1.51.07 2.94-.09 4.38-.26Zm2.22-3.4h-2.3v-5.6c0-1.19-.5-1.79-1.5-1.79-1.1 0-1.66.71-1.66 2.12v3.07h-2.3V9.1c0-1.4-.55-2.12-1.65-2.12-1 0-1.5.6-1.5 1.78v5.61h-2.3V8.6c0-1.18.3-2.12.9-2.81a3.17 3.17 0 0 1 2.47-1.05c1.18 0 2.07.45 2.66 1.35l.57.96.58-.96a2.97 2.97 0 0 1 2.66-1.35c1.01 0 1.83.36 2.46 1.05.6.7.9 1.63.9 2.81v5.78Z"/>',
  codeberg: '<path d="M12 .5a12 12 0 0 0-12 12 12 12 0 0 0 1.8 6.4l10-13a.2.1 0 0 1 .4 0l10 13a12 12 0 0 0 1.8-6.4 12 12 0 0 0-12-12zm.3 6.5 4.4 16.5a12 12 0 0 0 5.2-4.2z"/>',
  youtube: '<path d="M23.5 6.2A3 3 0 0 0 21.4 4c-1.9-.5-9.4-.5-9.4-.5s-7.5 0-9.4.5A3 3 0 0 0 .5 6.3C0 8 0 12 0 12s0 4 .5 5.8A3 3 0 0 0 2.6 20c1.9.6 9.4.6 9.4.6s7.5 0 9.4-.6a3 3 0 0 0 2.1-2c.5-2 .5-5.9.5-5.9s0-4-.5-5.8zm-14 9.4V8.4l6.3 3.6-6.3 3.6z"/>',
  threads: '<path d="m17.73 11.2-.29-.13c-.17-3.13-1.88-4.92-4.75-4.94h-.04c-1.72 0-3.14.73-4.02 2.06l1.58 1.09a2.8 2.8 0 0 1 2.47-1.21c.94 0 1.66.28 2.12.81.33.4.56.93.67 1.61-.84-.14-1.74-.18-2.71-.13-2.73.16-4.49 1.75-4.37 3.97a3.41 3.41 0 0 0 1.57 2.71c.81.54 1.85.8 2.93.74a4.32 4.32 0 0 0 3.33-1.62 6 6 0 0 0 1.14-2.97 3.5 3.5 0 0 1 1.46 1.6 4 4 0 0 1-.98 4.4c-1.3 1.3-2.86 1.85-5.21 1.87-2.62-.02-4.6-.86-5.88-2.5-1.2-1.52-1.82-3.73-1.85-6.56.03-2.83.65-5.04 1.85-6.57 1.29-1.63 3.26-2.47 5.88-2.49 2.63.02 4.64.86 5.97 2.5.66.8 1.15 1.82 1.48 3l1.85-.5c-.4-1.44-1.02-2.7-1.86-3.73-1.71-2.1-4.21-3.19-7.44-3.21h-.01c-3.22.02-5.7 1.1-7.35 3.22C3.79 6.1 3.03 8.72 3 11.99V12c.03 3.29.79 5.9 2.27 7.78 1.66 2.12 4.13 3.2 7.35 3.22h.01c2.86-.02 4.88-.77 6.54-2.43a5.95 5.95 0 0 0 1.4-6.56 5.62 5.62 0 0 0-2.84-2.81Zm-4.94 4.64c-1.2.07-2.44-.47-2.5-1.62-.05-.85.6-1.8 2.57-1.92l.67-.02c.71 0 1.38.07 1.99.2-.23 2.84-1.56 3.3-2.73 3.36Z"/>',
  linkedin: '<path d="M20.47 2H3.53a1.45 1.45 0 0 0-1.47 1.43v17.14A1.45 1.45 0 0 0 3.53 22h16.94a1.45 1.45 0 0 0 1.47-1.43V3.43A1.45 1.45 0 0 0 20.47 2ZM8.09 18.74h-3v-9h3v9ZM6.59 8.48a1.56 1.56 0 0 1 0-3.12 1.57 1.57 0 1 1 0 3.12Zm12.32 10.26h-3v-4.83c0-1.21-.43-2-1.52-2A1.65 1.65 0 0 0 12.85 13a2 2 0 0 0-.1.73v5h-3v-9h3V11a3 3 0 0 1 2.71-1.5c2 0 3.45 1.29 3.45 4.06v5.18Z"/>',
  twitch: '<path d="M2.5 1 1 4.8v15.4h5.5V23h3.1l3-2.8H17l6-5.7V1H2.6ZM21 13.5l-3.4 3.3H12l-3 2.8v-2.8H4.5V3H21v10.5Zm-3.4-6.8v5.8h-2V6.7h2Zm-5.5 0v5.8h-2V6.7h2Z"/>',
  microsoftTeams: '<path d="M13.78 7.2a3.63 3.63 0 1 0-4.3-3.68h1.78a2.52 2.52 0 0 1 2.52 2.53V7.2zM7.34 18.8h3.92a2.52 2.52 0 0 0 2.52-2.52V8.37h4.17c.58.01 1.04.5 1.03 1.07v6.45a6.3 6.3 0 0 1-6.14 6.43 6.3 6.3 0 0 1-5.5-3.52zm16.1-14.06a2.51 2.51 0 1 1-5.02 0 2.51 2.51 0 0 1 5.02 0zm-3.36 14.24h-.17c.4-1 .59-2.05.57-3.11V9.46c0-.38-.07-.75-.23-1.09h2.69c.58 0 1.06.48 1.06 1.06v5.65a3.9 3.9 0 0 1-3.9 3.9h-.02z"/><path d="M1.02 5.02h10.24c.56 0 1.02.46 1.02 1.03v10.23a1.02 1.02 0 0 1-1.02 1.02H1.02A1.02 1.02 0 0 1 0 16.28V6.04c0-.56.46-1.02 1.02-1.02zm7.81 3.9V7.84H3.45v1.08h2.03v5.57h1.3V8.92h2.05z"/>',
  instagram: '<path d="M17.3 5.5a1.2 1.2 0 1 0 1.2 1.2 1.2 1.2 0 0 0-1.2-1.2ZM22 7.9a7.6 7.6 0 0 0-.4-2.5 5 5 0 0 0-1.2-1.7 4.7 4.7 0 0 0-1.8-1.2 7.3 7.3 0 0 0-2.4-.4L12 2H7.9a7.3 7.3 0 0 0-2.5.5 4.8 4.8 0 0 0-1.7 1.2 4.7 4.7 0 0 0-1.2 1.8 7.3 7.3 0 0 0-.4 2.4L2 12v4.1a7.3 7.3 0 0 0 .5 2.4 4.7 4.7 0 0 0 1.2 1.8 4.8 4.8 0 0 0 1.8 1.2 7.3 7.3 0 0 0 2.4.4l4.1.1h4.1a7.3 7.3 0 0 0 2.4-.5 4.7 4.7 0 0 0 1.8-1.2 4.8 4.8 0 0 0 1.2-1.7 7.6 7.6 0 0 0 .4-2.5L22 12V7.9ZM20.1 16a5.6 5.6 0 0 1-.3 1.9A3 3 0 0 1 19 19a3.2 3.2 0 0 1-1.1.8 5.6 5.6 0 0 1-1.9.3H8a5.7 5.7 0 0 1-1.9-.3A3.3 3.3 0 0 1 5 19a3 3 0 0 1-.7-1.1 5.5 5.5 0 0 1-.4-1.9l-.1-4V8a5.5 5.5 0 0 1 .4-1.9A3 3 0 0 1 5 5a3.1 3.1 0 0 1 1.1-.8A5.7 5.7 0 0 1 8 3.9l4-.1h4a5.6 5.6 0 0 1 1.9.4A3 3 0 0 1 19 5a3 3 0 0 1 .7 1.1A5.6 5.6 0 0 1 20 8l.1 4v4ZM12 6.9a5.1 5.1 0 1 0 5.1 5.1A5.1 5.1 0 0 0 12 6.9Zm0 8.4a3.3 3.3 0 1 1 3.3-3.3 3.3 3.3 0 0 1-3.3 3.3Z"/>',
  stackOverflow: '<path d="M15.72 0 14 1.28l6.4 8.58 1.7-1.26L15.73 0zm-3.94 3.42-1.36 1.64 8.22 6.85 1.37-1.64-8.23-6.85zM8.64 7.88l-.91 1.94 9.7 4.52.9-1.94-9.7-4.52zm-1.86 4.86-.44 2.1 10.48 2.2.44-2.1-10.47-2.2zM1.9 15.47V24h19.19v-8.53h-2.13v6.4H4.02v-6.4H1.9zm4.26 2.13v2.13h10.66V17.6H6.15Z"/>',
  telegram: '<path d="M22.265 2.428a2.048 2.048 0 0 0-2.078-.324L2.266 9.339a2.043 2.043 0 0 0 .104 3.818l3.625 1.261 2.02 6.682a.998.998 0 0 0 .119.252c.008.012.019.02.027.033a.988.988 0 0 0 .211.215.972.972 0 0 0 .07.05.986.986 0 0 0 .31.136l.013.001.006.003a1.022 1.022 0 0 0 .203.02l.018-.003a.993.993 0 0 0 .301-.052c.023-.008.042-.02.064-.03a.993.993 0 0 0 .205-.114 250.76 250.76 0 0 1 .152-.129l2.702-2.983 4.03 3.122a2.023 2.023 0 0 0 1.241.427 2.054 2.054 0 0 0 2.008-1.633l3.263-16.017a2.03 2.03 0 0 0-.693-1.97ZM9.37 14.736a.994.994 0 0 0-.272.506l-.31 1.504-.784-2.593 4.065-2.117Zm8.302 5.304-4.763-3.69a1.001 1.001 0 0 0-1.353.12l-.866.955.306-1.487 7.083-7.083a1 1 0 0 0-1.169-1.593L6.745 12.554 3.02 11.191 20.999 4Z"/>',
  rss: '<path d="M2.88 16.88a3 3 0 0 0 0 4.24 3 3 0 0 0 4.24 0 3 3 0 0 0-4.24-4.24Zm2.83 2.83a1 1 0 0 1-1.42-1.42 1 1 0 0 1 1.42 0 1 1 0 0 1 0 1.42ZM5 12a1 1 0 0 0 0 2 5 5 0 0 1 5 5 1 1 0 0 0 2 0 7 7 0 0 0-7-7Zm0-4a1 1 0 0 0 0 2 9 9 0 0 1 9 9 1 1 0 0 0 2 0 11.08 11.08 0 0 0-3.22-7.78A11.08 11.08 0 0 0 5 8Zm10.61.39A15.11 15.11 0 0 0 5 4a1 1 0 0 0 0 2 13 13 0 0 1 13 13 1 1 0 0 0 2 0 15.11 15.11 0 0 0-4.39-10.61Z"/>',
  facebook: '<path d="M20.9 2H3.1A1.1 1.1 0 0 0 2 3.1v17.8A1.1 1.1 0 0 0 3.1 22h9.58v-7.75h-2.6v-3h2.6V9a3.64 3.64 0 0 1 3.88-4 20.26 20.26 0 0 1 2.33.12v2.7H17.3c-1.26 0-1.5.6-1.5 1.47v1.93h3l-.39 3H15.8V22h5.1a1.1 1.1 0 0 0 1.1-1.1V3.1A1.1 1.1 0 0 0 20.9 2Z"/>',
  email: '<path d="M19 4H5a3 3 0 0 0-3 3v10a3 3 0 0 0 3 3h14a3 3 0 0 0 3-3V7a3 3 0 0 0-3-3Zm-.41 2-5.88 5.88a1 1 0 0 1-1.42 0L5.41 6ZM20 17a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V7.41l5.88 5.88a3 3 0 0 0 4.24 0L20 7.41Z"/>',
  reddit: '<path d="M14.41 16.87a3.38 3.38 0 0 1-2.37.63 3.37 3.37 0 0 1-2.36-.63 1 1 0 0 0-1.42 1.41 5.11 5.11 0 0 0 3.78 1.22 5.12 5.12 0 0 0 3.78-1.22 1 1 0 1 0-1.41-1.41ZM9.2 15a1 1 0 1 0-1-1 1 1 0 0 0 1 1Zm6-2a1 1 0 1 0 1 1 1 1 0 0 0-1-1Zm7.8-1.22a3.77 3.77 0 0 0-6.8-2.26 16.5 16.5 0 0 0-3.04-.48l.85-5.7 2.09.7a3 3 0 0 0 6-.06v-.02a3.03 3.03 0 0 0-3-2.96 2.98 2.98 0 0 0-2.34 1.16l-3.24-1.1a1 1 0 0 0-1.3.8l-1.09 7.17a16.66 16.66 0 0 0-3.34.49 3.77 3.77 0 0 0-6.22 4.23A4.86 4.86 0 0 0 1 16c0 3.92 4.83 7 11 7s11-3.08 11-7a4.86 4.86 0 0 0-.57-2.25 3.78 3.78 0 0 0 .57-1.97ZM19.1 3a1 1 0 1 1-1 1 1.02 1.02 0 0 1 1-1ZM4.77 10a1.76 1.76 0 0 1 .88.25A9.98 9.98 0 0 0 3 11.92v-.14A1.78 1.78 0 0 1 4.78 10ZM12 21c-4.88 0-9-2.29-9-5s4.12-5 9-5 9 2.29 9 5-4.12 5-9 5Zm8.99-9.08a9.98 9.98 0 0 0-2.65-1.67 1.76 1.76 0 0 1 .88-.25A1.78 1.78 0 0 1 21 11.78l-.01.14Z"/>',
  patreon: '<path d="M22.04 7.6c0-2.8-2.19-5.1-4.75-5.93a15.19 15.19 0 0 0-10.44.55C3.16 3.96 2 7.78 1.95 11.58c-.02 3.12.3 11.36 4.94 11.42 3.45.04 3.97-4.4 5.56-6.55 1.14-1.52 2.6-1.95 4.4-2.4 3.1-.76 5.2-3.2 5.2-6.44Z"/>',
  signal: '<path d="m9.12.35.27 1.09a10.9 10.9 0 0 0-3.015 1.248l-.578-.964A12 12 0 0 1 9.12.35m5.76 0-.27 1.09a10.9 10.9 0 0 1 3.015 1.248l.581-.964A12 12 0 0 0 14.88.35M1.725 5.797A12 12 0 0 0 .351 9.119l1.09.27A10.9 10.9 0 0 1 2.69 6.374zm-.6 6.202a11 11 0 0 1 .122-1.63l-1.112-.168a12 12 0 0 0 0 3.596l1.112-.169A11 11 0 0 1 1.125 12zm17.078 10.275-.578-.964a10.9 10.9 0 0 1-3.011 1.247l.27 1.091a12 12 0 0 0 3.319-1.374M22.875 12a11 11 0 0 1-.122 1.63l1.112.168a12 12 0 0 0 0-3.596l-1.112.169a11 11 0 0 1 .122 1.63zm.774 2.88-1.09-.27a10.9 10.9 0 0 1-1.248 3.015l.964.581a12 12 0 0 0 1.374-3.326m-10.02 7.875a11 11 0 0 1-3.258 0l-.17 1.112a12 12 0 0 0 3.597 0zm7.125-4.303a11 11 0 0 1-2.304 2.302l.668.906a12 12 0 0 0 2.542-2.535zM18.45 3.245a11 11 0 0 1 2.304 2.304l.906-.675a12 12 0 0 0-2.535-2.535zM3.246 5.549A11 11 0 0 1 5.55 3.245l-.675-.906A12 12 0 0 0 2.34 4.874zm19.029.248-.964.577a10.9 10.9 0 0 1 1.247 3.011l1.091-.27a12 12 0 0 0-1.374-3.318M10.371 1.246a11 11 0 0 1 3.258 0L13.8.134a12 12 0 0 0-3.597 0zM3.823 21.957 1.5 22.5l.542-2.323-1.095-.257-.542 2.323a1.125 1.125 0 0 0 1.352 1.352l2.321-.532zm-2.642-3.041 1.095.255.375-1.61a10.8 10.8 0 0 1-1.21-2.952l-1.09.27a12 12 0 0 0 1.106 2.852zm5.25 2.437-1.61.375.255 1.095 1.185-.275a12 12 0 0 0 2.851 1.106l.27-1.091a10.8 10.8 0 0 1-2.943-1.217zM12 2.25a9.75 9.75 0 0 0-8.25 14.938l-.938 4 4-.938A9.75 9.75 0 1 0 12 2.25"/>',
  slack: '<path d="M5.042 15.165a2.528 2.528 0 0 1-2.52 2.523A2.528 2.528 0 0 1 0 15.165a2.527 2.527 0 0 1 2.522-2.52h2.52v2.52Zm1.271 0a2.527 2.527 0 0 1 2.521-2.52 2.527 2.527 0 0 1 2.521 2.52v6.313A2.528 2.528 0 0 1 8.834 24a2.528 2.528 0 0 1-2.521-2.522v-6.313ZM8.834 5.042a2.528 2.528 0 0 1-2.521-2.52A2.528 2.528 0 0 1 8.834 0a2.528 2.528 0 0 1 2.521 2.522v2.52H8.834Zm0 1.271a2.528 2.528 0 0 1 2.521 2.521 2.528 2.528 0 0 1-2.521 2.521H2.522A2.528 2.528 0 0 1 0 8.834a2.528 2.528 0 0 1 2.522-2.521h6.312Zm10.122 2.521a2.528 2.528 0 0 1 2.522-2.521A2.528 2.528 0 0 1 24 8.834a2.528 2.528 0 0 1-2.522 2.521h-2.522V8.834Zm-1.268 0a2.528 2.528 0 0 1-2.523 2.521 2.527 2.527 0 0 1-2.52-2.521V2.522A2.527 2.527 0 0 1 15.165 0a2.528 2.528 0 0 1 2.523 2.522v6.312Zm-2.523 10.122a2.528 2.528 0 0 1 2.523 2.522A2.528 2.528 0 0 1 15.165 24a2.527 2.527 0 0 1-2.52-2.522v-2.522h2.52Zm0-1.268a2.527 2.527 0 0 1-2.52-2.523 2.526 2.526 0 0 1 2.52-2.52h6.313A2.527 2.527 0 0 1 24 15.165a2.528 2.528 0 0 1-2.522 2.523h-6.313Z"/>',
  matrix: '<path d="M22.5 1.5v21h-2.25V24H24V0h-3.75v1.5h2.25ZM7.46 7.95V9.1h.04a3.02 3.02 0 0 1 2.61-1.39c.54 0 1.03.1 1.48.32.44.2.78.58 1.01 1.1.26-.37.6-.7 1.03-.99.44-.28.95-.43 1.55-.43.45 0 .87.06 1.26.17.38.11.71.29.99.53.27.24.49.56.64.95.15.4.23.86.23 1.42v5.72h-2.34v-4.85c0-.29-.01-.56-.04-.8a1.73 1.73 0 0 0-.18-.67 1.1 1.1 0 0 0-.44-.45 1.6 1.6 0 0 0-.78-.16c-.33 0-.6.06-.8.19-.2.12-.37.29-.48.5a2 2 0 0 0-.23.69c-.04.26-.06.52-.06.78v4.77H10.6v-4.8l-.01-.75a2.29 2.29 0 0 0-.14-.69c-.08-.2-.23-.38-.42-.5a1.5 1.5 0 0 0-.85-.2c-.15.01-.3.04-.44.08-.19.06-.37.15-.52.28-.18.14-.32.34-.44.6-.12.26-.18.6-.18 1.02v4.96H5.25V7.94h2.21ZM1.5 1.5v21h2.25V24H0V0h3.75v1.5H1.5Z"/>',
  hackerOne: '<path d="M7.2 0Q6.5 0 6 .3a1 1 0 0 0-.4.8v21.8q0 .4.4.7.5.4 1.2.4t1.2-.3q.5-.4.5-.8V1c0-.3-.2-.6-.5-.8Q7.9 0 7.2 0m9.5 8.7q-.7 0-1.1.3L11 11.7c-.2.2-.3.5-.2.9q0 .6.5 1c.3.4.7.7 1 .7q.7.2 1-.1l1.7-1v9.7q0 .4.5.7c.3.3.7.4 1.1.4q.7 0 1.2-.3c.4-.3.5-.5.5-.8V9.7q0-.4-.5-.7-.4-.3-1.2-.3"/>',
  openCollective: '<path d="M21.86 5.17a11.94 11.94 0 0 1 0 13.66l-3.1-3.1a7.68 7.68 0 0 0 0-7.46l3.1-3.1Zm-3.03-3.03-3.1 3.1a7.71 7.71 0 1 0 0 13.51l3.1 3.11a12 12 0 1 1 0-19.73Z"/><path d="M21.86 5.17a11.94 11.94 0 0 1 0 13.66l-3.1-3.1a7.68 7.68 0 0 0 0-7.46l3.1-3.1Z"/>',
  blueSky: '<path d="M12 10.8c-1-2.1-4-6-6.8-8C2.6 1 1.6 1.3.9 1.6.1 1.9 0 3 0 3.8c0 .7.4 5.6.6 6.4C1.4 13 4.3 14 7 13.6h.4H7c-4 .6-7.4 2-2.8 7 5 5.3 6.8-1 7.8-4.2 1 3.2 2 9.3 7.7 4.3 4.3-4.3 1.2-6.5-2.7-7a9 9 0 0 1-.4-.1h.4c2.7.3 5.6-.6 6.4-3.4.2-.8.6-5.7.6-6.4 0-.7-.1-1.9-.9-2.2-.7-.3-1.7-.7-4.3 1.2-2.8 2-5.7 5.9-6.8 8"/>',
  discourse: '<path d="M12.102 0h-.081C5.462 0 .13 5.252.001 11.779v.012L.007 24l12.097-.01c6.582-.055 11.897-5.404 11.897-11.995S18.686.056 12.109 0h-.005zM12 18.857h-.015a6.778 6.778 0 0 1-2.94-.666l.041.018-4.345 1.077 1.227-4.018a6.78 6.78 0 0 1-.83-3.27A6.86 6.86 0 1 1 12 18.857z"/>',
  zulip: '<path d="M21 19c0 1.7-1.2 3-2.7 3H5.7C4.2 22 3 20.7 3 19a3 3 0 0 1 1.2-2.4l6.7-6c0-.1.3 0 .2.2l-2.5 5s0 .2.2.2h9.5c1.5 0 2.7 1.4 2.7 3Zm0-14a3 3 0 0 1-1.2 2.4l-6.7 6c0 .1-.2 0-.2-.2l2.5-5s0-.2-.2-.2H5.7C4.2 8 3 6.6 3 5c0-1.7 1.2-3 2.7-3h12.6C19.8 2 21 3.3 21 5Z"/>',
  astro: '<path d="M7.233 15.856c-.456 1.5-.132 3.586.948 4.57v-.036l.036-.096c.132-.636.648-1.032 1.309-1.008.612.012.96.336 1.044 1.044.036.264.036.528.048.803v.084c0 .6.168 1.176.504 1.68.3.48.72.851 1.284 1.103l-.024-.048-.024-.096c-.42-1.26-.12-2.135.984-2.879l.336-.227.745-.492a3.647 3.647 0 0 0 1.536-2.603c.06-.456 0-.9-.132-1.331l-.18.12c-1.668.887-3.577 1.2-5.425.84-1.117-.169-2.197-.48-3-1.416l.011-.012ZM2 15.592s3.205-1.559 6.421-1.559l2.437-7.508c.084-.36.348-.6.648-.6.3 0 .552.24.648.612l2.425 7.496c3.816 0 6.421 1.56 6.421 1.56L15.539.72c-.144-.444-.42-.72-.768-.72H8.24c-.348 0-.6.276-.768.72L2 15.592Z"/>',
  alpine: '<path d="m18.7 6 5.3 5.3-5.3 5.3-5.4-5.3L18.7 6zM5.3 6l11 11H5.8L0 11.2 5.3 6z"/>',
  pnpm: '<path d="M0 0v7.5h7.5V0H0Zm8.25 0v7.5h7.498V0H8.25Zm8.25 0v7.5H24V0h-7.5ZM8.25 8.25v7.5h7.498v-7.5H8.25Zm8.25 0v7.5H24v-7.5h-7.5ZM0 16.5V24h7.5v-7.5H0Zm8.25 0V24h7.498v-7.5H8.25Zm8.25 0V24H24v-7.5h-7.5Z"/>',
  biome: '<path d="m12 2-5.346 9.259a12.065 12.065 0 0 1 6.326-.22l1.807.427-1.7 7.208-1.81-.427c-2.223-.524-4.36.644-5.263 2.507l-1.672-.809c1.276-2.636 4.284-4.232 7.363-3.505l.848-3.593A10.213 10.213 0 0 0 0 22.785h24L12 2Z"/>',
  bun: '<path d="M11.966 22.132c6.609 0 11.966-4.326 11.966-9.661 0-3.308-2.051-6.23-5.204-7.963-1.283-.713-2.291-1.353-3.13-1.885C14.018 1.619 13.043 1 11.966 1c-1.094 0-2.327.783-3.955 1.816a49.78 49.78 0 0 1-2.808 1.692C2.051 6.241 0 9.163 0 12.471c0 5.335 5.357 9.661 11.966 9.661Zm-1.397-17.83a5.885 5.885 0 0 0 .497-2.403c0-.144.201-.186.229-.028.656 2.775-.9 4.15-2.051 4.61-.124.048-.199-.12-.103-.208a5.747 5.747 0 0 0 1.428-1.971Zm2.052-.102a5.795 5.795 0 0 0-.78-2.3v-.015c-.068-.123.086-.263.185-.172 1.956 2.105 1.303 4.055.554 5.037-.082.102-.229-.003-.188-.126a5.837 5.837 0 0 0 .229-2.424Zm1.771-.559a5.709 5.709 0 0 0-1.607-1.801v-.014c-.112-.085-.024-.274.113-.218 2.588 1.084 2.766 3.171 2.452 4.395a.116.116 0 0 1-.13.09.11.11 0 0 1-.071-.045.118.118 0 0 1-.022-.083 5.863 5.863 0 0 0-.735-2.324ZM9.32 4.2c-.616.544-1.279.758-2.058.997-.116 0-.194-.078-.155-.18 1.747-.907 2.369-1.645 2.99-2.771 0 0 .155-.117.188.085 0 .303-.348 1.325-.965 1.869Zm4.931 11.205a2.95 2.95 0 0 1-.935 1.549 2.16 2.16 0 0 1-1.282.618 2.167 2.167 0 0 1-1.323-.618 2.95 2.95 0 0 1-.923-1.549.243.243 0 0 1 .064-.197.23.23 0 0 1 .192-.069h3.954a.227.227 0 0 1 .244.16c.01.035.014.07.009.106Zm-5.443-2.17a1.85 1.85 0 0 1-2.377-.244 1.969 1.969 0 0 1-.233-2.44c.207-.318.502-.565.846-.711a1.84 1.84 0 0 1 2.053.42c.264.27.443.616.515.99a1.98 1.98 0 0 1-.108 1.118c-.142.35-.384.653-.696.867Zm8.471.005a1.85 1.85 0 0 1-2.374-.252 1.956 1.956 0 0 1-.546-1.362c0-.383.11-.758.319-1.076.207-.318.502-.566.847-.711a1.84 1.84 0 0 1 1.09-.108c.366.076.702.261.965.533s.44.617.512.993a1.98 1.98 0 0 1-.113 1.118 1.922 1.922 0 0 1-.7.865Z"/>',
  mdx: '<path d="m15.494 12.406-3.169 3.169-3.25-3.169.894-.894 1.706 1.707V8.588h1.219V13.3l1.706-1.706.894.812Zm-13.65-.65 2.193 2.194 2.276-2.194v3.575H7.53v-6.58l-3.494 3.493L.625 8.75v6.581h1.219v-3.575ZM22.4 15.25l-2.519-2.519-2.518 2.519-.813-.894 2.519-2.518-2.6-2.6.893-.813 2.52 2.6 2.6-2.6.893.813-2.6 2.6 2.519 2.518-.894.894Z"/>',
  apple: '<path d="M14.94 5.19A4.38 4.38 0 0 0 16 2a4.44 4.44 0 0 0-3 1.52 4.17 4.17 0 0 0-1 3.09 3.69 3.69 0 0 0 2.94-1.42Zm2.52 7.44a4.51 4.51 0 0 1 2.16-3.81 4.66 4.66 0 0 0-3.66-2c-1.56-.16-3 .91-3.83.91s-2-.89-3.3-.87a4.92 4.92 0 0 0-4.14 2.53C2.93 12.45 4.24 17 6 19.47c.8 1.21 1.8 2.58 3.12 2.53s1.75-.82 3.28-.82 2 .82 3.3.79 2.22-1.24 3.06-2.45a11 11 0 0 0 1.38-2.85 4.41 4.41 0 0 1-2.68-4.04Z"/>',
  linux: '<path d="M19.7 17.6c-.1-.2-.2-.4-.2-.6 0-.4-.2-.7-.5-1-.1-.1-.3-.2-.4-.2.6-1.8-.3-3.6-1.3-4.9-.8-1.2-2-2.1-1.9-3.7 0-1.9.2-5.4-3.3-5.1-3.6.2-2.6 3.9-2.7 5.2 0 1.1-.5 2.2-1.3 3.1-.2.2-.4.5-.5.7-1 1.2-1.5 2.8-1.5 4.3-.2.2-.4.4-.5.6-.1.1-.2.2-.2.3-.1.1-.3.2-.5.3-.4.1-.7.3-.9.7-.1.3-.2.7-.1 1.1.1.2.1.4 0 .7-.2.4-.2.9 0 1.4.3.4.8.5 1.5.6.5 0 1.1.2 1.6.4.5.3 1.1.5 1.7.5.3 0 .7-.1 1-.2.3-.2.5-.4.6-.7.4 0 1-.2 1.7-.2.6 0 1.2.2 2 .1 0 .1 0 .2.1.3.2.5.7.9 1.3 1h.2c.8-.1 1.6-.5 2.1-1.1.4-.4.9-.7 1.4-.9.6-.3 1-.5 1.1-1 .1-.7-.1-1.1-.5-1.7zM12.8 4.8c.6.1 1.1.6 1 1.2 0 .3-.1.6-.3.9h-.1c-.2-.1-.3-.1-.4-.2.1-.1.1-.3.2-.5 0-.4-.2-.7-.4-.7-.3 0-.5.3-.5.7v.1c-.1-.1-.3-.1-.4-.2V6c-.1-.5.3-1.1.9-1.2zm-.3 2c.1.1.3.2.4.2.1 0 .3.1.4.2.2.1.4.2.4.5s-.3.6-.9.8c-.2.1-.3.1-.4.2-.3.2-.6.3-1 .3-.3 0-.6-.2-.8-.4-.1-.1-.2-.2-.4-.3-.1-.1-.3-.3-.4-.6 0-.1.1-.2.2-.3.3-.2.4-.3.5-.4l.1-.1c.2-.3.6-.5 1-.5.3.1.6.2.9.4zM10.4 5c.4 0 .7.4.8 1.1v.2c-.1 0-.3.1-.4.2v-.2c0-.3-.2-.6-.4-.5-.2 0-.3.3-.3.6 0 .2.1.3.2.4 0 0-.1.1-.2.1-.2-.2-.4-.5-.4-.8 0-.6.3-1.1.7-1.1zm-1 16.1c-.7.3-1.6.2-2.2-.2-.6-.3-1.1-.4-1.8-.4-.5-.1-1-.1-1.1-.3-.1-.2-.1-.5.1-1 .1-.3.1-.6 0-.9-.1-.3-.1-.5 0-.8.1-.3.3-.4.6-.5.3-.1.5-.2.7-.4.1-.1.2-.2.3-.4.3-.4.5-.6.8-.6.6.1 1.1 1 1.5 1.9.2.3.4.7.7 1 .4.5.9 1.2.9 1.6 0 .5-.2.8-.5 1zm4.9-2.2c0 .1 0 .1-.1.2-1.2.9-2.8 1-4.1.3l-.6-.9c.9-.1.7-1.3-1.2-2.5-2-1.3-.6-3.7.1-4.8.1-.1.1 0-.3.8-.3.6-.9 2.1-.1 3.2 0-.8.2-1.6.5-2.4.7-1.3 1.2-2.8 1.5-4.3.1.1.1.1.2.1.1.1.2.2.3.2.2.3.6.4.9.4h.1c.4 0 .8-.1 1.1-.4.1-.1.2-.2.4-.2.3-.1.6-.3.9-.6.4 1.3.8 2.5 1.4 3.6.4.8.7 1.6.9 2.5.3 0 .7.1 1 .3.8.4 1.1.7 1 1.2H18c0-.3-.2-.6-.9-.9-.7-.3-1.3-.3-1.5.4-.1 0-.2.1-.3.1-.8.4-.8 1.5-.9 2.6.1.4 0 .7-.1 1.1zm4.6.6c-.6.2-1.1.6-1.5 1.1-.4.6-1.1 1-1.9.9-.4 0-.8-.3-.9-.7-.1-.6-.1-1.2.2-1.8.1-.4.2-.7.3-1.1.1-1.2.1-1.9.6-2.2 0 .5.3.8.7 1 .5 0 1-.1 1.4-.5h.2c.3 0 .5 0 .7.2.2.2.3.5.3.7 0 .3.2.6.3.9.5.5.5.8.5.9-.1.2-.5.4-.9.6zm-9-12c-.1 0-.1 0-.1.1 0 0 0 .1.1.1s.1.1.1.1c.3.4.8.6 1.4.7.5-.1 1-.2 1.5-.6l.6-.3c.1 0 .1-.1.1-.1 0-.1 0-.1-.1-.1-.2.1-.5.2-.7.3-.4.3-.9.5-1.4.5-.5 0-.9-.3-1.2-.6-.1 0-.2-.1-.3-.1z"/>',
  homebrew: '<path d="M7.94 0a.21.21 0 0 0-.2.16c-.32 1.1.17 2.15.83 2.93.15.18.31.35.48.5a2.04 2.04 0 0 0-.67.02c-1.18.24-2.2.99-2.74 2.53a3.9 3.9 0 0 0-.2 1.47 1.56 1.56 0 0 0-1.16 1.5 1.59 1.59 0 0 0 1.23 1.55l.03 12.04c0 .2.1.38.26.48a.21.21 0 0 0 .01 0c.54.32 2.05.82 5.21.82 3.24 0 4.7-.68 5.18-1.04a.57.57 0 0 0 .22-.45v-1.6a.14.14 0 0 1 .14-.14h1.32a1.83 1.83 0 0 0 1.83-1.82v-5.8a1.83 1.83 0 0 0-1.82-1.83h-1.33a.14.14 0 0 1-.14-.15v-.57a1.57 1.57 0 0 0 1.36-1.56c0-.81-.63-1.49-1.42-1.56a4.34 4.34 0 0 0-.74-2.58 3.1 3.1 0 0 0-2.28-1.32c-.5-.02-.84.12-1.13.25-.21.1-.42.18-.67.22 0-1.28.95-1.98.95-1.98a.21.21 0 0 0 .05-.3s-.09-.12-.21-.26c-.12-.13-.27-.3-.47-.38a.21.21 0 0 0-.08-.01.21.21 0 0 0-.14.05 4.3 4.3 0 0 0-.88 1.1 3.42 3.42 0 0 0-.13.28 3.5 3.5 0 0 0-.38-.85A4.44 4.44 0 0 0 8.02.02.21.21 0 0 0 7.94 0zm.15.52c.85.38 1.43.83 1.8 1.4.27.45.42.97.48 1.6a3.07 3.07 0 0 0-.01.45 6.9 6.9 0 0 1-.17-.05 5.49 5.49 0 0 1-1.3-1.1c-.54-.66-.93-1.46-.8-2.3m3.71 1.1c.07.05.14.1.21.18l.06.07a2.97 2.97 0 0 0-.95 2.45.21.21 0 0 0 .22.2c.47-.02.78-.17 1.06-.3.27-.13.5-.23.93-.21.87.02 1.64.71 1.94 1.13.3.45.65 1 .66 2.36a1.66 1.66 0 0 0-.41.14 1.94 1.94 0 0 0-1.77-1.16 1.94 1.94 0 0 0-1.87 1.45 1.78 1.78 0 0 0-1.36-.64c-.48 0-.9.2-1.23.52a1.87 1.87 0 0 0-1.85-1.63c-.65 0-1.22.34-1.55.84a3.1 3.1 0 0 1 .16-.73c.5-1.44 1.35-2.05 2.42-2.26.36-.07.66 0 .99.1.32.1.67.26 1.09.34a.21.21 0 0 0 .25-.25c-.11-.67.07-1.26.34-1.74a3.71 3.71 0 0 1 .66-.86m-4.36 5A1.44 1.44 0 0 1 8.8 8.53a.21.21 0 0 0 .17.28.21.21 0 0 0 .24-.15 1.37 1.37 0 0 1 2.62 0 .21.21 0 0 0 .41-.1 1.5 1.5 0 0 1 1.5-1.66c.69 0 1.26.44 1.45 1.05a.21.21 0 0 0 .26.15l.15-.04a.21.21 0 0 0 .05-.02 1.14 1.14 0 0 1 1.7 1 1.14 1.14 0 0 1-.98 1.12 2.21 2.21 0 0 0-.49.13 10.65 10.65 0 0 1-1.18.36.21.21 0 0 0-.16.2 1.28 1.28 0 0 1-.14.47 2.07 2.07 0 0 0-.24 1.11v.15a.44.44 0 0 1-.16.36.67.67 0 0 1-.43.14.59.59 0 0 1-.59-.59.8.8 0 0 0-.38-.68 1.28 1.28 0 0 1-.53-.64.21.21 0 0 0-.21-.14 19.47 19.47 0 0 1-5.37-.6 9 9 0 0 0-.84-.2 1.16 1.16 0 0 1-.94-1.13c0-.62.5-1.11 1.1-1.14a.21.21 0 0 0 .21-.17A1.44 1.44 0 0 1 7.44 6.6m8.55 4.1v.46c0 .32.26.57.57.57h1.33a1.4 1.4 0 0 1 1.4 1.4v5.8a1.4 1.4 0 0 1-1.4 1.4h-1.32a.57.57 0 0 0-.58.57v1.6c0 .05-.02.08-.05.11-.35.26-1.75.95-4.92.95-3.1 0-4.59-.52-4.99-.75a.14.14 0 0 1-.06-.12l-.03-11.95.43.1.39.1v10.37c0 .13.07.25.18.31.45.22 1.77.74 4.07.74 2.32 0 3.6-.63 4.02-.89a.36.36 0 0 0 .17-.3v-10.2l.79-.26m-8 .9a.5.5 0 0 1 .5.48v8.58a.5.5 0 0 1-.49.5.5.5 0 0 1-.5-.5V12.1a.5.5 0 0 1 .5-.49zm8.66 1.13a.66.66 0 0 0-.66.66v5.21a.66.66 0 0 0 .66.66h1.14a.66.66 0 0 0 .66-.66v-5.2a.66.66 0 0 0-.66-.67zm0 .43h1.14a.23.23 0 0 1 .23.23v5.21a.23.23 0 0 1-.23.23h-1.14a.23.23 0 0 1-.23-.23v-5.2a.23.23 0 0 1 .23-.24"/>',
  nix: '<path d="M7.4 1.6H6l-.7 1.1L7 5.5H3.7L2.4 7.8h11.7l-1.3-2.3H9.6l-2.2-4zm6.1 0h-2.7l5.9 10.1L18 9.4l-1.6-2.8 2.3-3.8-.7-1.2h-1.3L15 4.3l-1.6-2.7zm7 4.2-6 10.1h2.8l1.6-2.8h4.4L24 12l-.7-1.2h-3.1l1.6-2.7-1.4-2.3zM9.4 8H6.6L5 10.8H.7L0 12l.7 1.2h3.1l-1.6 2.7 1.4 2.3zm-2.2 4.2L6 14.6l1.6 2.8-2.3 3.8.7 1.2h1.3L9 19.7l1.6 2.7h2.7zm2.6 3.9 1.3 2.3h3.2l2.2 3.9H18l.7-1.2-1.6-2.7h3.2l1.3-2.3z"/>',
  starlight: '<path fill-rule="evenodd" d="M15.19 6.75 12 0 8.81 6.75l-.19.38-1.68-1.88a1.2 1.2 0 1 0-1.69 1.69L7.13 8.8h-.38L0 12l6.75 3.19h.38l-1.88 1.87a1.2 1.2 0 1 0 1.69 1.69l1.68-1.88.2.38L12 24l3.19-6.75v-.38l1.69 1.88a1.2 1.2 0 1 0 1.68-1.69l-1.68-1.68.37-.2L24 12l-6.75-3.19-.38-.19 1.7-1.68a1.2 1.2 0 1 0-1.7-1.69L15.2 7.13v-.38ZM12 7.13l-.38.93a8.18 8.18 0 0 1-3.56 3.56l-.94.38.94.38a8.18 8.18 0 0 1 3.56 3.56l.38.94.38-.94a8.18 8.18 0 0 1 3.56-3.56l.94-.38-.94-.38a8.18 8.18 0 0 1-3.56-3.56L12 7.12Z"/><path d="M22.12 3.56a1.2 1.2 0 1 0-1.68-1.69l-.57.57a1.2 1.2 0 0 0 1.7 1.68l.55-.56Zm-18 .75c-.37.38-1.12.38-1.68 0l-.57-.56a1.2 1.2 0 0 1 1.7-1.69l.55.56c.57.38.57 1.13 0 1.7Zm0 15.38c-.37-.38-1.12-.38-1.68 0l-.57.56a1.2 1.2 0 1 0 1.7 1.69l.55-.57c.57-.37.57-1.12 0-1.68Zm18 .75a1.2 1.2 0 1 1-1.68 1.68l-.57-.56a1.2 1.2 0 0 1 1.7-1.69l.55.57Z"/>',
  pkl: '<path fill-rule="evenodd" d="M18.7 1.8 18 5a9 9 0 0 1 2 2.4l3.2.2c.4 1 .6 2 .7 3.1L21 12.2a9 9 0 0 1-.7 3l1.9 2.7c-.6 1-1.2 1.7-2 2.5l-3-1.3c-.9.6-1.9 1-2.9 1.4l-.9 3c-1 .2-2.1.2-3.2 0l-.8-3c-1-.4-2-.8-2.9-1.5l-3 1.3a12 12 0 0 1-2-2.5l2-2.6a9 9 0 0 1-.8-3L0 10.5c.1-1.1.3-2.1.7-3.1L4 7.3A9 9 0 0 1 6 5l-.6-3.2c1-.6 2-1 3-1.3l2 2.4c1.1-.2 2.2-.2 3.2 0L15.8.4c1 .3 2 .8 2.9 1.4Zm1 9.8c0 4.2-3.3 7.5-7.5 7.5a7.5 7.5 0 0 1-7.6-7.5c0-4.1 3.4-7.5 7.6-7.5 4.2 0 7.6 3.4 7.6 7.5Z"></path><path fill-opacity=".5" d="M11.4 10.8c-6.6-2.7-3.6-5.5.4-5.5 4.3 0 7.8 2.5 1.2 5.5a2 2 0 0 1-1.6 0Zm.4 1.9c1 7-3 5.8-5 2.5-2.1-3.7-1.7-8 4.2-3.9a2 2 0 0 1 .8 1.4Zm6.2 1.7c2-3.3 1-7.3-4.7-3a2 2 0 0 0-.8 1.4c-.7 7.1 3.3 5.4 5.5 1.7Z"/>',
  node: '<path d="M12 23.96c-.34 0-.66-.1-.96-.25l-3.03-1.73c-.45-.25-.22-.33-.09-.38.62-.2.73-.24 1.37-.6.07-.04.16-.02.23.03l2.32 1.34c.1.05.2.05.27 0l9.1-5.08a.27.27 0 0 0 .13-.24V6.9c0-.11-.05-.2-.14-.24L12.11 1.6c-.09-.05-.2-.05-.27 0L2.75 6.66c-.09.04-.13.15-.13.24v10.14c0 .1.04.2.13.25l2.49 1.38c1.34.66 2.18-.1 2.18-.88V7.78c0-.13.12-.26.28-.26h1.16c.13 0 .27.1.27.26v10.01c0 1.74-.98 2.75-2.69 2.75-.52 0-.93 0-2.1-.55l-2.38-1.32a1.85 1.85 0 0 1-.96-1.6V6.92c0-.66.36-1.28.96-1.6l9.08-5.1a2.1 2.1 0 0 1 1.92 0l9.08 5.08c.6.33.96.95.96 1.61v10.15c0 .66-.36 1.27-.96 1.6l-9.08 5.09a2.4 2.4 0 0 1-.96.2m2.8-6.98c-3.98 0-4.8-1.76-4.8-3.26 0-.13.11-.26.27-.26h1.18c.14 0 .25.08.25.22.19 1.16.71 1.73 3.12 1.73 1.92 0 2.74-.41 2.74-1.4 0-.58-.23-1-3.21-1.28-2.49-.24-4.04-.77-4.04-2.68 0-1.79 1.55-2.84 4.15-2.84 2.91 0 4.35.96 4.53 3.08a.35.35 0 0 1-.07.2.27.27 0 0 1-.18.08h-1.18a.27.27 0 0 1-.25-.2c-.28-1.2-.98-1.6-2.85-1.6-2.1 0-2.35.7-2.35 1.23 0 .64.3.84 3.12 1.19 2.8.35 4.13.86 4.13 2.75-.03 1.94-1.67 3.04-4.56 3.04"/>',
  cloudflare: '<path d="M16.5 16.84c.16-.5.1-.97-.15-1.3-.22-.33-.6-.5-1.06-.53l-8.66-.11a.15.15 0 0 1-.13-.08.21.21 0 0 1-.02-.15.25.25 0 0 1 .2-.15l8.74-.12a3.13 3.13 0 0 0 2.55-1.91l.5-1.3a.25.25 0 0 0 .01-.17 5.68 5.68 0 0 0-10.93-.59 2.58 2.58 0 0 0-3.35.24 2.55 2.55 0 0 0-.67 2.44 3.64 3.64 0 0 0-3.5 4.17.18.18 0 0 0 .17.15h15.98a.22.22 0 0 0 .21-.16l.12-.43Zm2.77-5.56-.24.01c-.06 0-.1.05-.13.1l-.34 1.18c-.15.5-.1.97.16 1.31.22.32.6.5 1.06.52l1.84.12c.06 0 .1.02.14.07.02.04.03.1.02.15a.23.23 0 0 1-.2.15l-1.93.12a3.11 3.11 0 0 0-2.55 1.91l-.14.36c-.03.07.02.14.1.14h6.6a.18.18 0 0 0 .16-.12 4.74 4.74 0 0 0-4.56-6v-.02Z"/>',
  vercel: '<path d="m12 1l12 21H0z"/>',
  netlify: '<path d="M6.49 19.04h-.23L5.13 17.9v-.23l1.73-1.71h1.2l.15.15v1.2L6.5 19.04ZM5.13 6.31V6.1l1.13-1.13h.23L8.2 6.68v1.2l-.15.15h-1.2zm9.96 9.09h-1.65l-.14-.13v-3.83c0-.68-.27-1.2-1.1-1.23c-.42 0-.9 0-1.43.02l-.07.08v4.96l-.14.14H8.9l-.13-.14V8.73l.13-.14h3.7a2.6 2.6 0 0 1 2.61 2.6v4.08l-.13.14Zm-8.37-2.44H.14L0 12.82v-1.64l.14-.14h6.58l.14.14v1.64zm17.14 0h-6.58l-.14-.14v-1.64l.14-.14h6.58l.14.14v1.64zM11.05 6.55V1.64l.14-.14h1.65l.14.14v4.9l-.14.14h-1.65zm0 15.81v-4.9l.14-.14h1.65l.14.13v4.91l-.14.14h-1.65z"/>',
  deno: '<path d="M12 0a12 12 0 1 1 0 24 12 12 0 0 1 0-24m-.47 6.8c-3.49 0-6.2 2.19-6.2 4.92 0 2.58 2.5 4.23 6.37 4.15h.12l.42-.02-.1.28v.03l.09.22v.03l.02.04.02.07.02.04.01.05.02.05.02.07.02.08.02.06.02.08.02.09.02.09.03.1.01.06.03.1.02.1.03.15.02.07.02.11.03.12.02.12.04.17.02.15.04.2.02.1.03.15.03.15.04.22.04.23.04.23.04.24.04.24.04.26.04.26.04.2.05.34.02.14.06.36.04.3.04.22.04.31.03.16a10.76 10.76 0 0 0 6.53-3.41l.05-.06-.24-.89-.64-2.37-.39-1.47-.35-1.3-.21-.78-.14-.5-.08-.3-.07-.26-.03-.11-.02-.07-.01-.03v-.03a6.04 6.04 0 0 0-2.05-2.97 6.75 6.75 0 0 0-4.25-1.35M8.47 19.3a.59.59 0 0 0-.72.4v.01l-.53 1.96q.5.24 1.01.43l.08.03.57-2.11V20a.59.59 0 0 0-.41-.7m3.26-1.43a.59.59 0 0 0-.71.4v.01l-.8 2.96v.01a.59.59 0 0 0 1.12.3l.8-2.96v-.02l.02-.06v-.02l-.02-.1-.02-.14-.02-.08a.58.58 0 0 0-.37-.3Zm-5.55-3.04a1 1 0 0 0-.04.09v.02l-.8 2.95v.02a.59.59 0 0 0 1.13.3v-.01l.72-2.68a5.3 5.3 0 0 1-1.01-.7Zm-1.9-3.4a.59.59 0 0 0-.72.4v.02l-.8 2.95v.01a.59.59 0 0 0 1.13.3l.8-2.96v-.01a.59.59 0 0 0-.41-.7m17.87-.68a.59.59 0 0 0-.72.4v.02l-.8 2.95v.01a.59.59 0 0 0 1.13.3l.8-2.96v-.01a.59.59 0 0 0-.41-.7M2.55 6.81a10.7 10.7 0 0 0-1.26 3.93.59.59 0 0 0 1-.22v-.02l.8-2.95v-.01a.59.59 0 0 0-.55-.73m17.59.02a.59.59 0 0 0-.72.4v.01l-.8 2.96v.01a.59.59 0 0 0 1.13.3l.8-2.96v-.01a.59.59 0 0 0-.41-.7Zm-7.85 1.93a.75.75 0 1 1 0 1.5.75.75 0 0 1 0-1.5M6.01 4.03a.59.59 0 0 0-.71.4v.02L4.5 7.4v.01a.59.59 0 0 0 1.12.3l.8-2.96v-.01a.59.59 0 0 0-.41-.7Zm10.24.56a.59.59 0 0 0-.71.4V5L15 7q.52.26.99.6l.05.04.62-2.32V5.3a.59.59 0 0 0-.41-.7m-5.21-3.34a11 11 0 0 0-1.12.16l-.07.01L9.1 4.2v.01a.59.59 0 0 0 1.13.3l.8-2.96v-.01a.6.6 0 0 0 0-.27m7.34 2.04-.16.58v.02a.59.59 0 0 0 1.13.3V4.2l.02-.07a11 11 0 0 0-.92-.77zm-4.64-1.94-.28 1.05a.59.59 0 0 0 1.13.31v-.01l.3-1.1q-.52-.15-1.06-.24z"/>'
};
const Icons = {
  ...BuiltInIcons,
  ...FileIcons
};

const $$Astro$H = createAstro("https://screwfast.uk");
const $$Icon = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$H, $$props, $$slots);
  Astro2.self = $$Icon;
  const { name, label, size = "1em", color } = Astro2.props;
  const a11yAttrs = label ? { "aria-label": label } : { "aria-hidden": "true" };
  const $$definedVars = defineStyleVars([{ "sl-icon-color": color, "sl-icon-size": size }]);
  return renderTemplate`${maybeRenderHead()}<svg${spreadAttributes(a11yAttrs)}${addAttribute((Astro2.props.class ?? "") + " astro-c6vsoqas", "class")} width="16" height="16" viewBox="0 0 24 24" fill="currentColor"${addAttribute($$definedVars, "style")}>${unescapeHTML(Icons[name])}</svg> `;
}, "/var/www/html/cepaonline/node_modules/@astrojs/starlight/user-components/Icon.astro", void 0);

const $$Astro$G = createAstro("https://screwfast.uk");
const $$ContentNotice = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$G, $$props, $$slots);
  Astro2.self = $$ContentNotice;
  const { icon, label } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<p class="sl-flex astro-opzsrvew"> ${renderComponent($$result, "Icon", $$Icon, { "name": icon, "size": "1.5em", "color": "var(--sl-color-orange-high)", "class": "astro-opzsrvew" })} <span class="astro-opzsrvew">${label}</span> </p> `;
}, "/var/www/html/cepaonline/node_modules/@astrojs/starlight/components/ContentNotice.astro", void 0);

const $$Astro$F = createAstro("https://screwfast.uk");
const $$FallbackContentNotice = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$F, $$props, $$slots);
  Astro2.self = $$FallbackContentNotice;
  const { labels } = Astro2.props;
  return renderTemplate`${renderComponent($$result, "ContentNotice", $$ContentNotice, { "icon": "warning", "label": labels["i18n.untranslatedContent"] })}`;
}, "/var/www/html/cepaonline/node_modules/@astrojs/starlight/components/FallbackContentNotice.astro", void 0);

const $$Astro$E = createAstro("https://screwfast.uk");
const $$DraftContentNotice = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$E, $$props, $$slots);
  Astro2.self = $$DraftContentNotice;
  const { labels } = Astro2.props;
  return renderTemplate`${renderComponent($$result, "ContentNotice", $$ContentNotice, { "icon": "warning", "label": labels["page.draft"] })}`;
}, "/var/www/html/cepaonline/node_modules/@astrojs/starlight/components/DraftContentNotice.astro", void 0);

const $$Astro$D = createAstro("https://screwfast.uk");
const $$EditLink = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$D, $$props, $$slots);
  Astro2.self = $$EditLink;
  const { editUrl, labels } = Astro2.props;
  return renderTemplate`${editUrl && renderTemplate`${maybeRenderHead()}<a${addAttribute(editUrl, "href")} class="sl-flex astro-eez2twj6">${renderComponent($$result, "Icon", $$Icon, { "name": "pencil", "size": "1.2em", "class": "astro-eez2twj6" })}${labels["page.editLink"]}</a>`}`;
}, "/var/www/html/cepaonline/node_modules/@astrojs/starlight/components/EditLink.astro", void 0);

const $$Astro$C = createAstro("https://screwfast.uk");
const $$LastUpdated = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$C, $$props, $$slots);
  Astro2.self = $$LastUpdated;
  const { labels, lang, lastUpdated } = Astro2.props;
  return renderTemplate`${lastUpdated && renderTemplate`${maybeRenderHead()}<p>${labels["page.lastUpdated"]}${" "}<time${addAttribute(lastUpdated.toISOString(), "datetime")}>${lastUpdated.toLocaleDateString(lang, { dateStyle: "medium", timeZone: "UTC" })}</time></p>`}`;
}, "/var/www/html/cepaonline/node_modules/@astrojs/starlight/components/LastUpdated.astro", void 0);

const $$Astro$B = createAstro("https://screwfast.uk");
const $$Pagination = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$B, $$props, $$slots);
  Astro2.self = $$Pagination;
  const { dir, labels, pagination } = Astro2.props;
  const { prev, next } = pagination;
  const isRtl = dir === "rtl";
  return renderTemplate`${maybeRenderHead()}<div class="pagination-links astro-u2l5gyhi"${addAttribute(dir, "dir")}> ${prev && renderTemplate`<a${addAttribute(prev.href, "href")} rel="prev" class="astro-u2l5gyhi"> ${renderComponent($$result, "Icon", $$Icon, { "name": isRtl ? "right-arrow" : "left-arrow", "size": "1.5rem", "class": "astro-u2l5gyhi" })} <span class="astro-u2l5gyhi"> ${labels["page.previousLink"]} <br class="astro-u2l5gyhi"> <span class="link-title astro-u2l5gyhi">${prev.label}</span> </span> </a>`} ${next && renderTemplate`<a${addAttribute(next.href, "href")} rel="next" class="astro-u2l5gyhi"> ${renderComponent($$result, "Icon", $$Icon, { "name": isRtl ? "left-arrow" : "right-arrow", "size": "1.5rem", "class": "astro-u2l5gyhi" })} <span class="astro-u2l5gyhi"> ${labels["page.nextLink"]} <br class="astro-u2l5gyhi"> <span class="link-title astro-u2l5gyhi">${next.label}</span> </span> </a>`} </div> `;
}, "/var/www/html/cepaonline/node_modules/@astrojs/starlight/components/Pagination.astro", void 0);

const $$Astro$A = createAstro("https://screwfast.uk");
const $$Aside = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$A, $$props, $$slots);
  Astro2.self = $$Aside;
  const asideVariants = ["note", "tip", "caution", "danger"];
  const icons = { note: "information", tip: "rocket", caution: "warning", danger: "error" };
  let { type = "note", title } = Astro2.props;
  if (!asideVariants.includes(type)) {
    throw new AstroUserError(
      "Invalid `type` prop passed to the `<Aside>` component.\n",
      `Received: ${JSON.stringify(type)}
Expected one of ${asideVariants.map((i) => JSON.stringify(i)).join(", ")}`
    );
  }
  if (!title) {
    const { locale } = slugToLocaleData(urlToSlug(Astro2.url));
    title = useTranslations(locale)(`aside.${type}`);
  }
  return renderTemplate`${maybeRenderHead()}<aside${addAttribute(title, "aria-label")}${addAttribute(`starlight-aside starlight-aside--${type}`, "class")}> <p class="starlight-aside__title" aria-hidden="true"> ${renderComponent($$result, "Icon", $$Icon, { "name": icons[type], "class": "starlight-aside__icon" })}${title} </p> <section class="starlight-aside__content"> ${renderSlot($$result, $$slots["default"])} </section> </aside>`;
}, "/var/www/html/cepaonline/node_modules/@astrojs/starlight/user-components/Aside.astro", void 0);

const badgeSchema = () => z.object({
  variant: z.enum(["note", "danger", "success", "caution", "tip", "default"]).default("default"),
  text: z.string(),
  class: z.string().optional()
});
const BadgeComponentSchema = badgeSchema().extend({
  size: z.enum(["small", "medium", "large"]).default("small")
}).passthrough();

function parseWithFriendlyErrors(schema, input, message) {
  const parsedConfig = schema.safeParse(input, { errorMap });
  if (!parsedConfig.success) {
    throw new AstroUserError(message, parsedConfig.error.issues.map((i) => i.message).join("\n"));
  }
  return parsedConfig.data;
}
const errorMap = (baseError, ctx) => {
  const baseErrorPath = flattenErrorPath(baseError.path);
  if (baseError.code === "invalid_union") {
    let typeOrLiteralErrByPath = /* @__PURE__ */ new Map();
    for (const unionError of baseError.unionErrors.map((e) => e.errors).flat()) {
      if (unionError.code === "invalid_type" || unionError.code === "invalid_literal") {
        const flattenedErrorPath = flattenErrorPath(unionError.path);
        if (typeOrLiteralErrByPath.has(flattenedErrorPath)) {
          typeOrLiteralErrByPath.get(flattenedErrorPath).expected.push(unionError.expected);
        } else {
          typeOrLiteralErrByPath.set(flattenedErrorPath, {
            code: unionError.code,
            received: unionError.received,
            expected: [unionError.expected]
          });
        }
      }
    }
    const messages = [prefix(baseErrorPath, "Did not match union.")];
    const details = [...typeOrLiteralErrByPath.entries()].filter(([, error]) => error.expected.length === baseError.unionErrors.length).map(
      ([key, error]) => key === baseErrorPath ? (
        // Avoid printing the key again if it's a base error
        `> ${getTypeOrLiteralMsg(error)}`
      ) : `> ${prefix(key, getTypeOrLiteralMsg(error))}`
    );
    if (details.length === 0) {
      const expectedShapes = [];
      for (const unionError of baseError.unionErrors) {
        const expectedShape = [];
        for (const issue of unionError.issues) {
          if (issue.code === "invalid_union") {
            return errorMap(issue, ctx);
          }
          const relativePath = flattenErrorPath(issue.path).replace(baseErrorPath, "").replace(leadingPeriod, "");
          if ("expected" in issue && typeof issue.expected === "string") {
            expectedShape.push(
              relativePath ? `${relativePath}: ${issue.expected}` : issue.expected
            );
          } else {
            expectedShape.push(relativePath);
          }
        }
        if (expectedShape.length === 1 && !expectedShape[0]?.includes(":")) {
          expectedShapes.push(expectedShape.join(""));
        } else {
          expectedShapes.push(`{ ${expectedShape.join("; ")} }`);
        }
      }
      if (expectedShapes.length) {
        details.push("> Expected type `" + expectedShapes.join(" | ") + "`");
        details.push("> Received `" + stringify(ctx.data) + "`");
      }
    }
    return {
      message: messages.concat(details).join("\n")
    };
  } else if (baseError.code === "invalid_literal" || baseError.code === "invalid_type") {
    return {
      message: prefix(
        baseErrorPath,
        getTypeOrLiteralMsg({
          code: baseError.code,
          received: baseError.received,
          expected: [baseError.expected]
        })
      )
    };
  } else if (baseError.message) {
    return { message: prefix(baseErrorPath, baseError.message) };
  } else {
    return { message: prefix(baseErrorPath, ctx.defaultError) };
  }
};
const getTypeOrLiteralMsg = (error) => {
  if (error.received === "undefined") return "Required";
  const expectedDeduped = new Set(error.expected);
  switch (error.code) {
    case "invalid_type":
      return `Expected type \`${unionExpectedVals(expectedDeduped)}\`, received \`${stringify(
        error.received
      )}\``;
    case "invalid_literal":
      return `Expected \`${unionExpectedVals(expectedDeduped)}\`, received \`${stringify(
        error.received
      )}\``;
  }
};
const prefix = (key, msg) => key.length ? `**${key}**: ${msg}` : msg;
const unionExpectedVals = (expectedVals) => [...expectedVals].map((expectedVal) => stringify(expectedVal)).join(" | ");
const flattenErrorPath = (errorPath) => errorPath.join(".");
const stringify = (val) => JSON.stringify(val, null, 1).split(newlinePlusWhitespace).join(" ");
const newlinePlusWhitespace = /\n\s*/;
const leadingPeriod = /^\./;

const $$Astro$z = createAstro("https://screwfast.uk");
const $$Badge = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$z, $$props, $$slots);
  Astro2.self = $$Badge;
  const {
    text,
    variant,
    size,
    class: customClass,
    ...attrs
  } = parseWithFriendlyErrors(
    BadgeComponentSchema,
    Astro2.props,
    "Invalid prop passed to the `<Badge/>` component."
  );
  return renderTemplate`${maybeRenderHead()}<span${addAttribute([["sl-badge", variant, size, customClass], "astro-avdet4wd"], "class:list")}${spreadAttributes(attrs)}>${text}</span> `;
}, "/var/www/html/cepaonline/node_modules/@astrojs/starlight/user-components/Badge.astro", void 0);

const $$Astro$y = createAstro("https://screwfast.uk");
const $$Card = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$y, $$props, $$slots);
  Astro2.self = $$Card;
  const { icon, title } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<article class="card sl-flex astro-v5tidmuc"> <p class="title sl-flex astro-v5tidmuc"> ${icon && renderTemplate`${renderComponent($$result, "Icon", $$Icon, { "name": icon, "class": "icon astro-v5tidmuc", "size": "1.333em" })}`} <span class="astro-v5tidmuc">${unescapeHTML(title)}</span> </p> <div class="body astro-v5tidmuc">${renderSlot($$result, $$slots["default"])}</div> </article> `;
}, "/var/www/html/cepaonline/node_modules/@astrojs/starlight/user-components/Card.astro", void 0);

const $$Astro$x = createAstro("https://screwfast.uk");
const $$CardGrid = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$x, $$props, $$slots);
  Astro2.self = $$CardGrid;
  const { stagger = false } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div${addAttribute([["card-grid", { stagger }], "astro-zntqmydn"], "class:list")}>${renderSlot($$result, $$slots["default"])}</div> `;
}, "/var/www/html/cepaonline/node_modules/@astrojs/starlight/user-components/CardGrid.astro", void 0);

const TabItemTagname = "starlight-tab-item";
const focusableElementSelectors = [
  "input:not([disabled]):not([type=hidden])",
  "select:not([disabled])",
  "textarea:not([disabled])",
  "button:not([disabled])",
  "a[href]",
  "area[href]",
  "summary",
  "iframe",
  "object",
  "embed",
  "audio[controls]",
  "video[controls]",
  "[contenteditable]",
  "[tabindex]:not([disabled])"
].map((selector) => `${selector}:not([hidden]):not([tabindex="-1"])`).join(",");
let count = 0;
const getIDs = () => {
  const id = count++;
  return { panelId: "tab-panel-" + id, tabId: "tab-" + id };
};
const tabsProcessor = rehype().data("settings", { fragment: true }).use(function tabs() {
  return (tree, file) => {
    file.data.panels = [];
    let isFirst = true;
    visit(tree, "element", (node) => {
      if (node.tagName !== TabItemTagname || !node.properties) {
        return CONTINUE;
      }
      const { dataLabel, dataIcon } = node.properties;
      const ids = getIDs();
      const panel = {
        ...ids,
        label: String(dataLabel)
      };
      if (dataIcon) panel.icon = String(dataIcon);
      file.data.panels?.push(panel);
      delete node.properties.dataLabel;
      delete node.properties.dataIcon;
      node.tagName = "section";
      node.properties.id = ids.panelId;
      node.properties["aria-labelledby"] = ids.tabId;
      node.properties.role = "tabpanel";
      const focusableChild = select(focusableElementSelectors, node);
      if (!focusableChild) {
        node.properties.tabindex = 0;
      }
      if (isFirst) {
        isFirst = false;
      } else {
        node.properties.hidden = true;
      }
      return SKIP;
    });
  };
});
const processPanels = (html) => {
  const file = tabsProcessor.processSync({ value: html });
  return {
    /** Data for each tab panel. */
    panels: file.data.panels,
    /** Processed HTML for the tab panels. */
    html: file.toString()
  };
};

const $$Astro$w = createAstro("https://screwfast.uk");
const $$Tabs = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$w, $$props, $$slots);
  Astro2.self = $$Tabs;
  const { syncKey } = Astro2.props;
  const panelHtml = await Astro2.slots.render("default");
  const { html, panels } = processPanels(panelHtml);
  return renderTemplate`${renderComponent($$result, "starlight-tabs", "starlight-tabs", { "data-sync-key": syncKey, "class": "astro-esqgolmp" }, { "default": () => renderTemplate` ${panels && renderTemplate`${maybeRenderHead()}<div class="tablist-wrapper not-content astro-esqgolmp"> <ul role="tablist" class="astro-esqgolmp"> ${panels.map(({ icon, label, panelId, tabId }, idx) => renderTemplate`<li role="presentation" class="tab astro-esqgolmp"> <a role="tab"${addAttribute("#" + panelId, "href")}${addAttribute(tabId, "id")}${addAttribute(idx === 0 ? "true" : "false", "aria-selected")}${addAttribute(idx !== 0 ? -1 : 0, "tabindex")} class="astro-esqgolmp"> ${icon && renderTemplate`${renderComponent($$result, "Icon", $$Icon, { "name": icon, "class": "astro-esqgolmp" })}`} ${label} </a> </li>`)} </ul> </div>`} ${renderComponent($$result, "Fragment", Fragment, {}, { "default": ($$result2) => renderTemplate`${unescapeHTML(html)}` })} ` })}  ${renderScript($$result, "/var/www/html/cepaonline/node_modules/@astrojs/starlight/user-components/Tabs.astro?astro&type=script&index=0&lang.ts")}`;
}, "/var/www/html/cepaonline/node_modules/@astrojs/starlight/user-components/Tabs.astro", void 0);

const $$Astro$v = createAstro("https://screwfast.uk");
const $$TabItem = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$v, $$props, $$slots);
  Astro2.self = $$TabItem;
  const { icon, label } = Astro2.props;
  if (!label) {
    throw new Error("Missing prop `label` on `<TabItem>` component.");
  }
  return renderTemplate`${renderComponent($$result, "TabItemTagname", TabItemTagname, { "data-label": label, "data-icon": icon }, { "default": ($$result2) => renderTemplate` ${renderSlot($$result2, $$slots["default"])} ` })}`;
}, "/var/www/html/cepaonline/node_modules/@astrojs/starlight/user-components/TabItem.astro", void 0);

const $$Astro$u = createAstro("https://screwfast.uk");
const $$LinkCard = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$u, $$props, $$slots);
  Astro2.self = $$LinkCard;
  const { title, description, ...attributes } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div class="sl-link-card astro-mf7fz2mj"> <span class="sl-flex stack astro-mf7fz2mj"> <a${spreadAttributes(attributes, void 0, { "class": "astro-mf7fz2mj" })}> <span class="title astro-mf7fz2mj">${unescapeHTML(title)}</span> </a> ${description && renderTemplate`<span class="description astro-mf7fz2mj">${unescapeHTML(description)}</span>`} </span> ${renderComponent($$result, "Icon", $$Icon, { "name": "right-arrow", "size": "1.333em", "class": "icon rtl:flip astro-mf7fz2mj" })} </div> `;
}, "/var/www/html/cepaonline/node_modules/@astrojs/starlight/user-components/LinkCard.astro", void 0);

const prettyPrintProcessor = rehype().data("settings", { fragment: true }).use(rehypeFormat);
const prettyPrintHtml = (html) => prettyPrintProcessor.processSync({ value: html }).toString();
const stepsProcessor = rehype().data("settings", { fragment: true }).use(function steps() {
  return (tree, vfile) => {
    const rootElements = tree.children.filter((item) => item.type === "element");
    const [rootElement] = rootElements;
    if (!rootElement) {
      throw new StepsError(
        "The `<Steps>` component expects its content to be a single ordered list (`<ol>`) but found no child elements."
      );
    } else if (rootElements.length > 1) {
      throw new StepsError(
        "The `<Steps>` component expects its content to be a single ordered list (`<ol>`) but found multiple child elements: " + rootElements.map((element) => `\`<${element.tagName}>\``).join(", ") + ".",
        vfile.value.toString()
      );
    } else if (rootElement.tagName !== "ol") {
      throw new StepsError(
        `The \`<Steps>\` component expects its content to be a single ordered list (\`<ol>\`) but found the following element: \`<${rootElement.tagName}>\`.`,
        vfile.value.toString()
      );
    }
    rootElement.properties.role = "list";
    if (!Array.isArray(rootElement.properties.className)) {
      rootElement.properties.className = ["sl-steps"];
    } else {
      rootElement.properties.className.push("sl-steps");
    }
    if (typeof rootElement.properties.start === "number") {
      const styles = [`--sl-steps-start: ${rootElement.properties.start - 1}`];
      if (rootElement.properties.style) styles.push(String(rootElement.properties.style));
      rootElement.properties.style = styles.join(";");
    }
  };
});
const processSteps = (html) => {
  const file = stepsProcessor.processSync({ value: html });
  return { html: file.toString() };
};
class StepsError extends AstroUserError {
  constructor(message, html) {
    let hint = "To learn more about the `<Steps>` component, see https://starlight.astro.build/guides/components/#steps";
    if (html) {
      hint += "\n\nFull HTML passed to `<Steps>`:\n" + prettyPrintHtml(html);
    }
    super(message, hint);
  }
}

const $$Astro$t = createAstro("https://screwfast.uk");
const $$Steps = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$t, $$props, $$slots);
  Astro2.self = $$Steps;
  const content = await Astro2.slots.render("default");
  const { html } = processSteps(content);
  return renderTemplate`${renderComponent($$result, "Fragment", Fragment, {}, { "default": ($$result2) => renderTemplate`${unescapeHTML(html)}` })}`;
}, "/var/www/html/cepaonline/node_modules/@astrojs/starlight/user-components/Steps.astro", void 0);

const folderIcon = makeSVGIcon(Icons["seti:folder"]);
const defaultFileIcon = makeSVGIcon(Icons["seti:default"]);
function processFileTree(html, directoryLabel) {
  const file = fileTreeProcessor.processSync({ data: { directoryLabel }, value: html });
  return file.toString();
}
const fileTreeProcessor = rehype().data("settings", { fragment: true }).use(function fileTree() {
  return (tree, file) => {
    const { directoryLabel } = file.data;
    validateFileTree(tree);
    visit(tree, "element", (node) => {
      node.children = node.children.filter(
        (child) => child.type === "comment" || child.type !== "text" || !/^\n+$/.test(child.value)
      );
      if (node.tagName !== "li") return CONTINUE;
      const [firstChild, ...otherChildren] = node.children;
      const comment = [];
      if (firstChild?.type === "text") {
        const [filename, ...fragments] = firstChild.value.split(" ");
        firstChild.value = filename || "";
        const textComment = fragments.join(" ").trim();
        if (textComment.length > 0) {
          comment.push(fragments.join(" "));
        }
      }
      const subTreeIndex = otherChildren.findIndex(
        (child) => child.type === "element" && child.tagName === "ul"
      );
      const commentNodes = subTreeIndex > -1 ? otherChildren.slice(0, subTreeIndex) : [...otherChildren];
      otherChildren.splice(0, subTreeIndex > -1 ? subTreeIndex : otherChildren.length);
      comment.push(...commentNodes);
      const firstChildTextContent = firstChild ? toString(firstChild) : "";
      const isDirectory = /\/\s*$/.test(firstChildTextContent) || otherChildren.some((child) => child.type === "element" && child.tagName === "ul");
      const isPlaceholder = /^\s*(\.{3}|…)\s*$/.test(firstChildTextContent);
      const isHighlighted = firstChild?.type === "element" && firstChild.tagName === "strong";
      const icon = h("span", isDirectory ? folderIcon : getFileIcon(firstChildTextContent));
      if (isDirectory) {
        icon.children.unshift(h("span", { class: "sr-only" }, directoryLabel));
      }
      node.properties.class = isDirectory ? "directory" : "file";
      if (isPlaceholder) node.properties.class += " empty";
      const treeEntryChildren = [
        h("span", { class: isHighlighted ? "highlight" : "" }, [
          isPlaceholder ? null : icon,
          firstChild
        ])
      ];
      if (comment.length > 0) {
        treeEntryChildren.push(makeText(" "), h("span", { class: "comment" }, ...comment));
      }
      const treeEntry = h("span", { class: "tree-entry" }, ...treeEntryChildren);
      if (isDirectory) {
        const hasContents = otherChildren.length > 0;
        node.children = [
          h("details", { open: hasContents }, [
            h("summary", treeEntry),
            ...hasContents ? otherChildren : [h("ul", h("li", "…"))]
          ])
        ];
        return CONTINUE;
      }
      node.children = [treeEntry, ...otherChildren];
      return SKIP;
    });
  };
});
function makeText(value = "") {
  return { type: "text", value };
}
function makeSVGIcon(svgString) {
  return s(
    "svg",
    {
      width: 16,
      height: 16,
      class: "tree-icon",
      "aria-hidden": "true",
      viewBox: "0 0 24 24"
    },
    fromHtml(svgString, { fragment: true })
  );
}
function getFileIcon(fileName) {
  const name = getFileIconName(fileName);
  if (!name) return defaultFileIcon;
  if (name in Icons) {
    const path = Icons[name];
    return makeSVGIcon(path);
  }
  return defaultFileIcon;
}
function getFileIconName(fileName) {
  let icon = definitions.files[fileName];
  if (icon) return icon;
  icon = getFileIconTypeFromExtension(fileName);
  if (icon) return icon;
  for (const [partial, partialIcon] of Object.entries(definitions.partials)) {
    if (fileName.includes(partial)) return partialIcon;
  }
  return icon;
}
function getFileIconTypeFromExtension(fileName) {
  const firstDotIndex = fileName.indexOf(".");
  if (firstDotIndex === -1) return;
  let extension = fileName.slice(firstDotIndex);
  while (extension !== "") {
    const icon = definitions.extensions[extension];
    if (icon) return icon;
    const nextDotIndex = extension.indexOf(".", 1);
    if (nextDotIndex === -1) return;
    extension = extension.slice(nextDotIndex);
  }
  return;
}
function validateFileTree(tree) {
  const rootElements = tree.children.filter(isElementNode);
  const [rootElement] = rootElements;
  if (rootElements.length === 0) {
    throwFileTreeValidationError(
      "The `<FileTree>` component expects its content to be a single unordered list but found no child elements."
    );
  }
  if (rootElements.length !== 1) {
    throwFileTreeValidationError(
      `The \`<FileTree>\` component expects its content to be a single unordered list but found multiple child elements: ${rootElements.map((element) => `\`<${element.tagName}>\``).join(" - ")}.`
    );
  }
  if (!rootElement || rootElement.tagName !== "ul") {
    throwFileTreeValidationError(
      `The \`<FileTree>\` component expects its content to be an unordered list but found the following element: \`<${rootElement?.tagName}>\`.`
    );
  }
  const listItemElement = select("li", rootElement);
  if (!listItemElement) {
    throwFileTreeValidationError(
      "The `<FileTree>` component expects its content to be an unordered list with at least one list item."
    );
  }
}
function isElementNode(node) {
  return node.type === "element";
}
function throwFileTreeValidationError(message) {
  throw new AstroUserError(
    message,
    "To learn more about the `<FileTree>` component, see https://starlight.astro.build/guides/components/#file-tree"
  );
}

const $$Astro$s = createAstro("https://screwfast.uk");
const $$FileTree = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$s, $$props, $$slots);
  Astro2.self = $$FileTree;
  const slug = Astro2.url.pathname.replace(/^\//, "").replace(/\/$/, "");
  const t = useTranslations(slugToLocaleData(slug).locale);
  const fileTreeHtml = await Astro2.slots.render("default");
  const html = processFileTree(fileTreeHtml, t("fileTree.directory"));
  return renderTemplate`${renderComponent($$result, "starlight-file-tree", "starlight-file-tree", { "class": "not-content astro-p67cqifm", "data-pagefind-ignore": true }, { "default": () => renderTemplate`${unescapeHTML(html)}` })} `;
}, "/var/www/html/cepaonline/node_modules/@astrojs/starlight/user-components/FileTree.astro", void 0);

const pageDataMap = /* @__PURE__ */ new Map();
function getPageData(request) {
  let data = pageDataMap.get(request);
  if (!data) {
    data = {
      url: request.url,
      blockGroupIndex: -1
    };
    pageDataMap.set(request, data);
  }
  return data;
}

let cachedRenderer = void 0;
async function getRenderer() {
  if (!cachedRenderer) {
    cachedRenderer = createRenderer();
  }
  return await cachedRenderer;
}
async function createRenderer() {
  const { astroConfig, ecConfigFileOptions, ecIntegrationOptions = {} } = await import('./config_Wk5USjhw.mjs');
  const { createAstroRenderer } = await import('./index_DaVK51eC.mjs');
  const strIntegrationOptions = JSON.stringify(ecIntegrationOptions);
  if (strIntegrationOptions.includes('"[Function]"') || strIntegrationOptions.includes("'[Circular]'")) {
    throw new Error(
      `Your Astro config file contains Expressive Code options that are not serializable to JSON.
			To use the \`<Code>\` component, please create a separate config file called \`ec.config.mjs\`
			in your project root, move your Expressive Code options object into the config file,
			and export it as the default export.`.replace(/\s+/g, " ")
    );
  }
  let mergedEcConfig = { ...ecConfigFileOptions, ...ecIntegrationOptions };
  try {
    const { default: preprocessEcConfig } = await import('./preprocess-config_B4krsNqQ.mjs');
    mergedEcConfig = await preprocessEcConfig({ ecConfig: mergedEcConfig, astroConfig }) || mergedEcConfig;
  } catch (error) {
    const msg = error instanceof Error ? error.message : error;
    throw new Error(`Failed to preprocess Expressive Code config for the Code component: ${msg}`, { cause: error });
  }
  return await createAstroRenderer({
    astroConfig,
    ecConfig: mergedEcConfig
  });
}

const $$Astro$r = createAstro("https://screwfast.uk");
const $$Code = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$r, $$props, $$slots);
  Astro2.self = $$Code;
  function formatMessage(...messageParts) {
    return messageParts.map((part) => part.replace(/\s+/g, " ")).join("\n\n");
  }
  async function renderToHtml() {
    const defaultSlotContent = await Astro2.slots.render("default");
    if (defaultSlotContent?.trim().length) {
      throw new Error(
        formatMessage(
          `Unsupported child content was found inside the component.
				The code to render must be passed to the \`code\` prop as a string.`,
          `Please remove the following child content:
${defaultSlotContent}`
        )
      );
    }
    let { code, lang = "", meta = "", locale, class: className, ...props } = Astro2.props;
    if (!code || !code.trim().length) {
      throw new Error("Missing code to render. The `code` prop must be set to a non-empty string.");
    }
    const pageData = getPageData(Astro2.request);
    const groupIndex = ++pageData.blockGroupIndex;
    const renderer = await getRenderer();
    const { renderedGroupAst } = await renderer.ec.render({
      code,
      language: lang,
      meta,
      locale,
      parentDocument: {
        positionInDocument: {
          groupIndex
        }
      },
      props
    });
    if (renderedGroupAst?.type === "element") {
      if (className) {
        const classNames = className.split(" ");
        classNames.forEach((className2) => addClassName(renderedGroupAst, className2));
      }
    }
    return toHtml(renderedGroupAst);
  }
  let html = "";
  try {
    html = await renderToHtml();
  } catch (err) {
    const prefix = `Failed to render a \`<Code>\` component on page ${Astro2.request.url}:`;
    const error = err instanceof Error ? err : new Error(String(err));
    throw new Error(`${prefix}

${error.message}`, { cause: error });
  }
  return renderTemplate`${renderComponent($$result, "Fragment", Fragment, {}, { "default": ($$result2) => renderTemplate`${unescapeHTML(html)}` })}`;
}, "/var/www/html/cepaonline/node_modules/astro-expressive-code/components/Code.astro", void 0);

const $$Astro$q = createAstro("https://screwfast.uk");
const $$Footer = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$q, $$props, $$slots);
  Astro2.self = $$Footer;
  return renderTemplate`${maybeRenderHead()}<footer class="sl-flex astro-3yyafb3n"> <div class="meta sl-flex astro-3yyafb3n"> ${renderComponent($$result, "EditLink", $$EditLink, { ...Astro2.props, "class": "astro-3yyafb3n" })} ${renderComponent($$result, "LastUpdated", $$LastUpdated, { ...Astro2.props, "class": "astro-3yyafb3n" })} </div> ${renderComponent($$result, "Pagination", $$Pagination, { ...Astro2.props, "class": "astro-3yyafb3n" })} ${starlightConfig.credits && renderTemplate`<a class="kudos sl-flex astro-3yyafb3n" href="https://starlight.astro.build"> ${renderComponent($$result, "Icon", $$Icon, { "name": "starlight", "class": "astro-3yyafb3n" })} ${Astro2.props.labels["builtWithStarlight.label"]} </a>`} </footer> `;
}, "/var/www/html/cepaonline/node_modules/@astrojs/starlight/components/Footer.astro", void 0);

const version = "0.25.1";

const HeadConfigSchema = () => z.array(
  z.object({
    /** Name of the HTML tag to add to `<head>`, e.g. `'meta'`, `'link'`, or `'script'`. */
    tag: z.enum(["title", "base", "link", "style", "meta", "script", "noscript", "template"]),
    /** Attributes to set on the tag, e.g. `{ rel: 'stylesheet', href: '/custom.css' }`. */
    attrs: z.record(z.union([z.string(), z.boolean(), z.undefined()])).default({}),
    /** Content to place inside the tag (optional). */
    content: z.string().default("")
  })
).default([]);

const HeadSchema = HeadConfigSchema();
function createHead(defaults, ...heads) {
  let head = HeadSchema.parse(defaults);
  for (const next of heads) {
    head = mergeHead(head, next);
  }
  return sortHead(head);
}
function hasTag(head, entry) {
  switch (entry.tag) {
    case "title":
      return head.some(({ tag }) => tag === "title");
    case "meta":
      return hasOneOf(head, entry, ["name", "property", "http-equiv"]);
    default:
      return false;
  }
}
function hasOneOf(head, entry, keys) {
  const attr = getAttr(keys, entry);
  if (!attr) return false;
  const [key, val] = attr;
  return head.some(({ tag, attrs }) => tag === entry.tag && attrs[key] === val);
}
function getAttr(keys, entry) {
  let attr;
  for (const key of keys) {
    const val = entry.attrs[key];
    if (val) {
      attr = [key, val];
      break;
    }
  }
  return attr;
}
function mergeHead(oldHead, newHead) {
  return [...oldHead.filter((tag) => !hasTag(newHead, tag)), ...newHead];
}
function sortHead(head) {
  return head.sort((a, b) => {
    const aImportance = getImportance(a);
    const bImportance = getImportance(b);
    return aImportance > bImportance ? -1 : bImportance > aImportance ? 1 : 0;
  });
}
function getImportance(entry) {
  if (entry.tag === "meta" && ("charset" in entry.attrs || "http-equiv" in entry.attrs || entry.attrs.name === "viewport")) {
    return 100;
  }
  if (entry.tag === "title") return 90;
  if (entry.tag !== "meta") {
    if (entry.tag === "link" && "rel" in entry.attrs && entry.attrs.rel === "shortcut icon") {
      return 70;
    }
    return 80;
  }
  return 0;
}

function localizedUrl(url, locale) {
  url = new URL(url);
  if (!starlightConfig.locales) {
    return url;
  }
  if (locale === "root") locale = "";
  const base = "/".replace(/\/$/, "");
  const hasBase = url.pathname.startsWith(base);
  if (hasBase) url.pathname = url.pathname.replace(base, "");
  const [_leadingSlash, baseSegment] = url.pathname.split("/");
  const htmlExt = ".html";
  const isRootHtml = baseSegment?.endsWith(htmlExt);
  const baseSlug = isRootHtml ? baseSegment?.slice(0, -1 * htmlExt.length) : baseSegment;
  if (baseSlug && baseSlug in starlightConfig.locales) {
    if (locale) {
      url.pathname = url.pathname.replace(baseSlug, locale);
    } else if (isRootHtml) {
      url.pathname = "/index.html";
    } else {
      url.pathname = url.pathname.replace("/" + baseSlug, "");
    }
  } else if (locale) {
    if (baseSegment === "index.html") {
      url.pathname = "/" + locale + ".html";
    } else {
      url.pathname = "/" + locale + url.pathname;
    }
  }
  if (hasBase) url.pathname = base + url.pathname;
  return url;
}

const $$Astro$p = createAstro("https://screwfast.uk");
const $$Head$1 = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$p, $$props, $$slots);
  Astro2.self = $$Head$1;
  const { entry, lang, siteTitle } = Astro2.props;
  const { data } = entry;
  const canonical = Astro2.site ? new URL(Astro2.url.pathname, Astro2.site) : void 0;
  const description = data.description || starlightConfig.description;
  const headDefaults = [
    { tag: "meta", attrs: { charset: "utf-8" } },
    {
      tag: "meta",
      attrs: { name: "viewport", content: "width=device-width, initial-scale=1" }
    },
    { tag: "title", content: `${data.title} ${starlightConfig.titleDelimiter} ${siteTitle}` },
    { tag: "link", attrs: { rel: "canonical", href: canonical?.href } },
    { tag: "meta", attrs: { name: "generator", content: Astro2.generator } },
    {
      tag: "meta",
      attrs: { name: "generator", content: `Starlight v${version}` }
    },
    // Favicon
    {
      tag: "link",
      attrs: {
        rel: "shortcut icon",
        href: fileWithBase(starlightConfig.favicon.href),
        type: starlightConfig.favicon.type
      }
    },
    // OpenGraph Tags
    { tag: "meta", attrs: { property: "og:title", content: data.title } },
    { tag: "meta", attrs: { property: "og:type", content: "article" } },
    { tag: "meta", attrs: { property: "og:url", content: canonical?.href } },
    { tag: "meta", attrs: { property: "og:locale", content: lang } },
    { tag: "meta", attrs: { property: "og:description", content: description } },
    { tag: "meta", attrs: { property: "og:site_name", content: siteTitle } },
    // Twitter Tags
    {
      tag: "meta",
      attrs: { name: "twitter:card", content: "summary_large_image" }
    },
    { tag: "meta", attrs: { name: "twitter:title", content: data.title } },
    { tag: "meta", attrs: { name: "twitter:description", content: description } }
  ];
  if (description)
    headDefaults.push({
      tag: "meta",
      attrs: { name: "description", content: description }
    });
  if (canonical && starlightConfig.isMultilingual) {
    for (const locale in starlightConfig.locales) {
      const localeOpts = starlightConfig.locales[locale];
      if (!localeOpts) continue;
      headDefaults.push({
        tag: "link",
        attrs: {
          rel: "alternate",
          hreflang: localeOpts.lang,
          href: localizedUrl(canonical, locale).href
        }
      });
    }
  }
  if (Astro2.site) {
    headDefaults.push({
      tag: "link",
      attrs: {
        rel: "sitemap",
        href: fileWithBase("/sitemap-index.xml")
      }
    });
  }
  if (starlightConfig.social?.twitter) {
    headDefaults.push({
      tag: "meta",
      attrs: {
        name: "twitter:site",
        content: new URL(starlightConfig.social.twitter.url).pathname
      }
    });
  }
  const head = createHead(headDefaults, starlightConfig.head, data.head);
  return renderTemplate`${head.map(({ tag: Tag, attrs, content }) => renderTemplate`${renderComponent($$result, "Tag", Tag, { ...attrs }, { "default": ($$result2) => renderTemplate`${unescapeHTML(content)}` })}`)}`;
}, "/var/www/html/cepaonline/node_modules/@astrojs/starlight/components/Head.astro", void 0);

const $$Astro$o = createAstro("https://screwfast.uk");
const $$ViewTransitions = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$o, $$props, $$slots);
  Astro2.self = $$ViewTransitions;
  const { fallback = "animate" } = Astro2.props;
  return renderTemplate`<meta name="astro-view-transitions-enabled" content="true"><meta name="astro-view-transitions-fallback"${addAttribute(fallback, "content")}>${renderScript($$result, "/var/www/html/cepaonline/node_modules/astro/components/ViewTransitions.astro?astro&type=script&index=0&lang.ts")}`;
}, "/var/www/html/cepaonline/node_modules/astro/components/ViewTransitions.astro", void 0);

const $$Astro$n = createAstro("https://screwfast.uk");
const $$ReplacementSwap = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$n, $$props, $$slots);
  Astro2.self = $$ReplacementSwap;
  const { rootAttributesToPreserve = "" } = Astro2.props;
  return renderTemplate`<meta name="vtbot-replace-swap"${addAttribute(rootAttributesToPreserve, "content")}>${renderScript($$result, "/var/www/html/cepaonline/node_modules/astro-vtbot/components/ReplacementSwap.astro?astro&type=script&index=0&lang.ts")}`;
}, "/var/www/html/cepaonline/node_modules/astro-vtbot/components/ReplacementSwap.astro", void 0);

const $$StarlightConnector = createComponent(async ($$result, $$props, $$slots) => {
  return renderTemplate`${renderScript($$result, "/var/www/html/cepaonline/node_modules/astro-vtbot/components/starlight/StarlightConnector.astro?astro&type=script&index=0&lang.ts")}`;
}, "/var/www/html/cepaonline/node_modules/astro-vtbot/components/starlight/StarlightConnector.astro", void 0);

const $$Astro$m = createAstro("https://screwfast.uk");
const $$Base = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$m, $$props, $$slots);
  Astro2.self = $$Base;
  const {
    viewTransitionsFallback,
    replaceSidebarContent,
    retainCurrentPageMarker,
    "data-astro-transition-scope": mainTransitionScope
  } = Astro2.props;
  return renderTemplate`${renderComponent($$result, "ViewTransitions", $$ViewTransitions, { "fallback": viewTransitionsFallback })} ${renderSlot($$result, $$slots["default"])} ${renderComponent($$result, "ReplacementSwap", $$ReplacementSwap, { "rootAttributesToPreserve": "data-theme" })} ${mainTransitionScope && renderTemplate`<meta name="vtbot-main-transition-scope"${addAttribute(mainTransitionScope, "content")}>`} ${replaceSidebarContent && renderTemplate`<meta name="vtbot-starlight-replace-sidebar-content" content="true">`} ${retainCurrentPageMarker && renderTemplate`<meta name="vtbot-starlight-retain-current-page-marker" content="true">`} ${renderComponent($$result, "StarlightConnector", $$StarlightConnector, {})}`;
}, "/var/www/html/cepaonline/node_modules/astro-vtbot/components/starlight/Base.astro", void 0);

const $$Astro$l = createAstro("https://screwfast.uk");
const $$Head = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$l, $$props, $$slots);
  Astro2.self = $$Head;
  Astro2.props.viewTransitionsFallback = "animate";
  return renderTemplate`${renderComponent($$result, "VtbotStarlight", $$Base, { ...Astro2.props }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "StarlightHead", $$Head$1, { ...Astro2.props })} ` })} `;
}, "/var/www/html/cepaonline/src/components/ui/starlight/Head.astro", void 0);

const $$Astro$k = createAstro("https://screwfast.uk");
const $$Select = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$k, $$props, $$slots);
  Astro2.self = $$Select;
  return renderTemplate`${maybeRenderHead()}<label${addAttribute(`--sl-select-width: ${Astro2.props.width}`, "style")} class="astro-4yphtoen"> <span class="sr-only astro-4yphtoen">${Astro2.props.label}</span> ${renderComponent($$result, "Icon", $$Icon, { "name": Astro2.props.icon, "class": "icon label-icon astro-4yphtoen" })} <select${addAttribute(Astro2.props.value, "value")} class="astro-4yphtoen"> ${Astro2.props.options.map(({ value, selected, label }) => renderTemplate`<option${addAttribute(value, "value")}${addAttribute(selected, "selected")} class="astro-4yphtoen">${unescapeHTML(label)}</option>`)} </select> ${renderComponent($$result, "Icon", $$Icon, { "name": "down-caret", "class": "icon caret astro-4yphtoen" })} </label> `;
}, "/var/www/html/cepaonline/node_modules/@astrojs/starlight/components/Select.astro", void 0);

const $$Astro$j = createAstro("https://screwfast.uk");
const $$LanguageSelect = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$j, $$props, $$slots);
  Astro2.self = $$LanguageSelect;
  function localizedPathname(locale) {
    return localizedUrl(Astro2.url, locale).pathname;
  }
  const { labels } = Astro2.props;
  return renderTemplate`${starlightConfig.isMultilingual && renderTemplate`${renderComponent($$result, "starlight-lang-select", "starlight-lang-select", {}, { "default": () => renderTemplate`${renderComponent($$result, "Select", $$Select, { "icon": "translate", "label": labels["languageSelect.accessibleLabel"], "value": localizedPathname(Astro2.props.locale), "options": Object.entries(starlightConfig.locales).map(([code, locale]) => ({
    value: localizedPathname(code),
    selected: code === Astro2.props.locale,
    label: locale.label
  })), "width": "7em" })}` })}`}${renderScript($$result, "/var/www/html/cepaonline/node_modules/@astrojs/starlight/components/LanguageSelect.astro?astro&type=script&index=0&lang.ts")}`;
}, "/var/www/html/cepaonline/node_modules/@astrojs/starlight/components/LanguageSelect.astro", void 0);

var __freeze$1 = Object.freeze;
var __defProp$1 = Object.defineProperty;
var __template$1 = (cooked, raw) => __freeze$1(__defProp$1(cooked, "raw", { value: __freeze$1(cooked.slice()) }));
var _a$1;
const $$Astro$i = createAstro("https://screwfast.uk");
const $$Search = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$i, $$props, $$slots);
  Astro2.self = $$Search;
  const { labels } = Astro2.props;
  const pagefindTranslations = {
    placeholder: labels["search.label"],
    ...Object.fromEntries(
      Object.entries(labels).filter(([key]) => key.startsWith("pagefind.")).map(([key, value]) => [key.replace("pagefind.", ""), value])
    )
  };
  return renderTemplate(_a$1 || (_a$1 = __template$1(["", "  <script>\n	(() => {\n		const openBtn = document.querySelector('button[data-open-modal]');\n		const shortcut = openBtn?.querySelector('kbd');\n		if (!openBtn || !(shortcut instanceof HTMLElement)) return;\n		const platformKey = shortcut.querySelector('kbd');\n		if (platformKey && /(Mac|iPhone|iPod|iPad)/i.test(navigator.platform)) {\n			platformKey.textContent = '⌘';\n			openBtn.setAttribute('aria-keyshortcuts', 'Meta+K');\n		}\n		shortcut.style.display = '';\n	})();\n</script> ", "  "])), renderComponent($$result, "site-search", "site-search", { "data-translations": JSON.stringify(pagefindTranslations), "data-strip-trailing-slash": project.trailingSlash === "never", "class": "astro-v37mnknz" }, { "default": () => renderTemplate` ${maybeRenderHead()}<button data-open-modal disabled${addAttribute(labels["search.label"], "aria-label")} aria-keyshortcuts="Control+K" class="astro-v37mnknz"> ${renderComponent($$result, "Icon", $$Icon, { "name": "magnifier", "class": "astro-v37mnknz" })} <span class="sl-hidden md:sl-block astro-v37mnknz" aria-hidden="true">${labels["search.label"]}</span> <kbd class="sl-hidden md:sl-flex astro-v37mnknz" style="display: none;"> <kbd class="astro-v37mnknz">${labels["search.ctrlKey"]}</kbd><kbd class="astro-v37mnknz">K</kbd> </kbd> </button> <dialog style="padding:0"${addAttribute(labels["search.label"], "aria-label")} class="astro-v37mnknz"> <div class="dialog-frame sl-flex astro-v37mnknz">  <button data-close-modal class="sl-flex md:sl-hidden astro-v37mnknz"> ${labels["search.cancelLabel"]} </button> ${renderTemplate`<div class="search-container astro-v37mnknz"> <div id="starlight__search" class="astro-v37mnknz"></div> </div>`} </div> </dialog> ` }), renderScript($$result, "/var/www/html/cepaonline/node_modules/@astrojs/starlight/components/Search.astro?astro&type=script&index=0&lang.ts"));
}, "/var/www/html/cepaonline/node_modules/@astrojs/starlight/components/Search.astro", void 0);

const mainLogo = "<?xml version=\"1.0\" encoding=\"UTF-8\" standalone=\"no\"?>\n<!-- Created with Inkscape (http://www.inkscape.org/) -->\n\n<svg\n   xmlns:dc=\"http://purl.org/dc/elements/1.1/\"\n   xmlns:cc=\"http://creativecommons.org/ns#\"\n   xmlns:rdf=\"http://www.w3.org/1999/02/22-rdf-syntax-ns#\"\n   xmlns:svg=\"http://www.w3.org/2000/svg\"\n   xmlns=\"http://www.w3.org/2000/svg\"\n   xmlns:sodipodi=\"http://sodipodi.sourceforge.net/DTD/sodipodi-0.dtd\"\n   xmlns:inkscape=\"http://www.inkscape.org/namespaces/inkscape\"\n   version=\"1.1\"\n   id=\"svg2\"\n   width=\"511.89355\"\n   height=\"512.07239\"\n   viewBox=\"0 0 511.89355 512.07239\"\n   sodipodi:docname=\"icon.svg\"\n   inkscape:export-filename=\"/var/www/html/cepaonline/src/images/icon.png\"\n   inkscape:export-xdpi=\"218\"\n   inkscape:export-ydpi=\"218\"\n   inkscape:version=\"0.92.4 (5da689c313, 2019-01-14)\">\n  <metadata\n     id=\"metadata8\">\n    <rdf:RDF>\n      <cc:Work\n         rdf:about=\"\">\n        <dc:format>image/svg+xml</dc:format>\n        <dc:type\n           rdf:resource=\"http://purl.org/dc/dcmitype/StillImage\" />\n        <dc:title />\n      </cc:Work>\n    </rdf:RDF>\n  </metadata>\n  <defs\n     id=\"defs6\" />\n  <sodipodi:namedview\n     pagecolor=\"#ffffff\"\n     bordercolor=\"#666666\"\n     borderopacity=\"1\"\n     objecttolerance=\"10\"\n     gridtolerance=\"10\"\n     guidetolerance=\"10\"\n     inkscape:pageopacity=\"0\"\n     inkscape:pageshadow=\"2\"\n     inkscape:window-width=\"1920\"\n     inkscape:window-height=\"1031\"\n     id=\"namedview4\"\n     showgrid=\"false\"\n     fit-margin-top=\"0\"\n     fit-margin-left=\"0\"\n     fit-margin-right=\"0\"\n     fit-margin-bottom=\"0\"\n     inkscape:zoom=\"0.2229944\"\n     inkscape:cx=\"-2045.7307\"\n     inkscape:cy=\"-234.45836\"\n     inkscape:window-x=\"0\"\n     inkscape:window-y=\"25\"\n     inkscape:window-maximized=\"1\"\n     inkscape:current-layer=\"svg2\" />\n  <path\n     style=\"fill:#003333;fill-opacity:1\"\n     d=\"M 237.89355,511.37303 C 159.3761,505.26685 88.785677,464.53357 45.010537,400.0724 23.133797,367.85775 9.6911172,334.79991 3.5247671,298.05176 -8.9086031,223.95561 11.833977,149.40865 61.276897,90.495889 85.680017,61.418802 119.52754,36.419971 155.24355,21.094736 176.4355,12.001568 194.44311,6.8489495 219.1048,2.8217503 232.21367,0.6811017 234.28521,0.6473173 372.14355,0.3258641 L 511.89355,0 v 46.506057 46.506056 l -138.75,0.334756 c -137.10056,0.330777 -138.86293,0.359964 -148.25,2.455199 -55.33028,12.349962 -99.45829,49.431782 -119.90092,100.755612 -7.903493,19.84274 -11.093453,36.95637 -11.093453,59.51472 0,22.55835 3.18996,39.67198 11.093453,59.51472 20.44263,51.32383 64.57064,88.40565 119.90092,100.75562 9.38707,2.09523 11.14944,2.12442 148.25,2.4552 l 138.75,0.33475 v 46.46986 46.46985 l -134.75,-0.17471 c -74.1125,-0.0961 -136.775,-0.33219 -139.25,-0.52466 z\"\n     id=\"path819\"\n     inkscape:connector-curvature=\"0\"\n     inkscape:export-xdpi=\"218\"\n     inkscape:export-ydpi=\"218\" />\n</svg>\n";

const docsLogo = "<svg viewBox=\"0 0 275 104\" width=\"275\" height=\"104\" fill=\"none\" style=\"height: 1.5rem; margin-bottom: 0.2rem;\" xmlns=\"http://www.w3.org/2000/svg\">\n<path d=\"M69.312 69.616C69.312 79.1733 65.984 87.28 59.328 93.936C52.7573 100.592 44.6933 103.92 35.136 103.92C25.4933 103.92 17.344 100.635 10.688 94.064C4.11733 87.408 0.832001 79.2587 0.832001 69.616C0.832001 60.0587 4.16 51.9947 10.816 45.424C17.472 38.768 25.5787 35.44 35.136 35.44C41.1947 35.44 46.8267 36.9333 52.032 39.92V0.623993H69.312V69.616ZM52.032 69.616C52.032 65.008 50.368 61.04 47.04 57.712C43.712 54.384 39.744 52.72 35.136 52.72C30.4427 52.72 26.432 54.384 23.104 57.712C19.776 60.9547 18.112 64.9227 18.112 69.616C18.112 74.3093 19.776 78.32 23.104 81.648C26.432 84.976 30.4427 86.64 35.136 86.64C39.8293 86.64 43.7973 84.976 47.04 81.648C50.368 78.32 52.032 74.3093 52.032 69.616ZM146.562 69.616C146.562 79.1733 143.234 87.28 136.578 93.936C130.007 100.592 121.943 103.92 112.386 103.92C102.743 103.92 94.594 100.635 87.938 94.064C81.3673 87.408 78.082 79.2587 78.082 69.616C78.082 60.0587 81.41 51.9947 88.066 45.424C94.722 38.768 102.829 35.44 112.386 35.44C121.943 35.44 130.007 38.768 136.578 45.424C143.234 51.9947 146.562 60.0587 146.562 69.616ZM129.282 69.616C129.282 65.008 127.618 61.04 124.29 57.712C120.962 54.384 116.994 52.72 112.386 52.72C107.693 52.72 103.682 54.384 100.354 57.712C97.026 60.9547 95.362 64.9227 95.362 69.616C95.362 74.3093 97.026 78.32 100.354 81.648C103.682 84.976 107.693 86.64 112.386 86.64C117.079 86.64 121.047 84.976 124.29 81.648C127.618 78.32 129.282 74.3093 129.282 69.616ZM213.566 94.32C206.91 100.72 199.017 103.92 189.886 103.92C180.243 103.92 172.094 100.635 165.438 94.064C158.867 87.408 155.582 79.2587 155.582 69.616C155.582 60.0587 158.91 51.9947 165.566 45.424C172.222 38.768 180.329 35.44 189.886 35.44C198.59 35.44 206.185 38.384 212.67 44.272L202.302 58.224C198.974 54.5547 194.835 52.72 189.886 52.72C185.193 52.72 181.182 54.384 177.854 57.712C174.526 60.9547 172.862 64.9227 172.862 69.616C172.862 74.3093 174.526 78.32 177.854 81.648C181.182 84.976 185.193 86.64 189.886 86.64C195.006 86.64 199.23 84.6773 202.558 80.752L213.566 94.32ZM274.05 82.416C274.05 86.512 272.685 90.224 269.954 93.552C264.493 100.208 256.727 103.408 246.658 103.152C242.647 103.067 238.253 102.171 233.474 100.464C228.781 98.7573 224.941 96.624 221.954 94.064L231.554 81.648C236.162 86 241.069 88.176 246.274 88.176H246.658C248.791 88.176 250.711 87.792 252.418 87.024C254.637 86 255.746 84.5493 255.746 82.672V82.16C255.49 80.1973 254.167 78.7893 251.778 77.936C250.839 77.7653 248.834 77.3813 245.762 76.784C241.922 76.016 238.679 75.0773 236.034 73.968C228.269 70.64 224.386 64.7947 224.386 56.432C224.386 48.4107 228.354 42.3947 236.29 38.384C239.789 36.592 243.586 35.6533 247.682 35.568C251.949 35.4827 256.386 36.208 260.994 37.744C266.285 39.536 270.039 41.8827 272.258 44.784L260.738 55.152C257.751 52.1653 254.509 50.672 251.01 50.672C245.549 50.672 242.818 52.464 242.818 56.048V56.304C242.818 58.0107 245.037 59.4613 249.474 60.656C249.815 60.7413 252.631 61.296 257.922 62.32C268.674 64.368 274.05 70.9387 274.05 82.032V82.416Z\" class=\"docs-logo-svg\" fill=\"#404040\"/>\n<style>\n    [data-theme=\"dark\"] .docs-logo-svg {\n      fill: #d4d4d4;\n    }\n</style>\n</svg>\n";

const $$Astro$h = createAstro("https://screwfast.uk");
const $$SiteTitle = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$h, $$props, $$slots);
  Astro2.self = $$SiteTitle;
  const main = "/";
  const locale = Astro2.props.locale ? Astro2.props.locale + "/" : "";
  const docs = "/" + locale + "welcome-to-docs/";
  return renderTemplate`${maybeRenderHead()}<span class="site-title flex astro-cdy74xqe"> <a class="main-logo astro-cdy74xqe"${addAttribute(main, "href")} aria-label="ScrewFast">${unescapeHTML(mainLogo)}</a> <a class="docs-logo astro-cdy74xqe"${addAttribute(docs, "href")} aria-label="ScrewFast Docs">${unescapeHTML(docsLogo)}</a> </span> `;
}, "/var/www/html/cepaonline/src/components/ui/starlight/SiteTitle.astro", void 0);

const $$SocialIcons = createComponent(($$result, $$props, $$slots) => {
  const links = Object.entries(starlightConfig.social || {});
  return renderTemplate`${links.length > 0 && renderTemplate`${renderComponent($$result, "Fragment", Fragment, { "class": "astro-wy4te6ga" }, { "default": ($$result2) => renderTemplate`${links.map(([platform, { label, url }]) => renderTemplate`${maybeRenderHead()}<a${addAttribute(url, "href")} rel="me" class="sl-flex astro-wy4te6ga"><span class="sr-only astro-wy4te6ga">${label}</span>${renderComponent($$result2, "Icon", $$Icon, { "name": platform, "class": "astro-wy4te6ga" })}</a>`)}` })}`}`;
}, "/var/www/html/cepaonline/node_modules/@astrojs/starlight/components/SocialIcons.astro", void 0);

const $$ThemeSelect = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`<!-- Dark Theme Toggle Button -->${maybeRenderHead()}<button type="button" aria-label="Dark Theme Toggle" id="dark-theme-toggle" class="group flex h-8 w-8 items-center justify-center rounded-full font-medium text-neutral-600 outline-none ring-zinc-500 transition duration-300 hover:bg-neutral-200 hover:text-orange-400" data-hs-theme-click-value="dark"> <svg class="h-4 w-4 flex-shrink-0" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"> <path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z"></path> </svg> </button> <!-- Light Theme Toggle Button --> <button type="button" aria-label="Light Theme Toggle" id="light-theme-toggle" class="group flex hidden h-8 w-8 items-center justify-center rounded-full font-medium text-neutral-400 outline-none ring-zinc-500 transition duration-300 hover:bg-neutral-700 hover:text-orange-400" data-hs-theme-click-value="light"> <svg class="h-4 w-4 flex-shrink-0" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"> <circle cx="12" cy="12" r="4"></circle> <path d="M12 8a2 2 0 1 0 4 4"></path> <path d="M12 2v2"></path> <path d="M12 20v2"></path> <path d="m4.93 4.93 1.41 1.41"></path> <path d="m17.66 17.66 1.41 1.41"></path> <path d="M2 12h2"></path> <path d="M20 12h2"></path> <path d="m6.34 17.66-1.41 1.41"></path> <path d="m19.07 4.93-1.41 1.41"></path> </svg> </button> ${renderScript($$result, "/var/www/html/cepaonline/src/components/ui/starlight/ThemeSelect.astro?astro&type=script&index=0&lang.ts")}`;
}, "/var/www/html/cepaonline/src/components/ui/starlight/ThemeSelect.astro", void 0);

const $$Astro$g = createAstro("https://screwfast.uk");
const $$Header = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$g, $$props, $$slots);
  Astro2.self = $$Header;
  const shouldRenderSearch = starlightConfig.pagefind || starlightConfig.components.Search !== "@astrojs/starlight/components/Search.astro";
  return renderTemplate`${maybeRenderHead()}<div class="header sl-flex astro-kmkmnagf"> <div class="title-wrapper sl-flex astro-kmkmnagf"> ${renderComponent($$result, "SiteTitle", $$SiteTitle, { ...Astro2.props, "class": "astro-kmkmnagf" })} </div> <div class="sl-flex astro-kmkmnagf"> ${shouldRenderSearch && renderTemplate`${renderComponent($$result, "Search", $$Search, { ...Astro2.props, "class": "astro-kmkmnagf" })}`} </div> <div class="sl-hidden md:sl-flex right-group astro-kmkmnagf"> <div class="sl-flex social-icons astro-kmkmnagf"> ${renderComponent($$result, "SocialIcons", $$SocialIcons, { ...Astro2.props, "class": "astro-kmkmnagf" })} </div> ${renderComponent($$result, "ThemeSelect", $$ThemeSelect, { ...Astro2.props, "class": "astro-kmkmnagf" })} ${renderComponent($$result, "LanguageSelect", $$LanguageSelect, { ...Astro2.props, "class": "astro-kmkmnagf" })} </div> </div> `;
}, "/var/www/html/cepaonline/node_modules/@astrojs/starlight/components/Header.astro", void 0);

const $$Astro$f = createAstro("https://screwfast.uk");
const $$CallToAction = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$f, $$props, $$slots);
  Astro2.self = $$CallToAction;
  const { link, variant, icon } = Astro2.props;
  const { class: customClass, ...attrs } = Astro2.props.attrs || {};
  return renderTemplate`${maybeRenderHead()}<a${addAttribute([["sl-flex action", variant, customClass], "astro-yjy4zhro"], "class:list")}${addAttribute(link, "href")}${spreadAttributes(attrs)}> ${renderSlot($$result, $$slots["default"])} ${icon?.type === "icon" && renderTemplate`${renderComponent($$result, "Icon", $$Icon, { "name": icon.name, "size": "1.5rem", "class": "astro-yjy4zhro" })}`} ${icon?.type === "raw" && renderTemplate`${renderComponent($$result, "Fragment", Fragment, {}, { "default": ($$result2) => renderTemplate`${unescapeHTML(icon.html)}` })}`} </a> `;
}, "/var/www/html/cepaonline/node_modules/@astrojs/starlight/components/CallToAction.astro", void 0);

const $$Astro$e = createAstro("https://screwfast.uk");
const $$Hero = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$e, $$props, $$slots);
  Astro2.self = $$Hero;
  const { data } = Astro2.props.entry;
  const { title = data.title, tagline, image, actions = [] } = data.hero || {};
  const imageAttrs = {
    loading: "eager",
    decoding: "async",
    width: 400,
    height: 400,
    alt: image?.alt || ""
  };
  let darkImage;
  let lightImage;
  let rawHtml;
  if (image) {
    if ("file" in image) {
      darkImage = image.file;
    } else if ("dark" in image) {
      darkImage = image.dark;
      lightImage = image.light;
    } else {
      rawHtml = image.html;
    }
  }
  return renderTemplate`${maybeRenderHead()}<div class="hero astro-jbfsktt5"> ${darkImage && renderTemplate`${renderComponent($$result, "Image", $$Image, { "src": darkImage, ...imageAttrs, "class:list": [{ "light:sl-hidden": Boolean(lightImage) }, "astro-jbfsktt5"] })}`} ${lightImage && renderTemplate`${renderComponent($$result, "Image", $$Image, { "src": lightImage, ...imageAttrs, "class": "dark:sl-hidden astro-jbfsktt5" })}`} ${rawHtml && renderTemplate`<div class="hero-html sl-flex astro-jbfsktt5">${unescapeHTML(rawHtml)}</div>`} <div class="sl-flex stack astro-jbfsktt5"> <div class="sl-flex copy astro-jbfsktt5"> <h1${addAttribute(PAGE_TITLE_ID, "id")} data-page-title class="astro-jbfsktt5">${unescapeHTML(title)}</h1> ${tagline && renderTemplate`<div class="tagline astro-jbfsktt5">${unescapeHTML(tagline)}</div>`} </div> ${actions.length > 0 && renderTemplate`<div class="sl-flex actions astro-jbfsktt5"> ${actions.map(({ text, ...attrs }) => renderTemplate`${renderComponent($$result, "CallToAction", $$CallToAction, { ...attrs, "class": "astro-jbfsktt5" }, { "default": ($$result2) => renderTemplate`${unescapeHTML(text)}` })}`)} </div>`} </div> </div> `;
}, "/var/www/html/cepaonline/node_modules/@astrojs/starlight/components/Hero.astro", void 0);

const $$MarkdownContent = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<div class="sl-markdown-content">${renderSlot($$result, $$slots["default"])}</div>`;
}, "/var/www/html/cepaonline/node_modules/@astrojs/starlight/components/MarkdownContent.astro", void 0);

const $$Astro$d = createAstro("https://screwfast.uk");
const $$MobileMenuToggle = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$d, $$props, $$slots);
  Astro2.self = $$MobileMenuToggle;
  const { labels } = Astro2.props;
  return renderTemplate`${renderComponent($$result, "starlight-menu-button", "starlight-menu-button", { "class": "astro-jif73yzw" }, { "default": () => renderTemplate` ${maybeRenderHead()}<button aria-expanded="false"${addAttribute(labels["menuButton.accessibleLabel"], "aria-label")} aria-controls="starlight__sidebar" class="sl-flex md:sl-hidden astro-jif73yzw"> ${renderComponent($$result, "Icon", $$Icon, { "name": "bars", "class": "astro-jif73yzw" })} </button> ` })} ${renderScript($$result, "/var/www/html/cepaonline/node_modules/@astrojs/starlight/components/MobileMenuToggle.astro?astro&type=script&index=0&lang.ts")}  `;
}, "/var/www/html/cepaonline/node_modules/@astrojs/starlight/components/MobileMenuToggle.astro", void 0);

const $$Astro$c = createAstro("https://screwfast.uk");
const $$PageFrame = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$c, $$props, $$slots);
  Astro2.self = $$PageFrame;
  const { hasSidebar, labels } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div class="page sl-flex astro-vrdttmbt"> <header class="header astro-vrdttmbt">${renderSlot($$result, $$slots["header"])}</header> ${hasSidebar && renderTemplate`<nav class="sidebar astro-vrdttmbt"${addAttribute(labels["sidebarNav.accessibleLabel"], "aria-label")}> ${renderComponent($$result, "MobileMenuToggle", $$MobileMenuToggle, { ...Astro2.props, "class": "astro-vrdttmbt" })} <div id="starlight__sidebar" class="sidebar-pane astro-vrdttmbt"> <div class="sidebar-content sl-flex astro-vrdttmbt"> ${renderSlot($$result, $$slots["sidebar"])} </div> </div> </nav>`} <div class="main-frame astro-vrdttmbt">${renderSlot($$result, $$slots["default"])}</div> </div> `;
}, "/var/www/html/cepaonline/node_modules/@astrojs/starlight/components/PageFrame.astro", void 0);

const $$Astro$b = createAstro("https://screwfast.uk");
const $$TableOfContentsList = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$b, $$props, $$slots);
  Astro2.self = $$TableOfContentsList;
  const { toc, isMobile = false, depth = 0 } = Astro2.props;
  const $$definedVars = defineStyleVars([{ depth }]);
  return renderTemplate`${maybeRenderHead()}<ul${addAttribute([{ isMobile }, "astro-g2bywc46"], "class:list")}${addAttribute($$definedVars, "style")}> ${toc.map((heading) => renderTemplate`<li class="astro-g2bywc46"${addAttribute($$definedVars, "style")}> <a${addAttribute("#" + heading.slug, "href")} class="astro-g2bywc46"${addAttribute($$definedVars, "style")}> <span class="astro-g2bywc46"${addAttribute($$definedVars, "style")}>${heading.text}</span> </a> ${heading.children.length > 0 && renderTemplate`${renderComponent($$result, "Astro.self", Astro2.self, { "toc": heading.children, "depth": depth + 1, "isMobile": isMobile, "class": "astro-g2bywc46" })}`} </li>`)} </ul> `;
}, "/var/www/html/cepaonline/node_modules/@astrojs/starlight/components/TableOfContents/TableOfContentsList.astro", void 0);

const $$Astro$a = createAstro("https://screwfast.uk");
const $$MobileTableOfContents = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$a, $$props, $$slots);
  Astro2.self = $$MobileTableOfContents;
  const { labels, toc } = Astro2.props;
  return renderTemplate`${toc && renderTemplate`${renderComponent($$result, "mobile-starlight-toc", "mobile-starlight-toc", { "data-min-h": toc.minHeadingLevel, "data-max-h": toc.maxHeadingLevel, "class": "astro-doynk5tl" }, { "default": () => renderTemplate`${maybeRenderHead()}<nav aria-labelledby="starlight__on-this-page--mobile" class="astro-doynk5tl"><details id="starlight__mobile-toc" class="astro-doynk5tl"><summary id="starlight__on-this-page--mobile" class="sl-flex astro-doynk5tl"><div class="toggle sl-flex astro-doynk5tl">${labels["tableOfContents.onThisPage"]}${renderComponent($$result, "Icon", $$Icon, { "name": "right-caret", "class": "caret astro-doynk5tl", "size": "1rem" })}</div><span class="display-current astro-doynk5tl"></span></summary><div class="dropdown astro-doynk5tl">${renderComponent($$result, "TableOfContentsList", $$TableOfContentsList, { "toc": toc.items, "isMobile": true, "class": "astro-doynk5tl" })}</div></details></nav>` })}`}${renderScript($$result, "/var/www/html/cepaonline/node_modules/@astrojs/starlight/components/MobileTableOfContents.astro?astro&type=script&index=0&lang.ts")}`;
}, "/var/www/html/cepaonline/node_modules/@astrojs/starlight/components/MobileTableOfContents.astro", void 0);

const $$Astro$9 = createAstro("https://screwfast.uk");
const $$TableOfContents = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$9, $$props, $$slots);
  Astro2.self = $$TableOfContents;
  const { labels, toc } = Astro2.props;
  return renderTemplate`${toc && renderTemplate`${renderComponent($$result, "starlight-toc", "starlight-toc", { "data-min-h": toc.minHeadingLevel, "data-max-h": toc.maxHeadingLevel }, { "default": () => renderTemplate`${maybeRenderHead()}<nav aria-labelledby="starlight__on-this-page"><h2 id="starlight__on-this-page">${labels["tableOfContents.onThisPage"]}</h2>${renderComponent($$result, "TableOfContentsList", $$TableOfContentsList, { "toc": toc.items })}</nav>` })}`}${renderScript($$result, "/var/www/html/cepaonline/node_modules/@astrojs/starlight/components/TableOfContents.astro?astro&type=script&index=0&lang.ts")}`;
}, "/var/www/html/cepaonline/node_modules/@astrojs/starlight/components/TableOfContents.astro", void 0);

const $$Astro$8 = createAstro("https://screwfast.uk");
const $$PageSidebar = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$8, $$props, $$slots);
  Astro2.self = $$PageSidebar;
  return renderTemplate`${Astro2.props.toc && renderTemplate`${renderComponent($$result, "Fragment", Fragment, { "class": "astro-pb3aqygn" }, { "default": ($$result2) => renderTemplate`${maybeRenderHead()}<div class="lg:sl-hidden astro-pb3aqygn">${renderComponent($$result2, "MobileTableOfContents", $$MobileTableOfContents, { ...Astro2.props, "class": "astro-pb3aqygn" })}</div><div class="right-sidebar-panel sl-hidden lg:sl-block astro-pb3aqygn"><div class="sl-container astro-pb3aqygn">${renderComponent($$result2, "TableOfContents", $$TableOfContents, { ...Astro2.props, "class": "astro-pb3aqygn" })}</div></div>` })}`}`;
}, "/var/www/html/cepaonline/node_modules/@astrojs/starlight/components/PageSidebar.astro", void 0);

const $$Astro$7 = createAstro("https://screwfast.uk");
const $$PageTitle = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$7, $$props, $$slots);
  Astro2.self = $$PageTitle;
  return renderTemplate`${maybeRenderHead()}<h1${addAttribute(PAGE_TITLE_ID, "id")} class="astro-j6tvhyss">${Astro2.props.entry.data.title}</h1> `;
}, "/var/www/html/cepaonline/node_modules/@astrojs/starlight/components/PageTitle.astro", void 0);

const $$ThemeSelectMobile = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`<!-- Dark Theme Toggle Button -->${maybeRenderHead()}<button type="button" aria-label="Dark Theme Toggle" id="dark-theme-toggle-mobile" class="group flex h-8 w-8 items-center justify-center rounded-full font-medium text-neutral-600 outline-none ring-zinc-500 transition duration-300 hover:bg-neutral-200 hover:text-orange-400" data-hs-theme-click-value="dark"> <svg class="h-4 w-4 flex-shrink-0" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"> <path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z"></path> </svg> </button> <!-- Light Theme Toggle Button --> <button type="button" aria-label="Light Theme Toggle" id="light-theme-toggle-mobile" class="group flex hidden h-8 w-8 items-center justify-center rounded-full font-medium text-neutral-400 outline-none ring-zinc-500 transition duration-300 hover:bg-neutral-700 hover:text-orange-400" data-hs-theme-click-value="light"> <svg class="h-4 w-4 flex-shrink-0" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"> <circle cx="12" cy="12" r="4"></circle> <path d="M12 8a2 2 0 1 0 4 4"></path> <path d="M12 2v2"></path> <path d="M12 20v2"></path> <path d="m4.93 4.93 1.41 1.41"></path> <path d="m17.66 17.66 1.41 1.41"></path> <path d="M2 12h2"></path> <path d="M20 12h2"></path> <path d="m6.34 17.66-1.41 1.41"></path> <path d="m19.07 4.93-1.41 1.41"></path> </svg> </button> ${renderScript($$result, "/var/www/html/cepaonline/src/components/ui/starlight/ThemeSelectMobile.astro?astro&type=script&index=0&lang.ts")}`;
}, "/var/www/html/cepaonline/src/components/ui/starlight/ThemeSelectMobile.astro", void 0);

const $$Astro$6 = createAstro("https://screwfast.uk");
const $$MobileMenuFooter = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$6, $$props, $$slots);
  Astro2.self = $$MobileMenuFooter;
  return renderTemplate`${maybeRenderHead()}<div class="mobile-preferences sl-flex astro-5znlxet7"> <div class="sl-flex social-icons astro-5znlxet7"> ${renderComponent($$result, "SocialIcons", $$SocialIcons, { ...Astro2.props, "class": "astro-5znlxet7" }, { "default": ($$result2) => renderTemplate`${renderSlot($$result2, $$slots["default"])}` })} </div> ${renderComponent($$result, "ThemeSelect", $$ThemeSelectMobile, { "class": "astro-5znlxet7" })} ${renderComponent($$result, "LanguageSelect", $$LanguageSelect, { ...Astro2.props, "class": "astro-5znlxet7" }, { "default": ($$result2) => renderTemplate`${renderSlot($$result2, $$slots["default"])}` })} </div> `;
}, "/var/www/html/cepaonline/src/components/ui/starlight/MobileMenuFooter.astro", void 0);

const $$Astro$5 = createAstro("https://screwfast.uk");
const $$SidebarSublist = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$5, $$props, $$slots);
  Astro2.self = $$SidebarSublist;
  const { sublist, nested } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<ul${addAttribute([{ "top-level": !nested }, "astro-3ii7xxms"], "class:list")}> ${sublist.map((entry) => renderTemplate`<li class="astro-3ii7xxms"> ${entry.type === "link" ? renderTemplate`<a${addAttribute(entry.href, "href")}${addAttribute(entry.isCurrent && "page", "aria-current")}${addAttribute([[{ large: !nested }, entry.attrs.class], "astro-3ii7xxms"], "class:list")}${spreadAttributes(entry.attrs)}> <span class="astro-3ii7xxms">${entry.label}</span> ${entry.badge && renderTemplate`${renderComponent($$result, "Badge", $$Badge, { "variant": entry.badge.variant, "class": (entry.badge.class ?? "") + " astro-3ii7xxms", "text": entry.badge.text })}`} </a>` : renderTemplate`<details${addAttribute(flattenSidebar(entry.entries).some((i) => i.isCurrent) || !entry.collapsed, "open")} class="astro-3ii7xxms"> <summary class="astro-3ii7xxms"> <div class="group-label astro-3ii7xxms"> <span class="large astro-3ii7xxms">${entry.label}</span> ${entry.badge && renderTemplate`${renderComponent($$result, "Badge", $$Badge, { "variant": entry.badge.variant, "class": (entry.badge.class ?? "") + " astro-3ii7xxms", "text": entry.badge.text })}`} </div> ${renderComponent($$result, "Icon", $$Icon, { "name": "right-caret", "class": "caret astro-3ii7xxms", "size": "1.25rem" })} </summary> ${renderComponent($$result, "Astro.self", Astro2.self, { "sublist": entry.entries, "nested": true, "class": "astro-3ii7xxms" })} </details>`} </li>`)} </ul> `;
}, "/var/www/html/cepaonline/node_modules/@astrojs/starlight/components/SidebarSublist.astro", void 0);

const $$Astro$4 = createAstro("https://screwfast.uk");
const $$Sidebar = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$4, $$props, $$slots);
  Astro2.self = $$Sidebar;
  const { sidebar } = Astro2.props;
  return renderTemplate`${renderComponent($$result, "SidebarSublist", $$SidebarSublist, { "sublist": sidebar })} ${maybeRenderHead()}<div class="md:sl-hidden"> ${renderComponent($$result, "MobileMenuFooter", $$MobileMenuFooter, { ...Astro2.props })} </div>`;
}, "/var/www/html/cepaonline/node_modules/@astrojs/starlight/components/Sidebar.astro", void 0);

const $$Astro$3 = createAstro("https://screwfast.uk");
const $$SkipLink = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$3, $$props, $$slots);
  Astro2.self = $$SkipLink;
  const { labels } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<a${addAttribute(`#${PAGE_TITLE_ID}`, "href")} class="astro-7q3lir66">${labels["skipLink.label"]}</a> `;
}, "/var/www/html/cepaonline/node_modules/@astrojs/starlight/components/SkipLink.astro", void 0);

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(raw || cooked.slice()) }));
var _a;
const $$ThemeProvider = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate(_a || (_a = __template(["<script>\n	window.StarlightThemeProvider = (() => {\n		const storedTheme =\n			typeof localStorage !== 'undefined' && localStorage.getItem('starlight-theme');\n		const theme =\n			storedTheme ||\n			(window.matchMedia('(prefers-color-scheme: light)').matches ? 'light' : 'dark');\n		document.documentElement.dataset.theme = theme === 'light' ? 'light' : 'dark';\n		return {\n			updatePickers(theme = storedTheme || 'auto') {\n				document.querySelectorAll('starlight-theme-select').forEach((picker) => {\n					const select = picker.querySelector('select');\n					if (select) select.value = theme;\n					/** @type {HTMLTemplateElement | null} */\n					const tmpl = document.querySelector(`#theme-icons`);\n					const newIcon = tmpl && tmpl.content.querySelector('.' + theme);\n					if (newIcon) {\n						const oldIcon = picker.querySelector('svg.label-icon');\n						if (oldIcon) {\n							oldIcon.replaceChildren(...newIcon.cloneNode(true).childNodes);\n						}\n					}\n				});\n			},\n		};\n	})();\n<\/script><template id=\"theme-icons\">", "", "", "</template>"], ["<script>\n	window.StarlightThemeProvider = (() => {\n		const storedTheme =\n			typeof localStorage !== 'undefined' && localStorage.getItem('starlight-theme');\n		const theme =\n			storedTheme ||\n			(window.matchMedia('(prefers-color-scheme: light)').matches ? 'light' : 'dark');\n		document.documentElement.dataset.theme = theme === 'light' ? 'light' : 'dark';\n		return {\n			updatePickers(theme = storedTheme || 'auto') {\n				document.querySelectorAll('starlight-theme-select').forEach((picker) => {\n					const select = picker.querySelector('select');\n					if (select) select.value = theme;\n					/** @type {HTMLTemplateElement | null} */\n					const tmpl = document.querySelector(\\`#theme-icons\\`);\n					const newIcon = tmpl && tmpl.content.querySelector('.' + theme);\n					if (newIcon) {\n						const oldIcon = picker.querySelector('svg.label-icon');\n						if (oldIcon) {\n							oldIcon.replaceChildren(...newIcon.cloneNode(true).childNodes);\n						}\n					}\n				});\n			},\n		};\n	})();\n<\/script><template id=\"theme-icons\">", "", "", "</template>"])), renderComponent($$result, "Icon", $$Icon, { "name": "sun", "class": "light" }), renderComponent($$result, "Icon", $$Icon, { "name": "moon", "class": "dark" }), renderComponent($$result, "Icon", $$Icon, { "name": "laptop", "class": "auto" }));
}, "/var/www/html/cepaonline/node_modules/@astrojs/starlight/components/ThemeProvider.astro", void 0);

const $$Astro$2 = createAstro("https://screwfast.uk");
const $$TwoColumnContent = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$TwoColumnContent;
  return renderTemplate`${maybeRenderHead()}<div class="lg:sl-flex astro-67yu43on"> ${Astro2.props.toc && renderTemplate`<aside class="right-sidebar-container astro-67yu43on"> <div class="right-sidebar astro-67yu43on"> ${renderSlot($$result, $$slots["right-sidebar"])} </div> </aside>`} <div class="main-pane astro-67yu43on">${renderSlot($$result, $$slots["default"])}</div> </div> `;
}, "/var/www/html/cepaonline/node_modules/@astrojs/starlight/components/TwoColumnContent.astro", void 0);

const $$Astro$1 = createAstro("https://screwfast.uk");
const $$Page = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$Page;
  const pagefindEnabled = Astro2.props.entry.slug !== "404" && !Astro2.props.entry.slug.endsWith("/404") && Astro2.props.entry.data.pagefind !== false;
  return renderTemplate`<html${addAttribute(Astro2.props.lang, "lang")}${addAttribute(Astro2.props.dir, "dir")}${addAttribute(Boolean(Astro2.props.toc), "data-has-toc")}${addAttribute(Astro2.props.hasSidebar, "data-has-sidebar")}${addAttribute(Boolean(Astro2.props.entry.data.hero), "data-has-hero")} data-theme="dark" class="astro-bguv2lll"> <head>${renderComponent($$result, "Head", $$Head, { ...Astro2.props, "class": "astro-bguv2lll" })}${renderComponent($$result, "ThemeProvider", $$ThemeProvider, { ...Astro2.props, "class": "astro-bguv2lll" })}${renderHead()}</head> <body class="astro-bguv2lll"> ${renderComponent($$result, "SkipLink", $$SkipLink, { ...Astro2.props, "class": "astro-bguv2lll" })} ${renderComponent($$result, "PageFrame", $$PageFrame, { ...Astro2.props, "class": "astro-bguv2lll" }, { "default": ($$result2) => renderTemplate`  ${renderComponent($$result2, "TwoColumnContent", $$TwoColumnContent, { ...Astro2.props, "class": "astro-bguv2lll" }, { "default": ($$result3) => renderTemplate`  <main${addAttribute(pagefindEnabled, "data-pagefind-body")}${addAttribute(Astro2.props.entryMeta.lang, "lang")}${addAttribute(Astro2.props.entryMeta.dir, "dir")} class="astro-bguv2lll">  ${renderComponent($$result3, "Banner", $$Banner, { ...Astro2.props, "class": "astro-bguv2lll" })} ${Astro2.props.entry.data.hero ? renderTemplate`${renderComponent($$result3, "ContentPanel", $$ContentPanel, { ...Astro2.props, "class": "astro-bguv2lll" }, { "default": ($$result4) => renderTemplate` ${renderComponent($$result4, "Hero", $$Hero, { ...Astro2.props, "class": "astro-bguv2lll" })} ${renderComponent($$result4, "MarkdownContent", $$MarkdownContent, { ...Astro2.props, "class": "astro-bguv2lll" }, { "default": ($$result5) => renderTemplate` ${renderSlot($$result5, $$slots["default"])} ` })} ${renderComponent($$result4, "Footer", $$Footer, { ...Astro2.props, "class": "astro-bguv2lll" })} ` })}` : renderTemplate`${renderComponent($$result3, "Fragment", Fragment, { "class": "astro-bguv2lll" }, { "default": ($$result4) => renderTemplate` ${renderComponent($$result4, "ContentPanel", $$ContentPanel, { ...Astro2.props, "class": "astro-bguv2lll" }, { "default": ($$result5) => renderTemplate` ${renderComponent($$result5, "PageTitle", $$PageTitle, { ...Astro2.props, "class": "astro-bguv2lll" })} ${Astro2.props.entry.data.draft && renderTemplate`${renderComponent($$result5, "DraftContentNotice", $$DraftContentNotice, { ...Astro2.props, "class": "astro-bguv2lll" })}`}${Astro2.props.isFallback && renderTemplate`${renderComponent($$result5, "FallbackContentNotice", $$FallbackContentNotice, { ...Astro2.props, "class": "astro-bguv2lll" })}`}` })} ${renderComponent($$result4, "ContentPanel", $$ContentPanel, { ...Astro2.props, "class": "astro-bguv2lll" }, { "default": ($$result5) => renderTemplate` ${renderComponent($$result5, "MarkdownContent", $$MarkdownContent, { ...Astro2.props, "class": "astro-bguv2lll" }, { "default": ($$result6) => renderTemplate` ${renderSlot($$result6, $$slots["default"])} ` })} ${renderComponent($$result5, "Footer", $$Footer, { ...Astro2.props, "class": "astro-bguv2lll" })} ` })} ` })}`} </main> `, "right-sidebar": ($$result3) => renderTemplate`${renderComponent($$result3, "PageSidebar", $$PageSidebar, { "slot": "right-sidebar", ...Astro2.props, "class": "astro-bguv2lll" })}` })} `, "header": ($$result2) => renderTemplate`${renderComponent($$result2, "Header", $$Header, { "slot": "header", ...Astro2.props, "class": "astro-bguv2lll" })}`, "sidebar": ($$result2) => renderTemplate`${Astro2.props.hasSidebar && renderTemplate`${renderComponent($$result2, "Sidebar", $$Sidebar, { "slot": "sidebar", ...Astro2.props, "class": "astro-bguv2lll" })}`}` })} </body></html>`;
}, "/var/www/html/cepaonline/node_modules/@astrojs/starlight/components/Page.astro", void 0);

const $$Astro = createAstro("https://screwfast.uk");
const prerender = true;
async function getStaticPaths() {
  return paths;
}
const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Index;
  const { Content, headings } = await Astro2.props.entry.render();
  const route = generateRouteData({ props: { ...Astro2.props, headings }, url: Astro2.url });
  return renderTemplate`${renderComponent($$result, "Page", $$Page, { ...route }, { "default": ($$result2) => renderTemplate`${renderComponent($$result2, "Content", Content, { "frontmatter": Astro2.props.entry.data })}` })}`;
}, "/var/www/html/cepaonline/node_modules/@astrojs/starlight/index.astro", void 0);

const $$file = "/var/www/html/cepaonline/node_modules/@astrojs/starlight/index.astro";
const $$url = undefined;

const index = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: $$Index,
	file: $$file,
	getStaticPaths,
	prerender,
	url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

export { BuiltInDefaultLocale as B, index as i, starlightConfig as s, useTranslations as u };
