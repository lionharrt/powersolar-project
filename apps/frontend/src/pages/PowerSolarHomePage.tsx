import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { useTranslation } from 'react-i18next';
import { PowerSolarVideoHero } from '../components/PowerSolarVideoHero';
import { PowerSolarSection } from '../components/PowerSolarSection';
import { MEDIA_CONFIG } from '../config/media';

export const PowerSolarHomePage: React.FC = () => {
  const [isQuoteModalOpen, setIsQuoteModalOpen] = useState(false);
  const { t } = useTranslation(['home', 'services', 'common']);

  return (
    <>
      <Helmet>
        <title>{t('common:company.name')} - Solar Panel Installation Dublin & Leinster</title>
        <meta
          name="description"
          content="Family-owned solar PV specialists in Dublin & Leinster. Save up to 90% on electricity bills. SEAI grants up to €2,100. Premium panels with 30-year warranty."
        />
      </Helmet>

      {/* Hero Section */}
      <section id="home" className="scroll-snap-section">
        <PowerSolarVideoHero
          videoUrl={MEDIA_CONFIG.videos.hero}
          onGetQuote={() => setIsQuoteModalOpen(true)}
        />
      </section>

      {/* Who We Are Section */}
      <PowerSolarSection
        id="who-we-are"
        background="light"
        height="auto"
      >
        <div className="text-center mb-8">
          <p className="text-primary-600 font-semibold text-sm uppercase tracking-wide mb-2">
            {t('home:whoWeAre.heading')}
          </p>
          <h2 className="text-4xl font-bold text-gray-900 mb-8 font-display">
            {t('home:whoWeAre.title')}
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="bg-gradient-to-br from-primary-50 to-primary-100 rounded-2xl p-8 lg:p-12">
            <div className="relative">
              <svg className="absolute top-0 left-0 w-12 h-12 text-primary-200 -mt-2 -ml-2" fill="currentColor" viewBox="0 0 24 24">
                <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
              </svg>
              <p className="text-lg text-gray-700 italic leading-relaxed pl-8">
                {t('home:whoWeAre.brendanQuote')}
              </p>
              <div className="mt-6 text-right">
                <p className="font-semibold text-gray-900">{t('home:whoWeAre.brendanName')}</p>
                <p className="text-sm text-gray-600">{t('home:whoWeAre.brendanRole')}</p>
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4 font-display">
              {t('home:whoWeAre.whatWeDo.title')}
            </h3>
            <p className="text-gray-700 mb-4 leading-relaxed">
              {t('home:whoWeAre.whatWeDo.description')}
            </p>
            <p className="text-gray-700 mb-4 leading-relaxed">
              {t('home:whoWeAre.whatWeDo.approach')}
            </p>
            <p className="text-gray-700 leading-relaxed">
              {t('home:whoWeAre.whatWeDo.coverage')}
            </p>
            <button
              onClick={() => setIsQuoteModalOpen(true)}
              className="mt-6 px-6 py-3 bg-primary-600 text-white rounded-lg hover:bg-primary-700 transition-colors font-semibold"
            >
              {t('common:cta.getQuote')}
            </button>
          </div>
        </div>
      </PowerSolarSection>

      {/* Benefits Section */}
      <PowerSolarSection
        id="benefits"
        background="gradient"
        height="auto"
      >
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4 font-display">
            {t('home:benefits.title')}
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            {t('home:benefits.subtitle')}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            {
              icon: '💰',
              title: t('home:benefits.saveMoney.title'),
              description: t('home:benefits.saveMoney.description'),
            },
            {
              icon: '🏠',
              title: t('home:benefits.increaseValue.title'),
              description: t('home:benefits.increaseValue.description'),
            },
            {
              icon: '🌱',
              title: t('home:benefits.greenEnergy.title'),
              description: t('home:benefits.greenEnergy.description'),
            },
            {
              icon: '💳',
              title: t('home:benefits.greenMortgage.title'),
              description: t('home:benefits.greenMortgage.description'),
            },
            {
              icon: '📈',
              title: t('home:benefits.roi.title'),
              description: t('home:benefits.roi.description'),
            },
            {
              icon: '🛡️',
              title: t('home:benefits.warranty.title'),
              description: t('home:benefits.warranty.description'),
            },
          ].map((benefit, index) => (
            <div
              key={index}
              className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
            >
              <div className="text-5xl mb-4">{benefit.icon}</div>
              <h3 className="text-xl font-bold text-gray-900 mb-2 font-display">
                {benefit.title}
              </h3>
              <p className="text-gray-600">{benefit.description}</p>
            </div>
          ))}
        </div>
      </PowerSolarSection>

      {/* Services Section */}
      <PowerSolarSection
        id="services"
        background="light"
        height="auto"
      >
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4 font-display">
            {t('services:title')}
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            {t('services:subtitle')}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="bg-gradient-to-br from-primary-50 to-primary-100 rounded-2xl p-8 shadow-xl">
            <h3 className="text-2xl font-bold text-gray-900 mb-4 font-display">
              {t('services:residential.title')}
            </h3>
            <ul className="space-y-3 text-gray-700">
              {(t('services:residential.benefits', { returnObjects: true }) as string[]).map((benefit: string, index: number) => (
                <li key={index} className="flex items-start">
                  <span className="text-primary-600 mr-2">✓</span>
                  {benefit}
                </li>
              ))}
            </ul>
            <button
              onClick={() => setIsQuoteModalOpen(true)}
              className="mt-6 px-6 py-3 bg-primary-600 text-white rounded-lg hover:bg-primary-700 transition-colors font-semibold"
            >
              {t('services:residential.cta')}
            </button>
          </div>

          <div className="bg-gradient-to-br from-secondary-50 to-secondary-100 rounded-2xl p-8 shadow-xl">
            <h3 className="text-2xl font-bold text-gray-900 mb-4 font-display">
              {t('services:commercial.title')}
            </h3>
            <ul className="space-y-3 text-gray-700">
              {(t('services:commercial.benefits', { returnObjects: true }) as string[]).map((benefit: string, index: number) => (
                <li key={index} className="flex items-start">
                  <span className="text-secondary-600 mr-2">✓</span>
                  {benefit}
                </li>
              ))}
            </ul>
            <button
              onClick={() => setIsQuoteModalOpen(true)}
              className="mt-6 px-6 py-3 bg-secondary-600 text-white rounded-lg hover:bg-secondary-700 transition-colors font-semibold"
            >
              {t('services:commercial.cta')}
            </button>
          </div>
        </div>
      </PowerSolarSection>

      {/* Recent Jobs Placeholder */}
      <PowerSolarSection
        id="recent-jobs"
        background="gradient"
        height="auto"
      >
        <div className="text-center">
          <h2 className="text-4xl font-bold text-gray-900 mb-4 font-display">
            Recent Jobs
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Projects showcase coming soon...
          </p>
        </div>
      </PowerSolarSection>

      {/* Process Section (3 Easy Steps) */}
      <PowerSolarSection
        id="process"
        background="light"
        height="auto"
      >
        <div className="text-center mb-16">
          <p className="text-primary-600 font-semibold text-sm uppercase tracking-wide mb-2">
            {t('home:process.title')}
          </p>
          <h2 className="text-4xl font-bold text-gray-900 mb-4 font-display">
            {t('home:process.subtitle')}
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          <div className="text-center">
            <div className="w-20 h-20 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-3xl font-bold text-primary-600">1</span>
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-2 font-display">
              {t('home:process.step1.title')}
            </h3>
            <p className="text-gray-600">
              {t('home:process.step1.description')}
            </p>
          </div>

          <div className="text-center">
            <div className="w-20 h-20 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-3xl font-bold text-primary-600">2</span>
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-2 font-display">
              {t('home:process.step2.title')}
            </h3>
            <p className="text-gray-600">
              {t('home:process.step2.description')}
            </p>
          </div>

          <div className="text-center">
            <div className="w-20 h-20 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-3xl font-bold text-primary-600">3</span>
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-2 font-display">
              {t('home:process.step3.title')}
            </h3>
            <p className="text-gray-600">
              {t('home:process.step3.description')}
            </p>
          </div>
        </div>

        <div className="text-center">
          <p className="text-lg text-gray-700 mb-6">{t('home:process.cta')}</p>
          <button
            onClick={() => setIsQuoteModalOpen(true)}
            className="px-8 py-4 bg-primary-600 text-white rounded-lg hover:bg-primary-700 transition-all transform hover:scale-105 text-lg font-semibold shadow-lg"
          >
            {t('common:cta.getQuote')}
          </button>
        </div>
      </PowerSolarSection>

      {/* Contact Section */}
      <PowerSolarSection
        id="contact"
        background="dark"
        height="auto"
      >
        <div className="text-center text-white">
          <h2 className="text-4xl font-bold mb-4 font-display">{t('home:contact.title')}</h2>
          <p className="text-xl mb-8 opacity-90">
            {t('home:contact.subtitle')} <a href={`tel:${t('common:company.phone')}`} className="text-primary-400 hover:text-primary-300">{t('common:company.phone')}</a>
          </p>
          <button
            onClick={() => setIsQuoteModalOpen(true)}
            className="px-8 py-4 bg-primary-600 text-white rounded-lg hover:bg-primary-700 transition-all transform hover:scale-105 text-lg font-semibold"
          >
            {t('common:cta.getQuote')}
          </button>
        </div>
      </PowerSolarSection>

      {/* Quote Modal Placeholder */}
      {isQuoteModalOpen && (
        <div
          className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4"
          onClick={() => setIsQuoteModalOpen(false)}
        >
          <div
            className="bg-white rounded-2xl p-8 max-w-md w-full"
            onClick={(e) => e.stopPropagation()}
          >
            <h3 className="text-2xl font-bold mb-4 font-display">{t('home:contact.formTitle')}</h3>
            <p className="mb-4 text-gray-600 text-sm">{t('home:contact.formNote')}</p>
            <p className="mb-6">Quote form component coming soon...</p>
            <button
              onClick={() => setIsQuoteModalOpen(false)}
              className="w-full px-6 py-3 bg-gray-600 text-white rounded-lg hover:bg-gray-700 font-semibold"
            >
              {t('common:buttons.close')}
            </button>
          </div>
        </div>
      )}
    </>
  );
};
