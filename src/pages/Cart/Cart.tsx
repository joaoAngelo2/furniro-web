import Footer from "../../components/Footer"
import Header from "../../components/Header"
import Quantity from "../../components/Quantity"
import ServiceFeatures from "../../components/ServiceFeatures"
import ShopBanner from "../../components/ShopBanner"

const Cart = () => {
  return (
    <div>
        <Header/>
        <ShopBanner name={'Cart'} exibe={true}/>
        <div className="w-screen h-[32.8rem] grid place-items-center">
            <div className="w-4/5 h-96 gap-8 flex">
                <div className="h-full w-2/3 ">
                    <table className="w-full">
                        <thead className="h-14 w-full bg-[#FAF3EA]">
                            <tr className="text-black text-base font-medium font-['Poppins']">
                                <th></th>
                                <th colSpan={3}>Product</th>
                                <th>Price</th>
                                <th>Quantity</th>
                                <th>Subtotal</th>
                                <th></th>
                            </tr>
                        </thead>
                        <tbody className="w-full">
                            <tr>
                                <td></td>
                                <td colSpan={2}>
                                    <div className="bg-[url('assets/home-1.png')] w-24 h-24 bg-cover rounded-md"></div>
                                </td>
                                <td>Asgard Sofa</td>
                                <td>Rs. 250.000,00</td>
                                <td className="w-6"><Quantity/></td>
                                <td>Rs. 250.000,00</td>
                                <td></td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <div className="h-full w-1/3 bg-[#FAF3EA] grid place-items-center">
                    <div className="w-4/5 h-4/5  flex flex-col  justify-between items-center">
                        <h1 className="text-black text-3xl font-semibold font-['Poppins']">Cart Totals</h1>
                        <div className="flex justify-between w-full">
                            <div className="text-black text-base font-medium font-['Poppins']">Subtotal</div>
                            <div className="text-neutral-400 text-base font-normal font-['Poppins']">precoSub</div>
                        </div>
                        <div className="flex justify-between w-full">
                            <div className="text-black text-base font-medium font-['Poppins']">Total</div>
                            <div className="text-yellow-600 text-xl font-medium font-['Poppins']">precoTotal</div>
                        </div>
                        <button className="w-11/12 h-14 rounded-2xl border border-black">Check Out</button>
                    </div>
                </div>
            </div>
        </div>
        <ServiceFeatures/>
        <Footer/>
    </div>
  )
}

export default Cart
