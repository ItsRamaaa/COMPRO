import React from 'react';

export default function AdminDashboard() {
  const recentOrders = [
    { nomor: '#WSR-1024', pemesan: 'Budi', tipe: 'Bawa pulang', pembayaran: 'Verifikasi', status: 'Menunggu' },
    { nomor: '#WSR-1023', pemesan: 'Sari', tipe: 'Makan di tempat', pembayaran: 'Belum bayar', status: 'Diproses' },
    { nomor: '#WSR-1022', pemesan: 'Andi', tipe: 'Bawa pulang', pembayaran: 'Lunas', status: 'Selesai' },
  ];

  const reservations = [
    { nama: 'Budi', tanggal: 'Besok, 13.00', orang: '4 orang' },
    { nama: 'Siti', tanggal: 'Besok, 18.30', orang: '6 orang' },
  ];

  return (
    <div className="space-y-8 max-w-7xl mx-auto font-['Plus_Jakarta_Sans',sans-serif]">
      
      {/* Header Judul */}
      <h2 className="text-3xl font-serif font-bold text-[#133223]">
        Dashboard
      </h2>

      {/* Grid Kartu Statistik Atas */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
        
        <div className="bg-white p-5 rounded-2xl shadow-sm border border-gray-100 space-y-2">
          <span className="text-xs text-gray-500 block font-medium">Pesanan hari ini</span>
          <h3 className="text-2xl font-black text-[#133223]">12</h3>
        </div>

        <div className="bg-white p-5 rounded-2xl shadow-sm border border-gray-100 space-y-2">
          <span className="text-xs text-gray-500 block font-medium">Pendapatan (lunas)</span>
          <h3 className="text-xl font-black text-[#133223]">Rp 1.450k</h3>
        </div>

        <div className="bg-white p-5 rounded-2xl shadow-sm border border-gray-100 space-y-2">
          <span className="text-xs text-gray-500 block font-medium">Perlu verifikasi bayar</span>
          <h3 className="text-2xl font-black text-[#D93838]">2</h3>
        </div>

        <div className="bg-white p-5 rounded-2xl shadow-sm border border-gray-100 space-y-2">
          <span className="text-xs text-gray-500 block font-medium">Reservasi menunggu</span>
          <h3 className="text-2xl font-black text-[#133223]">3</h3>
        </div>

        <div className="bg-white p-5 rounded-2xl shadow-sm border border-gray-100 space-y-2">
          <span className="text-xs text-gray-500 block font-medium">Stok hampir habis</span>
          <h3 className="text-2xl font-black text-amber-600">1</h3>
        </div>

      </div>

      {/* Bagian Bawah: Tabel Pesanan Terbaru & Reservasi */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
        
        {/* Kolom Kiri: Tabel Pesanan Terbaru */}
        <div className="lg:col-span-2 bg-white rounded-3xl p-6 lg:p-8 shadow-sm border border-gray-100 space-y-6">
          <h3 className="text-lg font-bold text-[#133223]">Pesanan Terbaru</h3>

          <div className="overflow-x-auto">
            <table className="w-full text-left text-sm">
              <thead>
                <tr className="border-b border-gray-100 text-gray-400 font-semibold text-xs">
                  <th className="pb-3">Nomor</th>
                  <th className="pb-3">Pemesan</th>
                  <th className="pb-3">Tipe</th>
                  <th className="pb-3">Pembayaran</th>
                  <th className="pb-3">Status</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-50">
                {recentOrders.map((order, idx) => (
                  <tr key={idx} className="hover:bg-gray-50/50 transition">
                    <td className="py-4 font-bold text-[#133223]">{order.nomor}</td>
                    <td className="py-4 text-gray-700">{order.pemesan}</td>
                    <td className="py-4 text-gray-600">{order.tipe}</td>
                    <td className="py-4">
                      <span className={`text-xs font-bold px-3 py-1 rounded-full ${
                        order.pembayaran === 'Lunas' ? 'bg-[#E6F4EA] text-[#138833]' :
                        order.pembayaran === 'Verifikasi' ? 'bg-[#FEF3C7] text-[#92400E]' :
                        'bg-red-50 text-[#D93838]'
                      }`}>
                        {order.pembayaran}
                      </span>
                    </td>
                    <td className="py-4">
                      <span className={`text-xs font-bold px-3 py-1 rounded-full ${
                        order.status === 'Selesai' ? 'bg-[#E6F4EA] text-[#138833]' :
                        order.status === 'Diproses' ? 'bg-blue-50 text-blue-700' :
                        'bg-[#FEF3C7] text-[#92400E]'
                      }`}>
                        {order.status}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Kolom Kanan: Reservasi Menunggu */}
        <div className="bg-white rounded-3xl p-6 lg:p-8 shadow-sm border border-gray-100 space-y-6">
          <h3 className="text-lg font-bold text-[#133223]">Reservasi Menunggu</h3>

          <div className="space-y-4">
            {reservations.map((res, idx) => (
              <div key={idx} className="p-4 bg-[#F9F8F6] rounded-2xl border border-gray-100 space-y-1 text-sm">
                <p className="font-bold text-[#133223]">{res.nama}</p>
                <p className="text-xs text-gray-500">{res.tanggal} · {res.orang}</p>
              </div>
            ))}
          </div>
        </div>

      </div>

    </div>
  );
}