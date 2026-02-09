import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import WhatsAppButton from './WhatsAppButton';
import { Product } from '../data/products';
import { useLanguage } from '../context/LanguageContext';
import { useTheme } from '../context/ThemeContext';

interface ProductCardProps {
  product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const { t, language } = useLanguage();
  const { isDarkMode } = useTheme();
  const [isFavorite, setIsFavorite] = useState(false);
  const [showNotes, setShowNotes] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  const getProductName = () => {
    if (language === 'fr') return product.nameFr;
    if (language === 'ar') return product.nameAr;
    return product.nameEn;
  };

  const containerVariants = {
    hidden: { opacity: 0, y: 20, scale: 0.95 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { duration: 0.6, ease: "easeOut" }
    },
    hover: {
      y: -8,
      transition: { duration: 0.3 }
    }
  };

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      whileHover="hover"
      onMouseEnter={() => {
        setShowNotes(true);
        setIsHovered(true);
      }}
      onMouseLeave={() => {
        setShowNotes(false);
        setIsHovered(false);
      }}
      className={`relative overflow-hidden rounded-2xl group backdrop-blur-md transition-all duration-500 ${
        isDarkMode
          ? 'bg-gradient-to-br from-gray-800/90 via-gray-800/80 to-gray-900/90 border border-gray-700/50 hover:border-luxury-gold/50 shadow-2xl dark:shadow-luxury-gold/10'
          : 'bg-gradient-to-br from-white/95 via-white/90 to-gray-50/95 border border-gray-200/50 hover:border-luxury-gold/30 shadow-lg hover:shadow-2xl'
      }`}
      dir={language === 'ar' ? 'rtl' : 'ltr'}
    >
      {/* Glow effect on hover */}
      <motion.div
        animate={isHovered ? { opacity: 1 } : { opacity: 0 }}
        className={`absolute inset-0 opacity-0 transition-opacity duration-500 pointer-events-none ${
          isDarkMode 
            ? 'bg-gradient-to-br from-luxury-gold/10 via-transparent to-luxury-darkRed/10' 
            : 'bg-gradient-to-br from-luxury-gold/5 via-transparent to-luxury-darkRed/5'
        }`}
      />

      {/* Favorite Button */}
      <motion.button
        whileHover={{ scale: 1.15, rotate: 10 }}
        whileTap={{ scale: 0.9 }}
        onClick={() => setIsFavorite(!isFavorite)}
        className={`absolute top-4 right-4 z-10 rounded-full p-2.5 backdrop-blur-md transition-all duration-300 ${
          isDarkMode
            ? 'bg-gray-700/60 hover:bg-luxury-gold hover:shadow-lg hover:shadow-luxury-gold/30'
            : 'bg-white/80 hover:bg-luxury-gold hover:shadow-lg'
        }`}
      >
        <motion.svg
          animate={isFavorite ? { scale: [1, 1.2, 1] } : {}}
          className={`w-5 h-5 transition-all duration-300 ${
            isFavorite ? 'fill-luxury-darkRed text-luxury-darkRed' : isDarkMode ? 'text-gray-300' : 'text-gray-600'
          }`}
          viewBox="0 0 24 24"
          fill={isFavorite ? 'currentColor' : 'none'}
          stroke="currentColor"
          strokeWidth="2"
        >
          <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
        </motion.svg>
      </motion.button>

      {/* Image Section */}
      <Link to={`/product/${product.id}`} className="block relative h-72 overflow-hidden bg-gradient-to-br from-gray-200 to-gray-300 dark:from-gray-700 dark:to-gray-800">
        <motion.img
          whileHover={{ scale: 1.12 }}
          transition={{ duration: 0.6 }}
          src={product.image}
          alt={getProductName()}
          className="w-full h-full object-cover"
        />

        {/* Premium Badge */}
        <motion.div
          whileHover={{ scale: 1.05, rotate: 5 }}
          className={`absolute top-4 left-4 px-3 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider z-20 backdrop-blur-md ${
            isDarkMode
              ? 'bg-luxury-darkRed/80 text-white border border-luxury-darkRed/50'
              : 'bg-luxury-darkRed/90 text-white border border-luxury-darkRed/70'
          }`}
        >
          ✦ Premium
        </motion.div>
        
        {/* Fragrance Notes Overlay */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={showNotes ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.4 }}
          className={`absolute inset-0 flex flex-col items-end justify-end p-6 ${
            isDarkMode
              ? 'bg-gradient-to-t from-gray-900/95 via-gray-800/60 to-transparent'
              : 'bg-gradient-to-t from-black/85 via-black/40 to-transparent'
          }`}
        >
          <div className="text-white text-right">
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={showNotes ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
              transition={{ delay: 0.1 }}
              className="text-xs font-cinzel text-luxury-gold mb-3 uppercase tracking-widest font-bold"
            >
              ✦ {language === 'ar' ? 'نوتات العطر' : language === 'fr' ? 'Notes' : 'Fragrance'} ✦
            </motion.p>
            <motion.p
              initial={{ opacity: 0 }}
              animate={showNotes ? { opacity: 1 } : { opacity: 0 }}
              transition={{ delay: 0.15 }}
              className="text-sm font-playfair text-white/95 leading-relaxed font-semibold"
            >
              {product.notes}
            </motion.p>
          </div>
        </motion.div>

        {/* Learn More Overlay */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={!showNotes && isHovered ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent flex items-end p-4"
        >
          <span className="text-white font-playfair text-sm font-semibold">{t('shop.learnMore')}</span>
        </motion.div>
      </Link>

      {/* Content Section */}
      <motion.div
        className="p-6"
        initial={{ y: 10 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.4, delay: 0.1 }}
      >
        {/* Category & Size Badge */}
        <div className="mb-4 flex items-center justify-between gap-2">
          <motion.span
            whileHover={{ scale: 1.05, x: 2 }}
            className={`inline-block px-3 py-1.5 rounded-full text-xs font-cinzel font-bold uppercase tracking-wider transition-all duration-300 ${
              isDarkMode
                ? 'bg-luxury-gold/20 text-luxury-gold border border-luxury-gold/30 hover:bg-luxury-gold/30'
                : 'bg-luxury-gold/15 text-luxury-darkRed border border-luxury-gold/40 hover:bg-luxury-gold/25'
            }`}
          >
            {language === 'ar' ? (
              product.category === 'Women' ? 'للنساء' :
              product.category === 'Men' ? 'للرجال' :
              product.category === 'Luxury' ? 'فاخر' : 'جنسي مختلط'
            ) : (
              language === 'fr' ? (
                product.category === 'Women' ? 'Femmes' :
                product.category === 'Men' ? 'Hommes' :
                product.category === 'Luxury' ? 'Luxe' : 'Unisexe'
              ) : product.category
            )}
          </motion.span>
          <motion.span
            whileHover={{ scale: 1.05 }}
            className={`text-xs font-cinzel font-bold px-2.5 py-1.5 rounded-lg transition-all duration-300 ${
              isDarkMode
                ? 'bg-gray-700/60 text-luxury-gold border border-gray-600/50'
                : 'bg-luxury-gold/10 text-luxury-gold border border-luxury-gold/30'
            }`}
          >
            50 ML
          </motion.span>
        </div>

        {/* Product Name */}
        <Link to={`/product/${product.id}`}>
          <motion.h3
            whileHover={{ x: 4 }}
            className={`text-xl font-playfair font-bold mb-2 transition-colors duration-300 ${
              isDarkMode ? 'text-white hover:text-luxury-gold' : 'text-luxury-dark hover:text-luxury-gold'
            }`}
          >
            {getProductName()}
          </motion.h3>
        </Link>

        {/* Description */}
        <motion.p
          animate={isHovered ? { opacity: 1 } : { opacity: 0.8 }}
          className={`text-sm mb-3 line-clamp-2 min-h-[40px] transition-opacity duration-300 ${
            isDarkMode ? 'text-gray-300' : 'text-gray-600'
          }`}
        >
          {product.description}
        </motion.p>

        {/* Fragrance Notes Display */}
        <motion.div
          animate={isHovered ? { scale: 1.02 } : { scale: 1 }}
          className={`mb-4 p-3 rounded-lg transition-all duration-300 ${
            isDarkMode
              ? 'bg-gradient-to-r from-luxury-gold/10 to-luxury-darkRed/10 border border-luxury-gold/20'
              : 'bg-gradient-to-r from-luxury-gold/5 to-luxury-darkRed/5 border border-luxury-gold/30'
          }`}
        >
          <p className={`text-xs font-cinzel font-bold uppercase tracking-wider mb-2 ${
            isDarkMode ? 'text-luxury-gold' : 'text-luxury-darkRed'
          }`}>
            🌸 {language === 'ar' ? 'نوتات العطر' : language === 'fr' ? 'Notes' : 'Notes'}
          </p>
          <p className={`text-xs font-inter leading-relaxed ${
            isDarkMode ? 'text-gray-300' : 'text-gray-700'
          }`}>
            {product.notes}
          </p>
        </motion.div>

        {/* Price Section */}
        <motion.div
          whileHover={{ scale: 1.03 }}
          className={`flex items-center justify-between mb-5 p-4 rounded-xl transition-all duration-300 ${
            isDarkMode
              ? 'bg-gradient-to-r from-luxury-gold/15 via-transparent to-luxury-darkRed/15 border border-gray-700/50 hover:border-luxury-gold/30'
              : 'bg-gradient-to-r from-luxury-gold/10 via-transparent to-luxury-darkRed/10 border border-gray-200/50'
          }`}
        >
          <motion.span
            whileHover={{ scale: 1.1, color: '#D4AF37' }}
            className="text-2xl font-bold font-playfair text-luxury-gold transition-colors"
          >
            {product.price} DH
          </motion.span>
          <motion.span
            whileHover={{ scale: 1.05 }}
            className={`text-xs font-cinzel font-semibold px-3 py-1.5 rounded-lg transition-all duration-300 ${
              isDarkMode
                ? 'bg-gray-700/60 text-luxury-gold border border-gray-600/50'
                : 'bg-white/60 text-luxury-darkRed border border-gray-300/50'
            }`}
          >
            {product.nameAr}
          </motion.span>
        </motion.div>

        {/* Action Buttons */}
        <motion.div
          className="space-y-3"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          <WhatsAppButton
            productName={getProductName()}
            price={product.price}
            description={language === 'ar' ? product.longDescription : product.description}
            notes={product.notes}
            productImage={product.image}
            variant="primary"
            className={`w-full justify-center font-bold transition-all duration-300 ${
              isDarkMode ? 'hover:shadow-lg hover:shadow-luxury-gold/30' : 'hover:shadow-lg'
            }`}
          />
          <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
            <Link
              to={`/product/${product.id}`}
              className={`block w-full text-center py-3 font-semibold rounded-lg transition-all duration-300 ${
                isDarkMode
                  ? 'border-2 border-luxury-darkRed/60 text-luxury-gold hover:bg-luxury-darkRed hover:text-white hover:border-luxury-darkRed hover:shadow-lg hover:shadow-luxury-darkRed/30'
                  : 'border-2 border-luxury-darkRed text-luxury-darkRed hover:bg-luxury-darkRed hover:text-white hover:shadow-md'
              }`}
            >
              {t('shop.learnMore')}
            </Link>
          </motion.div>
        </motion.div>

        {/* Interactive Indicator */}
        <motion.div
          animate={isHovered ? { scale: 1.05 } : { scale: 1 }}
          className="mt-3 text-center"
        >
          <motion.span
            animate={{ opacity: [0.6, 1, 0.6] }}
            transition={{ duration: 2.5, repeat: Infinity }}
            className={`text-xs font-cinzel uppercase tracking-widest font-bold ${
              isDarkMode ? 'text-luxury-gold/70' : 'text-luxury-gold'
            }`}
          >
            {isHovered ? '✦ View full details ✦' : '✦ Premium Fragrance ✦'}
          </motion.span>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default ProductCard;
