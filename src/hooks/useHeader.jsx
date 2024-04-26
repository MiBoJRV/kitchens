import { useState, useEffect } from 'react';

export const useHeader = () => {
  const [isMobileMenu, setIsMobileMenu] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenu((prev) => !prev);
  };

  useEffect(() => {
    document.body.style.overflow = isMobileMenu ? 'hidden' : 'unset';
  }, [isMobileMenu]);

  return {
    isMobileMenu,
    toggleMobileMenu,
  };
};
