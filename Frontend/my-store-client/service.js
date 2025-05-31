import axios from 'axios';

const API_URL = 'https://localhost:7250/api/products/get-products-list';

export const fetchProducts = async () => {
  try {
    const response = await axios.get(API_URL);
    return response.data || [];
  } catch (error) {
    console.error('Error fetching products:', error);
    return []; 
  }
};

export const fetchCategories = async () => {
  try {
    const response = await fetch('https://localhost:7250/api/products/get-categories-list');
    if (!response.ok) {
      throw new Error('Failed to fetch categories');
    }
    return response.json();
  } catch (error) {
    console.error('Error fetching categories:', error);
    return [];
  }
};