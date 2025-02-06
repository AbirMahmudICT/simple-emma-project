import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faCartShopping } from '@fortawesome/free-solid-svg-icons'
import './Product.css';


const Product = (props) => {
    const { img, name, seller, price, stock } = props.product;
    return (
        <div className='product'>
            <div className="img">
                <img src={img} alt="" />
            </div>
            <div className="details">
                <h4>{name}</h4>
                <p><small>by: {seller}</small></p>
                <p>${price}</p>
                <p><small>Only {stock} left in Stock</small></p>
                <button className='button-main' onClick={()=>props.handleAddProduct(props.product)}><FontAwesomeIcon icon={faCartShopping} /> Add to Cart</button>
            </div>

        </div>
    );
};

export default Product;