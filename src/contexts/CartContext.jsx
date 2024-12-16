import { createContext, useContext, useState } from "react";
export const CartContext = createContext();
const prodFromLocalStorage = JSON.parse(localStorage.getItem('carrito')) || []
export const CartProvider = ({ children }) => {
    const [cart, setCart] = useState([])

    const addToCart = (item, quantity) => {
        if (isInCart(item.id)) {
            setCart(
                cart.map((prod) => {
                    if (prod.id === item.id) {
                        return { ...prod, cantidad: prod.cantidad + quantity }
                    } else {
                        return prod
                    }
                })
            )
        } else {
            setCart([...cart, { ...item, cantidad: quantity }])
        }
    }

    const changeToCart = (item, quantity) => {
        if (isInCart(item.id)) {
            setCart(
                cart.map((prod) => {
                    if (prod.id === item.id) {
                        return { ...prod, cantidad: quantity }
                    } else {
                        return prod
                    }
                })
            )
        } else {
            setCart([...cart, { ...item, cantidad: quantity }])
        }
    }

    const isInCart = (id) => {
        return cart.some((prod) => prod.id === id)
    }

    const quantity = (id) => {
        return cart.find((prod) => prod.id === id)?.cantidad ?? 0
    }

    const clear = () => {
        setCart([])
    }

    const removeItem = (id) => {
        setCart(cart.filter((prod) => prod.id !== id))
    }

    const cartQuantity = () => {
        return cart.reduce((acc, prod) => (acc += prod.cantidad), 0)
    }

    const cartTotal = () => {
        return cart.reduce((acc, prod) => (acc += prod.price * prod.cantidad), 0)
    }


    return (
        <CartContext.Provider value={{ cart, addToCart, clear, removeItem, cartQuantity, cartTotal, quantity, changeToCart }}>
            {children}
        </CartContext.Provider>
    )
}

export const useCart = () => useContext(CartContext)