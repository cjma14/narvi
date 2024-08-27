import { g as getImage } from './_astro_assets_-91fX3jZ.mjs';
import { i as icon } from './icon_2wsFvN91.mjs';

const maskableIcon = new Proxy({"src":"/_astro/icon.DhwTSNeU.png","width":1162,"height":1163,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/var/www/html/cepaonline/src/images/icon-maskable.png";
							}
							if (target[name] !== undefined && globalThis.astroAsset) globalThis.astroAsset?.referencedImages.add("/var/www/html/cepaonline/src/images/icon-maskable.png");
							return target[name];
						}
					});

const sizes = [192, 512];
const favicons = [
  {
    purpose: "any",
    src: icon,
    sizes
  },
  {
    purpose: "maskable",
    src: maskableIcon,
    sizes
  }
];
const GET = async () => {
  const icons = await Promise.all(
    favicons.flatMap(
      (favicon) => favicon.sizes.map(async (size) => {
        const image = await getImage({
          src: favicon.src,
          width: size,
          height: size,
          format: "png"
        });
        return {
          src: image.src,
          sizes: `${image.options.width}x${image.options.height}`,
          type: `image/${image.options.format}`,
          purpose: favicon.purpose
        };
      })
    )
  );
  const manifest = {
    short_name: "ScrewFast",
    name: "ScrewFast",
    icons,
    display: "minimal-ui",
    id: "/",
    start_url: "/",
    theme_color: "#FFEDD5",
    background_color: "#262626"
  };
  return new Response(JSON.stringify(manifest));
};

export { GET };
