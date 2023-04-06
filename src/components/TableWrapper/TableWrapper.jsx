import React from 'react'
import { Table } from 'semantic-ui-react'
import { useCartContext } from '../../context/CartContext'

const TableWrapper = (item) => {
    const { removeOfCart } = useCartContext()
    return (
        <Table.Row>
            <Table.Cell>{item.name}</Table.Cell>
            <Table.Cell>{item.quantity}</Table.Cell>
            <Table.Cell>{item.quantity * item.price}</Table.Cell>
            <Table.Cell>
                <button onClick={() => removeOfCart(item.id)}>
                    Quitar del carrito
                </button>
            </Table.Cell>
        </Table.Row>
    )
}
export default TableWrapper
