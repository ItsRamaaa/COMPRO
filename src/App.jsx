import { useState, useEffect } from 'react';
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
import AdminLayout from './admin/AdminLayout';
import AdminLogin from './admin/AdminLogin';

export default function App() {
  const [currentPage, setCurrentPage] = useState('home');
  const [isAdminLoggedIn, setIsAdminLoggedIn] = useState(false);

  // Cek otomatis kalau URL ada parameter ?admin=true
  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    if (params.get('admin') === 'true') {
      setCurrentPage('admin');
    }
  }, []);

  // Percabangan khusus Admin (hanya admin yang butuh login)
  if (currentPage === 'admin') {
    if (!isAdminLoggedIn) {
      return (
        <AdminLogin 
          onLoginSuccess={() => setIsAdminLoggedIn(true)} 
          setCurrentPage={setCurrentPage} 
        />
      );
    }
    return <AdminLayout setCurrentPage={(page) => {
      if (page === 'home') {
        setIsAdminLoggedIn(false);
        window.history.replaceState({}, '', window.location.pathname); // Bersihkan URL query
      }
      setCurrentPage(page);
    }} />;
  }

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

      {currentPage === 'order-success' && (
        <OrderSuccess setCurrentPage={setCurrentPage} />
      )}

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