import React from 'react';
import { motion } from 'framer-motion';
import { MessageCircle, Mail, MapPin } from 'lucide-react';
import WhatsAppButton from '../components/WhatsAppButton';
import { WHATSAPP_PHONE } from '../data/constants';
import { useLanguage } from '../context/LanguageContext';
import { useSEO } from '../hooks/useSEO';
import { pageMetaTags } from '../utils/seoMetaTags';

const Contact: React.FC = () => {
  const { language } = useLanguage();

  // Set SEO meta tags
  useSEO({
    title: pageMetaTags.contact.title,
    description: pageMetaTags.contact.description,
    keywords: pageMetaTags.contact.keywords,
    ogUrl: pageMetaTags.contact.ogUrl
  });
  return (
    <main className="pt-20 min-h-screen pb-20" dir={language === 'ar' ? 'rtl' : 'ltr'}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Page Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h1 className="text-5xl md:text-6xl font-playfair font-bold text-luxury-dark mb-4">
            Get in <span className="text-luxury-gold">Touch</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Have questions about our fragrances? We're here to help! Reach out to us via WhatsApp for the fastest response.
          </p>
        </motion.div>

        {/* Contact Methods */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {/* WhatsApp */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="card-luxury p-8 text-center"
          >
            <div className="flex justify-center mb-4">
              <div className="p-4 bg-luxury-gold bg-opacity-20 rounded-full">
                <MessageCircle className="text-luxury-gold" size={40} />
              </div>
            </div>
            <h3 className="text-2xl font-playfair font-bold text-luxury-dark mb-3">
              WhatsApp (Recommended)
            </h3>
            <p className="text-gray-600 mb-6">
              Chat with us directly for orders or inquiries. We respond within minutes!
            </p>
            <a
              href={`https://wa.me/${WHATSAPP_PHONE.replace('+', '')}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-8 py-3 bg-luxury-gold text-luxury-dark font-semibold rounded-lg hover:bg-opacity-90 transition-all duration-300 shadow-lg"
            >
              Message on WhatsApp
            </a>
          </motion.div>

          {/* Email */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="card-luxury p-8 text-center"
          >
            <div className="flex justify-center mb-4">
              <div className="p-4 bg-luxury-gold bg-opacity-20 rounded-full">
                <Mail className="text-luxury-gold" size={40} />
              </div>
            </div>
            <h3 className="text-2xl font-playfair font-bold text-luxury-dark mb-3">
              Email Us
            </h3>
            <p className="text-gray-600 mb-6">
              Send us an email and we'll get back to you as soon as possible.
            </p>
            <a
              href="mailto:info@benfaresparfums.com"
              className="inline-block px-8 py-3 border-2 border-luxury-gold text-luxury-gold font-semibold rounded-lg hover:bg-luxury-gold hover:text-luxury-dark transition-all duration-300"
            >
              Send Email
            </a>
          </motion.div>

          {/* Location */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="card-luxury p-8 text-center"
          >
            <div className="flex justify-center mb-4">
              <div className="p-4 bg-luxury-gold bg-opacity-20 rounded-full">
                <MapPin className="text-luxury-gold" size={40} />
              </div>
            </div>
            <h3 className="text-2xl font-playfair font-bold text-luxury-dark mb-3">
              Visit Us
            </h3>
            <p className="text-gray-600 mb-2">Morocco</p>
            <p className="text-gray-500 text-sm">
              Crafting luxury fragrances in the heart of Morocco since 2024
            </p>
          </motion.div>
        </div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="bg-luxury-marble rounded-xl p-12 text-center"
        >
          <h2 className="text-3xl md:text-4xl font-playfair font-bold text-luxury-dark mb-6">
            Ready to <span className="text-luxury-gold">Order?</span>
          </h2>
          <p className="text-lg text-gray-700 mb-8 max-w-2xl mx-auto">
            The easiest way to order our fragrances is through WhatsApp. Just click the button below and share your order!
          </p>
          <WhatsAppButton
            productName="Perfume Inquiry"
            price={49}
            description="Inquire about our luxury fragrance collection"
            notes="50ml Premium - Multiple Scents Available"
            variant="secondary"
            className="text-lg px-12 py-4 inline-flex"
          />
        </motion.div>

        {/* FAQ Section */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mt-20"
        >
          <h2 className="text-3xl font-playfair font-bold text-luxury-dark text-center mb-12">
            Frequently Asked <span className="text-luxury-gold">Questions</span>
          </h2>

          <div className="space-y-6 max-w-3xl mx-auto">
            {[
              {
                q: 'How long does shipping take?',
                a: 'Shipping varies by location. Contact us via WhatsApp for specific delivery information to your area.'
              },
              {
                q: 'What is your return policy?',
                a: 'We want you to love your fragrance! If you\'re not satisfied, we offer a simple return process. Contact us for details.'
              },
              {
                q: 'Are your fragrances authentic?',
                a: 'Yes! Every fragrance is handcrafted using premium ingredients and traditional Moroccan methods.'
              },
              {
                q: 'Can I customize fragrance orders?',
                a: 'Absolutely! We offer customization and special requests. Message us on WhatsApp to discuss your preferences.'
              },
              {
                q: 'Do you offer gift wrapping?',
                a: 'Yes, we provide luxury gift wrapping for all orders. Perfect for special occasions!'
              },
              {
                q: 'What is the shelf life of your fragrances?',
                a: 'Our fragrances maintain their quality for 3+ years when stored properly in a cool, dark place.'
              }
            ].map((item, index) => (
              <motion.details
                key={index}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.05 }}
                className="card-luxury p-6 cursor-pointer group"
              >
                <summary className="text-lg font-cinzel font-bold text-luxury-dark group-open:text-luxury-gold transition-colors">
                  {item.q}
                </summary>
                <p className="text-gray-700 mt-4 text-base">{item.a}</p>
              </motion.details>
            ))}
          </div>
        </motion.div>
      </div>
    </main>
  );
};

export default Contact;
