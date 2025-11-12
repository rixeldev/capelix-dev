import { f as findGalleryByPin, l as listGalleryPhotos, s as saveGallerySelections } from '../../../chunks/galleries_Bctd8Lx9.mjs';
export { renderers } from '../../../renderers.mjs';

async function POST({ request }) {
  try {
    const body = await request.json();
    const pin = typeof body.pin === "string" ? body.pin.trim() : "";
    const galleryId = typeof body.galleryId === "string" ? body.galleryId : "";
    const selectedCodes = Array.isArray(body.selectedCodes) ? body.selectedCodes.map((code) => String(code)) : [];
    if (!pin || !galleryId) {
      return new Response(JSON.stringify({ message: "PIN and galleryId are required." }), {
        status: 400
      });
    }
    const gallery = await findGalleryByPin(pin);
    if (!gallery || gallery.id !== galleryId) {
      return new Response(JSON.stringify({ message: "Invalid PIN or gallery ID." }), {
        status: 401
      });
    }
    const photos = await listGalleryPhotos(galleryId);
    const validCodes = selectedCodes.filter(
      (code) => photos.some((photo) => photo.image_code === code)
    );
    await saveGallerySelections(galleryId, validCodes);
    return new Response(JSON.stringify({ success: true, selectedCodes: validCodes }), {
      headers: {
        "Content-Type": "application/json"
      }
    });
  } catch (error) {
    console.error("Error saving gallery selections:", error);
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
