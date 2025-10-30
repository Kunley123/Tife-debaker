import { cakes } from '../../cakes.js'
import { useCart } from './Order.jsx'

export const Cakes = () => {

    const { addToCart } = useCart();

    const handleAddProduct = (name, price, quantity) => {
        const numPrice = parseFloat(price)
        const numQuantity = parseInt(quantity)
        const total = numPrice * numQuantity;
        addToCart({ product: name, price: numPrice, quantity: numQuantity, total });
        alert(`${quantity} ${name}(s) added to cart!`)
    }


    return (
        <section id="cake" className=" min-h-screen flex items-center justify-center py-20">
            <div className="max-w-5xl mx-auto px-4">
                <h3 className="text-center font-bold text-3xl text-[#3e2c23]">Cake Varieties</h3>
                <div className="grid grid-cols-4 border w-full my-5 border-[#6b5a4c]  w-145 md:w-200 md:grid-cols-5 justify-center  ">
                    {cakes.map((cake) => {
                        return (

                            <div key={cake.id} className="flex p-2 w-full md:p-4 flex-col justfiy-center border border-[#6b5a4c] items-center">
                                <img src={cake.src} className="h-35 w-30 md:h-45 md:w-40" />
                                <h1 className="font-semibold text-[12px] md:text-lg">{cake.name}</h1>
                                <p className="font-bold text-[12px] text-[#6b5a4c]">{`₦${cake.price}`}</p>
                                <button className="rounded-full mt-3 p-1 bg-[#e67e22] text-[#3e2c23] cursor-pointer text-white text-[10px] font-bold w-20 px-2" onClick={() => handleAddProduct(cake.name, cake.price, 1)}>Order</button>
                            </div>

                        )
                    })}

                </div>
            </div>
        </section>

    )


} 