import { Link } from "react-router-dom"


const PromoBanner = () => {
  return (
    <div className="w-screen h-62.99563 mb-10 font-poppins">
        <div className='bg-fundo-home h-[63rem] w-full bg-cover items-center flex bg-no-repeat'>
            <div className='flex flex-col right-0 absolute h-bloco-home-altura w-bloco-home-largura  bg-amarelo-bloco rounded-lg mr-14'>
                    <p  className='ml-10 mt-16  tracking-[3px] text-base'>New Arrival</p>
                    <p className='ml-10 text-amarelo-botoes font-bold text-[52px] leading-[65px]'>Discover Our New Collection</p>
                    <p className='ml-10 mt-4 text-gray-800 font-medium leading-6'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis.</p>
                    <Link to={"/shop"}>
                    <button className='ml-10 mt-[2.88rem] w-56 h-20 bg-amarelo-botoes text-white font-bold'>BUY NOW</button>
                    </Link>
            </div>
        </div>
    </div>
  )
}

export default PromoBanner
