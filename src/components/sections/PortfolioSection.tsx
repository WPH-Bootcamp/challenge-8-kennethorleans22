import { portfolioData } from '../../data/portfolio';

function PortfolioSection() {
  return (
    <section className="bg-bg-darkest py-10 px-4 lg:py-20 lg:px-35 flex flex-col items-center gap-6 lg:gap-16">
      {/* Header */}
      <div className="flex flex-col items-center gap-3 w-full">
        <h2 className="text-display-sm font-bold text-text-white text-center tracking-tight lg:text-display-xl">
          From Vision to Launch! Projects We're Proud Of
        </h2>
        <p className="text-sm font-medium text-text-secondary text-center lg:text-lg">
          Take a closer look at our recent work powering startups, enterprises, and everything in between.
        </p>
      </div>

      {/* Portfolio Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-5 w-full">
        {portfolioData.map((item) => (
          <div key={item.id} className="flex flex-col gap-2 lg:gap-3">
            {/* Image — aspect-square = selalu kotak, sesuai Figma */}
            <div className="rounded-2xl overflow-hidden aspect-square w-full">
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
              />
            </div>

            {/* Info */}
            <div className="flex flex-col">
              <span className="text-sm font-medium text-orange lg:text-base">
                {item.category}
              </span>
              <span className="text-base font-bold text-text-white tracking-tight lg:text-xl lg:tracking-normal">
                {item.title}
              </span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default PortfolioSection;