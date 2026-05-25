import { useState } from 'react';
import { industriesData } from '../../data/industries';

function IndustrySection() {
  const [activeId, setActiveId] = useState<number>(industriesData[0]!.id);

  const activeIndustry = industriesData.find(
    (industry) => industry.id === activeId,
  )!;

  return (
    <section className="bg-bg-darkest py-10 px-4 lg:py-20 lg:px-35 flex flex-col gap-6 lg:gap-16">
      {/* Header */}
      <div className="flex flex-col gap-3">
        <h2 className="text-3xl font-bold text-text-white tracking-tight lg:text-display-xl lg:tracking-tight">
          Built for Your Industry
        </h2>
        <p className="text-sm font-medium text-text-secondary lg:text-lg">
         We’ve helped companies across industries launch smarter, faster, and more securely.
        </p>
      </div>

      {/* Content */}
      <div className="flex flex-col lg:flex-row items-start gap-6 lg:gap-16">
        {/* Industry List */}
        <div className="flex flex-col gap-3 lg:gap-6 lg:w-64 shrink-0">
          {industriesData.map((industry) => {
            const isActive = industry.id === activeId;
            return (
              <button
                key={industry.id}
                type="button"
                onClick={() => setActiveId(industry.id)}
                className="flex flex-row items-center gap-1.5 lg:gap-2 bg-transparent border-0 p-0 cursor-pointer text-left"
              >
                <div
                  className={`w-1 h-6 lg:h-8 rounded-full shrink-0 transition-colors duration-300 ${
                    isActive ? 'bg-orange' : 'bg-text-placeholder'
                  }`}
                />
                <span
                  className={`text-base font-bold tracking-tight lg:text-xl transition-colors duration-300 ${
                    isActive ? 'text-text-white' : 'text-text-placeholder'
                  }`}
                >
                  {industry.name}
                </span>
              </button>
            );
          })}
        </div>

        {/* Industry Details — key={activeId} triggers re-mount → animate-fade-in-up on switch */}
        <div
          key={activeId}
          className="flex flex-col gap-5 flex-1 min-w-0 animate-fade-in-up"
        >
          <p className="text-sm font-medium text-text-white lg:text-lg">
            {activeIndustry.description}
          </p>
          <div className="rounded-xl lg:rounded-3xl overflow-hidden h-50 lg:h-88">
            <img
              src={activeIndustry.image}
              alt={activeIndustry.name}
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default IndustrySection;