export default function HowToOrder() {
  // Data tahapan cara memesan
  const steps = [
    {
      number: "1",
      title: "Pilih menu",
      desc: "Telusuri menu atau lihat rekomendasi sesuai jam, lalu tekan Tambah.",
      badgeBg: "bg-[#113825]",
    },
    {
      number: "2",
      title: "Isi data pesanan",
      desc: "Pilih bawa pulang atau makan di tempat, isi nama, WhatsApp, dan jam.",
      badgeBg: "bg-[#1B4D33]",
    },
    {
      number: "3",
      title: "Bayar",
      desc: "Bayar di kasir, atau scan QRIS lalu unggah bukti pembayaran.",
      badgeBg: "bg-[#2A6E48]",
    },
    {
      number: "4",
      title: "Ambil atau nikmati",
      desc: "Ambil pesanan saat status Selesai, atau nikmati makan di resto.",
      badgeBg: "bg-[#D93838]",
    },
  ];

  return (
    <section className="bg-[#F9F8F6] py-16 w-full">
      <div className="w-full px-8 lg:px-16 space-y-12">
        
        {/* Header Section */}
        <div className="text-center space-y-2 max-w-2xl mx-auto">
          <span className="text-xs font-extrabold uppercase tracking-[0.2em] text-gray-500">
            MUDAH DAN CEPAT
          </span>
          <h2 className="text-4xl lg:text-5xl font-serif font-bold text-[#133223]">
            Cara Memesan
          </h2>
          <p className="text-gray-600 text-sm md:text-base">
            Empat langkah dari memilih menu sampai makanan di tangan Anda.
          </p>
        </div>

        {/* Grid 4 Langkah Pemesanan */}
        <div className="relative grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((item, idx) => (
            <div 
              key={idx} 
              className="bg-white rounded-3xl p-6 shadow-sm border border-gray-100 flex flex-col items-center text-center relative z-10 hover:shadow-md transition"
            >
              <div className={`w-10 h-10 rounded-full ${item.badgeBg} text-white font-bold text-base flex items-center justify-center shadow-md mb-6`}>
                {item.number}
              </div>

              <div className="w-12 h-12 bg-[#F4F7F5] rounded-2xl flex items-center justify-center text-[#133223] mb-4">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"></path>
                </svg>
              </div>

              <h3 className="font-bold text-xl text-[#133223] mb-2">
                {item.title}
              </h3>
              <p className="text-gray-500 text-sm leading-relaxed">
                {item.desc}
              </p>
            </div>
          ))}
        </div>

        {/* Grid 3 Kartu Bantuan di Bawah Langkah Pemesanan */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-4">
          
          <div className="bg-white rounded-3xl p-6 shadow-sm border border-gray-100 flex flex-col justify-between">
            <div className="space-y-2 mb-6">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-[#F4F7F5] rounded-xl flex items-center justify-center text-[#133223]">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z"></path></svg>
                </div>
                <h4 className="font-bold text-lg text-[#133223]">Ingin diantar?</h4>
              </div>
              <p className="text-gray-500 text-sm">Pesan antar lewat aplikasi.</p>
            </div>
            <div className="flex gap-3">
              <button className="flex-1 bg-white border border-gray-200 text-[#133223] font-bold py-3 rounded-xl hover:bg-gray-50 transition cursor-pointer text-sm shadow-sm">
                GoFood
              </button>
              <button className="flex-1 bg-white border border-gray-200 text-[#133223] font-bold py-3 rounded-xl hover:bg-gray-50 transition cursor-pointer text-sm shadow-sm">
                GrabFood
              </button>
            </div>
          </div>

          <div className="bg-white rounded-3xl p-6 shadow-sm border border-gray-100 flex flex-col justify-between">
            <div className="space-y-2 mb-6">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-[#F4F7F5] rounded-xl flex items-center justify-center text-[#133223]">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path></svg>
                </div>
                <h4 className="font-bold text-lg text-[#133223]">Ingin memastikan meja?</h4>
              </div>
              <p className="text-gray-500 text-sm">Ajukan reservasi dulu.</p>
            </div>
            <button className="w-full bg-[#2A6E48] text-white font-bold py-3.5 rounded-xl hover:bg-[#0f291c] transition cursor-pointer text-base shadow-sm">
              Reservasi Meja
            </button>
          </div>

          <div className="bg-white rounded-3xl p-6 shadow-sm border border-gray-100 flex flex-col justify-between">
            <div className="space-y-2 mb-6">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-[#F4F7F5] rounded-xl flex items-center justify-center text-[#133223]">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4"></path></svg>
                </div>
                <h4 className="font-bold text-lg text-[#133223]">Paket hantaran dan oleh-oleh</h4>
              </div>
              <p className="text-gray-500 text-sm">Ayam, entok, bebek panggang.</p>
            </div>
            <button className="w-full bg-[#D93838] text-white font-bold py-3.5 rounded-xl hover:bg-[#c22f2f] transition cursor-pointer text-base shadow-sm">
              Lihat Paket Hantaran
            </button>
          </div>

        </div>

        {/* Banner Card Besar: Paket Hantaran dan Oleh-oleh (Sesuai Referensi) */}
        <div className="bg-white rounded-3xl p-6 lg:p-8 shadow-sm border border-gray-100 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center mt-6">
          
          {/* Kolom Kiri: Gambar Produk */}
          <div className="lg:col-span-6 rounded-2xl overflow-hidden h-72 sm:h-80 bg-gray-100">
            <img 
              src="src/assets/gambar_ayam1.png" 
              alt="Paket Hantaran Waroeng SR" 
              className="w-full h-full object-cover"
            />
          </div>

          {/* Kolom Kanan: Teks & Tombol Aksi */}
          <div className="lg:col-span-6 space-y-4">
            <div>
              <span className="text-[#D93838] text-xs font-extrabold uppercase tracking-widest">
                PAKET HANTARAN DAN OLEH-OLEH
              </span>
              <h3 className="text-3xl lg:text-4xl font-serif font-bold text-[#133223] mt-1">
                Ayam, Entok, Bebek Panggang
              </h3>
            </div>

            <p className="text-gray-600 text-sm md:text-base leading-relaxed">
              Panggang kuali tradisional, tanpa santan, minyak, dan pengawet. Cocok untuk keluarga, hantaran, atau oleh-oleh. Mulai Rp 85.000 per ekor.
            </p>

            <div className="flex flex-wrap gap-4 pt-2">
              <button className="bg-[#2A6E48] hover:bg-[#0f291c] text-white font-bold px-6 py-3 rounded-xl transition cursor-pointer text-sm shadow-sm">
                Lihat Paket
              </button>
              <button className="bg-[#D93838] hover:bg-[#c22f2f] text-white font-bold px-6 py-3 rounded-xl transition cursor-pointer text-sm shadow-sm">
                Pesan Paket
              </button>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}