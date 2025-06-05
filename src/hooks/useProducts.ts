import { useState, useEffect } from 'react';

export type ProductHint = "New" | number | null;

interface Product {
  id: string;
  name: string;
  subtitle: string;
  price: number;
  thumbnail: string;
  category?: string;
  hint: ProductHint;

}

function useProducts(category?: string) {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        let url = 'http://localhost:3001/products';
        if (category) {
          url += `?category=${category}`;
        }

        const response = await fetch(url);
        const data = await response.json();
        
        setProducts(data);
      } catch (error) {
        console.error('Error fetching products:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts().then((value) => {
      console.log(value);
    });
  }, [category]);

  return { products, loading };
}

export default useProducts;