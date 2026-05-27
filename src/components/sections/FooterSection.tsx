import logoSymbol from '../../assets/logo-symbol.png';
import { footerNavItems, socialLinks } from '../../data/footer';
import { scrollToSection } from '../../utils/scroll';


function FooterSection() {
  

  return (
    <footer className="bg-bg-darkest py-6 px-4 lg:py-10 lg:px-35">

      {/* ── Card ─────────────────────────────────────────────────────── */}
      <div className="flex flex-col gap-6 p-5 bg-bg-section border border-border rounded-3xl lg:gap-15 lg:p-10">

        {/* ── Header ─────────────────────────────────────────────────── */}
        <div className="flex flex-col gap-6 lg:flex-row lg:justify-between lg:items-start lg:gap-0">

          {/* Logo */}
          <div className="flex flex-row items-center gap-2 lg:order-2 lg:gap-2.5">
            <img src={logoSymbol} alt="Logo symbol" />
            <span className="font-logo font-semibold text-xl lg:text-2xl text-text-white">
              Your Logo
            </span>
          </div>

          {/* Title */}
          <h2 className="text-display-sm font-bold tracking-tight text-text-white lg:order-1 lg:text-4xl lg:leading-11 lg:max-w-70">
            LET'S DISCUSS <br className="hidden lg:block" /> YOUR IDEAS
          </h2>
        </div>

        {/* ── Divider ────────────────────────────────────────────────── */}
        <div className="w-full h-px bg-border" />

        {/* Footer Row */}
        <div className="flex flex-col gap-6 lg:flex-row lg:justify-between lg:items-center lg:gap-0">

          {/* Nav Menu */}
          <nav aria-label="Footer navigation">
            <ul className="flex flex-col gap-2 lg:flex-row lg:gap-0" role="list">
              {footerNavItems.map((item) => (
                <li key={item.sectionId}>
                  <button
                    type="button"
                    onClick={() => scrollToSection(item.sectionId)}
                    className="flex items-center py-2 text-sm font-medium text-text-white hover:text-orange transition-colors duration-200 cursor-pointer lg:px-4 lg:text-base lg:rounded-full lg:hover:bg-white/10"
                  >
                    {item.label}
                  </button>
                </li>
              ))}
            </ul>
          </nav>

          {/* Social Icons */}
          <div className="flex flex-row items-center gap-4 w-[208px] h-[40px]">
            {socialLinks.map(({ name, href, icon }) => (
              <a
                key={name}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`Visit our ${name}`}
                className="w-[40px] h-[40px] flex-none hover:opacity-75 transition-opacity duration-200"
              >
                <img
                  src={icon}
                  alt=""
                  className="w-full h-full object-contain"
                />
              </a>
            ))}
          </div>

        </div>
      </div>
    </footer>
  );
}

export default FooterSection;