import { Link, createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/')({
  component: Home,
})

function Home() {
  return (
    <main>
      {/* Hero */}
      <section className="bg-red-800 text-white py-20 px-4 text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">Welcome to D'Cendana</h1>
        <p className="text-yellow-200 text-lg max-w-xl mx-auto mb-8">
          Your hub for neighbourhood news, org chart, and community resources.
        </p>
        <div className="flex flex-wrap gap-3 justify-center">
          <Link to="/announcements" className="bg-white text-blue-800 font-semibold px-6 py-3 rounded-lg hover:bg-blue-100 transition">
            View Announcements
          </Link>
          <Link to="/organization" className="border border-white text-white font-semibold px-6 py-3 rounded-lg hover:bg-blue-700 transition">
            Organization Chart
          </Link>
        </div>
      </section>

      {/* Quick-link cards */}
      <section className="max-w-5xl mx-auto px-4 py-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {[
          {
            to: '/announcements',
            icon: '📢',
            title: 'Announcements',
            desc: 'Stay informed with the latest neighbourhood news and updates.',
          },
          {
            to: '/organization',
            icon: '📅',
            title: 'Organization Chart',
            desc: 'Meet the people behind the D\'Cendana Chinese Community and explore our leadership structure.',
          },
          {
            to: '/resources',
            icon: '📋',
            title: 'Resources',
            desc: 'Handy links for city services, local businesses, and emergency contacts.',
          },
          {
            to: '/contact',
            icon: '✉️',
            title: 'Get in Touch',
            desc: 'Connect with the neighbourhood association or share feedback.',
          },
        ].map(({ to, icon, title, desc }) => (
          <Link
            key={to}
            to={to}
            className="bg-white rounded-2xl p-6 shadow-sm border border-gray-200 transition duration-300 transform hover:scale-105 hover:border-blue-500 hover:shadow-lg hover:shadow-blue-100 cursor-pointer group"
          >
            <div className="text-3xl mb-3">{icon}</div>
            <h2 className="font-bold text-lg mb-1 group-hover:text-blue-700 transition">{title}</h2>
            <p className="text-gray-500 text-sm">{desc}</p>
          </Link>
        ))}
      </section>

      {/* Announcements preview */}
      <section className="bg-white py-12 px-4">
        <div className="max-w-5xl mx-auto">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-bold">Latest Announcements</h2>
            <Link to="/announcements" className="text-blue-700 hover:underline text-sm font-medium">
              View all →
            </Link>
          </div>
          <div className="grid gap-4">
            {ANNOUNCEMENTS.slice(0, 3).map((a) => (
              <AnnouncementCard key={a.id} {...a} />
            ))}
          </div>
        </div>
      </section>

    </main>
  )
}

function AnnouncementCard({ badge, title, date, body }: { badge: string; title: string; date: string; body: string }) {
  return (
    <div className="bg-white border border-gray-200 rounded-xl p-5 shadow-sm 
  transition duration-300 transform 
  hover:scale-105 hover:border-blue-500 hover:shadow-md cursor-pointer">
      <span className="text-xs font-semibold uppercase tracking-wide text-blue-700 bg-blue-100 px-2 py-1 rounded">
        {badge}
      </span>
      <h3 className="font-semibold mt-2 mb-1">{title}</h3>
      <p className="text-xs text-gray-400 mb-2">{date}</p>
      <p className="text-sm text-gray-600 whitespace-pre-line">{body}</p>
    </div>
  )
}

export const ANNOUNCEMENTS = [
  {
    id: 1,
    badge: 'General',
    title: 'Berita Baik Komuniti D’Cendana! 🎉',
    date: 'April 8, 2026',
    body: `Kami dengan sukacitanya ingin memaklumkan bahawa akaun rasmi Persatuan Pemilik D’Cendana kini telah berjaya dibuka.

Butiran akaun adalah seperti berikut:

🏦 Hong Leong Bank Mahkota Cheras
✉️ Nama Akaun: Persatuan Pemilik D'Cendana
📌 No. Akaun: 21500092438

Pembukaan akaun ini adalah satu langkah penting ke arah pengurusan kewangan yang lebih teratur, telus dan profesional bagi komuniti kita.

Sebarang urusan berkaitan pembayaran atau sumbangan selepas ini boleh dibuat melalui akaun rasmi ini.

Terima kasih atas sokongan semua — kita teruskan usaha membina komuniti D’Cendana yang lebih baik bersama! 💪

DCNotis#007`,  
},

  {
    id: 2,
    badge: 'General',
    title: '📄 SOP PERMOHONAN PASANG KHEMAH (UPDATED)',
    date: 'April 3, 2026',
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

DCNotis#006.1`,
  },

  {
    id: 3,
    badge: 'Security',
    title: 'PEMAKLUMAN KAWALAN KESELAMATAN SEMPENA CUTI HARI RAYA (19 Mac 2026 – 22 Mac 2026)',
    date: 'March 17, 2026',
    body: `1. Rondaan Keselamatan

Rondaan keselamatan akan dilaksanakan sebanyak tiga (3) kali setiap satu jam bermula jam 12.00 malam hingga 6.00 pagi.

2. Penambahan Pengawal Keselamatan Sementara

Penambahan pengawal keselamatan sementara akan dilaksanakan sepanjang tempoh 19 Mac 2026 hingga 22 Mac 2026, bermula jam 7.00 malam hingga 7.00 pagi bagi tujuan rondaan dan pemantauan keselamatan.

3. Pelaksanaan SOP Perayaan

Prosedur operasi standard (SOP) ini akan digunakan dan dilaksanakan bagi setiap sambutan perayaan utama kaum pada masa akan datang bagi memastikan tahap keselamatan kawasan taman sentiasa terpelihara.

Sekian, dimaklumkan.
DCNotis#005`,  
},

   {
    id: 4,
    badge: 'General',
    title: 'Penghargaan Komuniti D’Cendana',
    date: 'March 13, 2026',
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
DCNotis#004`,  
},

 {
    id: 5,
    badge: 'General',
    title: 'Makluman Kepada Penduduk D’Cendana (Kes Denggi)',
    date: 'March 12, 2026',
    body: `Berikutan peningkatan kes denggi yang dilaporkan baru-baru ini di kawasan D’Cendana, sesiapa yang berasa kurang sihat dinasihatkan untuk mengambil langkah berjaga-jaga dan segera mendapatkan pemeriksaan kesihatan.

Pihak KKM mungkin akan menjalankan aktiviti semburan tambahan tanpa notis awal sekiranya terdapat lebih banyak kes positif.

Mohon kerjasama semua penduduk untuk memastikan kawasan rumah sentiasa bersih dan mengelakkan air bertakung yang boleh menjadi tempat pembiakan nyamuk.

Sekiranya anda mendapati terdapat kawasan dengan air bertakung, sila maklumkan kepada pemilik rumah berkenaan atau laporkan kepada MPKJ melalui hotline mereka. (Hotline No.: 1-800-88-6755) 

Terima kasih atas kerjasama semua.
DCNotis#003`,  
},

{
    id: 6,
    badge: 'General',
    title: 'Makluman Tambahan',
    date: 'March 12, 2026',
    body: `Bagi penduduk yang telah memohon sticker kereta, proses penyediaan akan mengambil masa sekitar 1 minggu.

Sementara menunggu sticker siap, mohon kerjasama semua untuk mengikut SOP dengan mendaftar di pondok pengawal sebelum masuk. 

Walaupun mungkin mengambil sekitar 5 minit tambahan, langkah ini membantu pihak keselamatan mengekalkan aliran kerja yang lebih teratur.

Terima kasih atas kerjasama semua.
DCNotis#002`,  
},
{
    id: 7,
    badge: 'General',
    title: 'Pengumuman Kepada Penduduk D’Cendana',
    date: 'March 12, 2026',
    body: `Bagi mengurangkan kemasukan orang luar atau individu tidak dibenarkan, bermula hari ini hanya kenderaan yang memaparkan sticker kereta D’Cendana akan diberikan akses masuk secara automatik oleh pengawal keselamatan.

Sticker mesti ditampal pada kenderaan, bukan sekadar ditunjukkan.

Kenderaan tanpa sticker perlu berhenti dan mendaftar di pondok pengawal sebelum masuk.

Penduduk yang belum mempunyai sticker boleh memohon di pautan berikut:
https://forms.gle/EZwP3RfTSR6ReBNMA

Sekiranya pelawat anda memaklumkan mereka tidak diminta mendaftar semasa masuk, mohon maklumkan kepada hotline WhatsApp bersama nombor plat, tarikh dan masa kejadian supaya pihak kami dapat menyemak operasi keselamatan.

Terima kasih.
DCNotis#001`,  
},
]

