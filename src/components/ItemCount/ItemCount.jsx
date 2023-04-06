import React, { useState } from 'react';
import './ItemCount.css';

const ItemCount = ({ stock, onAdd }) => {
  const [toAdd, setToAdd] = useState(stock ? 1 : 0);
  return (
    <div style={{ fontSize: 20, display: 'flex', flexDirection: 'column' }}>
      <div>
        <button className='botonesCantidad' onClick={() => setToAdd(toAdd - 1 ? toAdd - 1 : toAdd)}>-</button>
        <span>{toAdd}</span>
        <button className='botonesCantidad' onClick={() => setToAdd(toAdd === stock ? toAdd : toAdd + 1)}> +</button >
      </div>
      <button onClick={() => onAdd(toAdd)}>Añadir al carrito</button>
    </div >
  )
}

export default ItemCount
