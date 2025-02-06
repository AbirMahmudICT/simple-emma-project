import React from 'react';

const Cart = (props) => {
    const cart = props.cart;
    console.log(cart)
    // const total = cart.reduce((total, pd)=> total = total+pd.price,0)
    let total = 0;
    let shipping =0;
    let tax = 0;
    let grandTotal = 0;
    for(let i=0; i < cart.length; i++){
        const product = cart[i];
        // if(product.price>100){
        //     shipping = shipping + 20;
        // }else if(product.price>50){
        //     shipping = shipping + 10;
        // }else if(product.price>10){
        //     shipping = shipping + 5;
        // }
        shipping = shipping + product.shipping;
        total = total+product.price;
        tax = (total/10)
        grandTotal =total+tax+shipping;
        
    }
    function str(pd){
        const decimal = pd.toFixed(2); //if we use toFixed function then the value convert to string so we again convert it number by Number function.
        return Number(decimal);
    }
    return (
        <div>
            <p>Order Summery :{cart.length}</p>
            <p>Product Price: {str(total)}</p>
            <p>Shipping: {str(shipping)}</p>
            <p>Tax: {str(tax)}</p>
            <h4>Grand Total: {str(grandTotal)}</h4>

        </div>
    );
};

export default Cart;