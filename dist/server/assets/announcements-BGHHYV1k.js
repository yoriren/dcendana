import { jsxs, jsx } from "react/jsx-runtime";
import { A as ANNOUNCEMENTS } from "./router-DRqumQsL.js";
import "@tanstack/react-router";
import "react";
function Announcements() {
  return /* @__PURE__ */ jsxs("main", { className: "max-w-5xl mx-auto px-4 py-12", children: [
    /* @__PURE__ */ jsx("h1", { className: "text-3xl font-bold mb-2", children: "Community Announcements" }),
    /* @__PURE__ */ jsx("p", { className: "text-gray-500 mb-8", children: "Stay up to date with the latest news from D'Cendana." }),
    /* @__PURE__ */ jsx("div", { className: "grid gap-5 grid-cols-1", children: ANNOUNCEMENTS.map((a) => /* @__PURE__ */ jsxs("div", { className: "bg-white rounded-xl border border-gray-200 p-6 shadow-sm transition duration-300 transform hover:scale-105 hover:border-blue-500 hover:shadow-lg hover:shadow-blue-100 cursor-pointer", children: [
      /* @__PURE__ */ jsx("span", { className: "text-xs font-semibold uppercase tracking-wide text-blue-700 bg-blue-100 px-2 py-1 rounded", children: a.badge }),
      /* @__PURE__ */ jsx("h2", { className: "font-bold text-lg mt-3 mb-1", children: a.title }),
      /* @__PURE__ */ jsx("p", { className: "text-xs text-gray-400 mb-3", children: a.date }),
      /* @__PURE__ */ jsx("p", { className: "text-gray-600 whitespace-pre-line", children: a.body })
    ] }, a.id)) })
  ] });
}
export {
  Announcements as component
};
