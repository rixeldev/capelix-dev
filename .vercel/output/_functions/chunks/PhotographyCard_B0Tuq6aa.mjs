import { c as createComponent, a as createAstro, m as maybeRenderHead, s as spreadAttributes, r as renderTemplate, d as renderComponent } from './astro/server_DFE9ECo4.mjs';

const $$Astro = createAstro();
const $$RightArrow = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$RightArrow;
  return renderTemplate`${maybeRenderHead()}<svg${spreadAttributes(Astro2.props)} width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"></path><path d="M9 6l6 6l-6 6"></path></svg>`;
}, "C:/Dev/Astro/capelix-dev/src/icons/RightArrow.astro", void 0);

const $$PhotographyCard = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<a class="group relative flex w-full justify-between overflow-hidden rounded-2xl bg-gradient-to-br from-primary/5 to-primary/10 shadow-sm backdrop-blur-sm transition-all duration-300 ease-in-out active:scale-[0.98] active:shadow-lg sm:cursor-pointer sm:hover:scale-[0.98] sm:hover:border-accent/20 sm:hover:bg-gradient-to-br sm:hover:from-accent/10 sm:hover:to-primary/15 sm:hover:shadow-lg sm:hover:shadow-accent/5 dark:border-primary/20 dark:bg-gradient-to-br dark:from-primary/10 dark:to-primary/5 dark:sm:hover:border-accent/30 dark:sm:hover:from-accent/15 dark:sm:hover:to-primary/20" href="https://www.capelix.dev/photography" rel="noopener noreferrer"> <span class="absolute h-full w-0 -skew-x-12 scale-110 bg-gradient-to-r from-accent/10 to-primary/10 transition-all duration-500 ease-out group-active:w-full sm:group-hover:w-full"></span> <div class="relative z-10 flex w-full flex-col overflow-hidden sm:flex-row"> <div class="grid aspect-square size-full max-h-full max-w-full grid-cols-2 grid-rows-2 overflow-hidden rounded-l-2xl border-r border-primary/10 sm:max-h-56 sm:max-w-56 dark:border-primary/20"> <img src="https://www.capelix.dev/portraits/16.webp" alt="Image 5" srcset="https://www.capelix.dev/portraits/16.webp" class="h-full w-full object-cover transition-transform duration-500 sm:group-hover:scale-110"> <img src="https://www.capelix.dev/portraits/34.webp" alt="Image 34" srcset="https://www.capelix.dev/portraits/34.webp" class="h-full w-full object-cover transition-transform duration-500 sm:group-hover:scale-110"> <img src="https://www.capelix.dev/portraits/21.webp" alt="Image 21" srcset="https://www.capelix.dev/portraits/21.webp" class="h-full w-full object-cover transition-transform duration-500 sm:group-hover:scale-110"> <img src="https://www.capelix.dev/portraits/40.webp" alt="Image 10" srcset="https://www.capelix.dev/portraits/40.webp" class="h-full w-full object-cover transition-transform duration-500 sm:group-hover:scale-110"> </div> <div class="flex flex-1 flex-col justify-center p-5 sm:p-6"> <h3 class="text-lg font-bold text-accent transition-colors duration-300 sm:text-xl sm:group-hover:text-accent/90">
Photographies portfolio
</h3> <p class="mt-2 text-sm text-primary transition-colors duration-300 sm:text-base sm:group-hover:text-primary/90">
See my photography portfolio, where I show some of my best works as a professional
				photographer and photo editor.
</p> </div> <div class="hidden items-center justify-center p-4 sm:flex"> ${renderComponent($$result, "RightArrow", $$RightArrow, { "class": "size-8 text-primary transition-all duration-300 sm:group-hover:translate-x-1 sm:group-hover:text-accent" })} </div> </div> </a>`;
}, "C:/Dev/Astro/capelix-dev/src/components/PhotographyCard.astro", void 0);

export { $$RightArrow as $, $$PhotographyCard as a };
