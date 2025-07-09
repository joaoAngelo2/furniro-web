import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const rooms = [
  {
    title: 'Bedroom',
    name: 'Inner Peace',
    image: 'bg-inner-peace',
    to: '/shop/bedroom',
  },
  {
    title: 'Dining Room',
    name: 'Classic Comfort',
    image: 'bg-beatiful-room-2',
    to: '/shop/dining',
  },
  {
    title: 'Living Room',
    name: 'Modern Elegance',
    image: "bg-[url('https://furniro-web.s3.us-east-2.amazonaws.com/assets/70655e8b25a06a33769af9bf5fe8f8ed81ce75d8.png')]",
    to: '/shop/living',
  },
];

const CategoryRooms = () => {
  const [currentIndex, setCurrentIndex] = useState<number>(0);

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % rooms.length);
  };

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % rooms.length);
    }, 5000);

    return () => clearInterval(timer);
  }, []);

  const currentRoom = rooms[currentIndex];
  const postRoom = rooms[(currentIndex + 1) % rooms.length];
  const lastRoom = rooms[(currentIndex + 2) % rooms.length];

  return (
    <div className="font-poppins">
      <div className="bg-amarelo-bloco w-full flex flex-col lg:flex-row justify-between px-4 py-8 gap-6">
        <div className="w-full lg:w-2/4 flex flex-col justify-center px-2 md:px-6 lg:pl-20 text-center items-center lg:items-start lg:text-start place-content-center">
          <p className="font-bold text-[2rem] lg:text-[2.5rem] w-full max-w-md leading-tight">
            50+ Beautiful rooms inspiration
          </p>
          <p className="text-zinc-600 text-base font-medium leading-normal max-w-[368px] mt-4">
            Our designer already made a lot of beautiful prototipe of rooms that inspire you
          </p>
          <Link to="/shop">
            <button className="bg-amarelo-botoes mt-6 text-white text-base font-medium w-44 h-12">
              Explore More
            </button>
          </Link>
        </div>

        {/* Cards */}
        <div className="w-full flex flex-col md:flex-row lg:flex-row md:justify-between">
          
          {/* Card Principal */}
          <div
            className={`relative h-[36rem] w-full lg:w-2/5 bg-cover ${currentRoom.image}`}
            aria-label={`Room category: ${currentRoom.title}`}
          >
            <div className="h-32 w-48 xl:w-52 mb-6 ml-6 absolute md:block place-content-center bg-white/75 backdrop-blur-sm bottom-1 text-center">
              <p className="text-zinc-600 text-base font-medium">{currentRoom.title}</p>
              <p className="text-neutral-700 text-3xl font-semibold">{currentRoom.name}</p>
            </div>
            <Link to={currentRoom.to}>
              <button
                className="bg-amarelo-botoes absolute right-0 bottom-0 mr-4 mb-1 -translate-y-1/2 place-items-center text-white w-12 h-12 grid"
                aria-label={`Go to ${currentRoom.title} shop`}
              >
                <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#EFEFEF">
                  <path d="M647-440H160v-80h487L423-744l57-56 320 320-320 320-57-56 224-224Z" />
                </svg>
              </button>
            </Link>
          </div>

          <div className="flex flex-col justify-start h-[36rem] lg:w-2/4 w-full md:w-[45%]">
            <div className={`w-full h-[30rem] bg-cover relative ${postRoom.image}`}>
              <button
                className="h-12 w-12 rounded-full bg-white right-0 ml-2 top-1/2 absolute -translate-y-1/2 grid place-items-center"
                onClick={handleNext}
                aria-label="Next room"
              >
                <svg xmlns="http://www.w3.org/2000/svg" height="40px" viewBox="0 -960 960 960" width="40px" fill="#B88E2F">
                  <path d="M521.33-480.67 328-674l47.33-47.33L616-480.67 375.33-240 328-287.33l193.33-193.34Z" />
                </svg>
              </button>
            </div>
            <div className="pt-6 flex flex-row gap-6 justify-center">
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

          <div
            className={`hidden lg:block ${lastRoom.image} bg-cover w-1/12 h-[30rem]`}
            aria-label={`Room preview: ${lastRoom.title}`}
          />
        </div>
      </div>
    </div>
  );
};

export default CategoryRooms;
