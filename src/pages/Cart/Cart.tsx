import Footer from "../../components/Footer";
import Header from "../../components/Header";
import Quantity from "../../components/Quantity";
import ServiceFeatures from "../../components/ServiceFeatures";
import ShopBanner from "../../components/ShopBanner";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { type RootState } from "../../store";
import { formatPriceUSD } from "../../utils/formattedPrice";

const Cart = () => {
  const total = useSelector((state: RootState) => state.cart.total);
  const cartItems = useSelector((state: RootState) => state.cart.items);
  
  return (
    <div>
      <Header />
      <ShopBanner name={"Cart"} exibe={true} />
      <div className="w-screen flex justify-center px-4">
  <div className="w-full max-w-7xl gap-8 flex flex-col lg:flex-row">
    {/* Cart Items Table */}
    <div className="w-full lg:w-2/3 overflow-y-auto my-10">
      <div className="overflow-x-auto">
        <table className="min-w-max w-full border-separate border-spacing-y-3">
          <thead className="h-14 bg-[#FAF3EA] sticky top-0 z-10">
            <tr className="text-black text-sm md:text-base font-medium font-['Poppins'] text-left">
              <th></th>
              <th className="p-2">Product</th>
              <th className="p-2">Price</th>
              <th className="p-2">Quantity</th>
              <th className="p-2">Subtotal</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {cartItems.map((item) => (
              <tr key={item.id} className="align-middle">
                <td className="p-2">
                  <div
                    className="bg-cover w-16 h-16 md:w-20 md:h-20 bg-center rounded-md"
                    style={{ backgroundImage: `url(${item.thumbnail})` }}
                  />
                </td>
                <td className="p-2 text-neutral-400 text-sm md:text-base">{item.name}</td>
                <td className="p-2 text-neutral-400 text-sm md:text-base">Rs. {formatPriceUSD(item.price)}</td>
                <td className="p-2">
                  <Quantity productId={item.id} />
                </td>
                <td className="p-2 text-black text-sm md:text-base">Rs. {formatPriceUSD(item.price * item.quantity)}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>

    {/* Cart Totals Box */}
    <div className="w-full lg:w-1/3 bg-[#FAF3EA] flex justify-center items-center my-10">
      <div className="w-11/12 h-full py-6 flex flex-col justify-around gap-6">
        <h1 className="text-black text-2xl md:text-3xl font-semibold text-center">Cart Totals</h1>

        <div className="flex justify-between">
          <span className="text-black text-base font-medium">Subtotal</span>
          <span className="text-neutral-400 text-base">Rs. {formatPriceUSD(total)}</span>
        </div>

        <div className="flex justify-between">
          <span className="text-black text-base font-medium">Total</span>
          <span className="text-yellow-600 text-xl font-medium">Rs. {formatPriceUSD(total)}</span>
        </div>

        <Link to="/checkout">
          <button className="w-full h-14 rounded-2xl border border-black font-['Poppins']">
            Check Out
          </button>
        </Link>
      </div>
    </div>
  </div>
</div>

      <ServiceFeatures />
      <Footer />
    </div>
  );
};

export default Cart;
