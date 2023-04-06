import React from 'react'
import { Link } from 'react-router-dom'
import './ItemDetailed.css'
import { useCartContext } from '../../context/CartContext'
import ItemCount from '../ItemCount/ItemCount'

const ItemDetailed = ({ item }) => {
    const { addToCart } = useCartContext()
    const onAdd = (qty) => addToCart(item, qty)
    const { cart } = useCartContext()

    return (
        <div className="itemDetailed">
            <img
                src={item.image}
                alt="Foto del producto"
                className="fotoProducto"
            />
            <h1 className="name">{item.name}</h1>
            <h2 className="price">${item.price}</h2>
            <p className="description">{item.description}</p>
            <div className="count">
                {item.stock > 0 && (
                    <ItemCount onAdd={onAdd} stock={item.stock} />
                )}
            </div>
            <div className="finish">
                {cart.length > 0 ? (
                    <Link to="/cart" className="finish">
                        <button>Terminar compra</button>
                    </Link>
                ) : null}
            </div>
        </div>
    )
}

export default ItemDetailed
