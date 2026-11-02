export default function Footer() {
  // Komponen footer bagian bawah website
  return (
    <footer className="bg-[#0C2419] text-white pt-16 pb-12 w-full border-t border-emerald-950">
      <div className="w-full px-8 lg:px-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-12 pb-12 border-b border-white/10">
        
        {/* Kolom 1: Logo & Deskripsi (Span 5 kolom) */}
        <div className="lg:col-span-5 space-y-4">
          <div className="flex items-center space-x-3.5">
            <div className="w-11 h-11 bg-[#0F5A3E] rounded-full flex flex-col items-center justify-center text-white shadow-sm overflow-hidden border border-emerald-800">
               <span className="text-[6.5px] font-bold tracking-tighter">WAROENG</span>
               <span className="text-xs font-black text-yellow-400 leading-none">SR</span>
            </div>
            
            <div className="flex flex-col justify-center">
              <h2 className="font-bold text-3xl leading-none text-white font-serif">
                Waroeng SR
              </h2>
              <span className="text-[10px] text-[#E05252] font-bold tracking-[0.12em] mt-1 uppercase">
                Tengkleng Djowo Mbah Sum
              </span>
            </div>
          </div>

          <p className="text-gray-300 text-sm leading-relaxed max-w-sm pt-2">
            Rumah makan halal bermasakan Jawa dan Yogyakarta, berdiri sejak 2015 dan kini di Rempoah, Baturraden.
          </p>
        </div>

        {/* Kolom 2: Navigasi Cepat (Span 3 kolom) */}
        <div className="lg:col-span-3 space-y-4">
          <h3 className="text-emerald-400 text-xs font-bold tracking-[0.2em] uppercase">
            NAVIGASI CEPAT
          </h3>
          <ul className="space-y-2.5 text-sm text-gray-300">
            <li><a href="#" className="hover:text-white transition-colors">Beranda</a></li>
            <li><a href="#" className="hover:text-white transition-colors">Menu</a></li>
            <li><a href="#" className="hover:text-white transition-colors">Paket Hantaran</a></li>
            <li><a href="#" className="hover:text-white transition-colors">Pesan Online</a></li>
            <li><a href="#" className="hover:text-white transition-colors">Reservasi Meja</a></li>
            <li><a href="#" className="hover:text-white transition-colors">Cerita</a></li>
            <li><a href="#" className="hover:text-white transition-colors">Wisata</a></li>
            <li><a href="#" className="hover:text-white transition-colors">Kontak dan Lokasi</a></li>
          </ul>
        </div>

        {/* Kolom 3: Jam dan Kontak (Span 4 kolom) */}
        <div className="lg:col-span-4 space-y-4">
          <h3 className="text-emerald-400 text-xs font-bold tracking-[0.2em] uppercase">
            JAM DAN KONTAK
          </h3>
          <div className="space-y-2.5 text-sm text-gray-300">
            <p>Setiap hari 09.00 – 20.00 WIB</p>
            <p>Jl. Raya Baturraden, Rempoah, Banyumas</p>
            <p className="text-white font-medium pt-1">WhatsApp 0812-2920-1970 · @tengklengdjowombahsum.id</p>
          </div>
        </div>

      </div>

      {/* Bagian Hak Cipta / Bawah */}
      <div className="w-full px-8 lg:px-16 pt-8 text-center text-xs text-gray-400">
        <p>&copy; {new Date().getFullYear()} Waroeng SR. Hak Cipta Dilindungi.</p>
      </div>
    </footer>
  );
}