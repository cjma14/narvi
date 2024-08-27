import { b as createComponent, d as renderTemplate, m as maybeRenderHead, u as unescapeHTML } from './astro/server_CxlEycRW.mjs';
import 'kleur/colors';
import 'clsx';

const html = "";

				const frontmatter = {"title":"High-quality Design","desc":"Lorem ipsum dolor sit amet, consectetur adipiscing elit. In convallis tortor.","img":"/images/icon/icon-02.svg"};
				const file = "/var/www/html/cepaonline/src/content/features/High-quality-Design.md";
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
