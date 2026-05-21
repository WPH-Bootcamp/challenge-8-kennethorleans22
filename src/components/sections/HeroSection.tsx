/**
 * HeroSection Component
 *
 * Section pertama yang terlihat pengunjung — berisi:
 * - Hero image (kanan, desktop only)
 * - Headline + description (kiri)
 * - CTA button
 *
 * Figma specs (Dark):
 * - Image: 747×747px, absolute right
 * - Text container: left 140px, top 230px, width 653px
 * - Title: 56px / 68px / weight 700 / tracking -0.02em
 * - Description: 20px / 34px / weight 600
 * - Button: 200×48px primary orange
 */

import React from 'react';
import Button from '../ui/Button';
import imageHero from '../../assets/image-hero.svg';
import { heroData } from '../../data/hero';

const HeroSection: React.FC = () => {
  // Scroll to contact section saat CTA diklik
  const handleCtaClick = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      id='home'
      aria-label='Hero'
      className='relative min-h-screen overflow-hidden bg-bg-darkest'
    >
      {/* ============================================================
          HERO IMAGE — absolute kanan
         ============================================================ */}
      <div
        aria-hidden='true'
        className='absolute inset-y-0 right-0 w-1/2 hidden lg:block pointer-events-none'
      >
        <img
          src={imageHero}
          alt='Hero illustration'
          className='w-full h-full object-cover object-left animate-float'
        />

        {/* Gradient kiri — fade image ke background */}
        <div className='absolute inset-y-0 left-0 w-48 bg-gradient-to-r from-bg-darkest to-transparent' />
        {/* Gradient bawah — fade image ke background */}
        <div className='absolute bottom-0 inset-x-0 h-40 bg-gradient-to-t from-bg-darkest to-transparent' />
      </div>

      {/* ============================================================
          MAIN CONTENT — left side
         ============================================================ */}
      <div className='relative z-10 flex flex-col lg:flex-row lg:items-center min-h-screen pt-20 lg:pt-0 pb-12 lg:pb-0'>

        {/* Padding hanya di div teks — supaya image mobile bisa full width */}
        <div className='flex flex-col gap-10 px-4 sm:px-8 lg:px-35 lg:max-w-2xl'>
          {/* Title + Description — slide in dari kiri */}
          <div
            className='flex flex-col gap-2 animate-fade-in-left'
            style={{ animationDelay: '0.1s' }}
          >
            <h1 className='text-display-3xl font-bold text-text-white whitespace-pre-line'>
              <span className='text-text-white'>Your Tech Partner for </span>
              <span className='text-orange'>Smarter Growth</span>
            </h1>
            <p className='text-xl font-semibold text-text-white leading-relaxed'>
              {heroData.description}
            </p>
          </div>

          {/* CTA Button — fade up */}
          <div
            className='animate-fade-in-up'
            style={{ animationDelay: '0.4s' }}
          >
            <Button variant='primary' size='md' onClick={handleCtaClick}>
              {heroData.ctaText}
            </Button>
          </div>
        </div>

        {/* ============================================================
            HERO IMAGE — mobile only, muncul di bawah teks
           ============================================================ */}
        <div
          aria-hidden='true'
          className='block lg:hidden relative mt-10 w-full pointer-events-none'
        >
          <img
            src={imageHero}
            alt=''
            className='w-full aspect-square object-cover animate-float'
          />
          {/* Gradient kiri */}
          <div className='absolute inset-y-0 left-0 w-12 bg-gradient-to-r from-bg-darkest to-transparent' />
          {/* Gradient bawah */}
          <div className='absolute bottom-0 inset-x-0 h-12 bg-gradient-to-t from-bg-darkest to-transparent' />
        </div>

      </div>

    </section>
  );
};

export default HeroSection;