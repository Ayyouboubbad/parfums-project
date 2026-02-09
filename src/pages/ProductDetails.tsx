import React from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ChevronLeft, Check } from 'lucide-react';
import WhatsAppButton from '../components/WhatsAppButton';
import { products } from '../data/products';
import { useLanguage } from '../context/LanguageContext';
import { useSEO } from '../hooks/useSEO';

const ProductDetails: React.FC = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { t, language } = useLanguage();
  const product = id ? products.find((p) => p.id === parseInt(id)) : null;

  // Set SEO meta tags for product page
  const productName = product ? (
    language === 'fr' ? product.nameFr :
    language === 'ar' ? product.nameAr :
    product.nameEn
  ) : '';

  useSEO({
    title: product ? `${productName} | BEN FARES PARFUMS - Premium Fragrance` : 'Product Not Found',
    description: product ? `${product.description} - ${product.price} DH. Premium handcrafted 50ml fragrance from BEN FARES PARFUMS.` : 'Product not found',
    keywords: `${productName}, perfume, fragrance, ${product?.category || 'luxury'} fragrance, buy perfume online`,
    ogUrl: product ? `https://benfares.ma/product/${product.id}` : 'https://benfares.ma/'
  });

  if (!product) {
    return (
      <main className="pt-20 min-h-screen flex items-center justify-center" dir={language === 'ar' ? 'rtl' : 'ltr'}>
        <div className="text-center">
          <h1 className="text-3xl font-playfair font-bold text-luxury-dark mb-4">
            {t('product.notFound')}
          </h1>
          <button
            onClick={() => navigate('/shop')}
            className="px-8 py-3 bg-luxury-gold text-luxury-dark font-semibold rounded-lg hover:bg-opacity-90 transition-all"
          >
            {t('nav.shop')}
          </button>
        </div>
      </main>
    );
  }

  const relatedProducts = products.filter(
    (p) => p.category === product.category && p.id !== product.id
  ).slice(0, 3);

  const getProductName = () => {
    if (language === 'fr') return product.nameFr;
    if (language === 'ar') return product.nameEn; // Using English as default for now
    return product.nameEn;
  };

  return (
    <main className="pt-20 min-h-screen pb-16" dir={language === 'ar' ? 'rtl' : 'ltr'}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Breadcrumb */}
        <motion.button
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          onClick={() => navigate('/shop')}
          className="flex items-center gap-2 text-luxury-gold hover:text-luxury-darkRed transition-colors mb-8 mt-4"
        >
          <ChevronLeft size={20} />
          <span>{t('product.backToShop')}</span>
        </motion.button>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
          {/* Product Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            className="flex items-center justify-center"
          >
            <div className="card-luxury p-0 overflow-hidden w-full h-full min-h-96">
              <img
                src={product.image}
                alt={getProductName()}
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
              />
            </div>
          </motion.div>

          {/* Product Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex flex-col justify-center"
          >
            {/* Category Badge */}
            <span className="inline-block w-fit px-4 py-2 bg-luxury-gold bg-opacity-20 text-luxury-gold text-sm font-cinzel rounded-full mb-4">
              {product.category}
            </span>

            {/* Title */}
            <h1 className="text-4xl md:text-5xl font-playfair font-bold text-luxury-dark mb-2">
              {getProductName()}
            </h1>

            {/* Other Names */}
            <p className="text-gray-600 text-lg mb-6">
              <span className="font-semibold">{t('nav.home')}</span> {product.nameEn} •{' '}
              <span className="font-semibold">FR</span> {product.nameFr}
            </p>

            {/* Price */}
            <div className="mb-8 pb-8 border-b border-gray-300">
              <p className="text-sm text-gray-500 font-cinzel uppercase tracking-wider mb-2">
                {t('product.price')}
              </p>
              <p className="text-5xl font-bold text-luxury-gold">{product.price} DH</p>
            </div>

            {/* Description */}
            <div className="mb-8">
              <h3 className="text-lg font-cinzel font-bold text-luxury-dark mb-3 uppercase tracking-wider">
                {t('product.description')}
              </h3>
              <p className="text-gray-700 text-lg leading-relaxed">
                {product.longDescription}
              </p>
            </div>

            {/* Fragrance Notes */}
            <div className="mb-8">
              <h3 className="text-lg font-cinzel font-bold text-luxury-dark mb-3 uppercase tracking-wider">
                {t('product.fragranceNotes')}
              </h3>
              <p className="text-gray-700 text-lg">{product.notes}</p>
            </div>

            {/* Features */}
            <div className="mb-8 space-y-3">
              <div className="flex items-center gap-3">
                <Check className="text-luxury-gold" size={24} />
                <span className="text-gray-700">{t('product.premiumQuality')}</span>
              </div>
              <div className="flex items-center gap-3">
                <Check className="text-luxury-gold" size={24} />
                <span className="text-gray-700">{t('product.longLastingFormula')}</span>
              </div>
              <div className="flex items-center gap-3">
                <Check className="text-luxury-gold" size={24} />
                <span className="text-gray-700">{t('product.ethicallySourcedIngredients')}</span>
              </div>
              <div className="flex items-center gap-3">
                <Check className="text-luxury-gold" size={24} />
                <span className="text-gray-700">{t('product.luxuryPackaging')}</span>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="space-y-3">
              <WhatsAppButton
                productName={getProductName()}
                price={product.price}
                description={product.description}
                notes={product.notes}
                productImage={product.image}
                variant="primary"
                className="w-full justify-center text-lg py-4"
              />
              <Link
                to="/shop"
                className="block w-full text-center py-4 border-2 border-luxury-darkRed text-luxury-darkRed font-semibold rounded-lg hover:bg-luxury-darkRed hover:text-white transition-all duration-300"
              >
                {t('product.continueShop')}
              </Link>
            </div>
          </motion.div>
        </div>

        {/* Related Products */}
        {relatedProducts.length > 0 && (
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="border-t border-gray-200 pt-16"
          >
            <h2 className="text-3xl font-playfair font-bold text-luxury-dark mb-8">
              {t('product.youMayAlsoLike')}
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {relatedProducts.map((relatedProduct) => (
                <Link
                  key={relatedProduct.id}
                  to={`/product/${relatedProduct.id}`}
                  className="card-luxury overflow-hidden group hover:shadow-2xl transition-all duration-300"
                >
                  <div className="relative h-64 overflow-hidden bg-gray-200">
                    <img
                      src={relatedProduct.image}
                      alt={relatedProduct.nameEn}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-playfair font-bold text-luxury-dark mb-2 group-hover:text-luxury-gold transition-colors">
                      {language === 'fr' ? relatedProduct.nameFr : relatedProduct.nameEn}
                    </h3>
                    <p className="text-2xl font-bold text-luxury-gold">
                      {relatedProduct.price} DH
                    </p>
                  </div>
                </Link>
              ))}
            </div>
          </motion.div>
        )}
      </div>
    </main>
  );
};

export default ProductDetails;
