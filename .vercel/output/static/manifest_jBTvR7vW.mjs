import 'cookie';
import 'kleur/colors';
import './chunks/astro/server_CxlEycRW.mjs';
import 'clsx';
import 'html-escaper';
import { compile } from 'path-to-regexp';

if (typeof process !== "undefined") {
  let proc = process;
  if ("argv" in proc && Array.isArray(proc.argv)) {
    if (proc.argv.includes("--verbose")) ; else if (proc.argv.includes("--silent")) ; else ;
  }
}

function sanitizeParams(params) {
  return Object.fromEntries(
    Object.entries(params).map(([key, value]) => {
      if (typeof value === "string") {
        return [key, value.normalize().replace(/#/g, "%23").replace(/\?/g, "%3F")];
      }
      return [key, value];
    })
  );
}
function getRouteGenerator(segments, addTrailingSlash) {
  const template = segments.map((segment) => {
    return "/" + segment.map((part) => {
      if (part.spread) {
        return `:${part.content.slice(3)}(.*)?`;
      } else if (part.dynamic) {
        return `:${part.content}`;
      } else {
        return part.content.normalize().replace(/\?/g, "%3F").replace(/#/g, "%23").replace(/%5B/g, "[").replace(/%5D/g, "]").replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
      }
    }).join("");
  }).join("");
  let trailing = "";
  if (addTrailingSlash === "always" && segments.length) {
    trailing = "/";
  }
  const toPath = compile(template + trailing);
  return (params) => {
    const sanitizedParams = sanitizeParams(params);
    const path = toPath(sanitizedParams);
    return path || "/";
  };
}

function deserializeRouteData(rawRouteData) {
  return {
    route: rawRouteData.route,
    type: rawRouteData.type,
    pattern: new RegExp(rawRouteData.pattern),
    params: rawRouteData.params,
    component: rawRouteData.component,
    generate: getRouteGenerator(rawRouteData.segments, rawRouteData._meta.trailingSlash),
    pathname: rawRouteData.pathname || void 0,
    segments: rawRouteData.segments,
    prerender: rawRouteData.prerender,
    redirect: rawRouteData.redirect,
    redirectRoute: rawRouteData.redirectRoute ? deserializeRouteData(rawRouteData.redirectRoute) : void 0,
    fallbackRoutes: rawRouteData.fallbackRoutes.map((fallback) => {
      return deserializeRouteData(fallback);
    }),
    isIndex: rawRouteData.isIndex
  };
}

function deserializeManifest(serializedManifest) {
  const routes = [];
  for (const serializedRoute of serializedManifest.routes) {
    routes.push({
      ...serializedRoute,
      routeData: deserializeRouteData(serializedRoute.routeData)
    });
    const route = serializedRoute;
    route.routeData = deserializeRouteData(serializedRoute.routeData);
  }
  const assets = new Set(serializedManifest.assets);
  const componentMetadata = new Map(serializedManifest.componentMetadata);
  const inlinedScripts = new Map(serializedManifest.inlinedScripts);
  const clientDirectives = new Map(serializedManifest.clientDirectives);
  return {
    // in case user middleware exists, this no-op middleware will be reassigned (see plugin-ssr.ts)
    middleware(_, next) {
      return next();
    },
    ...serializedManifest,
    assets,
    componentMetadata,
    inlinedScripts,
    clientDirectives,
    routes
  };
}

const manifest = deserializeManifest({"adapterName":"@astrojs/vercel/static","routes":[{"file":"file:///var/www/html/cepaonline/.vercel/output/static/404.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/404","isIndex":false,"type":"page","pattern":"^\\/404\\/?$","segments":[[{"content":"404","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/404.astro","pathname":"/404","prerender":true,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"file:///var/www/html/cepaonline/.vercel/output/static/about/index.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/about","isIndex":false,"type":"page","pattern":"^\\/about\\/?$","segments":[[{"content":"about","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/about.astro","pathname":"/about","prerender":true,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"file:///var/www/html/cepaonline/.vercel/output/static/contact/index.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/contact","isIndex":false,"type":"page","pattern":"^\\/contact\\/?$","segments":[[{"content":"contact","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/contact.astro","pathname":"/contact","prerender":true,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"file:///var/www/html/cepaonline/.vercel/output/static/favicon.ico","links":[],"scripts":[],"styles":[],"routeData":{"route":"/favicon.ico","isIndex":false,"type":"endpoint","pattern":"^\\/favicon\\.ico\\/?$","segments":[[{"content":"favicon.ico","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/favicon.ico.ts","pathname":"/favicon.ico","prerender":true,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"file:///var/www/html/cepaonline/.vercel/output/static/fr/contact/index.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/fr/contact","isIndex":false,"type":"page","pattern":"^\\/fr\\/contact\\/?$","segments":[[{"content":"fr","dynamic":false,"spread":false}],[{"content":"contact","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/fr/contact.astro","pathname":"/fr/contact","prerender":true,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"file:///var/www/html/cepaonline/.vercel/output/static/fr/services/index.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/fr/services","isIndex":false,"type":"page","pattern":"^\\/fr\\/services\\/?$","segments":[[{"content":"fr","dynamic":false,"spread":false}],[{"content":"services","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/fr/services.astro","pathname":"/fr/services","prerender":true,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"file:///var/www/html/cepaonline/.vercel/output/static/fr/index.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/fr","isIndex":true,"type":"page","pattern":"^\\/fr\\/?$","segments":[[{"content":"fr","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/fr/index.astro","pathname":"/fr","prerender":true,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"file:///var/www/html/cepaonline/.vercel/output/static/manifest.json","links":[],"scripts":[],"styles":[],"routeData":{"route":"/manifest.json","isIndex":false,"type":"endpoint","pattern":"^\\/manifest\\.json\\/?$","segments":[[{"content":"manifest.json","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/manifest.json.ts","pathname":"/manifest.json","prerender":true,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"file:///var/www/html/cepaonline/.vercel/output/static/robots.txt","links":[],"scripts":[],"styles":[],"routeData":{"route":"/robots.txt","isIndex":false,"type":"endpoint","pattern":"^\\/robots\\.txt\\/?$","segments":[[{"content":"robots.txt","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/robots.txt.ts","pathname":"/robots.txt","prerender":true,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"file:///var/www/html/cepaonline/.vercel/output/static/services/index.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/services","isIndex":false,"type":"page","pattern":"^\\/services\\/?$","segments":[[{"content":"services","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/services.astro","pathname":"/services","prerender":true,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"file:///var/www/html/cepaonline/.vercel/output/static/tba/index.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/tba","isIndex":false,"type":"page","pattern":"^\\/tba\\/?$","segments":[[{"content":"tba","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/tba.astro","pathname":"/tba","prerender":true,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"file:///var/www/html/cepaonline/.vercel/output/static/index.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/","isIndex":true,"type":"page","pattern":"^\\/$","segments":[],"params":[],"component":"src/pages/index.astro","pathname":"/","prerender":true,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}}],"site":"https://screwfast.uk","base":"/","trailingSlash":"ignore","compressHTML":true,"componentMetadata":[["/var/www/html/cepaonline/src/pages/404.astro",{"propagation":"none","containsHead":true}],["/var/www/html/cepaonline/src/pages/about.astro",{"propagation":"none","containsHead":true}],["/var/www/html/cepaonline/src/pages/contact.astro",{"propagation":"none","containsHead":true}],["/var/www/html/cepaonline/src/pages/fr/contact.astro",{"propagation":"none","containsHead":true}],["/var/www/html/cepaonline/src/pages/fr/index.astro",{"propagation":"none","containsHead":true}],["/var/www/html/cepaonline/src/pages/fr/services.astro",{"propagation":"none","containsHead":true}],["/var/www/html/cepaonline/src/pages/index.astro",{"propagation":"none","containsHead":true}],["/var/www/html/cepaonline/src/pages/services.astro",{"propagation":"none","containsHead":true}],["/var/www/html/cepaonline/src/pages/tba.astro",{"propagation":"none","containsHead":true}],["\u0000astro:content",{"propagation":"in-tree","containsHead":false}],["/var/www/html/cepaonline/node_modules/@astrojs/starlight/utils/routing.ts",{"propagation":"in-tree","containsHead":false}],["/var/www/html/cepaonline/node_modules/@astrojs/starlight/index.astro",{"propagation":"in-tree","containsHead":true}],["\u0000@astro-page:node_modules/@astrojs/starlight/index@_@astro",{"propagation":"in-tree","containsHead":false}],["/var/www/html/cepaonline/node_modules/@astrojs/starlight/utils/navigation.ts",{"propagation":"in-tree","containsHead":false}],["/var/www/html/cepaonline/node_modules/@astrojs/starlight/components/SidebarSublist.astro",{"propagation":"in-tree","containsHead":false}],["/var/www/html/cepaonline/node_modules/@astrojs/starlight/components/Sidebar.astro",{"propagation":"in-tree","containsHead":false}],["\u0000virtual:starlight/components/Sidebar",{"propagation":"in-tree","containsHead":false}],["/var/www/html/cepaonline/node_modules/@astrojs/starlight/components/Page.astro",{"propagation":"in-tree","containsHead":false}],["/var/www/html/cepaonline/node_modules/@astrojs/starlight/utils/route-data.ts",{"propagation":"in-tree","containsHead":false}],["/var/www/html/cepaonline/node_modules/@astrojs/starlight/utils/translations.ts",{"propagation":"in-tree","containsHead":false}],["/var/www/html/cepaonline/node_modules/@astrojs/starlight/internal.ts",{"propagation":"in-tree","containsHead":false}],["\u0000virtual:astro-expressive-code/preprocess-config",{"propagation":"in-tree","containsHead":false}],["/var/www/html/cepaonline/node_modules/astro-expressive-code/components/renderer.ts",{"propagation":"in-tree","containsHead":false}],["/var/www/html/cepaonline/node_modules/astro-expressive-code/components/Code.astro",{"propagation":"in-tree","containsHead":false}],["/var/www/html/cepaonline/node_modules/astro-expressive-code/components/index.ts",{"propagation":"in-tree","containsHead":false}],["/var/www/html/cepaonline/node_modules/@astrojs/starlight/components.ts",{"propagation":"in-tree","containsHead":false}],["/var/www/html/cepaonline/node_modules/@astrojs/starlight/components/Footer.astro",{"propagation":"in-tree","containsHead":false}],["\u0000virtual:starlight/components/Footer",{"propagation":"in-tree","containsHead":false}],["/var/www/html/cepaonline/node_modules/@astrojs/starlight/user-components/Aside.astro",{"propagation":"in-tree","containsHead":false}],["/var/www/html/cepaonline/node_modules/@astrojs/starlight/user-components/FileTree.astro",{"propagation":"in-tree","containsHead":false}]],"renderers":[],"clientDirectives":[["idle","(()=>{var i=t=>{let e=async()=>{await(await t())()};\"requestIdleCallback\"in window?window.requestIdleCallback(e):setTimeout(e,200)};(self.Astro||(self.Astro={})).idle=i;window.dispatchEvent(new Event(\"astro:idle\"));})();"],["load","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).load=e;window.dispatchEvent(new Event(\"astro:load\"));})();"],["media","(()=>{var s=(i,t)=>{let a=async()=>{await(await i())()};if(t.value){let e=matchMedia(t.value);e.matches?a():e.addEventListener(\"change\",a,{once:!0})}};(self.Astro||(self.Astro={})).media=s;window.dispatchEvent(new Event(\"astro:media\"));})();"],["only","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).only=e;window.dispatchEvent(new Event(\"astro:only\"));})();"],["visible","(()=>{var l=(s,i,o)=>{let r=async()=>{await(await s())()},t=typeof i.value==\"object\"?i.value:void 0,c={rootMargin:t==null?void 0:t.rootMargin},n=new IntersectionObserver(e=>{for(let a of e)if(a.isIntersecting){n.disconnect(),r();break}},c);for(let e of o.children)n.observe(e)};(self.Astro||(self.Astro={})).visible=l;window.dispatchEvent(new Event(\"astro:visible\"));})();"]],"entryModules":{"\u0000noop-middleware":"_noop-middleware.mjs","\u0000@astro-page:src/pages/404@_@astro":"pages/404.astro.mjs","\u0000@astro-page:src/pages/about@_@astro":"pages/about.astro.mjs","\u0000@astro-page:src/pages/contact@_@astro":"pages/contact.astro.mjs","\u0000@astro-page:src/pages/favicon.ico@_@ts":"pages/favicon.ico.astro.mjs","\u0000@astro-page:src/pages/fr/contact@_@astro":"pages/fr/contact.astro.mjs","\u0000@astro-page:src/pages/fr/services@_@astro":"pages/fr/services.astro.mjs","\u0000@astro-page:src/pages/fr/index@_@astro":"pages/fr.astro.mjs","\u0000@astro-page:src/pages/manifest.json@_@ts":"pages/manifest.json.astro.mjs","\u0000@astro-page:src/pages/robots.txt@_@ts":"pages/robots.txt.astro.mjs","\u0000@astro-page:src/pages/services@_@astro":"pages/services.astro.mjs","\u0000@astro-page:src/pages/tba@_@astro":"pages/tba.astro.mjs","\u0000@astro-page:src/pages/index@_@astro":"pages/index.astro.mjs","\u0000@astro-page:node_modules/@astrojs/starlight/index@_@astro":"pages/_---slug_.astro.mjs","\u0000@astro-renderers":"renderers.mjs","\u0000@astrojs-manifest":"manifest_jBTvR7vW.mjs","/src/pages/404.astro":"chunks/404_Dwr9U5uH.mjs","/src/pages/about.astro":"chunks/about_DNKrOLk1.mjs","/src/pages/contact.astro":"chunks/contact_C70iAQZp.mjs","/src/pages/favicon.ico.ts":"chunks/favicon.ico_BqQn9map.mjs","/src/pages/fr/contact.astro":"chunks/contact_ChFh_Nqa.mjs","/src/pages/fr/services.astro":"chunks/services_Cp4SQWaL.mjs","/src/pages/fr/index.astro":"chunks/index_ZF-WX_ay.mjs","/src/pages/manifest.json.ts":"chunks/manifest.json_CJR6MMt4.mjs","/src/pages/robots.txt.ts":"chunks/robots.txt_n1C4GMsy.mjs","/src/pages/services.astro":"chunks/services_6BMzBrLf.mjs","/src/pages/tba.astro":"chunks/tba_DlbMVFEd.mjs","/src/pages/index.astro":"chunks/index_BO6BpoY3.mjs","/var/www/html/cepaonline/src/content/about/Fully-Customizable.md?astroContentCollectionEntry=true":"chunks/Fully-Customizable_kkaxNpUc.mjs","/var/www/html/cepaonline/src/content/about/React-18-Nextjs-13-and-TypeScript.md?astroContentCollectionEntry=true":"chunks/React-18-Nextjs-13-and-TypeScript_DenlLpfj.mjs","/var/www/html/cepaonline/src/content/blogs/3-Simple-ways-to-improve-your-coding-skills.md?astroContentCollectionEntry=true":"chunks/3-Simple-ways-to-improve-your-coding-skills_D6ToRZf6.mjs","/var/www/html/cepaonline/src/content/blogs/9-simple-ways-to-improve-your-design-digital-product.md?astroContentCollectionEntry=true":"chunks/9-simple-ways-to-improve-your-design-digital-product_Cey6Dgeg.mjs","/var/www/html/cepaonline/src/content/blogs/Free-advertising-for-your-digital-product.md?astroContentCollectionEntry=true":"chunks/Free-advertising-for-your-digital-product_DX_CDDke.mjs","/var/www/html/cepaonline/src/content/blogs/Free-advertising-for-your-online-business.md?astroContentCollectionEntry=true":"chunks/Free-advertising-for-your-online-business_BCrTP5jZ.mjs","/var/www/html/cepaonline/src/content/blogs/Tips-to-quickly-improve-your-coding-speed.md?astroContentCollectionEntry=true":"chunks/Tips-to-quickly-improve-your-coding-speed_BmO5N-HA.mjs","/var/www/html/cepaonline/src/content/blogs/how-to-make-money-online.md?astroContentCollectionEntry=true":"chunks/how-to-make-money-online_CprBfgBp.mjs","/var/www/html/cepaonline/src/content/brands/brands.md?astroContentCollectionEntry=true":"chunks/brands_1R1-TIX6.mjs","/var/www/html/cepaonline/src/content/faq/que-1.md?astroContentCollectionEntry=true":"chunks/que-1_D-eES39s.mjs","/var/www/html/cepaonline/src/content/faq/que-2.md?astroContentCollectionEntry=true":"chunks/que-2_CI14BAgX.mjs","/var/www/html/cepaonline/src/content/faq/que-3.md?astroContentCollectionEntry=true":"chunks/que-3_BDUWmDqz.mjs","/var/www/html/cepaonline/src/content/featureTab/-Fully-Functional-Integrations.md?astroContentCollectionEntry=true":"chunks/-Fully-Functional-Integrations_dA0dBNXt.mjs","/var/www/html/cepaonline/src/content/featureTab/Clean-User-Interface.md?astroContentCollectionEntry=true":"chunks/Clean-User-Interface_D_tQWGIv.mjs","/var/www/html/cepaonline/src/content/featureTab/Essential-Business-Pages.md?astroContentCollectionEntry=true":"chunks/Essential-Business-Pages_CPTBHkWy.mjs","/var/www/html/cepaonline/src/content/features/Crafted-for-SaaS.md?astroContentCollectionEntry=true":"chunks/Crafted-for-SaaS_BO2NG23s.mjs","/var/www/html/cepaonline/src/content/features/DB-Auth-and-Stripe.md?astroContentCollectionEntry=true":"chunks/DB-Auth-and-Stripe_CIchR6oM.mjs","/var/www/html/cepaonline/src/content/features/High-quality-Design.md?astroContentCollectionEntry=true":"chunks/High-quality-Design_DEdS5q02.mjs","/var/www/html/cepaonline/src/content/features/Nextjs--TypeScript.md?astroContentCollectionEntry=true":"chunks/Nextjs--TypeScript_BTPXvo7r.mjs","/var/www/html/cepaonline/src/content/features/Regular-Free-Updates.md?astroContentCollectionEntry=true":"chunks/Regular-Free-Updates_C5XwKHaC.mjs","/var/www/html/cepaonline/src/content/features/Sanity-Blog-and-Docs.md?astroContentCollectionEntry=true":"chunks/Sanity-Blog-and-Docs_DL9XsFDO.mjs","/var/www/html/cepaonline/src/content/integrations/integrations.md?astroContentCollectionEntry=true":"chunks/integrations_CxZFgyF6.mjs","/var/www/html/cepaonline/src/content/prices/Large-Pack.md?astroContentCollectionEntry=true":"chunks/Large-Pack_C_-KYYxu.mjs","/var/www/html/cepaonline/src/content/prices/Medium-Pack.md?astroContentCollectionEntry=true":"chunks/Medium-Pack_CDpqYD8K.mjs","/var/www/html/cepaonline/src/content/prices/Small-Pack.md?astroContentCollectionEntry=true":"chunks/Small-Pack_C1un21Uv.mjs","/var/www/html/cepaonline/src/content/sectionTitles/titles.md?astroContentCollectionEntry=true":"chunks/titles_CjiDumM4.mjs","/var/www/html/cepaonline/src/content/siteConfig/config.md?astroContentCollectionEntry=true":"chunks/config_CVX-cMtT.mjs","/var/www/html/cepaonline/src/content/stats/stats.md?astroContentCollectionEntry=true":"chunks/stats_tIkMwWLM.mjs","/var/www/html/cepaonline/src/content/testimonials/Carl-Hanson.md?astroContentCollectionEntry=true":"chunks/Carl-Hanson_bprS_N4N.mjs","/var/www/html/cepaonline/src/content/testimonials/Devid-Smith.md?astroContentCollectionEntry=true":"chunks/Devid-Smith_DIoczpbr.mjs","/var/www/html/cepaonline/src/content/testimonials/Jhon-Abraham.md?astroContentCollectionEntry=true":"chunks/Jhon-Abraham_CY2Apkev.mjs","/var/www/html/cepaonline/src/content/testimonials/John-Doe.md?astroContentCollectionEntry=true":"chunks/John-Doe_Bs4qR41G.mjs","/var/www/html/cepaonline/src/content/about/Fully-Customizable.md?astroPropagatedAssets":"chunks/Fully-Customizable_rPY5C38X.mjs","/var/www/html/cepaonline/src/content/about/React-18-Nextjs-13-and-TypeScript.md?astroPropagatedAssets":"chunks/React-18-Nextjs-13-and-TypeScript_ZqhsIKgT.mjs","/var/www/html/cepaonline/src/content/blogs/3-Simple-ways-to-improve-your-coding-skills.md?astroPropagatedAssets":"chunks/3-Simple-ways-to-improve-your-coding-skills_CCUdjF5N.mjs","/var/www/html/cepaonline/src/content/blogs/9-simple-ways-to-improve-your-design-digital-product.md?astroPropagatedAssets":"chunks/9-simple-ways-to-improve-your-design-digital-product_DXNUq1yi.mjs","/var/www/html/cepaonline/src/content/blogs/Free-advertising-for-your-digital-product.md?astroPropagatedAssets":"chunks/Free-advertising-for-your-digital-product_BDChtOPQ.mjs","/var/www/html/cepaonline/src/content/blogs/Free-advertising-for-your-online-business.md?astroPropagatedAssets":"chunks/Free-advertising-for-your-online-business_BaaRHcWi.mjs","/var/www/html/cepaonline/src/content/blogs/Tips-to-quickly-improve-your-coding-speed.md?astroPropagatedAssets":"chunks/Tips-to-quickly-improve-your-coding-speed_C96B1NcJ.mjs","/var/www/html/cepaonline/src/content/blogs/how-to-make-money-online.md?astroPropagatedAssets":"chunks/how-to-make-money-online_D0HKsnlW.mjs","/var/www/html/cepaonline/src/content/brands/brands.md?astroPropagatedAssets":"chunks/brands_BXujG78B.mjs","/var/www/html/cepaonline/src/content/faq/que-1.md?astroPropagatedAssets":"chunks/que-1_Drkmeyf4.mjs","/var/www/html/cepaonline/src/content/faq/que-2.md?astroPropagatedAssets":"chunks/que-2_UPacEXr0.mjs","/var/www/html/cepaonline/src/content/faq/que-3.md?astroPropagatedAssets":"chunks/que-3_BZg2Myek.mjs","/var/www/html/cepaonline/src/content/featureTab/-Fully-Functional-Integrations.md?astroPropagatedAssets":"chunks/-Fully-Functional-Integrations_CRNT0uRR.mjs","/var/www/html/cepaonline/src/content/featureTab/Clean-User-Interface.md?astroPropagatedAssets":"chunks/Clean-User-Interface_CFN50BrB.mjs","/var/www/html/cepaonline/src/content/featureTab/Essential-Business-Pages.md?astroPropagatedAssets":"chunks/Essential-Business-Pages_CVna2VdB.mjs","/var/www/html/cepaonline/src/content/features/Crafted-for-SaaS.md?astroPropagatedAssets":"chunks/Crafted-for-SaaS_AaHoYlTf.mjs","/var/www/html/cepaonline/src/content/features/DB-Auth-and-Stripe.md?astroPropagatedAssets":"chunks/DB-Auth-and-Stripe_BbCjoOZa.mjs","/var/www/html/cepaonline/src/content/features/High-quality-Design.md?astroPropagatedAssets":"chunks/High-quality-Design_C6qAqGAG.mjs","/var/www/html/cepaonline/src/content/features/Nextjs--TypeScript.md?astroPropagatedAssets":"chunks/Nextjs--TypeScript_BdRg7HZ8.mjs","/var/www/html/cepaonline/src/content/features/Regular-Free-Updates.md?astroPropagatedAssets":"chunks/Regular-Free-Updates_BEHZCvXA.mjs","/var/www/html/cepaonline/src/content/features/Sanity-Blog-and-Docs.md?astroPropagatedAssets":"chunks/Sanity-Blog-and-Docs_CDdnEzik.mjs","/var/www/html/cepaonline/src/content/integrations/integrations.md?astroPropagatedAssets":"chunks/integrations_gOLT43So.mjs","/var/www/html/cepaonline/src/content/prices/Large-Pack.md?astroPropagatedAssets":"chunks/Large-Pack_Dgy-e6Ut.mjs","/var/www/html/cepaonline/src/content/prices/Medium-Pack.md?astroPropagatedAssets":"chunks/Medium-Pack_DqH0OGRi.mjs","/var/www/html/cepaonline/src/content/prices/Small-Pack.md?astroPropagatedAssets":"chunks/Small-Pack_Ba-HYQVS.mjs","/var/www/html/cepaonline/src/content/sectionTitles/titles.md?astroPropagatedAssets":"chunks/titles_9hJsX0zE.mjs","/var/www/html/cepaonline/src/content/siteConfig/config.md?astroPropagatedAssets":"chunks/config_D5v0Xa1M.mjs","/var/www/html/cepaonline/src/content/stats/stats.md?astroPropagatedAssets":"chunks/stats_bXpXYFov.mjs","/var/www/html/cepaonline/src/content/testimonials/Carl-Hanson.md?astroPropagatedAssets":"chunks/Carl-Hanson_BRM_Lhde.mjs","/var/www/html/cepaonline/src/content/testimonials/Devid-Smith.md?astroPropagatedAssets":"chunks/Devid-Smith_DCf9-mby.mjs","/var/www/html/cepaonline/src/content/testimonials/Jhon-Abraham.md?astroPropagatedAssets":"chunks/Jhon-Abraham_DMaNXzlc.mjs","/var/www/html/cepaonline/src/content/testimonials/John-Doe.md?astroPropagatedAssets":"chunks/John-Doe_C2y-5RCZ.mjs","\u0000virtual:astro-expressive-code/config":"chunks/config_Wk5USjhw.mjs","/var/www/html/cepaonline/node_modules/astro-expressive-code/dist/index.js":"chunks/index_DaVK51eC.mjs","\u0000virtual:astro-expressive-code/preprocess-config":"chunks/preprocess-config_B4krsNqQ.mjs","/var/www/html/cepaonline/src/content/about/Fully-Customizable.md":"chunks/Fully-Customizable_BrS1ae_r.mjs","/var/www/html/cepaonline/src/content/about/React-18-Nextjs-13-and-TypeScript.md":"chunks/React-18-Nextjs-13-and-TypeScript_B6EoPfCZ.mjs","/var/www/html/cepaonline/src/content/blogs/3-Simple-ways-to-improve-your-coding-skills.md":"chunks/3-Simple-ways-to-improve-your-coding-skills_CSGA5AvV.mjs","/var/www/html/cepaonline/src/content/blogs/9-simple-ways-to-improve-your-design-digital-product.md":"chunks/9-simple-ways-to-improve-your-design-digital-product_DgnZVocA.mjs","/var/www/html/cepaonline/src/content/blogs/Free-advertising-for-your-digital-product.md":"chunks/Free-advertising-for-your-digital-product_DBfar8wI.mjs","/var/www/html/cepaonline/src/content/blogs/Free-advertising-for-your-online-business.md":"chunks/Free-advertising-for-your-online-business_am_WxW03.mjs","/var/www/html/cepaonline/src/content/blogs/Tips-to-quickly-improve-your-coding-speed.md":"chunks/Tips-to-quickly-improve-your-coding-speed_wEdioFBp.mjs","/var/www/html/cepaonline/src/content/blogs/how-to-make-money-online.md":"chunks/how-to-make-money-online_DDiSYHY5.mjs","/var/www/html/cepaonline/src/content/brands/brands.md":"chunks/brands_YHVfiUc_.mjs","/var/www/html/cepaonline/src/content/faq/que-1.md":"chunks/que-1_DRxQEssN.mjs","/var/www/html/cepaonline/src/content/faq/que-2.md":"chunks/que-2_CtdIW6zr.mjs","/var/www/html/cepaonline/src/content/faq/que-3.md":"chunks/que-3_I1NxgUih.mjs","/var/www/html/cepaonline/src/content/featureTab/-Fully-Functional-Integrations.md":"chunks/-Fully-Functional-Integrations_C5RpTNtp.mjs","/var/www/html/cepaonline/src/content/featureTab/Clean-User-Interface.md":"chunks/Clean-User-Interface_B06fBYhV.mjs","/var/www/html/cepaonline/src/content/featureTab/Essential-Business-Pages.md":"chunks/Essential-Business-Pages_BM-Z5Tvz.mjs","/var/www/html/cepaonline/src/content/features/Crafted-for-SaaS.md":"chunks/Crafted-for-SaaS_BH57qx9c.mjs","/var/www/html/cepaonline/src/content/features/DB-Auth-and-Stripe.md":"chunks/DB-Auth-and-Stripe_DauT0gIG.mjs","/var/www/html/cepaonline/src/content/features/High-quality-Design.md":"chunks/High-quality-Design_DatXfOPr.mjs","/var/www/html/cepaonline/src/content/features/Nextjs--TypeScript.md":"chunks/Nextjs--TypeScript_ColLUEX8.mjs","/var/www/html/cepaonline/src/content/features/Regular-Free-Updates.md":"chunks/Regular-Free-Updates_BclqYwFu.mjs","/var/www/html/cepaonline/src/content/features/Sanity-Blog-and-Docs.md":"chunks/Sanity-Blog-and-Docs_CX1UCBzl.mjs","/var/www/html/cepaonline/src/content/integrations/integrations.md":"chunks/integrations_Dl3YJGXR.mjs","/var/www/html/cepaonline/src/content/prices/Large-Pack.md":"chunks/Large-Pack_DD5Edjfb.mjs","/var/www/html/cepaonline/src/content/prices/Medium-Pack.md":"chunks/Medium-Pack_p4MiRKvE.mjs","/var/www/html/cepaonline/src/content/prices/Small-Pack.md":"chunks/Small-Pack_Cpo3rAvy.mjs","/var/www/html/cepaonline/src/content/sectionTitles/titles.md":"chunks/titles_C6U8J0MN.mjs","/var/www/html/cepaonline/src/content/siteConfig/config.md":"chunks/config_Bn0ivX6M.mjs","/var/www/html/cepaonline/src/content/stats/stats.md":"chunks/stats_jWs07OPf.mjs","/var/www/html/cepaonline/src/content/testimonials/Carl-Hanson.md":"chunks/Carl-Hanson_DHyzqHLq.mjs","/var/www/html/cepaonline/src/content/testimonials/Devid-Smith.md":"chunks/Devid-Smith_BfkL7Lk7.mjs","/var/www/html/cepaonline/src/content/testimonials/Jhon-Abraham.md":"chunks/Jhon-Abraham_DwmWLeHd.mjs","/var/www/html/cepaonline/src/content/testimonials/John-Doe.md":"chunks/John-Doe_CgMWprXl.mjs","\u0000virtual:astro-expressive-code/ec-config":"chunks/ec-config_CzTTOeiV.mjs","/var/www/html/cepaonline/src/components/ui/banners/AnnouncementBanner.astro?astro&type=script&index=0&lang.ts":"_astro/AnnouncementBanner.astro_astro_type_script_index_0_lang.BK_I_5f-.js","/var/www/html/cepaonline/src/pages/tba.astro?astro&type=script&index=0&lang.ts":"_astro/tba.astro_astro_type_script_index_0_lang.CTIdfuv_.js","/var/www/html/cepaonline/src/components/ui/links/NavLink.astro?astro&type=script&index=0&lang.ts":"_astro/NavLink.astro_astro_type_script_index_0_lang.COpmCfUD.js","/var/www/html/cepaonline/src/components/ui/starlight/ThemeSelect.astro?astro&type=script&index=0&lang.ts":"_astro/ThemeSelect.astro_astro_type_script_index_0_lang.DGp1x2tx.js","/var/www/html/cepaonline/src/components/sections/navbar&footer/FooterSection.astro?astro&type=script&index=0&lang.ts":"_astro/FooterSection.astro_astro_type_script_index_0_lang.DN8UVU7K.js","/var/www/html/cepaonline/src/components/ui/starlight/ThemeSelectMobile.astro?astro&type=script&index=0&lang.ts":"_astro/ThemeSelectMobile.astro_astro_type_script_index_0_lang.DJW4XfPU.js","/var/www/html/cepaonline/node_modules/@astrojs/starlight/components/LanguageSelect.astro?astro&type=script&index=0&lang.ts":"_astro/LanguageSelect.astro_astro_type_script_index_0_lang.Jg41O9g5.js","/var/www/html/cepaonline/node_modules/@astrojs/starlight/components/MobileMenuToggle.astro?astro&type=script&index=0&lang.ts":"_astro/MobileMenuToggle.astro_astro_type_script_index_0_lang.CsfLbggW.js","/var/www/html/cepaonline/node_modules/@astrojs/starlight/user-components/Tabs.astro?astro&type=script&index=0&lang.ts":"_astro/Tabs.astro_astro_type_script_index_0_lang.CCIyraCc.js","/var/www/html/cepaonline/node_modules/@astrojs/starlight/components/MobileTableOfContents.astro?astro&type=script&index=0&lang.ts":"_astro/MobileTableOfContents.astro_astro_type_script_index_0_lang.BNd8wgbm.js","/var/www/html/cepaonline/src/components/sections/navbar&footer/Navbar.astro?astro&type=script&index=0&lang.ts":"_astro/Navbar.astro_astro_type_script_index_0_lang.Sw24g65A.js","/var/www/html/cepaonline/node_modules/astro/components/ViewTransitions.astro?astro&type=script&index=0&lang.ts":"_astro/ViewTransitions.astro_astro_type_script_index_0_lang.8NUtp8Pi.js","/var/www/html/cepaonline/node_modules/@astrojs/starlight/components/TableOfContents.astro?astro&type=script&index=0&lang.ts":"_astro/TableOfContents.astro_astro_type_script_index_0_lang.ok1Xr1fd.js","astro:scripts/page.js":"_astro/page.RuxDLo8Z.js","/var/www/html/cepaonline/node_modules/astro-vtbot/components/starlight/StarlightConnector.astro?astro&type=script&index=0&lang.ts":"_astro/StarlightConnector.astro_astro_type_script_index_0_lang.DVm3DS4d.js","/var/www/html/cepaonline/node_modules/@astrojs/starlight/components/Search.astro?astro&type=script&index=0&lang.ts":"_astro/Search.astro_astro_type_script_index_0_lang.D6U3d-xK.js","/var/www/html/cepaonline/src/layouts/MainLayout.astro?astro&type=script&index=0&lang.ts":"_astro/MainLayout.astro_astro_type_script_index_0_lang.BfZsBoRp.js","/var/www/html/cepaonline/src/components/sections/misc/FAQ.astro?astro&type=script&index=0&lang.ts":"_astro/FAQ.astro_astro_type_script_index_0_lang.B4Ar6TAZ.js","/var/www/html/cepaonline/src/components/sections/features/FeaturesNavs.astro?astro&type=script&index=0&lang.ts":"_astro/FeaturesNavs.astro_astro_type_script_index_0_lang.DfZXqRoz.js","/var/www/html/cepaonline/node_modules/astro-vtbot/components/ReplacementSwap.astro?astro&type=script&index=0&lang.ts":"_astro/ReplacementSwap.astro_astro_type_script_index_0_lang.DRvFbx3L.js","/var/www/html/cepaonline/src/pages/tba.astro?astro&type=script&index=1&lang.ts":"_astro/tba.astro_astro_type_script_index_1_lang.pg8GqF0p.js","/var/www/html/cepaonline/node_modules/@pagefind/default-ui/npm_dist/mjs/ui-core.mjs":"_astro/ui-core.DlYJqfej.js","astro:scripts/before-hydration.js":""},"inlinedScripts":[["/var/www/html/cepaonline/src/components/ui/banners/AnnouncementBanner.astro?astro&type=script&index=0&lang.ts","class n extends HTMLElement{connectedCallback(){const e=this.getAttribute(\"btnId\"),t=this.querySelector(`#${e}`);t?.addEventListener(\"click\",()=>this.remove())}}customElements.define(\"astro-banner\",n);"],["/var/www/html/cepaonline/src/pages/tba.astro?astro&type=script&index=0&lang.ts","document.addEventListener(\"DOMContentLoaded\",function(){function d(t,e){if(t!==e){t.classList.remove(\"active\",\"bg-neutral-100\",\"hover:border-transparent\",\"dark:bg-white/[.05]\");const a=t.getAttribute(\"data-target\");if(a){const n=document.querySelector(a);n&&n.classList.add(\"hidden\")}o(t,[\"text-neutral-800\",\"dark:text-neutral-200\"],[\"text-orange-400\",\"dark:text-orange-300\"])}}function c(t){t.classList.add(\"active\",\"bg-neutral-100\",\",hover:border-transparent\",\"dark:bg-white/[.05]\");const e=t.getAttribute(\"data-target\");if(e){const a=document.querySelector(e);a&&a.classList.remove(\"hidden\")}o(t,[\"text-orange-400\",\"dark:text-orange-300\"],[\"text-neutral-800\",\"dark:text-neutral-200\"])}function o(t,e,a){let n=t.querySelector(\"span\");n&&(n.classList.remove(...a),n.classList.add(...e))}const r=document.querySelectorAll(\"[data-target]\");r.length>0&&o(r[0],[\"text-orange-400\",\"dark:text-orange-300\"],[]),r.forEach(t=>{t.addEventListener(\"click\",()=>{r.forEach(e=>d(e,t)),c(t)})})});"],["/var/www/html/cepaonline/src/components/ui/links/NavLink.astro?astro&type=script&index=0&lang.ts","document.addEventListener(\"DOMContentLoaded\",function(){let e=window.location.pathname;e.split(\"/\");let a;e===\"/\"?a=\"home\":a=e.replace(\"/\",\"\");let t=document.getElementById(a);t&&(t.classList.remove(\"text-neutral-600\",\"dark:text-neutral-400\",\"hover:text-neutral-500\",\"dark:hover:text-neutral-500\"),t.classList.add(\"text-primary-500\",\"dark:text-primary-300\"),t.setAttribute(\"aria-current\",\"page\"))});"],["/var/www/html/cepaonline/src/components/ui/starlight/ThemeSelect.astro?astro&type=script&index=0&lang.ts","function d(e){document.documentElement.setAttribute(\"data-theme\",e),localStorage.setItem(\"starlight-theme\",e),o(e)}function o(e){const t=document.getElementById(\"dark-theme-toggle\"),n=document.getElementById(\"light-theme-toggle\");e===\"dark\"?(t?.classList.add(\"hidden\"),n?.classList.remove(\"hidden\")):(t?.classList.remove(\"hidden\"),n?.classList.add(\"hidden\"))}document.getElementById(\"dark-theme-toggle\")?.addEventListener(\"click\",()=>{d(\"dark\")});document.getElementById(\"light-theme-toggle\")?.addEventListener(\"click\",()=>{d(\"light\")});document.addEventListener(\"DOMContentLoaded\",()=>{const t=localStorage.getItem(\"starlight-theme\")||(window.matchMedia(\"(prefers-color-scheme: dark)\").matches?\"dark\":\"light\");d(t)});"],["/var/www/html/cepaonline/src/components/sections/navbar&footer/FooterSection.astro?astro&type=script&index=0&lang.ts","const e=new Date().getFullYear(),t=document.getElementById(\"current-year\");t.innerText=e.toString();"],["/var/www/html/cepaonline/src/components/ui/starlight/ThemeSelectMobile.astro?astro&type=script&index=0&lang.ts","function d(e){document.documentElement.setAttribute(\"data-theme\",e),localStorage.setItem(\"starlight-theme\",e),n(e)}function n(e){const t=document.getElementById(\"dark-theme-toggle-mobile\"),o=document.getElementById(\"light-theme-toggle-mobile\");e===\"dark\"?(t?.classList.add(\"hidden\"),o?.classList.remove(\"hidden\")):(t?.classList.remove(\"hidden\"),o?.classList.add(\"hidden\"))}document.getElementById(\"dark-theme-toggle-mobile\")?.addEventListener(\"click\",()=>{d(\"dark\")});document.getElementById(\"light-theme-toggle-mobile\")?.addEventListener(\"click\",()=>{d(\"light\")});document.addEventListener(\"DOMContentLoaded\",()=>{const t=localStorage.getItem(\"starlight-theme\")||(window.matchMedia(\"(prefers-color-scheme: dark)\").matches?\"dark\":\"light\");d(t)});"],["/var/www/html/cepaonline/node_modules/@astrojs/starlight/components/LanguageSelect.astro?astro&type=script&index=0&lang.ts","class n extends HTMLElement{constructor(){super();const e=this.querySelector(\"select\");e&&e.addEventListener(\"change\",t=>{t.currentTarget instanceof HTMLSelectElement&&(window.location.pathname=t.currentTarget.value)})}}customElements.define(\"starlight-lang-select\",n);"],["/var/www/html/cepaonline/node_modules/@astrojs/starlight/components/MobileMenuToggle.astro?astro&type=script&index=0&lang.ts","class s extends HTMLElement{constructor(){super(),this.btn=this.querySelector(\"button\"),this.btn.addEventListener(\"click\",()=>this.toggleExpanded());const t=this.closest(\"nav\");t&&t.addEventListener(\"keyup\",e=>this.closeOnEscape(e))}setExpanded(t){this.setAttribute(\"aria-expanded\",String(t)),document.body.toggleAttribute(\"data-mobile-menu-expanded\",t)}toggleExpanded(){this.setExpanded(this.getAttribute(\"aria-expanded\")!==\"true\")}closeOnEscape(t){t.code===\"Escape\"&&(this.setExpanded(!1),this.btn.focus())}}customElements.define(\"starlight-menu-button\",s);"],["/var/www/html/cepaonline/node_modules/@astrojs/starlight/user-components/Tabs.astro?astro&type=script&index=0&lang.ts","class c extends HTMLElement{static#e=new Map;#t;constructor(){super();const n=this.querySelector('[role=\"tablist\"]');if(this.tabs=[...n.querySelectorAll('[role=\"tab\"]')],this.panels=[...this.querySelectorAll(':scope > [role=\"tabpanel\"]')],this.#t=this.dataset.syncKey,this.#t){const i=c.#e.get(this.#t)??[];i.push(this),c.#e.set(this.#t,i)}this.tabs.forEach((i,r)=>{i.addEventListener(\"click\",t=>{t.preventDefault();const s=n.querySelector('[aria-selected=\"true\"]');t.currentTarget!==s&&this.switchTab(t.currentTarget,r)}),i.addEventListener(\"keydown\",t=>{const s=this.tabs.indexOf(t.currentTarget),e=t.key===\"ArrowLeft\"?s-1:t.key===\"ArrowRight\"?s+1:t.key===\"Home\"?0:t.key===\"End\"?this.tabs.length-1:null;e!==null&&this.tabs[e]&&(t.preventDefault(),this.switchTab(this.tabs[e],e))})})}switchTab(n,i,r=!0){if(!n)return;const t=r?this.getBoundingClientRect().top:0;this.tabs.forEach(e=>{e.setAttribute(\"aria-selected\",\"false\"),e.setAttribute(\"tabindex\",\"-1\")}),this.panels.forEach(e=>{e.hidden=!0});const s=this.panels[i];s&&(s.hidden=!1),n.removeAttribute(\"tabindex\"),n.setAttribute(\"aria-selected\",\"true\"),r&&(n.focus(),c.#s(this,n.innerText),window.scrollTo({top:window.scrollY+(this.getBoundingClientRect().top-t)}))}static#s(n,i){const r=n.#t;if(!r||!i)return;const t=c.#e.get(r);if(t)for(const s of t){if(s===n)continue;const e=s.tabs.findIndex(a=>a.innerText===i);e!==-1&&s.switchTab(s.tabs[e],e,!1)}}}customElements.define(\"starlight-tabs\",c);"]],"assets":["/_astro/page.RuxDLo8Z.js","/file:///var/www/html/cepaonline/.vercel/output/static/404.html","/file:///var/www/html/cepaonline/.vercel/output/static/about/index.html","/file:///var/www/html/cepaonline/.vercel/output/static/contact/index.html","/file:///var/www/html/cepaonline/.vercel/output/static/favicon.ico","/file:///var/www/html/cepaonline/.vercel/output/static/fr/contact/index.html","/file:///var/www/html/cepaonline/.vercel/output/static/fr/services/index.html","/file:///var/www/html/cepaonline/.vercel/output/static/fr/index.html","/file:///var/www/html/cepaonline/.vercel/output/static/manifest.json","/file:///var/www/html/cepaonline/.vercel/output/static/robots.txt","/file:///var/www/html/cepaonline/.vercel/output/static/services/index.html","/file:///var/www/html/cepaonline/.vercel/output/static/tba/index.html","/file:///var/www/html/cepaonline/.vercel/output/static/index.html"],"i18n":{"strategy":"pathname-prefix-other-locales","locales":[{"codes":["en"],"path":"en"},{"codes":["de"],"path":"de"},{"codes":["es"],"path":"es"},{"codes":["fa"],"path":"fa"},{"codes":["fr"],"path":"fr"},{"codes":["ja"],"path":"ja"},{"codes":["zh-CN"],"path":"zh-cn"}],"defaultLocale":"en","domainLookupTable":{}},"buildFormat":"directory","checkOrigin":false,"rewritingEnabled":false,"experimentalEnvGetSecretEnabled":false});

export { manifest };
