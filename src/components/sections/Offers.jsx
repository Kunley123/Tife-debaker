import offer1 from '../../assets/OfferImages/XSZN2673.JPG'
import offer2 from '../../assets/OfferImages/GTZX8882.JPG'
import { Link } from 'react-router-dom'


export const Offer = () => {

    return (
        <section id="product" className="min-h-screen flex items-center justify-center py-20">
            <div className="mx-auto px-4">
                <h2 className="font-bold text-[#3e2c23] text-center text-3xl">Special Offers</h2>
                <div className="flex flex-row gap-2">
                    <div className="border cursor-pointer items-center my-4 p-4 rounded-lg hover:shadow-lg transition-shadow md:flex-[2] flex-1 flex flex-row hover:shadow-lg hover:-translate-y-0.5 transition-all gap-3">
                        <div>
                            <h1 className="text-[#3e2c23] font-bold whitespace-nowrap md:text-[20px]">Today's Special</h1>
                            <p className="font-semibold md:text-lg text-[#6b5a4c] text-[9px] md:text-[16px]">You are so lucky!</p>
                        </div>
                        <img src={offer1} className="w-30 h-30 rounded-lg md:w-50 md:h-50" />
                    </div>
                    <div className="border cursor-pointer items-center my-4 p-4 rounded-lg hover:shadow-lg transition-shadow md:flex-[2] flex-1 flex flex-row hover:shadow-lg hover:-translate-y-0.5 transition-all gap-3">
                        <div>
                            <h1 className="text-[#3e2c23] font-bold whitespace-nowrap md:text-[20px]">Combo Packages</h1>
                            <p className="font-semibold md:text-lg text-[#6b5a4c] text-[9px] md:text-[16px]">Enjoy a special discount</p>
                        </div>
                        <img src={offer2} className="w-30 h-30 rounded-lg md:w-50 md:h-50" />
                    </div>
                </div>
            </div>
        </section >
    )
}
