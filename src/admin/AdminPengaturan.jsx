import React, { useState, useRef } from 'react';

export default function AdminPengaturan() {
  // State untuk pengaturan pesanan, kontak, dan operasional restoran
  const [settings, setSettings] = useState({
    terimaBawaPulang: true,
    terimaMakanTempat: true,
    terimaKirim: true,
    jedaMin: '30',
    kuotaPaket: '[n] ekor',
    preOrderMax: '1',
    linkGoFood: 'https://gofood.link/a/KdmHP4w',
    linkGrabFood: 'https://app.grab.com/s/MWhdMJux',
    jamBuka: '09.00-20.00',
    noWhatsApp: '0812-2920-1970'
  });

  // State untuk menyimpan URL preview gambar QRIS
  const [qrisImage, setQrisImage] = useState(null);
  
  // Referensi untuk elemen input file tersembunyi
  const fileInputRef = useRef(null);

  // Fungsi untuk menangani perubahan input teks
  const handleChange = (e) => {
    const { name, value } = e.target;
    setSettings(prev => ({ ...prev, [name]: value }));
  };

  // Fungsi untuk menangani perubahan checkbox
  const handleCheckbox = (name) => {
    setSettings(prev => ({ ...prev, [name]: !prev[name] }));
  };

  // Fungsi untuk menangani pemilihan file gambar QRIS dari komputer lokal
  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const imageUrl = URL.createObjectURL(file);
      setQrisImage(imageUrl);
    }
  };

  // Fungsi untuk menyimpan perubahan pengaturan
  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Pengaturan berhasil disimpan!');
  };

  return (
    <div className="space-y-6 max-w-7xl mx-auto font-['Plus_Jakarta_Sans',sans-serif]">
      
      {/* Header Halaman */}
      <h2 className="text-3xl font-serif font-bold text-[#133223]">
        Pengaturan
      </h2>

      {/* Layout Grid Dua Kolom: QRIS di Kiri, Form Pengaturan di Kanan */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
        
        {/* Kolom Kiri: Pembayaran QRIS */}
        <div className="lg:col-span-4 bg-white rounded-3xl p-6 shadow-sm border border-gray-100 space-y-4">
          <h3 className="font-bold text-base text-[#133223]">Pembayaran QRIS</h3>
          
          <div className="border border-gray-200 rounded-2xl p-4 flex flex-col items-center justify-center bg-gray-50/50">
            {/* Area Tampilan Gambar QRIS (Bisa default atau hasil upload lokal) */}
            <div className="w-full h-56 bg-white border border-gray-200 rounded-xl flex items-center justify-center shadow-sm p-2 overflow-hidden">
              {qrisImage ? (
                <img src={qrisImage} alt="QRIS Preview" className="w-full h-full object-contain" />
              ) : (
                <div className="text-center space-y-2">
                  <div className="w-24 h-8 bg-blue-600 mx-auto rounded flex items-center justify-center text-white font-bold text-xs">gopay merchant</div>
                  <div className="w-28 h-28 bg-gray-900 mx-auto rounded flex items-center justify-center text-white text-[10px]">QRIS CODE</div>
                </div>
              )}
            </div>
          </div>

          {/* Input File Tersembunyi */}
          <input 
            type="file" 
            ref={fileInputRef}
            onChange={handleFileChange}
            accept="image/*"
            className="hidden"
          />

          <button 
            type="button"
            onClick={() => fileInputRef.current.click()}
            className="w-full bg-white hover:bg-gray-50 border border-gray-300 text-gray-700 font-bold py-2.5 rounded-xl text-xs transition cursor-pointer shadow-sm"
          >
            Ganti Gambar QRIS
          </button>
          
          <p className="text-[11px] text-gray-400">
            Gambar ini tampil ke pembeli yang memilih QRIS.
          </p>
        </div>

        {/* Kolom Kanan: Pemesanan dan Kontak */}
        <div className="lg:col-span-8 bg-white rounded-3xl p-6 shadow-sm border border-gray-100 space-y-6">
          <h3 className="font-bold text-base text-[#133223]">Pemesanan dan Kontak</h3>

          <form onSubmit={handleSubmit} className="space-y-4 text-xs">
            
            {/* Daftar Checkbox Pengaturan Layanan */}
            <div className="space-y-2.5 font-medium text-gray-700 pb-2">
              <label className="flex items-center gap-2.5 cursor-pointer">
                <input 
                  type="checkbox" 
                  checked={settings.terimaBawaPulang}
                  onChange={() => handleCheckbox('terimaBawaPulang')}
                  className="rounded accent-[#133223]"
                />
                Terima pesanan bawa pulang
              </label>
              <label className="flex items-center gap-2.5 cursor-pointer">
                <input 
                  type="checkbox" 
                  checked={settings.terimaMakanTempat}
                  onChange={() => handleCheckbox('terimaMakanTempat')}
                  className="rounded accent-[#133223]"
                />
                Terima pesanan makan di tempat
              </label>
              <label className="flex items-center gap-2.5 cursor-pointer">
                <input 
                  type="checkbox" 
                  checked={settings.terimaKirim}
                  onChange={() => handleCheckbox('terimaKirim')}
                  className="rounded accent-[#133223]"
                />
                Terima pesanan kirim (paket hantaran)
              </label>
            </div>

            <div className="space-y-1.5">
              <label className="block text-gray-500 font-medium">Jeda minimum pesanan (menit)</label>
              <input 
                type="text" 
                name="jedaMin"
                value={settings.jedaMin}
                onChange={handleChange}
                className="w-full border border-gray-200 rounded-xl p-3 text-gray-800 focus:outline-none focus:border-[#133223]"
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-1.5">
                <label className="block text-gray-500 font-medium">Kuota paket per hari</label>
                <input 
                  type="text" 
                  name="kuotaPaket"
                  value={settings.kuotaPaket}
                  onChange={handleChange}
                  className="w-full border border-gray-200 rounded-xl p-3 text-gray-800 focus:outline-none focus:border-[#133223]"
                />
              </div>
              <div className="space-y-1.5">
                <label className="block text-gray-500 font-medium">Pre-order paling lambat (hari)</label>
                <input 
                  type="text" 
                  name="preOrderMax"
                  value={settings.preOrderMax}
                  onChange={handleChange}
                  className="w-full border border-gray-200 rounded-xl p-3 text-gray-800 focus:outline-none focus:border-[#133223]"
                />
              </div>
            </div>

            <div className="space-y-1.5">
              <label className="block text-gray-500 font-medium">Link GoFood</label>
              <input 
                type="text" 
                name="linkGoFood"
                value={settings.linkGoFood}
                onChange={handleChange}
                className="w-full border border-gray-200 rounded-xl p-3 text-gray-800 focus:outline-none focus:border-[#133223]"
              />
            </div>

            <div className="space-y-1.5">
              <label className="block text-gray-500 font-medium">Link GrabFood</label>
              <input 
                type="text" 
                name="linkGrabFood"
                value={settings.linkGrabFood}
                onChange={handleChange}
                className="w-full border border-gray-200 rounded-xl p-3 text-gray-800 focus:outline-none focus:border-[#133223]"
              />
            </div>

            <div className="space-y-1.5">
              <label className="block text-gray-500 font-medium">Jam buka</label>
              <input 
                type="text" 
                name="jamBuka"
                value={settings.jamBuka}
                onChange={handleChange}
                className="w-full border border-gray-200 rounded-xl p-3 text-gray-800 focus:outline-none focus:border-[#133223]"
              />
            </div>

            <div className="space-y-1.5">
              <label className="block text-gray-500 font-medium">Nomor WhatsApp</label>
              <input 
                type="text" 
                name="noWhatsApp"
                value={settings.noWhatsApp}
                onChange={handleChange}
                className="w-full border border-gray-200 rounded-xl p-3 text-gray-800 focus:outline-none focus:border-[#133223]"
              />
            </div>

            <button 
              type="submit"
              className="w-full bg-[#184029] hover:bg-[#0f291c] text-white font-bold py-3 rounded-xl transition cursor-pointer shadow-sm text-sm mt-4"
            >
              Simpan
            </button>

          </form>
        </div>

      </div>

    </div>
  );
}