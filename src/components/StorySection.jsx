export default function StorySection() {
  // Komponen section Cerita dan Lokasi
  return (
    <section className="bg-[#F9F8F6] pb-16 w-full">
      <div className="w-full px-8 lg:px-16 grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        
        {/* Kolom Kiri: Gambar Restoran */}
        <div className="lg:col-span-6 rounded-3xl overflow-hidden bg-gray-100 shadow-sm border border-gray-100 h-[380px] lg:h-[420px]">
          <img 
            src="src/assets/asal_usul.png" 
            alt="Suasana Waroeng SR" 
            className="w-full h-full object-cover"
          />
        </div>

        {/* Kolom Kanan: Cerita Kami & Jam Lokasi (Dirapatkan posisinya) */}
        <div className="lg:col-span-6 flex flex-col space-y-6">
          
          {/* Bagian Asal-usulé */}
          <div className="space-y-4">
            <div>
              <span className="text-[#D93838] text-xs font-extrabold uppercase tracking-widest">
                CERITA KAMI
              </span>
              <h3 className="text-3xl lg:text-4xl font-serif font-bold text-[#133223] mt-1">
                Asal-usulé
              </h3>
            </div>

            <p className="text-gray-600 text-sm md:text-base leading-relaxed">
              Berdiri sejak 2015 sebagai rumah makan olahan kambing khas Yogyakarta. Nama Mbah Sum diambil dari R.Ngt. Suminem, ibu dari pendiri yang berasal dari Yogyakarta.
            </p>

            <div>
              <button className="bg-[#2A6E48] hover:bg-[#0f291c] text-white font-bold px-6 py-3 rounded-xl transition cursor-pointer text-sm shadow-sm">
                Baca Cerita
              </button>
            </div>
          </div>

          {/* Card Jam dan Lokasi (Mepet dekat di bawah tombol Baca Cerita) */}
          <div className="bg-white rounded-3xl p-6 lg:p-8 shadow-sm border border-gray-100 space-y-3">
            <h4 className="font-bold text-xl text-[#133223]">
              Jam dan Lokasi
            </h4>
            <div className="space-y-1.5 text-sm text-gray-600">
              <p>Setiap hari 09.00 – 20.00 WIB</p>
              <p>Jl. Raya Baturraden, Rempoah, Banyumas</p>
              <p className="font-medium text-[#133223] pt-1">WhatsApp 0812-2920-1970</p>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}