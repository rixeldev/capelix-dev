import { a as clearAdminSessionCookie } from '../../../chunks/adminSession_Di5YP4gL.mjs';
export { renderers } from '../../../renderers.mjs';

async function POST() {
  const cookie = clearAdminSessionCookie();
  return new Response(null, {
    status: 204,
    headers: {
      "Set-Cookie": cookie
    }
  });
}

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	POST
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
