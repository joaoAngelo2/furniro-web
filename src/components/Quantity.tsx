
import { useState } from 'react';


const Quantity = () => {
    const [quantity, setQuantity] = useState<number>(1);
    const incrementQuantity = () => setQuantity((prev) => prev + 1);
    const decrementQuantity = () => setQuantity((prev) => (prev > 1 ? prev - 1 : 1));
  return (
    <div>
      <div className="flex items-center border border-gray-300 rounded-lg">
            <button
                  onClick={decrementQuantity}
                  className="px-4 h-16 text-xl font-semibold hover:bg-gray-100"
                >
                  -
                </button>
                <span className="px-4 h-16 border-gray-300 justify-center content-center">
                  {quantity}
                </span>
                <button
                  onClick={incrementQuantity}
                  className="px-4 h-16 text-xl font-semibold hover:bg-gray-100"
                >
                  +
                </button>
        </div>
    </div>
  )
}

export default Quantity
