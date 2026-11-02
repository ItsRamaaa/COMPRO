import React, { useState } from 'react';

export default function AdminStok() {
  // State daftar bahan baku dan status ketersediaan stok
  const [stocks, setStocks] = useState([
    { id: 1, name: 'Daging kambing', amount: '15', unit: 'kg', min: '5', status: 'Aman', badgeColor: 'bg-emerald-100 text-emerald-800' },
    { id: 2, name: 'Ikan patin', amount: '3', unit: 'kg', min: '4', status: 'Hampir habis', badgeColor: 'bg-amber-100 text-amber-800' },
    { id: 3, name: 'Gula aren', amount: '10', unit: 'kg', min: '2', status: 'Aman', badgeColor: 'bg-emerald-100 text-emerald-800' },
    { id: 4, name: 'Biji kopi', amount: '0', unit: 'kg', min: '3', status: 'Habis', badgeColor: 'bg-red-100 text-red-800' },
  ]);

  return (
    <div className="space-y-6 max-w-7xl mx-auto font-['Plus_Jakarta_Sans',sans-serif]">
      
      {/* Header Halaman dan Tombol Tambah Bahan */}
      <div className="flex justify-between items-center">
        <h2 className="text-3xl font-serif font-bold text-[#133223]">
          Manajemen Stok
        </h2>
        <button 
          onClick={() => alert('Fitur Tambah Bahan')}
          className="bg-[#184029] hover:bg-[#0f291c] text-white font-bold px-5 py-2.5 rounded-xl text-sm shadow-sm transition cursor-pointer"
        >
          + Tambah Bahan
        </button>
      </div>

      {/* Tabel Data Manajemen Stok */}
      <div className="bg-white rounded-3xl shadow-sm border border-gray-100 overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="border-b border-gray-100 text-xs text-gray-400 font-medium">
                <th className="py-4 px-6">Bahan</th>
                <th className="py-4 px-6">Stok</th>
                <th className="py-4 px-6">Satuan</th>
                <th className="py-4 px-6">Batas minimum</th>
                <th className="py-4 px-6">Status</th>
                <th className="py-4 px-6 text-right">Aksi</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100 text-sm">
              {stocks.map((item) => (
                <tr key={item.id} className="hover:bg-gray-50/50 transition">
                  <td className="py-4 px-6 font-bold text-[#133223]">
                    {item.name}
                  </td>
                  <td className="py-4 px-6 text-gray-800 text-xs font-semibold">
                    {item.amount}
                  </td>
                  <td className="py-4 px-6 text-gray-600 text-xs">
                    {item.unit}
                  </td>
                  <td className="py-4 px-6 text-gray-600 text-xs">
                    {item.min}
                  </td>
                  <td className="py-4 px-6">
                    <span className={`text-[10px] font-bold px-2.5 py-1 rounded-full ${item.badgeColor}`}>
                      {item.status}
                    </span>
                  </td>
                  <td className="py-4 px-6 text-right">
                    <button 
                      onClick={() => alert(`Ubah stok: ${item.name}`)}
                      className="bg-white hover:bg-gray-50 border border-gray-300 text-gray-700 font-bold px-4 py-1.5 rounded-xl text-xs transition cursor-pointer shadow-sm"
                    >
                      Ubah
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

    </div>
  );
}