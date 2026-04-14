import { jsxs, jsx } from "react/jsx-runtime";
const RESOURCES = [{
  category: "Local Council (Majlis Perbandaran Kajang)",
  icon: "🏛️",
  items: [{
    label: "Aduan Awam (Public Complaints)",
    href: "#",
    detail: "MPKj Hotline: 03-8737 7899"
  }, {
    label: "Sampah & Pembersihan",
    href: "#",
    detail: "SWCorp / KDEB — Jadual kutipan kawasan Semenyih"
  }, {
    label: "Cukai Pintu & Tanah",
    href: "#",
    detail: "Semakan & bayaran melalui MPKj portal"
  }, {
    label: "Permit Renovation",
    href: "#",
    detail: "Permohonan melalui MPKj (Majlis Perbandaran Kajang)"
  }]
}, {
  category: "Emergency Contacts",
  icon: "🚨",
  items: [{
    label: "Kecemasan (Police / Ambulance / Bomba)",
    href: "#",
    detail: "999"
  }, {
    label: "Balai Polis Semenyih",
    href: "#",
    detail: "03-8723 7222"
  }, {
    label: "Bomba Semenyih",
    href: "#",
    detail: "03-8723 4444"
  }, {
    label: "Talian Kasih",
    href: "#",
    detail: "15999 (24 jam bantuan sosial)"
  }]
}, {
  category: "Community & Nearby Places",
  icon: "🏡",
  items: [{
    label: "D’Cendana Clubhouse",
    href: "#",
    detail: "Kemudahan komuniti & aktiviti penduduk"
  }, {
    label: "Taman Tasik Semenyih",
    href: "#",
    detail: "Tempat riadah & jogging"
  }, {
    label: "Surau / Masjid Nearby",
    href: "#",
    detail: "Masjid Raja Muda Musa Semenyih"
  }, {
    label: "EcoHill Walk Mall",
    href: "#",
    detail: "Shopping & makan-makan area"
  }]
}, {
  category: "Schools & Education",
  icon: "🏫",
  items: [{
    label: "SK Bandar Rinching",
    href: "#",
    detail: "Sekolah Kebangsaan berdekatan"
  }, {
    label: "SMK Bandar Rinching",
    href: "#",
    detail: "Sekolah Menengah"
  }, {
    label: "Nottingham University Malaysia",
    href: "#",
    detail: "Kampus Semenyih"
  }, {
    label: "Tadika & Taska Nearby",
    href: "#",
    detail: "Banyak pilihan sekitar Eco Majestic & Semenyih"
  }]
}, {
  category: "Utilities & Services",
  icon: "⚡",
  items: [{
    label: "Tenaga Nasional Berhad (TNB)",
    href: "#",
    detail: "15454 (Electricity)"
  }, {
    label: "Air Selangor",
    href: "#",
    detail: "15300 (Water supply)"
  }, {
    label: "Indah Water Konsortium",
    href: "#",
    detail: "03-2083 2828 (Sewerage)"
  }, {
    label: "Unifi / TIME Internet",
    href: "#",
    detail: "Internet service providers"
  }]
}, {
  category: "Resident / Management",
  icon: "🤝",
  items: [{
    label: "JMB / Management Office",
    href: "#",
    detail: "D’Cendana management contact"
  }, {
    label: "Maintenance Request",
    href: "#",
    detail: "Report defects / facilities issues"
  }, {
    label: "Resident WhatsApp Group",
    href: "#",
    detail: "Community updates & announcements"
  }]
}];
function Resources() {
  return /* @__PURE__ */ jsxs("main", { className: "max-w-5xl mx-auto px-4 py-12", children: [
    /* @__PURE__ */ jsx("h1", { className: "text-3xl font-bold mb-2", children: "Neighbourhood Resources" }),
    /* @__PURE__ */ jsx("p", { className: "text-gray-500 mb-8", children: "Quick access to local services, contacts, and community spaces." }),
    /* @__PURE__ */ jsx("div", { className: "grid gap-6 md:grid-cols-2", children: RESOURCES.map((section) => /* @__PURE__ */ jsxs("div", { className: "bg-white rounded-xl border border-blue-200 p-6 shadow-sm transition duration-300 transform hover:scale-105 hover:-translate-y-1 hover:border-blue-500 hover:shadow-lg hover:shadow-blue-100 cursor-pointer", children: [
      /* @__PURE__ */ jsxs("h2", { className: "font-bold text-lg mb-4 flex items-center gap-2", children: [
        /* @__PURE__ */ jsx("span", { children: section.icon }),
        " ",
        section.category
      ] }),
      /* @__PURE__ */ jsx("ul", { className: "space-y-3", children: section.items.map((item) => /* @__PURE__ */ jsxs("li", { className: "border-b border-blue-100 last:border-b-0 pb-3 last:pb-0", children: [
        /* @__PURE__ */ jsx("p", { className: "font-medium text-sm", children: item.label }),
        /* @__PURE__ */ jsx("p", { className: "text-xs text-gray-500 mt-0.5", children: item.detail })
      ] }, item.label)) })
    ] }, section.category)) })
  ] });
}
export {
  Resources as component
};
