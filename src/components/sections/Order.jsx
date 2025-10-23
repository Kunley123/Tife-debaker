import React, { createContext, useState, useContext } from "react"

const CartContext = createContext();


export const CartProvider = ({ children }) => {
    const [cartItems, setCartItems] = useState([])


    const addToCart = ({ product, price, quantity = 1 }) => {
        setCartItems((prevItems) => {
            const itemsArray = Array.isArray(prevItems) ? prevItems : [];
            const existingItem = itemsArray.find((item) => item.product === product);

            if (existingItem) {
                return itemsArray.map((item) =>
                    item.product === product ? { ...item, quantity: item.quantity + quantity, total: (item.quantity + quantity) * item.price, } : item
                )
            } else {
                const newItem = {
                    product, price, quantity, total: price * quantity,
                };
                return [...itemsArray, newItem]
            }
        })

    };

    const getTotalAmount = () => {
        return cartItems.reduce((total, item) => total + item.total, 0)
    }

    const removeFromCart = (product) => {
        setCartItems((prevItem) => prevItem.filter((item) => item.product !== product));
    }

    const decreaseQuantity = (product) => {
        setCartItems((prevItems) =>
            prevItems.map((item) => item.product === product ? { ...item, quantity: item.quantity - 1, total: (item.quantity - 1) * item.price } : item).filter((item) => item.quantity > 0))

    }

    const increaseQuantity = (product) => {
        setCartItems((prevItems) => prevItems.map((item) => item.product === product ? { ...item, quantity: item.quantity + 1, total: (item.quantity + 1) * item.price } : item))
    }

    const clearCart = () => setCartItems([])

    return (
        <CartContext.Provider value={{ cartItems, addToCart, clearCart, getTotalAmount, removeFromCart, decreaseQuantity, increaseQuantity }}>
            {children}
        </CartContext.Provider>
    );
};

export const useCart = () => useContext(CartContext);

