import { useDispatch, useSelector } from 'react-redux';
import {type RootState } from '../store';
import { updateQuantity } from '../slices/cartSlice';

interface QuantityProps {
  productId: string;
}

const Quantity = ({ productId }: QuantityProps) => {
  const dispatch = useDispatch();

  const quantity = useSelector((state: RootState) => {
    const item = state.cart.items.find((item) => item.id === productId);
    return item ? item.quantity : 1;
  });

  const incrementQuantity = () => {
    dispatch(updateQuantity({ id: productId, quantity: quantity + 1 }));
  };

  const decrementQuantity = () => {
    if (quantity > 1) {
      dispatch(updateQuantity({ id: productId, quantity: quantity - 1 }));
    }
  };

  return (
    <div className="flex w-32 items-center border border-gray-300 rounded-lg">
      <button
        onClick={decrementQuantity}
        className="px-4 h-16 text-xl font-semibold hover:bg-gray-100"
      >
        -
      </button>
      <span className="px-4 h-16 flex items-center justify-center">
        {quantity}
      </span>
      <button
        onClick={incrementQuantity}
        className="px-4 h-16 text-xl font-semibold hover:bg-gray-100"
      >
        +
      </button>
    </div>
  );
};

export default Quantity;
