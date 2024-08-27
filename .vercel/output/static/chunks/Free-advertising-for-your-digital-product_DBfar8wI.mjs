import { b as createComponent, d as renderTemplate, m as maybeRenderHead, u as unescapeHTML } from './astro/server_CxlEycRW.mjs';
import 'kleur/colors';
import 'clsx';

const html = "<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc quis nibh lorem. Duis sed odio lorem. In a efficitur leo. Ut venenatis rhoncus quam sed condimentum. Curabitur vel turpis in dolor volutpat imperdiet in ut mi. Integer non volutpat nulla. Nunc elementum elit viverra, tempus quam non, interdum ipsum.</p>\n<p>Aenean augue ex, condimentum vel metus vitae, aliquam porta elit. Quisque non metus ac orci mollis posuere. Mauris vel ipsum a diam interdum ultricies sed vitae neque. Nulla porttitor quam vitae pulvinar placerat. Nulla fringilla elit sit amet justo feugiat sodales. Morbi eleifend, enim non eleifend laoreet, odio libero lobortis lectus, non porttitor sem urna sit amet metus. In sollicitudin quam est, pellentesque consectetur felis fermentum vitae.</p>\n<h3 id=\"nunc-elementum-elit-viverra-tempus-quam-non\">Nunc elementum elit viverra, tempus quam non</h3>\n<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc quis nibh lorem. Duis sed odio lorem. In a efficitur leo. Ut venenatis rhoncus quam sed condimentum. Curabitur vel turpis in dolor volutpat imperdiet in ut mi. Integer non volutpat nulla. Nunc elementum elit viverra, tempus quam non, interdum ipsum.</p>";

				const frontmatter = {"title":"Free advertising for your digital product","date":"2024-03-31T18:30:00.000Z","category":"Blog","author":"John Doe","tags":["marketing","business"],"bannerImg":"/images/blog/blog-03.png","cardImg":"/images/blog/blog-03.png"};
				const file = "/var/www/html/cepaonline/src/content/blogs/Free-advertising-for-your-digital-product.md";
				const url = undefined;
				function rawContent() {
					return "\nLorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc quis nibh lorem. Duis sed odio lorem. In a efficitur leo. Ut venenatis rhoncus quam sed condimentum. Curabitur vel turpis in dolor volutpat imperdiet in ut mi. Integer non volutpat nulla. Nunc elementum elit viverra, tempus quam non, interdum ipsum.\n\nAenean augue ex, condimentum vel metus vitae, aliquam porta elit. Quisque non metus ac orci mollis posuere. Mauris vel ipsum a diam interdum ultricies sed vitae neque. Nulla porttitor quam vitae pulvinar placerat. Nulla fringilla elit sit amet justo feugiat sodales. Morbi eleifend, enim non eleifend laoreet, odio libero lobortis lectus, non porttitor sem urna sit amet metus. In sollicitudin quam est, pellentesque consectetur felis fermentum vitae.\n\n### Nunc elementum elit viverra, tempus quam non\n\nLorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc quis nibh lorem. Duis sed odio lorem. In a efficitur leo. Ut venenatis rhoncus quam sed condimentum. Curabitur vel turpis in dolor volutpat imperdiet in ut mi. Integer non volutpat nulla. Nunc elementum elit viverra, tempus quam non, interdum ipsum.\n";
				}
				function compiledContent() {
					return html;
				}
				function getHeadings() {
					return [{"depth":3,"slug":"nunc-elementum-elit-viverra-tempus-quam-non","text":"Nunc elementum elit viverra, tempus quam non"}];
				}

				const Content = createComponent((result, _props, slots) => {
					const { layout, ...content } = frontmatter;
					content.file = file;
					content.url = url;

					return renderTemplate`${maybeRenderHead()}${unescapeHTML(html)}`;
				});

export { Content, compiledContent, Content as default, file, frontmatter, getHeadings, rawContent, url };
