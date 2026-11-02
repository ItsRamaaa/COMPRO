import React, { useState } from 'react';

export default function PesanOnlinePage({ setCurrentPage }) {
  const [orderType, setOrderType] = useState('bawa-pulang'); // 'bawa-pulang' atau 'makan-tempat'
  const [paymentMethod, setPaymentMethod] = useState('qris'); // 'qris' atau 'kasir'

  const handleSubmitOrder = (e) => {
    e.preventDefault();
    // Arahkan ke halaman sukses / status pesanan
    if (setCurrentPage) {
      setCurrentPage('order-success');
    }
  };

  return (
    <section className="bg-[#F9F8F6] py-12 w-full font-['Plus_Jakarta_Sans',sans-serif]">
      <div className="w-full px-8 lg:px-16 space-y-8">
        
        {/* Header Halaman */}
        <div className="space-y-1">
          <h2 className="text-3xl lg:text-4xl font-serif font-bold text-[#133223]">
            Pesan Online
          </h2>
        </div>

        {/* Form Utama & Ringkasan Pesanan (Layout 2 Kolom) */}
        <form onSubmit={handleSubmitOrder} className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
          
          {/* Kolom Kiri: Data Pemesan & Pengaturan (Lebar 2 Grid) */}
          <div className="lg:col-span-2 bg-white rounded-3xl p-6 lg:p-8 shadow-sm border border-gray-100 space-y-6">
            
            {/* Bagian Jenis Pesanan */}
            <div className="space-y-3">
              <span className="text-xs font-bold text-gray-500 block">Data Pemesan</span>
              <div className="flex gap-2">
                <button
                  type="button"
                  onClick={() => setOrderType('bawa-pulang')}
                  className={`px-5 py-2.5 rounded-full text-sm font-bold transition cursor-pointer ${
                    orderType === 'bawa-pulang'
                      ? 'bg-[#184029] text-white shadow-sm'
                      : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                  }`}
                >
                  Bawa Pulang
                </button>
                <button
                  type="button"
                  onClick={() => setOrderType('makan-tempat')}
                  className={`px-5 py-2.5 rounded-full text-sm font-bold transition cursor-pointer ${
                    orderType === 'makan-tempat'
                      ? 'bg-[#184029] text-white shadow-sm'
                      : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                  }`}
                >
                  Makan di Tempat
                </button>
              </div>
            </div>

            {/* Input Nama */}
            <div className="space-y-1.5">
              <label className="text-xs font-bold text-gray-700 block">Nama</label>
              <input 
                type="text" 
                placeholder="Nama pemesan" 
                required
                className="w-full bg-[#F9F8F6] border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-[#184029] transition"
              />
            </div>

            {/* Input Nomor WhatsApp */}
            <div className="space-y-1.5">
              <label className="text-xs font-bold text-gray-700 block">Nomor WhatsApp</label>
              <input 
                type="text" 
                placeholder="08xx" 
                required
                className="w-full bg-[#F9F8F6] border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-[#184029] transition"
              />
            </div>

            {/* Jam Ambil */}
            <div className="space-y-3 pt-2">
              <span className="text-xs font-bold text-gray-700 block">Jam ambil</span>
              
              <label className="flex items-center gap-3 text-sm text-gray-700 cursor-pointer">
                <input type="radio" name="jam-ambil" defaultChecked className="accent-[#184029]" />
                <span>Secepatnya (estimasi 30 menit)</span>
              </label>

              <label className="flex items-center gap-3 text-sm text-gray-700 cursor-pointer">
                <input type="radio" name="jam-ambil" className="accent-[#184029]" />
                <span>Pilih jam</span>
              </label>

              <div className="space-y-1.5 pt-1">
                <label className="text-xs font-bold text-gray-600 block">Jam yang dipilih</label>
                <input 
                  type="text" 
                  placeholder="Contoh: 12.30" 
                  className="w-full bg-[#F9F8F6] border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-[#184029] transition"
                />
              </div>
            </div>

            {/* Catatan */}
            <div className="space-y-1.5">
              <label className="text-xs font-bold text-gray-700 block">Catatan</label>
              <textarea 
                rows="3"
                placeholder="Contoh: sambal dipisah" 
                className="w-full bg-[#F9F8F6] border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-[#184029] transition resize-none"
              ></textarea>
            </div>

            <div className="bg-[#FEF3C7] border border-[#FDE68A] text-[#92400E] text-xs p-3 rounded-xl leading-relaxed">
              Jam ambil dikonfirmasi admin dan bisa dilihat di halaman Status Pesanan.
            </div>

            {/* BAGIAN METODE PEMBAYARAN QRIS / KASIR */}
            <div className="space-y-4 pt-6 border-t border-gray-100">
              <h3 className="text-lg font-bold text-[#133223]">Metode Pembayaran</h3>
              
              <div className="space-y-3">
                <label className="flex items-center gap-3 text-sm text-gray-700 cursor-pointer">
                  <input 
                    type="radio" 
                    name="payment" 
                    checked={paymentMethod === 'kasir'}
                    onChange={() => setPaymentMethod('kasir')}
                    className="accent-[#184029]" 
                  />
                  <span>Bayar di kasir saat mengambil pesanan</span>
                </label>

                <label className="flex items-center gap-3 text-sm text-gray-700 cursor-pointer">
                  <input 
                    type="radio" 
                    name="payment" 
                    checked={paymentMethod === 'qris'}
                    onChange={() => setPaymentMethod('qris')}
                    className="accent-[#184029]" 
                  />
                  <span>Bayar dengan QRIS</span>
                </label>

                {/* Tampilan QRIS jika dipilih */}
                {paymentMethod === 'qris' && (
                  <div className="bg-[#F9F8F6] rounded-2xl p-5 border border-gray-200 space-y-4 animate-fadeIn">
                    <div className="flex flex-col sm:flex-row gap-5 items-start">
                      
                      {/* Kotak Gambar QRIS (Placeholder URL aman) */}
                      <div className="w-36 h-48 bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden p-2 flex-shrink-0 flex items-center justify-center">
                        <img 
                          src="https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&q=80&w=400" 
                          alt="QRIS Waroeng SR" 
                          className="w-full h-full object-cover rounded-lg"
                        />
                      </div>

                      {/* Keterangan & Upload Bukti */}
                      <div className="space-y-3 text-sm flex-1 w-full">
                        <div>
                          <h4 className="font-bold text-[#133223]">Scan QRIS ini</h4>
                          <p className="text-gray-500 text-xs mt-0.5">Masukkan nominal sesuai total setelah promo: <span className="font-bold text-[#133223]">Rp 65.000</span></p>
                        </div>

                        {/* Unggah bukti pembayaran (Diperbaiki agar tidak kepotong) */}
                        <div className="space-y-1.5 pt-1 w-full">
                          <span className="text-xs font-bold text-gray-600 block">Unggah bukti pembayaran (screenshot)</span>
                          <div className="w-full">
                            <input 
                              type="file" 
                              accept="image/*"
                              className="w-full text-xs text-gray-500 file:mr-3 file:py-2 file:px-4 file:rounded-xl file:border-0 file:text-xs file:font-bold file:bg-[#184029] file:text-white hover:file:bg-[#0f291c] cursor-pointer" 
                            />
                          </div>
                        </div>
                      </div>

                    </div>

                    <div className="bg-[#FEF3C7] border border-[#FDE68A] text-[#92400E] text-xs p-3 rounded-xl leading-relaxed">
                      Mohon bayar sesuai jumlah total pesanan (Rp 65.000, sudah termasuk promo) agar pesanan dapat dikonfirmasi admin. Tunjukkan juga screenshot bukti bayar ke kasir saat mengambil pesanan.
                    </div>
                  </div>
                )}
              </div>
            </div>

          </div>

          {/* Kolom Kanan: Ringkasan Pesanan[cite: 6] */}
          <div className="bg-white rounded-3xl p-6 lg:p-8 shadow-sm border border-gray-100 space-y-6 sticky top-8">
            <h3 className="text-lg font-bold text-[#133223]">Ringkasan</h3>

            <div className="space-y-3 text-sm">
              <div className="flex justify-between text-gray-600">
                <span>Tengkleng Kambing x1</span>
                <span className="font-medium text-[#133223]">Rp 40.000</span>
              </div>
              <div className="flex justify-between text-gray-600">
                <span>Tongseng Kambing x1</span>
                <span className="font-medium text-[#133223]">Rp 30.000</span>
              </div>
              
              <div className="pt-3 border-t border-gray-100 flex justify-between font-bold text-gray-800">
                <span>Subtotal</span>
                <span>Rp 70.000</span>
              </div>
              
              <div className="flex justify-between text-[#D93838] font-medium text-xs">
                <span>Promo Makan Siang</span>
                <span>-Rp 5.000</span>
              </div>

              <div className="pt-3 border-t border-gray-100 flex justify-between items-center">
                <span className="font-bold text-base text-[#133223]">Total</span>
                <span className="font-black text-lg text-[#133223]">Rp 65.000</span>
              </div>
            </div>

            {/* Tombol Kirim Pesanan */}
            <button 
              type="submit"
              className="w-full bg-[#D93838] hover:bg-[#c22f2f] text-white font-bold py-3.5 rounded-xl transition cursor-pointer text-sm shadow-sm"
            >
              Kirim Pesanan
            </button>
          </div>

        </form>

      </div>
    </section>
  );
}