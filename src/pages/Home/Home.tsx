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
        <div className='md:h-[47rem] h-[110rem] w-screen font-poppins'>
            <div className='w-screen text-center mb-8'>
                <p className='text-3xl font-bold text-zinc-800 '>Browse The Range</p>
                <p className="text-xl font-normal text-stone-500">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </div>
            <div className='w-screen'>
                <div className="w-[90%] flex flex-col items-center max-w-screen-xl max-[970px]:w-[95%] md:flex-row mx-auto justify-between">
                <CategoryCard imageClass='bg-dining-img' title="Dining" to="/shop/dining"/>
                <CategoryCard imageClass='bg-living-img' title="Living" to="/shop/living"/>
                <CategoryCard imageClass='bg-bedroom-img' title="Bedroom" to="/shop/bedroom"/>
                </div>
            </div>
        </div>
        </section>
        <section>
            {/*colocar os componentes reutilizaveis */}
            <div className='w-screen text-center'>
                <p className='text-3xl font-bold text-zinc-800 '>Our Products</p>
                <div className='h-[30rem] lg:h-[77.25rem] w-full'>
                    <div className='w-96 bg-red-300 '>
                    <></>
                    </div>
                </div>
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
  <div className='w-screen mt-16 text-center px-4'>
    <p className='font-semibold text-sm'>Share your setup with</p>
    <p className='font-bold text-4xl'>#FuniroFurniture</p>
  </div>

  <div className="hidden lg:grid grid-cols-12 grid-rows-11 gap-4 h-[721px] mb-8 px-4">
    <div className="row-span-6 bg-[url('assets/home-3.png')] bg-cover bg-center"></div>
    <div className="col-span-2 bg-[url('assets/home-4.png')] bg-cover bg-center row-span-5 col-start-1 row-start-7"></div>
    <div className="col-span-3 bg-[url('assets/home-2.png')] bg-cover bg-center row-span-5 col-start-2 row-start-2"></div>
    <div className="col-span-2 bg-[url('assets/home-5.png')] bg-cover bg-center row-span-3 col-start-3 row-start-7"></div>
    <div className="col-span-3 bg-[url('assets/home-6.png')] bg-cover bg-center row-span-6 col-start-5 row-start-3"></div>
    <div className="col-span-3 bg-[url('assets/home-7.png')] bg-cover bg-center row-span-5 col-start-8 row-start-2"></div>
    <div className="col-span-2 bg-[url('assets/home-8.png')] bg-cover bg-center row-span-4 col-start-8 row-start-7"></div>
    <div className="col-span-2 bg-[url('assets/home-9.png')] bg-cover bg-center row-span-3 col-start-10 row-start-7"></div>
    <div className="col-span-2 bg-[url('assets/home-10.png')] bg-cover bg-center row-span-6 col-start-11 row-start-1"></div>
  </div>

    <div className="grid lg:hidden grid-cols-2 gap-2 px-4 mt-8">
            {[
            'home-3', 'home-4', 'home-2', 'home-5',
            'home-6', 'home-7', 'home-8', 'home-9'
            ].map((img, index) => (
            <div key={index} className={`h-40 bg-[url('assets/${img}.png')] bg-cover bg-center`} />
            ))}
    </div>
    </section>

    </div>
  )
}

export default Home
