import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Heart, Sparkles } from 'lucide-react';
import { BRAND_NAME } from '../data/constants';
import { useLanguage } from '../context/LanguageContext';
import { useSEO } from '../hooks/useSEO';
import { pageMetaTags } from '../utils/seoMetaTags';

const About: React.FC = () => {
  const { language } = useLanguage();

  // Set SEO meta tags
  useSEO({
    title: pageMetaTags.about.title,
    description: pageMetaTags.about.description,
    keywords: pageMetaTags.about.keywords,
    ogUrl: pageMetaTags.about.ogUrl
  });
  return (
    <main className="pt-20 min-h-screen" dir={language === 'ar' ? 'rtl' : 'ltr'}>
      {/* Hero Section */}
      <section className="hero-gradient text-white py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="text-5xl md:text-6xl font-playfair font-bold mb-6">
              Our <span className="text-luxury-gold">Story</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-200 max-w-3xl mx-auto">
              Crafting luxury fragrances inspired by the rich heritage and mystique of Morocco
            </p>
          </motion.div>
        </div>
      </section>

      {/* Brand Story */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-16">
            {/* Content */}
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-4xl font-playfair font-bold text-luxury-dark mb-6">
                Born from <span className="text-luxury-gold">Passion</span>
              </h2>
              <p className="text-gray-700 text-lg mb-4 leading-relaxed">
                {BRAND_NAME} was founded with a simple yet profound vision: to bring the essence of Moroccan elegance and oriental mystique to the world through luxury fragrances. Our journey began in the bustling souks of Morocco, where we discovered centuries-old perfuming traditions passed down through generations.
              </p>
              <p className="text-gray-700 text-lg mb-4 leading-relaxed">
                Every fragrance in our collection tells a story—a story of craftsmanship, heritage, and an unwavering commitment to premium quality. We believe that a great fragrance is more than just a scent; it's an experience, a memory, a moment of luxury captured in a bottle.
              </p>
              <p className="text-gray-700 text-lg leading-relaxed">
                From the sun-drenched markets of Marrakech to the serene gardens of Fes, we draw inspiration from Morocco's most beautiful and aromatic landscapes.
              </p>
            </motion.div>

            {/* Image */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="h-96 bg-gradient-to-br from-luxury-gold to-luxury-darkRed rounded-xl shadow-2xl p-1"
            >
              <div className="w-full h-full bg-white rounded-lg flex items-center justify-center text-gray-400">
                <MapPin size={64} />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-luxury-beige">
        <div className="max-w-6xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-4xl font-playfair font-bold text-luxury-dark text-center mb-16"
          >
            Our Core <span className="text-luxury-gold">Values</span>
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Quality */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0 }}
              className="card-luxury p-8 text-center"
            >
              <div className="flex justify-center mb-4">
                <div className="p-4 bg-luxury-gold bg-opacity-20 rounded-full">
                  <Sparkles className="text-luxury-gold" size={40} />
                </div>
              </div>
              <h3 className="text-2xl font-playfair font-bold text-luxury-dark mb-3">
                Premium Quality
              </h3>
              <p className="text-gray-700">
                We use only the finest ingredients sourced from ethical suppliers around the world. Every bottle is carefully crafted using traditional methods combined with modern perfumery expertise.
              </p>
            </motion.div>

            {/* Heritage */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.15 }}
              className="card-luxury p-8 text-center"
            >
              <div className="flex justify-center mb-4">
                <div className="p-4 bg-luxury-gold bg-opacity-20 rounded-full">
                  <MapPin className="text-luxury-gold" size={40} />
                </div>
              </div>
              <h3 className="text-2xl font-playfair font-bold text-luxury-dark mb-3">
                Moroccan Heritage
              </h3>
              <p className="text-gray-700">
                We honor Morocco's rich perfuming traditions while embracing contemporary creativity. Our fragrances celebrate the country's culture, landscapes, and timeless elegance.
              </p>
            </motion.div>

            {/* Passion */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="card-luxury p-8 text-center"
            >
              <div className="flex justify-center mb-4">
                <div className="p-4 bg-luxury-gold bg-opacity-20 rounded-full">
                  <Heart className="text-luxury-gold" size={40} />
                </div>
              </div>
              <h3 className="text-2xl font-playfair font-bold text-luxury-dark mb-3">
                Pure Passion
              </h3>
              <p className="text-gray-700">
                Every fragrance is crafted with passion and dedicated attention to detail. We're not just creating perfumes; we're creating moments of luxury and memories that last a lifetime.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Craftsmanship Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-playfair font-bold text-luxury-dark mb-6">
              Artisanal <span className="text-luxury-gold">Craftsmanship</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Each fragrance is meticulously crafted by our master perfumers using a blend of traditional techniques and modern innovation. We believe in the power of storytelling through scent.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {[
              { step: '01', title: 'Selection', desc: 'Sourcing finest ingredients' },
              { step: '02', title: 'Blending', desc: 'Masterful composition' },
              { step: '03', title: 'Testing', desc: 'Quality assurance' },
              { step: '04', title: 'Packaging', desc: 'Luxury presentation' }
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="card-luxury p-6 text-center"
              >
                <p className="text-4xl font-playfair font-bold text-luxury-gold mb-3">
                  {item.step}
                </p>
                <h4 className="text-lg font-cinzel font-bold text-luxury-dark mb-2">
                  {item.title}
                </h4>
                <p className="text-gray-600 text-sm">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
};

export default About;
