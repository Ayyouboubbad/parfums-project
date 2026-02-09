import React from 'react';
import { MessageCircle } from 'lucide-react';
import { WHATSAPP_PHONE } from '../data/constants';
import { useLanguage } from '../context/LanguageContext';

interface WhatsAppButtonProps {
  productName: string;
  price: number;
  variant?: 'primary' | 'secondary' | 'outline';
  className?: string;
  productImage?: string;
  description?: string;
  notes?: string;
}

const WhatsAppButton: React.FC<WhatsAppButtonProps> = ({
  productName,
  price,
  variant = 'primary',
  className = ''
}) => {
  const { language } = useLanguage();

  const getLocalizedMessage = () => {
    const messages = {
      ar: `مرحباً بن فارس 👋

أنا مهتم بالعطر: ${productName}
💰 السعر: ${price} درهم
📏 الحجم: 50 مل

أرغب في المزيد من المعلومات والتفاصيل الكاملة. شكراً 🙏`,

      fr: `Bonjour BEN FARES 👋

Je suis intéressé par: ${productName}
💰 Prix: ${price} DH
📏 Taille: 50 ml

Je veux plus d'informations. Merci 🙏`,

      en: `Hi BEN FARES 👋

I'm interested in: ${productName}
💰 Price: ${price} DH
📏 Size: 50ml

I need more information. Thanks 🙏`
    };

    return messages[language as keyof typeof messages] || messages.ar;
  };

  const message = getLocalizedMessage();
  const whatsappUrl = `https://wa.me/${WHATSAPP_PHONE}?text=${encodeURIComponent(message)}`;

  const baseClasses = 'flex items-center gap-2 font-semibold rounded-lg transition-all duration-300 shadow-lg hover:shadow-xl';
  
  const variants = {
    primary: 'px-8 py-3 bg-luxury-gold text-luxury-dark hover:bg-opacity-90',
    secondary: 'px-8 py-3 bg-luxury-darkRed text-white hover:bg-opacity-90',
    outline: 'px-8 py-3 border-2 border-luxury-gold text-luxury-gold hover:bg-luxury-gold hover:text-luxury-dark'
  };

  const buttonText = {
    en: 'Order on WhatsApp',
    fr: 'Commander sur WhatsApp',
    ar: 'اطلب الآن عبر واتس آب 📲'
  };

  const displayText = buttonText[language as keyof typeof buttonText] || 'اطلب الآن عبر واتس آب 📲';

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className={`${baseClasses} ${variants[variant]} ${className}`}
    >
      <MessageCircle size={20} />
      <span>{displayText}</span>
    </a>
  );
};

export default WhatsAppButton;
