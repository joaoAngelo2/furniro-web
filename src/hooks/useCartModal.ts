import { useSelector, useDispatch } from "react-redux";
import type { RootState } from "../store";
import { setCartOpen } from "../slices/cartModalSlice";

export const useCartModal = () => {
  const isCartOpen = useSelector((state: RootState) => state.cartModal.isOpen);
  const dispatch = useDispatch();

  const setIsCartOpen = (value: boolean) => {
    dispatch(setCartOpen(value));
  };

  return { isCartOpen, setIsCartOpen };
};
