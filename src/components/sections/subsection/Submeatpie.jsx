import { meatpies } from '../../../meatpie.js'
import { useCart } from '../Order.jsx'


export const Submeatpie = () => {

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
        <section id="cake" className=" min-h-screen mx-4 flex items-center justify-center py-20">
            <div className="max-w-5xl mx-auto px-4">
                <h3 className="text-center font-bold text-3xl text-[#3e2c23]">Meatpie Varieties</h3>
                <div className="grid grid-cols-4 w-full max-w-[100%] my-5 bo border-[#6b5a4c] gap-1 w-145 md:w-200 md:grid-cols-5 justify-center  ">
                    {meatpies.map((meatpie) => {
                        return (

                            <div key={meatpie.id} className="flex py-4 md:p-4 flex-col justfiy-center cursor-pointer hover:translate-y-1 hover:border hover:rounded hover:shadow-lg items-center">
                                <img src={meatpie.src} className="h-30 w-full object-cover md:h-42 md:w-40 rounded" />
                                <h1 className="font-semibold text-[12px] md:text-lg">{meatpie.name}</h1>
                                <p className="text-[8px]">₦1000 per one</p>
                                <button className="rounded-full mt-3 p-1 bg-[#e67e22] text-[#3e2c23] cursor-pointer text-white text-[10px] font-bold w-15 md:w-20 px-2" onClick={() => handleAddProduct(meatpie.name, 1000, 1)}>Order</button>
                            </div>

                        )
                    })}

                </div>
            </div>
        </section>

    )


} 