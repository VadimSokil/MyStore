import React from 'react';
import ProductsPageFooterConditions from './products-page-footer-conditions';
import ProductsPageFooterAbout from './products-page-footer-about';
import ProductsPageFooterCopyright from './products-page-footer-copyright';

const ProductsPageFooter = () => {
  return (
    <div className="footer-container">
      <div className="links-container">
        <ProductsPageFooterConditions />
        <ProductsPageFooterAbout />
      </div>
      <ProductsPageFooterCopyright />
    </div>
  );
};

export default ProductsPageFooter;