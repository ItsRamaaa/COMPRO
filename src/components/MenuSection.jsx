export default function MenuSection() {
  // Data menu rekomendasi jam makan siang
  const lunchMenus = [
    { name: "Tongseng Kambing", category: "Kambing", desc: "Olahan kambing berkuah", price: "Rp 30.000" },
    { name: "Gulai / Sop Ikan Patin", category: "Ikan", desc: "Kuah hangat", price: "Rp 15.000" },
    { name: "Nasi Goreng Kambing", category: "Kambing", desc: "Nasi goreng", price: "Rp 25.000" },
    { name: "Es Teh Manis", category: "Minuman", desc: "Segar", price: "Rp 5.000" },
  ];

  // Data menu favorit pelanggan (best seller)
  const bestSellers = [
    { name: "Tengkleng Kambing", category: "Kambing", desc: "Khas Jogja, bumbu rempah", price: "Rp 40.000", badge: "BEST SELLER" },
    { name: "Tongseng Kambing", category: "Kambing", desc: "Olahan kambing berkuah", price: "Rp 30.000", badge: "BEST SELLER" },
    { name: "Gulai / Sop Ikan Patin", category: "Ikan", desc: "Kuah hangat", price: "Rp 15.000", badge: "BEST SELLER" },
  ];

  return (
    <section className="bg-[#F9F8F6] py-12 w-full">
      <div className="w-full px-8 lg:px-16 space-y-16">
        
        {/* Banner Promo Makan Siang */}
        <div className="bg-gradient-to-r from-[#113825] via-[#1E523A] to-[#2E7D56] rounded-3xl p-8 lg:p-10 text-white relative overflow-hidden shadow-xl flex flex-col lg:flex-row items-center justify-between gap-6">
          <div className="space-y-3">
            <span className="bg-[#F59E0B] text-black text-[11px] font-bold px-3 py-1 rounded-full uppercase tracking-wider inline-block">
              PROMO MAKAN SIANG
            </span>
            <h3 className="text-2xl lg:text-3xl font-serif font-bold">
              Potongan Rp 5.000 untuk pembelian minimal Rp 50.000
            </h3>
            <p className="text-gray-100/90 text-sm">
              Berlaku 11.00 sampai 14.00 untuk pesanan online. Potongan dihitung otomatis di ringkasan pesanan.
            </p>
          </div>
          
          <div className="flex flex-col gap-2.5 shrink-0 w-full lg:w-56">
            <button className="bg-white text-[#133223] font-bold py-3 px-6 rounded-xl hover:bg-gray-100 transition shadow cursor-pointer text-sm text-center">
              Pesan Sekarang
            </button>
            <button className="bg-black/30 hover:bg-black/40 border border-white/10 text-white font-semibold py-3 px-6 rounded-xl transition cursor-pointer text-sm text-center backdrop-blur-sm">
              Lihat Menu Paket
            </button>
          </div>
        </div>

        {/* Section Rekomendasi Jam Makan Siang */}
        <div className="space-y-6">
          <div className="flex justify-between items-end">
            <div>
              <span className="text-[#D93838] text-sm font-extrabold uppercase tracking-widest">
                REKOMENDASI JAM MAKAN SIANG · 11.00 – 14.00
              </span>
              <h2 className="text-3xl lg:text-4xl font-serif font-bold text-[#133223] mt-1">
                Cocok untuk Santap Siang Anda
              </h2>
            </div>
            <a href="#" className="hidden md:flex items-center text-sm font-bold text-[#133223] hover:underline">
              Lihat seluruh menu →
            </a>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {lunchMenus.map((item, idx) => (
              <div key={idx} className="bg-white rounded-3xl p-5 shadow-sm border border-gray-100 flex flex-col justify-between hover:shadow-md transition">
                <div className="bg-[#EAEFEA] rounded-2xl h-48 relative flex items-center justify-center mb-4">
                  <span className="absolute top-3 right-3 bg-[#1C4632] text-white text-[10px] font-bold px-2.5 py-1 rounded-full">
                    {item.category}
                  </span>
                  <svg className="w-12 h-12 text-gray-400 opacity-40" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"></path></svg>
                </div>
                
                <div className="space-y-1 mb-4">
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
        </div>

        {/* Section Menu Favorit / Best Seller */}
        <div className="space-y-6 pt-6">
          <div className="flex justify-between items-end">
            <div>
              <span className="text-[#D93838] text-sm font-extrabold uppercase tracking-widest">
                PILIHAN PELANGGAN
              </span>
              <h2 className="text-3xl lg:text-4xl font-serif font-bold text-[#133223] mt-1">
                Menu Favorit (Best Seller)
              </h2>
            </div>
            <a href="#" className="hidden md:flex items-center text-sm font-bold text-[#133223] hover:underline">
              Lihat seluruh menu →
            </a>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {bestSellers.map((item, idx) => (
              <div key={idx} className="bg-white rounded-3xl p-6 shadow-sm border border-gray-100 flex flex-col justify-between hover:shadow-md transition">
                <div className="bg-[#EAEFEA] rounded-2xl h-60 relative flex items-center justify-center mb-5">
                  <span className="absolute top-4 left-4 bg-[#D93838] text-white text-[10px] font-bold px-3 py-1.5 rounded-full uppercase tracking-wider shadow">
                    {item.badge}
                  </span>
                  <span className="absolute top-4 right-4 bg-[#1C4632] text-white text-[10px] font-bold px-2.5 py-1 rounded-full">
                    {item.category}
                  </span>
                </div>
                
                <div className="space-y-1 mb-5">
                  <h4 className="font-bold text-xl text-[#133223]">{item.name}</h4>
                  <p className="text-sm text-gray-500">{item.desc}</p>
                </div>

                <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                  <div>
                    <span className="text-[11px] text-gray-400 block">Harga Porsi</span>
                    <span className="font-bold text-lg text-[#133223]">{item.price}</span>
                  </div>
                  <button className="bg-[#F0FDF4] border border-[#BCE4CD] text-[#0F5A3E] font-bold text-sm px-5 py-2.5 rounded-xl hover:bg-[#e6f7eb] transition cursor-pointer">
                    + Tambah
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}