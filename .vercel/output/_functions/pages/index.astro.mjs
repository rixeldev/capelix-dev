/* empty css                                 */
import { c as createComponent, a as createAstro, m as maybeRenderHead, s as spreadAttributes, r as renderTemplate, d as renderComponent, b as addAttribute, f as renderTransition } from '../chunks/astro/server_DFE9ECo4.mjs';
import { a as getI18N, d as $$MainTitle, g as getActiveLocale, c as resolveLocalizedHref, f as $$UpArrow, r as resolveLocalizedPath, $ as $$Layout, b as $$SectionContainer, e as $$Photography } from '../chunks/Layout_BwanNcMO.mjs';
import { $ as $$RightArrow, a as $$PhotographyCard } from '../chunks/PhotographyCard_B0Tuq6aa.mjs';
/* empty css                                    */
import { $ as $$Book } from '../chunks/Book_CV61cT23.mjs';
import { a as articlesService } from '../chunks/articles_D2rqhd69.mjs';
export { renderers } from '../renderers.mjs';

const $$Astro$4 = createAstro();
const $$User = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$4, $$props, $$slots);
  Astro2.self = $$User;
  return renderTemplate`${maybeRenderHead()}<svg${spreadAttributes(Astro2.props)} width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"></path><path d="M8 7a4 4 0 1 0 8 0a4 4 0 0 0 -8 0"></path><path d="M6 21v-2a4 4 0 0 1 4 -4h4a4 4 0 0 1 4 4v2"></path></svg>`;
}, "C:/Dev/Astro/capelix-dev/src/icons/User.astro", void 0);

const $$Astro$3 = createAstro();
const $$AboutMe = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$3, $$props, $$slots);
  Astro2.self = $$AboutMe;
  const { currentLocale } = Astro2;
  const i18n = getI18N({ currentLocale });
  return renderTemplate`${maybeRenderHead()}<div class="flex w-full max-w-4xl flex-col sm:w-11/12 md:w-8/12"> ${renderComponent($$result, "MainTitle", $$MainTitle, {}, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "User", $$User, { "class": "size-8" })} ${i18n.ABOUT_ME}` })} <div class="flex w-full flex-col-reverse items-center justify-between gap-6 lg:flex-row lg:items-center"> <div class="flex flex-col gap-4 text-pretty font-ubuntu text-base sm:text-lg"> <p class="text-primary"> ${i18n.ABOUT_ME_TEXT_1} <strong class="text-accent">Capelix</strong> ${i18n.ABOUT_ME_TEXT_2} </p> <p class="text-primary"> ${i18n.ABOUT_ME_TEXT_3} <strong class="text-accent">${i18n.ABOUT_ME_TEXT_4}</strong>, <strong class="text-accent">${i18n.ABOUT_ME_TEXT_5}</strong> ${i18n.ABOUT_ME_TEXT_6} </p> <p class="text-primary"> ${i18n.ABOUT_ME_TEXT_7}
'<strong class="text-accent">STOP!</strong>'
${i18n.ABOUT_ME_TEXT_8} <strong class="text-accent">${i18n.ABOUT_ME_TEXT_9}</strong>. ${i18n.ABOUT_ME_TEXT_10} <strong class="text-accent">${i18n.ABOUT_ME_TEXT_11}</strong>, <strong class="text-accent">${i18n.ABOUT_ME_TEXT_12}</strong> ${i18n.ABOUT_ME_TEXT_13} <strong class="text-accent">${i18n.ABOUT_ME_TEXT_14}</strong> ${i18n.ABOUT_ME_TEXT_15} </p> </div> <img src="https://capelix.dev/images/about-image.webp" width="720" height="1280" class="aspect-square h-full w-48 rotate-6 rounded-3xl bg-slate-800 object-cover p-1 shadow-lg shadow-black/60 transition-all ease-in-out hover:rotate-12 hover:shadow-2xl hover:shadow-accent/20 sm:hover:scale-105 md:w-64 md:p-2" alt="About Capelix' image, Rikelvi Capellán"> </div> </div>`;
}, "C:/Dev/Astro/capelix-dev/src/components/web/AboutMe.astro", void 0);

const $$Astro$2 = createAstro();
const $$HomeArticleCard = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$HomeArticleCard;
  const locale = getActiveLocale(Astro2);
  const i18n = getI18N({ currentLocale: locale });
  const { author, description, lang, pageTitle, timestamp, title } = Astro2.props;
  const articleHref = resolveLocalizedHref(`/articles/${pageTitle}`);
  return renderTemplate`${maybeRenderHead()}<a${addAttribute(articleHref, "href")}${addAttribute(pageTitle, "data-story-id")}${addAttribute(`${i18n.READ} \u2192 ${title}`, "title")} class="group relative flex w-full items-center justify-between gap-4 overflow-hidden rounded-2xl bg-gradient-to-br from-primary/5 to-primary/10 px-5 py-4 shadow-sm backdrop-blur-sm transition-all duration-300 ease-in-out active:scale-[0.98] active:shadow-lg sm:cursor-pointer sm:hover:scale-[0.98] sm:hover:border-accent/20 sm:hover:bg-gradient-to-br sm:hover:from-accent/10 sm:hover:to-primary/15 sm:hover:shadow-lg sm:hover:shadow-accent/5 dark:border-primary/20 dark:bg-gradient-to-br dark:from-primary/10 dark:to-primary/5 dark:sm:hover:border-accent/30 dark:sm:hover:from-accent/15 dark:sm:hover:to-primary/20"> <div class="flex-1 overflow-hidden"> <h1 class="text-base font-bold text-accent transition-colors duration-300 sm:text-lg sm:group-hover:text-accent/90"${addAttribute(renderTransition($$result, "x4563tqc", "", `article-${pageTitle}-title`), "data-astro-transition-scope")}> ${title} </h1> <h2 class="mt-1 overflow-hidden text-ellipsis whitespace-nowrap text-nowrap text-xs text-primary transition-colors duration-300 sm:text-sm sm:group-hover:text-primary/90"${addAttribute(renderTransition($$result, "ng2svb66", "", `article-${pageTitle}-content`), "data-astro-transition-scope")}> ${description} </h2> <div class="mt-3 flex flex-col gap-1"> <p class="text-[10px] italic text-secondary/80 transition-colors duration-300 sm:text-xs sm:group-hover:text-secondary"> ${timestamp} </p> <p class="text-[10px] italic text-secondary/80 transition-colors duration-300 sm:text-xs sm:group-hover:text-secondary"> ${i18n.AUTHOR}: ${author} | ${i18n.LANGUAGE}: ${lang} </p> </div> </div> <div class="flex-shrink-0"> ${renderComponent($$result, "RightArrow", $$RightArrow, { "class": "size-8 text-primary transition-all duration-300 sm:group-hover:translate-x-1 sm:group-hover:text-accent" })} </div> </a>`;
}, "C:/Dev/Astro/capelix-dev/src/components/HomeArticleCard.astro", "self");

const $$Astro$1 = createAstro();
const $$Articles = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$Articles;
  const locale = getActiveLocale(Astro2);
  const i18n = getI18N({ currentLocale: locale });
  const articles = articlesService();
  const articlesHref = resolveLocalizedHref("/articles");
  return renderTemplate`${maybeRenderHead()}<div class="flex w-full max-w-4xl flex-col sm:w-11/12 md:w-8/12"> ${renderComponent($$result, "MainTitle", $$MainTitle, {}, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Book", $$Book, { "class": "size-8" })} ${i18n.ARTICLES}` })} <div class="flex w-full flex-col gap-3"> ${articles.slice(0, 4).map((story) => renderTemplate`${renderComponent($$result, "HomeArticleCard", $$HomeArticleCard, { ...story })}`)} </div> <a${addAttribute(articlesHref, "href")} class="mt-6 flex size-4 w-fit select-none gap-2 text-secondary transition-all active:text-primary sm:cursor-pointer sm:hover:gap-1 sm:hover:text-primary"> <span>${i18n.VIEW_ALL_ARTICLES}</span> ${renderComponent($$result, "UpArrow", $$UpArrow, { "class": "rotate-90" })} </a> </div>`;
}, "C:/Dev/Astro/capelix-dev/src/components/web/Articles.astro", void 0);

const $$Astro = createAstro();
const $$Index = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Index;
  const locale = getActiveLocale(Astro2);
  const i18n = getI18N({ currentLocale: locale });
  const canonical = new URL(resolveLocalizedPath("/"), "https://capelix.dev").toString();
  const preloadImages = [
    {
      as: "image",
      href: `https://capelix.dev/images/about-image.webp`,
      type: "image/webp",
      rel: "preload"
    }
  ];
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": i18n.HOME_PAGE_TITLE, "description": i18n.HOME_PAGE_DESCRIPTION, "canonical": canonical, "preload": preloadImages }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "SectionContainer", $$SectionContainer, { "id": "web" }, { "default": ($$result3) => renderTemplate` ${renderComponent($$result3, "Articles", $$Articles, {})} ` })} ${renderComponent($$result2, "SectionContainer", $$SectionContainer, {}, { "default": ($$result3) => renderTemplate` ${maybeRenderHead()}<div class="flex w-full max-w-4xl flex-col sm:w-11/12 md:w-8/12"> ${renderComponent($$result3, "MainTitle", $$MainTitle, {}, { "default": ($$result4) => renderTemplate` ${renderComponent($$result4, "Photography", $$Photography, { "class": "size-8" })} ${i18n.PHOTOGRAPHY}` })} ${renderComponent($$result3, "PhotographyCard", $$PhotographyCard, {})} </div> ` })} ${renderComponent($$result2, "SectionContainer", $$SectionContainer, {}, { "default": ($$result3) => renderTemplate` ${renderComponent($$result3, "AboutMe", $$AboutMe, {})} ` })} ` })}`;
}, "C:/Dev/Astro/capelix-dev/src/pages/index.astro", void 0);

const $$file = "C:/Dev/Astro/capelix-dev/src/pages/index.astro";
const $$url = "";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: $$Index,
	file: $$file,
	url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
