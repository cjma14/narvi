import { b as createComponent, d as renderTemplate, m as maybeRenderHead, u as unescapeHTML } from './astro/server_CxlEycRW.mjs';
import 'kleur/colors';
import 'clsx';

const html = "";

				const frontmatter = {"user":"Jhon Abraham","img":"/images/user/user-02.png","occupation":"Founder @democompany","review":"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris hendrerit, ligula sit amet cursus tincidunt, lorem sem elementum nisi, convallis fringilla ante nibh non urna."};
				const file = "/var/www/html/cepaonline/src/content/testimonials/Jhon-Abraham.md";
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
