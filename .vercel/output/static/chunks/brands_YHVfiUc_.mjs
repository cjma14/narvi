import { b as createComponent, d as renderTemplate, m as maybeRenderHead, u as unescapeHTML } from './astro/server_CxlEycRW.mjs';
import 'kleur/colors';
import 'clsx';

const html = "";

				const frontmatter = {"brandsDark":["/images/brand/brand-dark-06.svg","/images/brand/brand-dark-05.svg","/images/brand/brand-dark-03.svg","/images/brand/brand-dark-04.svg","/images/brand/brand-dark-02.svg","/images/brand/brand-dark-01.svg"],"brandsLight":["/images/brand/brand-light-06.svg","/images/brand/brand-light-05.svg","/images/brand/brand-light-03.svg","/images/brand/brand-light-04.svg","/images/brand/brand-light-02.svg","/images/brand/brand-light-01.svg"]};
				const file = "/var/www/html/cepaonline/src/content/brands/brands.md";
				const url = undefined;
				function rawContent() {
					return "";
				}
				function compiledContent() {
					return html;
				}
				function getHeadings() {
					return [];
				}

				const Content = createComponent((result, _props, slots) => {
					const { layout, ...content } = frontmatter;
					content.file = file;
					content.url = url;

					return renderTemplate`${maybeRenderHead()}${unescapeHTML(html)}`;
				});

export { Content, compiledContent, Content as default, file, frontmatter, getHeadings, rawContent, url };
