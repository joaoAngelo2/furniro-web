import { useState, useEffect } from 'react';

interface Product {
  id: string;
  name: string;
  subtitle: string;
  price: number;
  originalPrice?: number;
  thumbnail: string;
  category?: string;
  hint: ProductHint;
}

export type ProductHint = "New" | number | null;

function useProducts(selectedCategory?: string) { 
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProducts = async () => {
      setLoading(true); 
      try {
        let url = 'http://localhost:3001/products';
        if (selectedCategory && selectedCategory !== 'all') {
          url += `?category=${selectedCategory}`;
        }

        const response = await fetch(url);
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        setProducts(data);
      } catch (error) {
        console.error('Error fetching products:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, [selectedCategory]); 
  return { products, loading };
}

export default useProducts;