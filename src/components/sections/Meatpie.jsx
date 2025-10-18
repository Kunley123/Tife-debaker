import { meatpies } from './../../meatpie.js';
import { Link } from 'react-router-dom'


export const Meatpies = () => {
    return (
        <section id="meatpie" className="flex items-center justify-center min-h-sreen py-20">
            <div className="mx-auto px-4 flex flex-col items-center">
                <h1 className="text-center font-bold text-3xl text-[#3e2c23]">Meatpies</h1>
                <div className="relative w-150 h-100 m-5 overflow-hidden">
                    {meatpies.map((meatpie, index) => {
                        return (
                            <img key={meatpie.id} src={meatpie.src} className="absolute inset-0 rounded-lg w-full h-full obbject-cover opacity-0 animate-fadeSlide" style={{ animationDelay: `${index * 5}s` }} />
                        )
                    })}
                </div>
                <Link to={"/submeatpies"}>
                    <button className="rounded-full mt-3 p-1 bg-[#fa8072] text-[#3e2c23] cursor-pointer text-white text-[10px] font-bold w-20 px-2">More</button>
                </Link>
            </div>
        </section>
    )
}