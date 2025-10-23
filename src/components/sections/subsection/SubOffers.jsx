import { offers } from '../../../offer.js'
import { useCart } from '../Order.jsx'

export const Suboffer = () => {

    const { addToCart } = useCart();

    const handleAddProduct = (name, price, quantity) => {
        console.log("yes it clicked")
        const numPrice = parseFloat(price)
        const numQuantity = parseInt(quantity)
        const total = numPrice * numQuantity;
        addToCart({ product: name, price: numPrice, quantity: numQuantity, total });
        alert(`${quantity} ${name}(s) added to cart!`)
    }


    return (
        <section className="min-h-screen py-20 flex justify-center items-center">
            <div className="max-w-5xl mx-auto px-4 flex items-center justify-center flex-col">
                <h2 className="font-bold text-[#3e2c23] text-center text-3xl">Our Special Packages</h2>
                <div className="grid grid-cols-2 gap-4 mt-8 md:flex-col w-full">
                    {offers.map((offer) => (
                        <div className="w-full flex flex-col pb-2 bg-white/20 rounded whitespace-nowrap w-full justify-center items-center" key={offer.id}>
                            <img src={offer.src} className="w-full md:w-1/2 rounded-lg" />
                            <h1 className="font-semibold text-[#3e2c23] md:text-lg">{offer.name}</h1>
                            <p className="font-bold text-[#3e2c23] text-[12px]">{offer.price}</p>
                            <button className="rounded-full mt-3 p-1 bg-[#e67e22] text-[#3e2c23] cursor-pointer text-white text-[8px] font-bold w-15 md:w-20 px-2 cursor-pointer" onClick={() => handleAddProduct(offer.name, 15000, 1)}>Order</button>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}