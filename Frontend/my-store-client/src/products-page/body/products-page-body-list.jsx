import React, { useEffect, useState } from 'react';
import { fetchProducts } from '/service'; 
import ProductsPageBodyListCard from './products-page-body-list-card';

const ProductsPageBodyList = ({ categoryIds }) => {
  const [products, setProducts] = useState([]);
  const [visibleProducts, setVisibleProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const getProducts = async () => {
      try {
        const data = await fetchProducts();
        setProducts(data);
        setIsLoading(false);
      } catch (error) {
        console.error('Error when loading goods:', error);
        setProducts([]);
        setIsLoading(false);
      }
    };
    getProducts();
  }, []);

  useEffect(() => {
    console.log('Category IDs received:', categoryIds);
    if (categoryIds.includes(null) || categoryIds.length === 0) {
      setVisibleProducts(products); 
    } else {
      setVisibleProducts(
        products.filter((product) =>
          categoryIds.includes(product.categoryId)
        )
      );
    }
  }, [categoryIds, products]);

  return (
    <div className="list-container">
      {isLoading ? (
        <div className="loading-message">Loading...</div>
      ) : visibleProducts.length > 0 ? (
        visibleProducts.map((product) => (
          <ProductsPageBodyListCard key={product.productId} product={product} />
        ))
      ) : (
        <div className="error-message">No goods available</div>
      )}
    </div>
  );
};

export default ProductsPageBodyList;