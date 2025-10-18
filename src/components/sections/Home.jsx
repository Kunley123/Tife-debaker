import cakeImg from '../../assets/images/IMG_0836.PNG'



export const Home = () => {
    return (
        <section id="home" className="min-h-screen flex items-center justify-center relaive">
            <div className="flex flex-col justify-center overflow-hidden max-w-screen  mx-4 items-center min-h-screen">
                <div className="text-center   items-center justify-center flex flex-row px-4">
                    <div className="flex flex-col items-center md:max-w-lg justify-center text-center">
                        <h1 className="text-5xl md:text:7xl text-[#3e2c23] font-bold mb-6 "> Freshly Baked Happiness Everyday</h1>
                        <a href="#product"><button className="rounded-full mt-3 p-1 bg-[#e67e22] text-[#3e2c23] cursor-pointer text-white text-[10px] font-bold w-35 px-2">ORDER NOW</button></a>
                    </div>
                    <img src={cakeImg} alt="cake" className="w-80 pt-4 md:max-w-lg mb-12" />
                </div>
                <p className="text-5xl md:text:7xl animate-moveRight text-[#3e2c23] font-bold mb-6">Welcome To My Cake Shop. Freshly Baked everyday. Make Your Choice Now!</p>
            </div>

        </section>


    )
} 