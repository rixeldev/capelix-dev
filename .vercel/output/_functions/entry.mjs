import { renderers } from './renderers.mjs';
import { a as actions } from './chunks/_noop-actions_CfKMStZn.mjs';
import { c as createExports } from './chunks/entrypoint_Ch8Shjzr.mjs';
import { manifest } from './manifest_CfhirESQ.mjs';

const serverIslandMap = new Map();;

const _page0 = () => import('./pages/_image.astro.mjs');
const _page1 = () => import('./pages/404.astro.mjs');
const _page2 = () => import('./pages/admin.astro.mjs');
const _page3 = () => import('./pages/api/admin/galleries/_id_/photos/_photoid_.astro.mjs');
const _page4 = () => import('./pages/api/admin/galleries/_id_/photos.astro.mjs');
const _page5 = () => import('./pages/api/admin/galleries.astro.mjs');
const _page6 = () => import('./pages/api/admin/login.astro.mjs');
const _page7 = () => import('./pages/api/admin/logout.astro.mjs');
const _page8 = () => import('./pages/api/admin/session.astro.mjs');
const _page9 = () => import('./pages/api/email/send.astro.mjs');
const _page10 = () => import('./pages/api/gallery/access.astro.mjs');
const _page11 = () => import('./pages/api/gallery/selection.astro.mjs');
const _page12 = () => import('./pages/articles/_id_.astro.mjs');
const _page13 = () => import('./pages/articles.astro.mjs');
const _page14 = () => import('./pages/gallery.astro.mjs');
const _page15 = () => import('./pages/photography.astro.mjs');
const _page16 = () => import('./pages/portfolio.astro.mjs');
const _page17 = () => import('./pages/privacy.astro.mjs');
const _page18 = () => import('./pages/projects.astro.mjs');
const _page19 = () => import('./pages/terms.astro.mjs');
const _page20 = () => import('./pages/index.astro.mjs');
const pageMap = new Map([
    ["node_modules/.pnpm/astro@5.4.2_@types+node@20._fa5e759edf985815f24eab670fa2d6be/node_modules/astro/dist/assets/endpoint/generic.js", _page0],
    ["src/pages/404.astro", _page1],
    ["src/pages/admin/index.astro", _page2],
    ["src/pages/api/admin/galleries/[id]/photos/[photoId].ts", _page3],
    ["src/pages/api/admin/galleries/[id]/photos.ts", _page4],
    ["src/pages/api/admin/galleries.ts", _page5],
    ["src/pages/api/admin/login.ts", _page6],
    ["src/pages/api/admin/logout.ts", _page7],
    ["src/pages/api/admin/session.ts", _page8],
    ["src/pages/api/email/send.ts", _page9],
    ["src/pages/api/gallery/access.ts", _page10],
    ["src/pages/api/gallery/selection.ts", _page11],
    ["src/pages/articles/[id].astro", _page12],
    ["src/pages/articles.astro", _page13],
    ["src/pages/gallery/index.astro", _page14],
    ["src/pages/photography.astro", _page15],
    ["src/pages/portfolio.astro", _page16],
    ["src/pages/privacy.astro", _page17],
    ["src/pages/projects.astro", _page18],
    ["src/pages/terms.astro", _page19],
    ["src/pages/index.astro", _page20]
]);

const _manifest = Object.assign(manifest, {
    pageMap,
    serverIslandMap,
    renderers,
    actions,
    middleware: () => import('./_noop-middleware.mjs')
});
const _args = {
    "middlewareSecret": "5f09198e-237a-453a-9954-69978d1141ea",
    "skewProtection": false
};
const _exports = createExports(_manifest, _args);
const __astrojsSsrVirtualEntry = _exports.default;

export { __astrojsSsrVirtualEntry as default, pageMap };
