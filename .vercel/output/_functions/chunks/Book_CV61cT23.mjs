import { c as createComponent, a as createAstro, m as maybeRenderHead, s as spreadAttributes, r as renderTemplate } from './astro/server_DFE9ECo4.mjs';

const $$Astro = createAstro();
const $$Book = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Book;
  return renderTemplate`${maybeRenderHead()}<svg${spreadAttributes(Astro2.props)} width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"></path><path d="M19 4v16h-12a2 2 0 0 1 -2 -2v-12a2 2 0 0 1 2 -2h12z"></path><path d="M19 16h-12a2 2 0 0 0 -2 2"></path><path d="M9 8h6"></path></svg>`;
}, "C:/Dev/Astro/capelix-dev/src/icons/Book.astro", void 0);

export { $$Book as $ };
