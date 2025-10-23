import offerOne from '../../assets/OfferImages/XSZN2673.JPG'
import offerTwo from '../../assets/OfferImages/GTZX8882.JPG'
import { Link } from 'react-router-dom'


export const Offer = () => {

    return (
        <section id="product" className="md:min-h-screen flex items-center justify-center overflow-hidden py-20">
            <div className="mx-auto px-4">
                <h2 className="font-bold text-[#3e2c23] text-center text-3xl">Special Packages</h2>
                <div className="flex flex-row  md:flex-row gap-2 items-center justify-cnter w-full">
                    <Link smooth to="/suboffer"> <div className="border cursor-pointer items-center w-full my-4 p-4 rounded-lg hover:shadow-lg transition-shadow md:flex-row flex-1 flex flex-col hover:shadow-lg hover:-translate-y-0.5 transition-all gap-3">
                        <div className="flex flex-col items-center justify-center">
                            <h1 className="text-[#3e2c23] font-bold whitespace-nowrap md:text-[20px]">Today's Special</h1>
                            <p className="font-semibold md:text-lg text-[#6b5a4c] text-[9px] md:text-[16px]">You are so lucky!</p>
                        </div>
                        <img src={offerOne} alt="Today's Special" className="w-full h-auto rounded-lg object-cover sm:w-1/2 sm:h-48 md:w-1/3" />
                    </div>
                    </Link>

                    <Link smooth to="/suboffer"> <div className="border cursor-pointer items-center w-full my-4 p-4 rounded-lg hover:shadow-lg transition-shadow md:flex-row flex-1 flex flex-col hover:shadow-lg hover:-translate-y-0.5 transition-all gap-3">
                        <div className="flex flex-col items-center justify-center">
                            <h1 className="text-[#3e2c23] font-bold whitespace-nowrap md:text-[20px]">Combo Packages</h1>
                            <p className="font-semibold md:text-lg text-[#6b5a4c] text-[9px] md:text-[16px]">Enjoy a special discount</p>
                        </div>
                        <img src={offerTwo} alt="Combo Packages" className="w-full sm:w-1/2 sm:h-48 h-auto object-cover rounded-lg md:w-1/3" />
                    </div>
                    </Link>
                </div>
            </div>
        </section >
    )
}
