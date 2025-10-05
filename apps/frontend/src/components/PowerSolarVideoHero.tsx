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
  const [currentIndex, setCurrentIndex] = useState(0);
  const { t } = useTranslation('home');

  const messages = [
    {
      title: t('hero.title1'),
      subtitle: t('hero.subtitle1'),
    },
    {
      title: t('hero.title2'),
      subtitle: t('hero.subtitle2'),
    },
    {
      title: t('hero.title3'),
      subtitle: t('hero.subtitle3'),
    },
  ];

  useEffect(() => {
    setIsVisible(true);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % messages.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [messages.length]);

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

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-transparent" />

      {/* Content */}
      <div className="relative z-10 w-full px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="max-w-3xl">
          {messages.map((message, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0 }}
              animate={{
                opacity: index === currentIndex ? 1 : 0,
              }}
              transition={{ duration: 0.8 }}
              className={`absolute ${index === currentIndex ? 'z-10' : 'z-0'}`}
            >
              {isVisible && (
                <>
                  <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 sm:mb-6"
                  >
                    {message.title}
                  </motion.h1>
                  <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                    className="text-lg sm:text-xl md:text-2xl text-white/90 mb-8"
                  >
                    {message.subtitle}
                  </motion.p>
                </>
              )}
            </motion.div>
          ))}

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="relative z-20 mt-32"
          >
            <button
              onClick={onGetQuote}
              className="inline-flex items-center justify-center px-8 py-4 text-lg font-semibold text-white bg-primary-600 hover:bg-primary-700 rounded-lg transition-all duration-200 transform hover:scale-105 shadow-xl"
            >
              {t('common:cta.getQuote')}
            </button>

            <div className="flex flex-wrap gap-6 mt-8 text-white">
              <div>
                <div className="text-3xl font-bold">500+</div>
                <div className="text-sm opacity-90">{t('hero.stats.installations')}</div>
              </div>
              <div>
                <div className="text-3xl font-bold">12+</div>
                <div className="text-sm opacity-90">{t('hero.stats.experience')}</div>
              </div>
              <div>
                <div className="text-3xl font-bold">30</div>
                <div className="text-sm opacity-90">{t('hero.stats.warranty')}</div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20">
        <div className="flex flex-col items-center text-white/70 animate-bounce">
          <span className="text-sm uppercase tracking-wider mb-2">Scroll Down</span>
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </div>
    </section>
  );
};

