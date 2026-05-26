import { useState } from 'react';
import { testimonialsData } from '../../data/testimonials';
import type { Testimonial } from '../../data/testimonials';

// --- Testimonial Card ---
interface TestimonialCardProps {
  testimonial: Testimonial;
  isActive: boolean;
}

function TestimonialCard({ testimonial, isActive }: TestimonialCardProps) {
  return (
    <div
      className={` relative isolate flex flex-col items-center gap-4 lg:gap-6 rounded-2xl px-4 pt-6 pb-10 lg:px-6 lg:pb-12 w-full transition-all duration-300 ${
        isActive
          ? 'bg-bg-section border border-bg-card opacity-100'
          : 'bg-bg-section border border-transparent opacity-40'
      }`}
    >
      {/* Quote icon — absolute kiri atas, melebihi batas atas kartu */}
      <img
        src='/testimonials/quote-icon.svg'
        alt=''
        aria-hidden='true'
        className='absolute left-1 -top-8 w-16 h-16 lg:left-7 lg:-top-10 lg:w-20 lg:h-20 object-contain'
      />

      {/* Stars + Quote text */}
      <div className='flex flex-col items-center gap-3 w-full mt-2 lg:mt-4'>
        {/* Stars */}
        <div className='flex gap-1'>
          {Array.from({ length: 5 }, (_, i) => (
            <img
              key={i}
              src='/testimonials/star.svg'
              alt=''
              aria-hidden='true'
              className='w-6 h-6 object-contain'
            />
          ))}
        </div>
        <p className='text-sm font-semibold text-text-white text-center lg:text-lg'>
          {testimonial.quote}
        </p>
      </div>

      {/* Author Info */}
      <div className='flex flex-col items-center'>
        <span className='text-sm font-semibold text-text-white text-center lg:text-lg'>
          {testimonial.author}
        </span>
        <span className='text-sm font-semibold text-orange text-center lg:text-lg'>
          {testimonial.role}
        </span>
      </div>

      {/* Avatar — absolute bottom center, translate-y-1/2 = setengah keluar bawah */}
      <div className='absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 w-15 h-15 lg:w-20 lg:h-20 rounded-full overflow-hidden ring-2 ring-bg-darkest shrink-0'>
        <img
          src={testimonial.avatar}
          alt={testimonial.author}
          className='w-full h-full object-cover'
        />
      </div>
    </div>
  );
}

// --- Testimonials Section ---
function TestimonialsSection() {
  const [activeIndex, setActiveIndex] = useState(0);

  const count = testimonialsData.length;

  // Circular: prev = kiri, active = tengah, next = kanan
  const prevIndex = (activeIndex - 1 + count) % count;
  const nextIndex = (activeIndex + 1) % count;

  const prevItem = testimonialsData[prevIndex]!;
  const activeItem = testimonialsData[activeIndex]!;
  const nextItem = testimonialsData[nextIndex]!;

  return (
    <section className='bg-bg-darkest py-10 lg:py-20 flex flex-col items-center gap-12 lg:gap-20 overflow-hidden'>
      {/* Header */}
      <div className='flex flex-col items-center gap-3 px-4'>
        <h2 className='text-display-sm font-bold text-text-white text-center tracking-tight lg:text-display-xl'>
          What Partners Say About Working With Us
        </h2>
        <p className='text-sm font-medium text-text-secondary text-center lg:text-lg'>
          Trusted voices. Real experiences. Proven results.
        </p>
      </div>

      {/* Mobile: 1 kartu, fade-in-up saat ganti */}
      {/* pt-10 = ruang untuk quote icon yang melebihi atas */}
      {/* pb-12 = ruang untuk avatar yang melebihi bawah */}
      <div className='lg:hidden w-full px-4 pt-10 pb-12'>
        <div key={activeIndex} className='w-full animate-fade-in-up'>
          <TestimonialCard testimonial={activeItem} isActive />
        </div>
      </div>

      {/* Desktop: 3-kartu circular */}
      {/* pt-16 = ruang untuk quote icon di atas kartu */}
      {/* pb-14 = ruang untuk avatar di bawah kartu */}
      <div className='hidden lg:block relative w-full pt-16 pb-14'>
        {/* Gradient fade kiri */}
        <div className='absolute left-0 inset-y-0 w-72 bg-gradient-to-r from-bg-darkest to-transparent z-10 pointer-events-none' />
        {/* Gradient fade kanan */}
        <div className='absolute right-0 inset-y-0 w-72 bg-gradient-to-l from-bg-darkest to-transparent z-10 pointer-events-none' />

        {/* Track selalu [kiri, tengah, kanan] */}
        {/* Kartu ke-2 (index 1) ada di posisi 612px dari kiri track */}
        {/* Center kartu ke-2 = 612 + 296 = 908px dari kiri */}
        {/* translateX = 50vw - 908px → kartu aktif tepat di tengah viewport */}
        <div
          className='flex gap-5'
          style={{ transform: 'translateX(calc(50vw - 908px))' }}
        >
          {/* Posisi kiri: prev card (dimmed) */}
          <div className='w-148 shrink-0'>
            <TestimonialCard testimonial={prevItem} isActive={false} />
          </div>

          {/* Posisi tengah: active card */}
          {/* key={activeIndex} → re-mount saat ganti → animate-fade-in-up jalan */}
          <div key={activeIndex} className='w-148 shrink-0 animate-fade-in-up'>
            <TestimonialCard testimonial={activeItem} isActive />
          </div>

          {/* Posisi kanan: next card (dimmed) */}
          <div className='w-148 shrink-0'>
            <TestimonialCard testimonial={nextItem} isActive={false} />
          </div>
        </div>
      </div>

      {/* Pagination Dots */}
      <div className='flex items-center gap-1.5'>
        {testimonialsData.map((_, i) => (
          <button
            key={i}
            type='button'
            onClick={() => setActiveIndex(i)}
            className={`rounded-full border-0 p-0 cursor-pointer transition-all duration-300 ${
              i === activeIndex
                ? 'w-2 h-2 lg:w-3 lg:h-3 bg-orange'
                : 'w-2 h-2 lg:w-3 lg:h-3 bg-bg-card'
            }`}
          />
        ))}
      </div>
    </section>
  );
}

export default TestimonialsSection;
