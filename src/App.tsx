import { Routes, Route } from 'react-router-dom';
import { useLanguage } from './hooks/useLanguage';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import CountryPage from './pages/CountryPage';
import ServicesPage from './pages/ServicesPage';
import ContactPage from './pages/ContactPage';
import AboutPage from './pages/AboutPage';
import NotFound from './pages/NotFound';
import FloatingWhatsApp from './components/FloatingWhatsApp';
import ThemeToggle from './components/ThemeToggle';

function App() {
  const { language, dir } = useLanguage();

  // Set the HTML dir attribute for RTL support
  document.documentElement.dir = dir;
  document.documentElement.lang = language;
  
  return (
    <div className="flex flex-col min-h-screen bg-white dark:bg-gray-900">
      <Header />
      <main className="flex-grow">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/country/:id" element={<CountryPage />} />
          <Route path="/services" element={<ServicesPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
      <Footer />
      <FloatingWhatsApp />
      <ThemeToggle />
    </div>
  );
}

export default App;