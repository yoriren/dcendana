import { Link, createRootRoute, HeadContent, Scripts, createFileRoute, lazyRouteComponent, createRouter } from "@tanstack/react-router";
import { jsxs, jsx } from "react/jsx-runtime";
import { useState } from "react";
const NAV_LINKS = [
  { to: "/announcements", label: "Announcements" },
  { to: "/organization", label: "Organization Chart" },
  { to: "/resources", label: "Resources" },
  { to: "/contact", label: "Contact" }
];
function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  return /* @__PURE__ */ jsxs("header", { className: "bg-red-900 text-white shadow-md sticky top-0 z-50", children: [
    /* @__PURE__ */ jsxs("div", { className: "max-w-5xl mx-auto px-4 flex items-center justify-between h-14", children: [
      /* @__PURE__ */ jsxs(Link, { to: "/", className: "flex items-center gap-2 font-bold text-lg tracking-tight hover:text-yellow-200 transition", children: [
        /* @__PURE__ */ jsx("img", { src: "/public/favicon.ico", alt: "logo", className: "w-10 h-10 transition transform hover:scale-110" }),
        /* @__PURE__ */ jsx("span", { children: "D'Cendana Chinese Community" })
      ] }),
      /* @__PURE__ */ jsx("nav", { className: "hidden md:flex gap-6 text-sm font-medium", children: NAV_LINKS.map(({ to, label }) => /* @__PURE__ */ jsx(
        Link,
        {
          to,
          className: "hover:text-yellow-200 transition",
          activeProps: { className: "text-yellow-300 underline underline-offset-4" },
          children: label
        },
        to
      )) }),
      /* @__PURE__ */ jsxs(
        "button",
        {
          className: "md:hidden p-2 rounded hover:bg-yellow-800 transition",
          onClick: () => setMobileOpen((o) => !o),
          "aria-label": "Toggle menu",
          children: [
            /* @__PURE__ */ jsx("span", { className: "block w-5 h-0.5 bg-white mb-1" }),
            /* @__PURE__ */ jsx("span", { className: "block w-5 h-0.5 bg-white mb-1" }),
            /* @__PURE__ */ jsx("span", { className: "block w-5 h-0.5 bg-white" })
          ]
        }
      )
    ] }),
    mobileOpen && /* @__PURE__ */ jsx("nav", { className: "md:hidden bg-yellow-800 px-4 pb-4 flex flex-col gap-3 text-sm font-medium", children: NAV_LINKS.map(({ to, label }) => /* @__PURE__ */ jsx(
      Link,
      {
        to,
        className: "hover:text-yellow-200 transition py-1",
        onClick: () => setMobileOpen(false),
        children: label
      },
      to
    )) })
  ] });
}
const Route$6 = createRootRoute({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "D'Cendana Chinese Community" }
    ]
  }),
  shellComponent: RootDocument
});
function RootDocument({ children }) {
  return /* @__PURE__ */ jsxs("html", { lang: "en", children: [
    /* @__PURE__ */ jsx("head", { children: /* @__PURE__ */ jsx(HeadContent, {}) }),
    /* @__PURE__ */ jsxs("body", { className: "min-h-screen flex flex-col bg-gray-50 text-gray-900", children: [
      /* @__PURE__ */ jsx(Header, {}),
      /* @__PURE__ */ jsx("main", { className: "flex-1", children }),
      /* @__PURE__ */ jsx("footer", { className: "bg-red-900 text-blue-100 py-8 mt-16", children: /* @__PURE__ */ jsxs("div", { className: "max-w-5xl mx-auto px-4 text-center", children: [
        /* @__PURE__ */ jsx("p", { className: "font-semibold text-lg", children: "D'Cendana Chinese Community" }),
        /* @__PURE__ */ jsx("p", { className: "text-yellow-300 text-sm mt-1", children: "Connecting neighbours, building community." })
      ] }) }),
      /* @__PURE__ */ jsx(Scripts, {})
    ] })
  ] });
}
const $$splitComponentImporter$5 = () => import("./resources-bYh5vtAw.js");
const Route$5 = createFileRoute("/resources")({
  component: lazyRouteComponent($$splitComponentImporter$5, "component")
});
const $$splitComponentImporter$4 = () => import("./organization-D2RvUGcA.js");
const Route$4 = createFileRoute("/organization")({
  component: lazyRouteComponent($$splitComponentImporter$4, "component")
});
const $$splitComponentImporter$3 = () => import("./contact-C0b6sjq6.js");
const Route$3 = createFileRoute("/contact")({
  component: lazyRouteComponent($$splitComponentImporter$3, "component")
});
const $$splitComponentImporter$2 = () => import("./announcements-BGHHYV1k.js");
const Route$2 = createFileRoute("/announcements")({
  component: lazyRouteComponent($$splitComponentImporter$2, "component")
});
const $$splitComponentImporter$1 = () => import("./index-1HzVCMD9.js");
const Route$1 = createFileRoute("/")({
  component: lazyRouteComponent($$splitComponentImporter$1, "component")
});
const ANNOUNCEMENTS = [{
  id: 1,
  badge: "General",
  title: "Berita Baik Komuniti D’Cendana! 🎉",
  date: "April 8, 2026",
  body: `Kami dengan sukacitanya ingin memaklumkan bahawa akaun rasmi Persatuan Pemilik D’Cendana kini telah berjaya dibuka.

Butiran akaun adalah seperti berikut:

🏦 Hong Leong Bank Mahkota Cheras
✉️ Nama Akaun: Persatuan Pemilik D'Cendana
📌 No. Akaun: 21500092438

Pembukaan akaun ini adalah satu langkah penting ke arah pengurusan kewangan yang lebih teratur, telus dan profesional bagi komuniti kita.

Sebarang urusan berkaitan pembayaran atau sumbangan selepas ini boleh dibuat melalui akaun rasmi ini.

Terima kasih atas sokongan semua — kita teruskan usaha membina komuniti D’Cendana yang lebih baik bersama! 💪

DCNotis#007`
}, {
  id: 2,
  badge: "General",
  title: "📄 SOP PERMOHONAN PASANG KHEMAH (UPDATED)",
  date: "April 3, 2026",
  body: `RESIDENSI D’CENDANA

📌 LANGKAH PERMOHONAN

1️⃣ Permohonan kepada MPKJ (WAJIB)

Permohonan perlu dibuat secara walk-in ke pejabat MPKJ.

Dokumen yang diperlukan:

- Isi borang permohonan / notis (1 salinan)
- Gambar khemah (saiz & lokasi pemasangan) – 1-2 salinan
- Gambar lokasi (Google Maps) – 1 salinan
- Kad jemputan / makluman majlis – 1 salinan

2️⃣ Permohonan kepada Persatuan D’Cendana

Selepas mendapat kelulusan MPKJ:

- Isi borang dalaman persatuan
- Sertakan: Salinan kelulusan MPKJ

👉 Borang D’Cendana:
https://drive.google.com/file/d/12JHJt6ictIvqjAjl50l_VApjcGPC_xgY/view?usp=sharing

3️⃣ Makluman kepada Jiran (DISARANKAN)
- Digalakkan untuk memaklumkan kepada:
- Jiran sebelah kiri & kanan
(Tidak wajib, tetapi sangat digalakkan untuk elak sebarang isu)

⚠️ SYARAT & PERINGATAN
1. Khemah tidak boleh menghalang laluan utama atau akses kecemasan
2. Pastikan laluan kenderaan masih boleh digunakan
3. Pemohon bertanggungjawab terhadap kebersihan kawasan selepas majlis
4. Sebarang kerosakan atau gangguan adalah tanggungjawab pemohon

DCNotis#006.1`
}, {
  id: 3,
  badge: "Security",
  title: "PEMAKLUMAN KAWALAN KESELAMATAN SEMPENA CUTI HARI RAYA (19 Mac 2026 – 22 Mac 2026)",
  date: "March 17, 2026",
  body: `1. Rondaan Keselamatan

Rondaan keselamatan akan dilaksanakan sebanyak tiga (3) kali setiap satu jam bermula jam 12.00 malam hingga 6.00 pagi.

2. Penambahan Pengawal Keselamatan Sementara

Penambahan pengawal keselamatan sementara akan dilaksanakan sepanjang tempoh 19 Mac 2026 hingga 22 Mac 2026, bermula jam 7.00 malam hingga 7.00 pagi bagi tujuan rondaan dan pemantauan keselamatan.

3. Pelaksanaan SOP Perayaan

Prosedur operasi standard (SOP) ini akan digunakan dan dilaksanakan bagi setiap sambutan perayaan utama kaum pada masa akan datang bagi memastikan tahap keselamatan kawasan taman sentiasa terpelihara.

Sekian, dimaklumkan.
DCNotis#005`
}, {
  id: 4,
  badge: "General",
  title: "Penghargaan Komuniti D’Cendana",
  date: "March 13, 2026",
  body: `Kami ingin ucapkan terima kasih kepada beberapa pihak yang telah membantu komuniti kita:

1️⃣ Sumbangan Payung Guard Post

Terima kasih kepada Ms Malini, Ms Kauselya, Ms Kristina William & Ms Suruty Adnath yang telah menaja 2 unit payung besar bagi menggantikan payung lama di pondok pengawal. Ini sangat membantu memberi perlindungan yang lebih baik kepada pengawal keselamatan yang bertugas.

2️⃣ Carta Organisasi Persatuan

Terima kasih juga kepada En. Choy yang telah menaja cetakan Carta Organisasi Persatuan. Carta ini telah dipasang di kedua-dua pondok pengawal supaya penduduk boleh rujuk dengan mudah struktur jawatankuasa persatuan.

3️⃣ Penghargaan kepada Ex-AJK

Terima kasih juga kepada ex-AJK yang sudi hadir ke mesyuarat semalam untuk tujuan serah tugas, supaya peralihan kepada AJK baharu dapat berjalan dengan lebih lancar.

4️⃣ Doa untuk Ir. Appandi

Kami dimaklumkan bahawa Ir. Appandi terlibat dalam kemalangan motosikal malam tadi. Marilah kita sama-sama mendoakan agar beliau diberikan kesembuhan yang cepat dan dipermudahkan segala urusan pemulihan beliau.

5️⃣ Penghargaan kepada AJK Badan Bebas

Walaupun sedikit lewat, kami juga ingin mengambil kesempatan ini untuk mengucapkan terima kasih kepada AJK Badan Bebas yang telah membantu mengendalikan EGM tempoh hari sehingga ia dapat berjalan dengan lancar.

Terima kasih kepada semua yang terus menyumbang masa, tenaga dan sokongan demi kebaikan komuniti D’Cendana. 🙏
DCNotis#004`
}, {
  id: 5,
  badge: "General",
  title: "Makluman Kepada Penduduk D’Cendana (Kes Denggi)",
  date: "March 12, 2026",
  body: `Berikutan peningkatan kes denggi yang dilaporkan baru-baru ini di kawasan D’Cendana, sesiapa yang berasa kurang sihat dinasihatkan untuk mengambil langkah berjaga-jaga dan segera mendapatkan pemeriksaan kesihatan.

Pihak KKM mungkin akan menjalankan aktiviti semburan tambahan tanpa notis awal sekiranya terdapat lebih banyak kes positif.

Mohon kerjasama semua penduduk untuk memastikan kawasan rumah sentiasa bersih dan mengelakkan air bertakung yang boleh menjadi tempat pembiakan nyamuk.

Sekiranya anda mendapati terdapat kawasan dengan air bertakung, sila maklumkan kepada pemilik rumah berkenaan atau laporkan kepada MPKJ melalui hotline mereka. (Hotline No.: 1-800-88-6755) 

Terima kasih atas kerjasama semua.
DCNotis#003`
}, {
  id: 6,
  badge: "General",
  title: "Makluman Tambahan",
  date: "March 12, 2026",
  body: `Bagi penduduk yang telah memohon sticker kereta, proses penyediaan akan mengambil masa sekitar 1 minggu.

Sementara menunggu sticker siap, mohon kerjasama semua untuk mengikut SOP dengan mendaftar di pondok pengawal sebelum masuk. 

Walaupun mungkin mengambil sekitar 5 minit tambahan, langkah ini membantu pihak keselamatan mengekalkan aliran kerja yang lebih teratur.

Terima kasih atas kerjasama semua.
DCNotis#002`
}, {
  id: 7,
  badge: "General",
  title: "Pengumuman Kepada Penduduk D’Cendana",
  date: "March 12, 2026",
  body: `Bagi mengurangkan kemasukan orang luar atau individu tidak dibenarkan, bermula hari ini hanya kenderaan yang memaparkan sticker kereta D’Cendana akan diberikan akses masuk secara automatik oleh pengawal keselamatan.

Sticker mesti ditampal pada kenderaan, bukan sekadar ditunjukkan.

Kenderaan tanpa sticker perlu berhenti dan mendaftar di pondok pengawal sebelum masuk.

Penduduk yang belum mempunyai sticker boleh memohon di pautan berikut:
https://forms.gle/EZwP3RfTSR6ReBNMA

Sekiranya pelawat anda memaklumkan mereka tidak diminta mendaftar semasa masuk, mohon maklumkan kepada hotline WhatsApp bersama nombor plat, tarikh dan masa kejadian supaya pihak kami dapat menyemak operasi keselamatan.

Terima kasih.
DCNotis#001`
}];
const products = [
  {
    id: 1,
    name: "Product 1",
    image: "/placeholder.png",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    shortDescription: "A generic product description for your first product.",
    price: 3e3
  }
];
const $$splitComponentImporter = () => import("./_productId-Dm0Nzd51.js");
const Route = createFileRoute("/products/$productId")({
  component: lazyRouteComponent($$splitComponentImporter, "component"),
  loader: async ({
    params
  }) => {
    const product = products.find((product2) => product2.id === +params.productId);
    if (!product) {
      throw new Error("Product not found");
    }
    return product;
  }
});
const ResourcesRoute = Route$5.update({
  id: "/resources",
  path: "/resources",
  getParentRoute: () => Route$6
});
const OrganizationRoute = Route$4.update({
  id: "/organization",
  path: "/organization",
  getParentRoute: () => Route$6
});
const ContactRoute = Route$3.update({
  id: "/contact",
  path: "/contact",
  getParentRoute: () => Route$6
});
const AnnouncementsRoute = Route$2.update({
  id: "/announcements",
  path: "/announcements",
  getParentRoute: () => Route$6
});
const IndexRoute = Route$1.update({
  id: "/",
  path: "/",
  getParentRoute: () => Route$6
});
const ProductsProductIdRoute = Route.update({
  id: "/products/$productId",
  path: "/products/$productId",
  getParentRoute: () => Route$6
});
const rootRouteChildren = {
  IndexRoute,
  AnnouncementsRoute,
  ContactRoute,
  OrganizationRoute,
  ResourcesRoute,
  ProductsProductIdRoute
};
const routeTree = Route$6._addFileChildren(rootRouteChildren)._addFileTypes();
const getRouter = () => {
  const router2 = createRouter({
    routeTree,
    scrollRestoration: true,
    defaultPreloadStaleTime: 0
  });
  return router2;
};
const router = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  getRouter
}, Symbol.toStringTag, { value: "Module" }));
export {
  ANNOUNCEMENTS as A,
  Route as R,
  router as r
};
