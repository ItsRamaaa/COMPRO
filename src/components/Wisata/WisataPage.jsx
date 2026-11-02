import shortImg from '../../assets/funshort.png';
import mediumImg from '../../assets/safary.png';
import longImg from '../../assets/funlong.png';

export default function WisataPage() {
  const wisataList = [
    {
      title: "Fun Short",
      routes: "Palawi, Kebun Raya, Titik Nol Pendakian Gn. Slamet, track offroad, finish.",
      details: "Driver profesional · maks. 3 orang · 1 jam",
      price: "Rp 400.000",
      image: shortImg
    },
    {
      title: "Safari / Medium",
      routes: "Palawi, Kebun Raya, Bukit Safari, termasuk HTM Safari Dex Selfie.",
      details: "Driver profesional · maks. 3 orang · 2 jam",
      price: "Rp 600.000",
      image: mediumImg
    },
    {
      title: "Fun Long",
      routes: "Palawi, Kebun Raya, Rest Area Circuit, Limpakuwus, Watu Jaran, finish.",
      details: "Driver profesional · maks. 3 orang · 3 jam",
      price: "Rp 850.000",
      image: longImg
    }
  ];

  const handleWhatsApp = (packetName) => {
    const message = encodeURIComponent(`Halo Waroeng SR, saya ingin tanya/booking paket wisata offroad: ${packetName}`);
    window.open(`https://wa.me/6281229201970?text=${message}`, '_blank');
  };

  return (
    <section className="bg-[#F9F8F6] py-12 w-full font-['Plus_Jakarta_Sans',sans-serif]">
      <div className="w-full px-8 lg:px-16 space-y-8">
        
        {/* Header Halaman dengan Badge */}
        <div className="flex flex-col md:flex-row md:items-center gap-3">
          <h2 className="text-3xl lg:text-4xl font-serif font-bold text-[#133223]">
            Wisata Off Road Baturraden
          </h2>
          <span className="bg-[#FEF3C7] border border-[#FDE68A] text-[#92400E] text-xs font-bold px-3 py-1 rounded-full w-fit">
            Perlu konfirmasi mitra
          </span>
        </div>

        {/* Grid 3 Kartu Paket Wisata */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {wisataList.map((item, idx) => (
            <div key={idx} className="bg-white rounded-3xl p-6 shadow-sm border border-gray-100 flex flex-col justify-between space-y-6">
              <div className="space-y-4">
                
                {/* Kotak Gambar dari Folder src/assets */}
                <div className="rounded-2xl h-44 overflow-hidden bg-gray-100 border border-gray-100">
                  <img 
                    src={item.image} 
                    alt={item.title} 
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* Judul & Rute */}
                <div className="space-y-1.5">
                  <h3 className="text-xl font-bold text-[#133223]">{item.title}</h3>
                  <p className="text-xs text-gray-500 leading-relaxed">{item.routes}</p>
                </div>

                {/* Detail Durasi & Kapasitas */}
                <p className="text-xs text-gray-600 font-medium">{item.details}</p>
              </div>

              {/* Harga & Tombol WhatsApp */}
              <div className="space-y-4 pt-4 border-t border-gray-100">
                <div>
                  <span className="text-[10px] text-gray-400 block">Harga Paket</span>
                  <span className="text-xl font-black text-[#133223]">{item.price}</span>
                </div>
                
                <button 
                  type="button"
                  onClick={() => handleWhatsApp(item.title)}
                  className="w-full bg-[#184029] hover:bg-[#0f291c] text-white font-bold py-3 rounded-xl transition cursor-pointer text-sm shadow-sm"
                >
                  Tanya Lewat WhatsApp
                </button>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}