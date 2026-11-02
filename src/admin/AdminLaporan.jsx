import React, { useState } from 'react';

export default function AdminLaporan() {
  // State untuk melacak tab laporan aktif (Harian, Mingguan, Bulanan)
  const [activeTab, setActiveTab] = useState('Harian');

  // Data ringkasan laporan berdasarkan masing-masing tab
  const reportData = {
    Harian: {
      totalPesanan: '24',
      pendapatan: 'Rp 1.450.000',
      grafikText: 'Grafik Penjualan Harian (Hari Ini)',
      topMenu: [
        '1. Tengkleng Kambing',
        '2. Tongseng',
        '3. Mangut Lele',
        '4. Gulai Ikan Patin'
      ]
    },
    Mingguan: {
      totalPesanan: '168',
      pendapatan: 'Rp 10.200.000',
      grafikText: 'Grafik Penjualan Mingguan (7 Hari Terakhir)',
      topMenu: [
        '1. Tengkleng Kambing',
        '2. Sate Kambing 10 tusuk',
        '3. Tongseng',
        '4. Mangut Lele'
      ]
    },
    Bulanan: {
      totalPesanan: '720',
      pendapatan: 'Rp 45.800.000',
      grafikText: 'Grafik Penjualan Bulanan (Bulan Ini)',
      topMenu: [
        '1. Tengkleng Kambing',
        '2. Tongseng',
        '3. Sate Kambing 10 tusuk',
        '4. Gulai Ikan Patin'
      ]
    }
  };

  const currentData = reportData[activeTab];

  return (
    <div className="space-y-6 max-w-7xl mx-auto font-['Plus_Jakarta_Sans',sans-serif]">
      
      {/* Header Halaman dan Tombol Ekspor */}
      <div className="flex justify-between items-center">
        <h2 className="text-3xl font-serif font-bold text-[#133223]">
          Laporan Penjualan
        </h2>
        <button 
          onClick={() => alert(`Mengekspor data laporan ${activeTab}`)}
          className="bg-[#184029] hover:bg-[#0f291c] text-white font-bold px-5 py-2.5 rounded-xl text-sm shadow-sm transition cursor-pointer"
        >
          Ekspor
        </button>
      </div>

      {/* Navigasi Tab Laporan */}
      <div className="flex gap-2">
        {['Harian', 'Mingguan', 'Bulanan'].map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`px-5 py-2 rounded-xl text-xs font-bold transition cursor-pointer ${
              activeTab === tab 
                ? 'bg-[#133223] text-white shadow-sm' 
                : 'bg-white text-gray-600 border border-gray-200 hover:bg-gray-50'
            }`}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* Kartu Ringkasan Statistik */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-white p-6 rounded-3xl shadow-sm border border-gray-100 space-y-1">
          <span className="text-xs text-gray-400 font-medium">Jumlah pesanan</span>
          <div className="text-2xl font-black text-[#133223]">{currentData.totalPesanan}</div>
        </div>
        <div className="bg-white p-6 rounded-3xl shadow-sm border border-gray-100 space-y-1">
          <span className="text-xs text-gray-400 font-medium">Pendapatan (lunas)</span>
          <div className="text-2xl font-black text-[#133223]">{currentData.pendapatan}</div>
        </div>
      </div>

      {/* Grid Utama: Grafik & Menu Paling Banyak Dipesan */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
        
        {/* Kolom Grafik Penjualan */}
        <div className="lg:col-span-8 bg-[#F5F3EE] border border-gray-200 rounded-3xl h-80 flex items-center justify-center text-gray-500 font-medium text-sm">
          {currentData.grafikText}
        </div>

        {/* Kolom Menu Paling Banyak Dipesan */}
        <div className="lg:col-span-4 bg-white p-6 rounded-3xl shadow-sm border border-gray-100 space-y-4">
          <h3 className="font-bold text-base text-[#133223]">Menu paling banyak dipesan</h3>
          <div className="space-y-2 text-sm text-gray-700">
            {currentData.topMenu.map((menu, idx) => (
              <div key={idx} className="py-1 border-b border-gray-50 last:border-none">
                {menu}
              </div>
            ))}
          </div>
        </div>

      </div>

      {/* Catatan Footer */}
      <p className="text-xs text-gray-400">
        Mencakup pesanan website dan pesanan manual kasir. Penjualan GoFood dan GrabFood tidak tercatat di sini.
      </p>

    </div>
  );
}