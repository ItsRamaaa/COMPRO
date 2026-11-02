import React, { useState } from 'react';

export default function AdminReservasi() {
  // State daftar reservasi meja untuk mengelola status konfirmasi
  const [reservations, setReservations] = useState([
    { id: 1, name: 'Dewi', date: '2026-11-05', time: '18.00', guests: '4 orang', status: 'Menunggu', note: 'Dari pesanan paket', badgeColor: 'bg-amber-100 text-amber-800' },
    { id: 2, name: 'Ahmad Fauzi', date: '2026-11-06', time: '19.30', guests: '6 orang', status: 'Menunggu', note: '', badgeColor: 'bg-amber-100 text-amber-800' },
    { id: 3, name: 'Siti Rahma', date: '2026-11-04', time: '12.00', guests: '3 orang', status: 'Dikonfirmasi', note: '', badgeColor: 'bg-emerald-100 text-emerald-800' },
  ]);

  // Fungsi untuk memperbarui status data reservasi meja
  const updateReservationStatus = (id, newStatus, newBadgeColor) => {
    setReservations(prev => prev.map(res => res.id === id ? { ...res, status: newStatus, badgeColor: newBadgeColor } : res));
  };

  return (
    <div className="space-y-6 max-w-7xl mx-auto font-['Plus_Jakarta_Sans',sans-serif]">
      
      {/* Header Halaman Reservasi */}
      <h2 className="text-3xl font-serif font-bold text-[#133223]">
        Reservasi Meja
      </h2>

      {/* Tabel Data Reservasi */}
      <div className="bg-white rounded-3xl shadow-sm border border-gray-100 overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="border-b border-gray-100 text-xs text-gray-400 font-medium">
                <th className="py-4 px-6">Nama</th>
                <th className="py-4 px-6">Tanggal</th>
                <th className="py-4 px-6">Waktu</th>
                <th className="py-4 px-6">Jumlah</th>
                <th className="py-4 px-6">Status</th>
                <th className="py-4 px-6 text-right">Aksi</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100 text-sm">
              {reservations.map((res) => (
                <tr key={res.id} className="hover:bg-gray-50/50 transition">
                  <td className="py-4 px-6 font-bold text-[#133223]">
                    {res.name}
                  </td>
                  <td className="py-4 px-6 text-gray-600 text-xs">
                    {res.date}
                  </td>
                  <td className="py-4 px-6 text-gray-600 text-xs">
                    {res.time}
                  </td>
                  <td className="py-4 px-6 text-gray-600 text-xs">
                    {res.guests}
                  </td>
                  <td className="py-4 px-6">
                    <div className="flex items-center gap-2">
                      <span className={`text-[10px] font-bold px-2.5 py-1 rounded-full ${res.badgeColor}`}>
                        {res.status}
                      </span>
                      {res.note && (
                        <span className="text-[10px] font-medium px-2 py-0.5 rounded bg-gray-100 text-gray-600">
                          {res.note}
                        </span>
                      )}
                    </div>
                  </td>
                  <td className="py-4 px-6 text-right">
                    {res.status === 'Menunggu' ? (
                      <div className="flex items-center justify-end gap-2">
                        <button 
                          onClick={() => updateReservationStatus(res.id, 'Dikonfirmasi', 'bg-emerald-100 text-emerald-800')}
                          className="bg-[#184029] hover:bg-[#0f291c] text-white font-bold px-3 py-1.5 rounded-xl text-xs transition cursor-pointer shadow-sm"
                        >
                          Konfirmasi
                        </button>
                        <button 
                          onClick={() => updateReservationStatus(res.id, 'Ditolak', 'bg-red-100 text-red-800')}
                          className="bg-white hover:bg-gray-50 border border-gray-300 text-gray-700 font-bold px-3 py-1.5 rounded-xl text-xs transition cursor-pointer"
                        >
                          Tolak
                        </button>
                      </div>
                    ) : (
                      <span className="text-xs text-gray-400 font-medium">-</span>
                    )}
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