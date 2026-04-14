import { jsxs, jsx } from "react/jsx-runtime";
const ORG = {
  president: {
    name: "KS CHIM",
    role: "President",
    image: "/images/chim.jpeg"
    // replace with real image
  },
  leaders: [{
    name: "BRONSON CHIN",
    role: "First Vice President",
    image: "/images/bronson.jpeg"
  }, {
    name: "ALEX THAM",
    role: "Second Vice President",
    image: "/images/alex.jpeg"
  }],
  committee: [{
    name: "彩晶",
    role: "Secretary"
  }, {
    name: "Choy",
    role: "Treasurer"
  }, {
    name: "Xiu",
    role: "Security Captain"
  }, {
    name: "Lucky",
    role: "Vice Secretary"
  }, {
    name: "Joey Wong",
    role: "Vice Treasurer"
  }, {
    name: "Ming",
    role: "Vice Security Captain"
  }]
};
function Organization() {
  return /* @__PURE__ */ jsxs("main", { className: "max-w-5xl mx-auto px-4 py-12 text-center", children: [
    /* @__PURE__ */ jsx("h1", { className: "text-3xl font-bold mb-2", children: "Organization Chart" }),
    /* @__PURE__ */ jsx("p", { className: "text-gray-500 mb-10", children: "D'Cendana Chinese Community Committee Structure" }),
    /* @__PURE__ */ jsxs("div", { className: "flex flex-col items-center", children: [
      /* @__PURE__ */ jsxs("div", { className: "flex flex-col items-center mb-6 group", children: [
        /* @__PURE__ */ jsx("div", { className: "w-48 md:w-56 h-64 md:h-72 rounded-xl overflow-hidden shadow-lg \r\n      transition duration-300 transform group-hover:scale-105", children: /* @__PURE__ */ jsx("img", { src: ORG.president.image, alt: ORG.president.name, className: "w-full h-full object-cover object-top" }) }),
        /* @__PURE__ */ jsxs("div", { className: "mt-5 bg-blue-600 text-white px-10 py-5 rounded-xl shadow text-center transition duration-300 transform group-hover:scale-105", children: [
          /* @__PURE__ */ jsx("p", { className: "text-sm uppercase tracking-wide", children: ORG.president.role }),
          /* @__PURE__ */ jsx("p", { className: "font-bold text-2xl", children: ORG.president.name })
        ] })
      ] }),
      /* @__PURE__ */ jsx("div", { className: "w-[2px] h-12 bg-gray-300" }),
      /* @__PURE__ */ jsxs("div", { className: "relative flex justify-center gap-12 mb-10", children: [
        /* @__PURE__ */ jsx("div", { className: "absolute top-0 left-22 right-24 h-[2px] bg-gray-300 z-0" }),
        ORG.leaders.map((leader) => /* @__PURE__ */ jsxs("div", { className: "flex flex-col items-center relative group", children: [
          /* @__PURE__ */ jsx("div", { className: "w-[2px] h-6 bg-gray-300" }),
          /* @__PURE__ */ jsx("div", { className: "w-32 md:w-36 h-40 md:h-44 rounded-xl overflow-hidden shadow-md \r\n          transition duration-300 transform group-hover:scale-105", children: /* @__PURE__ */ jsx("img", { src: leader.image, alt: leader.name, className: "w-full h-full object-cover object-top" }) }),
          /* @__PURE__ */ jsxs("div", { className: "mt-3 bg-blue-600 text-white px-6 py-3 rounded-xl shadow text-center transition duration-300 transform group-hover:scale-105", children: [
            /* @__PURE__ */ jsx("p", { className: "text-xs uppercase tracking-wide", children: leader.role }),
            /* @__PURE__ */ jsx("p", { className: "font-bold", children: leader.name })
          ] })
        ] }, leader.name))
      ] }),
      /* @__PURE__ */ jsx("div", { className: "w-[2px] h-12 bg-gray-300 mb-6" }),
      /* @__PURE__ */ jsx("div", { className: "grid sm:grid-cols-2 md:grid-cols-3 gap-6", children: ORG.committee.map((member) => /* @__PURE__ */ jsxs("div", { className: "bg-blue-600 text-white rounded-xl p-4 shadow text-center \r\ntransition duration-300 transform \r\nhover:scale-105 hover:-translate-y-1 \r\nhover:shadow-lg hover:shadow-blue-200 cursor-pointer", children: [
        /* @__PURE__ */ jsx("p", { className: "text-xs uppercase tracking-wide", children: member.role }),
        /* @__PURE__ */ jsx("p", { className: "font-semibold", children: member.name })
      ] }, member.name)) })
    ] })
  ] });
}
export {
  Organization as component
};
