import { g as getAdminSession } from '../../../chunks/adminSession_Di5YP4gL.mjs';
export { renderers } from '../../../renderers.mjs';

async function GET({ request }) {
  const session = getAdminSession(request);
  if (!session) {
    return new Response(JSON.stringify({ message: "Unauthorized" }), { status: 401 });
  }
  return new Response(JSON.stringify(session), {
    headers: {
      "Content-Type": "application/json"
    }
  });
}

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	GET
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
