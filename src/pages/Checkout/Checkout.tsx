import Footer from "../../components/Footer"
import Header from "../../components/Header"
import ServiceFeatures from "../../components/ServiceFeatures"
import ShopBanner from "../../components/ShopBanner"


const Checkout = () => {
  return (
    <div>
        <Header/>
        <ShopBanner name={'Checkout'} exibe={true}/>
        <div className="w-screen h-[114.32rem] grid place-items-center">
            

            <form className="w-4/5 h-[90%] grid grid-cols-2 gap-7">
                
                <div className="flex flex-wrap w-full gap-6">
                    <p className="text-black text-4xl font-semibold font-['Poppins']">Billing details</p><br />
                    <div className=" w-full gap-4 flex flex-col">
                        <div className="w-full flex justify-between gap-5">
                            <div className="w-1/2 flex gap-4 flex-col">
                                <label htmlFor="fname" className="text-black  text-base font-medium font-['Poppins']">First Name:</label>
                                <input type="text" id="fname" className="w-full h-20  bg-white rounded-[10px] border border-neutral-400 my-auto pl-6"/>
                            </div>

                            <div className="w-1/2 gap-4 flex flex-col">
                                <label htmlFor="lname" className="text-black  text-base font-medium font-['Poppins']">Last Name:</label>
                                <input type="text" id="lname" className="w-full h-20  bg-white rounded-[10px] border border-neutral-400 my-auto pl-6"/>
                            </div>
                        </div>
                    </div>
                    <label htmlFor="cname" className="text-black  text-base font-medium font-['Poppins']">Company Name (Optional)</label><input type="text" id="cname" className="w-full h-20  bg-white rounded-[10px] border border-neutral-400 my-auto pl-6"/>
                    <label htmlFor="zcode" className="text-black  text-base font-medium font-['Poppins']">ZIP Code</label><input type="number" id="zcode" className="w-full h-20  bg-white rounded-[10px] border border-neutral-400 my-auto pl-6"/>
                    <label htmlFor="contry" className="text-black  text-base font-medium font-['Poppins']">Country/Region</label><input type="text3" id="contry" className="w-full h-20  bg-white rounded-[10px] border border-neutral-400 my-auto pl-6"/>
                    <label htmlFor="saddress" className="text-black  text-base font-medium font-['Poppins']">Street Address</label><input type="text" id="saddress" className="w-full h-20  bg-white rounded-[10px] border border-neutral-400 my-auto pl-6"/>
                    <label htmlFor="city" className="text-black  text-base font-medium font-['Poppins']">Town / City</label><input type="text" id="city" className="w-full h-20  bg-white rounded-[10px] border border-neutral-400 my-auto pl-6"/>
                    <label htmlFor="province" className="text-black  text-base font-medium font-['Poppins']">Province</label><input type="text" id="province" className="w-full h-20  bg-white rounded-[10px] border border-neutral-400 my-auto pl-6"/>
                    <label htmlFor="aod" className="text-black  text-base font-medium font-['Poppins']">Add-on address</label><input type="text" id="aod" className="w-full h-20  bg-white rounded-[10px] border border-neutral-400 my-auto pl-6"/>
                    <label htmlFor="eaddress" className="text-black  text-base font-medium font-['Poppins']">Email address</label><input type="email" id="zcode" className="w-full h-20  bg-white rounded-[10px] border border-neutral-400 my-auto pl-6"/>
                    <input type="text" id="ainformation" className="w-full h-20  bg-white rounded-[10px] border border-neutral-400 my-auto pl-6" placeholder="Aditional information"/>
                </div>
                
                <div className="w-full h-full">
                    <div className="w-4/5 grid grid-cols-2 gap-5">
                        <div className="flex flex-col gap-5 text-start">
                            <p className="text-black text-2xl font-medium font-['Poppins']">Product</p>
                            <ul className="text-neutral-400 text-base font-normal font-['Poppins']">
                                <li>Asgaar sofa x 1</li>
                            </ul>
                            <p className="text-black text-base font-normal font-['Poppins']">Subtotal</p>
                            <p className="text-black text-base font-normal font-['Poppins']">Total</p>
                        </div>
                        <div className="flex flex-col gap-5 text-end">
                            <p className="text-black text-2xl font-medium font-['Poppins']">Subtotal</p>
                            <ul className="text-black text-base font-light font-['Poppins']">
                                <li>Rs. 250,000.00</li>
                            </ul>
                            <p className="text-black text-base font-light font-['Poppins']">Rs. 250,000.00</p>
                            <p className="text-yellow-600 text-2xl font-bold font-['Poppins']">Rs. 250,000.00</p>
                        </div>
                    </div>
                    <div className="h-px bg-zinc-300 w-4/5 my-4"></div>
                    <div className="w-11/12 h-[90%]  flex flex-col gap-4">
                        <div className="flex items-center gap-2">
                            <input 
                              type="radio" 
                              name="payment" 
                              id="dtransfer" 
                              className="focus:ring-black checked:bg-black focus:bg-black peer/dtransfer"
                              onChange={(e) => {
                                if(e.target.checked) {
                                  e.target.classList.add('text-black');
                                  e.target.classList.remove('text-neutral-400');
                                }
                              }}
                            />
                            <label htmlFor="dtransfer" className="peer-checked/dtransfer:text-black text-neutral-400">Direct bank transfer</label>
                        </div>
                        <div className="flex items-center gap-2">
                            <input 
                              type="radio" 
                              name="payment" 
                              id="cdelivery" 
                              className="focus:ring-black checked:bg-black peer/cdelivery"
                              onChange={(e) => {
                                if(e.target.checked) {
                                  e.target.classList.add('text-black');
                                  e.target.classList.remove('text-neutral-400');
                                }
                              }}
                            />
                            <label htmlFor="cdelivery" className="peer-checked/cdelivery:text-black text-neutral-400">Cash on delivery</label>
                        </div>
                        <div className="flex items-center gap-2">
                            <input 
                              type="radio" 
                              name="payment" 
                              id="other" 
                              className="focus:ring-black checked:bg-black peer/other"
                              onChange={(e) => {
                                if(e.target.checked) {
                                  e.target.classList.add('text-black');
                                  e.target.classList.remove('text-neutral-400');
                                }
                              }}
                            />
                            <label htmlFor="other" className="peer-checked/other:text-black text-neutral-400">Other</label>
                        </div>
                        <p className="text-black text-base font-light font-['Poppins']">Your personal data will be used to support your experience throughout this website, to manage access to your account, and for other purposes described in our <strong>privacy policy</strong>.</p>
                        <button className="w-4/5 mx-auto h-14 rounded-2xl border border-black" type="submit">Place order</button>
                    </div>
                </div>
            </form>
            
        </div>

        <ServiceFeatures/>
        <Footer/>
    </div>
    
  )
}

export default Checkout
