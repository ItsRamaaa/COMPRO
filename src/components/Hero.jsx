export default function Hero({ setCurrentPage }) {
  return (
    <section className="text-white bg-[#133223] pt-8 lg:pt-12 pb-12 w-full overflow-hidden">
      
      <div className="w-full px-8 lg:px-16 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-center">
        
        <div className="lg:col-span-6 space-y-5 xl:pr-10">
          
          <div className="inline-block border border-emerald-500/30 text-emerald-400 text-[10px] tracking-widest px-4 py-2 rounded-full uppercase font-bold">
            MASAKAN JAWA DAN YOGYAKARTA SEJAK 2015
          </div>
          
          <h2 className="text-4xl xl:text-[4rem] font-serif font-bold leading-[1.15]">
            Hangatnya Rasa <br />
            Yogyakarta di <i className="font-serif italic font-normal text-emerald-200">Rempoah,</i> <br />
            <i className="font-serif italic font-normal text-emerald-200">Baturraden.</i>
          </h2>
          
          <p className="text-gray-300 text-sm md:text-base max-w-xl leading-relaxed">
            Tengkleng, tongseng, dan sate kambing dengan racikan rempah khas Jawa. 
            Pesan online, ambil di resto, atau reservasi meja untuk keluarga Anda.
          </p>

          <div className="flex flex-wrap gap-4 pt-1">
            <button 
              onClick={() => setCurrentPage && setCurrentPage('menu')}
              className="bg-[#F04444] hover:bg-red-500 text-white font-bold text-base px-8 py-3.5 rounded-xl shadow-lg transition cursor-pointer"
            >
              Pesan Online
            </button>
            <button 
              onClick={() => setCurrentPage && setCurrentPage('reservasi')}
              className="border border-gray-400 hover:bg-white/10 text-white font-bold text-base px-8 py-3.5 rounded-xl transition cursor-pointer"
            >
              Reservasi Meja
            </button>
          </div>

          <div className="flex items-center space-x-4 pt-2 text-sm text-gray-300">
            <span>Kami juga tersedia di:</span>
            <div className="bg-white text-black px-6 py-3 rounded-xl font-bold text-sm hover:bg-gray-100 cursor-pointer shadow-sm transition">
              GoFood
            </div>
            <div className="bg-white text-black px-6 py-3 rounded-xl font-bold text-sm hover:bg-gray-100 cursor-pointer shadow-sm transition">
              GrabFood
            </div>
          </div>

          <div className="grid grid-cols-3 gap-6 pt-6 border-t border-white/20 mt-4">
            <div>
              <p className="font-bold text-lg text-white">Sejak 2015</p>
              <p className="text-gray-400 text-xs mt-0.5">Berdiri di Purwokerto</p>
            </div>
            <div>
              <p className="font-bold text-lg text-white">100% Halal</p>
              <p className="text-gray-400 text-xs mt-0.5">Olahan dan bahan</p>
            </div>
            <div>
              <p className="font-bold text-lg text-white">09.00 – 20.00</p>
              <p className="text-gray-400 text-xs mt-0.5">Setiap hari, WIB</p>
            </div>
          </div>
        </div>

        <div className="lg:col-span-6 relative mt-6 lg:mt-0">
          
          <div className="rounded-3xl overflow-hidden shadow-2xl relative">
            <img 
              src="src/assets/gambar_uji_coba.png" 
              alt="Waroeng SR Suasana Malam" 
              className="w-full h-[500px] xl:h-[600px] object-cover"
            />
            <div className="absolute inset-0 bg-black/10"></div>
          </div>

          <div className="absolute top-6 -left-6 bg-white text-gray-800 px-5 py-4 rounded-2xl shadow-xl flex items-center w-56">
            <div>
              <p className="font-bold text-[15px] leading-tight text-gray-900">100% Halal</p>
              <p className="text-[12px] text-gray-500 mt-1">Olahan kambing khas Jawa</p>
            </div>
          </div>

          {/* MENU CARD */}
          <div className="absolute bottom-8 left-8 right-8 font-['Plus_Jakarta_Sans',sans-serif] bg-[#0E3B28]/90 backdrop-blur-sm border border-white/10 rounded-[22px] px-[26px] pt-7 pb-6 shadow-2xl">
            <span className="inline-flex items-center h-[34px] px-4 rounded-[10px] border border-emerald-400/40 bg-[#0D3A2A] text-[#6EE7B7] text-[13px] font-bold tracking-[0.2em] uppercase">
              MENU PALING DICARI
            </span>

            <div className="mt-[14px] flex items-end justify-between">
              <div>
                <h3 className="font-bold text-white text-[26px] leading-none">Tengkleng Kambing</h3>
                <p className="text-[17px] text-gray-200/90 leading-none mt-2">Khas Jogja, bumbu rempah</p>
              </div>
              <div className="text-[#FBBF24] font-bold text-[28px] leading-none">
                Rp 40rb
              </div>
            </div>
          </div>

          {/* PRE-ORDER */}
          <div className="absolute -bottom-7 -right-6 w-[304px] h-[90px] font-['Plus_Jakarta_Sans',sans-serif] bg-[#D32F2F] border-[3px] border-[#0A2216] rounded-3xl shadow-xl px-6 flex flex-col justify-center z-10">
            <p className="font-bold text-[17px] leading-tight text-white">Pre-order tersedia</p>
            <p className="text-[14px] leading-tight text-white/90 mt-1">Ambil di resto atau makan di tempat</p>
          </div>

        </div>
      </div>
    </section>
  );
}