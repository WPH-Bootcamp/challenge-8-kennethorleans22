// src/components/sections/ServicesSection.tsx

import { servicesData } from '../../data/services';
import type { ServiceItem } from '../../data/services';

/* ──────────────────────────────────
   Service Card
   ────────────────────────────────── */

function ServiceCard({ service }: { service: ServiceItem }) {
  return (
    <div className="relative isolate flex flex-col items-start pt-12 lg:pt-16 px-5 pb-5 bg-bg-section border border-bg-card rounded-2xl transition-colors duration-200 hover:bg-bg-card">

      {/* Icon — melayang di atas card */}
      {/*
        Mobile : w-16 h-16 (64px), -top-5 (-20px ≈ Figma -21px)
        Desktop: w-20 h-20 (80px), -top-6 (-24px ≈ Figma -26px)
        Simpan file icon di: public/services/<filename>.png
      */}
      <div className="absolute -top-5 lg:-top-6 left-5 w-16 h-16 lg:w-20 lg:h-20">
        <img
          src={service.icon}
          alt={service.title}
          className="w-full h-full object-contain"
        />
      </div>

      {/* Text */}
      <div className="flex flex-col gap-1">
        <p className="text-base font-bold text-text-white tracking-tight lg:text-xl lg:tracking-normal">
          {service.title}
        </p>
        <p className="text-sm font-medium text-text-secondary lg:text-base">
          {service.description}
        </p>
      </div>

    </div>
  );
}

/* ──────────────────────────────────
   Main Section
   ────────────────────────────────── */

function ServicesSection() {
  return (
    <section
      id="service"
      className="bg-bg-darkest py-10 px-4 lg:py-20 lg:px-35 flex flex-col items-center gap-10 lg:gap-16"
    >
      {/* ── Section Header ── */}
      <div className="flex flex-col items-center gap-3 w-full">
        <h2 className="text-display-sm font-semibold lg:text-display-xl lg:font-bold text-text-white text-center">
          Smart IT Solutions That Grow With You
        </h2>
        <p className="text-sm lg:text-lg font-medium text-text-secondary text-center">
          Tailored tech to boost efficiency, security, and results.
        </p>
      </div>

      {/* ── Services Grid ──
          Mobile : 1 kolom, gap-10 (40px) antar card
          Desktop: 3 kolom, gap-x-5 (20px) antar kolom, gap-y tetap 40px antar baris
      */}
      <div className="w-full grid grid-cols-1 lg:grid-cols-3 gap-10 lg:gap-x-5">
        {servicesData.map((service) => (
          <ServiceCard key={service.id} service={service} />
        ))}
      </div>

    </section>
  );
}

export default ServicesSection;