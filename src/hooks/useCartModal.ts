import { useState } from 'react';

export const useCartModal = () => {
  const [isCartOpen, setIsCartOpen] = useState(false);
  
  return { isCartOpen, setIsCartOpen };
};