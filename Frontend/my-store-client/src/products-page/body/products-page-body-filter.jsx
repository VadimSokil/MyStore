import React, { useState, useEffect } from 'react';
import { fetchCategories } from '/service'; 

const ProductsPageBodyFilter = ({ isOpen, onOverlayClick, onCategoryChange }) => {
  const [categories, setCategories] = useState([]);
  const [selectedCategories, setSelectedCategories] = useState([null]);

  
  useEffect(() => {
    const getCategories = async () => {
      try {
        const data = await fetchCategories();
        setCategories([{ categoryId: null, categoryName: 'All' }, ...data]);
      } catch (error) {
        console.error('Error when loading categories:', error);
        setCategories([{ categoryId: null, categoryName: 'All' }]);
      }
    };
    getCategories();
  }, []);

  const handleCategoryClick = (categoryId) => {
    let updatedCategories;
    if (categoryId === null) {
      updatedCategories = [null];
    } else {
      if (selectedCategories.includes(categoryId)) {
        updatedCategories = selectedCategories.filter((id) => id !== categoryId);
      } else {
        updatedCategories = [...selectedCategories, categoryId].filter(
          (id) => id !== null
        );
      }
      const allCategoryIds = categories
        .filter((c) => c.categoryId !== null)
        .map((c) => c.categoryId);
      if (
        updatedCategories.length === 0 ||
        (updatedCategories.length === allCategoryIds.length &&
          updatedCategories.every((id) => allCategoryIds.includes(id)))
      ) {
        updatedCategories = [null];
      }
    }
    setSelectedCategories(updatedCategories);
    onCategoryChange(updatedCategories);
  };

  return (
    <div
      className={`filter-container ${isOpen ? 'open' : ''}`}
      onClick={(e) => e.stopPropagation()}
    >
      <div className="filter-content">
        <h3>Categories</h3>
        <div className="category-list">
          {categories.map((category) => (
            <button
              key={category.categoryId || 'all'}
              onClick={() => handleCategoryClick(category.categoryId)}
              className={selectedCategories.includes(category.categoryId) ? 'active' : ''}
            >
              {category.categoryName}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductsPageBodyFilter;