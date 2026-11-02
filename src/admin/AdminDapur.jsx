import React, { useState } from 'react';

export default function AdminDapur() {
  // State daftar antrean dapur dengan status masing-masing
  const [dapurOrders, setDapurOrders] = useState([
    { id: '#WSR-1024', title: '#WSR-1024 · Bawa pulang', items: 'Tengkleng Kambing x1, Tongseng Kambing x1', note: 'Catatan: ambil 12.30, sambal dipisah', status: 'Menunggu' },
    { id: '#WSR-1026', title: '#WSR-1026 · Paket Makan di Tempat', items: 'Bebek panggang utuh 1-1,2 kg x1, nasi, es teh', note: 'Catatan: tiba 18.00, 4 orang, meja direservasi', status: 'Menunggu' },
    { id: '#WSR-1023', title: '#WSR-1023 · Makan di tempat', items: 'Mangut Lele x2, Nasi x2', note: 'Catatan: tiba 13.00, tidak pedas', status: 'Diproses' },
  ]);

  // Fungsi untuk memperbarui status antrean pesanan dapur
  const updateStatus = (id, newStatus) => {
    setDapurOrders(prev => prev.map(order => order.id === id ? { ...order, status: newStatus } : order));
  };

  return (
    <div className="space-y-6 max-w-7xl mx-auto font-['Plus_Jakarta_Sans',sans-serif]">
      
      {/* Header Halaman Dapur */}
      <h2 className="text-3xl font-serif font-bold text-[#133223]">
        Antrean Dapur
      </h2>

      {/* Grid Layout Tiga Kolom Status */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-start">
        
        {/* Kolom Status Menunggu */}
        <div className="space-y-4">
          <h3 className="font-bold text-sm text-[#133223]">Menunggu</h3>
          <div className="space-y-3">
            {dapurOrders.filter(o => o.status === 'Menunggu').map((ord) => (
              <div key={ord.id} className="bg-white p-5 rounded-2xl shadow-sm border border-gray-100 space-y-3">
                <div>
                  <h4 className="font-bold text-sm text-[#133223]">{ord.title}</h4>
                  <p className="text-xs text-gray-700 mt-1">{ord.items}</p>
                  <p className="text-xs text-amber-700 mt-1 font-medium">{ord.note}</p>
                </div>
                <button 
                  onClick={() => updateStatus(ord.id, 'Diproses')}
                  className="w-full bg-[#D93838] hover:bg-red-600 text-white font-bold py-2.5 rounded-xl text-xs transition cursor-pointer shadow-sm"
                >
                  Mulai Proses
                </button>
              </div>
            ))}
          </div>
        </div>

        {/* Kolom Status Diproses */}
        <div className="space-y-4">
          <h3 className="font-bold text-sm text-[#133223]">Diproses</h3>
          <div className="space-y-3">
            {dapurOrders.filter(o => o.status === 'Diproses').map((ord) => (
              <div key={ord.id} className="bg-white p-5 rounded-2xl shadow-sm border border-gray-100 space-y-3">
                <div>
                  <h4 className="font-bold text-sm text-[#133223]">{ord.title}</h4>
                  <p className="text-xs text-gray-700 mt-1">{ord.items}</p>
                  <p className="text-xs text-amber-700 mt-1 font-medium">{ord.note}</p>
                </div>
                <button 
                  onClick={() => updateStatus(ord.id, 'Selesai')}
                  className="w-full bg-[#D93838] hover:bg-red-600 text-white font-bold py-2.5 rounded-xl text-xs transition cursor-pointer shadow-sm"
                >
                  Tandai Selesai
                </button>
              </div>
            ))}
          </div>
        </div>

        {/* Kolom Status Selesai */}
        <div className="space-y-4">
          <h3 className="font-bold text-sm text-[#133223]">Selesai</h3>
          <div className="space-y-3">
            {dapurOrders.filter(o => o.status === 'Selesai').length > 0 ? (
              dapurOrders.filter(o => o.status === 'Selesai').map((ord) => (
                <div key={ord.id} className="bg-white p-5 rounded-2xl shadow-sm border border-gray-100 space-y-2">
                  <h4 className="font-bold text-sm text-[#133223]">{ord.title}</h4>
                  <p className="text-xs text-gray-700">{ord.items}</p>
                  <span className="text-[10px] font-bold px-2.5 py-1 rounded-full bg-emerald-100 text-emerald-800 inline-block">Selesai dimasak</span>
                </div>
              ))
            ) : (
              <div className="border-2 border-dashed border-gray-200 rounded-2xl p-8 text-center text-gray-400 text-xs font-medium">
                Belum ada pesanan selesai
              </div>
            )}
          </div>
        </div>

      </div>

    </div>
  );
}