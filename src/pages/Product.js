import React from 'react'
import { Link } from 'react-router-dom';
import '../Nav.css'
import { useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { PRODUCTS } from './Products';
import View from './View';


function Product(props) {

    // const navi = useNavigate()
  function gotoview  (datapass){
        // navi(`/views/:${id}`)


    }

    const { id, productName, price, productImage } = props.data;

    return (
        <>
            <div className="product ">
                <div className='img'> <img src={productImage} /></div >
                <div className="description">
                    <p>
                        <b>{productName}</b>
                    </p>
                    <p> ${price}</p>
                </div>
                <Link to={`/views/:${id}`}  >
                    <button className="addToCartBttn" onClick={(() =>{ gotoview(props.data.id)}
                        )} >
                        View Product
                        
                    </button>
                </Link >


            </div>
        </>
    )
}

export default Product