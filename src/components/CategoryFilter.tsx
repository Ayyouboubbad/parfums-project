import React, { useState } from 'react';
import { Filter } from 'lucide-react';
import { CATEGORIES } from '../data/constants';
import { useLanguage } from '../context/LanguageContext';

interface CategoryFilterProps {
  onCategoryChange: (category: string | null) => void;
  activeCategory: string | null;
}

const CategoryFilter: React.FC<CategoryFilterProps> = ({
  onCategoryChange,
  activeCategory
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const { t, language } = useLanguage();

  const categories = [
    { key: 'all', label: t('shop.allProducts') },
    { key: CATEGORIES.MEN, label: t('shop.men') },
    { key: CATEGORIES.WOMEN, label: t('shop.women') },
    { key: CATEGORIES.LUXURY, label: t('shop.luxury') },
  ];

  return (
    <div className="mb-8" dir={language === 'ar' ? 'rtl' : 'ltr'}>
      <div className="flex items-center gap-4 mb-4">
        <Filter size={20} className="text-luxury-gold" />
        <h3 className="text-lg font-cinzel font-bold text-luxury-dark">{t('shop.filter')}</h3>
      </div>

      {/* Desktop View */}
      <div className="hidden md:flex gap-3 flex-wrap">
        {categories.map((cat) => (
          <button
            key={cat.key}
            onClick={() => onCategoryChange(cat.key === 'all' ? null : cat.key)}
            className={`px-6 py-2 rounded-lg font-cinzel text-sm transition-all duration-300 ${
              (cat.key === 'all' && activeCategory === null) ||
              (cat.key !== 'all' && activeCategory === cat.key)
                ? 'bg-luxury-gold text-luxury-dark shadow-lg'
                : 'bg-gray-200 text-luxury-dark hover:bg-gray-300'
            }`}
          >
            {cat.label}
          </button>
        ))}
      </div>

      {/* Mobile View */}
      <div className="md:hidden">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="w-full px-6 py-3 bg-luxury-gold text-luxury-dark font-cinzel rounded-lg flex items-center justify-between"
        >
          <span>
            {activeCategory ? activeCategory : t('shop.allProducts')}
          </span>
          <span>{isOpen ? '−' : '+'}</span>
        </button>

        {isOpen && (
          <div className="mt-2 space-y-2">
            {categories.map((cat) => (
              <button
                key={cat.key}
                onClick={() => {
                  onCategoryChange(cat.key === 'all' ? null : cat.key);
                  setIsOpen(false);
                }}
                className="w-full px-6 py-2 text-left bg-gray-200 text-luxury-dark font-cinzel rounded hover:bg-gray-300 transition-colors"
              >
                {cat.label}
              </button>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default CategoryFilter;
