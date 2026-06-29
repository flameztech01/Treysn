import Navbar from './components/Navbar';
import Hero from './components/Hero';
import MusicSection from './components/MusicSection';
import VideosSection from './components/VideosSection';
import StoreSection from './components/StoreSection';
import AboutSection from './components/AboutSection';
import NewsletterSection from './components/NewsletterSection';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white">
      <Navbar />
      <Hero />
      <div className="section-divider" />
      <MusicSection />
      <div className="section-divider" />
      <VideosSection />
      <div className="section-divider" />
      <StoreSection />
      <div className="section-divider" />
      <AboutSection />
      <div className="section-divider" />
      <NewsletterSection />
      <Footer />
    </div>
  );
}
