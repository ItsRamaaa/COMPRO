import React, { useState } from 'react';

export default function AdminLogin({ onLoginSuccess, setCurrentPage }) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Validasi khusus admin
    if (username === 'admin' && password === 'admin') {
      onLoginSuccess(); // Masuk ke Dashboard Admin
    } else {
      alert('Username atau kata sandi salah! Gunakan admin / admin.');
    }
  };

  return (
    <div className="min-h-screen bg-[#133223] flex items-center justify-center p-4 font-['Plus_Jakarta_Sans',sans-serif] relative">
      
      {/* Tombol kembali ke website publik di pojok */}
      <button 
        type="button"
        onClick={() => setCurrentPage('home')}
        className="absolute top-6 left-6 text-xs text-white/70 hover:text-white transition cursor-pointer font-medium"
      >
        ← Kembali ke Beranda
      </button>

      {/* Kotak Form Login */}
      <div className="bg-[#FAF8F5] rounded-3xl p-8 lg:p-10 w-full max-w-md shadow-2xl border border-white/10 text-center space-y-6">
        
        {/* Logo Bulat Admin */}
        <div className="flex justify-center">
          <div className="w-14 h-14 bg-[#133223] rounded-full flex flex-col items-center justify-center text-white shadow-md border-2 border-emerald-800">
             <span className="text-[7px] font-bold tracking-tighter">WAROENG</span>
             <span className="text-sm font-black text-yellow-400 leading-none">SR</span>
          </div>
        </div>

        {/* Judul */}
        <div className="space-y-1">
          <h2 className="text-2xl lg:text-3xl font-serif font-bold text-[#133223]">
            Waroeng SR
          </h2>
          <p className="text-xs text-gray-500 font-medium">
            Masuk untuk mengelola resto
          </p>
        </div>

        {/* Form Input */}
        <form onSubmit={handleSubmit} className="space-y-4 text-left">
          <div className="space-y-1.5">
            <label className="text-xs font-bold text-gray-700 block">Email atau username</label>
            <input 
              type="text" 
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              placeholder="admin"
              required
              className="w-full bg-white border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-[#133223] transition shadow-sm"
            />
          </div>

          <div className="space-y-1.5">
            <label className="text-xs font-bold text-gray-700 block">Kata sandi</label>
            <input 
              type="password" 
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="••••••••"
              required
              className="w-full bg-white border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-[#133223] transition shadow-sm"
            />
          </div>

          <button 
            type="submit"
            className="w-full bg-[#184029] hover:bg-[#0f291c] text-white font-bold py-3.5 rounded-xl transition cursor-pointer text-sm shadow-md mt-2"
          >
            Masuk
          </button>
        </form>

      </div>
    </div>
  );
}