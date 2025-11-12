/* empty css                                 */
import { c as createComponent, a as createAstro, r as renderTemplate, b as addAttribute, m as maybeRenderHead, s as spreadAttributes, d as renderComponent, e as renderScript } from '../chunks/astro/server_DFE9ECo4.mjs';
import { g as getActiveLocale, a as getI18N, r as resolveLocalizedPath, $ as $$Layout, b as $$SectionContainer, d as $$MainTitle, e as $$Photography$1 } from '../chunks/Layout_BwanNcMO.mjs';
import { a as getImagesWithSize } from '../chunks/getImageSizes_DgImm4XR.mjs';
/* empty css                                       */
export { renderers } from '../renderers.mjs';

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(cooked.slice()) }));
var _a;
const $$Astro$2 = createAstro();
const $$LazyImage = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$LazyImage;
  const { src, alt, width, height, className = "" } = Astro2.props;
  return renderTemplate(_a || (_a = __template(["", '<div class="relative h-auto w-full"> <img loading="lazy" decoding="async"', "", "", "", "", "", ` data-lazy> </div> <script type="module">
	const observer = new IntersectionObserver(
		(entries, observer) => {
			entries.forEach((entry) => {
				if (entry.isIntersecting) {
					const img = entry.target
					img.classList.remove('opacity-0')
					img.classList.add('opacity-100')
					observer.unobserve(img)
				}
			})
		},
		{
			threshold: 0.1,
		}
	)

	document.querySelectorAll('img[data-lazy]').forEach((img) => {
		observer.observe(img)
	})
<\/script>`])), maybeRenderHead(), addAttribute(src, "src"), addAttribute(src, "srcset"), addAttribute(alt, "alt"), addAttribute(width, "width"), addAttribute(height, "height"), addAttribute(className, "class"));
}, "C:/Dev/Astro/capelix-dev/src/components/LazyImage.astro", void 0);

const $$Astro$1 = createAstro();
const $$Loading = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$Loading;
  return renderTemplate`${maybeRenderHead()}<svg${spreadAttributes(Astro2.props)} width="38" height="38" viewBox="0 0 38 38"> <defs> <linearGradient x1="8.042%" y1="0%" x2="65.682%" y2="23.865%" id="a"> <stop stop-color="currentColor" stop-opacity="0" offset="0%"></stop> <stop stop-color="currentColor" stop-opacity=".631" offset="63.146%"></stop> <stop stop-color="currentColor" offset="100%"></stop> </linearGradient> </defs> <g fill="none" fill-rule="evenodd"> <g transform="translate(1 1)"> <path d="M36 18c0-9.94-8.06-18-18-18" id="Oval-2" stroke="url(#a)" stroke-width="2"> <animateTransform attributeName="transform" type="rotate" from="0 18 18" to="360 18 18" dur="0.9s" repeatCount="indefinite"></animateTransform> </path> <circle fill="currentColor" cx="36" cy="18" r="1"> <animateTransform attributeName="transform" type="rotate" from="0 18 18" to="360 18 18" dur="0.9s" repeatCount="indefinite"></animateTransform> </circle> </g> </g> </svg>`;
}, "C:/Dev/Astro/capelix-dev/src/icons/Loading.astro", void 0);

const getImages = () => {
  return getImagesWithSize("portraits");
};

const $$Astro = createAstro();
const $$Photography = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Photography;
  const locale = getActiveLocale(Astro2);
  const i18n = getI18N({ currentLocale: locale });
  const images = getImages();
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": `${i18n.PHOTOGRAPHY} - Capelix`, "description": i18n.PHOTOGRAPHY_PAGE_DESCRIPTION, "canonical": new URL(resolveLocalizedPath("/photography/"), "https://capelix.dev").toString() }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "SectionContainer", $$SectionContainer, {}, { "default": ($$result3) => renderTemplate` ${maybeRenderHead()}<div class="flex w-full max-w-5xl flex-col md:w-11/12 lg:w-8/12"> <div class="flex w-full max-w-4xl flex-col gap-2 sm:w-11/12 md:w-8/12"> ${renderComponent($$result3, "MainTitle", $$MainTitle, {}, { "default": ($$result4) => renderTemplate` ${renderComponent($$result4, "PhotographyIcon", $$Photography$1, { "class": "size-8" })} ${i18n.PHOTOGRAPHY}` })} </div> <p class="mb-6 text-pretty text-slate-400">${i18n.PHOTOGRAPHY_DESCRIPTION}</p> <!-- Masonry with Grid --> <div id="gallery" style="column-gap: 1rem; column-width: 230px;"> ${images.length > 0 && images.sort(() => Math.random() - 0.5).map((image, index) => renderTemplate`<a${addAttribute(`https://www.capelix.dev/${image.src}`, "href")}${addAttribute(image.width, "data-pswp-width")}${addAttribute(image.height, "data-pswp-height")} target="_blank"${addAttribute(`hoverZoomLink group relative mb-4 block cursor-zoom-in break-inside-avoid overflow-hidden rounded-lg transition-all duration-300 ease-in-out md:hover:shadow-lg md:hover:shadow-accent/20 md:hover:scale-[1.02]`, "class")}> ${renderComponent($$result3, "LazyImage", $$LazyImage, { "src": `https://www.capelix.dev/${image.src}`, "alt": `${i18n.PHOTOGRAPHY_IMAGE_ALT_PREFIX} ${index + 1}`, "width": image.width, "height": image.height, "className": "w-full group-active:scale-105 md:group-hover:scale-110 duration-[.4s] transition-all opacity-0 ease-in-out md:group-hover:brightness-110" })} <div class="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-0 transition-opacity duration-300 md:group-hover:opacity-100"></div> ${renderComponent($$result3, "Loading", $$Loading, { "class": "absolute inset-0 -z-20 m-auto size-6 text-slate-200" })} </a>`)} </div> </div> ` })} ` })} ${renderScript($$result, "C:/Dev/Astro/capelix-dev/src/pages/photography.astro?astro&type=script&index=0&lang.ts")}`;
}, "C:/Dev/Astro/capelix-dev/src/pages/photography.astro", void 0);

const $$file = "C:/Dev/Astro/capelix-dev/src/pages/photography.astro";
const $$url = "/photography";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: $$Photography,
	file: $$file,
	url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
