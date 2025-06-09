
const Mosaico = () => {
  return (
    <div>
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
    </div>
  )
}

export default Mosaico
