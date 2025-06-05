import { useState } from 'react';
import { Link } from 'react-router-dom';


interface Cards{
    nome : string;
}

const rooms = [
  {
    title: 'Bedroom',
    name: 'Inner Peace',
    image: 'bg-inner-peace',
  },
  {
    title: 'Dining Room',
    name: 'Classic Comfort',
    image: 'bg-beatiful-room-2',
  },
  {
    title: 'Living Room',
    name: 'Modern Elegance',
    image: "bg-[url('assets/70655e8b25a06a33769af9bf5fe8f8ed81ce75d8.png')]",
  },
];



const CategoryRooms = () => {
    const [currentIndex, setCurrentIndex] = useState<number>(0);

    const handleClick = () => {
        setCurrentIndex((currentIndex+1 )% rooms.length);
    }
    const currentRoom = rooms[currentIndex];
    const postRoom = rooms[(currentIndex+1) % rooms.length];
    const lastRoom = rooms[(currentIndex+2)% rooms.length];

  return (
    <div className='font-poppins'>
        <div className="bg-amarelo-bloco w-screen h-[41.88rem]  flex flex-row justify-between">
                <div className='place-content-center w-96 h-full pl-20'>
                    <p className='font-bold text-[2.5rem] w-[26.6rem]'>50+ Beautiful rooms inspiration</p>
                    <p className='text-zinc-600 text-base font-medium leading-normal w-[368px]'>Our designer already made a lot of beautiful prototipe of rooms that inspire you</p>
                    <Link to={"/shop"}>
                    <button className='bg-amarelo-botoes mt-6 text-white text-base font-medium w-44 h-12'>Explore More</button>
                    </Link>
                </div>
                <div className='xl:w-[55rem] lg:w-[46rem] h-[36rem] flex flex-row justify-between my-auto'>
                    
                <div className={`h-[36rem] xl:w-96 lg:w-80 bg-cover ${currentRoom.image}  relative`}>
                    <div className='h-32 w-52 mb-6 ml-6 absolute place-content-center bg-white/75 backdrop-blur-sm bottom-1 text-center'>
                        <p className='text-zinc-600 text-base font-medium'>{currentRoom.title} </p> 
                        <p className="text-neutral-700 text-3xl font-semibold">{currentRoom.name}</p>
                    </div>
                    <button className="bg-amarelo-botoes absolute right-0 bottom-0 mr-[6.5rem] mb-6 text-white w-12 h-12"><svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#EFEFEF"><path d="M647-440H160v-80h487L423-744l57-56 320 320-320 320-57-56 224-224Z"/></svg></button>
                </div>
                <div className="xl:w-[25.25rem] md:w-[20rem] lg:w-[20rem] h-[36rem] ">
                        <div className={`w-full h-[30rem] ${postRoom.image} bg-cover relative`}>
                            <button className='h-12 w-12 rounded-full bg-white right-0 ml-2 top-1/2 absolute -translate-y-1/2 grid place-items-center' onClick={handleClick}> {/*Botao*/}
                                <i ><svg xmlns="http://www.w3.org/2000/svg" height="40px" viewBox="0 -960 960 960" width="40px" fill="#B88E2F"><path d="M521.33-480.67 328-674l47.33-47.33L616-480.67 375.33-240 328-287.33l193.33-193.34Z"/></svg></i>
                            </button>
                        </div>
                        <div className='pt-6 flex flex-row gap-6 my-auto'>
                          {rooms.map((_, index) => (
                          <div
                            key={index}
                            className={`h-7 w-7 rounded-full relative flex items-center justify-center transition-all duration-300 ${
                              index === currentIndex ? 'border-2 border-yellow-600 opacity-100' : 'opacity-70'
                            }`}
                          >
                            <div
                              className={`h-2.5 w-2.5 rounded-full transition-all duration-300 ${
                                index === currentIndex ? 'bg-yellow-700' : 'bg-zinc-300'
                              }`}
                            ></div>
                          </div>
                        ))}
                      </div>
                </div>
                    <div className={`${lastRoom.image} bg-cover w-12 h-[30rem]`}>
                    </div>
                </div>
            </div>
      
    </div>
  )
}

export default CategoryRooms
