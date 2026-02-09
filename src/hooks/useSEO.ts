import { useEffect } from 'react';
import { setSEOMeta } from '../utils/seoMetaTags';

interface UseSEOProps {
  title: string;
  description: string;
  keywords?: string;
  ogImage?: string;
  ogUrl?: string;
  canonical?: string;
}

/**
 * Custom hook to set SEO meta tags for a page
 * Usage: useSEO({ title: "Page Title", description: "Page description" })
 */
export const useSEO = (props: UseSEOProps) => {
  useEffect(() => {
    setSEOMeta(props);
    
    // Scroll to top when page loads
    window.scrollTo(0, 0);
  }, [props.title]);
};
