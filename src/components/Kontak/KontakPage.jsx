export default function KontakPage() {
  const mapUrl = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3956.331481541097!2d109.227318!3d-7.423712!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e655ea7a04870f9%3A0x1b700f074d2836c2!2sJl.%20Raya%20Baturraden%2C%20Rempoah%2C%20Kec.%20Baturaden%2C%20Kabupaten%20Banyumas%2C%20Jawa%20Tengah!5e0!3m2!1sid!2sid!4v1700000000000!5m2!1sid!2sid";

  return (
    <section className="bg-[#F9F8F6] py-12 w-full font-['Plus_Jakarta_Sans',sans-serif]">
      <div className="w-full px-8 lg:px-16 space-y-8">
        
        {/* Header Halaman */}
        <div className="space-y-1">
          <h2 className="text-3xl lg:text-4xl font-serif font-bold text-[#133223]">
            Lokasi & Kontak
          </h2>
        </div>

        {/* Layout Grid 2 Kolom (Peta di Kiri, Informasi di Kanan) */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
          
          {/* Kolom Kiri: Peta Google Maps (Lebar 2 Grid) */}
          <div className="lg:col-span-2 bg-white rounded-3xl overflow-hidden shadow-sm border border-gray-100 h-[450px] lg:h-[550px]">
            <iframe 
              src={mapUrl}
              title="Peta Lokasi Waroeng SR"
              width="100%" 
              height="100%" 
              style={{ border: 0 }} 
              allowFullScreen="" 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>

          {/* Kolom Kanan: Detail Informasi Lokasi & Kontak */}
          <div className="bg-white rounded-3xl p-6 lg:p-8 shadow-sm border border-gray-100 space-y-6">
            
            <div className="space-y-4">
              <h3 className="text-xl font-bold text-[#133223]">Kunjungi Kami</h3>
              
              {/* Lokasi Saat Ini */}
              <div className="space-y-1">
                <span className="text-xs font-bold text-gray-400 block">Lokasi saat ini</span>
                <p className="text-sm text-gray-700 leading-relaxed font-medium">
                  Jl. Raya Baturraden, Rempoah, Banyumas, Jawa Tengah 53126
                </p>
              </div>

              {/* Lokasi Awal */}
              <div className="space-y-1 pt-2 border-t border-gray-100">
                <span className="text-xs font-bold text-gray-400 block">Lokasi awal (2015)</span>
                <p className="text-sm text-gray-700 leading-relaxed font-medium">
                  Jl. KS. Tubun No. 2B, Karangpucung, Bobosan, Purwokerto Utara[cite: 7]
                </p>
              </div>

              {/* Jam Buka */}
              <div className="space-y-1 pt-2 border-t border-gray-100">
                <span className="text-xs font-bold text-gray-400 block">Jam buka</span>
                <p className="text-sm text-gray-700 font-medium">
                  Setiap hari 09.00–20.00 WIB[cite: 7]
                </p>
              </div>
            </div>

            {/* Tombol Petunjuk Arah */}
            <button 
              type="button"
              onClick={() => window.open('https://maps.app.goo.gl/gMbq3zXypn5eRNVS9', '_blank')}
              className="w-full bg-[#184029] hover:bg-[#0f291c] text-white font-bold py-3.5 rounded-xl transition cursor-pointer text-sm shadow-sm flex items-center justify-center gap-2"
            >
              Petunjuk Arah
            </button>

            {/* Bagian Hubungi */}
            <div className="space-y-3 pt-4 border-t border-gray-100">
              <h4 className="text-sm font-bold text-[#133223]">Hubungi</h4>
              <div className="space-y-1 text-sm text-gray-600">
                <p>WhatsApp <span className="font-bold text-[#133223]">0812-2920-1970</span>[cite: 7]</p>
                <p>Instagram <span className="font-bold text-[#133223]">@tenglengdjowombahsum.id</span>[cite: 7]</p>
              </div>

              {/* Tombol GoFood & GrabFood */}
              <div className="grid grid-cols-2 gap-3 pt-2">
                <button 
                  type="button"
                  onClick={() => alert('Link GoFood Waroeng SR')}
                  className="bg-[#D93838] hover:bg-[#c22f2f] text-white font-bold py-2.5 rounded-xl transition cursor-pointer text-xs shadow-sm"
                >
                  GoFood
                </button>
                <button 
                  type="button"
                  onClick={() => alert('Link GrabFood Waroeng SR')}
                  className="bg-[#D93838] hover:bg-[#c22f2f] text-white font-bold py-2.5 rounded-xl transition cursor-pointer text-xs shadow-sm"
                >
                  GrabFood
                </button>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}