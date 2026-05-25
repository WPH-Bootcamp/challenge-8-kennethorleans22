// src/components/sections/ProcessSection.tsx

import { useState } from 'react';
import { processSteps } from '../../data/process';
import type { ProcessStep } from '../../data/process';

/* ──────────────────────────────────
   Chevron Icon
   ────────────────────────────────── */

function ChevronIcon({ isOpen }: { isOpen: boolean }) {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`shrink-0 transition-transform duration-300 ${
        isOpen ? 'rotate-180' : 'rotate-0'
      }`}
    >
      <path
        d="M6 9L12 15L18 9"
        stroke="#FDFDFD"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

/* ──────────────────────────────────
   Accordion Card
   ────────────────────────────────── */

function StepCard({
  step,
  isOpen,
  onToggle,
}: {
  step: ProcessStep;
  isOpen: boolean;
  onToggle: () => void;
}) {
  return (
    <button
      type="button"
      onClick={onToggle}
      className={`w-full bg-bg-section border border-bg-card rounded-2xl p-4 lg:p-6 flex flex-row justify-between gap-10 text-left transition-all duration-200 ${
        isOpen ? 'items-start' : 'items-center'
      }`}
    >
      {/* Text Container */}
      <div className="flex flex-col gap-1 min-w-0 flex-1">
        {/* Step Title */}
        <p className="text-base font-bold text-text-white tracking-tight lg:text-xl lg:tracking-normal">
          {step.title}
        </p>

        {/* Description — expands on open */}
        <div
          className={`overflow-hidden transition-all duration-300 ${
            isOpen ? 'max-h-20 opacity-100' : 'max-h-0 opacity-0'
          }`}
        >
          <p className="text-sm font-medium text-text-secondary lg:text-base">
            {step.description}
          </p>
        </div>
      </div>

      {/* Chevron */}
      <ChevronIcon isOpen={isOpen} />
    </button>
  );
}

/* ──────────────────────────────────
   Main Section
   ────────────────────────────────── */

function ProcessSection() {
  const [openIds, setOpenIds] = useState<Set<number>>(new Set());

function handleToggle(id: number) {
  setOpenIds((prev) => {
    const next = new Set(prev);
    if (next.has(id)) {
      next.delete(id);
    } else {
      next.add(id);
    }
    return next;
  });
}

  return (
    <section
      id="process"
      className="bg-bg-darkest py-10 px-4 lg:py-20 lg:px-35 flex flex-col items-center gap-6 lg:gap-16"
    >
      {/* ── Section Header ── */}
      <div className="flex flex-col items-center gap-3 w-full">
        <h2 className="text-display-sm lg:text-display-xl font-bold text-text-white text-center">
          Our Process
        </h2>
        <p className="text-sm lg:text-lg font-medium text-text-secondary text-center">
          Clear steps. Smart execution. Results you can count on.
        </p>
      </div>

      {/* ── Steps Container ── */}
      <div className="relative w-full flex flex-col gap-4">
{/* Steps */}
{processSteps.map((step, index) => {
  const isLeft = index % 2 === 0;
  const isOpen = openIds.has(step.id);

  return (
    <div
      key={step.id}
      className="flex flex-row items-center gap-3 lg:gap-6"
    >
      {/* Desktop left slot (steps 1, 3, 5) */}
      <div className="hidden lg:block lg:flex-1">
        {isLeft && (
          <StepCard
            step={step}
            isOpen={isOpen}
            onToggle={() => handleToggle(step.id)}
          />
        )}
      </div>

      {/* Circle wrapper — meregang setinggi row, garis ada di sini */}
      <div className="relative self-stretch shrink-0 flex items-center justify-center w-10 lg:w-12">

        {/* Garis ke atas — tidak ada di step pertama */}
        {index > 0 && (
          <div className="absolute -top-2 bottom-1/2 left-1/2 -translate-x-1/2 w-px bg-border" />
        )}

        {/* Garis ke bawah — tidak ada di step terakhir */}
        {index < processSteps.length - 1 && (
          <div className="absolute top-1/2 -bottom-2 left-1/2 -translate-x-1/2 w-px bg-border" />
        )}

        {/* Circle */}
        <div className="relative z-10 flex items-center justify-center w-10 h-10 lg:w-12 lg:h-12 rounded-full bg-orange">
          <span className="text-xs font-bold text-white lg:text-base lg:tracking-tight">
            {step.id}
          </span>
        </div>
      </div>

      {/* Mobile always + Desktop right slot (steps 2, 4, 6) */}
      <div className="flex-1">
        <div className="block lg:hidden">
          <StepCard
            step={step}
            isOpen={isOpen}
            onToggle={() => handleToggle(step.id)}
          />
        </div>
        <div className="hidden lg:block">
          {!isLeft && (
            <StepCard
              step={step}
              isOpen={isOpen}
              onToggle={() => handleToggle(step.id)}
            />
          )}
        </div>
      </div>
    </div>
  );
})}
      </div>
    </section>
  );
}

export default ProcessSection;