import { images } from '../../images.js'
import { Link } from 'react-router-dom'


export const Products = () => {

    return (
        <section id="product" className="min-h-screen flex items-center justify-center py-20">
            <div className="max-w-5xl mx-auto px-4">
                <h2 className="font-bold text-[#3e2c23] text-center text-3xl">Our Products</h2>
                <div className="grid grid-cols-1 md:grid-cols-1 gap-6">
                    <div className="border my-4 p-4 rounded-lg hover:shadow-lg transition-shadow flex flex-row hover:shadow-lg hover:-translate-y-0.5 transition-all gap-3">
                        {images.map(image => {
                            return (

                                <div key={image.id} className="flex flex-col justify-center items-center cursor-pointer">
                                    <img src={image.src} className="" />
                                    <h3 className="font-semibold text-[#3e2c23] md:text-lg">{image.name}</h3>
                                    <p className="font-semibold md:text-lg text-[#6b5a4c] text-[9px] md:text-[14px]">{image.phrase}</p>
                                    <p className="font-bold text-[#3e2c23] text-[12px]">{image.price}</p>
                                    <Link to={image.link}>
                                        <button className="rounded-full mt-3 p-1 bg-[#e67e22] text-[#3e2c23] cursor-pointer text-white text-[10px] font-bold w-20 px-2">Order Now</button>
                                    </Link>
                                </div>

                            )
                        })}

                    </div>
                </div>


            </div>
        </section >
    )
}
