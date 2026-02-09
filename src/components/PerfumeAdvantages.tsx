import React from 'react';
import { motion } from 'framer-motion';
import { Droplet, Zap, Crown, Shield } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

const PerfumeAdvantages: React.FC = () => {
  const { language } = useLanguage();

  const advantages = [
    {
      icon: Crown,
      title: 'Royal Heritage',
      description: 'Inspired by Moroccan royal palaces and ancient perfuming traditions spanning centuries.'
    },
    {
      icon: Droplet,
      title: 'Premium Concentration',
      description: 'High fragrance concentration ensures long-lasting scent that develops throughout the day.'
    },
    {
      icon: Zap,
      title: 'Sensory Experience',
      description: 'Multi-layered fragrance profiles that reveal different notes as they evolve on your skin.'
    },
    {
      icon: Shield,
      title: 'Quality Assured',
      description: 'Each bottle is tested rigorously to meet our premium standards and your satisfaction.'
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8 },
    },
  };

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-luxury-beige to-white" dir={language === 'ar' ? 'rtl' : 'ltr'}>
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-playfair font-bold text-luxury-dark mb-4">
            Why Choose <span className="text-luxury-gold">Our Fragrances</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Experience the difference of premium Moroccan perfume craftsmanship
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {advantages.map((item, index) => {
            const IconComponent = item.icon;
            return (
              <motion.div
                key={index}
                variants={itemVariants}
                className="card-luxury p-8 text-center hover:shadow-2xl transition-all duration-500 group"
              >
                <div className="flex justify-center mb-6">
                  <div className="p-4 bg-gradient-to-br from-luxury-gold to-luxury-darkRed rounded-full group-hover:scale-110 transition-transform duration-500">
                    <IconComponent className="text-white" size={32} />
                  </div>
                </div>
                <h3 className="text-xl font-playfair font-bold text-luxury-dark mb-3">
                  {item.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {item.description}
                </p>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

export default PerfumeAdvantages;
