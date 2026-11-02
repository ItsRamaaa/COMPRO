import React from 'react';

export default function CartDrawer({ isOpen, onClose, setCurrentPage }) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-hidden font-['Plus_Jakarta_Sans',sans-serif]">
      {/* Background Overlay dengan Gradasi Hijau Menyesuaikan Mockup */}
      <div 
        className="absolute inset-0 bg-gradient-to-r from-transparent via-[#133223]/20 to-[#133223]/60 backdrop-blur-[2px] transition-opacity"
        onClick={onClose}
      ></div>

      {/* Panel Drawer Samping Kanan */}
      <div className="absolute inset-y-0 right-0 max-w-full flex pl-10">
        <div className="w-screen max-w-md bg-white shadow-2xl flex flex-col">
          
          {/* Header Drawer */}
          <div className="p-6 bg-[#133223] text-white flex items-center justify-between">
            <div>
              <h2 className="font-bold text-lg">Keranjang Pesanan</h2>
              <p className="text-xs text-gray-300">Waroeng SR · Tengkleng Djowo Mbah Sum</p>
            </div>
            <button 
              onClick={onClose}
              className="w-8 h-8 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white font-bold transition cursor-pointer"
            >
              ✕
            </button>
          </div>

          {/* Body / Daftar Item Keranjang */}
          <div className="flex-1 overflow-y-auto p-6 space-y-6">
            
            {/* List Menu Item 1 */}
            <div className="flex items-center justify-between p-3 bg-[#F9F8F6] rounded-2xl border border-gray-100">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-emerald-100 rounded-xl flex-shrink-0 flex items-center justify-center text-[#133223] font-bold text-xs">
                  Foto
                </div>
                <div>
                  <h4 className="font-bold text-sm text-[#133223]">Tengkleng Kambing</h4>
                  <p className="text-xs text-gray-500 mt-0.5">Rp 40.000</p>
                </div>
              </div>
              <div className="flex items-center gap-2 bg-white px-3 py-1.5 rounded-xl border border-gray-200 text-xs font-bold">
                <button className="text-gray-400 hover:text-black cursor-pointer">-</button>
                <span>1</span>
                <button className="text-gray-400 hover:text-black cursor-pointer">+</button>
              </div>
            </div>

            {/* List Menu Item 2 */}
            <div className="flex items-center justify-between p-3 bg-[#F9F8F6] rounded-2xl border border-gray-100">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-emerald-100 rounded-xl flex-shrink-0 flex items-center justify-center text-[#133223] font-bold text-xs">
                  Foto
                </div>
                <div>
                  <h4 className="font-bold text-sm text-[#133223]">Tongseng Kambing</h4>
                  <p className="text-xs text-gray-500 mt-0.5">Rp 30.000</p>
                </div>
              </div>
              <div className="flex items-center gap-2 bg-white px-3 py-1.5 rounded-xl border border-gray-200 text-xs font-bold">
                <button className="text-gray-400 hover:text-black cursor-pointer">-</button>
                <span>1</span>
                <button className="text-gray-400 hover:text-black cursor-pointer">+</button>
              </div>
            </div>

            {/* Rincian Harga / Ringkasan */}
            <div className="pt-6 border-t border-gray-100 space-y-3 text-sm">
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
                <span className="font-black text-lg text-[#133223]">Rp 65.000</span>
              </div>
            </div>

          </div>

          {/* Footer Drawer: Tombol Lanjut ke Pesan Online */}
          <div className="p-6 bg-white border-t border-gray-100">
            <button 
              onClick={() => {
                onClose();
                if (setCurrentPage) setCurrentPage('pesan');
              }}
              className="w-full bg-[#184029] hover:bg-[#0f291c] text-white font-bold py-3.5 rounded-xl transition cursor-pointer text-sm shadow-sm text-center"
            >
              Lanjut ke Pesan Online
            </button>
          </div>

        </div>
      </div>
    </div>
  );
}