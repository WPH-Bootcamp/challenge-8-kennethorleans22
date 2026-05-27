/**
 * Main App Component
 *
 * TODO untuk mentee:
 * 1. Import Home page component (setelah dibuat)
 * 2. Render Home component di sini
 * 3. Atau setup routing jika membuat multiple pages
 *
 * Current: Placeholder untuk testing Tailwind setup
 */

// function App() {
//   return (
//     <div className="min-h-screen bg-gray-50 flex items-center justify-center">
//       <div className="text-center">
//         <h1 className="text-4xl font-bold text-gray-900 mb-4">
//           Company Profile Assignment
//         </h1>
//         <p className="text-lg text-gray-600 mb-6">
//           Start building your components!
//         </p>
//         <div className="space-y-2 text-sm text-gray-500">
//           <p>TailwindCSS configured</p>
//           <p>Folder structure ready</p>
//           <p>Check README.md for instructions</p>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default App;

// function App() {
//   return (
//     <div className="min-h-screen flex items-center justify-center">
//       <div className="text-center">
//         <h1 className="text-4xl font-bold text-orange mb-4">
//           Setup Berhasil!
//         </h1>
//         <p className="text-text-secondary">
//           Tailwind + Design System sudah terhubung
//         </p>
//         <div className="mt-6 px-8 py-3 bg-orange rounded-full inline-block">
//           <span className="text-text-white font-bold">Test Button</span>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default App;

// import Navbar from './components/layout/Navbar';

// function App() {
//   return (
//     <div className="min-h-screen">
//       <Navbar />
//       <div className="h-screen flex items-center justify-center">
//         <p className="text-text-secondary">Navbar test</p>
//       </div>
//     </div>
//   );
// }

// export default App;

import Navbar from './components/layout/Navbar';
import HeroSection from './components/sections/HeroSection';
import LogosSection from './components/sections/LogosSection';
import StatsSection from './components/sections/StatsSection';
import ProcessSection from './components/sections/ProcessSection';
import ServicesSection from './components/sections/ServicesSection';
import IndustrySection from './components/sections/IndustrySection';
import PortfolioSection from './components/sections/PortfolioSection';
import TestimonialsSection from './components/sections/TestimonialsSection';
import FaqSection from './components/sections/FaqSection';

function App() {
  return (
    <div className='min-h-screen'>
      <Navbar />
      <main>
        <HeroSection />
        <LogosSection />
        <StatsSection />
        <ProcessSection />
        <ServicesSection />
        <IndustrySection />
        <PortfolioSection />
        <TestimonialsSection />
        <FaqSection />
      </main>
    </div>
  );
}

export default App;
