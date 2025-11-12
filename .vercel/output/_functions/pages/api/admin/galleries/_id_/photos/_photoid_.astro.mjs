import { g as getAdminSession } from '../../../../../../chunks/adminSession_Di5YP4gL.mjs';
import { d as deleteGalleryPhoto } from '../../../../../../chunks/galleries_Bctd8Lx9.mjs';
export { renderers } from '../../../../../../renderers.mjs';

async function DELETE({ params, request }) {
  const session = getAdminSession(request);
  if (!session) {
    return new Response(JSON.stringify({ message: "Unauthorized" }), { status: 401 });
  }
  const galleryId = params.id;
  const photoId = params.photoId;
  if (!galleryId || !photoId) {
    return new Response(JSON.stringify({ message: "Gallery ID and Photo ID are required." }), { status: 400 });
  }
  try {
    await deleteGalleryPhoto({ galleryId, photoId });
    return new Response(null, { status: 204 });
  } catch (error) {
    console.error("Error deleting gallery photo:", error);
    return new Response(JSON.stringify({ message: "Failed to delete photo." }), { status: 500 });
  }
}

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	DELETE
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
