import { crunchies } from './../../crunchy.js'
import { useCart } from './Order.jsx'


export function Crunchies() {

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
        <section id="crunchy" className="min-h-screen flex items-center justify-center py-20">
            <div className="max-w-5xl mx-auto px-4">
                <h3 className="text-center font-bold text-3xl text-[#3e2c23]">Crunchy Chinchin</h3>
                <div className="grid grid-cols-4 my-5 w-145 md:w-200 md:grid-cols-5 justify-center">
                    {crunchies.map((crunchy) => {
                        return (
                            <div key={crunchy.id} className="flex py-4 hover:bg-white md:p-4 flex-col justfiy-center items-center">
                                <img src={crunchy.src} className="h-45 w-35 md:h-45 md:w-40" />
                                <h1 className="font-semibold md:text-lg">{crunchy.name}</h1>
                                <p className="font-bold text-[12px] text-[#6b5a4c]">{crunchy.price}</p>
                                <button className="rounded-full mt-3 p-1 bg-[#fa8072] text-[#3e2c23] cursor-pointer text-white text-[10px] font-bold w-20 px-2" onClick={() => handleAddProduct(crunchy.name, crunchy.price, 1)}>Order</button>
                            </div>
                        )
                    }
                    )}
                </div>
            </div>
        </section>
    )

}