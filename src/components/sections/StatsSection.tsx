/**
 * StatsSection Component
 *
 * Section angka pencapaian — 4 kartu lingkaran.
 *
 * Figma specs:
 * Desktop:
 *   - Padding: 80px 140px, gap header↔cards: 64px
 *   - Title: 40px/56px bold, Subtitle: 18px medium (#A4A7AE)
 *   - Cards: 4 kolom, 275×275px, gap 20px
 *   - Stat number: 48px bold #FF623E, Label: 20px semibold #FDFDFD
 *
 * Mobile:
 *   - Padding: 80px 16px, gap header↔cards: 24px
 *   - Title: 28px/38px bold, Subtitle: 14px medium (#A4A7AE)
 *   - Cards: 2×2 grid, 172.5×172.5px, gap 16px
 *   - Stat number: 36px bold #FF623E, Label: 14px semibold #FDFDFD
 *
 * Bonus: count-up animation saat section masuk viewport
 */

import React, { useState, useEffect, useRef } from 'react';
import { statsData } from '../../data/stats';
import type { StatItem } from '../../data/stats';

// ─────────────────────────────────────────────
// Sub-component: satu kartu stat
// ─────────────────────────────────────────────
interface StatCardProps {
  stat: StatItem;
  isVisible: boolean;
  index: number;
}

const StatCard: React.FC<StatCardProps> = ({ stat, isVisible, index }) => {
  const [count, setCount] = useState(0);

  // Count-up animation saat isVisible jadi true
  useEffect(() => {
    if (!isVisible) return;

    const duration = 1500;
    const startTime = Date.now();

    const animate = () => {
      const elapsed = Date.now() - startTime;
      const progress = Math.min(elapsed / duration, 1);
      // Ease-out cubic
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.floor(eased * stat.numericValue));
      if (progress < 1) requestAnimationFrame(animate);
      else setCount(stat.numericValue);
    };

    // Stagger tiap kartu
    const delay = setTimeout(() => requestAnimationFrame(animate), index * 150);
    return () => clearTimeout(delay);
  }, [isVisible, stat.numericValue, index]);

  return (
    <div
      className={`
        aspect-square rounded-full bg-bg-section border border-bg-card
        flex flex-col items-center justify-center p-4 gap-1.5
        transition-all duration-700
        ${isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}
      `}
      style={{ transitionDelay: `${index * 0.1}s` }}
    >
      {/* Angka besar */}
      <span className='text-4xl lg:text-5xl font-bold text-orange tracking-tight'>
        {count}{stat.suffix}
      </span>

      {/* Label */}
      <span className='text-sm lg:text-xl font-semibold text-text-white text-center leading-snug'>
        {stat.label}
      </span>
    </div>
  );
};

// ─────────────────────────────────────────────
// Main component
// ─────────────────────────────────────────────
const StatsSection: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  // Trigger animasi saat section masuk viewport
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect(); // cukup sekali
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      id='about'
      aria-label='Company statistics'
      className='bg-bg-darkest py-20 px-4 lg:px-35'
    >
      <div className='flex flex-col items-center gap-6 lg:gap-16'>

        {/* Header */}
        <div className='flex flex-col items-center gap-3 text-center'>
          <h2 className='text-display-sm lg:text-display-xl font-bold text-text-white'>
            End-to-End IT Solutions That Drive Results
          </h2>
          <p className='text-sm lg:text-lg font-medium text-text-secondary'>
            From strategy to execution, we deliver solutions that grow your business.
          </p>
        </div>

        {/* Cards Grid — 2×2 mobile, 4×1 desktop */}
        <div className='grid grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-5 w-full'>
          {statsData.map((stat, index) => (
            <StatCard
              key={stat.id}
              stat={stat}
              isVisible={isVisible}
              index={index}
            />
          ))}
        </div>

      </div>
    </section>
  );
};

export default StatsSection;