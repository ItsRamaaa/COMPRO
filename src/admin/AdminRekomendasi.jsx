import React, { useState } from 'react';

export default function AdminRekomendasi() {
  // State daftar aturan rekomendasi menu berdasarkan waktu
  const [rules, setRules] = useState([
    { id: 1, time: 'Pagi 09.00-11.00', items: 'Es Kopi Gula Aren, Teh Manis Tubruk, Wedang Tape Ketan' },
    { id: 2, time: 'Siang 11.00-14.00', items: 'Tongseng Kambing, Gulai / Sop Ikan Patin, Nasi Goreng Kambing, Es Teh Manis' },
    { id: 3, time: 'Sore 14.00-17.00', items: 'Tengkleng Kambing, Sate Kambing, Kopi Robusta Luwak' },
    { id: 4, time: 'Malam 17.00-tutup', items: 'Sate Kambing 10 tusuk, Tengkleng Kambing, Bakmi Godog' },
  ]);

  // State pengaturan mode rekomendasi
  const [mode, setMode] = useState('Atur manual oleh admin');
  const [limit, setLimit] = useState('4');
  const [hideEmpty, setHideEmpty] = useState(true);

  return (
    <div className="space-y-6 max-w-7xl mx-auto font-['Plus_Jakarta_Sans',sans-serif]">
      
      {/* Header Halaman */}
      <h2 className="text-3xl font-serif font-bold text-[#133223]">
        Rekomendasi Menu per Waktu
      </h2>

      {/* Layout Grid Dua Kolom: Tabel Aturan Waktu & Pengaturan Mode */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
        
        {/* Kolom Kiri: Tabel Aturan per Waktu */}
        <div className="lg:col-span-7 bg-white rounded-3xl shadow-sm border border-gray-100 overflow-hidden">
          <div className="p-6 border-b border-gray-100">
            <h3 className="font-bold text-lg text-[#133223]">Aturan per waktu</h3>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="border-b border-gray-100 text-xs text-gray-400 font-medium">
                  <th className="py-3 px-6">Waktu</th>
                  <th className="py-3 px-6">Menu teratas (urutan)</th>
                  <th className="py-3 px-6 text-right">Aksi</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100 text-sm">
                {rules.map((r) => (
                  <tr key={r.id} className="hover:bg-gray-50/50 transition">
                    <td className="py-4 px-6 font-bold text-[#133223] text-xs">
                      {r.time}
                    </td>
                    <td className="py-4 px-6 text-gray-600 text-xs">
                      {r.items}
                    </td>
                    <td className="py-4 px-6 text-right">
                      <button 
                        onClick={() => alert(`Edit rekomendasi waktu: ${r.time}`)}
                        className="bg-white hover:bg-gray-50 border border-gray-300 text-gray-700 font-bold px-3 py-1.5 rounded-xl text-xs transition cursor-pointer shadow-sm"
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

        {/* Kolom Kanan: Panel Mode Rekomendasi */}
        <div className="lg:col-span-5 bg-white rounded-3xl p-6 shadow-sm border border-gray-100 space-y-6">
          <h3 className="font-bold text-lg text-[#133223]">Mode rekomendasi</h3>
          
          <div className="space-y-3 text-xs text-gray-700 font-medium">
            <label className="flex items-center gap-2 cursor-pointer">
              <input 
                type="radio" 
                name="mode" 
                checked={mode === 'Atur manual oleh admin'} 
                onChange={() => setMode('Atur manual oleh admin')}
                className="accent-[#133223]"
              />
              Atur manual oleh admin
            </label>
            <label className="flex items-center gap-2 cursor-pointer">
              <input 
                type="radio" 
                name="mode" 
                checked={mode === 'Otomatis dari data penjualan'} 
                onChange={() => setMode('Otomatis dari data penjualan')}
                className="accent-[#133223]"
              />
              Otomatis dari data penjualan
            </label>
            <label className="flex items-center gap-2 cursor-pointer">
              <input 
                type="radio" 
                name="mode" 
                checked={mode === 'Gabungan'} 
                onChange={() => setMode('Gabungan')}
                className="accent-[#133223]"
              />
              Gabungan
            </label>
          </div>

          <div className="space-y-1.5 text-xs">
            <label className="block text-gray-500 font-medium">Jumlah menu ditampilkan</label>
            <input 
              type="text" 
              value={limit} 
              onChange={(e) => setLimit(e.target.value)}
              className="w-full border border-gray-200 rounded-xl p-3 text-gray-800 focus:outline-none focus:border-[#133223]"
            />
          </div>

          <div className="pt-2">
            <label className="flex items-center gap-2 text-xs font-medium text-gray-700 cursor-pointer">
              <input 
                type="checkbox" 
                checked={hideEmpty} 
                onChange={() => setHideEmpty(!hideEmpty)}
                className="rounded accent-[#133223]"
              />
              Sembunyikan menu yang habis
            </label>
          </div>

          <p className="text-[11px] text-gray-400 leading-relaxed pt-2 border-t border-gray-100">
            Waktu mengikuti WIB. Contoh pembagian waktu, perlu dikonfirmasi mitra.
          </p>
        </div>

      </div>

    </div>
  );
}