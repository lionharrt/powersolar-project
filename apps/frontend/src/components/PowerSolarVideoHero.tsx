import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';

interface PowerSolarVideoHeroProps {
  videoUrl?: string;
  onGetQuote?: () => void;
}

export const PowerSolarVideoHero: React.FC<PowerSolarVideoHeroProps> = ({
  videoUrl,
  onGetQuote,
}) => {
  const [isVisible, setIsVisible] = useState(false);
  const { t } = useTranslation('home');

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const handleCall = () => {
    window.location.href = 'tel:087-0644982';
  };

  return (
    <section className="relative w-full h-screen flex items-center justify-center overflow-hidden">
      {/* Video Background */}
      {videoUrl && (
        <video
          className="absolute inset-0 w-full h-full object-cover"
          src={videoUrl}
          autoPlay
          loop
          muted
          playsInline
        />
      )}

      {/* Gradient Overlay - Light for video visibility */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/40 via-black/20 to-transparent" />

      {/* Content */}
      <div className="relative z-10 w-full px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="max-w-4xl">
          {isVisible && (
            <>
              {/* Main Headline */}
              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight"
              >
                {t('hero.title')}
              </motion.h1>

              {/* SEAI Grant Callout */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="mb-8"
              >
                <p className="text-2xl sm:text-3xl md:text-4xl text-white font-semibold mb-2">
                  {t('hero.subtitle')}
                </p>
                <p className="text-sm sm:text-base text-white/80 italic">
                  {t('hero.disclaimer')}
                </p>
              </motion.div>

              {/* CTA Buttons */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
                className="flex flex-col sm:flex-row gap-4 mb-12"
              >
                <button
                  onClick={onGetQuote}
                  className="px-8 py-4 bg-secondary-500 hover:bg-secondary-600 text-white font-bold text-lg rounded-lg 
                    transition-all duration-300 transform hover:scale-105 hover:shadow-xl"
                >
                  {t('hero.cta.quote')}
                </button>
                <button
                  onClick={handleCall}
                  className="px-8 py-4 bg-white/10 hover:bg-white/20 backdrop-blur-sm text-white font-bold text-lg 
                    rounded-lg border-2 border-white transition-all duration-300 transform hover:scale-105"
                >
                  {t('hero.cta.call')}
                </button>
              </motion.div>

              {/* Stats Bar */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.8 }}
                className="grid grid-cols-3 gap-4 sm:gap-8 max-w-2xl"
              >
                <div className="text-center">
                  <div className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-1">
                    {t('hero.stats.installations')}
                  </div>
                  <div className="text-xs sm:text-sm text-white/80 font-medium">
                    {t('hero.stats.installationsLabel')}
                  </div>
                </div>
                <div className="text-center border-l border-r border-white/30">
                  <div className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-1">
                    {t('hero.stats.experience')}
                  </div>
                  <div className="text-xs sm:text-sm text-white/80 font-medium">
                    {t('hero.stats.experienceLabel')}
                  </div>
                </div>
                <div className="text-center">
                  <div className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-1">
                    {t('hero.stats.warranty')}
                  </div>
                  <div className="text-xs sm:text-sm text-white/80 font-medium">
                    {t('hero.stats.warrantyLabel')}
                  </div>
                </div>
              </motion.div>
            </>
          )}
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.5 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white/60"
      >
        <div className="flex flex-col items-center">
          <span className="text-sm mb-2 uppercase tracking-wider">Scroll Down</span>
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 14l-7 7m0 0l-7-7m7 7V3"
              />
            </svg>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};
