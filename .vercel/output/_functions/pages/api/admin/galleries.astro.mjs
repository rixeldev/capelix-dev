import { g as getAdminSession } from '../../../chunks/adminSession_Di5YP4gL.mjs';
import { g as getGalleriesOverview, c as createGallery } from '../../../chunks/galleries_Bctd8Lx9.mjs';
export { renderers } from '../../../renderers.mjs';

async function GET({ request }) {
  const session = getAdminSession(request);
  if (!session) {
    return new Response(JSON.stringify({ message: "Unauthorized" }), { status: 401 });
  }
  try {
    const data = await getGalleriesOverview();
    return new Response(JSON.stringify({ data }), {
      headers: {
        "Content-Type": "application/json"
      }
    });
  } catch (error) {
    console.error("Error fetching galleries:", error);
    return new Response(JSON.stringify({ message: "Failed to load galleries." }), { status: 500 });
  }
}
async function POST({ request }) {
  const session = getAdminSession(request);
  if (!session) {
    return new Response(JSON.stringify({ message: "Unauthorized" }), { status: 401 });
  }
  try {
    const body = await request.json();
    const title = typeof body.title === "string" ? body.title.trim() : "";
    const description = typeof body.description === "string" && body.description.trim().length > 0 ? body.description.trim() : void 0;
    const eventDate = typeof body.eventDate === "string" && body.eventDate.trim().length > 0 ? body.eventDate.trim() : void 0;
    if (!title) {
      return new Response(JSON.stringify({ message: "Title is required." }), {
        status: 400
      });
    }
    const { gallery, pin } = await createGallery({ title, description, eventDate });
    return new Response(JSON.stringify({ gallery, pin }), {
      status: 201,
      headers: {
        "Content-Type": "application/json"
      }
    });
  } catch (error) {
    console.error("Error creating gallery:", error);
    return new Response(JSON.stringify({ message: "Failed to create gallery." }), {
      status: 500
    });
  }
}

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	GET,
	POST
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
