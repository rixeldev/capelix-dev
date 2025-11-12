import { c as createComponent, a as createAstro, b as addAttribute, r as renderTemplate } from './astro/server_DFE9ECo4.mjs';

const $$Astro = createAstro();
const $$SEO = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$SEO;
  const {
    title = "Web - Capelix",
    description = "The Capelix' Website. Read stories, articles and comments about all you want to know. I build easy-to-use websites and Android apps, with fast technologies and UX/UI standards to improve user experience.",
    preload,
    canonical = "https://capelix.dev/",
    image = "https://capelix.dev/images/embedded-img.avif",
    locale = "en"
  } = Astro2.props;
  const ogLocale = locale === "es" ? "es_ES" : "en_US";
  return renderTemplate`<title>${title}</title><meta charset="UTF-8"><meta name="description"${addAttribute(description, "content")}><meta name="generator"${addAttribute(Astro2.generator, "content")}><meta name="viewport" content="width=device-width"><meta name="theme-color" content="#020617"><link rel="canonical"${addAttribute(canonical, "href")}><link rel="author" href="https://www.linkedin.com/in/Capelix">${preload?.map(({ href, as, type, rel = "preload", crossorigin }) => renderTemplate`<link${addAttribute(rel, "rel")}${addAttribute(href, "href")}${addAttribute(as, "as")}${addAttribute(type, "type")}${addAttribute(crossorigin, "crossorigin")}>`)}<meta name="keywords" content="astro, html, javascript, js, css, Capelix, portfolio, angular, rikelvi capellan, republica dominicana, dominican republic, developer, desarrollador web, web developer, blog, Capelix blog, projects, Capelix projects, rikelvi capellan projects, ts, typescript, components, anciano, corta, fama, historia, joven, leche, moraleja, relato, riquezas, sueños, vaca, short story"><meta name="twitter:card" content="summary_large_image"><meta name="twitter:site" content="@Capelixxx"><meta name="twitter:creator" content="@Capelixxx"><meta name="twitter:title"${addAttribute(title, "content")}><meta name="twitter:description"${addAttribute(description, "content")}><meta name="twitter:image"${addAttribute(new URL(image, Astro2.url), "content")}><meta property="og:image"${addAttribute(new URL(image, Astro2.url), "content")}><meta property="og:title"${addAttribute(title, "content")}><meta property="og:description"${addAttribute(description, "content")}><meta property="og:url"${addAttribute(Astro2.url, "content")}><meta property="og:site_name" content="Web - Capelix"><meta property="og:type" content="website"><meta property="og:locale"${addAttribute(ogLocale, "content")}><meta name="robots" content="index, follow"><meta name="googlebot" content="index, follow"><link rel="icon" type="image/svg+xml" href="/favicon.ico"><link rel="apple-touch-icon" href="/img/icons/apple-touch-icon.png"><link rel="icon" type="image/svg+xml" href="/favicon.ico"><meta name="msapplication-config" content="/browserconfig.xml"><link rel="manifest" href="/manifest.webmanifest">`;
}, "C:/Dev/Astro/capelix-dev/src/components/SEO.astro", void 0);

export { $$SEO as $ };
