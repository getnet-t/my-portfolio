import React, { useState } from 'react';
import Navbar from './components/layout/Navbar';
import Hero from './components/hero/Hero';
import About from './components/about/About';
import TechStack from './components/tech/TechStack';
import FeaturedProjects from './components/projects/FeaturedProjects';
import WhatICanBuild from './components/capabilities/WhatICanBuild';
import DevelopmentProcess from './components/process/DevelopmentProcess';
import GithubSection from './components/github/GithubSection';
import Contact from './components/contact/Contact';
import Footer from './components/layout/Footer';
import CvModal from './components/ui/CvModal';
import PlaceholderModal from './components/ui/PlaceholderModal';

function App() {
  const [cvModalOpen, setCvModalOpen] = useState(false);
  const [placeholderData, setPlaceholderData] = useState(null);

  const handleOpenPlaceholder = (type, title, url) => {
    setPlaceholderData({ type, title, url });
  };

  const handleClosePlaceholder = () => {
    setPlaceholderData(null);
  };

  return (
    <div className="min-h-screen bg-[#080a0f] text-slate-100 relative selection:bg-emerald-500/20 selection:text-emerald-300">
      {/* Global subtle ambient background glow */}
      <div className="fixed top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-[600px] bg-gradient-to-b from-emerald-500/[0.04] to-transparent pointer-events-none -z-10" />

      {/* Navigation */}
      <Navbar onOpenCvModal={() => setCvModalOpen(true)} />

      {/* Main Content Sections */}
      <main>
        {/* 1. Hero Section */}
        <Hero onOpenCvModal={() => setCvModalOpen(true)} />

        {/* 2. About Me */}
        <About />

        {/* 3. Tech Stack */}
        <TechStack />

        {/* 4. Featured Projects */}
        <FeaturedProjects onPlaceholderClick={handleOpenPlaceholder} />

        {/* 5. What I Can Build */}
        <WhatICanBuild />

        {/* 6. Development Process */}
        <DevelopmentProcess />

        {/* 7. GitHub Section */}
        <GithubSection onPlaceholderClick={handleOpenPlaceholder} />

        {/* 8. Contact Section */}
        <Contact onPlaceholderClick={handleOpenPlaceholder} />
      </main>

      {/* 9. Footer */}
      <Footer onPlaceholderClick={handleOpenPlaceholder} />

      {/* Interactive CV Modal */}
      <CvModal isOpen={cvModalOpen} onClose={() => setCvModalOpen(false)} />

      {/* Placeholder Details Dialog */}
      <PlaceholderModal
        isOpen={Boolean(placeholderData)}
        onClose={handleClosePlaceholder}
        data={placeholderData}
      />
    </div>
  );
}

export default App;
