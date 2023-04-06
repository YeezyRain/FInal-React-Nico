import { createContext, useContext, useEffect, useState } from 'react'
import { db } from '../Firebase/firebase'

export const CartContext = createContext({})

export const useCartContext = () => useContext(CartContext)

export const CartProvider = ({ children }) => {
    const [cart, setCart] = useState([])
    const [database, setDatabase] = useState([])

    const clearCart = () => setCart([])

    const isInCart = (id) => cart.some((item) => item.id === id)

    const addToCart = (item, quantity) => {
        if (isInCart(item.id)) {
            const newCart = cart.map((cartElement) => {
                if (cartElement.id === item.id) {
                    return {
                        ...cartElement,
                        quantity: cartElement.quantity + quantity,
                    }
                } else return cartElement
            })
            setCart(newCart)
        } else {
            setCart((prev) => [...prev, { ...item, quantity }])
        }
    }

    const removeOfCart = (id) => {
        setCart(cart.filter((i) => i.id !== id))
    }

    const getItems = () => {
        const productos = []
        db.collection('items').onSnapshot((querySnapshot) => {
            querySnapshot.forEach((item) => {
                productos.push({ ...item.data(), id: item.id })
            })
            setDatabase(productos)
        })
    }

    useEffect(() => {
        getItems()
    }, [])

    return (
        <CartContext.Provider
            value={{
                cart,
                setCart,
                clearCart,
                addToCart,
                isInCart,
                removeOfCart,
                database,
            }}
        >
            {children}
        </CartContext.Provider>
    )
}
