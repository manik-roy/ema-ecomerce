import React, { useState, useEffect } from 'react';
import ProductsItem from './ProductsItem';
import fakeData from '../../fakeData'
import Cart from '../Cart/Cart';
import { getDatabaseCart, addToDatabaseCart } from '../../utilities/databaseManager';

const Products = () => {
  const data = fakeData.slice(0,2);
  const [products, setProducts] = useState(data)
  const [cart, setCart] = useState([])

  // useEffect(()=>{
  //   const cartItem = getDatabaseCart()
  //   setCart(cartItem)
    
  // },[])
  
  const addItemToCart = product => {
    const updateCart = [...cart, product] 
    setCart(updateCart)
  }

  return (
    <>
    <div className="col-8">
      {products.map(item => <ProductsItem key={item.key} product={item} addItemToCart={addItemToCart} /> )}
    </div>
    <Cart cart={cart}  />
    </>
  );
};

export default Products;