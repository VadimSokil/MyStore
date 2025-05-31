import React, { useState } from 'react';
import './products-page.css';
import ProductsPageHeader from './header/products-page-header';
import ProductsPageBody from './body/products-page-body';
import ProductsPageFooter from './footer/products-page-footer';

const ProductsPage = () => {
  const [isFilterOpen, setIsFilterOpen] = useState(false);

  const toggleFilter = () => {
    setIsFilterOpen(prev => !prev);
  };

  const handleOverlayClick = (e) => {
    if (e.target.className.includes('overlay')) {
      setIsFilterOpen(false);
    }
  };

  return (
    <div className="products-container">
      <ProductsPageHeader onMenuToggle={toggleFilter} />
      <ProductsPageBody isFilterOpen={isFilterOpen} onOverlayClick={handleOverlayClick} />
      <ProductsPageFooter />
    </div>
  );
};

export default ProductsPage;