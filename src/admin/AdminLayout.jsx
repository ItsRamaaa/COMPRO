import React, { useState } from 'react';
import AdminDashboard from './AdminDashboard';
import AdminPesanan from './AdminPesanan';
import AdminKasir from './AdminKasir';
import AdminDapur from './AdminDapur';
import AdminReservasi from './AdminReservasi';
import AdminMenu from './AdminMenu';
import AdminPromo from './AdminPromo';
import AdminRekomendasi from './AdminRekomendasi';
import AdminStok from './AdminStok';
import AdminLaporan from './AdminLaporan';
import AdminPengaturan from './AdminPengaturan';

export default function AdminLayout({ setCurrentPage }) {
  const [activeMenu, setActiveMenu] = useState('dashboard');

  const menuItems = [
    { id: 'dashboard', label: 'Dashboard' },
    { id: 'pesanan', label: 'Pesanan' },
    { id: 'kasir', label: 'Kasir' },
    { id: 'dapur', label: 'Dapur' },
    { id: 'reservasi', label: 'Reservasi' },
    { id: 'menu', label: 'Menu' },
    { id: 'promo', label: 'Promo' },
    { id: 'rekomendasi', label: 'Rekomendasi' },
    { id: 'stok', label: 'Stok' },
    { id: 'laporan', label: 'Laporan' },
    { id: 'pengaturan', label: 'Pengaturan' },
  ];

  return (
    <div className="flex min-h-screen bg-[#F9F8F6] font-['Plus_Jakarta_Sans',sans-serif]">
      
      {/* Sidebar Kiri */}
      <aside className="w-64 bg-[#133223] text-white flex flex-col flex-shrink-0">
        
        {/* Logo Brand Admin */}
        <div className="p-6 flex items-center space-x-3.5 border-b border-white/10">
          <div className="w-10 h-10 bg-[#0F5A3E] rounded-full flex flex-col items-center justify-center text-white shadow-sm overflow-hidden border border-emerald-800">
             <span className="text-[6px] font-bold tracking-tighter">WAROENG</span>
             <span className="text-[11px] font-black text-yellow-400 leading-none">SR</span>
          </div>
          <div>
            <h1 className="font-bold text-xl leading-none font-serif">Waroeng SR</h1>
            <span className="text-[9px] text-yellow-400 font-bold tracking-wider uppercase">Admin Panel</span>
          </div>
        </div>

        {/* Daftar Menu Sidebar */}
        <div className="flex-1 py-6 space-y-1 px-3 overflow-y-auto">
          {menuItems.map((item) => {
            const isActive = activeMenu === item.id;
            return (
              <button
                key={item.id}
                onClick={() => setActiveMenu(item.id)}
                className={`w-full text-left px-4 py-3 rounded-xl text-sm font-medium transition cursor-pointer flex items-center justify-between ${
                  isActive 
                    ? 'bg-[#D93838] text-white font-bold shadow-sm' 
                    : 'text-gray-300 hover:bg-white/5 hover:text-white'
                }`}
              >
                <span>{item.label}</span>
              </button>
            );
          })}
        </div>

      </aside>

      {/* Area Konten Utama */}
      <main className="flex-1 overflow-y-auto p-8 lg:p-12">
        {activeMenu === 'dashboard' && <AdminDashboard />}
        {activeMenu === 'pesanan' && <AdminPesanan />}
        {activeMenu === 'kasir' && <AdminKasir />} 
        {activeMenu === 'dapur' && <AdminDapur />}
        {activeMenu === 'reservasi' && <AdminReservasi/>}
        {activeMenu === 'menu' && <AdminMenu />}
        {activeMenu === 'promo' && <AdminPromo/>}
        {activeMenu === 'rekomendasi' && <AdminRekomendasi/>}
        {activeMenu === 'stok' && <AdminStok/>}
        {activeMenu === 'laporan' && <AdminLaporan/>}
        {activeMenu === 'pengaturan' && <AdminPengaturan/>}

        {activeMenu !== 'dashboard' && activeMenu !== 'pesanan' && activeMenu !== 'kasir' && activeMenu !== 'dapur' && activeMenu !== 'reservasi' && activeMenu !== 'menu' && activeMenu !== 'promo' && activeMenu !== 'rekomendasi' && activeMenu !== 'stok' && activeMenu !== 'laporan' && activeMenu !== 'pengaturan' && (
          <div className="bg-white rounded-3xl p-10 shadow-sm border border-gray-100">
            <h2 className="text-2xl font-bold font-serif text-[#133223] capitalize">Halaman {activeMenu}</h2>
            <p className="text-sm text-gray-500 mt-2">Modul untuk {activeMenu} sedang disiapkan.</p>
          </div>
        )}
      </main>

    </div>
  );
}