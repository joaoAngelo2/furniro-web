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
  const dispatch = useDispatch();

  return (
    <div>
      <Header />
      <ShopBanner name={"Cart"} exibe={true} />
      <div className="w-screen grid place-items-center">
        <div className="w-4/5 gap-8 flex flex-col lg:flex-row">
          <div className="h-[30rem] w-full lg:w-2/3 overflow-y-auto">
            <table className="w-full border-spacing-y-3 border-separate">
              <thead className="h-14 bg-[#FAF3EA] sticky top-0 z-10">
                <tr className="text-black text-base font-medium font-['Poppins'] text-left">
                  <th></th>
                  <th className="p-2">Product</th>
                  <th className="p-2">Price</th>
                  <th className="p-2">Quantity</th>
                  <th className="p-2">Subtotal</th>
                  <th></th>
                </tr>
              </thead>
              <tbody className="w-full text-left">
                {cartItems.map((item) => (
                  <tr key={item.id} className="align-middle">
                    <td className="p-2">
                      <div
                        className="bg-cover w-20 h-20 bg-center rounded-md"
                        style={{ backgroundImage: `url(${item.thumbnail})` }}
                      ></div>
                    </td>
                    <td className="p-2">{item.name}</td>
                    <td className="p-2">Rs. {item.price}</td>
                    <td className="p-2">
                      <Quantity productId={item.id} />
                    </td>
                    <td className="p-2">Rs. {formatPriceUSD(item.price * item.quantity)}</td>
                    
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="h-full w-full lg:w-1/3 bg-[#FAF3EA] grid place-items-center py-10">
            <div className="w-4/5 flex flex-col gap-6">
              <h1 className="text-black text-3xl font-semibold font-['Poppins']">Cart Totals</h1>

              <div className="flex justify-between">
                <span className="text-black text-base font-medium font-['Poppins']">Subtotal</span>
                <span className="text-neutral-400 text-base font-normal font-['Poppins']">Rs. {formatPriceUSD(total)}</span>
              </div>

              <div className="flex justify-between">
                <span className="text-black text-base font-medium font-['Poppins']">Total</span>
                <span className="text-yellow-600 text-xl font-medium font-['Poppins']">Rs. {formatPriceUSD(total)}</span>
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
