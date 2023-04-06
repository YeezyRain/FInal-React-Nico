import Item from '../Item/Item';
import './ItemList.css';
import React from 'react';

const ItemList = ({items}) => {
  return (
    <>
      {items.map(item => (
				    <Item key={item.id} {...item} className='itemList'/>	
      ))}
    </>
  );
}

export default ItemList
