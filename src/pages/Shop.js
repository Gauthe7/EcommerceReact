import React from 'react'
import { PRODUCTS } from './Products'
import Product from './Product'
import View from './View'


function Shop() {
  return (
    <>
      <div className='shop'></div>
      <div className='shoptitle'> <h1>TECH CART</h1> </div>
      <div className='products'> {PRODUCTS.map((product)=>(<Product data={product}></Product>))}</div>
      












    </>
  )
}

export default Shop