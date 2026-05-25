import React from 'react';
import { partnerLogos } from '../../data/logos';

const LogosSection: React.FC = () => {
  // Duplikat logos untuk seamless infinite loop
  const doubled = [...partnerLogos, ...partnerLogos];

  return (
    <section
      id='logos'
      aria-label='Partner logos'
      className='relative bg-bg-darkest overflow-hidden'
    >
      {/* Title */}
    <p className='text-center text-2xl font-bold text-text-white mb-8'>
        Trusted by Global Innovators &amp; Leading Brands
      </p>

      {/* Marquee wrapper — overflow hidden + edge fades */}
      <div className='relative'>
        {/* Fade kiri */}
      {/* Fade kiri */}
<div
  aria-hidden='true'
  className='absolute inset-y-0 left-0 w-12 lg:w-32 bg-gradient-to-r from-bg-darkest to-transparent z-10 pointer-events-none'
/>
{/* Fade kanan */}
<div
  aria-hidden='true'
  className='absolute inset-y-0 right-0 w-12 lg:w-32 bg-gradient-to-l from-bg-darkest to-transparent z-10 pointer-events-none'
/>

        {/* Logo track — animate ke kiri terus */}
        <div
          className='flex items-center gap-12 animate-marquee'
          style={{ width: 'max-content' }}
        >
          {doubled.map((logo, index) => (
            <div key={`${logo.name}-${index}`} className='flex-shrink-0'>
             <img
  src={logo.src}
  alt={logo.name}
  className='h-8.5 lg:h-12 w-auto object-contain grayscale opacity-70 hover:grayscale-0 hover:opacity-100 transition-all duration-300'
/>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LogosSection;
