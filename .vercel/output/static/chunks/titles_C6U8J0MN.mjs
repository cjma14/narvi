import { b as createComponent, d as renderTemplate, m as maybeRenderHead, u as unescapeHTML } from './astro/server_CxlEycRW.mjs';
import 'kleur/colors';
import 'clsx';

const html = "";

				const frontmatter = {"hero":{"title":"Great Astro JS Template for","highlightedText":"SaaS","tag":"Solid - A Complete SaaS Web Template","desc":"Solid Pro - Packed with all the key integrations you need for swift SaaS startup launch, including - Auth, Database, Sanity Blog, Essential Components, Pages and More. Built-winth - Next.js 13, React 18 and TypeScript.","lightImg":"/images/hero/hero-light.svg","darkImg":"/images/hero/hero-dark.svg"},"features":{"title":"Core Features of Solid","tag":"SOLID FEATURES","desc":"Lorem ipsum dolor sit amet, consectetur adipiscing elit. In convallis tortor eros. Donec vitae tortor lacus. Phasellus aliquam ante in maximus."},"about":{"title":"A Complete Solution for","highlightedText":"SaaS Startup","tag":"SAAS BOILERPLATE FOR NEXT.JS","desc":"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut ultricies lacus non fermentum ultrices. Fusce consectetur le.","lightImg":"/images/about/about-light-01.png","darkImg":"/images/about/about-dark-01.png"},"featureTab":{"title":"Packed with All Essential","tag":"Integrations","desc":"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut ultricies lacus non fermentum ultrices. Fusce consectetur le.","lightImg":"/images/about/about-light-02.svg","darkImg":"/images/about/about-dark-02.svg"},"funFact":{"title":"Trusted by Global Companies.","tag":"Companies","desc":"Lorem ipsum dolor sit amet, consectetur adipiscing elit. In convallis tortor eros. Donec vitae tortor lacus. Phasellus aliquam ante in maximus.","img":"/images/shape/shape-04.png"},"integrations":{"title":"Remotely Maintain Your Data, From Anywhere, Anytime.","tag":"INTEGRATIONS","desc":"Lorem ipsum dolor sit amet, consectetur adipiscing elit. In convallis tortor eros. Donec vitae tortor lacus. Phasellus aliquam ante in maximus."},"cta":{"title":"Join With Us Today & Increase Your Productivity","img":"/images/shape/shape-06.png","desc":"Lorem ipsum dolor sit amet, consectetur adipiscing elit. In convallis tortor eros. Donec vitae tortor lacus. Phasellus aliquam ante in maximus."},"faq":{"title":"Frequently Asked","highlightedText":"Questions","tag":"OUR FAQS"},"testimonial":{"title":"Client’s Testimonials","tag":"TESTIMONIALS","desc":"Lorem ipsum dolor sit amet, consectetur adipiscing elit. In convallis tortor eros. Donec vitae tortor lacus. Phasellus aliquam ante in maximus."},"pricing":{"title":"Simple Pricing","tag":"PRICING PLANS","desc":"Lorem ipsum dolor sit amet, consectetur adipiscing elit. In convallis tortor eros. Donec vitae tortor lacus. Phasellus aliquam ante in maximus."},"blogs":{"title":"Latest News & Blogs","tag":"NEWS & BLOGS","desc":"Lorem ipsum dolor sit amet, consectetur adipiscing elit. In convallis tortor eros. Donec vitae tortor lacus. Phasellus aliquam ante in maximus."}};
				const file = "/var/www/html/cepaonline/src/content/sectionTitles/titles.md";
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
