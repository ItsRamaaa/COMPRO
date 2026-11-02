import { useState } from 'react';
import CartDrawer from './CartDrawer'; // Pastikan path foldernya sesuai

export default function Navbar({ currentPage, setCurrentPage }) {
  // State buat ngontrol buka/tutup drawer keranjang pesanan
  const [isCartOpen, setIsCartOpen] = useState(false);

  // Fungsi helper untuk menentukan gaya tombol navigasi aktif atau tidak
  const getNavClass = (pageName) => {
    if (currentPage === pageName) {
      return "text-[#0F5A3E] font-bold border-b-[3px] border-[#0F5A3E] pb-1 transition-colors cursor-pointer";
    }
    return "text-gray-700 hover:text-[#0F5A3E] transition-colors pb-1 cursor-pointer";
  };

  return (
    <>
      <nav className="bg-[#FCFCFC] shadow-sm sticky top-0 z-50 w-full font-['Plus_Jakarta_Sans',sans-serif]">
        <div className="w-full px-8 lg:px-16 py-3.5 flex items-center justify-between">
          
          {/* Logo dan Identitas Restoran (Klik logo mengarah ke Beranda) */}
          <div 
            onClick={() => setCurrentPage('home')} 
            className="flex items-center space-x-3.5 shrink-0 cursor-pointer"
          >
            <div className="w-11 h-11 bg-[#0F5A3E] rounded-full flex flex-col items-center justify-center text-white shadow-sm overflow-hidden border border-emerald-800">
               <span className="text-[6.5px] font-bold tracking-tighter">WAROENG</span>
               <span className="text-xs font-black text-yellow-400 leading-none">SR</span>
            </div>
            
            <div className="flex flex-col justify-center">
              <h1 className="font-bold text-3xl leading-none text-[#133223] font-serif">
                Waroeng SR
              </h1>
              <span className="text-[10px] text-[#D93838] font-bold tracking-[0.12em] mt-1 uppercase">
                Tengkleng Djowo Mbah Sum
              </span>
            </div>
          </div>

          {/* Menu Navigasi dan Tombol Aksi */}
          <div className="hidden xl:flex items-center space-x-8">
            
            {/* Daftar Navigasi Utama */}
            <div className="flex items-center space-x-6 text-[15px] font-medium">
              <button onClick={() => setCurrentPage('home')} className={getNavClass('home')}>
                Beranda
              </button>
              <button onClick={() => setCurrentPage('menu')} className={getNavClass('menu')}>
                Menu
              </button>
              <button onClick={() => setCurrentPage('hantaran')} className={getNavClass('hantaran')}>
                Paket Hantaran
              </button>
              <button onClick={() => setCurrentPage('pesan')} className={getNavClass('pesan')}>
                Pesan
              </button>
              <button onClick={() => setCurrentPage('reservasi')} className={getNavClass('reservasi')}>
                Reservasi
              </button>
              <button onClick={() => setCurrentPage('cerita')} className={getNavClass('cerita')}>
                Cerita
              </button>
              <button onClick={() => setCurrentPage('wisata')} className={getNavClass('wisata')}>
                Wisata
              </button>
              <button onClick={() => setCurrentPage('kontak')} className={getNavClass('kontak')}>
                Kontak
              </button>
            </div>

            {/* Tombol Keranjang dan CTA Pesan */}
            <div className="flex items-center space-x-3 shrink-0">
              {/* Tombol Pesanan (Memicu Drawer Keranjang Kanan) */}
              <button 
                onClick={() => setIsCartOpen(true)}
                className="flex items-center space-x-2 bg-[#F2FBF5] border border-[#BCE4CD] px-4 py-2 rounded-xl text-sm text-[#0F5A3E] font-bold hover:bg-[#e6f7eb] transition cursor-pointer"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"></path>
                </svg>
                <span>Pesanan</span>
                <span className="bg-[#D93838] text-white text-[11px] w-5 h-5 flex items-center justify-center rounded-full font-bold">
                  2
                </span>
              </button>
              
              <button 
                onClick={() => setCurrentPage('menu')}
                className="bg-[#184029] text-white px-5 py-2.5 rounded-xl text-sm font-bold hover:bg-[#0f291c] transition cursor-pointer shadow-sm"
              >
                Pesan Sekarang
              </button>
            </div>

          </div>

        </div>
      </nav>

      {/* Komponen CartDrawer yang akan muncul saat tombol Pesanan diklik */}
      <CartDrawer 
        isOpen={isCartOpen} 
        onClose={() => setIsCartOpen(false)} 
        setCurrentPage={setCurrentPage} 
      />
    </>
  );
}