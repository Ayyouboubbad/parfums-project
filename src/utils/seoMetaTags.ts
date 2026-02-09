/**
 * SEO Meta Tags Utility for BEN FARES PARFUMS
 * Dynamically update page meta tags for better search engine optimization
 */

interface SEOProps {
  title: string;
  description: string;
  keywords?: string;
  ogImage?: string;
  ogUrl?: string;
  canonical?: string;
}

export const setSEOMeta = ({
  title,
  description,
  keywords = "perfumes, fragrances, luxury perfumes, moroccan fragrances, ben fares",
  ogImage = "https://benfares.ma/og-image.jpg",
  ogUrl = "https://benfares.ma/",
  canonical = "https://benfares.ma/"
}: SEOProps) => {
  // Set title
  document.title = title;

  // Update or create meta description
  let metaDescription = document.querySelector('meta[name="description"]');
  if (!metaDescription) {
    metaDescription = document.createElement('meta');
    metaDescription.setAttribute('name', 'description');
    document.head.appendChild(metaDescription);
  }
  metaDescription.setAttribute('content', description);

  // Update or create keywords
  let metaKeywords = document.querySelector('meta[name="keywords"]');
  if (!metaKeywords) {
    metaKeywords = document.createElement('meta');
    metaKeywords.setAttribute('name', 'keywords');
    document.head.appendChild(metaKeywords);
  }
  metaKeywords.setAttribute('content', keywords);

  // Update OpenGraph tags
  updateOpenGraphTag('og:title', title);
  updateOpenGraphTag('og:description', description);
  updateOpenGraphTag('og:image', ogImage);
  updateOpenGraphTag('og:url', ogUrl);

  // Update Twitter tags
  updateOpenGraphTag('twitter:title', title);
  updateOpenGraphTag('twitter:description', description);
  updateOpenGraphTag('twitter:image', ogImage);

  // Update Canonical
  let canonical_tag = document.querySelector('link[rel="canonical"]');
  if (!canonical_tag) {
    canonical_tag = document.createElement('link');
    canonical_tag.setAttribute('rel', 'canonical');
    document.head.appendChild(canonical_tag);
  }
  canonical_tag.setAttribute('href', canonical);
};

const updateOpenGraphTag = (property: string, content: string) => {
  let tag = document.querySelector(`meta[property="${property}"]`);
  if (!tag) {
    tag = document.createElement('meta');
    tag.setAttribute('property', property);
    document.head.appendChild(tag);
  }
  tag.setAttribute('content', content);
};

export const pageMetaTags = {
  home: {
    title: "BEN FARES PARFUMS - Luxury Fragrances Inspired by Morocco | EST. 2024",
    description: "Discover BEN FARES PARFUMS - Premium handcrafted luxury fragrances inspired by Morocco. Shop luxury perfumes for men, women & unisex. Free delivery throughout Morocco.",
    keywords: "luxury fragrances, moroccan perfumes, handcrafted fragrance, premium scents, eau de parfum, fragrance store, perfume online, ben fares, luxury perfume",
    ogUrl: "https://benfares.ma/"
  },
  
  shop: {
    title: "Shop Our Collection | BEN FARES PARFUMS - Premium Fragrances",
    description: "Browse our collection of 50ml premium handcrafted fragrances for men, women & unisex. Each perfume is inspired by Moroccan elegance and oriental mystique.",
    keywords: "buy perfumes, fragrance shop, luxury perfumes for sale, women perfumes, men perfumes, unisex fragrances, premium fragrances, handcrafted perfumes",
    ogUrl: "https://benfares.ma/shop"
  },

  about: {
    title: "About BEN FARES PARFUMS - Our Story & Heritage",
    description: "Learn about BEN FARES PARFUMS (EST. 2024). Discover how we craft luxury fragrances inspired by Moroccan heritage, artisanal traditions, and oriental mystique.",
    keywords: "about ben fares, moroccan craftsmanship, luxury perfume brand, artisanal fragrances, perfume heritage",
    ogUrl: "https://benfares.ma/about"
  },

  contact: {
    title: "Contact BEN FARES PARFUMS - Order via WhatsApp",
    description: "Get in touch with BEN FARES PARFUMS. Order luxury fragrances directly via WhatsApp. Fast response and delivery throughout Morocco.",
    keywords: "contact perfume store, whatsapp order, fragrance customer service, order perfumes online",
    ogUrl: "https://benfares.ma/contact"
  },

  women: {
    title: "Women's Perfumes | BEN FARES PARFUMS - Luxury Fragrances",
    description: "Shop luxury fragrances for women. Discover premium 50ml handcrafted perfumes inspired by Moroccan elegance. Romantic and sophisticated scents.",
    keywords: "women perfumes, luxury fragrance for women, eau de parfum for women, female fragrances, women's scents",
    ogUrl: "https://benfares.ma/shop?category=women"
  },

  men: {
    title: "Men's Perfumes | BEN FARES PARFUMS - Luxury Fragrances",
    description: "Explore premium fragrances for men. Discover luxury 50ml handcrafted perfumes inspired by Morocco. Bold and sophisticated scents for gentlemen.",
    keywords: "men perfumes, luxury fragrance for men, men's cologne, eau de cologne, men's scents, designer fragrances",
    ogUrl: "https://benfares.ma/shop?category=men"
  },

  unisex: {
    title: "Unisex Perfumes | BEN FARES PARFUMS - Premium Fragrances",
    description: "Discover unisex luxury fragrances from BEN FARES PARFUMS. 50ml premium handcrafted perfumes suitable for everyone. Versatile and elegant scents.",
    keywords: "unisex fragrances, unisex perfumes, gender-neutral fragrances, luxury scents for all",
    ogUrl: "https://benfares.ma/shop?category=unisex"
  },

  luxury: {
    title: "Luxury Collection | BEN FARES PARFUMS - Premium Trilogy Pack",
    description: "Experience our luxury collection. Premium handcrafted fragrance packs inspired by Moroccan heritage. Perfect gift set for fragrance enthusiasts.",
    keywords: "luxury perfume pack, premium fragrance collection, trilogy pack, fragrance gift set, luxury scents",
    ogUrl: "https://benfares.ma/shop?category=luxury"
  }
};
