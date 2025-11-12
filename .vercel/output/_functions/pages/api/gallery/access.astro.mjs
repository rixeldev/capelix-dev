import { f as findGalleryByPin, l as listGalleryPhotos, a as listGallerySelections } from '../../../chunks/galleries_Bctd8Lx9.mjs';
export { renderers } from '../../../renderers.mjs';

async function POST({ request }) {
  try {
    const body = await request.json();
    const pin = typeof body.pin === "string" ? body.pin.trim() : "";
    if (!pin) {
      return new Response(JSON.stringify({ message: "PIN is required." }), { status: 400 });
    }
    const gallery = await findGalleryByPin(pin);
    if (!gallery) {
      return new Response(JSON.stringify({ message: "Invalid PIN." }), { status: 401 });
    }
    const [photos, selections] = await Promise.all([
      listGalleryPhotos(gallery.id),
      listGallerySelections(gallery.id)
    ]);
    return new Response(
      JSON.stringify({
        gallery: {
          id: gallery.id,
          title: gallery.title,
          description: gallery.description,
          eventDate: gallery.event_date,
          createdAt: gallery.created_at
        },
        photos,
        selectedCodes: selections.map((selection) => selection.image_code)
      }),
      {
        headers: {
          "Content-Type": "application/json"
        }
      }
    );
  } catch (error) {
    console.error("Error verifying gallery PIN:", error);
    return new Response(JSON.stringify({ message: "Unexpected error. Please try again." }), {
      status: 500
    });
  }
}

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	POST
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
