import React from 'react';
import ProductsPageHeaderNavbarMenu from './products-page-header-navbar-menu';
import ProductsPageHeaderNavbarSearch from './products-page-header-navbar-search';
import ProductsPageHeaderNavbarActions from './products-page-header-navbar-actions';

const ProductsPageHeaderNavbar = ({ onMenuToggle, isFilterOpen }) => {
  return (
    <div className="navbar-container">
      <ProductsPageHeaderNavbarMenu onToggle={onMenuToggle} />
      <ProductsPageHeaderNavbarSearch />
      <ProductsPageHeaderNavbarActions />
    </div>
  );
};

export default ProductsPageHeaderNavbar;