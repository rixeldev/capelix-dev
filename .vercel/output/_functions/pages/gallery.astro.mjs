/* empty css                                 */
import { c as createComponent, a as createAstro, d as renderComponent, r as renderTemplate, m as maybeRenderHead } from '../chunks/astro/server_DFE9ECo4.mjs';
import { jsx, jsxs, Fragment } from 'react/jsx-runtime';
import { useMemo, useState, useCallback, useEffect } from 'react';
import { createPortal } from 'react-dom';
import { n as normalizeLocale, a as getI18N, g as getActiveLocale, r as resolveLocalizedPath, $ as $$Layout } from '../chunks/Layout_BwanNcMO.mjs';
export { renderers } from '../renderers.mjs';

function GalleryAccess({ locale = "en" }) {
  const normalizedLocale = useMemo(() => normalizeLocale(locale), [locale]);
  const i18n = useMemo(() => getI18N({ currentLocale: normalizedLocale }), [normalizedLocale]);
  const [pin, setPin] = useState("");
  const [pinError, setPinError] = useState(null);
  const [isVerifying, setIsVerifying] = useState(false);
  const [gallery, setGallery] = useState(null);
  const [photos, setPhotos] = useState([]);
  const [selectedCodes, setSelectedCodes] = useState([]);
  const [isSavingSelection, setIsSavingSelection] = useState(false);
  const [selectionMessage, setSelectionMessage] = useState(null);
  const [previewIndex, setPreviewIndex] = useState(null);
  const [isClient, setIsClient] = useState(false);
  const galleryTitle = useMemo(() => {
    if (!gallery) return "";
    return gallery.title ?? i18n.GALLERY_DEFAULT_TITLE;
  }, [gallery, i18n]);
  const previewPhoto = useMemo(() => {
    if (previewIndex === null) return null;
    return photos[previewIndex] ?? null;
  }, [photos, previewIndex]);
  const handleVerifyPin = useCallback(
    async (event) => {
      event.preventDefault();
      setPinError(null);
      setSelectionMessage(null);
      if (!pin.trim()) {
        setPinError(i18n.GALLERY_PIN_REQUIRED_ERROR);
        return;
      }
      try {
        setIsVerifying(true);
        const response = await fetch("/api/gallery/access", {
          method: "POST",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify({ pin, locale: normalizedLocale })
        });
        if (!response.ok) {
          const payload2 = await response.json().catch(() => ({}));
          setPinError(payload2.message ?? i18n.GALLERY_INCORRECT_PIN_ERROR);
          return;
        }
        const payload = await response.json();
        setGallery({
          id: payload.gallery.id,
          title: payload.gallery.title,
          description: payload.gallery.description,
          eventDate: payload.gallery.eventDate
        });
        setPhotos(payload.photos);
        setSelectedCodes(payload.selectedCodes ?? []);
      } catch (error) {
        console.error("PIN verification failed:", error);
        setPinError(i18n.GALLERY_GENERIC_ERROR);
      } finally {
        setIsVerifying(false);
      }
    },
    [pin, i18n, normalizedLocale]
  );
  const toggleSelection = useCallback((imageCode) => {
    setSelectedCodes((prev) => {
      const next = new Set(prev);
      if (next.has(imageCode)) {
        next.delete(imageCode);
      } else {
        next.add(imageCode);
      }
      return Array.from(next);
    });
  }, []);
  const handleSaveSelection = useCallback(async () => {
    if (!gallery) return;
    setSelectionMessage(null);
    setIsSavingSelection(true);
    try {
      const response = await fetch("/api/gallery/selection", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          pin,
          galleryId: gallery.id,
          selectedCodes,
          locale: normalizedLocale
        })
      });
      if (!response.ok) {
        const payload = await response.json().catch(() => ({}));
        setSelectionMessage(payload.message ?? i18n.GALLERY_SAVE_ERROR);
        return;
      }
      setSelectionMessage(i18n.GALLERY_SAVE_SUCCESS);
    } catch (error) {
      console.error("Saving selection failed:", error);
      setSelectionMessage(i18n.GALLERY_SAVE_GENERIC_ERROR);
    } finally {
      setIsSavingSelection(false);
    }
  }, [gallery, i18n, normalizedLocale, pin, selectedCodes]);
  const resetGallery = useCallback(() => {
    setGallery(null);
    setPhotos([]);
    setSelectedCodes([]);
    setSelectionMessage(null);
  }, []);
  const openPreview = useCallback((index) => {
    setPreviewIndex(index);
  }, []);
  const closePreview = useCallback(() => {
    setPreviewIndex(null);
  }, []);
  const goToNext = useCallback(() => {
    setPreviewIndex((current) => {
      if (current === null) return null;
      if (photos.length === 0) return null;
      if (current >= photos.length - 1) return current;
      return current + 1;
    });
  }, [photos.length]);
  const goToPrevious = useCallback(() => {
    setPreviewIndex((current) => {
      if (current === null) return null;
      if (photos.length === 0) return null;
      if (current <= 0) return current;
      return current - 1;
    });
  }, [photos.length]);
  useEffect(() => {
    setIsClient(true);
  }, []);
  useEffect(() => {
    if (previewIndex === null) return;
    const handleKeydown = (event) => {
      if (event.key === "Escape") {
        closePreview();
      }
      if (event.key === "ArrowRight" && previewIndex < photos.length - 1) {
        goToNext();
      }
      if (event.key === "ArrowLeft" && previewIndex > 0) {
        goToPrevious();
      }
    };
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", handleKeydown);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKeydown);
    };
  }, [previewIndex, closePreview, goToNext, goToPrevious, photos.length]);
  useEffect(() => {
    if (photos.length === 0) {
      setPreviewIndex(null);
    }
  }, [photos.length]);
  const previewModal = isClient && previewPhoto ? createPortal(
    /* @__PURE__ */ jsx(
      "div",
      {
        className: "fixed inset-0 z-[10000] flex min-h-[100dvh] w-screen flex-col bg-slate-950/95 backdrop-blur-md",
        role: "dialog",
        "aria-modal": "true",
        "aria-label": `${i18n.GALLERY_PREVIEW_ARIA_PREFIX} ${previewPhoto.image_code}`,
        onClick: closePreview,
        children: /* @__PURE__ */ jsxs(
          "div",
          {
            className: "relative flex h-full w-full flex-col text-white",
            onClick: (event) => event.stopPropagation(),
            children: [
              /* @__PURE__ */ jsxs("header", { className: "flex items-center justify-between px-5 pb-2 pt-6 md:px-10", children: [
                /* @__PURE__ */ jsxs("div", { children: [
                  /* @__PURE__ */ jsx("p", { className: "text-xs uppercase tracking-[0.15em] text-white/60", children: i18n.GALLERY_PREVIEWING }),
                  /* @__PURE__ */ jsx("p", { className: "mt-1 font-semibold", children: previewPhoto.image_code })
                ] }),
                /* @__PURE__ */ jsxs(
                  "button",
                  {
                    type: "button",
                    onClick: closePreview,
                    className: "inline-flex h-12 w-12 items-center justify-center rounded-full bg-white/15 text-3xl text-white transition hover:bg-white/25 focus:outline-none focus:ring-2 focus:ring-white/80",
                    children: [
                      /* @__PURE__ */ jsx("span", { className: "sr-only", children: i18n.GALLERY_CLOSE_PREVIEW }),
                      "×"
                    ]
                  }
                )
              ] }),
              /* @__PURE__ */ jsxs("div", { className: "relative flex-1 overflow-hidden px-5 pb-6 md:px-10", children: [
                /* @__PURE__ */ jsx("div", { className: "relative flex h-full w-full items-center justify-center rounded-3xl bg-slate-900/80 shadow-inner shadow-slate-900/40", children: /* @__PURE__ */ jsx(
                  "img",
                  {
                    src: previewPhoto.public_url,
                    alt: previewPhoto.image_code,
                    className: "max-h-full max-w-full object-contain",
                    loading: "lazy"
                  }
                ) }),
                previewIndex !== null && previewIndex > 0 ? /* @__PURE__ */ jsxs(Fragment, { children: [
                  /* @__PURE__ */ jsx("div", { className: "pointer-events-none absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-slate-950/70 to-transparent" }),
                  /* @__PURE__ */ jsx("div", { className: "absolute inset-y-0 left-0 flex items-center justify-center px-4", children: /* @__PURE__ */ jsxs(
                    "button",
                    {
                      type: "button",
                      onClick: goToPrevious,
                      className: "inline-flex size-12 items-center justify-center rounded-full bg-white/10 text-white transition hover:bg-white/20 focus:outline-none focus:ring-2 focus:ring-white/70",
                      children: [
                        /* @__PURE__ */ jsx("span", { className: "sr-only", children: i18n.GALLERY_SHOW_PREVIOUS }),
                        "❮"
                      ]
                    }
                  ) })
                ] }) : null,
                previewIndex !== null && previewIndex < photos.length - 1 ? /* @__PURE__ */ jsxs(Fragment, { children: [
                  /* @__PURE__ */ jsx("div", { className: "pointer-events-none absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-slate-950/70 to-transparent" }),
                  /* @__PURE__ */ jsx("div", { className: "absolute inset-y-0 right-0 flex items-center justify-center px-4", children: /* @__PURE__ */ jsxs(
                    "button",
                    {
                      type: "button",
                      onClick: goToNext,
                      className: "inline-flex size-12 items-center justify-center rounded-full bg-white/10 text-white transition hover:bg-white/20 focus:outline-none focus:ring-2 focus:ring-white/70",
                      children: [
                        /* @__PURE__ */ jsx("span", { className: "sr-only", children: i18n.GALLERY_SHOW_NEXT }),
                        "❯"
                      ]
                    }
                  ) })
                ] }) : null
              ] }),
              /* @__PURE__ */ jsxs("div", { className: "flex flex-col gap-4 px-5 pb-6 md:flex-row md:items-center md:justify-between md:px-10", children: [
                /* @__PURE__ */ jsxs("div", { className: "space-y-2", children: [
                  /* @__PURE__ */ jsx("p", { className: "text-xs uppercase tracking-[0.2em] text-white/60", children: i18n.GALLERY_IMAGE_CODE }),
                  /* @__PURE__ */ jsx("p", { className: "rounded-lg bg-white/10 px-4 py-2 font-mono text-sm md:text-base", children: previewPhoto.image_code })
                ] }),
                /* @__PURE__ */ jsx("div", { className: "flex flex-wrap items-center gap-3", children: /* @__PURE__ */ jsx(
                  "button",
                  {
                    type: "button",
                    onClick: () => toggleSelection(previewPhoto.image_code),
                    className: `inline-flex min-w-[12rem] items-center justify-center rounded-full px-5 py-3 text-xs font-semibold uppercase tracking-wide transition focus:outline-none focus:ring-2 focus:ring-white/70 ${selectedCodes.includes(previewPhoto.image_code) ? "bg-main text-white hover:bg-main/90" : "bg-white text-slate-900 hover:bg-white/90"}`,
                    children: selectedCodes.includes(previewPhoto.image_code) ? i18n.GALLERY_REMOVE_SELECTION : i18n.GALLERY_SELECT_PHOTO
                  }
                ) })
              ] })
            ]
          }
        )
      }
    ),
    document.body
  ) : null;
  if (!gallery) {
    return /* @__PURE__ */ jsxs("section", { className: "mx-auto w-full max-w-xl rounded-2xl border border-slate-200 bg-white/70 p-8 shadow-lg backdrop-blur dark:border-slate-800 dark:bg-slate-900/80", children: [
      /* @__PURE__ */ jsx("h1", { className: "text-center text-2xl font-bold text-slate-900 dark:text-slate-50", children: i18n.GALLERY_ACCESS_TITLE }),
      /* @__PURE__ */ jsx("p", { className: "mt-2 text-center text-sm text-slate-600 dark:text-slate-300", children: i18n.GALLERY_ACCESS_SUBTITLE }),
      /* @__PURE__ */ jsxs("form", { className: "mt-8 space-y-4", onSubmit: handleVerifyPin, children: [
        /* @__PURE__ */ jsxs("div", { className: "flex flex-col gap-2", children: [
          /* @__PURE__ */ jsx(
            "label",
            {
              htmlFor: "pin",
              className: "text-sm font-semibold text-slate-700 dark:text-slate-200",
              children: i18n.GALLERY_PIN_LABEL
            }
          ),
          /* @__PURE__ */ jsx(
            "input",
            {
              id: "pin",
              name: "pin",
              type: "text",
              value: pin,
              autoComplete: "off",
              onChange: (event) => setPin(event.target.value),
              className: "w-full rounded-lg border border-slate-200 bg-white px-4 py-3 text-base font-medium text-slate-900 outline-none transition focus:border-main focus:ring-2 focus:ring-main/40 dark:border-slate-700 dark:bg-slate-800 dark:text-slate-50",
              placeholder: i18n.GALLERY_PIN_PLACEHOLDER
            }
          ),
          pinError ? /* @__PURE__ */ jsx("p", { className: "text-sm text-red-500", children: pinError }) : null
        ] }),
        /* @__PURE__ */ jsx(
          "button",
          {
            type: "submit",
            disabled: isVerifying,
            className: "mt-2 w-full rounded-lg bg-main px-4 py-3 text-center text-sm font-semibold uppercase tracking-wide text-white transition hover:bg-main/90 focus:outline-none focus:ring-2 focus:ring-main/40 disabled:cursor-not-allowed disabled:bg-slate-400",
            children: isVerifying ? i18n.GALLERY_VERIFYING : i18n.GALLERY_UNLOCK_BUTTON
          }
        )
      ] })
    ] });
  }
  const selectedSummary = i18n.GALLERY_SELECTED_COUNT.replace("{selected}", `${selectedCodes.length}`).replace(
    "{total}",
    `${photos.length}`
  );
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsxs("section", { className: "mx-auto flex w-full max-w-6xl flex-col gap-6 rounded-2xl border border-slate-200 bg-white/70 p-6 shadow-xl backdrop-blur md:p-10 dark:border-slate-800 dark:bg-slate-900/80", children: [
      /* @__PURE__ */ jsxs("header", { className: "flex flex-col items-start justify-between gap-4 md:flex-row md:items-center", children: [
        /* @__PURE__ */ jsxs("div", { children: [
          /* @__PURE__ */ jsx("h2", { className: "text-2xl font-bold text-slate-900 dark:text-slate-50", children: galleryTitle }),
          gallery.description ? /* @__PURE__ */ jsx("p", { className: "mt-2 max-w-2xl text-sm text-slate-600 dark:text-slate-300", children: gallery.description }) : null,
          gallery.eventDate ? /* @__PURE__ */ jsxs("p", { className: "mt-1 text-xs uppercase tracking-wide text-slate-500 dark:text-slate-400", children: [
            i18n.GALLERY_EVENT_DATE_LABEL,
            " ",
            new Date(gallery.eventDate).toLocaleDateString(normalizedLocale)
          ] }) : null
        ] }),
        /* @__PURE__ */ jsx(
          "button",
          {
            type: "button",
            onClick: resetGallery,
            className: "inline-flex items-center gap-2 rounded-full border border-slate-200 px-4 py-2 text-xs font-semibold uppercase tracking-wide text-slate-600 transition hover:border-main hover:text-main focus:outline-none focus:ring-2 focus:ring-main/40 dark:border-slate-700 dark:text-slate-200",
            children: i18n.GALLERY_USE_ANOTHER_PIN
          }
        )
      ] }),
      photos.length === 0 ? /* @__PURE__ */ jsx("div", { className: "rounded-xl border border-dashed border-slate-300 bg-white/60 p-10 text-center text-slate-500 dark:border-slate-700 dark:bg-slate-900/60 dark:text-slate-300", children: /* @__PURE__ */ jsx("p", { children: i18n.GALLERY_NO_PHOTOS }) }) : /* @__PURE__ */ jsx("div", { className: "grid gap-6 md:grid-cols-2 lg:grid-cols-3", children: photos.map((photo, index) => {
        const isSelected = selectedCodes.includes(photo.image_code);
        const hasDimensions = Boolean(photo.width && photo.height);
        const aspectStyle = hasDimensions ? { aspectRatio: `${photo.width}/${photo.height}` } : void 0;
        return /* @__PURE__ */ jsxs(
          "button",
          {
            type: "button",
            onClick: () => openPreview(index),
            className: `group relative overflow-hidden rounded-2xl border transition focus:outline-none focus-visible:ring-2 focus-visible:ring-main/60 ${isSelected ? "border-main bg-main/10 shadow-lg shadow-main/20" : "border-transparent bg-white/80 shadow-md hover:shadow-lg dark:bg-slate-800/80"}`,
            children: [
              /* @__PURE__ */ jsxs(
                "div",
                {
                  className: `relative w-full overflow-hidden bg-slate-100 dark:bg-slate-950 ${hasDimensions ? "" : "h-64"}`,
                  style: aspectStyle,
                  children: [
                    /* @__PURE__ */ jsx(
                      "img",
                      {
                        src: photo.public_url,
                        alt: photo.image_code,
                        loading: "lazy",
                        className: "h-full w-full object-cover transition duration-300 group-hover:scale-105",
                        style: hasDimensions ? { width: "100%", height: "100%" } : void 0
                      }
                    ),
                    /* @__PURE__ */ jsx(
                      "span",
                      {
                        className: `absolute right-3 top-3 inline-flex items-center rounded-full px-3 py-1 text-xs font-semibold uppercase tracking-wide ${isSelected ? "bg-main text-white shadow shadow-main/50" : "bg-white/80 text-slate-800 shadow"}`,
                        children: isSelected ? i18n.GALLERY_SELECTED_BADGE : i18n.GALLERY_TAP_TO_SELECT
                      }
                    )
                  ]
                }
              ),
              /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-between gap-2 px-4 py-3 text-sm font-medium text-slate-700 dark:text-slate-200", children: [
                /* @__PURE__ */ jsx("span", { className: "truncate", title: photo.image_code, children: photo.image_code }),
                /* @__PURE__ */ jsx(
                  "input",
                  {
                    type: "checkbox",
                    className: "h-4 w-4 rounded border-slate-300 text-main focus:ring-main",
                    onChange: () => toggleSelection(photo.image_code),
                    checked: isSelected,
                    onClick: (event) => event.stopPropagation()
                  }
                )
              ] })
            ]
          },
          photo.id
        );
      }) }),
      /* @__PURE__ */ jsxs("div", { className: "flex flex-col items-start gap-3 rounded-xl bg-slate-100/60 p-4 md:flex-row md:items-center md:justify-between dark:bg-slate-800/60", children: [
        /* @__PURE__ */ jsxs("div", { children: [
          /* @__PURE__ */ jsx("p", { className: "text-sm font-semibold text-slate-700 dark:text-slate-200", children: selectedSummary }),
          selectionMessage ? /* @__PURE__ */ jsx("p", { className: "text-xs text-main dark:text-main/80", children: selectionMessage }) : null
        ] }),
        /* @__PURE__ */ jsx(
          "button",
          {
            type: "button",
            disabled: isSavingSelection,
            onClick: handleSaveSelection,
            className: "inline-flex items-center gap-2 rounded-full bg-main px-6 py-3 text-xs font-semibold uppercase tracking-wide text-white transition hover:bg-main/90 focus:outline-none focus:ring-2 focus:ring-main/40 disabled:cursor-not-allowed disabled:bg-slate-400",
            children: isSavingSelection ? i18n.GALLERY_SAVING : i18n.GALLERY_SAVE_SELECTION
          }
        )
      ] })
    ] }),
    previewModal
  ] });
}

const $$Astro = createAstro();
const $$Index = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Index;
  const locale = getActiveLocale(Astro2);
  const i18n = getI18N({ currentLocale: locale });
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": i18n.GALLERY_PAGE_TITLE, "description": i18n.GALLERY_PAGE_DESCRIPTION, "canonical": new URL(resolveLocalizedPath("/gallery/"), "https://capelix.dev").toString() }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<section class="section relative flex min-h-[60vh] w-full items-center justify-center px-4 py-24 sm:px-6 lg:px-8"> <div class="w-full"> ${renderComponent($$result2, "GalleryAccess", GalleryAccess, { "client:load": true, "locale": locale, "client:component-hydration": "load", "client:component-path": "@/components/gallery/GalleryAccess", "client:component-export": "default" })} </div> </section> ` })}`;
}, "C:/Dev/Astro/capelix-dev/src/pages/gallery/index.astro", void 0);

const $$file = "C:/Dev/Astro/capelix-dev/src/pages/gallery/index.astro";
const $$url = "/gallery";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
