import React from 'react';

const Cart = ({ carts }) => {
    let quantity = 0;
    let totalPrice = 0;
    let shipping = 0;
    carts.forEach(cart => {
        quantity += cart.quantity;
        totalPrice += cart.price * cart.quantity;
        shipping += cart.shipping;
    });
    return (
        <div className='cart'>
            <h1>Cart</h1>
            <h3>Total Selected Product: {quantity}</h3>
            <h3>Total Price: ${totalPrice}</h3>
            <h3>Shipping : ${shipping}</h3>
        </div>
    );
};

export default Cart;