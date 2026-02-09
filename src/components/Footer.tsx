import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, MapPin, Instagram } from 'lucide-react';
import { BRAND_NAME, WHATSAPP_PHONE } from '../data/constants';
import { useLanguage } from '../context/LanguageContext';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  const { t, language } = useLanguage();

  return (
    <footer className="bg-luxury-dark text-white mt-20" dir={language === 'ar' ? 'rtl' : 'ltr'}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Brand Info */}
          <div>
            <h3 className="text-2xl font-playfair font-bold mb-4 text-luxury-gold">
              {BRAND_NAME}
            </h3>
            <p className="text-gray-400 mb-4">
              {t('footer.brandDesc')}
            </p>
            <p className="text-sm text-gray-500">{t('footer.premium')}</p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-cinzel font-bold mb-4 text-luxury-gold">{t('footer.quickLinks')}</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-400 hover:text-luxury-gold transition-colors">
                  {t('nav.home')}
                </Link>
              </li>
              <li>
                <Link to="/shop" className="text-gray-400 hover:text-luxury-gold transition-colors">
                  {t('nav.shop')}
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-gray-400 hover:text-luxury-gold transition-colors">
                  {t('nav.about')}
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-400 hover:text-luxury-gold transition-colors">
                  {t('nav.contact')}
                </Link>
              </li>
            </ul>
          </div>

          {/* Collections */}
          <div>
            <h4 className="text-lg font-cinzel font-bold mb-4 text-luxury-gold">{t('footer.collections')}</h4>
            <ul className="space-y-2">
              <li>
                <a href="/shop" className="text-gray-400 hover:text-luxury-gold transition-colors">
                  {t('footer.menFragrances')}
                </a>
              </li>
              <li>
                <a href="/shop" className="text-gray-400 hover:text-luxury-gold transition-colors">
                  {t('footer.womenFragrances')}
                </a>
              </li>
              <li>
                <a href="/shop" className="text-gray-400 hover:text-luxury-gold transition-colors">
                  {t('footer.luxuryPacks')}
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-cinzel font-bold mb-4 text-luxury-gold">{t('footer.contact')}</h4>
            <div className="space-y-3">
              <a
                href={`https://wa.me/${WHATSAPP_PHONE.replace('+', '')}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-gray-400 hover:text-luxury-gold transition-colors"
              >
                <MessageCircle size={20} />
                {t('footer.whatsappOrder')}
              </a>
              <a
                href="mailto:info@benfaresparfums.com"
                className="flex items-center gap-2 text-gray-400 hover:text-luxury-gold transition-colors"
              >
                <Mail size={20} />
                {t('footer.emailUs')}
              </a>
              <a
                href="https://www.instagram.com/benfares_parfums?igsh=MWhibm1xOGprd3NucA=="
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-gray-400 hover:text-luxury-gold transition-colors"
              >
                <Instagram size={20} />
                {t('instagram')}
              </a>
              <div className="flex items-center gap-2 text-gray-400">
                <MapPin size={20} />
                {t('footer.morocco')}
              </div>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-700 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              © {currentYear} {BRAND_NAME}. {t('footer.rights')}
            </p>
            <p className="text-gray-500 text-xs mt-4 md:mt-0">
              {t('footer.crafted')}
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

interface MessageCircleProps {
  size: number;
}

const MessageCircle: React.FC<MessageCircleProps> = ({ size }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
  </svg>
);

export default Footer;
