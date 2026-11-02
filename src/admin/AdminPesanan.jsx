import React, { useState } from 'react';

export default function AdminPesanan() {
  // State tab aktif untuk filter pesanan
  const [activeTab, setActiveTab] = useState('Semua');

  // Data dummy daftar pesanan masuk
  const orders = [
    { nomor: '#WSR-1024', pemesan: 'Budi', tipe: 'Bawa pulang', jamAmbil: '12.30', info: 'Website · bawa pulang · 12.30 · QRIS perlu verifikasi', status: 'Menunggu', badgeColor: 'bg-amber-100 text-amber-800' },
    { nomor: '#WSR-1025', pemesan: 'Rina', tipe: 'Paket Hantaran', jamAmbil: '14.00', info: 'Website · paket hantaran · kirim (GoSend)', status: 'Konfirmasi ongkir', badgeColor: 'bg-orange-100 text-orange-800' },
    { nomor: '#WSR-1026', pemesan: 'Dewi', tipe: 'Makan di tempat', jamAmbil: '18.00', info: 'Website · paket makan di tempat · tiba 18.00', status: 'Menunggu', badgeColor: 'bg-amber-100 text-amber-800' },
    { nomor: '#WSR-1027', pemesan: 'Meja 5', tipe: 'Makan di tempat', jamAmbil: 'Segera', info: 'Kasir (manual) · makan di tempat · tunai', status: 'Diproses', badgeColor: 'bg-blue-100 text-blue-800' },
    { nomor: '#WSR-1023', pemesan: 'Sari', tipe: 'Makan di tempat', jamAmbil: '13.00', info: 'Website · makan di tempat · tiba 13.00', status: 'Diproses', badgeColor: 'bg-blue-100 text-blue-800' },
    { nomor: '#WSR-1022', pemesan: 'Andi', tipe: 'Bawa pulang', jamAmbil: '11.30', info: 'Website · bawa pulang · QRIS lunas', status: 'Selesai', badgeColor: 'bg-emerald-100 text-emerald-800' },
  ];

  // Filter data pesanan sesuai tab aktif
  const filteredOrders = activeTab === 'Semua' 
    ? orders 
    : orders.filter(ord => ord.status.toLowerCase() === activeTab.toLowerCase());

  // State pesanan yang sedang dipilih di panel detail
  const [selectedOrder, setSelectedOrder] = useState(orders[0]);

  // List menu tab status
  const tabs = ['Semua', 'Menunggu', 'Konfirmasi ongkir', 'Diproses', 'Selesai'];

  return (
    <div className="space-y-6 max-w-7xl mx-auto font-['Plus_Jakarta_Sans',sans-serif]">
      
      {/* Header halaman */}
      <div className="flex justify-between items-center">
        <h2 className="text-3xl font-serif font-bold text-[#133223]">
          Pesanan Masuk
        </h2>
        <button 
          onClick={() => alert('Fitur Tambah Pesanan Manual')}
          className="bg-[#D93838] hover:bg-red-600 text-white font-bold px-5 py-2.5 rounded-xl text-sm shadow-sm transition cursor-pointer"
        >
          + Pesanan Manual
        </button>
      </div>

      {/* Tombol filter tab */}
      <div className="flex flex-wrap gap-2">
        {tabs.map((tab) => (
          <button
            key={tab}
            onClick={() => {
              setActiveTab(tab);
              const matching = tab === 'Semua' ? orders : orders.filter(o => o.status.toLowerCase() === tab.toLowerCase());
              if (matching.length > 0) setSelectedOrder(matching[0]);
            }}
            className={`px-4 py-2 rounded-xl text-xs font-bold transition cursor-pointer ${
              activeTab === tab 
                ? 'bg-[#133223] text-white shadow-sm' 
                : 'bg-white text-gray-600 border border-gray-200 hover:bg-gray-50'
            }`}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* Grid layout utama */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
        
        {/* Kolom kiri: list pesanan */}
        <div className="lg:col-span-5 space-y-3">
          {filteredOrders.length > 0 ? (
            filteredOrders.map((ord, idx) => (
              <div 
                key={idx}
                onClick={() => setSelectedOrder(ord)}
                className={`p-4 rounded-2xl bg-white border transition cursor-pointer space-y-2 shadow-sm ${
                  selectedOrder?.nomor === ord.nomor ? 'border-[#133223] ring-1 ring-[#133223]' : 'border-gray-100 hover:border-gray-300'
                }`}
              >
                <div className="flex justify-between items-center">
                  <span className="font-bold text-sm text-[#133223]">{ord.nomor} · {ord.pemesan}</span>
                  <span className={`text-[10px] font-bold px-2.5 py-1 rounded-full ${ord.badgeColor}`}>
                    {ord.status}
                  </span>
                </div>
                <p className="text-xs text-gray-500">{ord.info}</p>
              </div>
            ))
          ) : (
            <div className="bg-white p-8 rounded-2xl text-center text-gray-400 text-xs border border-gray-100">
              Tidak ada pesanan dengan status "{activeTab}".
            </div>
          )}
        </div>

        {/* Kolom kanan: detail pesanan */}
        <div className="lg:col-span-7 bg-white rounded-3xl p-6 lg:p-8 shadow-sm border border-gray-100 space-y-6">
          
          {selectedOrder ? (
            <>
              <div className="flex justify-between items-start border-b border-gray-100 pb-4">
                <div>
                  <h3 className="font-bold text-lg text-[#133223]">{selectedOrder.nomor} · {selectedOrder.pemesan}</h3>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4 text-sm">
                <div>
                  <span className="text-xs text-gray-400 block">Tipe</span>
                  <span className="font-semibold text-gray-800">{selectedOrder.tipe}</span>
                </div>
                <div>
                  <span className="text-xs text-gray-400 block">Jam ambil</span>
                  <span className="font-semibold text-gray-800">{selectedOrder.jamAmbil}</span>
                </div>
              </div>

              <div className="space-y-2 pt-2 border-t border-gray-100 text-sm">
                <div className="flex justify-between text-gray-700">
                  <span>Tengkleng Kambing x1</span>
                  <span>Rp 40.000</span>
                </div>
                <div className="flex justify-between text-gray-700">
                  <span>Tongseng Kambing x1</span>
                  <span>Rp 30.000</span>
                </div>
                <div className="flex justify-between text-[#D93838] text-xs font-medium">
                  <span>Promo Makan Siang</span>
                  <span>-Rp 5.000</span>
                </div>
              </div>

              <div className="pt-4 border-t border-gray-100 space-y-2 text-sm">
                <div className="flex justify-between items-center">
                  <span className="font-bold text-gray-900">Total (cocokkan dengan bukti)</span>
                  <span className="font-black text-lg text-[#133223]">Rp 65.000</span>
                </div>
                <div className="flex justify-between text-xs text-gray-600">
                  <span>Metode bayar</span>
                  <span className="font-bold">QRIS</span>
                </div>
                <div className="flex justify-between text-xs text-gray-600">
                  <span>Status bayar</span>
                  <span className="font-bold text-amber-600">Menunggu verifikasi</span>
                </div>
              </div>

              <div className="bg-[#F9F8F6] border border-gray-200 rounded-2xl h-36 flex items-center justify-center text-gray-400 text-xs font-medium">
                Bukti pembayaran dari pembeli
              </div>

              <div className="grid grid-cols-2 gap-3 pt-2">
                <button className="bg-[#D93838] hover:bg-red-600 text-white font-bold py-3 rounded-xl text-xs transition cursor-pointer shadow-sm">
                  Tandai Lunas
                </button>
                <button className="bg-white hover:bg-gray-50 border border-gray-300 text-gray-700 font-bold py-3 rounded-xl text-xs transition cursor-pointer">
                  Ubah Jam Ambil
                </button>
                <button className="bg-[#184029] hover:bg-[#0f291c] text-white font-bold py-3 rounded-xl text-xs transition cursor-pointer shadow-sm">
                  Teruskan ke Dapur
                </button>
                <button className="bg-white hover:bg-gray-50 border border-gray-300 text-gray-700 font-bold py-3 rounded-xl text-xs transition cursor-pointer">
                  Tandai Selesai
                </button>
              </div>
            </>
          ) : (
            <div className="text-center py-20 text-gray-400 text-sm">
              Pilih pesanan di sebelah kiri untuk melihat detail.
            </div>
          )}

        </div>

      </div>

    </div>
  );
}