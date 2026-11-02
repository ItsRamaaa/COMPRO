export default function ReservasiPage({ setCurrentPage }) {
  return (
    <section className="bg-[#F9F8F6] py-12 w-full font-['Plus_Jakarta_Sans',sans-serif]">
      <div className="w-full px-8 lg:px-16 space-y-8">
        
        {/* Header Halaman */}
        <div className="space-y-1">
          <h2 className="text-3xl lg:text-4xl font-serif font-bold text-[#133223]">
            Reservasi Meja
          </h2>
        </div>

        {/* Layout Grid Utama 2 Kolom */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          
          {/* Kolom Kiri: Form Isian Reservasi Meja (Lebar 2 Grid) */}
          <div className="lg:col-span-2 bg-white rounded-3xl p-6 lg:p-8 shadow-sm border border-gray-100 space-y-6">
            <h3 className="text-lg font-bold text-[#133223]">Reservasi Meja</h3>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-1.5">
                <label className="text-xs font-bold text-gray-600 block">Nama</label>
                <input 
                  type="text" 
                  placeholder="Nama pemesan" 
                  className="w-full bg-gray-50 border border-gray-200 text-sm rounded-xl px-4 py-2.5 focus:outline-none focus:border-[#133223]"
                />
              </div>
              <div className="space-y-1.5">
                <label className="text-xs font-bold text-gray-600 block">Nomor WhatsApp</label>
                <input 
                  type="text" 
                  placeholder="08xx" 
                  className="w-full bg-gray-50 border border-gray-200 text-sm rounded-xl px-4 py-2.5 focus:outline-none focus:border-[#133223]"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="space-y-1.5">
                <label className="text-xs font-bold text-gray-600 block">Tanggal</label>
                <input 
                  type="text" 
                  placeholder="dd/mm/yyyy" 
                  className="w-full bg-gray-50 border border-gray-200 text-sm rounded-xl px-4 py-2.5 focus:outline-none focus:border-[#133223]"
                />
              </div>
              <div className="space-y-1.5">
                <label className="text-xs font-bold text-gray-600 block">Waktu</label>
                <input 
                  type="text" 
                  placeholder="Contoh: 19.00" 
                  className="w-full bg-gray-50 border border-gray-200 text-sm rounded-xl px-4 py-2.5 focus:outline-none focus:border-[#133223]"
                />
              </div>
              <div className="space-y-1.5">
                <label className="text-xs font-bold text-gray-600 block">Jumlah orang</label>
                <input 
                  type="number" 
                  placeholder="Contoh: 4" 
                  className="w-full bg-gray-50 border border-gray-200 text-sm rounded-xl px-4 py-2.5 focus:outline-none focus:border-[#133223]"
                />
              </div>
            </div>

            <div className="space-y-1.5">
              <label className="text-xs font-bold text-gray-600 block">Catatan</label>
              <textarea 
                rows="3" 
                placeholder="Contoh: dekat jendela" 
                className="w-full bg-gray-50 border border-gray-200 text-sm rounded-xl p-4 focus:outline-none focus:border-[#133223]"
              ></textarea>
            </div>

            {/* Tombol Ajukan Reservasi */}
            <button 
              type="button"
              onClick={() => setCurrentPage && setCurrentPage('order-success')}
              className="w-full bg-[#D93838] hover:bg-[#c22f2f] text-white font-bold py-3.5 rounded-xl transition cursor-pointer text-sm shadow-sm"
            >
              Ajukan Reservasi
            </button>
          </div>

          {/* Kolom Kanan: Panduan Cara Kerja (Sticky Sidebar) */}
          <div className="space-y-6">
            <div className="bg-white rounded-3xl p-6 lg:p-8 shadow-sm border border-gray-100 space-y-6 sticky top-24">
              <h3 className="text-lg font-bold text-[#133223]">Cara kerja</h3>
              
              <ol className="space-y-3 text-sm text-gray-600 list-decimal list-inside leading-relaxed">
                <li>Ajukan tanggal, waktu, dan jumlah orang[cite: 7].</li>
                <li>Admin mengonfirmasi lewat WhatsApp[cite: 7].</li>
                <li>Datang sesuai jadwal[cite: 7].</li>
              </ol>

              {/* Status Badge */}
              <div className="bg-[#FEF3C7] border border-[#FDE68A] text-[#92400E] p-4 rounded-2xl text-xs font-bold flex items-center justify-between">
                <span>Status: Menunggu konfirmasi</span>[cite: 7]
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}