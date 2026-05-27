import { useState } from 'react';
import { faqData } from '../../data/faq';

function PlusIcon() {
  return (
    <svg width='24' height='24' viewBox='0 0 24 24' fill='none'
      xmlns='http://www.w3.org/2000/svg' className='text-text-white'>
      <path d='M12 5V19M5 12H19' stroke='currentColor' strokeWidth='2' strokeLinecap='round' />
    </svg>
  );
}

function MinusIcon() {
  return (
    <svg width='24' height='24' viewBox='0 0 24 24' fill='none'
      xmlns='http://www.w3.org/2000/svg' className='text-text-white'>
      <path d='M5 12H19' stroke='currentColor' strokeWidth='2' strokeLinecap='round' />
    </svg>
  );
}
function FaqSection() {
  const [openIds, setOpenIds] = useState<Set<number>>(
    new Set([faqData[0]!.id])
  );

  const handleCtaClick = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  function toggleItem(id: number) {
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
      id='faq'
      className='bg-bg-darkest py-10 px-4 lg:py-20 lg:px-30 flex flex-col items-center gap-6 lg:gap-12'
    >
      {/* Header */}
      <div className='flex flex-col gap-4 w-full lg:flex-row lg:justify-between lg:items-end'>
        <h2 className='text-display-sm font-bold text-text-white tracking-tight lg:text-display-xl'>
          Need Help? Start
          <br className='hidden lg:block' /> Here.
        </h2>
        <p className='text-sm font-medium text-text-secondary lg:text-lg lg:text-right'>
          Everything you need to
          <br className='hidden lg:block' /> know — all in one place.
        </p>
      </div>

      {/* Separator */}
      <div className='h-px bg-border w-full' />

      {/* Content */}
      <div className='flex flex-col gap-6 w-full lg:flex-row lg:items-center lg:gap-18'>
        {/* FAQ Accordion */}
        <div className='flex flex-col gap-7 flex-1'>
          {faqData.flatMap((item, index) => [
            <div key={item.id} className='flex flex-col gap-4'>
              <button
                type='button'
                className='flex flex-row justify-between items-center gap-9 w-full bg-transparent border-0 p-0 text-left cursor-pointer '
                onClick={() => toggleItem(item.id)}
              >
                <span className='text-lg font-bold text-text-white lg:text-2xl'>
                  {item.question}
                </span>
                <span className='shrink-0'>
                  {openIds.has(item.id) ? <MinusIcon /> : <PlusIcon />}
                </span>
              </button>
              <div
                className={`overflow-hidden transition-all duration-300 ease-in-out ${
                  openIds.has(item.id)
                    ? 'max-h-48 opacity-100'
                    : 'max-h-0 opacity-0'
                }`}
              >
                <p className='text-sm font-medium text-text-secondary lg:text-xl'>
                  {item.answer}
                </p>
              </div>
            </div>,
            ...(index < faqData.length - 1
              ? [
                  <div
                    key={`sep-${item.id}`}
                    className='h-px bg-border w-full'
                  />,
                ]
              : []),
          ])}
        </div>

        {/* Consultation Card */}
        <div
          className='flex flex-col gap-4 lg:gap-6 w-full lg:w-82 lg:shrink-0 rounded-2xl lg:rounded-3xl p-5 lg:p-6'
          style={{ backgroundColor: '#CC4E32' }}
        >
          <div className='flex flex-col gap-1'>
            <h3 className='text-display-sm font-bold text-white tracking-tight leading-snug lg:text-4xl lg:leading-tight'>
              Let's talk it
              <br className='hidden lg:block' /> through
            </h3>
            <p className='text-sm font-semibold text-white lg:text-lg'>
              book a free consultation with our team.
            </p>
          </div>

          <div className='w-full h-44 lg:h-38 rounded-2xl overflow-hidden'>
            <img
              src='/faq/consultation.svg'
              alt='Consultation'
              className='w-full h-full object-cover'
            />
          </div>

          <button
            type='button'
            onClick={handleCtaClick}
            className='w-full py-2 bg-white rounded-full text-base font-bold text-black tracking-tight cursor-pointer border-0'
            style={{ boxShadow: 'inset 4px 4px 4px rgba(255, 255, 255, 0.25)' }}
          >
            Free Consultation
          </button>
        </div>
      </div>
    </section>
  );
}

export default FaqSection;
