export default function CeritaPage() {
  return (
    <section className="bg-[#F9F8F6] py-12 w-full font-['Plus_Jakarta_Sans',sans-serif]">
      <div className="w-full px-8 lg:px-16 space-y-8">
        
        {/* Layout Grid 2 Kolom (Teks Cerita di Kiri, Foto Warung di Kanan) */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          
          {/* Kolom Kiri: Teks Narasi Cerita */}
          <div className="space-y-6">
            
            {/* Header Judul */}
            <div className="space-y-2">
              <span className="text-[#D93838] text-xs font-extrabold uppercase tracking-widest">
                CERITA KAMI
              </span>
              <h2 className="text-3xl lg:text-4xl font-serif font-bold text-[#133223]">
                Asal-usulé
              </h2>
            </div>

            {/* Paragraf Sejarah */}
            <p className="text-gray-600 text-sm md:text-base leading-relaxed">
              Tengkleng Djowo Mbah Sum berdiri sejak 2015 di Jl. KS. Tubun No. 2B, Karangpucung, Bobosan, Purwokerto Utara. Kini resto berada di Jl. Raya Baturraden, Rempoah, Banyumas[cite: 8].
            </p>

            <p className="text-gray-600 text-sm md:text-base leading-relaxed">
              Rumah makan ini menyajikan olahan daging kambing bercita rasa Jawa, khususnya Yogyakarta: sate, tongseng, dan tengkleng[cite: 8].
            </p>

            <p className="text-gray-600 text-sm md:text-base leading-relaxed">
              Nama Mbah Sum diambil dari R.Ngt. Suminem, ibu dari pendiri yang berasal dari Yogyakarta. Nama ini menjadi bentuk penghormatan dan membawa nilai keluarga serta akar budaya Yogyakarta[cite: 8].
            </p>

            {/* Sub-bagian: Apa itu tengkleng? */}
            <div className="space-y-2 pt-4 border-t border-gray-200">
              <h3 className="text-xl font-serif font-bold text-[#133223]">
                Apa itu tengkleng?
              </h3>
              <p className="text-gray-600 text-sm md:text-base leading-relaxed">
                Masakan khas Jawa dari tulang kambing yang masih berdaging, dimasak dengan racikan bumbu dan rempah[cite: 8].
              </p>
            </div>

          </div>

          {/* Kolom Kanan: Foto Suasana Resto */}
          <div className="rounded-3xl overflow-hidden shadow-sm border border-gray-100 bg-gray-100 h-[450px] lg:h-[520px]">
            <img 
              src="src/assets/gambar_uji_coba.png" 
              alt="Suasana Waroeng SR Baturraden" 
              className="w-full h-full object-cover"
            />
          </div>

        </div>

      </div>
    </section>
  );
}