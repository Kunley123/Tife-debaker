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

    const clearCart = () => setCartItems([])

    return (
        <CartContext.Provider value={{ cartItems, addToCart, clearCart, getTotalAmount }}>
            {children}
        </CartContext.Provider>
    );
};

export const useCart = () => useContext(CartContext);

