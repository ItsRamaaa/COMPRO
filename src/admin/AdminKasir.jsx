import React, { useState } from 'react';

export default function AdminKasir() {
  const [orderType, setOrderType] = useState('Makan di Tempat');
  const [paymentMethod, setPaymentMethod] = useState('Tunai');
  const [selectedCategory, setSelectedCategory] = useState('Semua');

  // State daftar item di keranjang kasir
  const [cartItems, setCartItems] = useState([
    { name: 'Tengkleng Kambing', price: 40000, qty: 1 },
    { name: 'Gulai / Sop Ikan Patin', price: 15000, qty: 2 },
  ]);

  // Data katalog menu resto untuk kasir
  const menuList = [
    { name: 'Tengkleng Kambing', price: 40000, category: 'Kambing' },
    { name: 'Tongseng Kambing', price: 30000, category: 'Kambing' },
    { name: 'Sate Kambing 10 tusuk', price: 50000, category: 'Kambing' },
    { name: 'Nasi Goreng Kambing', price: 25000, category: 'Kambing' },
    { name: 'Gulai / Sop Ikan Patin', price: 15000, category: 'Ikan' },
    { name: 'Mangut Lele', price: 15000, category: 'Ikan' },
    { name: 'Bakmi Godog', price: 20000, category: 'Bakmi' },
    { name: 'Es Teh Manis', price: 5000, category: 'Minuman' },
    { name: 'Es Kopi Gula Aren', price: 15000, category: 'Minuman' },
  ];

  const categories = ['Semua', 'Kambing', 'Ikan', 'Ayam dan Bebek', 'Bakmi', 'Minuman'];

  // Fungsi tambah item ke keranjang
  const addToCart = (menu) => {
    setCartItems(prev => {
      const existing = prev.find(item => item.name === menu.name);
      if (existing) {
        return prev.map(item => item.name === menu.name ? { ...item, qty: item.qty + 1 } : item);
      }
      return [...prev, { name: menu.name, price: menu.price, qty: 1 }];
    });
  };

  // Hitung subtotal & total
  const subtotal = cartItems.reduce((acc, item) => acc + (item.price * item.qty), 0);
  const discount = 5000; // Contoh promo makan siang
  const total = subtotal - discount;

  const filteredMenu = selectedCategory === 'Semua' 
    ? menuList 
    : menuList.filter(m => m.category === selectedCategory);

  return (
    <div className="space-y-6 max-w-7xl mx-auto font-['Plus_Jakarta_Sans',sans-serif]">
      
      {/* Header */}
      <h2 className="text-3xl font-serif font-bold text-[#133223]">
        Pesanan Manual (Kasir)
      </h2>

      {/* Grid Utama: Kiri (Katalog Menu), Kanan (Form Kasir & Keranjang) */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        
        {/* Kolom Kiri: Katalog Menu (Lebar 7 Col) */}
        <div className="lg:col-span-7 space-y-4">
          
          {/* Input Cari Menu */}
          <div className="bg-white p-4 rounded-2xl border border-gray-100 shadow-sm space-y-3">
            <span className="text-xs text-gray-500 font-medium block">Cari menu</span>
            <input 
              type="text" 
              placeholder="Ketik nama menu..." 
              className="w-full bg-[#FAF8F5] border border-gray-200 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:border-[#133223]"
            />
            
            {/* Filter Kategori */}
            <div className="flex flex-wrap gap-2 pt-1">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`px-3 py-1.5 rounded-xl text-xs font-bold transition cursor-pointer ${
                    selectedCategory === cat 
                      ? 'bg-[#133223] text-white shadow-sm' 
                      : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>

          {/* Grid Menu Card */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
            {filteredMenu.map((menu, idx) => (
              <div key={idx} className="bg-white p-4 rounded-2xl border border-gray-100 shadow-sm flex flex-col justify-between space-y-3">
                <div>
                  <h4 className="font-bold text-sm text-[#133223]">{menu.name}</h4>
                  <p className="text-xs text-gray-500 mt-0.5">Rp {menu.price.toLocaleString('id-ID')}</p>
                </div>
                <button 
                  onClick={() => addToCart(menu)}
                  className="w-full bg-[#FAF8F5] hover:bg-[#133223] hover:text-white text-[#133223] border border-gray-200 py-1.5 rounded-xl text-xs font-bold transition cursor-pointer flex items-center justify-center"
                >
                  + Tambah
                </button>
              </div>
            ))}
          </div>

        </div>

        {/* Kolom Kanan: Detail Pesanan Kasir (Lebar 5 Col) */}
        <div className="lg:col-span-5 bg-white rounded-3xl p-6 shadow-sm border border-gray-100 space-y-5">
          
          <div className="flex justify-between items-center border-b border-gray-100 pb-3">
            <h3 className="font-bold text-base text-[#133223]">Pesanan Baru · #WSR-1027</h3>
          </div>

          {/* Pilihan Tipe Pesanan */}
          <div className="flex bg-[#FAF8F5] p-1 rounded-xl">
            <button 
              onClick={() => setOrderType('Makan di Tempat')}
              className={`flex-1 py-2 text-xs font-bold rounded-lg transition cursor-pointer ${orderType === 'Makan di Tempat' ? 'bg-[#133223] text-white shadow-sm' : 'text-gray-500'}`}
            >
              Makan di Tempat
            </button>
            <button 
              onClick={() => setOrderType('Bawa Pulang')}
              className={`flex-1 py-2 text-xs font-bold rounded-lg transition cursor-pointer ${orderType === 'Bawa Pulang' ? 'bg-[#133223] text-white shadow-sm' : 'text-gray-500'}`}
            >
              Bawa Pulang
            </button>
          </div>

          {/* Nomor Meja & Nama Pelanggan */}
          <div className="grid grid-cols-2 gap-3 text-xs">
            <div className="space-y-1">
              <label className="font-bold text-gray-700">Nomor meja</label>
              <input type="text" placeholder="5" defaultValue="5" className="w-full bg-[#FAF8F5] border border-gray-200 rounded-xl px-3 py-2 focus:outline-none focus:border-[#133223]" />
            </div>
            <div className="space-y-1">
              <label className="font-bold text-gray-700">Nama pelanggan (opsional)</label>
              <input type="text" placeholder="Nama" className="w-full bg-[#FAF8F5] border border-gray-200 rounded-xl px-3 py-2 focus:outline-none focus:border-[#133223]" />
            </div>
          </div>

          {/* List Item di Keranjang */}
          <div className="space-y-2 pt-2 border-t border-gray-100 text-sm max-h-40 overflow-y-auto pr-1">
            {cartItems.map((item, idx) => (
              <div key={idx} className="flex justify-between text-xs text-gray-700">
                <span>{item.name} x{item.qty}</span>
                <span className="font-semibold">Rp {(item.price * item.qty).toLocaleString('id-ID')}</span>
              </div>
            ))}
          </div>

          {/* Ringkasan Biaya */}
          <div className="pt-3 border-t border-gray-100 space-y-1.5 text-xs">
            <div className="flex justify-between text-gray-500">
              <span>Subtotal</span>
              <span>Rp {subtotal.toLocaleString('id-ID')}</span>
            </div>
            <div className="flex justify-between text-[#D93838] font-medium">
              <span>Promo Makan Siang</span>
              <span>-Rp {discount.toLocaleString('id-ID')}</span>
            </div>
            <div className="flex justify-between items-center pt-2 border-t border-gray-100 font-bold text-sm">
              <span className="text-[#133223]">Total</span>
              <span className="text-base text-[#133223]">Rp {total.toLocaleString('id-ID')}</span>
            </div>
          </div>

          {/* Metode Pembayaran */}
          <div className="space-y-1.5 text-xs pt-2 border-t border-gray-100">
            <label className="font-bold text-gray-700 block">Pembayaran</label>
            <div className="flex gap-2">
              <button 
                onClick={() => setPaymentMethod('Tunai')}
                className={`flex-1 py-2 font-bold rounded-xl border transition cursor-pointer ${paymentMethod === 'Tunai' ? 'bg-[#133223] text-white border-[#133223]' : 'bg-white text-gray-600 border-gray-200'}`}
              >
                Tunai
              </button>
              <button 
                onClick={() => setPaymentMethod('QRIS')}
                className={`flex-1 py-2 font-bold rounded-xl border transition cursor-pointer ${paymentMethod === 'QRIS' ? 'bg-[#133223] text-white border-[#133223]' : 'bg-white text-gray-600 border-gray-200'}`}
              >
                QRIS
              </button>
            </div>
          </div>

          {/* Uang Diterima & Kembalian */}
          {paymentMethod === 'Tunai' && (
            <div className="grid grid-cols-2 gap-3 text-xs">
              <div className="space-y-1">
                <label className="font-bold text-gray-700">Uang diterima</label>
                <input type="text" defaultValue="Rp 100.000" className="w-full bg-[#FAF8F5] border border-gray-200 rounded-xl px-3 py-2 font-semibold text-[#133223]" />
              </div>
              <div className="space-y-1">
                <label className="font-bold text-gray-700">Kembalian</label>
                <input type="text" readOnly defaultValue="Rp 35.000" className="w-full bg-gray-100 border border-gray-200 rounded-xl px-3 py-2 font-bold text-emerald-700" />
              </div>
            </div>
          )}

          {/* Tombol Aksi */}
          <div className="space-y-2 pt-2">
            <button 
              onClick={() => alert('Pesanan berhasil disimpan dan diteruskan ke dapur!')}
              className="w-full bg-[#D93838] hover:bg-red-600 text-white font-bold py-3 rounded-xl text-xs transition cursor-pointer shadow-sm text-center"
            >
              Simpan dan Kirim ke Dapur
            </button>
            <button 
              onClick={() => setCartItems([])}
              className="w-full bg-white hover:bg-gray-50 border border-gray-300 text-gray-600 font-bold py-2.5 rounded-xl text-xs transition cursor-pointer text-center"
            >
              Batal
            </button>
          </div>

        </div>

      </div>

      {/* Keterangan Footer Kasir */}
      <p className="text-[11px] text-gray-400 italic text-center pt-2">
        Untuk pelanggan yang datang langsung. Pesanan tersimpan di daftar Pesanan, masuk ke Dapur, dan tercatat di Laporan.
      </p>

    </div>
  );
}