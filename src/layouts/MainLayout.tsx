import { Outlet, Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { useScrollDirection } from '../hooks/useScrollDirection';
import { useState, useEffect } from 'react';
import { NAV_LINKS, COMPANY_INFO } from '../constants';

const Navbar = () => {
  const scrollDirection = useScrollDirection();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
      setIsMobileMenuOpen(false);
  }, [location]);

  return (
    <>
        <motion.nav
          initial={{ y: 0 }}
          animate={{ y: scrollDirection === 'down' && !isMobileMenuOpen ? -100 : 0 }}
          transition={{ duration: 0.3, ease: 'easeInOut' }}
          className={`fixed top-0 left-0 right-0 z-50 flex justify-between items-center px-4 md:px-8 py-6 transition-colors duration-500 ${
            isScrolled || isMobileMenuOpen ? 'bg-paradiso-dark/90 backdrop-blur-md shadow-lg' : 'bg-transparent'
          }`}
        >
          <Link to="/" className="text-xl md:text-2xl font-serif font-bold tracking-widest text-paradiso-gold hover:text-white transition-colors z-50 relative">
            {COMPANY_INFO.name}
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex gap-8 font-sans text-sm tracking-widest uppercase text-paradiso-cream">
            {NAV_LINKS.map(link => (
                <NavLink key={link.path} to={link.path}>{link.label}</NavLink>
            ))}
          </div>

          {/* Mobile Menu Toggle */}
          <button 
            className="block md:hidden z-50 text-white focus:outline-none"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
             <div className="w-8 h-8 flex flex-col justify-center gap-1.5 items-end">
                <motion.span 
                    animate={{ rotate: isMobileMenuOpen ? 45 : 0, y: isMobileMenuOpen ? 8 : 0 }} 
                    className="block w-full h-[2px] bg-paradiso-gold origin-center"
                />
                <motion.span 
                    animate={{ opacity: isMobileMenuOpen ? 0 : 1 }} 
                    className="block w-3/4 h-[2px] bg-paradiso-gold"
                />
                <motion.span 
                    animate={{ rotate: isMobileMenuOpen ? -45 : 0, y: isMobileMenuOpen ? -8 : 0, width: isMobileMenuOpen ? '100%' : '50%' }} 
                    className="block w-1/2 h-[2px] bg-paradiso-gold origin-center"
                />
             </div>
          </button>
        </motion.nav>

        {/* Mobile Menu Overlay */}
        <AnimatePresence>
            {isMobileMenuOpen && (
                <motion.div
                    initial={{ opacity: 0, y: "-100%" }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: "-100%" }}
                    transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                    className="fixed inset-0 z-40 bg-paradiso-dark flex flex-col items-center justify-center"
                >
                    <div className="flex flex-col gap-8 text-center">
                        {NAV_LINKS.map((link, i) => (
                             <motion.div
                                key={link.path}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: 10 }}
                                transition={{ delay: 0.1 + (i * 0.05) }}
                             >
                                <Link 
                                    to={link.path} 
                                    className="text-3xl font-serif text-white hover:text-paradiso-gold transition-colors"
                                >
                                    {link.label}
                                </Link>
                             </motion.div>
                        ))}
                    </div>
                </motion.div>
            )}
        </AnimatePresence>
    </>
  );
};

const NavLink = ({ to, children }: { to: string; children: React.ReactNode }) => (
  <Link to={to} className="relative group overflow-hidden">
    <span className="block transition-transform duration-300 group-hover:-translate-y-full">{children}</span>
    <span className="absolute top-0 left-0 block translate-y-full transition-transform duration-300 group-hover:translate-y-0 text-paradiso-gold">
      {children}
    </span>
  </Link>
);

const Footer = () => (
  <footer className="bg-neutral-900 text-neutral-400 py-12 px-8 border-t border-white/10">
    <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
      <div className="text-center md:text-left">
        <h3 className="text-paradiso-gold font-serif text-xl mb-2">{COMPANY_INFO.name}</h3>
        <p className="text-xs tracking-wider">{COMPANY_INFO.tagline}</p>
      </div>
      
      {/* Social Icons */}
      <div className="flex gap-6">
        <a href="#" className="hover:text-paradiso-gold transition-colors">
            <span className="sr-only">Instagram</span>
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
        </a>
        <a href="#" className="hover:text-paradiso-gold transition-colors">
            <span className="sr-only">Facebook</span>
           <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg>
        </a>
         <a href="#" className="hover:text-paradiso-gold transition-colors">
            <span className="sr-only">Twitter</span>
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"></path></svg>
        </a>
      </div>

      <div className="text-xs tracking-widest">
        &copy; {new Date().getFullYear()} {COMPANY_INFO.copyright}
      </div>
    </div>
  </footer>
);

const MainLayout = () => {
  return (
    <div className="bg-paradiso-dark min-h-screen flex flex-col text-white selection:bg-paradiso-gold selection:text-black">
      <Navbar />
      <main className="flex-grow">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default MainLayout;
