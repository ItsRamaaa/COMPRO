import React from 'react';

export default function OrderSuccess({ setCurrentPage }) {
  const handleWhatsApp = () => {
    const message = encodeURIComponent(`Halo Waroeng SR, saya ingin konfirmasi pesanan #WSR-1024`);
    window.open(`https://wa.me/6281229201970?text=${message}`, '_blank');
  };

  return (
    <section className="bg-[#F9F8F6] py-12 w-full font-['Plus_Jakarta_Sans',sans-serif]">
      <div className="w-full max-w-2xl mx-auto px-6 space-y-8">
        
        {/* Kotak Struk Pesanan */}
        <div className="bg-white rounded-3xl p-6 lg:p-8 shadow-sm border border-gray-100 space-y-6">
          <div className="text-center space-y-1 pb-4 border-b border-gray-100">
            <span className="text-xs text-gray-400 font-bold uppercase tracking-wider">Nomor Pesanan</span>
            <h3 className="text-2xl lg:text-3xl font-black text-[#133223]">
              #WSR-1024
            </h3>
          </div>

          <div className="space-y-3 text-sm">
            <div className="flex justify-between">
              <span className="text-gray-500">Tipe</span>
              <span className="font-bold text-[#133223]">Bawa pulang</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-500">Jam ambil (usulan Anda)</span>
              <span className="font-bold text-[#133223]">12.30 · menunggu konfirmasi</span>
            </div>
            <div className="flex justify-between text-gray-600">
              <span>Tengkleng Kambing x1</span>
              <span className="font-medium text-[#133223]">Rp 40.000</span>
            </div>
            <div className="flex justify-between text-gray-600">
              <span>Tongseng Kambing x1</span>
              <span className="font-medium text-[#133223]">Rp 30.000</span>
            </div>
            
            <div className="pt-3 border-t border-gray-100 flex justify-between font-bold text-gray-800">
              <span>Subtotal</span>
              <span>Rp 70.000</span>
            </div>
            
            <div className="flex justify-between text-[#D93838] font-medium text-xs">
              <span>Promo Makan Siang</span>
              <span>-Rp 5.000</span>
            </div>

            <div className="pt-3 border-t border-gray-100 flex justify-between items-center">
              <span className="font-bold text-base text-[#133223]">Total</span>
              <span className="font-black text-xl text-[#133223]">Rp 65.000</span>
            </div>

            <div className="pt-3 border-t border-gray-100 space-y-2 text-sm">
              <div className="flex justify-between">
                <span className="text-gray-500">Metode bayar</span>
                <span className="font-bold text-[#133223]">QRIS</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-gray-500">Status pembayaran</span>
                <span className="bg-[#FEF3C7] border border-[#FDE68A] text-[#92400E] text-xs font-bold px-3 py-1 rounded-full">
                  Menunggu verifikasi
                </span>
              </div>
            </div>
          </div>

          {/* Kotak Peringatan */}
          <div className="bg-[#FEF3C7] border border-[#FDE68A] text-[#92400E] text-xs p-4 rounded-xl leading-relaxed font-medium">
            Simpan nomor pesanan. Tunjukkan nomor pesanan dan bukti bayar ke kasir saat mengambil pesanan.
          </div>
        </div>

        {/* Tombol Aksi di Bawah Struk */}
        <div className="flex flex-col gap-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {/* Tombol Cek Status Pesanan memindahkan state ke halaman cek status */}
            <button 
              type="button"
              onClick={() => setCurrentPage('order-status-page')}
              className="bg-[#D93838] hover:bg-[#c22f2f] text-white font-bold py-3.5 px-6 rounded-xl transition cursor-pointer text-sm shadow-sm text-center"
            >
              Cek Status Pesanan
            </button>

            <button 
              type="button"
              onClick={handleWhatsApp}
              className="bg-white border border-gray-200 hover:bg-gray-50 text-[#133223] font-bold py-3.5 px-6 rounded-xl transition cursor-pointer text-sm shadow-sm text-center"
            >
              Hubungi Lewat WhatsApp
            </button>
          </div>

          <div className="text-center pt-2">
            <button 
              type="button"
              onClick={() => setCurrentPage('menu')}
              className="text-xs text-gray-500 hover:text-[#184029] font-medium transition cursor-pointer"
            >
              ← Kembali ke Menu
            </button>
          </div>
        </div>

      </div>
    </section>
  );
}