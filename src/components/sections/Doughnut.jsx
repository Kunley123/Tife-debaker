import doughnut1 from '../../assets/doughnutImages/PWAH1899.JPG'
import doughnut2 from '../../assets/doughnutImages/RJXY3124.JPG'
import doughnut3 from '../../assets/doughnutImages/TPZV0786.JPG'
import { useCart } from './Order.jsx'
import { nanoid } from 'nanoid'



export const Doughnuts = () => {

    const doughPrice = {

        doughnut1: {

            name: 'doughnut1',
            price: 4500,
            id: nanoid()
        },

        doughnut2: {

            name: 'doughnut2',
            price: 8000,
            id: nanoid()
        },


        doughnut3: {

            name: 'doughnut3',
            price: 4000,
            id: nanoid()
        }
    }

    const { addToCart } = useCart();

    const handleAddProduct = (name, price, quantity) => {

        const numPrice = parseFloat(price)
        const numQuantity = parseInt(quantity)
        const total = numPrice * numQuantity;
        addToCart({ product: name, price: numPrice, quantity: numQuantity, total });
        alert(`${quantity} ${name}(s) added to cart!`)
    }



    return (
        <section className="py-20 min-h-screen flex justify-center items-center">
            <div className="flex justify-center items-center flex-col gap-5">
                <h1 className="font-bold text-[#3e2c23] text-center text-3xl">Tasty And Creamy Dough</h1>
                <div className="flex flex-row justify-center items-center gap-4 mx-5 border p-4 rounded-lg hover:shadow-lg transition-shadow hover:-translate-y-0.5 transition-all">
                    <div className="text-center">
                        <h3 className="font-semibold md:text-lg">Chocolate Doughnut (4 set)</h3>
                        <img src={doughnut1} className="w-100 h-100 hover:h-102 cursor-pointer" />
                        <p className="font-bold text-[#3e2c23] text-[16px]">{`₦${doughPrice.doughnut1.price}`}</p>
                        <button className="rounded-full mt-3 p-1 bg-[#e67e22] text-[#3e2c23] cursor-pointer text-white text-[10px] font-bold w-20 px-2" onClick={() => { handleAddProduct(doughPrice.doughnut1.name, doughPrice.doughnut1.price, 1) }}>Order</button>
                    </div>
                    <div className="flex flex-col gap-5">
                        <div className="text-center">
                            <h3 className="font-semibold md:text-lg">Chocolate Doughnut (6 set)</h3>
                            <img src={doughnut2} className="h-60 w-70 cursor-pointer hover:translate-y-1" />
                            <p className="font-bold text-[#3e2c23] text-[16px]">{`₦${doughPrice.doughnut2.price}`}</p>
                            <button className="rounded-full mt-3 p-1 bg-[#e67e22] text-[#3e2c23] cursor-pointer text-white text-[10px] font-bold w-20 px-2" onClick={() => { handleAddProduct(doughPrice.doughnut2.name, doughPrice.doughnut2.price, 1) }}>Order</button>
                        </div>

                        <div className="text-center">
                            <h3 className="font-semibold md:text-lg">Milky Doughnut (3 set)</h3>
                            <img src={doughnut3} className="h-60 w-70 cursor-pointer hover:translate-y-1" />
                            <p className="font-bold text-[#3e2c23] text-[16px]">{`₦${doughPrice.doughnut3.price}`}</p>
                            <button className="rounded-full mt-3 p-1 bg-[#e67e22] text-[#3e2c23] cursor-pointer text-white text-[10px] font-bold w-20 px-2" onClick={() => { handleAddProduct(doughPrice.doughnut3.name, doughPrice.doughnut3.price, 1) }}>Order</button>
                        </div>
                    </div>
                </div>

            </div>
        </section>
    )
}