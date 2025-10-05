import React, { useState } from 'react';
import { useVariants } from '../contexts/VariantContext';
import { THEME_VARIANTS, SECTION_VARIANTS } from '../config/variants';

const DevToolbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(true);
  const [isMinimized, setIsMinimized] = useState(false);
  const { state, setTheme, setSectionVariant, resetAll } = useVariants();

  // Only show in dev mode or with query param
  const shouldShow =
    import.meta.env.DEV || window.location.search.includes('devmode=true');

  if (!shouldShow) return null;

  if (isMinimized) {
    return (
      <button
        onClick={() => setIsMinimized(false)}
        className="fixed bottom-4 right-4 z-[9999] bg-gray-900 text-white px-4 py-2 rounded-lg shadow-2xl hover:bg-gray-800 transition-all"
      >
        🎨 Variants
      </button>
    );
  }

  if (!isOpen) return null;

  return (
    <div className="fixed bottom-4 right-4 z-[9999] bg-white rounded-lg shadow-2xl border border-gray-200 w-80 max-h-[80vh] overflow-hidden flex flex-col">
      {/* Header */}
      <div className="bg-gray-900 text-white px-4 py-3 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <span className="text-lg">🎨</span>
          <span className="font-semibold">Variants</span>
        </div>
        <div className="flex items-center gap-2">
          <button
            onClick={() => setIsMinimized(true)}
            className="hover:bg-gray-800 px-2 py-1 rounded transition-colors"
            title="Minimize"
          >
            ─
          </button>
          <button
            onClick={() => setIsOpen(false)}
            className="hover:bg-gray-800 px-2 py-1 rounded transition-colors"
            title="Close"
          >
            ×
          </button>
        </div>
      </div>

      {/* Content */}
      <div className="overflow-y-auto flex-1 p-4 space-y-6">
        {/* Theme Selector */}
        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-2">
            Theme
          </label>
          <div className="grid grid-cols-5 gap-2">
            {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((themeId) => (
              <button
                key={themeId}
                onClick={() => setTheme(themeId)}
                className={`px-2 py-2 rounded-lg border-2 transition-all text-sm ${
                  state.theme === themeId
                    ? 'border-primary-500 bg-primary-50 text-primary-700 font-semibold'
                    : 'border-gray-200 hover:border-gray-300 text-gray-600'
                }`}
                title={THEME_VARIANTS[themeId].name}
              >
                {themeId}
              </button>
            ))}
          </div>
          <p className="text-xs text-gray-500 mt-1">
            {THEME_VARIANTS[state.theme].name}
          </p>
        </div>

        {/* Section Variants - Dynamically generated */}
        <div className="space-y-4">
          <div className="text-sm font-semibold text-gray-700">Section Variants</div>

          {Object.entries(SECTION_VARIANTS).map(([sectionKey, variants]) => {
            const currentVariant = state.sections[sectionKey as keyof typeof state.sections];
            
            // Format section name (camelCase to Title Case)
            const sectionName = sectionKey
              .replace(/([A-Z])/g, ' $1')
              .replace(/^./, (str) => str.toUpperCase())
              .trim();

            return (
              <div key={sectionKey}>
                <label className="block text-xs font-medium text-gray-600 mb-1">
                  {sectionName}
                </label>
                <div className="flex gap-2">
                  {Object.keys(variants).map((variantKey) => (
                    <button
                      key={variantKey}
                      onClick={() => setSectionVariant(sectionKey as keyof typeof state.sections, variantKey)}
                      className={`flex-1 px-3 py-2 rounded border-2 text-sm transition-all ${
                        currentVariant === variantKey
                          ? 'border-primary-500 bg-primary-50 text-primary-700 font-semibold'
                          : 'border-gray-200 hover:border-gray-300 text-gray-600'
                      }`}
                      title={variants[variantKey as keyof typeof variants].description}
                    >
                      {variantKey}
                    </button>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Footer */}
      <div className="border-t border-gray-200 p-3 bg-gray-50">
        <button
          onClick={resetAll}
          className="w-full px-4 py-2 bg-gray-200 hover:bg-gray-300 text-gray-700 rounded text-sm font-medium transition-colors"
        >
          🔄 Reset All
        </button>
      </div>
    </div>
  );
};

export default DevToolbar;

