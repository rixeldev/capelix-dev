/* empty css                                    */
import { c as createComponent, a as createAstro, d as renderComponent, e as renderScript, r as renderTemplate, m as maybeRenderHead, b as addAttribute, f as renderTransition } from '../../chunks/astro/server_DFE9ECo4.mjs';
import { g as getActiveLocale, a as getI18N, r as resolveLocalizedPath, $ as $$Layout, b as $$SectionContainer } from '../../chunks/Layout_BwanNcMO.mjs';
import { a as articlesService } from '../../chunks/articles_D2rqhd69.mjs';
/* empty css                                       */
export { renderers } from '../../renderers.mjs';

const $$Astro = createAstro();
const $$id = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$id;
  const { id } = Astro2.params;
  const locale = getActiveLocale(Astro2);
  const i18n = getI18N({ currentLocale: locale });
  const stories = articlesService();
  const article = stories.find((article2) => article2.pageTitle === id);
  if (!article || article === void 0) {
    return Astro2.redirect(resolveLocalizedPath("/404"));
  }
  const preloadImages = [
    {
      as: "image",
      href: article.cover,
      type: "image/webp",
      rel: "preload"
    }
  ];
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": `${article?.title} - Capelix' articles`, "description": `${article?.description} | ${i18n.AUTHOR}: ${article?.author} | ${i18n.LANGUAGE}: ${article?.lang}`, "canonical": new URL(
    resolveLocalizedPath(`/articles/${article?.pageTitle}/`),
    "https://capelix.dev"
  ).toString(), "preload": preloadImages }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<img class="parallax absolute top-0 w-full translate-y-0 bg-cover bg-fixed bg-center opacity-5"${addAttribute(article?.cover, "src")}${addAttribute(`Capelix' article ${article?.title}`, "alt")} style="mask-image: linear-gradient(black 20%, transparent 80%);"> ${renderComponent($$result2, "SectionContainer", $$SectionContainer, {}, { "default": ($$result3) => renderTemplate` <div class="flex w-full max-w-4xl flex-col sm:w-11/12 md:w-8/12"> <header> <h2 class="text-xl font-extrabold text-accent sm:text-3xl"${addAttribute(renderTransition($$result3, "bgrf6pgu", "", `article-${article?.pageTitle}-title`), "data-astro-transition-scope")}> ${article?.title} </h2> </header> <div class="mt-8 flex w-full flex-col gap-8"${addAttribute(renderTransition($$result3, "mo3ascr2", "", `article-${article?.pageTitle}-content`), "data-astro-transition-scope")}> ${article?.content.map((section) => renderTemplate`<div class="flex flex-col gap-2"> <h1 class="text-xl font-bold text-primary">${section.title}</h1> <div id="articles-paragraphs" class="flex flex-col gap-4"> ${section.paragraphs.map((paragraph) => renderTemplate`<p${addAttribute(`${paragraph.startsWith('"') && paragraph.endsWith('"') ? "text-right" : "text-left"} text-pretty text-primary/80`, "class")}> ${paragraph} </p>`)} </div> </div>`)} </div> <footer class="mt-8 flex w-full flex-col items-end justify-center text-xs italic text-secondary"> <span> ${article?.timestamp} </span> <span> ${i18n.AUTHOR}: ${article?.author} | ${i18n.LANGUAGE}: ${article?.lang} </span> </footer> </div> ` })} ` })} ${renderScript($$result, "C:/Dev/Astro/capelix-dev/src/pages/articles/[id].astro?astro&type=script&index=0&lang.ts")}`;
}, "C:/Dev/Astro/capelix-dev/src/pages/articles/[id].astro", "self");

const $$file = "C:/Dev/Astro/capelix-dev/src/pages/articles/[id].astro";
const $$url = "/articles/[id]";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: $$id,
	file: $$file,
	url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
