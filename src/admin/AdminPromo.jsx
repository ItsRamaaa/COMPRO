import React, { useState } from 'react';

export default function AdminPromo() {
  // State daftar promo restoran dengan status dan aturan masing-masing
  const [promos, setPromos] = useState([
    { id: 1, name: 'Promo Makan Siang', rule: 'Potongan Rp 5.000, min. Rp 50.000', time: '11.00-14.00', status: 'Aktif', badgeColor: 'bg-emerald-100 text-emerald-800' },
    { id: 2, name: 'Diskon Kopi Sore', rule: 'Diskon 10% menu minuman', time: '14.00-17.00', status: 'Terjadwal', badgeColor: 'bg-amber-100 text-amber-800' },
    { id: 3, name: 'Paket Hemat Keluarga', rule: 'Harga paket tertentu', time: 'Sepanjang hari', status: 'Nonaktif', badgeColor: 'bg-gray-100 text-gray-600' },
  ]);

  // State untuk form input tambah promo baru
  const [form, setForm] = useState({
    nama: '',
    jenis: '',
    nilai: '',
    mulai: '',
    selesai: '',
    jamMulai: '',
    jamSelesai: '',
    minBelanja: '',
    kuota: ''
  });

  // Fungsi untuk menangani perubahan input pada form
  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm(prev => ({ ...prev, [name]: value }));
  };

  // Fungsi untuk menyimpan promo baru ke dalam daftar
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!form.nama) {
      alert('Nama promo harus diisi!');
      return;
    }
    const newPromo = {
      id: promos.length + 1,
      name: form.nama,
      rule: form.nilai ? `Potongan ${form.nilai}` : 'Aturan promo baru',
      time: form.jamMulai && form.jamSelesai ? `${form.jamMulai}-${form.jamSelesai}` : 'Sepanjang hari',
      status: 'Aktif',
      badgeColor: 'bg-emerald-100 text-emerald-800'
    };
    setPromos(prev => [newPromo, ...prev]);
    setForm({ nama: '', jenis: '', nilai: '', mulai: '', selesai: '', jamMulai: '', jamSelesai: '', minBelanja: '', kuota: '' });
    alert('Promo berhasil ditambahkan!');
  };

  return (
    <div className="space-y-6 max-w-7xl mx-auto font-['Plus_Jakarta_Sans',sans-serif]">
      
      {/* Header Halaman */}
      <h2 className="text-3xl font-serif font-bold text-[#133223]">
        Kelola Promo
      </h2>

      {/* Layout Grid Dua Kolom: Tabel Daftar Promo & Form Buat Promo */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
        
        {/* Kolom Kiri: Daftar Promo */}
        <div className="lg:col-span-7 space-y-4">
          <div className="bg-white rounded-3xl shadow-sm border border-gray-100 overflow-hidden">
            <div className="p-6 border-b border-gray-100">
              <h3 className="font-bold text-lg text-[#133223]">Daftar Promo</h3>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="border-b border-gray-100 text-xs text-gray-400 font-medium">
                    <th className="py-3 px-6">Promo</th>
                    <th className="py-3 px-6">Aturan</th>
                    <th className="py-3 px-6">Jam</th>
                    <th className="py-3 px-6">Status</th>
                    <th className="py-3 px-6 text-right">Aksi</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100 text-sm">
                  {promos.map((p) => (
                    <tr key={p.id} className="hover:bg-gray-50/50 transition">
                      <td className="py-4 px-6 font-bold text-[#133223]">
                        {p.name}
                      </td>
                      <td className="py-4 px-6 text-gray-600 text-xs">
                        {p.rule}
                      </td>
                      <td className="py-4 px-6 text-gray-600 text-xs">
                        {p.time}
                      </td>
                      <td className="py-4 px-6">
                        <span className={`text-[10px] font-bold px-2.5 py-1 rounded-full ${p.badgeColor}`}>
                          {p.status}
                        </span>
                      </td>
                      <td className="py-4 px-6 text-right">
                        <button 
                          onClick={() => alert(`Edit promo: ${p.name}`)}
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
          <p className="text-xs text-gray-400 px-2">
            Promo aktif tampil sebagai banner dan menghitung potongan otomatis di ringkasan pesanan.
          </p>
        </div>

        {/* Kolom Kanan: Form Buat Promo */}
        <div className="lg:col-span-5 bg-white rounded-3xl p-6 shadow-sm border border-gray-100">
          <h3 className="font-bold text-lg text-[#133223] mb-4">Buat Promo</h3>
          <form onSubmit={handleSubmit} className="space-y-4 text-xs">
            
            <div>
              <label className="block text-gray-500 mb-1 font-medium">Nama promo</label>
              <input 
                type="text" 
                name="nama"
                value={form.nama}
                onChange={handleChange}
                placeholder="Contoh: Promo Makan Siang" 
                className="w-full border border-gray-200 rounded-xl p-3 text-gray-800 focus:outline-none focus:border-[#133223]"
              />
            </div>

            <div className="grid grid-cols-2 gap-3">
              <div>
                <label className="block text-gray-500 mb-1 font-medium">Jenis</label>
                <input 
                  type="text" 
                  name="jenis"
                  value={form.jenis}
                  onChange={handleChange}
                  placeholder="Persen atau nominal" 
                  className="w-full border border-gray-200 rounded-xl p-3 text-gray-800 focus:outline-none focus:border-[#133223]"
                />
              </div>
              <div>
                <label className="block text-gray-500 mb-1 font-medium">Nilai</label>
                <input 
                  type="text" 
                  name="nilai"
                  value={form.nilai}
                  onChange={handleChange}
                  placeholder="5.000" 
                  className="w-full border border-gray-200 rounded-xl p-3 text-gray-800 focus:outline-none focus:border-[#133223]"
                />
              </div>
            </div>

            <div className="grid grid-cols-2 gap-3">
              <div>
                <label className="block text-gray-500 mb-1 font-medium">Mulai</label>
                <input 
                  type="text" 
                  name="mulai"
                  value={form.mulai}
                  onChange={handleChange}
                  placeholder="dd/mm" 
                  className="w-full border border-gray-200 rounded-xl p-3 text-gray-800 focus:outline-none focus:border-[#133223]"
                />
              </div>
              <div>
                <label className="block text-gray-500 mb-1 font-medium">Selesai</label>
                <input 
                  type="text" 
                  name="selesai"
                  value={form.selesai}
                  onChange={handleChange}
                  placeholder="dd/mm" 
                  className="w-full border border-gray-200 rounded-xl p-3 text-gray-800 focus:outline-none focus:border-[#133223]"
                />
              </div>
            </div>

            <div className="grid grid-cols-2 gap-3">
              <div>
                <label className="block text-gray-500 mb-1 font-medium">Jam mulai</label>
                <input 
                  type="text" 
                  name="jamMulai"
                  value={form.jamMulai}
                  onChange={handleChange}
                  placeholder="11.00" 
                  className="w-full border border-gray-200 rounded-xl p-3 text-gray-800 focus:outline-none focus:border-[#133223]"
                />
              </div>
              <div>
                <label className="block text-gray-500 mb-1 font-medium">Jam selesai</label>
                <input 
                  type="text" 
                  name="jamSelesai"
                  value={form.jamSelesai}
                  onChange={handleChange}
                  placeholder="14.00" 
                  className="w-full border border-gray-200 rounded-xl p-3 text-gray-800 focus:outline-none focus:border-[#133223]"
                />
              </div>
            </div>

            <div className="grid grid-cols-2 gap-3">
              <div>
                <label className="block text-gray-500 mb-1 font-medium">Minimal belanja</label>
                <input 
                  type="text" 
                  name="minBelanja"
                  value={form.minBelanja}
                  onChange={handleChange}
                  placeholder="50.000" 
                  className="w-full border border-gray-200 rounded-xl p-3 text-gray-800 focus:outline-none focus:border-[#133223]"
                />
              </div>
              <div>
                <label className="block text-gray-500 mb-1 font-medium">Kuota</label>
                <input 
                  type="text" 
                  name="kuota"
                  value={form.kuota}
                  onChange={handleChange}
                  placeholder="[n]" 
                  className="w-full border border-gray-200 rounded-xl p-3 text-gray-800 focus:outline-none focus:border-[#133223]"
                />
              </div>
            </div>

            <button 
              type="submit"
              className="w-full bg-[#184029] hover:bg-[#0f291c] text-white font-bold py-3 rounded-xl transition cursor-pointer shadow-sm text-sm mt-2"
            >
              Simpan Promo
            </button>

          </form>
        </div>

      </div>

    </div>
  );
}