import React from 'react';
import { Helmet } from 'react-helmet-async';
import { useTranslation } from 'react-i18next';
import { useVariants } from '../contexts/VariantContext';
import { PowerSolarVideoHero } from '../components/PowerSolarVideoHero';
import { PowerSolarSection } from '../components/PowerSolarSection';
import { MEDIA_CONFIG } from '../config/media';
import {
  WhoWeAreVariantA,
  WhoWeAreVariantB,
  WhoWeAreVariantC,
} from '../variants/WhoWeAreVariants';
import {
  BenefitsVariantA,
  BenefitsVariantB,
  BenefitsVariantC,
} from '../variants/BenefitsVariants';
import {
  ProcessVariantA,
  ProcessVariantB,
  ProcessVariantC,
} from '../variants/ProcessVariants';
import {
  DidYouKnowVariantA,
  DidYouKnowVariantB,
  DidYouKnowVariantC,
} from '../variants/DidYouKnowVariants';
import {
  ContactVariantA,
  ContactVariantB,
  ContactVariantC,
} from '../variants/ContactVariants';
import {
  ShowcaseVariantA,
  ShowcaseVariantB,
  ShowcaseVariantC,
} from '../variants/ShowcaseVariants';
import {
  ServicesVariantA,
  ServicesVariantB,
  ServicesVariantC,
} from '../variants/ServicesVariants';

export const PowerSolarHomePage: React.FC = () => {
  const { t } = useTranslation(['home', 'services', 'common']);
  const { state } = useVariants();

  // Variant component mappings
  const whoWeAreVariants = {
    A: WhoWeAreVariantA,
    B: WhoWeAreVariantB,
    C: WhoWeAreVariantC,
  };

  const benefitsVariants = {
    A: BenefitsVariantA,
    B: BenefitsVariantB,
    C: BenefitsVariantC,
  };

  const showcaseVariants = {
    A: ShowcaseVariantA,
    B: ShowcaseVariantB,
    C: ShowcaseVariantC,
  };

  const servicesVariants = {
    A: ServicesVariantA,
    B: ServicesVariantB,
    C: ServicesVariantC,
  };

  const processVariants = {
    A: ProcessVariantA,
    B: ProcessVariantB,
    C: ProcessVariantC,
  };

  const didYouKnowVariants = {
    A: DidYouKnowVariantA,
    B: DidYouKnowVariantB,
    C: DidYouKnowVariantC,
  };

  const contactVariants = {
    A: ContactVariantA,
    B: ContactVariantB,
    C: ContactVariantC,
  };

  // Get selected variants (with fallbacks for backwards compatibility)
  const WhoWeAreComponent = whoWeAreVariants[(state.sections.whoWeAre || 'A') as keyof typeof whoWeAreVariants];
  const BenefitsComponent = benefitsVariants[(state.sections.benefits || 'A') as keyof typeof benefitsVariants];
  const ServicesComponent = servicesVariants[(state.sections.services || 'A') as keyof typeof servicesVariants];
  const ShowcaseComponent = showcaseVariants[(state.sections.showcase || 'A') as keyof typeof showcaseVariants];
  const ProcessComponent = processVariants[(state.sections.process || 'A') as keyof typeof processVariants];
  const DidYouKnowComponent = didYouKnowVariants[(state.sections.didYouKnow || 'A') as keyof typeof didYouKnowVariants];
  const ContactComponent = contactVariants[(state.sections.contact || 'A') as keyof typeof contactVariants];

  // Section component map for dynamic ordering
  const sectionMap: Record<string, React.ReactNode> = {
    whoWeAre: <WhoWeAreComponent key="whoWeAre" onGetQuote={() => {/* TODO: Open quote modal */}} />,
    benefits: <BenefitsComponent key="benefits" />,
    services: <ServicesComponent key="services" />,
    showcase: <ShowcaseComponent key="showcase" />,
    process: <ProcessComponent key="process" />,
    didYouKnow: <DidYouKnowComponent key="didYouKnow" />,
    contact: <ContactComponent key="contact" />,
  };

  // Render sections in the order specified by state.sectionOrder
  const orderedSections = (state.sectionOrder || Object.keys(sectionMap)).map(
    (sectionKey) => sectionMap[sectionKey]
  );

  return (
    <>
      <Helmet>
        <title>{t('common:company.name')} - Solar Panel Installation Dublin & Leinster</title>
        <meta
          name="description"
          content="Family-owned solar PV specialists in Dublin & Leinster. Save up to 90% on electricity bills. SEAI grants up to €2,100. Premium panels with 30-year warranty."
        />
      </Helmet>

      {/* Hero Section - Always First */}
      <section id="home" className="scroll-snap-section">
        <PowerSolarVideoHero
          videoUrl={MEDIA_CONFIG.videos.hero}
          onGetQuote={() => {/* TODO: Open quote modal */}}
        />
      </section>

      {/* Dynamically Ordered Sections */}
      {orderedSections}

      {/* Invest Section - No variants (keep as is) */}
      <PowerSolarSection
        id="invest"
        background="light"
        height="auto"
      >
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-gray-900 mb-8 text-center font-display">
            {t('home:invest.title')}
          </h2>

          <div className="bg-gradient-to-br from-primary-50 to-accent-50 rounded-2xl p-8 lg:p-12 mb-8">
            <p className="text-gray-700 leading-relaxed mb-6">
              Not only is installing solar panels beneficial for the environment, providing a sustainable,
              renewable and clean source of free electricity for your home or business, but it also offers
              significant financial advantages.
            </p>

            <ul className="space-y-4 mb-6">
              {(t('home:invest.benefits', { returnObjects: true }) as string[]).map((benefit: string, index: number) => (
                <li key={index} className="flex items-start gap-3">
                  <span className="text-primary-600 text-xl flex-shrink-0 font-bold">{index + 1}.</span>
                  <span className="text-gray-700 leading-relaxed">{benefit}</span>
                </li>
              ))}
            </ul>

            <p className="text-gray-700 leading-relaxed font-semibold">
              {t('home:invest.payback')}
            </p>
          </div>

          <div className="space-y-6 text-gray-700 leading-relaxed">
            <p>{t('home:invest.familyBusiness')}</p>
            <p>{t('home:invest.closing')}</p>
          </div>

          <div className="text-center mt-8">
            <button
              onClick={() => {/* TODO: Open quote modal */}}
              className="px-8 py-4 bg-secondary-500 hover:bg-secondary-600 text-white font-bold text-lg rounded-lg transition-colors shadow-lg"
            >
              {t('common:cta.getQuote')}
            </button>
          </div>
        </div>
      </PowerSolarSection>

      {/* Contact Section - WITH VARIANTS */}
      <ContactComponent />
    </>
  );
};

