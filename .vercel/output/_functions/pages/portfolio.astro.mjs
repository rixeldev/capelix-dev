/* empty css                                 */
import { c as createComponent, a as createAstro, m as maybeRenderHead, s as spreadAttributes, g as renderSlot, r as renderTemplate, d as renderComponent, b as addAttribute } from '../chunks/astro/server_DFE9ECo4.mjs';
import { $ as $$Badge, a as $$LinkButton } from '../chunks/Badge_CwJddMB-.mjs';
import { a as getI18N, h as $$Divider, i as $$Check, j as $$GitHub, k as $$Binoculars, l as $$Chat, d as $$MainTitle, m as $$Timeline, g as getActiveLocale, r as resolveLocalizedPath, $ as $$Layout, b as $$SectionContainer } from '../chunks/Layout_BwanNcMO.mjs';
import { a as $$PhotographyCard } from '../chunks/PhotographyCard_B0Tuq6aa.mjs';
export { renderers } from '../renderers.mjs';

const $$Astro$s = createAstro();
const $$SocialPill = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$s, $$props, $$slots);
  Astro2.self = $$SocialPill;
  return renderTemplate`${maybeRenderHead()}<a${spreadAttributes(Astro2.props)} class="fade-up-anim group flex cursor-pointer items-center justify-center gap-2 rounded-full border-2 border-primary/20 bg-gradient-to-br from-primary/10 via-accent/5 to-primary/10 px-4 py-2 font-semibold text-slate-600 shadow-sm backdrop-blur-sm transition-all duration-300 active:scale-95 active:border-accent/40 active:bg-gradient-to-br active:from-accent/20 active:via-primary/20 active:to-accent/20 active:text-accent active:shadow-md active:shadow-accent/20 sm:hover:scale-105 sm:hover:border-accent/40 sm:hover:bg-gradient-to-br sm:hover:from-accent/20 sm:hover:via-primary/20 sm:hover:to-accent/20 sm:hover:text-accent sm:hover:shadow-lg sm:hover:shadow-accent/20 dark:border-slate-800/50 dark:bg-gradient-to-br dark:from-primary/10 dark:via-accent/10 dark:to-primary/5 dark:text-primary dark:active:border-accent/50 dark:active:text-accent dark:sm:hover:border-accent/50 dark:sm:hover:text-accent" rel="noopener noreferrer"> ${renderSlot($$result, $$slots["default"])} </a>`;
}, "C:/Dev/Astro/capelix-dev/src/components/SocialPill.astro", void 0);

const $$Astro$r = createAstro();
const $$LinkedIn = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$r, $$props, $$slots);
  Astro2.self = $$LinkedIn;
  return renderTemplate`${maybeRenderHead()}<svg${spreadAttributes(Astro2.props)} width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"></path><path d="M4 4m0 2a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2z"></path><path d="M8 11l0 5"></path><path d="M8 8l0 .01"></path><path d="M12 16l0 -5"></path><path d="M16 16v-3a2 2 0 0 0 -4 0"></path></svg>`;
}, "C:/Dev/Astro/capelix-dev/src/icons/LinkedIn.astro", void 0);

const $$Astro$q = createAstro();
const $$About = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$q, $$props, $$slots);
  Astro2.self = $$About;
  const { currentLocale } = Astro2;
  const i18n = getI18N({ currentLocale });
  return renderTemplate`${maybeRenderHead()}<div class="flex w-full max-w-4xl flex-col sm:w-11/12 md:w-8/12"> <div class="flex w-full flex-row items-center gap-4"> <a id="img-container" href="https://capelix.dev/portfolio" rel="noopener noreferrer" class="group relative size-20 overflow-hidden rounded-full shadow-lg shadow-black/30 ring-2 ring-accent/20 transition-all duration-300 ease-in-out sm:size-36 sm:hover:ring-accent/40 sm:hover:shadow-xl sm:hover:shadow-accent/20 sm:hover:scale-105 dark:shadow-black/60"> <img src="https://capelix.dev/images/main-pic.webp" class="scale-105 object-cover transition duration-300 ease-in-out active:group-hover:scale-100 sm:group-hover:scale-100" height="1200" width="630" alt="Rikelvi Capellán portfolio picture"> <div class="absolute inset-0 bg-gradient-to-br from-accent/10 via-transparent to-primary/10 opacity-0 transition-opacity duration-300 sm:group-hover:opacity-100"></div> </a> <div class="flex flex-col items-start gap-2"> <h1 class="text-3xl font-bold bg-gradient-to-r from-slate-800 to-slate-600 bg-clip-text text-transparent sm:text-4xl md:text-5xl dark:from-slate-200 dark:to-slate-400">
Rikelvi Capellán
</h1> <h3 class="text-md font-semibold text-slate-700 sm:text-xl dark:text-slate-300"> ${i18n.ABOUT_TEXT_1} </h3> <a href="https://www.linkedin.com/in/Capelix/" target="_blank" rel="noopener noreferrer" class="group/badge"> ${renderComponent($$result, "Badge", $$Badge, {}, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Check", $$Check, { "class": "mr-2 h-5 w-5 text-accent transition-transform duration-300 group-hover/badge:scale-110" })} <h5 class="font-bold text-accent">${i18n.AVAILABLE}</h5> ` })} </a> </div> </div> ${renderComponent($$result, "Divider", $$Divider, {})} <div class="flex w-full flex-col items-center"> <div class="relative w-full rounded-2xl bg-gradient-to-br from-primary/5 via-accent/5 to-primary/10 p-6 backdrop-blur-sm sm:p-8"> <h3 class="text-md font-semibold leading-relaxed text-slate-600 sm:text-balance sm:text-xl dark:text-primary"> ${i18n.ABOUT_TEXT_2} <strong class="text-accent font-bold">${i18n.ABOUT_TEXT_3}</strong> ${i18n.ABOUT_TEXT_6} <strong class="text-accent font-bold">${i18n.ABOUT_TEXT_4}</strong> ${i18n.FOOTER_TXT_2} <strong class="text-accent font-bold">${i18n.ABOUT_TEXT_5}</strong> ${i18n.ABOUT_TEXT_6} <strong class="text-accent font-bold">${i18n.ABOUT_TEXT_7}</strong> ${i18n.ABOUT_TEXT_8} </h3> </div> <nav class="mb-2 mt-8 flex w-full flex-wrap gap-3"> ${renderComponent($$result, "SocialPill", $$SocialPill, { "target": "_blank", "rel": "noopener noreferrer", "href": "https://www.linkedin.com/in/Capelix/" }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "LinkedIn", $$LinkedIn, { "class": "size-6" })}
LinkedIn
` })} ${renderComponent($$result, "SocialPill", $$SocialPill, { "target": "_blank", "rel": "noopener noreferrer", "href": "https://github.com/Capelix" }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "GitHub", $$GitHub, { "class": "size-5" })}
GitHub
` })} ${renderComponent($$result, "SocialPill", $$SocialPill, { "target": "_blank", "rel": "noopener noreferrer", "href": "https://www.capelix.dev/archives/web-cv.pdf" }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Binoculars", $$Binoculars, { "class": "size-6" })} ${i18n.WATCH_CV}` })} ${renderComponent($$result, "SocialPill", $$SocialPill, { "href": "#contact" }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Chat", $$Chat, { "class": "size-5" })} ${i18n.CONTACT}` })} </nav> ${renderComponent($$result, "Divider", $$Divider, {})} </div> <div class="flex w-full flex-col items-center"> ${renderComponent($$result, "PhotographyCard", $$PhotographyCard, {})} </div> </div>`;
}, "C:/Dev/Astro/capelix-dev/src/components/portfolio/About.astro", void 0);

const $$Astro$p = createAstro();
const $$Briefcase = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$p, $$props, $$slots);
  Astro2.self = $$Briefcase;
  return renderTemplate`${maybeRenderHead()}<svg${spreadAttributes(Astro2.props)} width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"></path><path d="M3 7m0 2a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v9a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2z"></path><path d="M8 7v-2a2 2 0 0 1 2 -2h4a2 2 0 0 1 2 2v2"></path><path d="M12 12l0 .01"></path><path d="M3 13a20 20 0 0 0 18 0"></path></svg>`;
}, "C:/Dev/Astro/capelix-dev/src/icons/Briefcase.astro", void 0);

const $$Astro$o = createAstro();
const $$ExperienceItem = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$o, $$props, $$slots);
  Astro2.self = $$ExperienceItem;
  const { title, description, date } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<span class="fade-up-anim absolute -start-3 flex size-6 items-center justify-center rounded-full bg-gradient-to-br from-accent/30 to-accent/20 shadow-lg shadow-accent/20 ring-4 ring-slate-900 transition-all duration-300 group-hover:scale-110 group-hover:shadow-accent/30 group-hover:ring-accent/30"> ${renderComponent($$result, "Briefcase", $$Briefcase, { "class": "size-4 text-accent transition-all duration-300 group-hover:scale-110" })} </span> <div class="fade-up-anim ml-2 rounded-xl bg-gradient-to-br from-primary/10 via-accent/10 to-primary/5 p-4 backdrop-blur-sm transition-all duration-300 group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:shadow-lg group-hover:shadow-accent/10"> <h3 class="mb-2 flex items-center text-xl font-bold text-accent transition-colors duration-300 group-hover:text-accent/90"> ${title} </h3> <time class="mb-3 block text-sm font-semibold italic leading-none text-primary opacity-80 dark:text-secondary"> ${date} </time> <p class="text-pretty text-base font-normal leading-relaxed text-slate-600 dark:text-primary"> ${description} </p> </div>`;
}, "C:/Dev/Astro/capelix-dev/src/components/ExperienceItem.astro", void 0);

const experiencesService = (currentLocale) => {
  const i18n = getI18N({ currentLocale });
  return [
    {
      title: i18n.EXPERIENCE_TITLE_3,
      date: i18n.EXPERIENCE_DATE_CURRENT,
      description: i18n.EXPERIENCE_DESC_3
    },
    {
      title: i18n.EXPERIENCE_TITLE_4,
      date: i18n.EXPERIENCE_DATE_2024_08,
      description: i18n.EXPERIENCE_DESC_4
    },
    {
      title: i18n.EXPERIENCE_TITLE_2,
      date: i18n.EXPERIENCE_DATE_2023_05,
      description: i18n.EXPERIENCE_DESC_2
    },
    {
      title: i18n.EXPERIENCE_TITLE_1,
      date: i18n.EXPERIENCE_DATE_2019_02,
      description: i18n.EXPERIENCE_DESC_1
    }
  ];
};

const $$Astro$n = createAstro();
const $$Experience = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$n, $$props, $$slots);
  Astro2.self = $$Experience;
  const { currentLocale } = Astro2;
  const i18n = getI18N({ currentLocale });
  const EXPERIENCE = experiencesService(currentLocale);
  return renderTemplate`${maybeRenderHead()}<div class="flex w-full max-w-4xl flex-col sm:w-11/12 md:w-8/12"> ${renderComponent($$result, "MainTitle", $$MainTitle, {}, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Timeline", $$Timeline, { "class": "size-8" })} ${i18n.WORK_EXPERIENCE}` })} <ol class="relative ml-3 w-11/12 border-s-2 border-accent/30 dark:border-accent/20"> ${EXPERIENCE.map((experience) => renderTemplate`<li class="group mb-10 ms-6"> ${renderComponent($$result, "ExperienceItem", $$ExperienceItem, { ...experience })} </li>`)} </ol> </div>`;
}, "C:/Dev/Astro/capelix-dev/src/components/portfolio/Experience.astro", void 0);

const $$Astro$m = createAstro();
const $$Send = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$m, $$props, $$slots);
  Astro2.self = $$Send;
  return renderTemplate`${maybeRenderHead()}<svg${spreadAttributes(Astro2.props)} width="800px" height="800px" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"> <path stroke="none" d="M0 0h24v24H0z" fill="none"></path> <path d="M10 14l11 -11"></path> <path d="M21 3l-6.5 18a.55 .55 0 0 1 -1 0l-3.5 -7l-7 -3.5a.55 .55 0 0 1 0 -1l18 -6.5"></path> </svg>`;
}, "C:/Dev/Astro/capelix-dev/src/icons/Send.astro", void 0);

const $$Astro$l = createAstro();
const $$ProjectsCard = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$l, $$props, $$slots);
  Astro2.self = $$ProjectsCard;
  const { title, description, imgUrl, projectUrl, tags, gitCodeUrl, alt } = Astro2.props;
  const { currentLocale } = Astro2;
  const i18n = getI18N({ currentLocale });
  return renderTemplate`${maybeRenderHead()}<article class="fade-up-anim group flex flex-col space-x-0 space-y-8 md:flex-row md:space-x-8 md:space-y-0"> <div class="md:1/2 w-full"> <div class="relative col-span-6 row-span-5 flex transform flex-col items-center gap-8 overflow-clip rounded-xl border-2 border-primary/10 bg-gradient-to-br from-primary/5 via-accent/5 to-primary/10 shadow-lg shadow-accent/5 backdrop-blur-sm transition-all duration-500 ease-in-out sm:hover:border-accent/30 sm:hover:bg-gradient-to-br sm:hover:from-accent/10 sm:hover:via-primary/10 sm:hover:to-accent/10 sm:group-hover:-translate-y-2 sm:group-hover:translate-x-1 sm:group-hover:shadow-2xl sm:group-hover:shadow-accent/20 dark:border-slate-800/50 dark:from-primary/10 dark:via-accent/10 dark:to-primary/5 dark:sm:hover:border-accent/40"> <img${addAttribute(imgUrl, "src")}${addAttribute(alt, "alt")} width="1280" height="720" decoding="async" loading="lazy" class="h-56 w-full object-cover object-top transition-all duration-500 sm:h-full sm:scale-110 sm:group-hover:scale-105 sm:group-hover:brightness-110"> <div class="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-0 transition-opacity duration-500 sm:group-hover:opacity-100"></div> </div> </div> <div class="flex w-full flex-col gap-3 md:max-w-lg"> <h3 class="text-2xl font-bold bg-gradient-to-r from-slate-800 to-slate-600 bg-clip-text text-transparent transition-all duration-300 sm:group-hover:from-accent sm:group-hover:to-accent/80 dark:from-slate-200 dark:to-slate-400"> ${title} </h3> <ul class="mb-2 flex flex-row flex-wrap gap-x-2 gap-y-2"> ${tags.map((tag) => renderTemplate`<li> <span${addAttribute(`flex gap-x-2 rounded-full border border-primary/20 bg-gradient-to-br from-primary/10 to-accent/10 px-3 py-1.5 text-xs font-semibold shadow-sm transition-all duration-300 group-hover:border-accent/30 group-hover:shadow-md group-hover:shadow-accent/10 ${tag.class}`, "class")}> ${renderComponent($$result, "tag.icon", tag.icon, { "class": `size-4 transition-transform duration-300 group-hover:scale-110 ${tag.iconColor}` })} ${tag.name} </span> </li>`)} </ul> <p class="mt-2 h-full text-pretty leading-relaxed text-slate-600 dark:text-primary"> ${description} </p> <footer class="mt-4 flex h-fit w-full items-end justify-start gap-x-4"> ${renderComponent($$result, "LinkButton", $$LinkButton, { "href": projectUrl }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Send", $$Send, { "class": "size-6 transition-transform duration-300 group-hover:translate-x-1" })} ${i18n.SQUINT}` })} ${renderComponent($$result, "LinkButton", $$LinkButton, { "href": gitCodeUrl }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "GitHub", $$GitHub, { "class": "size-6 transition-transform duration-300 group-hover:scale-110" })} ${i18n.CODE}` })} </footer> </div> </article>`;
}, "C:/Dev/Astro/capelix-dev/src/components/ProjectsCard.astro", void 0);

const $$Astro$k = createAstro();
const $$Code = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$k, $$props, $$slots);
  Astro2.self = $$Code;
  return renderTemplate`${maybeRenderHead()}<svg${spreadAttributes(Astro2.props)} width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"></path><path d="M7 8l-4 4l4 4"></path><path d="M17 8l4 4l-4 4"></path><path d="M14 4l-4 16"></path></svg>`;
}, "C:/Dev/Astro/capelix-dev/src/icons/Code.astro", void 0);

const $$Astro$j = createAstro();
const $$AstroBrand = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$j, $$props, $$slots);
  Astro2.self = $$AstroBrand;
  return renderTemplate`${maybeRenderHead()}<svg${spreadAttributes(Astro2.props)} width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" role="img" aria-label="Astro brand logo"> <path stroke="none" d="M0 0h24v24H0z" fill="none"></path> <path d="M14.972 3.483c.163 .196 .247 .46 .413 .987l3.64 11.53a15.5 15.5 0 0 0 -4.352 -1.42l-2.37 -7.723a.31 .31 0 0 0 -.296 -.213a.31 .31 0 0 0 -.295 .214l-2.342 7.718a15.5 15.5 0 0 0 -4.37 1.422l3.657 -11.53c.168 -.527 .251 -.79 .415 -.986c.144 -.172 .331 -.306 .544 -.388c.242 -.094 .527 -.094 1.099 -.094h2.612c.572 0 .858 0 1.1 .094c.213 .082 .4 .217 .545 .39"></path> <path d="M9 18c0 1.5 2 3 3 4c1 -1 3 -3 3 -4q -3 1.5 -6 0"></path> </svg>`;
}, "C:/Dev/Astro/capelix-dev/src/icons/AstroBrand.astro", void 0);

const $$Astro$i = createAstro();
const $$Angular = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$i, $$props, $$slots);
  Astro2.self = $$Angular;
  return renderTemplate`${maybeRenderHead()}<svg${spreadAttributes(Astro2.props)} fill="currentColor" width="48" height="48" viewBox="0 0 32 32" version="1.1" role="img" aria-label="Angular brand logo"> <path d="M24.826 23.885h-3.297l-1.777-4.377h-7.507l-1.777 4.379h-3.299l8.83-19.571zM15.999 1.004l-14.145 4.976 2.157 18.458 11.989 6.557 11.992-6.551 2.154-18.462-14.147-4.977zM13.414 16.806h5.171l-2.587-6.133z"></path> </svg>`;
}, "C:/Dev/Astro/capelix-dev/src/icons/Angular.astro", void 0);

const $$Astro$h = createAstro();
const $$Tailwind = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$h, $$props, $$slots);
  Astro2.self = $$Tailwind;
  return renderTemplate`${maybeRenderHead()}<svg${spreadAttributes(Astro2.props)} width="48" height="48" viewBox="0 0 15 15" fill="none" role="img" aria-label="Tailwind brand logo"> <path d="M7.50006 2.5C6.47409 2.5 5.59203 2.77691 4.89966 3.37037C4.21227 3.95956 3.76259 4.81729 3.51314 5.88638C3.45869 6.1197 3.57742 6.35885 3.79619 6.45654C4.01496 6.55423 4.27228 6.483 4.40967 6.28672C4.7263 5.8344 5.04244 5.56261 5.3462 5.42313C5.64038 5.28805 5.95748 5.26068 6.32069 5.35797C6.68723 5.45615 6.97097 5.74369 7.41643 6.22816L7.43082 6.24382C7.76661 6.60905 8.17623 7.0546 8.73649 7.40028C9.31785 7.75898 10.0413 7.99999 11.0001 7.99999C12.026 7.99999 12.9081 7.72307 13.6005 7.12962C14.2878 6.54043 14.7375 5.6827 14.987 4.61361C15.0414 4.38029 14.9227 4.14114 14.7039 4.04345C14.4852 3.94576 14.2278 4.01698 14.0904 4.21326C13.7738 4.66559 13.4577 4.93737 13.1539 5.07686C12.8597 5.21194 12.5426 5.23931 12.1794 5.14202C11.8129 5.04384 11.5291 4.7563 11.0837 4.27182L11.0693 4.25616C10.7335 3.89093 10.3239 3.44538 9.76362 3.09971C9.18227 2.74101 8.45883 2.5 7.50006 2.5Z" fill="currentColor"></path> <path d="M4.00006 6.99999C2.97409 6.99999 2.09203 7.2769 1.39966 7.87036C0.712271 8.45955 0.262592 9.31727 0.0131365 10.3864C-0.0413057 10.6197 0.0774162 10.8588 0.296186 10.9565C0.514956 11.0542 0.772276 10.983 0.909673 10.7867C1.2263 10.3344 1.54244 10.0626 1.8462 9.92312C2.14038 9.78804 2.45747 9.76067 2.82069 9.85796C3.18723 9.95614 3.47097 10.2437 3.91643 10.7282L3.93082 10.7438C4.2666 11.109 4.67624 11.5546 5.23649 11.9003C5.81785 12.259 6.54128 12.5 7.50006 12.5C8.52602 12.5 9.40808 12.2231 10.1005 11.6296C10.7878 11.0404 11.2375 10.1827 11.487 9.1136C11.5414 8.88027 11.4227 8.64113 11.2039 8.54343C10.9852 8.44574 10.7278 8.51697 10.5904 8.71325C10.2738 9.16558 9.95768 9.43736 9.65391 9.57684C9.35974 9.71192 9.04264 9.7393 8.67942 9.64201C8.31289 9.54383 8.02915 9.25628 7.58369 8.77181L7.56929 8.75615C7.23351 8.39092 6.82388 7.94537 6.26362 7.59969C5.68227 7.241 4.95883 6.99999 4.00006 6.99999Z" fill="currentColor"></path> </svg>`;
}, "C:/Dev/Astro/capelix-dev/src/icons/Tailwind.astro", void 0);

const $$Astro$g = createAstro();
const $$Kotlin = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$g, $$props, $$slots);
  Astro2.self = $$Kotlin;
  return renderTemplate`${maybeRenderHead()}<svg${spreadAttributes(Astro2.props)} fill="currentColor" width="48" height="48" viewBox="0 0 32 32" version="1.1" role="img" aria-label="Kotlin brand logo"> <path d="M30.996 30.996h-29.992v-29.992h29.992l-14.996 14.996 14.996 14.996z"></path> </svg>`;
}, "C:/Dev/Astro/capelix-dev/src/icons/Kotlin.astro", void 0);

const $$Astro$f = createAstro();
const $$Firebase = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$f, $$props, $$slots);
  Astro2.self = $$Firebase;
  return renderTemplate`${maybeRenderHead()}<svg${spreadAttributes(Astro2.props)} width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"></path><path d="M4.53 17.05l6.15 -11.72h-.02c.38 -.74 1.28 -1.02 2.01 -.63c.26 .14 .48 .36 .62 .62l1.06 2.01"></path><path d="M15.47 6.45c.58 -.59 1.53 -.59 2.11 -.01c.22 .22 .36 .5 .41 .81l1.5 9.11c.1 .62 -.2 1.24 -.76 1.54l-6.07 2.9c-.46 .25 -1.01 .26 -1.46 0l-6.02 -2.92c-.55 -.31 -.85 -.92 -.75 -1.54l1.96 -12.04c.12 -.82 .89 -1.38 1.7 -1.25c.46 .07 .87 .36 1.09 .77l1.24 1.76"></path><path d="M4.57 17.18l10.93 -10.68"></path></svg>`;
}, "C:/Dev/Astro/capelix-dev/src/icons/Firebase.astro", void 0);

const $$Astro$e = createAstro();
const $$Android = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$e, $$props, $$slots);
  Astro2.self = $$Android;
  return renderTemplate`${maybeRenderHead()}<svg${spreadAttributes(Astro2.props)} width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"></path><path d="M4 10l0 6"></path><path d="M20 10l0 6"></path><path d="M7 9h10v8a1 1 0 0 1 -1 1h-8a1 1 0 0 1 -1 -1v-8a5 5 0 0 1 10 0"></path><path d="M8 3l1 2"></path><path d="M16 3l-1 2"></path><path d="M9 18l0 3"></path><path d="M15 18l0 3"></path></svg>`;
}, "C:/Dev/Astro/capelix-dev/src/icons/Android.astro", void 0);

const TAGS = {
  ASTRO: {
    name: "Astro",
    class: "bg-orange-950 text-slate-200",
    iconColor: "text-orange-600",
    icon: $$AstroBrand
  },
  TAILWIND: {
    name: "Tailwind CSS",
    class: "bg-[#003159] text-slate-200",
    iconColor: "text-[#73bcf6]",
    icon: $$Tailwind
  },
  KOTLIN: {
    name: "Kotlin",
    class: "bg-indigo-950 text-slate-200",
    iconColor: "text-indigo-600",
    icon: $$Kotlin
  },
  FIREBASE: {
    name: "Firebase",
    class: "bg-yellow-950 text-slate-200",
    iconColor: "text-yellow-600",
    icon: $$Firebase
  },
  ANDROID: {
    name: "Android",
    class: "bg-green-950 text-slate-200",
    iconColor: "text-green-600",
    icon: $$Android
  }
};
const projectsService = (currentLocale) => {
  const i18n = getI18N({ currentLocale });
  return [
    {
      id: "el-chevere-web",
      title: "El Chévere - Official Web",
      description: i18n.EL_CHEVERE_WEB_DESCRIPTION,
      imgUrl: "https://capelix.dev/images/page-presentation.webp",
      projectUrl: "https://fotoestudioelchevere.com/",
      tags: [TAGS.ASTRO, TAGS.TAILWIND],
      gitCodeUrl: "https://github.com/Capelix/el-chevere-web",
      alt: i18n.PROJECT_EL_CHEVERE_ALT
    },
    {
      id: "fire-reservations",
      title: "Fire Reservations",
      description: i18n.FIRE_RESERVATIONS_DESCRIPTION,
      imgUrl: "https://capelix.dev/images/embedded-img.webp",
      projectUrl: "https://firereservations.vercel.app/",
      tags: [TAGS.ASTRO, TAGS.TAILWIND],
      gitCodeUrl: "https://github.com/Capelix/firereservations-official",
      alt: i18n.PROJECT_FIRE_RESERVATIONS_ALT
    },
    {
      id: "stop-trivia",
      title: "Stop Trivia",
      description: i18n.STOPT_TRIVIA_DESCRIPTION,
      imgUrl: "https://capelix.dev/images/stop-trivia.webp",
      projectUrl: "https://play.google.com/store/apps/details?id=com.rilisentertainment.stoptriviaonline",
      tags: [TAGS.KOTLIN, TAGS.FIREBASE, TAGS.ANDROID],
      gitCodeUrl: "https://github.com/Capelix/stop-trivia",
      alt: i18n.PROJECT_STOP_TRIVIA_ALT
    },
    {
      id: "anjocc-oficial",
      title: "ANJOCC Oficial",
      description: i18n.ANJOCC_OFICIAL_DESCRIPTION,
      imgUrl: "https://capelix.dev/images/anjocc-oficial.webp",
      projectUrl: "https://anjocc.com",
      tags: [TAGS.ASTRO, TAGS.TAILWIND],
      gitCodeUrl: "https://github.com/Capelix/anjocc-oficial",
      alt: i18n.PROJECT_ANJOCC_ALT
    },
    {
      id: "gdn-style",
      title: "GDN Style",
      description: i18n.GDN_STYLE_DESCRIPTION,
      imgUrl: "https://capelix.dev/images/gdn-style.webp",
      projectUrl: "https://gdnstyle.com",
      tags: [TAGS.ASTRO, TAGS.TAILWIND],
      gitCodeUrl: "https://github.com/Capelix",
      alt: i18n.PROJECT_GDN_STYLE_ALT
    }
  ];
};

const $$Astro$d = createAstro();
const $$Bootstrap = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$d, $$props, $$slots);
  Astro2.self = $$Bootstrap;
  return renderTemplate`${maybeRenderHead()}<svg${spreadAttributes(Astro2.props)} width="48" height="48" viewBox="0 0 24 24" fill="currentColor" role="img" aria-label="Bootstrap brand logo"> <path fill-rule="evenodd" clip-rule="evenodd" d="M4.98488 2C3.61546 2 2.60217 3.19858 2.64753 4.49844C2.69105 5.74725 2.63451 7.36461 2.22732 8.68359C1.81892 10.0064 1.1282 10.8444 0 10.952V12.1666C1.1282 12.2742 1.81892 13.1122 2.22732 14.4351C2.63451 15.754 2.69105 17.3714 2.64753 18.6202C2.60217 19.9199 3.61546 21.1186 4.98508 21.1186H19.0169C20.3864 21.1186 21.3995 19.9201 21.3541 18.6202C21.3106 17.3714 21.3671 15.754 21.7743 14.4351C22.1829 13.1122 22.8718 12.2742 24 12.1666V10.952C22.8718 10.8444 22.1829 10.0064 21.7743 8.68359C21.3671 7.36481 21.3106 5.74725 21.3541 4.49844C21.3995 3.19878 20.3864 2 19.0169 2H4.98468H4.98488ZM16.2712 13.7687C16.2712 15.5586 14.9361 16.6441 12.7206 16.6441H8.94915C8.84127 16.6441 8.7378 16.6012 8.66152 16.5249C8.58523 16.4486 8.54237 16.3452 8.54237 16.2373V6.88136C8.54237 6.77347 8.58523 6.67001 8.66152 6.59372C8.7378 6.51743 8.84127 6.47458 8.94915 6.47458H12.6991C14.5464 6.47458 15.7588 7.47525 15.7588 9.01166C15.7588 10.09 14.9433 11.0555 13.9041 11.2245V11.2809C15.3187 11.4361 16.2712 12.4156 16.2712 13.7687ZM12.3094 7.76407H10.1589V10.8015H11.9701C13.3702 10.8015 14.1423 10.2377 14.1423 9.2299C14.1423 8.28556 13.4784 7.76407 12.3094 7.76407ZM10.1589 12.0068V15.3542H12.3885C13.8462 15.3542 14.6184 14.7692 14.6184 13.6699C14.6184 12.5704 13.8246 12.0066 12.2947 12.0066H10.1589V12.0068Z" fill="currentColor"></path> </svg>`;
}, "C:/Dev/Astro/capelix-dev/src/icons/Bootstrap.astro", void 0);

const $$Astro$c = createAstro();
const $$CodePlus = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$c, $$props, $$slots);
  Astro2.self = $$CodePlus;
  return renderTemplate`${maybeRenderHead()}<svg${spreadAttributes(Astro2.props)} width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"></path><path d="M9 12h6"></path><path d="M12 9v6"></path><path d="M6 19a2 2 0 0 1 -2 -2v-4l-1 -1l1 -1v-4a2 2 0 0 1 2 -2"></path><path d="M18 19a2 2 0 0 0 2 -2v-4l1 -1l-1 -1v-4a2 2 0 0 0 -2 -2"></path></svg>`;
}, "C:/Dev/Astro/capelix-dev/src/icons/CodePlus.astro", void 0);

const $$Astro$b = createAstro();
const $$CSS = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$b, $$props, $$slots);
  Astro2.self = $$CSS;
  return renderTemplate`${maybeRenderHead()}<svg${spreadAttributes(Astro2.props)} fill="currentColor" version="1.1" width="48" height="48" viewBox="0 0 512 512" enable-background="new 0 0 512 512" xml:space="preserve" role="img" aria-label="CSS brand logo"> <g id="c133de6af664cd4f011a55de6b001b19"> <path display="inline" d="M483.111,0.501l-42.59,461.314l-184.524,49.684L71.47,461.815L28.889,0.501H483.111z M397.29,94.302
  H255.831H111.866l6.885,55.708h137.08h7.7l-7.7,3.205l-132.07,55.006l4.38,54.453l127.69,0.414l68.438,0.217l-4.381,72.606
  l-64.058,18.035v-0.057l-0.525,0.146l-61.864-15.617l-3.754-45.07h-0.205H132.1h-0.202l7.511,87.007l116.423,34.429v-0.062
  l0.21,0.062l115.799-33.802l15.021-172.761h-131.03h-0.323l0.323-0.14l135.83-58.071L397.29,94.302z"></path> </g> </svg>`;
}, "C:/Dev/Astro/capelix-dev/src/icons/CSS.astro", void 0);

const $$Astro$a = createAstro();
const $$Git = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$a, $$props, $$slots);
  Astro2.self = $$Git;
  return renderTemplate`${maybeRenderHead()}<svg${spreadAttributes(Astro2.props)} width="48" height="48" viewBox="0 0 24 24" fill="none" role="img" aria-label="Git brand logo"> <path fill-rule="evenodd" clip-rule="evenodd" d="M13.4142 3.82843C12.6332 3.04738 11.3668 3.04738 10.5858 3.82843L9.91421 4.5L11.482 6.06774C11.6472 6.02356 11.8208 6 12 6C13.1046 6 14 6.89543 14 8C14 8.17916 13.9764 8.35282 13.9323 8.51804L15.982 10.5677C16.1472 10.5236 16.3208 10.5 16.5 10.5C17.6046 10.5 18.5 11.3954 18.5 12.5C18.5 13.6046 17.6046 14.5 16.5 14.5C15.3954 14.5 14.5 13.6046 14.5 12.5C14.5 12.3208 14.5236 12.1472 14.5677 11.982L13 10.4142V15.2676C13.5978 15.6134 14 16.2597 14 17C14 18.1046 13.1046 19 12 19C10.8954 19 10 18.1046 10 17C10 16.2597 10.4022 15.6134 11 15.2676V9.73244C10.4022 9.38663 10 8.74028 10 8C10 7.82084 10.0236 7.64718 10.0677 7.48196L8.5 5.91421L3.82843 10.5858C3.04738 11.3668 3.04738 12.6332 3.82843 13.4142L10.5858 20.1716C11.3668 20.9526 12.6332 20.9526 13.4142 20.1716L20.1716 13.4142C20.9526 12.6332 20.9526 11.3668 20.1716 10.5858L13.4142 3.82843ZM9.17157 2.41421C10.7337 0.852115 13.2663 0.852119 14.8284 2.41422L21.5858 9.17157C23.1479 10.7337 23.1479 13.2663 21.5858 14.8284L14.8284 21.5858C13.2663 23.1479 10.7337 23.1479 9.17157 21.5858L2.41421 14.8284C0.852115 13.2663 0.852119 10.7337 2.41422 9.17157L9.17157 2.41421Z" fill="currentColor"></path> </svg>`;
}, "C:/Dev/Astro/capelix-dev/src/icons/Git.astro", void 0);

const $$Astro$9 = createAstro();
const $$HTML = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$9, $$props, $$slots);
  Astro2.self = $$HTML;
  return renderTemplate`${maybeRenderHead()}<svg${spreadAttributes(Astro2.props)} width="48" height="48" viewBox="-1 0 20 20" version="1.1" role="img" aria-label="HTML brand logo"> <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd"> <g id="Dribbble-Light-Preview" transform="translate(-61.000000, -7639.000000)" fill="currentColor"> <g id="icons" transform="translate(56.000000, 160.000000)"> <path d="M19.4350881,7485 L19.4279481,7485 L10.8119794,7485 L11.0180201,7487 L19.2300674,7487 C19.109707,7488.752 18.7455658,7492.464 18.6119454,7494.153 L13.99949,7495.451 L13.99949,7495.455 L13.98929,7495.46 L9.37377458,7493.836 L9.05757353,7490 L11.3199411,7490 L11.4800816,7492.063 L13.99337,7493 L13.99949,7493 L16.5086984,7492.1 L16.7667592,7489 L8.95659319,7489 C8.91885306,7488.599 8.43333144,7483.392 8.34867116,7483 L19.6370488,7483 C19.5738086,7483.66 19.5095484,7484.338 19.4350881,7485 L19.4350881,7485 Z M5,7479 L6.63812546,7497.148 L13.98929,7499 L21.3598345,7497.111 L23,7479 L5,7479 Z" id="html-[#124]"></path> </g> </g> </g> </svg>`;
}, "C:/Dev/Astro/capelix-dev/src/icons/HTML.astro", void 0);

const $$Astro$8 = createAstro();
const $$JS = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$8, $$props, $$slots);
  Astro2.self = $$JS;
  return renderTemplate`${maybeRenderHead()}<svg${spreadAttributes(Astro2.props)} width="48" height="48" viewBox="0 0 16 16" fill="none" role="img" aria-label="JavaScript brand logo"> <path fill-rule="nonzero" clip-rule="nonzero" d="M0 1.75C0 0.783501 0.783502 0 1.75 0H14.25C15.2165 0 16 0.783502 16 1.75V3.75C16 4.16421 15.6642 4.5 15.25 4.5C14.8358 4.5 14.5 4.16421 14.5 3.75V1.75C14.5 1.61193 14.3881 1.5 14.25 1.5H1.75C1.61193 1.5 1.5 1.61193 1.5 1.75V14.25C1.5 14.3881 1.61193 14.5 1.75 14.5H15.25C15.6642 14.5 16 14.8358 16 15.25C16 15.6642 15.6642 16 15.25 16H1.75C0.783501 16 0 15.2165 0 14.25V1.75ZM8.25 5.75C8.66421 5.75 9 6.08579 9 6.5V10.5C9 11.5048 8.72399 12.2584 8.15514 12.7324C7.61223 13.1848 6.95384 13.25 6.5 13.25C6.08579 13.25 5.75 12.9142 5.75 12.5C5.75 12.0858 6.08579 11.75 6.5 11.75C6.84617 11.75 7.06277 11.6902 7.19486 11.5801C7.301 11.4916 7.5 11.2452 7.5 10.5V6.5C7.5 6.08579 7.83578 5.75 8.25 5.75ZM11.2757 6.58011C11.6944 6.08164 12.3507 5.75 13.25 5.75C14.0849 5.75 14.7148 6.03567 15.1394 6.48481C15.4239 6.78583 15.4105 7.26052 15.1095 7.54505C14.8085 7.82958 14.3338 7.81621 14.0493 7.51519C13.9394 7.39898 13.7204 7.25 13.25 7.25C12.7493 7.25 12.5306 7.41836 12.4243 7.54489C12.2934 7.70065 12.25 7.896 12.25 8C12.25 8.104 12.2934 8.29935 12.4243 8.45511C12.5306 8.58164 12.7493 8.75 13.25 8.75C13.3257 8.75 13.3988 8.76121 13.4676 8.78207C14.1307 8.87646 14.6319 9.17251 14.9743 9.58011C15.3684 10.0493 15.5 10.604 15.5 11C15.5 11.396 15.3684 11.9507 14.9743 12.4199C14.5556 12.9184 13.8993 13.25 13 13.25C12.1651 13.25 11.5352 12.9643 11.1106 12.5152C10.8261 12.2142 10.8395 11.7395 11.1405 11.4549C11.4415 11.1704 11.9162 11.1838 12.2007 11.4848C12.3106 11.601 12.5296 11.75 13 11.75C13.5007 11.75 13.7194 11.5816 13.8257 11.4551C13.9566 11.2993 14 11.104 14 11C14 10.896 13.9566 10.7007 13.8257 10.5449C13.7194 10.4184 13.5007 10.25 13 10.25C12.9243 10.25 12.8512 10.2388 12.7824 10.2179C12.1193 10.1235 11.6181 9.82749 11.2757 9.41989C10.8816 8.95065 10.75 8.396 10.75 8C10.75 7.604 10.8816 7.04935 11.2757 6.58011Z" fill="currentColor"></path> </svg>`;
}, "C:/Dev/Astro/capelix-dev/src/icons/JS.astro", void 0);

const $$Astro$7 = createAstro();
const $$NodeJS = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$7, $$props, $$slots);
  Astro2.self = $$NodeJS;
  return renderTemplate`${maybeRenderHead()}<svg${spreadAttributes(Astro2.props)} width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" role="img" aria-label="Node.js brand logo"> <path stroke="none" d="M0 0h24v24H0z" fill="none"></path> <path d="M9 9v8.044a2 2 0 0 1 -2.996 1.734l-1.568 -.9a3 3 0 0 1 -1.436 -2.561v-6.635a3 3 0 0 1 1.436 -2.56l6 -3.667a3 3 0 0 1 3.128 0l6 3.667a3 3 0 0 1 1.436 2.561v6.634a3 3 0 0 1 -1.436 2.56l-6 3.667a3 3 0 0 1 -3.128 0"></path> <path d="M17 9h-3.5a1.5 1.5 0 0 0 0 3h2a1.5 1.5 0 0 1 0 3h-3.5"></path> </svg>`;
}, "C:/Dev/Astro/capelix-dev/src/icons/NodeJS.astro", void 0);

const $$Astro$6 = createAstro();
const $$React = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$6, $$props, $$slots);
  Astro2.self = $$React;
  return renderTemplate`${maybeRenderHead()}<svg${spreadAttributes(Astro2.props)} width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" role="img" aria-label="React brand logo"> <path stroke="none" d="M0 0h24v24H0z" fill="none"></path> <path d="M6.306 8.711c-2.602 .723 -4.306 1.926 -4.306 3.289c0 2.21 4.477 4 10 4c.773 0 1.526 -.035 2.248 -.102"></path> <path d="M17.692 15.289c2.603 -.722 4.308 -1.926 4.308 -3.289c0 -2.21 -4.477 -4 -10 -4c-.773 0 -1.526 .035 -2.25 .102"></path> <path d="M6.305 15.287c-.676 2.615 -.485 4.693 .695 5.373c1.913 1.105 5.703 -1.877 8.464 -6.66c.387 -.67 .733 -1.339 1.036 -2"></path> <path d="M17.694 8.716c.677 -2.616 .487 -4.696 -.694 -5.376c-1.913 -1.105 -5.703 1.877 -8.464 6.66c-.387 .67 -.733 1.34 -1.037 2"></path> <path d="M12 5.424c-1.925 -1.892 -3.82 -2.766 -5 -2.084c-1.913 1.104 -1.226 5.877 1.536 10.66c.386 .67 .793 1.304 1.212 1.896"></path> <path d="M12 18.574c1.926 1.893 3.821 2.768 5 2.086c1.913 -1.104 1.226 -5.877 -1.536 -10.66c-.375 -.65 -.78 -1.283 -1.212 -1.897"></path> <path d="M11.5 12.866a1 1 0 1 0 1 -1.732a1 1 0 0 0 -1 1.732z"></path> </svg>`;
}, "C:/Dev/Astro/capelix-dev/src/icons/React.astro", void 0);

const $$Astro$5 = createAstro();
const $$ReactNative = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$5, $$props, $$slots);
  Astro2.self = $$ReactNative;
  return renderTemplate`${maybeRenderHead()}<svg${spreadAttributes(Astro2.props)} width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"> <path stroke="none" d="M0 0h24v24H0z" fill="none"></path><path d="M6.357 9c-2.637 .68 -4.357 1.845 -4.357 3.175c0 2.107 4.405 3.825 9.85 3.825c.74 0 1.26 -.039 1.95 -.097"></path><path d="M9.837 15.9c-.413 -.596 -.806 -1.133 -1.18 -1.8c-2.751 -4.9 -3.488 -9.77 -1.63 -10.873c1.15 -.697 3.047 .253 4.974 2.254"></path><path d="M6.429 15.387c-.702 2.688 -.56 4.716 .56 5.395c1.783 1.08 5.387 -1.958 8.043 -6.804c.36 -.67 .683 -1.329 .968 -1.978"></path><path d="M12 18.52c1.928 2 3.817 2.95 4.978 2.253c1.85 -1.102 1.121 -5.972 -1.633 -10.873c-.384 -.677 -.777 -1.204 -1.18 -1.8"></path><path d="M17.66 15c2.612 -.687 4.34 -1.85 4.34 -3.176c0 -2.11 -4.408 -3.824 -9.845 -3.824c-.747 0 -1.266 .029 -1.955 .087"></path><path d="M8 12c.285 -.66 .607 -1.308 .968 -1.978c2.647 -4.844 6.253 -7.89 8.046 -6.801c1.11 .679 1.262 2.706 .56 5.393"></path><path d="M12.26 12.015h-.01c-.01 .13 -.12 .24 -.26 .24a.263 .263 0 0 1 -.25 -.26c0 -.14 .11 -.25 .24 -.25h-.01c.13 -.01 .25 .11 .25 .24"></path> </svg>`;
}, "C:/Dev/Astro/capelix-dev/src/icons/ReactNative.astro", void 0);

const $$Astro$4 = createAstro();
const $$SQL = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$4, $$props, $$slots);
  Astro2.self = $$SQL;
  return renderTemplate`${maybeRenderHead()}<svg${spreadAttributes(Astro2.props)} fill="currentColor" width="48" height="48" viewBox="0 0 32 32" version="1.1" role="img" aria-label="SQL brand logo"> <path d="M16,14c6.3,0,13-1.93,13-5.5v-3C29,1.93,22.3,0,16,0S3,1.93,3,5.5v3C3,12.07,9.7,14,16,14ZM5,5.5C5,4.07,9.29,2,16,2S27,4.07,27,5.5v3C27,9.93,22.71,12,16,12S5,9.93,5,8.5Z"></path> <path d="M16,32c6.3,0,13-1.93,13-5.5v-3a1,1,0,0,0-2,0v3c0,1.43-4.29,3.5-11,3.5S5,27.93,5,26.5v-3a1,1,0,0,0-2,0v3C3,30.07,9.7,32,16,32Z"></path> <path d="M16,23c6.3,0,13-1.93,13-5.5v-3a1,1,0,0,0-2,0v3c0,1.43-4.29,3.5-11,3.5S5,18.93,5,17.5v-3a1,1,0,0,0-2,0v3C3,21.07,9.7,23,16,23Z"></path> </svg>`;
}, "C:/Dev/Astro/capelix-dev/src/icons/SQL.astro", void 0);

const $$Astro$3 = createAstro();
const $$TS = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$3, $$props, $$slots);
  Astro2.self = $$TS;
  return renderTemplate`${maybeRenderHead()}<svg${spreadAttributes(Astro2.props)} width="48" height="48" viewBox="0 0 16 16" fill="none" role="img" aria-label="TypeScript brand logo"> <path fill-rule="nonzero" clip-rule="nonzero" d="M0 1.75C0 0.783501 0.783502 0 1.75 0H14.25C15.2165 0 16 0.783502 16 1.75V3.75C16 4.16421 15.6642 4.5 15.25 4.5C14.8358 4.5 14.5 4.16421 14.5 3.75V1.75C14.5 1.61193 14.3881 1.5 14.25 1.5H1.75C1.61193 1.5 1.5 1.61193 1.5 1.75V14.25C1.5 14.3881 1.61193 14.5 1.75 14.5H15.25C15.6642 14.5 16 14.8358 16 15.25C16 15.6642 15.6642 16 15.25 16H1.75C0.783501 16 0 15.2165 0 14.25V1.75ZM4.75 6.5C4.75 6.08579 5.08579 5.75 5.5 5.75H9.25C9.66421 5.75 10 6.08579 10 6.5C10 6.91421 9.66421 7.25 9.25 7.25H8.25V12.5C8.25 12.9142 7.91421 13.25 7.5 13.25C7.08579 13.25 6.75 12.9142 6.75 12.5V7.25H5.5C5.08579 7.25 4.75 6.91421 4.75 6.5ZM11.2757 6.58011C11.6944 6.08164 12.3507 5.75 13.25 5.75C14.0849 5.75 14.7148 6.03567 15.1394 6.48481C15.4239 6.78583 15.4105 7.26052 15.1095 7.54505C14.8085 7.82958 14.3338 7.81621 14.0493 7.51519C13.9394 7.39898 13.7204 7.25 13.25 7.25C12.7493 7.25 12.5306 7.41836 12.4243 7.54489C12.2934 7.70065 12.25 7.896 12.25 8C12.25 8.104 12.2934 8.29935 12.4243 8.45511C12.5306 8.58164 12.7493 8.75 13.25 8.75C13.3257 8.75 13.3988 8.76121 13.4676 8.78207C14.1307 8.87646 14.6319 9.17251 14.9743 9.58011C15.3684 10.0493 15.5 10.604 15.5 11C15.5 11.396 15.3684 11.9507 14.9743 12.4199C14.5556 12.9184 13.8993 13.25 13 13.25C12.1651 13.25 11.5352 12.9643 11.1106 12.5152C10.8261 12.2142 10.8395 11.7395 11.1405 11.4549C11.4415 11.1704 11.9162 11.1838 12.2007 11.4848C12.3106 11.601 12.5296 11.75 13 11.75C13.5007 11.75 13.7194 11.5816 13.8257 11.4551C13.9566 11.2993 14 11.104 14 11C14 10.896 13.9566 10.7007 13.8257 10.5449C13.7194 10.4184 13.5007 10.25 13 10.25C12.9243 10.25 12.8512 10.2388 12.7824 10.2179C12.1193 10.1235 11.6181 9.82749 11.2757 9.41989C10.8816 8.95065 10.75 8.396 10.75 8C10.75 7.604 10.8816 7.04935 11.2757 6.58011Z" fill="currentColor"></path> </svg>`;
}, "C:/Dev/Astro/capelix-dev/src/icons/TS.astro", void 0);

const $$Astro$2 = createAstro();
const $$ProjectsTecnologies = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$ProjectsTecnologies;
  const { currentLocale } = Astro2;
  const i18n = getI18N({ currentLocale });
  return renderTemplate`${maybeRenderHead()}<div class="flex w-full flex-col"> ${renderComponent($$result, "MainTitle", $$MainTitle, {}, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "CodePlus", $$CodePlus, { "class": "size-8" })} ${i18n.TECNOLOGIES}` })} <div class="mt-4 flex w-full flex-wrap gap-x-2 gap-y-4"> ${renderComponent($$result, "SocialPill", $$SocialPill, {}, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "HTML", $$HTML, { "class": "size-6" })}
HTML
` })} ${renderComponent($$result, "SocialPill", $$SocialPill, {}, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "CSS", $$CSS, { "class": "size-6" })}
CSS
` })} ${renderComponent($$result, "SocialPill", $$SocialPill, {}, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "JS", $$JS, { "class": "size-6" })}
JavaScript
` })} ${renderComponent($$result, "SocialPill", $$SocialPill, {}, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "TS", $$TS, { "class": "size-6" })}
TypeScript
` })} ${renderComponent($$result, "SocialPill", $$SocialPill, {}, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Angular", $$Angular, { "class": "size-6" })}
Angular
` })} ${renderComponent($$result, "SocialPill", $$SocialPill, {}, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "AstroBrand", $$AstroBrand, { "class": "size-6" })}
Astro
` })} ${renderComponent($$result, "SocialPill", $$SocialPill, {}, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "React", $$React, { "class": "size-6" })}
React
` })} ${renderComponent($$result, "SocialPill", $$SocialPill, {}, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "ReactNative", $$ReactNative, { "class": "size-6" })}
React Native
` })} ${renderComponent($$result, "SocialPill", $$SocialPill, {}, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Tailwind", $$Tailwind, { "class": "size-6" })}
Tailwind CSS
` })} ${renderComponent($$result, "SocialPill", $$SocialPill, {}, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Bootstrap", $$Bootstrap, { "class": "size-6" })}
Bootstrap
` })} ${renderComponent($$result, "SocialPill", $$SocialPill, {}, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Git", $$Git, { "class": "size-6" })}
Git
` })} ${renderComponent($$result, "SocialPill", $$SocialPill, {}, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "GitHub", $$GitHub, { "class": "size-6" })}
GitHub
` })} ${renderComponent($$result, "SocialPill", $$SocialPill, {}, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "NodeJS", $$NodeJS, { "class": "size-6" })}
Node.JS
` })} ${renderComponent($$result, "SocialPill", $$SocialPill, {}, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Kotlin", $$Kotlin, { "class": "size-6" })}
Kotlin
` })} ${renderComponent($$result, "SocialPill", $$SocialPill, {}, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "SQL", $$SQL, { "class": "size-6" })}
SQL
` })} </div> </div>`;
}, "C:/Dev/Astro/capelix-dev/src/components/portfolio/ProjectsTecnologies.astro", void 0);

const $$Astro$1 = createAstro();
const $$Projects = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$Projects;
  const { currentLocale } = Astro2;
  const i18n = getI18N({ currentLocale });
  const allProjects = projectsService(currentLocale).slice(0, 4);
  return renderTemplate`${maybeRenderHead()}<div class="flex w-full max-w-4xl flex-col sm:w-11/12 md:w-8/12"> ${renderComponent($$result, "MainTitle", $$MainTitle, {}, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Code", $$Code, { "class": "size-8" })} ${i18n.PROJECTS}` })} <div class="text- flex flex-col gap-y-16"> ${allProjects.map(({ title, description, imgUrl, projectUrl, tags, gitCodeUrl, alt }) => renderTemplate`${renderComponent($$result, "ProjectsCard", $$ProjectsCard, { "title": title, "description": description, "imgUrl": imgUrl, "projectUrl": projectUrl, "tags": tags, "gitCodeUrl": gitCodeUrl, "alt": alt })}`)} </div> ${renderComponent($$result, "Divider", $$Divider, {})} ${renderComponent($$result, "ProjectsTecnologies", $$ProjectsTecnologies, {})} </div>`;
}, "C:/Dev/Astro/capelix-dev/src/components/portfolio/Projects.astro", void 0);

const $$Astro = createAstro();
const $$Portfolio = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Portfolio;
  const locale = getActiveLocale(Astro2);
  const i18n = getI18N({ currentLocale: locale });
  const preloadImages = [
    {
      as: "image",
      href: `https://capelix.dev/images/page-presentation.webp`,
      type: "image/avif",
      rel: "preload"
    },
    {
      as: "image",
      href: `https://capelix.dev/images/embedded-img.webp`,
      type: "image/webp",
      rel: "preload"
    },
    {
      as: "image",
      href: `https://capelix.dev/images/stop-trivia.webp`,
      type: "image/webp",
      rel: "preload"
    },
    {
      as: "image",
      href: `https://capelix.dev/images/anjocc-oficial.webp`,
      type: "image/webp",
      rel: "preload"
    }
  ];
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": `${i18n.ABOUT_TEXT_1} - Rikelvi Capell\xE1n`, "description": i18n.PORTFOLIO_PAGE_DESCRIPTION, "canonical": new URL(resolveLocalizedPath("/portfolio/"), "https://capelix.dev").toString(), "preload": preloadImages }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "SectionContainer", $$SectionContainer, { "id": "about" }, { "default": ($$result3) => renderTemplate` ${renderComponent($$result3, "About", $$About, {})} ` })} ${renderComponent($$result2, "SectionContainer", $$SectionContainer, { "id": "experience" }, { "default": ($$result3) => renderTemplate` ${renderComponent($$result3, "Experience", $$Experience, {})} ` })} ${renderComponent($$result2, "SectionContainer", $$SectionContainer, { "id": "projects" }, { "default": ($$result3) => renderTemplate` ${renderComponent($$result3, "Projects", $$Projects, {})} ` })} ` })}`;
}, "C:/Dev/Astro/capelix-dev/src/pages/portfolio.astro", void 0);

const $$file = "C:/Dev/Astro/capelix-dev/src/pages/portfolio.astro";
const $$url = "/portfolio";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: $$Portfolio,
	file: $$file,
	url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
