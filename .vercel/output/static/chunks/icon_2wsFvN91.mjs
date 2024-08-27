const icon = new Proxy({"src":"/_astro/icon.DhwTSNeU.png","width":1162,"height":1163,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/var/www/html/cepaonline/src/images/icon.png";
							}
							if (target[name] !== undefined && globalThis.astroAsset) globalThis.astroAsset?.referencedImages.add("/var/www/html/cepaonline/src/images/icon.png");
							return target[name];
						}
					});

export { icon as i };
