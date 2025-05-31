import React, { useEffect, useRef } from 'react';
import ProductsPageHeaderNavbar from './products-page-header-navbar';
import ProductsPageHeaderBanner from './products-page-header-banner';

const ProductsPageHeader = ({ onMenuToggle }) => {
  const navbarRef = useRef(null);
  const bannerRef = useRef(null);
  const headerRef = useRef(null);
  const placeholderRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      const banner = bannerRef.current;
      const navbar = navbarRef.current;
      const placeholder = placeholderRef.current;
      
      if (!banner || !navbar || !placeholder) return;

      const bannerBottom = banner.offsetTop + banner.offsetHeight;
      const scrollPosition = window.scrollY;

      if (scrollPosition >= bannerBottom) {
        navbar.classList.add('fixed');
        placeholder.classList.add('visible');
      } else {
        navbar.classList.remove('fixed');
        placeholder.classList.remove('visible');
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="header-container" ref={headerRef}>
      <div ref={bannerRef} className="banner-container">
        <ProductsPageHeaderBanner />
      </div>
      <div ref={navbarRef} className="navbar-container">
        <ProductsPageHeaderNavbar onMenuToggle={onMenuToggle} />
      </div>
      <div ref={placeholderRef} className="navbar-placeholder"></div>
    </div>
  );
};

export default ProductsPageHeader;