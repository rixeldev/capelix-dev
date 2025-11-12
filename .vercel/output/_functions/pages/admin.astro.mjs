/* empty css                                 */
import { c as createComponent, a as createAstro, d as renderComponent, h as renderHead, g as renderSlot, r as renderTemplate, m as maybeRenderHead } from '../chunks/astro/server_DFE9ECo4.mjs';
import { jsx, jsxs, Fragment } from 'react/jsx-runtime';
import { useState, useRef, useEffect } from 'react';
import { createPortal } from 'react-dom';
import { $ as $$SEO } from '../chunks/SEO_DmMFPqNl.mjs';
export { renderers } from '../renderers.mjs';

function AdminDashboard() {
  const [session, setSession] = useState(null);
  const [isCheckingSession, setIsCheckingSession] = useState(true);
  const [authError, setAuthError] = useState(null);
  const [loginForm, setLoginForm] = useState({ username: "", password: "" });
  const [isSubmittingLogin, setIsSubmittingLogin] = useState(false);
  const [galleries, setGalleries] = useState([]);
  const [isLoadingGalleries, setIsLoadingGalleries] = useState(false);
  const [galleryError, setGalleryError] = useState(null);
  const [createGalleryForm, setCreateGalleryForm] = useState({
    title: "",
    description: "",
    eventDate: ""
  });
  const [isCreatingGallery, setIsCreatingGallery] = useState(false);
  const [createGalleryMessage, setCreateGalleryMessage] = useState(null);
  const [createGalleryPin, setCreateGalleryPin] = useState(null);
  const [uploadForm, setUploadForm] = useState({
    galleryId: "",
    files: []
  });
  const [isUploadingPhoto, setIsUploadingPhoto] = useState(false);
  const [uploadMessage, setUploadMessage] = useState(null);
  const uploadInputRef = useRef(null);
  const [deletingPhotoId, setDeletingPhotoId] = useState(null);
  const [deleteDialog, setDeleteDialog] = useState(null);
  const [viewGallery, setViewGallery] = useState(null);
  const [isClient, setIsClient] = useState(false);
  const loadSession = async () => {
    try {
      setIsCheckingSession(true);
      const response = await fetch("/api/admin/session");
      if (!response.ok) {
        setSession(null);
        return;
      }
      const data = await response.json();
      setSession(data);
    } catch (error) {
      console.error("Failed to load session:", error);
      setSession(null);
    } finally {
      setIsCheckingSession(false);
    }
  };
  const loadGalleries = async () => {
    try {
      setIsLoadingGalleries(true);
      const response = await fetch("/api/admin/galleries");
      if (!response.ok) {
        const payload2 = await response.json().catch(() => ({}));
        setGalleryError(payload2.message ?? "Unable to load galleries.");
        return [];
      }
      const payload = await response.json();
      const data = payload.data ?? [];
      setGalleries(data);
      if (!uploadForm.galleryId && data.length > 0) {
        setUploadForm((prev) => ({
          ...prev,
          galleryId: data[0].id
        }));
      }
      return data;
    } catch (error) {
      console.error("Failed to load galleries:", error);
      setGalleryError("Unexpected error loading galleries.");
      return [];
    } finally {
      setIsLoadingGalleries(false);
    }
  };
  useEffect(() => {
    loadSession();
  }, []);
  useEffect(() => {
    if (session) {
      loadGalleries();
    }
  }, [session]);
  const handleLoginSubmit = async (event) => {
    event.preventDefault();
    setAuthError(null);
    if (!loginForm.username || !loginForm.password) {
      setAuthError("Username and password are required.");
      return;
    }
    try {
      setIsSubmittingLogin(true);
      const response = await fetch("/api/admin/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(loginForm)
      });
      if (!response.ok) {
        const payload = await response.json().catch(() => ({}));
        setAuthError(payload.message ?? "Login failed. Check your credentials.");
        return;
      }
      const data = await response.json();
      setSession(data);
      setLoginForm({ username: "", password: "" });
      setAuthError(null);
    } catch (error) {
      console.error("Login failed:", error);
      setAuthError("Unexpected error during login. Try again.");
    } finally {
      setIsSubmittingLogin(false);
    }
  };
  const handleLogout = async () => {
    try {
      await fetch("/api/admin/logout", { method: "POST" });
    } catch (error) {
      console.error("Logout failed:", error);
    } finally {
      setSession(null);
      setGalleries([]);
    }
  };
  const handleCreateGallery = async (event) => {
    event.preventDefault();
    setCreateGalleryMessage(null);
    setCreateGalleryPin(null);
    if (!createGalleryForm.title) {
      setCreateGalleryMessage("Title is required.");
      return;
    }
    try {
      setIsCreatingGallery(true);
      const response = await fetch("/api/admin/galleries", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(createGalleryForm)
      });
      if (!response.ok) {
        const payload2 = await response.json().catch(() => ({}));
        setCreateGalleryMessage(payload2.message ?? "Failed to create gallery.");
        return;
      }
      const payload = await response.json();
      setCreateGalleryMessage("Gallery created successfully.");
      setCreateGalleryPin(payload.pin);
      setCreateGalleryForm({
        title: "",
        description: "",
        eventDate: ""
      });
      await loadGalleries();
    } catch (error) {
      console.error("Create gallery failed:", error);
      setCreateGalleryMessage("Unexpected error while creating gallery.");
    } finally {
      setIsCreatingGallery(false);
    }
  };
  const handleUploadPhoto = async (event) => {
    event.preventDefault();
    setUploadMessage(null);
    if (!uploadForm.galleryId || uploadForm.files.length === 0) {
      setUploadMessage("Select a gallery and choose at least one file to upload.");
      return;
    }
    try {
      setIsUploadingPhoto(true);
      const formData = new FormData();
      uploadForm.files.forEach((file) => formData.append("files", file));
      const response = await fetch(`/api/admin/galleries/${uploadForm.galleryId}/photos`, {
        method: "POST",
        body: formData
      });
      if (!response.ok) {
        const payload2 = await response.json().catch(() => ({}));
        setUploadMessage(payload2.message ?? "Failed to upload photo.");
        return;
      }
      const payload = await response.json();
      const uploadedCount = payload.photos?.length ?? uploadForm.files.length;
      setUploadMessage(
        uploadedCount > 1 ? `Uploaded ${uploadedCount} photos successfully. Image codes match the filenames.` : "Photo uploaded successfully. Image code matches the filename."
      );
      setUploadForm((prev) => ({
        ...prev,
        files: []
      }));
      if (uploadInputRef.current) {
        uploadInputRef.current.value = "";
      }
      await loadGalleries();
    } catch (error) {
      console.error("Upload photo failed:", error);
      setUploadMessage("Unexpected error while uploading photo.");
    } finally {
      setIsUploadingPhoto(false);
    }
  };
  const handleDeletePhoto = async (galleryId, photoId) => {
    try {
      setDeletingPhotoId(photoId);
      const response = await fetch(`/api/admin/galleries/${galleryId}/photos/${photoId}`, {
        method: "DELETE"
      });
      if (!response.ok) {
        const payload = await response.json().catch(() => ({}));
        setGalleryError(payload.message ?? "Failed to delete photo.");
        return;
      }
      const updated = await loadGalleries();
      setViewGallery((current) => {
        if (!current) return null;
        const next = updated.find((gallery) => gallery.id === current.id);
        return next ?? null;
      });
      setDeleteDialog(null);
    } catch (error) {
      console.error("Delete photo failed:", error);
      setGalleryError("Unexpected error while deleting photo.");
    } finally {
      setDeletingPhotoId(null);
    }
  };
  useEffect(() => {
    setIsClient(true);
  }, []);
  const viewGalleryModal = isClient && viewGallery ? createPortal(
    /* @__PURE__ */ jsx("div", { className: "fixed inset-0 z-[1500] flex items-center justify-center bg-slate-950/70 p-6 backdrop-blur", children: /* @__PURE__ */ jsxs("div", { className: "flex h-full max-h-[90vh] w-full max-w-6xl flex-col overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-2xl dark:border-slate-800 dark:bg-slate-900", children: [
      /* @__PURE__ */ jsxs("header", { className: "flex flex-col gap-3 border-b border-slate-200 px-6 py-5 md:flex-row md:items-center md:justify-between md:px-8 dark:border-slate-800", children: [
        /* @__PURE__ */ jsxs("div", { children: [
          /* @__PURE__ */ jsx("p", { className: "text-xs uppercase tracking-[0.25em] text-slate-500 dark:text-slate-400", children: "Gallery" }),
          /* @__PURE__ */ jsx("h2", { className: "text-2xl font-semibold text-slate-900 dark:text-slate-50", children: viewGallery.title ?? "Untitled gallery" }),
          /* @__PURE__ */ jsxs("div", { className: "mt-2 flex flex-wrap items-center gap-4 text-xs text-slate-500 dark:text-slate-400", children: [
            /* @__PURE__ */ jsxs("span", { children: [
              "Created ",
              new Date(viewGallery.created_at).toLocaleDateString()
            ] }),
            viewGallery.event_date ? /* @__PURE__ */ jsxs("span", { children: [
              "Event ",
              new Date(viewGallery.event_date).toLocaleDateString()
            ] }) : null
          ] })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-3", children: [
          /* @__PURE__ */ jsxs("span", { className: "rounded-full bg-slate-100 px-4 py-2 text-xs font-semibold uppercase tracking-wide text-slate-600 dark:bg-slate-800 dark:text-slate-200", children: [
            viewGallery.photoCount,
            " photos"
          ] }),
          /* @__PURE__ */ jsxs(
            "button",
            {
              type: "button",
              onClick: () => setViewGallery(null),
              className: "inline-flex h-11 w-11 items-center justify-center rounded-full bg-slate-100 text-2xl font-semibold text-slate-600 transition hover:bg-slate-200 focus:outline-none focus:ring-2 focus:ring-main/40 dark:bg-slate-800 dark:text-slate-200 dark:hover:bg-slate-700",
              children: [
                /* @__PURE__ */ jsx("span", { className: "sr-only", children: "Close viewer" }),
                "×"
              ]
            }
          )
        ] })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "flex-1 overflow-y-auto px-6 pb-6 pt-4 md:px-8", children: [
        viewGallery.photos.length === 0 ? /* @__PURE__ */ jsxs("div", { className: "flex h-full flex-col items-center justify-center gap-3 rounded-2xl border border-dashed border-slate-300 bg-white/60 p-10 text-center text-slate-500 dark:border-slate-700 dark:bg-slate-900/50 dark:text-slate-300", children: [
          /* @__PURE__ */ jsx("p", { className: "text-sm font-medium", children: "No photos uploaded yet." }),
          /* @__PURE__ */ jsx("p", { className: "text-xs text-slate-400 dark:text-slate-500", children: "Upload new images using the form on the dashboard." })
        ] }) : /* @__PURE__ */ jsx("div", { className: "grid gap-5 sm:grid-cols-2 lg:grid-cols-3", children: viewGallery.photos.map((photo) => {
          const isSelected = viewGallery.selectedCodes.includes(photo.image_code);
          const hasDimensions = Boolean(photo.width && photo.height);
          const aspectStyle = hasDimensions ? { aspectRatio: `${photo.width}/${photo.height}` } : void 0;
          return /* @__PURE__ */ jsxs(
            "div",
            {
              className: "group overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-md transition hover:shadow-lg dark:border-slate-800 dark:bg-slate-900",
              children: [
                /* @__PURE__ */ jsxs(
                  "div",
                  {
                    className: `relative w-full overflow-hidden bg-slate-100 dark:bg-slate-950 ${hasDimensions ? "" : "h-52"}`,
                    style: aspectStyle,
                    children: [
                      /* @__PURE__ */ jsx(
                        "img",
                        {
                          src: photo.public_url,
                          alt: photo.image_code,
                          className: "h-full w-full object-cover transition duration-300 group-hover:scale-105",
                          style: hasDimensions ? { width: "100%", height: "100%" } : void 0
                        }
                      ),
                      isSelected ? /* @__PURE__ */ jsx("span", { className: "absolute left-4 top-4 rounded-full bg-main px-3 py-1 text-xs font-semibold uppercase tracking-wide text-white shadow shadow-main/40", children: "Selected" }) : null,
                      /* @__PURE__ */ jsx(
                        "button",
                        {
                          type: "button",
                          onClick: () => setDeleteDialog({
                            galleryId: viewGallery.id,
                            photoId: photo.id,
                            imageCode: photo.image_code
                          }),
                          disabled: deletingPhotoId === photo.id,
                          className: "absolute right-4 top-4 inline-flex items-center rounded-full bg-black/50 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-white opacity-0 transition disabled:opacity-60 group-hover:opacity-100",
                          children: deletingPhotoId === photo.id ? "Removing…" : "Delete"
                        }
                      )
                    ]
                  }
                ),
                /* @__PURE__ */ jsxs("div", { className: "flex flex-col gap-2 px-4 py-3 text-sm font-semibold text-slate-700 dark:text-slate-200", children: [
                  /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-between gap-2", children: [
                    /* @__PURE__ */ jsx("span", { className: "truncate", children: photo.image_code }),
                    isSelected ? /* @__PURE__ */ jsx("span", { className: "text-xs text-main dark:text-main/80", children: "Client pick" }) : null
                  ] }),
                  hasDimensions ? /* @__PURE__ */ jsxs("span", { className: "text-xs font-normal text-slate-500 dark:text-slate-400", children: [
                    photo.width,
                    " × ",
                    photo.height,
                    "px"
                  ] }) : null
                ] })
              ]
            },
            photo.id
          );
        }) }),
        /* @__PURE__ */ jsxs("div", { className: "mt-6 rounded-xl border border-slate-200 bg-slate-50/70 p-4 text-sm text-slate-600 dark:border-slate-800 dark:bg-slate-950/40 dark:text-slate-300", children: [
          /* @__PURE__ */ jsx("p", { className: "font-semibold text-slate-700 dark:text-slate-200", children: "Selected codes" }),
          viewGallery.selectedCodes.length === 0 ? /* @__PURE__ */ jsx("p", { className: "mt-1 text-xs text-slate-500 dark:text-slate-400", children: "No selections yet." }) : /* @__PURE__ */ jsx("div", { className: "mt-2 flex flex-wrap gap-2", children: viewGallery.selectedCodes.map((code) => /* @__PURE__ */ jsx(
            "span",
            {
              className: "inline-flex items-center rounded-full bg-main/10 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-main dark:bg-main/20 dark:text-main/90",
              children: code
            },
            code
          )) })
        ] })
      ] })
    ] }) }),
    document.body
  ) : null;
  if (isCheckingSession) {
    return /* @__PURE__ */ jsxs("section", { className: "mx-auto flex w-full max-w-md flex-col items-center justify-center gap-4 rounded-2xl bg-white/80 p-12 text-center shadow-xl dark:bg-slate-900/80", children: [
      /* @__PURE__ */ jsx("div", { className: "h-12 w-12 animate-spin rounded-full border-4 border-main border-t-transparent" }),
      /* @__PURE__ */ jsx("p", { className: "text-sm font-semibold text-slate-600 dark:text-slate-200", children: "Loading dashboard..." })
    ] });
  }
  if (!session) {
    return /* @__PURE__ */ jsxs("section", { className: "mx-auto w-full max-w-md rounded-2xl border border-slate-200 bg-white/80 p-10 shadow-xl backdrop-blur dark:border-slate-800 dark:bg-slate-900/80", children: [
      /* @__PURE__ */ jsx("h1", { className: "text-center text-2xl font-bold text-slate-900 dark:text-white", children: "Admin Dashboard" }),
      /* @__PURE__ */ jsx("p", { className: "mt-2 text-center text-sm text-slate-600 dark:text-slate-300", children: "Sign in with your administrator credentials." }),
      /* @__PURE__ */ jsxs("form", { className: "mt-8 space-y-5", onSubmit: handleLoginSubmit, children: [
        /* @__PURE__ */ jsxs("div", { className: "space-y-2", children: [
          /* @__PURE__ */ jsx(
            "label",
            {
              className: "text-sm font-semibold text-slate-700 dark:text-slate-200",
              htmlFor: "username",
              children: "Username"
            }
          ),
          /* @__PURE__ */ jsx(
            "input",
            {
              id: "username",
              name: "username",
              type: "text",
              value: loginForm.username,
              onChange: (event) => setLoginForm((prev) => ({ ...prev, username: event.target.value })),
              className: "w-full rounded-lg border border-slate-200 bg-white px-4 py-3 text-base font-medium text-slate-900 outline-none transition focus:border-main focus:ring-2 focus:ring-main/40 dark:border-slate-700 dark:bg-slate-800 dark:text-slate-50",
              autoComplete: "username"
            }
          )
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "space-y-2", children: [
          /* @__PURE__ */ jsx(
            "label",
            {
              className: "text-sm font-semibold text-slate-700 dark:text-slate-200",
              htmlFor: "password",
              children: "Password"
            }
          ),
          /* @__PURE__ */ jsx(
            "input",
            {
              id: "password",
              name: "password",
              type: "password",
              value: loginForm.password,
              onChange: (event) => setLoginForm((prev) => ({ ...prev, password: event.target.value })),
              className: "w-full rounded-lg border border-slate-200 bg-white px-4 py-3 text-base font-medium text-slate-900 outline-none transition focus:border-main focus:ring-2 focus:ring-main/40 dark:border-slate-700 dark:bg-slate-800 dark:text-slate-50",
              autoComplete: "current-password"
            }
          )
        ] }),
        authError ? /* @__PURE__ */ jsx("p", { className: "text-sm text-red-500", children: authError }) : null,
        /* @__PURE__ */ jsx(
          "button",
          {
            type: "submit",
            disabled: isSubmittingLogin,
            className: "w-full rounded-lg bg-main px-4 py-3 text-center text-sm font-semibold uppercase tracking-wide text-white transition hover:bg-main/90 focus:outline-none focus:ring-2 focus:ring-main/40 disabled:cursor-not-allowed disabled:bg-slate-400",
            children: isSubmittingLogin ? "Signing in..." : "Sign in"
          }
        )
      ] })
    ] });
  }
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsxs("section", { className: "mx-auto flex w-full max-w-7xl flex-col gap-8 rounded-3xl border border-slate-200 bg-white/90 p-8 shadow-2xl backdrop-blur md:p-14 dark:border-slate-800 dark:bg-slate-900/80", children: [
      /* @__PURE__ */ jsxs("header", { className: "flex flex-col gap-4 md:flex-row md:items-center md:justify-between", children: [
        /* @__PURE__ */ jsxs("div", { children: [
          /* @__PURE__ */ jsx("p", { className: "text-xs uppercase tracking-wide text-slate-500 dark:text-slate-400", children: "Welcome back," }),
          /* @__PURE__ */ jsx("h1", { className: "text-3xl font-bold text-slate-900 dark:text-white", children: "Admin Dashboard" })
        ] }),
        /* @__PURE__ */ jsx(
          "button",
          {
            type: "button",
            onClick: handleLogout,
            className: "inline-flex items-center gap-2 rounded-full border border-slate-200 px-4 py-2 text-xs font-semibold uppercase tracking-wide text-slate-600 transition hover:border-main hover:text-main focus:outline-none focus:ring-2 focus:ring-main/40 dark:border-slate-700 dark:text-slate-200",
            children: "Log out"
          }
        )
      ] }),
      /* @__PURE__ */ jsxs("section", { className: "grid gap-6 lg:grid-cols-2", children: [
        /* @__PURE__ */ jsxs("div", { className: "rounded-2xl border border-slate-200 bg-white/80 p-6 shadow-md dark:border-slate-800 dark:bg-slate-900/80", children: [
          /* @__PURE__ */ jsx("h2", { className: "text-lg font-semibold text-slate-900 dark:text-slate-100", children: "Create a new gallery" }),
          /* @__PURE__ */ jsx("p", { className: "mt-1 text-sm text-slate-600 dark:text-slate-300", children: "Define a gallery and we'll generate a unique PIN you can share with your client." }),
          /* @__PURE__ */ jsxs("form", { className: "mt-6 space-y-4", onSubmit: handleCreateGallery, children: [
            /* @__PURE__ */ jsxs("div", { children: [
              /* @__PURE__ */ jsx("label", { className: "text-sm font-semibold text-slate-700 dark:text-slate-200", children: "Title" }),
              /* @__PURE__ */ jsx(
                "input",
                {
                  type: "text",
                  value: createGalleryForm.title,
                  onChange: (event) => setCreateGalleryForm((prev) => ({ ...prev, title: event.target.value })),
                  className: "mt-1 w-full rounded-lg border border-slate-200 bg-white px-4 py-3 text-sm font-medium text-slate-900 outline-none transition focus:border-main focus:ring-2 focus:ring-main/40 dark:border-slate-700 dark:bg-slate-800 dark:text-slate-50",
                  placeholder: "Birthday session – Maria"
                }
              )
            ] }),
            /* @__PURE__ */ jsxs("div", { children: [
              /* @__PURE__ */ jsx("label", { className: "text-sm font-semibold text-slate-700 dark:text-slate-200", children: "Description" }),
              /* @__PURE__ */ jsx(
                "textarea",
                {
                  value: createGalleryForm.description,
                  onChange: (event) => setCreateGalleryForm((prev) => ({ ...prev, description: event.target.value })),
                  className: "mt-1 w-full rounded-lg border border-slate-200 bg-white px-4 py-3 text-sm font-medium text-slate-900 outline-none transition focus:border-main focus:ring-2 focus:ring-main/40 dark:border-slate-700 dark:bg-slate-800 dark:text-slate-50",
                  rows: 3,
                  placeholder: "Short note for the gallery (optional)"
                }
              )
            ] }),
            /* @__PURE__ */ jsxs("div", { children: [
              /* @__PURE__ */ jsx("label", { className: "text-sm font-semibold text-slate-700 dark:text-slate-200", children: "Event date" }),
              /* @__PURE__ */ jsx(
                "input",
                {
                  type: "date",
                  value: createGalleryForm.eventDate,
                  onChange: (event) => setCreateGalleryForm((prev) => ({ ...prev, eventDate: event.target.value })),
                  className: "mt-1 w-full rounded-lg border border-slate-200 bg-white px-4 py-3 text-sm font-medium text-slate-900 outline-none transition focus:border-main focus:ring-2 focus:ring-main/40 dark:border-slate-700 dark:bg-slate-800 dark:text-slate-50"
                }
              )
            ] }),
            createGalleryMessage ? /* @__PURE__ */ jsx("p", { className: "text-sm text-main dark:text-main/80", children: createGalleryMessage }) : null,
            createGalleryPin ? /* @__PURE__ */ jsxs("div", { className: "rounded-xl border border-dashed border-main/40 bg-main/5 p-4 text-sm font-semibold text-main dark:border-main/60 dark:bg-main/20 dark:text-main/90", children: [
              "Generated PIN: ",
              /* @__PURE__ */ jsx("span", { className: "font-mono text-base", children: createGalleryPin })
            ] }) : null,
            /* @__PURE__ */ jsx(
              "button",
              {
                type: "submit",
                disabled: isCreatingGallery,
                className: "w-full rounded-lg bg-main px-4 py-3 text-center text-xs font-semibold uppercase tracking-wide text-white transition hover:bg-main/90 focus:outline-none focus:ring-2 focus:ring-main/40 disabled:cursor-not-allowed disabled:bg-slate-400",
                children: isCreatingGallery ? "Creating..." : "Create gallery"
              }
            )
          ] })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "rounded-2xl border border-slate-200 bg-white/80 p-6 shadow-md dark:border-slate-800 dark:bg-slate-900/80", children: [
          /* @__PURE__ */ jsx("h2", { className: "text-lg font-semibold text-slate-900 dark:text-slate-100", children: "Upload photos" }),
          /* @__PURE__ */ jsx("p", { className: "mt-1 text-sm text-slate-600 dark:text-slate-300", children: "Upload one or many photos to a gallery. Each photo uses its filename as the image code." }),
          /* @__PURE__ */ jsxs("form", { className: "mt-6 space-y-4", onSubmit: handleUploadPhoto, children: [
            /* @__PURE__ */ jsxs("div", { children: [
              /* @__PURE__ */ jsx("label", { className: "text-sm font-semibold text-slate-700 dark:text-slate-200", children: "Select gallery" }),
              /* @__PURE__ */ jsxs(
                "select",
                {
                  className: "mt-1 w-full rounded-lg border border-slate-200 bg-white px-4 py-3 text-sm font-medium text-slate-900 outline-none transition focus:border-main focus:ring-2 focus:ring-main/40 dark:border-slate-700 dark:bg-slate-800 dark:text-slate-50",
                  value: uploadForm.galleryId,
                  onChange: (event) => setUploadForm((prev) => ({ ...prev, galleryId: event.target.value })),
                  children: [
                    /* @__PURE__ */ jsx("option", { value: "", children: "Select a gallery" }),
                    galleries.map((gallery) => /* @__PURE__ */ jsx("option", { value: gallery.id, children: gallery.title ?? "Untitled gallery" }, gallery.id))
                  ]
                }
              )
            ] }),
            /* @__PURE__ */ jsxs("div", { children: [
              /* @__PURE__ */ jsx("label", { className: "text-sm font-semibold text-slate-700 dark:text-slate-200", children: "Select files" }),
              /* @__PURE__ */ jsx(
                "input",
                {
                  ref: uploadInputRef,
                  type: "file",
                  multiple: true,
                  accept: "image/*",
                  onChange: (event) => {
                    const files = event.target.files ? Array.from(event.target.files) : [];
                    setUploadForm((prev) => ({
                      ...prev,
                      files
                    }));
                  },
                  className: "mt-1 w-full rounded-lg border border-dashed border-slate-300 bg-white px-4 py-3 text-sm text-slate-600 outline-none transition focus:border-main focus:ring-2 focus:ring-main/40 dark:border-slate-700 dark:bg-slate-800 dark:text-slate-200"
                }
              ),
              /* @__PURE__ */ jsx("p", { className: "mt-1 text-xs text-slate-500 dark:text-slate-400", children: "Selected filenames will be stored as the image codes automatically." })
            ] }),
            uploadMessage ? /* @__PURE__ */ jsx("p", { className: "text-sm text-main dark:text-main/80", children: uploadMessage }) : null,
            /* @__PURE__ */ jsx(
              "button",
              {
                type: "submit",
                disabled: isUploadingPhoto,
                className: "w-full rounded-lg bg-main px-4 py-3 text-center text-xs font-semibold uppercase tracking-wide text-white transition hover:bg-main/90 focus:outline-none focus:ring-2 focus:ring-main/40 disabled:cursor-not-allowed disabled:bg-slate-400",
                children: isUploadingPhoto ? "Uploading..." : "Upload photos"
              }
            )
          ] })
        ] })
      ] }),
      /* @__PURE__ */ jsxs("section", { className: "rounded-2xl border border-slate-200 bg-white/80 p-6 shadow-md dark:border-slate-800 dark:bg-slate-900/80", children: [
        /* @__PURE__ */ jsxs("div", { className: "flex flex-col gap-3 md:flex-row md:items-center md:justify-between", children: [
          /* @__PURE__ */ jsxs("div", { children: [
            /* @__PURE__ */ jsx("h2", { className: "text-lg font-semibold text-slate-900 dark:text-slate-100", children: "Galleries" }),
            /* @__PURE__ */ jsx("p", { className: "text-sm text-slate-600 dark:text-slate-300", children: "Review galleries, uploaded photos, and client selections." })
          ] }),
          isLoadingGalleries ? /* @__PURE__ */ jsx("span", { className: "text-xs uppercase tracking-wide text-slate-500 dark:text-slate-400", children: "Refreshing..." }) : /* @__PURE__ */ jsx(
            "button",
            {
              type: "button",
              onClick: loadGalleries,
              className: "inline-flex items-center gap-2 rounded-full border border-slate-200 px-3 py-2 text-xs font-semibold uppercase tracking-wide text-slate-600 transition hover:border-main hover:text-main focus:outline-none focus:ring-2 focus:ring-main/40 dark:border-slate-700 dark:text-slate-200",
              children: "Refresh"
            }
          )
        ] }),
        galleryError ? /* @__PURE__ */ jsx("p", { className: "mt-4 text-sm text-red-500", children: galleryError }) : null,
        /* @__PURE__ */ jsx("div", { className: "mt-6 space-y-6", children: galleries.length === 0 ? /* @__PURE__ */ jsx("div", { className: "rounded-xl border border-dashed border-slate-300 bg-white/60 p-10 text-center text-slate-500 dark:border-slate-700 dark:bg-slate-900/60 dark:text-slate-300", children: "No galleries yet. Create one to get started." }) : galleries.map((gallery) => /* @__PURE__ */ jsxs(
          "article",
          {
            className: "rounded-2xl border border-slate-200 bg-white/90 p-6 shadow dark:border-slate-800 dark:bg-slate-900/80",
            children: [
              /* @__PURE__ */ jsxs("header", { className: "flex flex-col gap-1 md:flex-row md:items-center md:justify-between", children: [
                /* @__PURE__ */ jsxs("div", { children: [
                  /* @__PURE__ */ jsx("h3", { className: "text-xl font-semibold text-slate-900 dark:text-white", children: gallery.title ?? "Untitled gallery" }),
                  /* @__PURE__ */ jsxs("p", { className: "text-xs uppercase tracking-wide text-slate-500 dark:text-slate-400", children: [
                    "Created on ",
                    new Date(gallery.created_at).toLocaleDateString()
                  ] }),
                  gallery.event_date ? /* @__PURE__ */ jsxs("p", { className: "text-xs text-slate-500 dark:text-slate-400", children: [
                    "Event date: ",
                    new Date(gallery.event_date).toLocaleDateString()
                  ] }) : null
                ] }),
                /* @__PURE__ */ jsxs("div", { className: "rounded-full bg-slate-100 px-4 py-2 text-xs font-semibold uppercase tracking-wide text-slate-600 dark:bg-slate-800 dark:text-slate-200", children: [
                  gallery.photoCount,
                  " photos"
                ] })
              ] }),
              gallery.description ? /* @__PURE__ */ jsx("p", { className: "mt-3 text-sm text-slate-600 dark:text-slate-300", children: gallery.description }) : null,
              /* @__PURE__ */ jsxs("div", { className: "mt-5 flex flex-col gap-3 rounded-2xl border border-slate-200 bg-slate-50/70 p-4 dark:border-slate-800 dark:bg-slate-900/60", children: [
                /* @__PURE__ */ jsxs("div", { className: "flex flex-wrap items-center justify-between gap-3", children: [
                  /* @__PURE__ */ jsxs("p", { className: "text-sm text-slate-600 dark:text-slate-300", children: [
                    "Total photos:",
                    " ",
                    /* @__PURE__ */ jsx("span", { className: "font-semibold text-slate-900 dark:text-slate-100", children: gallery.photoCount })
                  ] }),
                  /* @__PURE__ */ jsx(
                    "button",
                    {
                      type: "button",
                      onClick: () => setViewGallery(gallery),
                      className: "inline-flex items-center gap-2 rounded-full bg-main px-5 py-2 text-xs font-semibold uppercase tracking-wide text-white transition hover:bg-main/90 focus:outline-none focus:ring-2 focus:ring-main/40",
                      children: "View photos"
                    }
                  )
                ] }),
                /* @__PURE__ */ jsx("p", { className: "text-xs text-slate-500 dark:text-slate-400", children: "Open the photo viewer to inspect images in detail and remove any shot you no longer need." })
              ] }),
              /* @__PURE__ */ jsxs("div", { className: "mt-5 rounded-xl border border-slate-200 bg-slate-50/70 p-4 text-sm text-slate-600 dark:border-slate-800 dark:bg-slate-950/40 dark:text-slate-300", children: [
                /* @__PURE__ */ jsx("p", { className: "font-semibold text-slate-700 dark:text-slate-200", children: "Selected codes" }),
                gallery.selectedCodes.length === 0 ? /* @__PURE__ */ jsx("p", { className: "mt-1 text-xs text-slate-500 dark:text-slate-400", children: "No selections yet." }) : /* @__PURE__ */ jsx("div", { className: "mt-2 flex flex-wrap gap-2", children: gallery.selectedCodes.map((code) => /* @__PURE__ */ jsx(
                  "span",
                  {
                    className: "inline-flex items-center rounded-full bg-main/10 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-main dark:bg-main/20 dark:text-main/90",
                    children: code
                  },
                  code
                )) })
              ] })
            ]
          },
          gallery.id
        )) })
      ] })
    ] }),
    viewGalleryModal,
    deleteDialog ? /* @__PURE__ */ jsx("div", { className: "fixed inset-0 z-[2000] flex items-center justify-center bg-slate-950/70 p-6 backdrop-blur", children: /* @__PURE__ */ jsxs("div", { className: "w-full max-w-md rounded-2xl border border-slate-200 bg-white p-8 text-slate-900 shadow-2xl dark:border-slate-800 dark:bg-slate-900 dark:text-slate-100", children: [
      /* @__PURE__ */ jsx("h2", { className: "text-xl font-semibold", children: "Delete photo" }),
      /* @__PURE__ */ jsxs("p", { className: "mt-2 text-sm text-slate-600 dark:text-slate-300", children: [
        "Are you sure you want to delete the photo with code",
        " ",
        /* @__PURE__ */ jsx("span", { className: "font-mono font-semibold text-slate-900 dark:text-slate-100", children: deleteDialog.imageCode }),
        "? This action cannot be undone."
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "mt-6 flex flex-col-reverse gap-3 sm:flex-row sm:justify-end", children: [
        /* @__PURE__ */ jsx(
          "button",
          {
            type: "button",
            disabled: deletingPhotoId === deleteDialog.photoId,
            onClick: () => setDeleteDialog(null),
            className: "inline-flex items-center justify-center rounded-full border border-slate-300 px-5 py-2 text-sm font-semibold uppercase tracking-wide text-slate-600 transition hover:border-slate-400 hover:text-slate-800 focus:outline-none focus:ring-2 focus:ring-main/40 disabled:cursor-not-allowed disabled:opacity-60 dark:border-slate-700 dark:text-slate-200 dark:hover:border-slate-500 dark:hover:text-slate-100",
            children: "Cancel"
          }
        ),
        /* @__PURE__ */ jsx(
          "button",
          {
            type: "button",
            onClick: () => void handleDeletePhoto(deleteDialog.galleryId, deleteDialog.photoId),
            disabled: deletingPhotoId === deleteDialog.photoId,
            className: "inline-flex items-center justify-center rounded-full bg-red-600 px-5 py-2 text-sm font-semibold uppercase tracking-wide text-white transition hover:bg-red-500 focus:outline-none focus:ring-2 focus:ring-red-400 disabled:cursor-not-allowed disabled:bg-red-400",
            children: deletingPhotoId === deleteDialog.photoId ? "Deleting…" : "Delete photo"
          }
        )
      ] })
    ] }) }) : null
  ] });
}

const $$Astro = createAstro();
const $$AdminLayout = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$AdminLayout;
  const { title, description } = Astro2.props;
  return renderTemplate`<html lang="en"> <head>${renderComponent($$result, "SEO", $$SEO, { "title": title, "description": description })}${renderHead()}</head> <body class="min-h-screen bg-slate-100 text-slate-900 dark:bg-slate-950 dark:text-slate-50"> <main class="min-h-screen w-full bg-gradient-to-br from-slate-100 via-slate-200 to-slate-100 py-16 dark:from-slate-950 dark:via-slate-900 dark:to-slate-950"> ${renderSlot($$result, $$slots["default"])} </main> </body></html>`;
}, "C:/Dev/Astro/capelix-dev/src/layouts/AdminLayout.astro", void 0);

const $$Index = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "AdminLayout", $$AdminLayout, { "title": "Admin Dashboard", "description": "Manage client galleries, upload photos, and review selections." }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<section class="px-4 sm:px-6 lg:px-8"> ${renderComponent($$result2, "AdminDashboard", AdminDashboard, { "client:load": true, "client:component-hydration": "load", "client:component-path": "@/components/admin/AdminDashboard", "client:component-export": "default" })} </section> ` })}`;
}, "C:/Dev/Astro/capelix-dev/src/pages/admin/index.astro", void 0);

const $$file = "C:/Dev/Astro/capelix-dev/src/pages/admin/index.astro";
const $$url = "/admin";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: $$Index,
	file: $$file,
	url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
