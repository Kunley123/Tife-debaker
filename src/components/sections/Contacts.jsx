import { useState } from 'react'
import { useCart } from './Order.jsx'
import { useEffect } from 'react'
import emailjs from '@emailjs/browser'



export const Contacts = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        product: '',
        quantity: '',
        price: '',
        total: '',
        message: ''
    })


    // useEffect(() => {
    //     setFormData((prev) => {
    //         return {
    //             ...prev,
    //             total: prev.price && prev.quantity ? prev.price * prev.quantity : ""
    //         }
    //     })
    // }, [formData.price, formData.quantity])


    const { cartItems, clearCart, getTotalAmount } = useCart();

    const overallTotal = getTotalAmount()


    const handleSubmit = (e) => {

        e.preventDefault()
        // emailjs.sendForm(import.meta.env.VITE_SERVICE_ID, import.meta.env.VITE_TEMPLATE_ID, e.target, import.meta.env.VITE_PUBLIC_KEY).then((result) => {
        //     alert("Your Order Has Been Sent")
        //     setFormData({ name: '', email: '', product: '', quantity: '', price: '', total: '', message: '' })
        // }).catch(() => alert("Oops! Something Went Wrong, Please Try Again."))



        const orderDetails = cartItems.map((item, index) => `${index + 1}. ${item.product} - ₦${item.price} * ${item.quantity} = ₦${item.total}`).join("\n");

        const grandTotal = cartItems.reduce(
            (sum, item) => sum + Number(item.total), 0
        );


        const templateParams = {
            name: formData.name,
            email: formData.email,
            message: formData.message,
            orders: orderDetails,
            total: `₦${grandTotal.toLocaleString()}`
        }

        emailjs.send(import.meta.env.VITE_SERVICE_ID, import.meta.env.VITE_TEMPLATE_ID, templateParams, import.meta.env.VITE_PUBLIC_KEY).then((result) => {
            alert("Your Order Has Been Sent")
            clearCart()
        }).catch(() => alert("Oops! Something Went Wrong, Please Try Again."))


    }


    const handleNumberChange = (e) => {
        const value = e.target.value;
        if (!/^\d*\.?\d*$/.test(value)) return;
        setFormData({ ...formData, [e.target.name]: value });
    }

    return (
        <section id="contact" className="py-20 min-h-screen flex flex-col justify-center items-center">
            <div className="max-w-lg md:min-w-screen flex flex-col px-4">
                <h2 className="font-bold text-[#3e2c23] text-center text-3xl">Order/Get In Touch With Us</h2>
                <form className="space-y-6 border grid md:grid-cols-4 m-4 gap-2 rounded-lg p-4" onSubmit={handleSubmit}>

                    <div className="md:col-span-4 flex flex-col justify-center items-center border p-2 rounded-lg">
                        <h3 className="text-center font-bold text-[#e67e22] mb-2">Your Selected items</h3>
                        {Array.isArray(cartItems) && cartItems.length > 0 ? (
                            cartItems.map((item, index) => (
                                <div key={index} className="border-b mb-2 pb-2 w-full text-[#3e2c23]">
                                    <p>Product: {item.product}</p>
                                    <p>Price: ₦{item.price}</p>
                                    <p>Quantity: {item.quantity}</p>
                                    <p>Total: ₦{item.total}</p>
                                </div>))) : (<p>No items in cart</p>
                        )}
                        <h3 className="text-black font-bold">Overall Total:  ₦{overallTotal} </h3>

                    </div>

                    <div className="relative ">
                        <input type="text" id="name" name="name" required value={formData.name} className="w-full bg-black/5 border border-white/10 rounded px-4 py-3 text-black transition focus:outline-none  focus:border-black" placeholder="Name..." onChange={(e) => setFormData({ ...formData, name: e.target.value })} />
                    </div>
                    <div className="relative">
                        <input type="text" id="email" name="email" required value={formData.email} className="w-full bg-black/5 border border-white/10 rounded px-4 py-3 text-black transition focus:outline-none  focus:border-black" placeholder="example@gmail.com" onChange={(e) => setFormData({ ...formData, email: e.target.value })} />
                    </div>

                    <div className="relative">
                        <textarea type="text" id="name" name="message" required value={formData.message} className="w-full bg-black/5 border border-white/10 rounded px-4 py-3 text-black transition focus:outline-none  focus:border-black" placeholder="Your Message" onChange={(e) => setFormData({ ...formData, message: e.target.value })} />
                    </div>
                    <button type="submit" className="bg-[#e67e22] w-full h-10 md:h-12 overflow:hidden text-white cursor-pointer text-white text-[10px] font-bold text-[12px] rounded ">Submit</button>
                </form>

            </div>
        </section>
    )
}