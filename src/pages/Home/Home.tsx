import CategoryCard from '../../components/CategoryCard'
import PromoBanner from '../../components/PromoBanner'
import CategoryRooms from '../../components/CategoryRooms'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <div>
        <section>
            <PromoBanner/>
        </section>
        <section>
        <div className='md:h-[122rem] xl:h-[42rem] w-screen font-poppins'>
            <div className='w-screen text-center mb-8'>
                <p className='text-3xl font-bold text-zinc-800 '>Browse The Range</p>
                <p className="text-xl font-normal text-stone-500">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </div>
            <div className='flex flex-col max-w-screen-xl lg:flex-row xl:w-[70rem] md:w-[78rem] lg:w-[62rem] items-center mx-auto justify-between'>
                <CategoryCard imageClass='bg-dining-img' title="Dining" to="/shop/dining"/>
                <CategoryCard imageClass='bg-living-img' title="Living" to="/shop/living"/>
                <CategoryCard imageClass='bg-bedroom-img' title="Bedroom" to="/shop/bedroom"/>
            </div>
        </div>
        </section>
        <section>
            {/*colocar os componentes reutilizaveis */}
            <div className='w-screen text-center mb-8'>
                <p className='text-3xl font-bold text-zinc-800 '>Our Products</p>
            </div>
            <Link to={'/shop'}>
                <div className='w-screen items-center flex'>
                    <button className='mx-auto w-60 h-12 border-amarelo-botoes border-2 text-yellow-600 text-base font-semibold mb-8'>Show more</button>
                </div>
            </Link>
            
            
        </section>
        <section>
            <CategoryRooms/>
        </section>
        <section>
            <div className='w-screen mt-16 text-center'>
                <p className='font-semibold text-sm text'>Share your setup with</p>
                <p className='font-bold text-4xl'>#FuniroFurniture</p>
            </div>
            <div className="grid grid-cols-12 grid-rows-11 gap-4 h-[721px] mb-8">
                <div className="row-span-6 bg-[url('assets/home-3.png')] bg-cover"></div>
                <div className="col-span-2 bg-[url('assets/home-4.png')] bg-cover row-span-5 col-start-1 row-start-7"></div>
                <div className="col-span-3 bg-[url('assets/home-2.png')] bg-cover row-span-5 col-start-2 row-start-2"></div>
                <div className="col-span-2 bg-[url('assets/home-5.png')] bg-cover row-span-3 col-start-3 row-start-7"></div>
                <div className="col-span-3 bg-[url('assets/home-6.png')] bg-cover row-span-6 col-start-5 row-start-3"></div>
                <div className="col-span-3 bg-[url('assets/home-7.png')] bg-cover row-span-5 col-start-8 row-start-2"></div>
                <div className="col-span-2 bg-[url('assets/home-8.png')] bg-cover row-span-4 col-start-8 row-start-7"></div>
                <div className="col-span-2 bg-[url('assets/home-9.png')] bg-cover row-span-3 col-start-10 row-start-7"></div>
                <div className="col-span-2 bg-[url('assets/home-10.png')] bg-cover row-span-6 col-start-11 row-start-1"></div>
            </div>
            

        </section>
    </div>
  )
}

export default Home
