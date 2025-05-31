import React from 'react';
import { IoMenu } from "react-icons/io5";

const ProductsPageHeaderNavbarMenu = ({ onToggle }) => {
  return (
    <div className="menu-container">
      <IoMenu onClick={onToggle} />
    </div>
  );
};

export default ProductsPageHeaderNavbarMenu;