import React, { useState } from 'react';

export default function HantaranCheckout({ setCurrentPage }) {
  const [selectedPackage, setSelectedPackage] = useState('hantaran');
  const [berat, setBerat] = useState('1-1,2kg');
  const [jumlahEkor, setJumlahEkor] = useState(2);
  const [komposisi, setKomposisi] = useState({ ayam: 0, entok: 1, bebek: 1 });
  const [metodeKirim, setMetodeKirim] = useState('kirim');
  const [kurir, setKurir] = useState('gosend');

  return (
    <section className="bg-[#F9F8F6] py-12 w-full font-['Plus_Jakarta_Sans',sans-serif]">
      <div className="w-full px-8 lg:px-16 space-y-8">
        
        {/* Header Judul Halaman */}
        <div className="space-y-1">
          <h2 className="text-3xl lg:text-4xl font-serif font-bold text-[#133223]">
            Pesan Paket
          </h2>
        </div>

        {/* Layout Utama Grid 2 Kolom */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          
          {/* Kolom Kiri: Form Isian Pemesanan (Lebar 2 Grid) */}
          <div className="lg:col-span-2 space-y-8">
            
            {/* Card 1: Pilih Paket & Komposisi */}
            <div className="bg-white rounded-3xl p-6 lg:p-8 shadow-sm border border-gray-100 space-y-6">
              <h3 className="text-lg font-bold text-[#133223]">Pilih Paket</h3>
              
              {/* Tombol Pilihan Jenis Paket */}
              <div className="flex flex-wrap items-center gap-3">
                <button 
                  type="button"
                  onClick={() => setSelectedPackage('makan')}
                  className={`px-5 py-2.5 rounded-full text-sm font-bold transition cursor-pointer ${
                    selectedPackage === 'makan' 
                      ? 'bg-[#133223] text-white shadow-sm' 
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  Makan di Tempat (4 orang)
                </button>
                <button 
                  type="button"
                  onClick={() => setSelectedPackage('hantaran')}
                  className={`px-5 py-2.5 rounded-full text-sm font-bold transition cursor-pointer ${
                    selectedPackage === 'hantaran' 
                      ? 'bg-[#133223] text-white shadow-sm' 
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  Hantaran / Oleh-oleh
                </button>
              </div>

              {/* Pilihan Berat */}
              <div className="space-y-3">
                <label className="text-sm font-bold text-[#133223] block">Berat</label>
                <div className="space-y-2">
                  <label className="flex items-center space-x-3 cursor-pointer">
                    <input 
                      type="radio" 
                      name="berat" 
                      checked={berat === '7-9ons'} 
                      onChange={() => setBerat('7-9ons')}
                      className="w-4 h-4 text-[#133223] focus:ring-[#133223]"
                    />
                    <span className="text-sm text-gray-700 font-medium">7–9 ons</span>
                  </label>
                  <label className="flex items-center space-x-3 cursor-pointer">
                    <input 
                      type="radio" 
                      name="berat" 
                      checked={berat === '1-1,2kg'} 
                      onChange={() => setBerat('1-1,2kg')}
                      className="w-4 h-4 text-[#133223] focus:ring-[#133223]"
                    />
                    <span className="text-sm text-gray-700 font-medium">1–1,2 kg</span>
                  </label>
                </div>
              </div>

              {/* Pilihan Jumlah Ekor */}
              <div className="space-y-3">
                <label className="text-sm font-bold text-[#133223] block">Jumlah ekor</label>
                <div className="flex items-center gap-3">
                  {[1, 2, 3].map((num) => (
                    <button
                      key={num}
                      type="button"
                      onClick={() => setJumlahEkor(num)}
                      className={`w-12 h-12 rounded-2xl font-bold text-sm transition cursor-pointer ${
                        jumlahEkor === num 
                          ? 'bg-[#133223] text-white shadow-sm' 
                          : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                      }`}
                    >
                      {num}
                    </button>
                  ))}
                </div>
              </div>

              {/* Komposisi (Boleh Campur) */}
              <div className="space-y-3">
                <label className="text-sm font-bold text-[#133223] block">Komposisi (boleh campur)</label>
                <div className="grid grid-cols-3 gap-4">
                  <div>
                    <span className="text-xs text-gray-500 block mb-1">Ayam</span>
                    <input 
                      type="number" 
                      value={komposisi.ayam} 
                      onChange={(e) => setKomposisi({...komposisi, ayam: parseInt(e.target.value) || 0})}
                      className="w-full bg-gray-50 border border-gray-200 text-sm rounded-xl px-4 py-2.5 focus:outline-none focus:border-[#133223]"
                    />
                  </div>
                  <div>
                    <span className="text-xs text-gray-500 block mb-1">Entok</span>
                    <input 
                      type="number" 
                      value={komposisi.entok} 
                      onChange={(e) => setKomposisi({...komposisi, entok: parseInt(e.target.value) || 0})}
                      className="w-full bg-gray-50 border border-gray-200 text-sm rounded-xl px-4 py-2.5 focus:outline-none focus:border-[#133223]"
                    />
                  </div>
                  <div>
                    <span className="text-xs text-gray-500 block mb-1">Bebek</span>
                    <input 
                      type="number" 
                      value={komposisi.bebek} 
                      onChange={(e) => setKomposisi({...komposisi, bebek: parseInt(e.target.value) || 0})}
                      className="w-full bg-gray-50 border border-gray-200 text-sm rounded-xl px-4 py-2.5 focus:outline-none focus:border-[#133223]"
                    />
                  </div>
                </div>
                <p className="text-xs text-gray-400">Jumlah ayam, entok, dan bebek harus sama dengan jumlah ekor.</p>
              </div>

            </div>

            {/* Card 2: Waktu dan Penerimaan */}
            <div className="bg-white rounded-3xl p-6 lg:p-8 shadow-sm border border-gray-100 space-y-6">
              <h3 className="text-lg font-bold text-[#133223]">Waktu dan Penerimaan</h3>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-1.5">
                  <label className="text-xs font-bold text-gray-600 block">Tanggal</label>
                  <input 
                    type="text" 
                    placeholder="dd/mm/yyyy" 
                    className="w-full bg-gray-50 border border-gray-200 text-sm rounded-xl px-4 py-2.5 focus:outline-none focus:border-[#133223]"
                  />
                </div>
                <div className="space-y-1.5">
                  <label className="text-xs font-bold text-gray-600 block">Jam</label>
                  <input 
                    type="text" 
                    placeholder="Contoh: 10.00" 
                    className="w-full bg-gray-50 border border-gray-200 text-sm rounded-xl px-4 py-2.5 focus:outline-none focus:border-[#133223]"
                  />
                </div>
              </div>

              {/* Opsi Ambil / Kirim */}
              <div className="space-y-3 pt-2">
                <label className="flex items-center space-x-3 cursor-pointer">
                  <input 
                    type="radio" 
                    name="metode" 
                    checked={metodeKirim === 'ambil'} 
                    onChange={() => setMetodeKirim('ambil')}
                    className="w-4 h-4 text-[#133223] focus:ring-[#133223]"
                  />
                  <span className="text-sm text-gray-700 font-medium">Ambil di resto</span>
                </label>
                <label className="flex items-center space-x-3 cursor-pointer">
                  <input 
                    type="radio" 
                    name="metode" 
                    checked={metodeKirim === 'kirim'} 
                    onChange={() => setMetodeKirim('kirim')}
                    className="w-4 h-4 text-[#133223] focus:ring-[#133223]"
                  />
                  <span className="text-sm text-gray-700 font-medium">Kirim</span>
                </label>
              </div>

              {/* Jika Pilih Kirim: Alamat & Kurir */}
              {metodeKirim === 'kirim' && (
                <div className="space-y-4 pt-2">
                  <div className="space-y-1.5">
                    <label className="text-xs font-bold text-gray-600 block">Alamat lengkap pengiriman</label>
                    <textarea 
                      rows="3" 
                      placeholder="Jalan, nomor, kecamatan" 
                      className="w-full bg-gray-50 border border-gray-200 text-sm rounded-xl p-4 focus:outline-none focus:border-[#133223]"
                    ></textarea>
                  </div>

                  <div className="space-y-2">
                    <label className="text-xs font-bold text-gray-600 block">Kurir pilihan</label>
                    <div className="space-y-2">
                      {['Go Send', 'Grab Express', 'Shopee'].map((k) => (
                        <label key={k} className="flex items-center space-x-3 cursor-pointer">
                          <input 
                            type="radio" 
                            name="kurir" 
                            checked={kurir === k.toLowerCase().replace(' ', '')} 
                            onChange={() => setKurir(k.toLowerCase().replace(' ', ''))}
                            className="w-4 h-4 text-[#133223] focus:ring-[#133223]"
                          />
                          <span className="text-sm text-gray-700">{k}</span>
                        </label>
                      ))}
                    </div>
                  </div>

                  {/* Info Ongkir */}
                  <div className="bg-[#FEF3C7] border border-[#FDE68A] text-[#92400E] p-4 rounded-2xl text-xs leading-relaxed">
                    Ongkir ditanggung pembeli. Admin akan menghitung ongkir dan mengonfirmasi total lewat WhatsApp sebelum Anda membayar.
                  </div>
                </div>
              )}

            </div>

            {/* Card 3: Data Pemesan */}
            <div className="bg-white rounded-3xl p-6 lg:p-8 shadow-sm border border-gray-100 space-y-4">
              <h3 className="text-lg font-bold text-[#133223]">Data Pemesan</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-1.5">
                  <label className="text-xs font-bold text-gray-600 block">Nama</label>
                  <input 
                    type="text" 
                    placeholder="Nama pemesan" 
                    className="w-full bg-gray-50 border border-gray-200 text-sm rounded-xl px-4 py-2.5 focus:outline-none focus:border-[#133223]"
                  />
                </div>
                <div className="space-y-1.5">
                  <label className="text-xs font-bold text-gray-600 block">Nomor WhatsApp</label>
                  <input 
                    type="text" 
                    placeholder="08xx" 
                    className="w-full bg-gray-50 border border-gray-200 text-sm rounded-xl px-4 py-2.5 focus:outline-none focus:border-[#133223]"
                  />
                </div>
              </div>
            </div>

          </div>

          {/* Kolom Kanan: Ringkasan Pesanan (Sticky Sidebar) */}
          <div className="space-y-6">
            <div className="bg-white rounded-3xl p-6 lg:p-8 shadow-sm border border-gray-100 space-y-6 sticky top-24">
              <h3 className="text-lg font-bold text-[#133223]">Ringkasan</h3>
              
              <div className="space-y-3 text-sm border-b border-gray-100 pb-4">
                <div className="flex justify-between">
                  <span className="text-gray-600">Paket 1–1,2 kg x2</span>
                  <span className="font-bold text-[#133223]">Rp 220.000</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Ongkir</span>
                  <span className="font-medium text-gray-500">Dikonfirmasi admin</span>
                </div>
              </div>

              <div className="flex justify-between items-center">
                <span className="font-bold text-[#133223]">Total sementara</span>
                <span className="font-bold text-lg text-[#133223]">Rp 220.000</span>
              </div>

              {/* Info QRIS & Pre-order */}
              <div className="bg-gray-50 border border-gray-200 text-gray-600 p-4 rounded-2xl text-xs leading-relaxed">
                Pembayaran QRIS dilakukan setelah admin mengonfirmasi total. Pre-order paling lambat H-1.
              </div>

              {/* Tombol Kirim Pesanan (Gunakan satu tag button yang benar) */}
              <button 
                type="button"
                onClick={() => setCurrentPage && setCurrentPage('order-success')}
                className="w-full bg-[#D93838] hover:bg-[#c22f2f] text-white font-bold py-3.5 rounded-xl transition cursor-pointer text-sm shadow-sm"
              >
                Kirim Pesanan
              </button>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}