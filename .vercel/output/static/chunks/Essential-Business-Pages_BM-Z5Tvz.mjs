import { b as createComponent, d as renderTemplate, m as maybeRenderHead, u as unescapeHTML } from './astro/server_CxlEycRW.mjs';
import 'kleur/colors';
import 'clsx';

const html = "<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut ultricies lacus non fermentum ultrices. Fusce consectetur le.</p>\n<p>Nam id eleifend dui, id iaculis purus. Etiam lobortis neque nec finibus sagittis. Nulla ligula nunc egestas ut.</p>";

				const frontmatter = {"featureName":"Essential Business Pages","title":"Ready to Use Pages You Need for a SaaS Business.","lightImg":"/images/features/features-light-01.png","darkImg":"/images/features/features-dark-01.svg"};
				const file = "/var/www/html/cepaonline/src/content/featureTab/Essential-Business-Pages.md";
				const url = undefined;
				function rawContent() {
					return "\nLorem ipsum dolor sit amet, consectetur adipiscing elit. Ut ultricies lacus non fermentum ultrices. Fusce consectetur le.\n\nNam id eleifend dui, id iaculis purus. Etiam lobortis neque nec finibus sagittis. Nulla ligula nunc egestas ut.\n";
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
