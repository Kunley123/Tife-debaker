import { images } from '../../images.js'
import { Link } from 'react-router-dom'


export const Products = () => {

    return (
        <section id="product" className="md:min-h-screen flex items-center justify-center py-20">
            <div className="max-w-5xl mx-auto px-4">
                <h2 className="font-bold text-[#3e2c23] text-center text-3xl">Our Products</h2>

                <div className="grid grid-cols-4 sm:grid-cols-2 md:grid-cols-4 border my-4 p-4 rounded-lg hover:shadow-lg transition-shadow hover:shadow-lg hover:-translate-y-0.5 transition-all gap-2">
                    {images.map(image => {
                        return (

                            <div key={image.id} className="flex flex-col pb-2 bg-white/20 rounded whitespace-nowrap w-full justify-center items-center ">
                                <img src={image.src} className="" />
                                <h3 className="font-semibold text-[#3e2c23] md:text-lg">{image.name}</h3>
                                <p className="font-semibold md:text-lg text-[#6b5a4c] text-[6px] md:text-[14px]">{image.phrase}</p>

                                <Link to={image.link}>
                                    <button className="rounded-full mt-3 p-1 bg-[#e67e22] text-[#3e2c23] cursor-pointer text-white text-[8px] font-bold w-15 md:w-20 px-2 cursor-pointer">Order Now</button>
                                </Link>
                            </div>

                        )
                    })}

                </div>



            </div>
        </section >
    )
}
