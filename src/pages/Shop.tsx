import React, { useState, useMemo } from 'react';
import { motion } from 'framer-motion';
import CategoryFilter from '../components/CategoryFilter';
import ProductCard from '../components/ProductCard';
import { products } from '../data/products';
import { useLanguage } from '../context/LanguageContext';
import { useSEO } from '../hooks/useSEO';
import { pageMetaTags } from '../utils/seoMetaTags';

const Shop: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const { t, language } = useLanguage();

  // Set SEO meta tags
  useSEO({
    title: pageMetaTags.shop.title,
    description: pageMetaTags.shop.description,
    keywords: pageMetaTags.shop.keywords,
    ogUrl: pageMetaTags.shop.ogUrl
  });

  const filteredProducts = useMemo(() => {
    if (!selectedCategory) return products;
    return products.filter((product) => product.category === selectedCategory);
  }, [selectedCategory]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  };

  return (
    <main className="pt-20 min-h-screen bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16" dir={language === 'ar' ? 'rtl' : 'ltr'}>
        {/* Page Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-12 text-center"
        >
          <motion.div
            animate={{ y: [0, -5, 0] }}
            transition={{ duration: 3, repeat: Infinity }}
            className="inline-block mb-4"
          >
            <span className="text-5xl">✦</span>
          </motion.div>
          <h1 className="text-5xl md:text-6xl font-playfair font-bold text-luxury-dark mb-4">
            {t('shop.title')} <span className="text-luxury-gold">{t('shop.titleSub')}</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto font-light">
            {t('shop.description')}
          </p>
        </motion.div>

        {/* Filter Section */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-12"
        >
          <CategoryFilter
            onCategoryChange={setSelectedCategory}
            activeCategory={selectedCategory}
          />
        </motion.div>

        {/* View Mode Toggle and Results */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.25 }}
          className="flex flex-col md:flex-row items-center justify-between mb-8 gap-4"
        >
          <motion.p className="text-lg text-gray-600 font-light">
            {t('shop.showing')} <span className="font-bold text-luxury-gold text-xl">{filteredProducts.length}</span> {t('shop.of')}{' '}
            <span className="font-bold text-luxury-gold text-xl">{products.length}</span> {t('shop.products')}
          </motion.p>

          <motion.div className="flex gap-2 bg-gray-100 rounded-lg p-1">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setViewMode('grid')}
              className={`px-4 py-2 rounded transition-all duration-300 ${
                viewMode === 'grid'
                  ? 'bg-luxury-darkRed text-white shadow-lg'
                  : 'bg-transparent text-gray-600 hover:text-luxury-darkRed'
              }`}
            >
              <svg className="w-5 h-5 inline" viewBox="0 0 24 24" fill="currentColor">
                <path d="M3 3h8v8H3V3zm10 0h8v8h-8V3zM3 13h8v8H3v-8zm10 0h8v8h-8v-8z" />
              </svg>
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setViewMode('list')}
              className={`px-4 py-2 rounded transition-all duration-300 ${
                viewMode === 'list'
                  ? 'bg-luxury-darkRed text-white shadow-lg'
                  : 'bg-transparent text-gray-600 hover:text-luxury-darkRed'
              }`}
            >
              <svg className="w-5 h-5 inline" viewBox="0 0 24 24" fill="currentColor">
                <path d="M3 4h18v2H3V4zm0 7h18v2H3v-2zm0 7h18v2H3v-2z" />
              </svg>
            </motion.button>
          </motion.div>
        </motion.div>

        {/* Products Grid */}
        {filteredProducts.length > 0 ? (
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className={viewMode === 'grid' ? 'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8' : 'space-y-6'}
          >
            {filteredProducts.map((product) => (
              <motion.div key={product.id} variants={itemVariants}>
                <ProductCard product={product} />
              </motion.div>
            ))}
          </motion.div>
        ) : (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center py-16"
          >
            <motion.div animate={{ y: [0, -10, 0] }} transition={{ duration: 2, repeat: Infinity }}>
              <p className="text-4xl mb-4">🌹</p>
            </motion.div>
            <p className="text-xl text-gray-600">{t('shop.notFound')}</p>
          </motion.div>
        )}

        {/* Bottom CTA */}
        {filteredProducts.length > 0 && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="mt-16 py-12 bg-gradient-to-r from-luxury-gold/10 to-luxury-darkRed/10 rounded-2xl text-center"
          >
            <h2 className="text-3xl font-playfair font-bold text-luxury-dark mb-4">
              Discover Your Perfect Fragrance
            </h2>
            <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
              Each BEN FARES fragrance is handcrafted with premium 50ML bottles, capturing the essence of Moroccan luxury
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-3 bg-luxury-darkRed text-white font-semibold rounded-lg hover:shadow-lg transition-all duration-300"
            >
              Explore Collection
            </motion.button>
          </motion.div>
        )}
      </div>
    </main>
  );
};

export default Shop;
