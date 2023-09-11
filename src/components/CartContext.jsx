import React, {createContext, useContext, useState} from "react";

const CartContext = createContext();

export const useCart = () => {
    return useContext(CartContext);
};

export const CartProvider = ({children}) => {
    const [cart, setCart] = useState([]);

    const addToCart = (product) => {
        setCart([...cart, product]);
    }

    const deleteProductCart = (productName) => {
        const updatedCart = cart.filter((product) => product.title !== productName);
        setCart(updatedCart);
    };

    return (
        <CartContext.Provider value={{ cart, addToCart, deleteProductCart}}>
            {children}
        </CartContext.Provider>
    );
}

