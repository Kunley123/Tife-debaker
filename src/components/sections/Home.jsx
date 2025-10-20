import cakeImg from '../../assets/images/IMG_0836.PNG'



export const Home = () => {
    return (
        <section id="home" className="md:min-h-screen flex items-center justify-center py-20 relaive">
            <div className="flex flex-col justify-center overflow-hidden max-w-screen  mx-4 items-center ">
                <div className="text-center items-center w-full justify-center flex flex-rows-2 px-4">
                    <div className="flex flex-col items-center w-full md:max-w-lg justify-center text-center">
                        <h1 className="text-2xl md:text-5xl text-[#3e2c23] font-bold mb-6 "> Freshly Baked Happiness Everyday</h1>
                        <a href="#product"><button className="rounded-full mt-3 p-1 bg-[#e67e22] text-[#3e2c23] cursor-pointer text-white text-[10px] font-bold w-25 px-2">ORDER NOW</button></a>
                    </div>
                    <img src={cakeImg} alt="cake" className="w-[160px] md:w-[400px] pt-4 object-cover mb-12" />
                </div>
                <p className="text-2xl md:text-5xl animate-moveRight text-[#3e2c23] font-bold mb-6">Welcome To My Cake Shop. Freshly Baked everyday. Make Your Choice Now!</p>
            </div>

        </section>


    )
} 