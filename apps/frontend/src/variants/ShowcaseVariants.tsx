import React from 'react';
import { useTranslation } from 'react-i18next';
import { PowerSolarSection } from '../components/PowerSolarSection';

// Variant A: Masonry Grid Gallery
export const ShowcaseVariantA: React.FC = () => {
  useTranslation(['home']);

  const projects = [
    { id: 1, image: 'https://storage.googleapis.com/powersolar-media/images/projects/proj1.jpeg' },
    { id: 2, image: 'https://storage.googleapis.com/powersolar-media/images/projects/proj2.jpeg' },
    { id: 3, image: 'https://storage.googleapis.com/powersolar-media/images/projects/proj3.jpeg' },
    { id: 4, image: 'https://storage.googleapis.com/powersolar-media/images/projects/proj4.jpeg' },
    { id: 5, image: 'https://storage.googleapis.com/powersolar-media/images/projects/proj5.jpeg' },
  ];

  return (
    <PowerSolarSection id="showcase" background="gradient" height="auto">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold text-gray-900 mb-4 font-display">
          Recent Solar Installations
        </h2>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          See our work across Dublin & Leinster
        </p>
      </div>

      {/* Masonry Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
        {projects.map((project, idx) => (
          <div
            key={project.id}
            className={`group relative rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 cursor-pointer transform hover:-translate-y-1 ${
              idx % 3 === 0 ? 'md:row-span-2' : ''
            }`}
          >
            {/* Project Image */}
            <img 
              src={project.image}
              alt={`Solar project ${project.id}`}
              className={`w-full h-full object-cover ${
                idx % 3 === 0 ? 'aspect-[3/4]' : 'aspect-[4/3]'
              }`}
            />

            {/* Overlay Info */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                <h3 className="font-bold text-lg mb-2">Dublin Residential Install</h3>
                <p className="text-sm text-white/90 mb-3">6.5kW System • 16 Panels • 2024</p>
                <div className="flex items-center gap-4 text-sm">
                  <span className="flex items-center gap-1">
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                    </svg>
                    Dublin 4
                  </span>
                  <span>€8,450</span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="text-center">
        <button className="px-8 py-3 bg-primary-600 text-white rounded-lg hover:bg-primary-700 transition-colors font-semibold">
          View All Projects
        </button>
      </div>
    </PowerSolarSection>
  );
};

// Variant B: Featured Projects with Large Cards
export const ShowcaseVariantB: React.FC = () => {
  useTranslation(['home']);

  const featuredProjects = [
    { id: 1, image: 'https://storage.googleapis.com/powersolar-media/images/projects/proj1.jpeg' },
    { id: 2, image: 'https://storage.googleapis.com/powersolar-media/images/projects/proj2.jpeg' },
  ];

  return (
    <PowerSolarSection id="showcase" background="gradient" height="auto">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold text-gray-900 mb-4 font-display">
          Featured Projects
        </h2>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Transforming homes across Ireland
        </p>
      </div>

      {/* Featured Project Cards */}
      <div className="space-y-12">
        {featuredProjects.map((project) => (
          <div key={project.id} className="bg-white rounded-2xl shadow-xl overflow-hidden">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* Project Image */}
              <img 
                src={project.image}
                alt={`Featured solar project ${project.id}`}
                className="w-full aspect-[4/3] object-cover"
              />

              {/* Project Details */}
              <div className="p-8 lg:p-12 flex flex-col justify-center">
                <div className="mb-4">
                  <span className="inline-block bg-primary-100 text-primary-800 text-sm font-semibold px-3 py-1 rounded-full">
                    Residential
                  </span>
                </div>
                <h3 className="text-3xl font-bold text-gray-900 mb-4 font-display">
                  Modern Family Home in Dublin
                </h3>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  A complete 7.2kW solar installation featuring 18 premium panels, battery storage, and smart monitoring. This family now saves over 85% on their electricity bills.
                </p>

                {/* Stats */}
                <div className="grid grid-cols-3 gap-4 mb-6">
                  <div className="text-center p-4 bg-primary-50 rounded-lg">
                    <div className="text-2xl font-bold text-primary-700">7.2kW</div>
                    <div className="text-xs text-gray-600">System Size</div>
                  </div>
                  <div className="text-center p-4 bg-secondary-50 rounded-lg">
                    <div className="text-2xl font-bold text-secondary-700">18</div>
                    <div className="text-xs text-gray-600">Panels</div>
                  </div>
                  <div className="text-center p-4 bg-accent-50 rounded-lg">
                    <div className="text-2xl font-bold text-accent-700">85%</div>
                    <div className="text-xs text-gray-600">Savings</div>
                  </div>
                </div>

                <div className="flex items-center gap-2 text-gray-600">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                  </svg>
                  <span>Dublin 15 • Installed March 2024</span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="text-center mt-12">
        <button className="px-8 py-3 bg-secondary-600 text-white rounded-lg hover:bg-secondary-700 transition-colors font-semibold">
          Explore More Projects
        </button>
      </div>
    </PowerSolarSection>
  );
};

// Variant C: Before/After Slider Style
export const ShowcaseVariantC: React.FC = () => {
  useTranslation(['home']);

  const transformProjects = [
    { id: 1, image: 'https://storage.googleapis.com/powersolar-media/images/projects/proj1.jpeg' },
    { id: 2, image: 'https://storage.googleapis.com/powersolar-media/images/projects/proj2.jpeg' },
    { id: 3, image: 'https://storage.googleapis.com/powersolar-media/images/projects/proj3.jpeg' },
    { id: 4, image: 'https://storage.googleapis.com/powersolar-media/images/projects/proj4.jpeg' },
  ];

  return (
    <PowerSolarSection id="showcase" background="gradient" height="auto">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold text-gray-900 mb-4 font-display">
          See The Transformation
        </h2>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Real homes, real results
        </p>
      </div>

      {/* Before/After Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
        {transformProjects.map((project) => (
          <div key={project.id} className="bg-white rounded-xl shadow-lg overflow-hidden group">
            {/* Before/After Split */}
            <div className="relative aspect-[4/3]">
              {/* Before (left half) - grayscale filter */}
              <div className="absolute inset-0 w-1/2 overflow-hidden border-r-2 border-white">
                <img 
                  src={project.image}
                  alt={`Before solar installation ${project.id}`}
                  className="w-full h-full object-cover grayscale"
                />
                <div className="absolute inset-0 bg-black/20 flex items-center justify-center">
                  <p className="text-white font-semibold text-lg bg-black/50 px-4 py-2 rounded">BEFORE</p>
                </div>
              </div>
              {/* After (right half) - full color */}
              <div className="absolute inset-0 left-1/2 overflow-hidden">
                <img 
                  src={project.image}
                  alt={`After solar installation ${project.id}`}
                  className="w-full h-full object-cover"
                  style={{ objectPosition: '100% 50%' }}
                />
                <div className="absolute inset-0 flex items-center justify-center">
                  <p className="text-white font-semibold text-lg bg-primary-600/80 px-4 py-2 rounded">AFTER</p>
                </div>
              </div>
            </div>

            {/* Project Info */}
            <div className="p-6">
              <h3 className="font-bold text-lg text-gray-900 mb-2">
                Residential Installation
              </h3>
              <div className="flex items-center justify-between text-sm text-gray-600">
                <span className="flex items-center gap-1">
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                  </svg>
                  Kildare
                </span>
                <span className="font-semibold text-primary-600">5.5kW System</span>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="text-center">
        <button className="px-8 py-3 bg-accent-600 text-white rounded-lg hover:bg-accent-700 transition-colors font-semibold">
          View Full Gallery
        </button>
      </div>
    </PowerSolarSection>
  );
};

