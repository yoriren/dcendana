import { jsxs, jsx } from "react/jsx-runtime";
import { Link } from "@tanstack/react-router";
import { A as ANNOUNCEMENTS } from "./router-DRqumQsL.js";
import "react";
function Home() {
  return /* @__PURE__ */ jsxs("main", { children: [
    /* @__PURE__ */ jsxs("section", { className: "bg-red-800 text-white py-20 px-4 text-center", children: [
      /* @__PURE__ */ jsx("h1", { className: "text-4xl md:text-5xl font-bold mb-4", children: "Welcome to D'Cendana" }),
      /* @__PURE__ */ jsx("p", { className: "text-yellow-200 text-lg max-w-xl mx-auto mb-8", children: "Your hub for neighbourhood news, org chart, and community resources." }),
      /* @__PURE__ */ jsxs("div", { className: "flex flex-wrap gap-3 justify-center", children: [
        /* @__PURE__ */ jsx(Link, { to: "/announcements", className: "bg-white text-blue-800 font-semibold px-6 py-3 rounded-lg hover:bg-blue-100 transition", children: "View Announcements" }),
        /* @__PURE__ */ jsx(Link, { to: "/organization", className: "border border-white text-white font-semibold px-6 py-3 rounded-lg hover:bg-blue-700 transition", children: "Organization Chart" })
      ] })
    ] }),
    /* @__PURE__ */ jsx("section", { className: "max-w-5xl mx-auto px-4 py-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6", children: [{
      to: "/announcements",
      icon: "📢",
      title: "Announcements",
      desc: "Stay informed with the latest neighbourhood news and updates."
    }, {
      to: "/organization",
      icon: "📅",
      title: "Organization Chart",
      desc: "Meet the people behind the D'Cendana Chinese Community and explore our leadership structure."
    }, {
      to: "/resources",
      icon: "📋",
      title: "Resources",
      desc: "Handy links for city services, local businesses, and emergency contacts."
    }, {
      to: "/contact",
      icon: "✉️",
      title: "Get in Touch",
      desc: "Connect with the neighbourhood association or share feedback."
    }].map(({
      to,
      icon,
      title,
      desc
    }) => /* @__PURE__ */ jsxs(Link, { to, className: "bg-white rounded-2xl p-6 shadow-sm border border-gray-200 transition duration-300 transform hover:scale-105 hover:border-blue-500 hover:shadow-lg hover:shadow-blue-100 cursor-pointer group", children: [
      /* @__PURE__ */ jsx("div", { className: "text-3xl mb-3", children: icon }),
      /* @__PURE__ */ jsx("h2", { className: "font-bold text-lg mb-1 group-hover:text-blue-700 transition", children: title }),
      /* @__PURE__ */ jsx("p", { className: "text-gray-500 text-sm", children: desc })
    ] }, to)) }),
    /* @__PURE__ */ jsx("section", { className: "bg-white py-12 px-4", children: /* @__PURE__ */ jsxs("div", { className: "max-w-5xl mx-auto", children: [
      /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-between mb-6", children: [
        /* @__PURE__ */ jsx("h2", { className: "text-2xl font-bold", children: "Latest Announcements" }),
        /* @__PURE__ */ jsx(Link, { to: "/announcements", className: "text-blue-700 hover:underline text-sm font-medium", children: "View all →" })
      ] }),
      /* @__PURE__ */ jsx("div", { className: "grid gap-4", children: ANNOUNCEMENTS.slice(0, 3).map((a) => /* @__PURE__ */ jsx(AnnouncementCard, { ...a }, a.id)) })
    ] }) })
  ] });
}
function AnnouncementCard({
  badge,
  title,
  date,
  body
}) {
  return /* @__PURE__ */ jsxs("div", { className: "bg-white border border-gray-200 rounded-xl p-5 shadow-sm \r\n  transition duration-300 transform \r\n  hover:scale-105 hover:border-blue-500 hover:shadow-md cursor-pointer", children: [
    /* @__PURE__ */ jsx("span", { className: "text-xs font-semibold uppercase tracking-wide text-blue-700 bg-blue-100 px-2 py-1 rounded", children: badge }),
    /* @__PURE__ */ jsx("h3", { className: "font-semibold mt-2 mb-1", children: title }),
    /* @__PURE__ */ jsx("p", { className: "text-xs text-gray-400 mb-2", children: date }),
    /* @__PURE__ */ jsx("p", { className: "text-sm text-gray-600 whitespace-pre-line", children: body })
  ] });
}
export {
  Home as component
};
