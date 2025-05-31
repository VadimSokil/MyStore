import React, { useState } from 'react';
import ProductsPageBodyFilter from './products-page-body-filter';
import ProductsPageBodyList from './products-page-body-list';

const ProductsPageBody = ({ isFilterOpen, onOverlayClick }) => {
  const [categoryIds, setCategoryIds] = useState([null]);

  return (
    <div className="body-container">
      <ProductsPageBodyFilter
        isOpen={isFilterOpen}
        onOverlayClick={onOverlayClick}
        onCategoryChange={setCategoryIds}
      />
      <ProductsPageBodyList categoryIds={categoryIds} />
      {isFilterOpen && <div className="overlay" onClick={onOverlayClick}></div>}
    </div>
  );
};

export default ProductsPageBody;