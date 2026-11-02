import React, { useState } from 'react';

export default function OrderStatusPage({ setCurrentPage }) {
  const [inputOrderNo, setInputOrderNo] = useState('');
  
  const [activeOrder, setActiveOrder] = useState({
    orderNo: '#WSR-1024',
    status: 'menunggu', 
    type: 'Bawa pulang',
    jamAmbil: '12.30',
    paymentMethod: 'QRIS',
    paymentStatus: 'Menunggu verifikasi',
    items: [
      { name: 'Tengkleng Kambing x1', price: 'Rp 40.000' },
      { name: 'Tongseng Kambing x1', price: 'Rp 30.000' }
    ],
    subtotal: 'Rp 70.000',
    promo: '-Rp 5.000',
    total: 'Rp 65.000'
  });

  const handleSearchOrder = (e) => {
    e.preventDefault();
    if (!inputOrderNo.trim()) return;

    setActiveOrder({
      orderNo: inputOrderNo.toUpperCase(),
      status: 'menunggu', 
      type: 'Bawa pulang',
      jamAmbil: '12.30',
      paymentMethod: 'QRIS',
      paymentStatus: 'Menunggu verifikasi',
      items: [
        { name: 'Tengkleng Kambing x1', price: 'Rp 40.000' },
        { name: 'Tongseng Kambing x1', price: 'Rp 30.000' }
      ],
      subtotal: 'Rp 70.000',
      promo: '-Rp 5.000',
      total: 'Rp 65.000'
    });
  };

  const handleWhatsApp = () => {
    const orderText = activeOrder ? ` pesanan ${activeOrder.orderNo}` : '';
    const message = encodeURIComponent(`Halo Waroeng SR, saya ingin konfirmasi terkait status${orderText}`);
    window.open(`https://wa.me/6281229201970?text=${message}`, '_blank');
  };

  return (
    <section className="bg-[#F9F8F6] py-12 w-full font-['Plus_Jakarta_Sans',sans-serif]">
      <div className="w-full px-8 lg:px-16 space-y-8">
        
        {/* Header Halaman */}
        <div className="space-y-1">
          <h2 className="text-3xl lg:text-4xl font-serif font-bold text-[#133223]">
            Status Pesanan
          </h2>
        </div>

        {/* Layout Utama 2 Kolom */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
          
          {/* Kolom Kiri: Detail Status Pesanan */}
          <div className="lg:col-span-2">
            {activeOrder && (
              <div className="bg-white rounded-3xl p-6 lg:p-8 shadow-sm border border-gray-100 space-y-6">
                
                {/* Nomor Pesanan & Tahapan */}
                <div className="space-y-4 pb-6 border-b border-gray-100">
                  <div className="flex justify-between items-center">
                    <span className="text-xs text-gray-400 font-bold">Nomor pesanan</span>
                    <span className="bg-[#E6F4EA] text-[#138833] text-xs font-bold px-3 py-1 rounded-full">
                      Aktif
                    </span>
                  </div>
                  <h3 className="text-2xl lg:text-3xl font-black text-[#133223]">
                    {activeOrder.orderNo}
                  </h3>

                  {/* Tahapan Status */}
                  <div className="space-y-2.5 pt-2">
                    <div className="flex items-center gap-3 text-sm font-bold text-[#184029]">
                      <span className="w-3 h-3 rounded-full bg-[#184029] inline-block shadow-sm"></span>
                      <span>Menunggu</span>
                    </div>
                    <div className="flex items-center gap-3 text-sm font-medium text-gray-400">
                      <span className="w-3 h-3 rounded-full bg-gray-200 inline-block"></span>
                      <span>Diproses</span>
                    </div>
                    <div className="flex items-center gap-3 text-sm font-medium text-gray-400">
                      <span className="w-3 h-3 rounded-full bg-gray-200 inline-block"></span>
                      <span>Selesai (siap diambil)</span>
                    </div>
                  </div>
                </div>

                {/* Detail Informasi */}
                <div className="space-y-3 text-sm">
                  <div className="flex justify-between">
                    <span className="text-gray-500">Tipe</span>
                    <span className="font-bold text-[#133223]">{activeOrder.type}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-500">Jam ambil (dikonfirmasi admin)</span>
                    <span className="font-bold text-[#133223]">{activeOrder.jamAmbil}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-500">Pembayaran</span>
                    <span className="font-bold text-[#133223]">{activeOrder.paymentMethod}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-500">Status pembayaran</span>
                    <span className="bg-[#FEF3C7] border border-[#FDE68A] text-[#92400E] text-xs font-bold px-3 py-1 rounded-full">
                      {activeOrder.paymentStatus}
                    </span>
                  </div>
                </div>

                {/* Rincian Menu */}
                <div className="space-y-3 pt-4 border-t border-gray-100 text-sm">
                  {activeOrder.items.map((item, idx) => (
                    <div key={idx} className="flex justify-between text-gray-600">
                      <span>{item.name}</span>
                      <span className="font-medium text-[#133223]">{item.price}</span>
                    </div>
                  ))}

                  <div className="pt-3 border-t border-gray-100 flex justify-between font-bold text-gray-800">
                    <span>Subtotal</span>
                    <span>{activeOrder.subtotal}</span>
                  </div>

                  <div className="flex justify-between text-[#D93838] font-medium text-xs">
                    <span>Promo Makan Siang</span>
                    <span>{activeOrder.promo}</span>
                  </div>

                  <div className="pt-3 border-t border-gray-100 flex justify-between items-center">
                    <span className="font-bold text-base text-[#133223]">Total</span>
                    <span className="font-black text-lg text-[#133223]">{activeOrder.total}</span>
                  </div>
                </div>

                {/* Catatan Pengambilan */}
                <div className="bg-[#FEF3C7] border border-[#FDE68A] text-[#92400E] text-xs p-4 rounded-xl leading-relaxed">
                  Ambil di resto. Tunjukkan nomor pesanan dan bukti pembayaran ke kasir. Jika bayar QRIS, pastikan nominal sesuai total pesanan.
                </div>

                <button 
                  type="button"
                  onClick={handleWhatsApp}
                  className="w-full bg-[#184029] hover:bg-[#0f291c] text-white font-bold py-3.5 rounded-xl transition cursor-pointer text-sm shadow-sm flex items-center justify-center gap-2"
                >
                  Hubungi Lewat WhatsApp
                </button>

              </div>
            )}
          </div>

          {/* Kolom Kanan: Form Cek Status Pesanan */}
          <div className="bg-white rounded-3xl p-6 lg:p-8 shadow-sm border border-gray-100 space-y-6 sticky top-8">
            <h3 className="text-lg font-bold text-[#133223]">Cek status pesanan</h3>

            <form onSubmit={handleSearchOrder} className="space-y-4">
              <div className="space-y-1.5">
                <label className="text-xs font-bold text-gray-700 block">Nomor pesanan</label>
                <input 
                  type="text" 
                  value={inputOrderNo}
                  onChange={(e) => setInputOrderNo(e.target.value)}
                  placeholder="#WSR-xxxx" 
                  required
                  className="w-full bg-[#F9F8F6] border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-[#184029] transition"
                />
              </div>

              <button 
                type="submit"
                className="w-full bg-[#184029] hover:bg-[#0f291c] text-white font-bold py-3 rounded-xl transition cursor-pointer text-sm shadow-sm"
              >
                Cek Status
              </button>
            </form>
          </div>

        </div>

      </div>
    </section>
  );
}