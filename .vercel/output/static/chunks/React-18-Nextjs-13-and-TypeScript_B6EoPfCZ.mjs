import { b as createComponent, d as renderTemplate, m as maybeRenderHead, u as unescapeHTML } from './astro/server_CxlEycRW.mjs';
import 'kleur/colors';
import 'clsx';

const html = "";

				const frontmatter = {"title":"React 18, Next.js 13 and TypeScript","subTitle":"Ut ultricies lacus non fermentum ultrices."};
				const file = "/var/www/html/cepaonline/src/content/about/React-18-Nextjs-13-and-TypeScript.md";
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
