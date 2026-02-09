import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Sparkles, Award, Leaf } from 'lucide-react';
import WhatsAppButton from '../components/WhatsAppButton';
import ProductCard from '../components/ProductCard';
import LuxuryShowcase from '../components/LuxuryShowcase';
import PerfumeAdvantages from '../components/PerfumeAdvantages';
import { products } from '../data/products';
import { useLanguage } from '../context/LanguageContext';
import { useSEO } from '../hooks/useSEO';
import { pageMetaTags } from '../utils/seoMetaTags';

const Home: React.FC = () => {
  const featuredProducts = products.slice(0, 3);
  const { t, language } = useLanguage();

  // Set SEO meta tags
  useSEO({
    title: pageMetaTags.home.title,
    description: pageMetaTags.home.description,
    keywords: pageMetaTags.home.keywords,
    ogUrl: pageMetaTags.home.ogUrl
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  return (
    <main className="pt-20">
      {/* Hero Section */}
      <section className="hero-gradient text-white py-32 px-4 sm:px-6 lg:px-8 text-center relative overflow-hidden" dir={language === 'ar' ? 'rtl' : 'ltr'}>
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 left-10 w-40 h-40 bg-luxury-gold rounded-full blur-3xl"></div>
          <div className="absolute bottom-10 right-10 w-40 h-40 bg-luxury-gold rounded-full blur-3xl"></div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto relative z-10"
        >
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="text-luxury-gold font-cinzel text-lg mb-4"
          >
            {t('home.tagline')}
          </motion.p>

          <h1 className="text-5xl md:text-7xl font-playfair font-bold mb-6 leading-tight">
            {t('home.title')} <br />
            <span className="text-luxury-gold">{t('home.subtitle')}</span>
          </h1>

          <p className="text-xl md:text-2xl text-gray-200 mb-12 font-inter">
            {t('home.description')}
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <WhatsAppButton
              productName="BEN FARES Collection"
              price={149}
              description="Premium handcrafted fragrances inspired by Morocco"
              notes="Floral, Fruity, Woody - Complete Range"
              variant="primary"
              className="text-lg px-10 py-4"
            />
            <Link
              to="/shop"
              className="px-10 py-4 border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-luxury-dark transition-all duration-300"
            >
              {t('home.exploreBtn')}
            </Link>
          </div>
        </motion.div>
      </section>

      {/* Luxury Showcase Gallery */}
      <LuxuryShowcase />

      {/* Benefits Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-luxury-beige" dir={language === 'ar' ? 'rtl' : 'ltr'}>
        <div className="max-w-6xl mx-auto">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
          >
            <motion.div
              variants={itemVariants}
              className="text-center card-luxury p-8"
            >
              <div className="flex justify-center mb-4">
                <div className="p-4 bg-luxury-gold bg-opacity-20 rounded-full">
                  <Award className="text-luxury-gold" size={32} />
                </div>
              </div>
              <h3 className="text-xl font-playfair font-bold mb-3 text-luxury-dark">
                {t('home.craftedQuality')}
              </h3>
              <p className="text-gray-600">
                {t('home.craftedQualityDesc')}
              </p>
            </motion.div>

            <motion.div
              variants={itemVariants}
              className="text-center card-luxury p-8"
            >
              <div className="flex justify-center mb-4">
                <div className="p-4 bg-luxury-gold bg-opacity-20 rounded-full">
                  <Sparkles className="text-luxury-gold" size={32} />
                </div>
              </div>
              <h3 className="text-xl font-playfair font-bold mb-3 text-luxury-dark">
                {t('home.longLasting')}
              </h3>
              <p className="text-gray-600">
                {t('home.longLastingDesc')}
              </p>
            </motion.div>

            <motion.div
              variants={itemVariants}
              className="text-center card-luxury p-8"
            >
              <div className="flex justify-center mb-4">
                <div className="p-4 bg-luxury-gold bg-opacity-20 rounded-full">
                  <Leaf className="text-luxury-gold" size={32} />
                </div>
              </div>
              <h3 className="text-xl font-playfair font-bold mb-3 text-luxury-dark">
                {t('home.ethicallySourced')}
              </h3>
              <p className="text-gray-600">
                {t('home.ethicallySourcedDesc')}
              </p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Perfume Advantages */}
      <PerfumeAdvantages />

      {/* Featured Products */}
      <section className="py-20 px-4 sm:px-6 lg:px-8" dir={language === 'ar' ? 'rtl' : 'ltr'}>
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-playfair font-bold text-luxury-dark mb-4">
              {t('home.featuredCollection')} <span className="text-luxury-gold">{t('home.featuredCollectionSub')}</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Discover our most sought-after fragrances, each telling a story of Moroccan mystique
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            {featuredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-center"
          >
            <Link
              to="/shop"
              className="inline-block px-12 py-4 bg-luxury-darkRed text-white font-semibold rounded-lg hover:bg-opacity-90 transition-all duration-300 shadow-lg"
            >
              {t('home.viewAllProducts')}
            </Link>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-luxury-marble py-16 px-4 sm:px-6 lg:px-8" dir={language === 'ar' ? 'rtl' : 'ltr'}>
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl md:text-4xl font-playfair font-bold text-luxury-dark mb-6">
              {t('home.readyExperience')} <span className="text-luxury-gold">{t('home.readyExperienceSub')}</span>
            </h2>
            <p className="text-lg text-gray-700 mb-8">
              {t('home.orderDirectly')}
            </p>
            <WhatsAppButton
              productName="BEN FARES Fragrances"
              price={49}
              description="Luxury fragrances handcrafted with finest ingredients"
              notes="50ml Premium Bottles - Multiple Options"
              variant="secondary"
              className="text-lg px-10 py-4 inline-flex"
            />
          </motion.div>
        </div>
      </section>
    </main>
  );
};

export default Home;
