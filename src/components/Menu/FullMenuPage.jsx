export default function FullMenuPage({ setCurrentPage }) {
  // Data daftar menu lengkap dengan kategorinya
  const menuList = [
    { name: "Tengkleng Kambing", category: "Kambing", desc: "Khas Jogja, bumbu rempah", price: "Rp 40.000", badge: "BEST SELLER" },
    { name: "Tongseng Kambing", category: "Kambing", desc: "Olahan kambing berkuah", price: "Rp 30.000", badge: "BEST SELLER" },
    { name: "Sate Kambing 10 tusuk", category: "Kambing", desc: "Bumbu kecap", price: "Rp 50.000", badge: null },
    { name: "Gulai / Sop Ikan Patin", category: "Ikan", desc: "Kuah hangat", price: "Rp 15.000", badge: "BEST SELLER" },
    { name: "Mangut Lele", category: "Ikan", desc: "Pedas gurih", price: "Rp 15.000", badge: null },
    { name: "Bakmi Godog", category: "Bakmi", desc: "Bakmi khas Jogja", price: "Rp 20.000", badge: null },
    { name: "Nasi Goreng Kambing", category: "Kambing", desc: "Nasi goreng", price: "Rp 25.000", badge: null },
    { name: "Es Kopi Gula Aren", category: "Minuman", desc: "Kopi susu gula aren", price: "Rp 15.000", badge: null },
  ];

  return (
    <section className="bg-[#F9F8F6] py-12 w-full font-['Plus_Jakarta_Sans',sans-serif]">
      <div className="w-full px-8 lg:px-16 space-y-8">
        
        {/* Banner Header Halaman Menu */}
        <div className="bg-[#133223] rounded-3xl p-8 lg:p-10 text-white shadow-xl space-y-3">
          <h2 className="text-3xl lg:text-4xl font-serif font-bold">
            Menu Waroeng SR
          </h2>
          <p className="text-gray-300 text-sm md:text-base">
            Pilih menu favorit Anda untuk dibawa pulang atau makan di tempat. Ingin diantar? Pesan lewat GoFood atau GrabFood.
          </p>
        </div>

        {/* Kotak Info Rekomendasi Jam Makan Siang */}
        <div className="bg-[#FEF3C7] border border-[#FDE68A] text-[#92400E] px-6 py-3.5 rounded-2xl text-sm font-medium">
          <span className="font-bold">Rekomendasi jam makan siang:</span> Tongseng Kambing · Gulai / Sop Ikan Patin · Nasi Goreng Kambing · Es Teh Manis
        </div>

        {/* Bar Navigasi Kategori & Pencarian Menu */}
        <div className="bg-white rounded-3xl p-6 shadow-sm border border-gray-100 flex flex-col lg:flex-row items-center justify-between gap-4">
          <div className="flex flex-wrap items-center gap-2 w-full lg:w-auto">
            <button className="bg-[#133223] text-white font-bold text-xs px-5 py-2.5 rounded-full shadow transition cursor-pointer">Semua</button>
            <button className="bg-gray-100 hover:bg-gray-200 text-gray-700 font-semibold text-xs px-5 py-2.5 rounded-full transition cursor-pointer">Best Seller</button>
            <button className="bg-gray-100 hover:bg-gray-200 text-gray-700 font-semibold text-xs px-5 py-2.5 rounded-full transition cursor-pointer">Kambing</button>
            <button className="bg-gray-100 hover:bg-gray-200 text-gray-700 font-semibold text-xs px-5 py-2.5 rounded-full transition cursor-pointer">Ikan</button>
            <button className="bg-gray-100 hover:bg-gray-200 text-gray-700 font-semibold text-xs px-5 py-2.5 rounded-full transition cursor-pointer">Ayam dan Bebek</button>
            <button className="bg-gray-100 hover:bg-gray-200 text-gray-700 font-semibold text-xs px-5 py-2.5 rounded-full transition cursor-pointer">Bakmi dan Oseng</button>
            <button className="bg-gray-100 hover:bg-gray-200 text-gray-700 font-semibold text-xs px-5 py-2.5 rounded-full transition cursor-pointer">Minuman</button>
            <button className="bg-gray-100 hover:bg-gray-200 text-gray-700 font-semibold text-xs px-5 py-2.5 rounded-full transition cursor-pointer">Paket Hantaran</button>
          </div>

          <div className="w-full lg:w-72 relative">
            <span className="absolute inset-y-0 left-0 flex items-center pl-4 text-gray-400">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
            </span>
            <input 
              type="text" 
              placeholder="Cari menu..." 
              className="w-full bg-gray-50 border border-gray-200 text-sm rounded-2xl pl-10 pr-4 py-2.5 focus:outline-none focus:border-[#133223] transition"
            />
          </div>
        </div>

        {/* Grid Daftar Menu Lengkap */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {menuList.map((item, idx) => (
            <div key={idx} className="bg-white rounded-3xl p-5 shadow-sm border border-gray-100 flex flex-col justify-between hover:shadow-md transition">
              <div className="bg-[#EAEFEA] rounded-2xl h-52 relative flex items-center justify-center mb-4">
                {item.badge && (
                  <span className="absolute top-4 left-4 bg-[#D93838] text-white text-[10px] font-bold px-3 py-1.5 rounded-full uppercase tracking-wider shadow">
                    {item.badge}
                  </span>
                )}
                <span className="absolute top-4 right-4 bg-[#1C4632] text-white text-[10px] font-bold px-2.5 py-1 rounded-full">
                  {item.category}
                </span>
              </div>
              
              <div className="space-y-1 mb-5">
                <h4 className="font-bold text-lg text-[#133223]">{item.name}</h4>
                <p className="text-xs text-gray-500">{item.desc}</p>
              </div>

              <div className="flex items-center justify-between pt-3 border-t border-gray-100">
                <div>
                  <span className="text-[10px] text-gray-400 block">Harga Porsi</span>
                  <span className="font-bold text-base text-[#133223]">{item.price}</span>
                </div>
                <button className="bg-[#F0FDF4] border border-[#BCE4CD] text-[#0F5A3E] font-bold text-xs px-4 py-2 rounded-xl hover:bg-[#e6f7eb] transition cursor-pointer">
                  + Tambah
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Banner Bawah: Mencari paket untuk keluarga atau oleh-oleh? */}
        <div className="bg-white rounded-3xl p-6 lg:p-8 shadow-sm border border-gray-100 flex flex-col md:flex-row items-center justify-between gap-6 mt-8">
          <div className="space-y-1 text-center md:text-left">
            <h4 className="font-bold text-xl text-[#133223]">
              Mencari paket untuk keluarga atau oleh-oleh?
            </h4>
            <p className="text-gray-500 text-sm">
              Lihat Paket Ayam, Entok, Bebek Panggang untuk makan di tempat (4 orang) maupun hantaran.
            </p>
          </div>
          <button 
            onClick={() => setCurrentPage && setCurrentPage('hantaran')}
            className="bg-[#D93838] hover:bg-[#c22f2f] text-white font-bold px-6 py-3.5 rounded-xl transition cursor-pointer text-sm shadow-sm shrink-0"
          >
            Lihat Paket Hantaran
          </button>
        </div>

      </div>
    </section>
  );
}