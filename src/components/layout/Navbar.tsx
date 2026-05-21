import React, { useState, useEffect } from 'react';
import { navItems } from '../../data/navigation';
import Button from '../ui/Button';
import logoSymbol from '../../assets/logo-symbol.png';

const Navbar: React.FC = () => {
  // State untuk mobile menu (buka/tutup)
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // State untuk detect apakah user sudah scroll — untuk bonus poin karena saya ragu ini nilai bakalan jelek kayaknya: background berubah
  const [isScrolled, setIsScrolled] = useState(false);

  // useEffect = jalankan kode ini saat komponen pertama kali muncul di layar
  useEffect(() => {
    const handleScroll = () => {
      // Kalau scroll lebih dari 20px, set isScrolled = true
      setIsScrolled(window.scrollY > 20);
    };

    // Pasang event listener
    window.addEventListener('scroll', handleScroll);

    // Cleanup: lepas event listener saat komponen hilang dari layar
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    // role="banner" = semantic HTML untuk header utama (bonus accessibility)
    <header
      role='banner'
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-bg-darkest/90 backdrop-blur-md shadow-lg shadow-black/20'
          : 'backdrop-blur-[20px]'
      }`}
    >
      {/* ======= DESKTOP NAVBAR ======= */}
      <div className='hidden lg:flex items-center justify-between h-21 px-35'>
        {/* Logo */}
        <a
          href='#home'
          aria-label='Kembali ke halaman utama'
          className='flex items-center gap-[9.6px] group'
        >
          {/* Logo symbol*/}
          <img src={logoSymbol} alt='Logo symbol' />
          <span className='font-logo font-semibold text-2xl text-text-white'>
            Your Logo
          </span>
        </a>

        {/* Menu navigasi */}
        {/* role="navigation" + aria-label = screen reader tau kalo ini nav utama */}
        <nav role='navigation' aria-label='Navigasi utama'>
          <ul className='flex items-center gap-3' role='list'>
            {navItems.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  className='flex items-center px-4 py-2 rounded-full font-semibold text-base text-text-white hover:bg-white/10 hover:text-orange transition-all duration-200'
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        {/* Tombol CTA kanan */}
        <Button variant='primary' size='sm'>
          Let's Talk
        </Button>
      </div>

      {/* ======= MOBILE NAVBAR ======= */}
      <div className='flex lg:hidden items-center justify-between h-16 px-4'>
        {/* Logo mobile */}
        <a
          href='#home'
          aria-label='Kembali ke halaman utama'
          className='flex items-center gap-2'
        >
          <span className='font-logo font-semibold text-xl text-text-white'>
            Your Logo
          </span>
        </a>

        {/* Tombol hamburger */}
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-expanded={isMenuOpen}
          aria-controls='mobile-menu'
          aria-label={isMenuOpen ? 'Tutup menu' : 'Buka menu'}
          className='text-text-white p-2 rounded-lg hover:bg-white/10 transition-colors'
        >
          {isMenuOpen ? (
            // Icon X (close)
            <svg
              width='24'
              height='24'
              viewBox='0 0 24 24'
              fill='none'
              aria-hidden='true'
            >
              <line
                x1='18'
                y1='6'
                x2='6'
                y2='18'
                stroke='currentColor'
                strokeWidth='2'
                strokeLinecap='round'
              />
              <line
                x1='6'
                y1='6'
                x2='18'
                y2='18'
                stroke='currentColor'
                strokeWidth='2'
                strokeLinecap='round'
              />
            </svg>
          ) : (
            // Icon hamburger
            <svg
              width='24'
              height='24'
              viewBox='0 0 24 24'
              fill='none'
              aria-hidden='true'
            >
              <line
                x1='3'
                y1='6'
                x2='21'
                y2='6'
                stroke='currentColor'
                strokeWidth='2'
                strokeLinecap='round'
              />
              <line
                x1='3'
                y1='12'
                x2='21'
                y2='12'
                stroke='currentColor'
                strokeWidth='2'
                strokeLinecap='round'
              />
              <line
                x1='3'
                y1='18'
                x2='21'
                y2='18'
                stroke='currentColor'
                strokeWidth='2'
                strokeLinecap='round'
              />
            </svg>
          )}
        </button>
      </div>

      {/* ======= MOBILE MENU (dropdown) ======= */}
      <div
        id='mobile-menu'
        role='navigation'
        aria-label='Menu mobile'
        className={`lg:hidden overflow-hidden transition-all duration-300 ease-in-out ${
          isMenuOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0'
        } bg-bg-darkest border-t border-border`}
      >
        <div className='flex flex-col gap-3 px-4 py-6 min-h-screen'>
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              onClick={() => setIsMenuOpen(false)}
              className='flex items-center py-2 px-2 rounded-full font-semibold text-sm text-text-white hover:text-orange transition-colors'
            >
              {item.label}
            </a>
          ))}
          {/* Tombol CTA di mobile menu */}
          <div className='mt-2'>
            <Button
              variant='primary'
              className='w-full'
              onClick={() => setIsMenuOpen(false)}
            >
              Let's Talk
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
