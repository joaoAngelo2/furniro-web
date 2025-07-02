import Footer from "../../components/Footer"
import Header from "../../components/Header"
import ServiceFeatures from "../../components/ServiceFeatures"
import ShopBanner from "../../components/ShopBanner"

const Contact = () => {
  return (
    <div>
        <Header/>
        <ShopBanner name={'contact'} exibe={true}/>
        <div className="w-screen h-[71.5rem]">
            <div className=" pt-24 grid place-items-center">
                <h1 className="text-black text-4xl font-semibold font-['Poppins']">Get In Touch With Us</h1>
                <p className="w-[644px] text-center justify-start  text-base font-normal font-['Poppins']">For More Information About Our Product & Services. Please Feel Free To Drop Us An Email. Our Staff Always Be There To Help You Out. Do Not Hesitate!</p>
            </div>
            <div className=" w-4/5 h-[60rem] mx-auto grid grid-cols-2">
                <div className="h-full w-full  grid place-items-center">
                    <div className="w-4/5 h-3/5 ">
                        <table className="w-full h-full" style={{borderSpacing: '12px'}}>
                            <tbody>
                                <tr>
                                    <td height={"30%"}><img src="/src/assets/local.svg" alt="" className="bg-center" /></td>
                                    <td width={"80%"} height={"30%"}>
                                        <p className="text-black text-2xl font-medium font-['Poppins']">Address</p>
                                        <p className="text-black text-base font-normal font-['Poppins']">236 5th SE Avenue, New<br></br> York NY10000, United States</p>
                                    </td>
                                </tr>
                                <tr>
                                    <td  height={"30%"}><img src="/src/assets/bxs-phone.svg" alt="" className="bg-center" /></td>
                                    <td width={"80%"} height={"30%"}>
                                        <p className="text-black text-2xl font-medium font-['Poppins']">Phone</p>
                                        <p className="text-black text-base font-normal font-['Poppins']">Mobile: +(84) 546-6789<br></br>
Hotline: +(84) 456-6789</p>
                                    </td>
                                </tr>
                                <tr>
                                    <td  height={"30%"}><img src="/src/assets/bi-clock-fill.svg" alt="" className="bg-center" /></td>
                                    <td  width={"80%"} height={"30%"}>
                                        <p className="text-black text-2xl font-medium font-['Poppins']">Working Time</p>
                                        <p className="text-black text-base font-normal font-['Poppins']">Monday-Friday: 9:00 - 22:00<br></br>
Saturday-Sunday: 9:00 - 21:00</p>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
                <div className="h-full w-full  grid place-items-center">
                    <form action="" className="w-4/5 h-4/5 flex flex-col gap-3">
                        <label htmlFor="name" className="text-black text-base font-medium font-['Poppins']">Your Name:</label><input type="text" id="name" className="w-full h-20  bg-white rounded-[10px] border border-neutral-400 my-auto pl-6" placeholder="Abc"/>
                        <label htmlFor="email" className="text-black text-base font-medium font-['Poppins']">Email address:</label><input type="text" id="email"  className="w-full   h-20 bg-white rounded-[10px] border border-neutral-400 my-auto pl-6" placeholder="abc@def.com"/>
                        <label htmlFor="subject" className="text-black text-base font-medium font-['Poppins']">Subject:</label><input type="text" id="subject" className="w-full h-20   bg-white rounded-[10px] border border-neutral-400 my-auto pl-6" placeholder="This is an optional"/>
                        <label htmlFor="message" className="text-black text-base font-medium font-['Poppins']">Message:</label><textarea id="message" className="w-full h-32  bg-white rounded-[10px] border border-neutral-400 py-8 pl-6" placeholder="HI! I'd like to ask about..."/>
                        <button type="submit" className="w-60 h-14 bg-yellow-600 rounded-[5px] border border-yellow-600  text-white text-base font-normal font-['Poppins']">Submit</button>
                    </form>
                </div>
            </div>
        </div>
        <ServiceFeatures/>
        <Footer/>
      
    </div>
  )
}

export default Contact
