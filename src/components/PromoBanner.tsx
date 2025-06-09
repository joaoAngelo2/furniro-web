import { Link } from "react-router-dom"

const PromoBanner = () => {
  return (
    <div className="w-full mb-10 font-poppins overflow-hidden">
      <div className="bg-fundo-home h-[50rem] md:h-[63rem] w-full bg-cover bg-no-repeat flex items-center justify-end px-4 md:px-16 relative">
        <div className="flex flex-col bg-amarelo-bloco rounded-lg p-6 md:p-10 max-w-full md:max-w-[40rem] text-center md:text-start :w-full md:w-auto">
          <p className="tracking-[3px] text-sm md:text-base">New Arrival</p>
          <p className="text-amarelo-botoes font-bold text-3xl md:text-[52px] leading-snug md:leading-[65px] mt-2">
            Discover Our New Collection
          </p>
          <p className="text-gray-800 font-medium leading-relaxed text-sm md:text-base mt-4">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis.
          </p>
          <Link to={"/shop"}>
            <button className="mt-6 w-full md:w-56 h-14 md:h-20 bg-amarelo-botoes text-white font-bold text-sm md:text-base">
              BUY NOW
            </button>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default PromoBanner
