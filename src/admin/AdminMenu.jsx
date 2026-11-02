import React, { useState } from 'react';

export default function AdminMenu() {
  // State daftar menu dengan dukungan toggle interaktif ketersediaan dan best seller
  const [menuList, setMenuList] = useState([
    { id: 1, name: 'Tengkleng Kambing', category: 'Kambing dan Kelinci', price: 'Rp 40.000', status: 'Tersedia', isBestSeller: true },
    { id: 2, name: 'Tongseng Kambing', category: 'Kambing dan Kelinci', price: 'Rp 30.000', status: 'Tersedia', isBestSeller: true },
    { id: 3, name: 'Sate Kambing 10 tusuk', category: 'Kambing dan Kelinci', price: 'Rp 50.000', status: 'Tersedia', isBestSeller: false },
    { id: 4, name: 'Nasi Goreng Kambing', category: 'Kambing dan Kelinci', price: 'Rp 25.000', status: 'Tersedia', isBestSeller: false },
    { id: 5, name: 'Gulai / Sop Ikan Patin', category: 'Ikan', price: 'Rp 15.000', status: 'Tersedia', isBestSeller: true },
    { id: 6, name: 'Mangut Lele', category: 'Ikan', price: 'Rp 15.000', status: 'Habis', isBestSeller: false },
    { id: 7, name: 'Ayam Kampung Goreng 1/4 Ekor', category: 'Ayam dan Bebek', price: 'Rp 20.000', status: 'Tersedia', isBestSeller: false },
    { id: 8, name: 'Bakmi Godog', category: 'Bakmi', price: 'Rp 20.000', status: 'Tersedia', isBestSeller: false },
    { id: 9, name: 'Es Kopi Gula Aren', category: 'Minuman', price: 'Rp 15.000', status: 'Tersedia', isBestSeller: false },
  ]);

  // Fungsi untuk mengubah status ketersediaan menu secara interaktif
  const toggleStatus = (id) => {
    setMenuList(prev => prev.map(item => {
      if (item.id === id) {
        const newStatus = item.status === 'Tersedia' ? 'Habis' : 'Tersedia';
        return { ...item, status: newStatus };
      }
      return item;
    }));
  };

  // Fungsi untuk mengubah status best seller menu secara interaktif
  const toggleBestSeller = (id) => {
    setMenuList(prev => prev.map(item => {
      if (item.id === id) {
        return { ...item, isBestSeller: !item.isBestSeller };
      }
      return item;
    }));
  };

  return (
    <div className="space-y-6 max-w-7xl mx-auto font-['Plus_Jakarta_Sans',sans-serif]">
      
      {/* Header Halaman dan Tombol Tambah Menu */}
      <div className="flex justify-between items-center">
        <h2 className="text-3xl font-serif font-bold text-[#133223]">
          Kelola Menu
        </h2>
        <button 
          onClick={() => alert('Fitur Tambah Menu')}
          className="bg-[#184029] hover:bg-[#0f291c] text-white font-bold px-5 py-2.5 rounded-xl text-sm shadow-sm transition cursor-pointer"
        >
          + Tambah Menu
        </button>
      </div>

      {/* Tabel Data Menu Interaktif */}
      <div className="bg-white rounded-3xl shadow-sm border border-gray-100 overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="border-b border-gray-100 text-xs text-gray-400 font-medium">
                <th className="py-4 px-6">Nama</th>
                <th className="py-4 px-6">Kategori</th>
                <th className="py-4 px-6">Harga</th>
                <th className="py-4 px-6">Ketersediaan</th>
                <th className="py-4 px-6">Best Seller</th>
                <th className="py-4 px-6 text-right">Aksi</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100 text-sm">
              {menuList.map((item) => (
                <tr key={item.id} className="hover:bg-gray-50/50 transition">
                  <td className="py-4 px-6 font-bold text-[#133223]">
                    {item.name}
                  </td>
                  <td className="py-4 px-6 text-gray-600 text-xs">
                    {item.category}
                  </td>
                  <td className="py-4 px-6 text-gray-800 text-xs font-semibold">
                    {item.price}
                  </td>
                  <td className="py-4 px-6 text-xs font-medium">
                    <button 
                      onClick={() => toggleStatus(item.id)}
                      className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full border transition cursor-pointer ${
                        item.status === 'Tersedia' 
                          ? 'border-blue-200 bg-blue-50/50 text-blue-600 hover:bg-blue-100/50' 
                          : 'border-gray-200 bg-gray-50 text-gray-400 hover:bg-gray-100'
                      }`}
                    >
                      <span className={`w-2 h-2 rounded-full ${item.status === 'Tersedia' ? 'bg-blue-600' : 'bg-gray-300'}`}></span>
                      {item.status}
                    </button>
                  </td>
                  <td className="py-4 px-6 text-xs font-medium">
                    <button 
                      onClick={() => toggleBestSeller(item.id)}
                      className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full border transition cursor-pointer ${
                        item.isBestSeller 
                          ? 'border-blue-200 bg-blue-50/50 text-blue-600 hover:bg-blue-100/50' 
                          : 'border-gray-200 bg-gray-50 text-gray-400 hover:bg-gray-100'
                      }`}
                    >
                      <span className={`w-2 h-2 rounded-full ${item.isBestSeller ? 'bg-blue-600' : 'bg-gray-300'}`}></span>
                      {item.isBestSeller ? 'Ya' : 'Tidak'}
                    </button>
                  </td>
                  <td className="py-4 px-6 text-right">
                    <button 
                      onClick={() => alert(`Edit menu: ${item.name}`)}
                      className="bg-white hover:bg-gray-50 border border-gray-300 text-gray-700 font-bold px-4 py-1.5 rounded-xl text-xs transition cursor-pointer shadow-sm"
                    >
                      Edit
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Catatan Footer Informasi Tampilan */}
      <p className="text-xs text-gray-400">
        Menu bertanda Best Seller tampil di Beranda dan tab Best Seller di website. Menampilkan {menuList.length} dari {menuList.length} menu.
      </p>

    </div>
  );
}