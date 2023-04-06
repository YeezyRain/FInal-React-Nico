import React from 'react'
import { Link,} from 'react-router-dom'
import { useCartContext } from '../../context/CartContext'
import { Table } from 'semantic-ui-react'
import TableWrapper from '../TableWrapper/TableWrapper'
import './Cart.css'

const Cart = () => {
    const { cart, clearCart } = useCartContext()

    if (!cart.length) return <return to="/" />

    let suma = 0
    cart.map((cartElement) => {
        suma += cartElement.price * cartElement.quantity
        return suma
    })

    return (
        <div className="tabla">
            <Table celled>
                <Table.Header>
                    <Table.Row>
                        <Table.HeaderCell>Producto</Table.HeaderCell>
                        <Table.HeaderCell>Cantidad</Table.HeaderCell>
                        <Table.HeaderCell>Precio</Table.HeaderCell>
                        <Table.HeaderCell>Accion</Table.HeaderCell>
                    </Table.Row>
                </Table.Header>
                <Table.Body>
                    {cart.map((item) => (
                        <TableWrapper {...item} key={item.id} />
                    ))}
                </Table.Body>
            </Table>
            <p className="monto">{`El monto total a abonar por su compra es de: $ ${suma}`}</p>
            <button onClick={clearCart}>Vaciar carrito</button>
            <Link to="/checkout">
                <button>Ir al pago</button>
            </Link>
        </div>
    )
}

export default Cart
