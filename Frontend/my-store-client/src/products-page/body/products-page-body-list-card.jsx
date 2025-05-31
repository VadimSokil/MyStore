import React, { useState } from 'react';
import { FaHeart, FaRegHeart } from 'react-icons/fa';
import { FaBalanceScale, FaBalanceScaleLeft } from 'react-icons/fa';

const ProductsPageBodyListCard = ({ product }) => {
  const [isFavorite, setIsFavorite] = useState(false);
  const [isCompared, setIsCompared] = useState(false);

  const isOutOfStock = product.productAmount === 0;

  return (
    <div className="card-container">
      <div className="card-inner">
        <div className="card-top">
          <img
            className="card-image"
            src={product.productImageUrl}
            alt={product.productName}
          />
        </div>
        <div className="card-bottom">
          <div className="card-bottom-1">{product.productName}</div>
          <div className="card-bottom-2">{product.productPrice} $</div>
          <div className="card-bottom-3">
            <button
              className="card-bottom-3-left"
              onClick={() => setIsFavorite(!isFavorite)}
            >
              {isFavorite ? <FaHeart /> : <FaRegHeart />}
            </button>
            <button
              className="card-bottom-3-center"
              disabled={isOutOfStock}
            >
              {isOutOfStock ? 'Out of stock' : 'To cart'}
            </button>
            <button
              className="card-bottom-3-right"
              onClick={() => setIsCompared(!isCompared)}
            >
              {isCompared ? <FaBalanceScaleLeft /> : <FaBalanceScale />}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductsPageBodyListCard;