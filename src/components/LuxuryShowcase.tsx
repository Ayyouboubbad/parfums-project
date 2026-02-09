import React from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from '../context/LanguageContext';
import { products } from '../data/products';

const LuxuryShowcase: React.FC = () => {
  const { language } = useLanguage();
  const featuredProducts = products.slice(0, 4);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 bg-white" dir={language === 'ar' ? 'rtl' : 'ltr'}>
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <p className="text-luxury-gold font-cinzel text-sm uppercase tracking-widest mb-4">
            ✦ Our Exclusive Collection ✦
          </p>
          <h2 className="text-5xl md:text-6xl font-playfair font-bold text-luxury-dark mb-6">
            Handcrafted Fragrances
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-luxury-gold via-luxury-darkRed to-luxury-gold mx-auto mb-6"></div>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto">
            Each BEN FARES fragrance is meticulously crafted with 50ML premium bottles, inspired by the mystique of Morocco and the essence of oriental luxury.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {featuredProducts.map((product) => (
            <motion.div
              key={product.id}
              variants={itemVariants}
              className="group relative overflow-hidden rounded-xl shadow-lg hover:shadow-2xl transition-all duration-500"
            >
              <div className="relative h-96 overflow-hidden bg-gradient-to-b from-gray-100 to-gray-50 flex items-center justify-center">
                <img
                  src={product.image}
                  alt={product.nameEn}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end">
                  <div className="w-full p-6 text-white">
                    <p className="font-playfair text-2xl font-bold mb-2">{product.nameEn}</p>
                    <p className="text-sm text-gray-200 mb-2">{product.description}</p>
                    <p className="text-luxury-gold font-bold text-lg">{product.price} DH</p>
                  </div>
                </div>
              </div>

              {/* Gold Border Overlay */}
              <div className="absolute inset-0 rounded-xl border-0 group-hover:border-2 group-hover:border-luxury-gold transition-all duration-500"></div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default LuxuryShowcase;
