import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHouse } from '@awesome.me/kit-KIT_CODE/icons/classic/solid'
import './Product.css';


const Product = (props) => {
    console.log(props.product);
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
                <button className='button-main'><FontAwesomeIcon icon={faHouse} />Add to Cart</button>
            </div>

        </div>
    );
};

export default Product;