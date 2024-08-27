import { b as createComponent, d as renderTemplate, m as maybeRenderHead, u as unescapeHTML } from './astro/server_CxlEycRW.mjs';
import 'kleur/colors';
import 'clsx';

const html = "";

				const frontmatter = {"sieName":"Solid","logoLight":"/images/logo/logo-light.svg","logoDark":"/images/logo/logo-dark.svg","siteName":"Solid","desc":"Lorem ipsum dolor sit amet, consectetur adipiscing elit.","contact":{"location":"290 Maryam Springs 260, Courbevoie, Paris, France","email":"themepirates.business@gmail.com","number":9423346343843},"links":{"fb":"https://www.facebook.com","twitter":"https://www.x.com","linkedIn":"https://www.linkedin.com"}};
				const file = "/var/www/html/cepaonline/src/content/siteConfig/config.md";
				const url = undefined;
				function rawContent() {
					return "\n";
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
