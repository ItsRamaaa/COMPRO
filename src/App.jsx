import { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import MenuSection from './components/MenuSection'; 
import HowToOrder from './components/HowToOrder';
import StorySection from './components/StorySection';
import Footer from './components/Footer';
import FullMenuPage from './components/Menu/FullMenuPage';
import FullHantaranPage from './components/paket Hantaran/FullHantaranPage';
import HantaranCheckout from './components/Hantaran Checkout/HantaranCheckout'; 
import OrderSuccess from './components/Hantaran Checkout/OrderSuccess';
import OrderStatusPage from './components/Statuspesanan/OrderStatusPage';
import PesanOnlinePage from './components/Pesan/PesanOnlinePage';
import ReservasiPage from './components/Reservasi/ReservasiPage';
import CeritaPage from './components/Cerita/CeritaPage';
import WisataPage from './components/Wisata/WisataPage';
import KontakPage from './components/Kontak/KontakPage';

export default function App() {
  const [currentPage, setCurrentPage] = useState('home');

  return (
    <div className="min-h-screen bg-[#F9F8F6] font-['Plus_Jakarta_Sans',sans-serif]">
      <Navbar currentPage={currentPage} setCurrentPage={setCurrentPage} />

      {currentPage === 'home' && (
        <>
          <Hero setCurrentPage={setCurrentPage} />
          <MenuSection /> 
          <HowToOrder />
          <StorySection />
        </>
      )}

      {currentPage === 'menu' && (
        <FullMenuPage setCurrentPage={setCurrentPage} />
      )}

      {currentPage === 'hantaran' && (
        <FullHantaranPage setCurrentPage={setCurrentPage} />
      )}

      {currentPage === 'pesan' && (
        <PesanOnlinePage setCurrentPage={setCurrentPage} />
      )}

      {currentPage === 'hantaran-checkout' && (
        <HantaranCheckout setCurrentPage={setCurrentPage} />
      )}

      {/* Ini halaman struk sukses setelah kirim pesanan */}
      {currentPage === 'order-success' && (
        <OrderSuccess setCurrentPage={setCurrentPage} />
      )}

      {/* Ini halaman cek status pesanan yang muncul pas user klik tombol di bawah struk */}
      {currentPage === 'order-status-page' && (
        <OrderStatusPage setCurrentPage={setCurrentPage} />
      )}

      {currentPage === 'reservasi' && (
        <ReservasiPage setCurrentPage={setCurrentPage} />
      )}

      {currentPage === 'cerita' && (
        <CeritaPage />
      )}

      {currentPage === 'wisata' && (
        <WisataPage />
      )}

      {currentPage === 'kontak' && (
        <KontakPage />
      )}

      <Footer />
    </div>
  );
}