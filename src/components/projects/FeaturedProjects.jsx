import React from 'react';
import SectionHeading from '../ui/SectionHeading';
import ProjectCard from './ProjectCard';
import { featuredProjects } from '../../data/portfolioData';

export default function FeaturedProjects({ onPlaceholderClick }) {
  return (
    <section id="projects" className="py-20 md:py-28 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          tag="03 // Production Systems"
          title="Featured Full-Stack Applications"
          subtitle="Real business systems engineered to solve tangible operational challenges—managing inventory, tracking cash flow, and enforcing multi-tier workflows."
        />

        <div className="space-y-12">
          {featuredProjects.map((project) => (
            <ProjectCard
              key={project.id}
              project={project}
              onPlaceholderClick={onPlaceholderClick}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
