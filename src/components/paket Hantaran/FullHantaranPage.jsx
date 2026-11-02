export default function FullHantaranPage({ setCurrentPage }) {
  return (
    <section className="bg-[#F9F8F6] py-12 w-full font-['Plus_Jakarta_Sans',sans-serif]">
      <div className="w-full px-8 lg:px-16 space-y-10">
        
        {/* Header Section */}
        <div className="space-y-3">
          <span className="text-[#D93838] text-xs font-extrabold uppercase tracking-widest">
            PAKET PANGGANG DAN HANTARAN
          </span>
          <h2 className="text-3xl lg:text-4xl font-serif font-bold text-[#133223]">
            Ayam, Entok, Bebek Panggang
          </h2>
          <p className="text-gray-600 text-sm md:text-base leading-relaxed max-w-4xl">
            Panggang kuali tradisional, tanpa santan, minyak, dan pengawet. 100% halal. Cocok untuk stok kulkas, hantaran, atau oleh-oleh. Menerima pesanan aqiqah, arisan, dan silaturahmi keluarga.
          </p>
        </div>

        {/* Grid 2 Gambar Dokumentasi / Preview */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="rounded-3xl overflow-hidden h-72 lg:h-80 bg-gray-100 relative shadow-sm border border-gray-100">
            <img 
              src="src/assets/gambar_2.png" 
              alt="Contoh hantaran" 
              className="w-full h-full object-cover"
            />
            <span className="absolute bottom-4 left-4 bg-black/60 text-white text-xs px-3 py-1.5 rounded-full backdrop-blur-sm">
              Contoh hantaran
            </span>
          </div>

          <div className="rounded-3xl overflow-hidden h-72 lg:h-80 bg-gray-100 relative shadow-sm border border-gray-100">
            <img 
              src="src/assets/gambar_3.png" 
              alt="Aneka lauk untuk acara keluarga" 
              className="w-full h-full object-cover"
            />
            <span className="absolute bottom-4 left-4 bg-black/60 text-white text-xs px-3 py-1.5 rounded-full backdrop-blur-sm">
              Aneka lauk untuk acara keluarga
            </span>
          </div>
        </div>

        {/* Grid 2 Kartu Pilihan Paket & Harga */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          
          {/* Kartu 1: Paket Makan di Tempat */}
          <div className="bg-white rounded-3xl p-8 shadow-sm border border-gray-100 space-y-6 flex flex-col justify-between">
            <div className="space-y-4">
              <div>
                <h3 className="text-xl font-bold text-[#133223]">Paket Makan di Tempat (4 orang)</h3>
                <p className="text-sm text-gray-500 mt-1">Ayam, entok, atau bebek panggang utuh, nasi, dan es teh.</p>
              </div>

              <div className="space-y-3 pt-2">
                <div className="flex justify-between items-center py-2.5 border-b border-gray-100 text-sm">
                  <span className="text-gray-600 font-medium">7–9 ons</span>
                  <span className="font-bold text-[#133223]">Rp 125.000</span>
                </div>
                <div className="flex justify-between items-center py-2.5 text-sm">
                  <span className="text-gray-600 font-medium">1–1,2 kg</span>
                  <span className="font-bold text-[#133223]">Rp 150.000</span>
                </div>
              </div>
            </div>
          </div>

          {/* Kartu 2: Paket Hantaran / Oleh-oleh */}
          <div className="bg-white rounded-3xl p-8 shadow-sm border border-gray-100 space-y-6">
            <div className="space-y-4">
              <div>
                <h3 className="text-xl font-bold text-[#133223]">Paket Hantaran / Oleh-oleh</h3>
                <p className="text-sm text-gray-500 mt-1">Harga sama, boleh campur (mix).</p>
              </div>

              <div className="space-y-4 pt-2">
                {/* Kategori Berat 7-9 ons */}
                <div>
                  <h4 className="text-xs font-extrabold text-[#D93838] uppercase tracking-wider mb-2">Berat 7–9 ons</h4>
                  <div className="space-y-2.5 text-sm">
                    <div className="flex justify-between items-center py-1.5 border-b border-gray-100">
                      <span className="text-gray-600">1 ekor</span>
                      <span className="font-bold text-[#133223]">Rp 85.000</span>
                    </div>
                    <div className="flex justify-between items-center py-1.5 border-b border-gray-100">
                      <span className="text-gray-600">2 ekor</span>
                      <span className="font-bold text-[#133223]">Rp 160.000</span>
                    </div>
                    <div className="flex justify-between items-center py-1.5">
                      <span className="text-gray-600">3 ekor (bonus packaging)</span>
                      <span className="font-bold text-[#133223]">Rp 225.000</span>
                    </div>
                  </div>
                </div>

                {/* Kategori Berat 1-1,2 kg */}
                <div className="pt-2">
                  <h4 className="text-xs font-extrabold text-[#D93838] uppercase tracking-wider mb-2">Berat 1–1,2 kg</h4>
                  <div className="space-y-2.5 text-sm">
                    <div className="flex justify-between items-center py-1.5 border-b border-gray-100">
                      <span className="text-gray-600">1 ekor</span>
                      <span className="font-bold text-[#133223]">Rp 115.000</span>
                    </div>
                    <div className="flex justify-between items-center py-1.5 border-b border-gray-100">
                      <span className="text-gray-600">2 ekor</span>
                      <span className="font-bold text-[#133223]">Rp 220.000</span>
                    </div>
                    <div className="flex justify-between items-center py-1.5">
                      <span className="text-gray-600">3 ekor (bonus packaging)</span>
                      <span className="font-bold text-[#133223]">Rp 315.000</span>
                    </div>
                  </div>
                </div>

              </div>
            </div>
          </div>

        </div>

        {/* Card Bawah: Cara Memesan */}
        <div className="bg-white rounded-3xl p-8 shadow-sm border border-gray-100 space-y-6">
          <div className="space-y-2">
            <h3 className="text-xl font-bold text-[#133223]">Cara memesan</h3>
            <p className="text-gray-600 text-sm md:text-base leading-relaxed">
              Pesan lewat website (pre-order, paling lambat H-1) atau WhatsApp 0812-2920-1970. Bisa diambil di resto atau dikirim via Go Send, Grab Express, atau Shopee. Ongkir ditanggung pembeli dan dikonfirmasi admin.
            </p>
          </div>

          <div className="flex flex-wrap gap-4 pt-2">
            <button 
              onClick={() => setCurrentPage && setCurrentPage('hantaran-checkout')}
              className="bg-[#D93838] hover:bg-[#c22f2f] text-white font-bold px-6 py-3.5 rounded-xl transition cursor-pointer text-sm shadow-sm"
            >
              Pesan Paket Lewat Website
            </button>
            <button 
              onClick={() => window.open('https://wa.me/6281229201970', '_blank')}
              className="bg-white border border-gray-300 text-[#133223] hover:bg-gray-50 font-bold px-6 py-3.5 rounded-xl transition cursor-pointer text-sm shadow-sm"
            >
              Tanya Lewat WhatsApp
            </button>
          </div>
        </div>

      </div>
    </section>
  );
}