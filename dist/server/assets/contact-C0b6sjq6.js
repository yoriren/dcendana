import { jsxs, jsx } from "react/jsx-runtime";
import { useState } from "react";
function Contact() {
  const [status, setStatus] = useState("idle");
  async function handleSubmit(e) {
    e.preventDefault();
    setStatus("submitting");
    const form = e.currentTarget;
    try {
      const res = await fetch("/__forms.html", {
        method: "POST",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded"
        },
        body: new URLSearchParams(new FormData(form)).toString()
      });
      if (res.ok) {
        setStatus("success");
        form.reset();
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  }
  return /* @__PURE__ */ jsxs("main", { className: "max-w-5xl mx-auto px-4 py-12", children: [
    /* @__PURE__ */ jsx("h1", { className: "text-3xl font-bold mb-2", children: "Get in Touch" }),
    /* @__PURE__ */ jsx("p", { className: "text-gray-500 mb-10", children: "Have a question, suggestion, or want to get involved? Reach out to the D'Cendana Chinese Neighbourhood Association." }),
    /* @__PURE__ */ jsxs("div", { className: "grid md:grid-cols-2 gap-10", children: [
      /* @__PURE__ */ jsxs("div", { children: [
        /* @__PURE__ */ jsx("h2", { className: "text-xl font-semibold mb-5", children: "Contact Information" }),
        /* @__PURE__ */ jsx("div", { className: "space-y-5", children: [{
          icon: "📍",
          label: "Address",
          value: "D'Cendana, Bandar Tasik Kesuma, 43500 Semenyih, Selangor."
        }, {
          icon: "📞",
          label: "Phone",
          value: "014-8000301"
        }, {
          icon: "✉️",
          label: "Email",
          value: "dcendana@netlify.app"
        }, {
          icon: "🕐",
          label: "Office Hours",
          value: "Mon to Fri, 9 AM – 6 PM"
        }].map(({
          icon,
          label,
          value
        }) => /* @__PURE__ */ jsxs("div", { className: "flex items-start gap-3", children: [
          /* @__PURE__ */ jsx("span", { className: "text-2xl", children: icon }),
          /* @__PURE__ */ jsxs("div", { children: [
            /* @__PURE__ */ jsx("p", { className: "font-medium text-sm", children: label }),
            /* @__PURE__ */ jsx("p", { className: "text-gray-600 text-sm", children: value })
          ] })
        ] }, label)) }),
        /* @__PURE__ */ jsxs("div", { className: "mt-8 bg-blue-50 border border-blue-200 rounded-xl p-5", children: [
          /* @__PURE__ */ jsx("h3", { className: "font-semibold text-blue-800 mb-2", children: "Want to Volunteer?" }),
          /* @__PURE__ */ jsx("p", { className: "text-sm text-blue-700", children: "We're always looking for neighbours to help with events, the community garden, and the welcome committee. Mention your interests in the message below!" })
        ] })
      ] }),
      /* @__PURE__ */ jsx("div", { className: "bg-white rounded-xl border p-6 shadow-sm", children: status === "success" ? /* @__PURE__ */ jsxs("div", { className: "text-center py-10", children: [
        /* @__PURE__ */ jsx("div", { className: "text-5xl mb-4", children: "✅" }),
        /* @__PURE__ */ jsx("h3", { className: "font-bold text-xl mb-2", children: "Message Sent!" }),
        /* @__PURE__ */ jsx("p", { className: "text-gray-500", children: "Thanks for reaching out. We'll get back to you soon." }),
        /* @__PURE__ */ jsx("button", { onClick: () => setStatus("idle"), className: "mt-6 text-blue-700 hover:underline text-sm font-medium", children: "Send another message" })
      ] }) : /* @__PURE__ */ jsxs("form", { name: "contact", method: "POST", "data-netlify": "true", "netlify-honeypot": "bot-field", onSubmit: handleSubmit, className: "space-y-4", children: [
        /* @__PURE__ */ jsx("input", { type: "hidden", name: "form-name", value: "contact" }),
        /* @__PURE__ */ jsx("p", { style: {
          display: "none"
        }, children: /* @__PURE__ */ jsxs("label", { children: [
          "Don't fill this out: ",
          /* @__PURE__ */ jsx("input", { name: "bot-field" })
        ] }) }),
        /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-2 gap-4", children: [
          /* @__PURE__ */ jsxs("div", { children: [
            /* @__PURE__ */ jsxs("label", { className: "block text-sm font-medium mb-1", htmlFor: "name", children: [
              "Name ",
              /* @__PURE__ */ jsx("span", { className: "text-red-500", children: "*" })
            ] }),
            /* @__PURE__ */ jsx("input", { id: "name", name: "name", required: true, className: "w-full border rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-400", placeholder: "Jane Smith" })
          ] }),
          /* @__PURE__ */ jsxs("div", { children: [
            /* @__PURE__ */ jsxs("label", { className: "block text-sm font-medium mb-1", htmlFor: "email", children: [
              "Email ",
              /* @__PURE__ */ jsx("span", { className: "text-red-500", children: "*" })
            ] }),
            /* @__PURE__ */ jsx("input", { id: "email", name: "email", type: "email", required: true, className: "w-full border rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-400", placeholder: "jane@example.com" })
          ] })
        ] }),
        /* @__PURE__ */ jsxs("div", { children: [
          /* @__PURE__ */ jsx("label", { className: "block text-sm font-medium mb-1", htmlFor: "street", children: "Street / Block (optional)" }),
          /* @__PURE__ */ jsx("input", { id: "street", name: "street", className: "w-full border rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-400", placeholder: "e.g. 68, Jln Kesuma 8/2K, Bandar Tasik Kesuma" })
        ] }),
        /* @__PURE__ */ jsxs("div", { children: [
          /* @__PURE__ */ jsxs("label", { className: "block text-sm font-medium mb-1", htmlFor: "subject", children: [
            "Subject ",
            /* @__PURE__ */ jsx("span", { className: "text-red-500", children: "*" })
          ] }),
          /* @__PURE__ */ jsxs("select", { id: "subject", name: "subject", required: true, className: "w-full border rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-400 bg-white", children: [
            /* @__PURE__ */ jsx("option", { value: "", children: "Select a topic…" }),
            /* @__PURE__ */ jsx("option", { children: "General Question" }),
            /* @__PURE__ */ jsx("option", { children: "Event Suggestion" }),
            /* @__PURE__ */ jsx("option", { children: "Safety or Maintenance Issue" }),
            /* @__PURE__ */ jsx("option", { children: "Volunteering" }),
            /* @__PURE__ */ jsx("option", { children: "HOA Inquiry" }),
            /* @__PURE__ */ jsx("option", { children: "Other" })
          ] })
        ] }),
        /* @__PURE__ */ jsxs("div", { children: [
          /* @__PURE__ */ jsxs("label", { className: "block text-sm font-medium mb-1", htmlFor: "message", children: [
            "Message ",
            /* @__PURE__ */ jsx("span", { className: "text-red-500", children: "*" })
          ] }),
          /* @__PURE__ */ jsx("textarea", { id: "message", name: "message", required: true, rows: 5, className: "w-full border rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-400 resize-none", placeholder: "How can we help?" })
        ] }),
        status === "error" && /* @__PURE__ */ jsx("p", { className: "text-red-600 text-sm", children: "Something went wrong. Please try again." }),
        /* @__PURE__ */ jsx("button", { type: "submit", disabled: status === "submitting", className: "w-full bg-blue-700 hover:bg-blue-800 disabled:opacity-60 text-white font-semibold py-2.5 rounded-lg transition", children: status === "submitting" ? "Sending…" : "Send Message" })
      ] }) })
    ] })
  ] });
}
export {
  Contact as component
};
