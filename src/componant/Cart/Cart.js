import React from 'react';
import './Cart.css'

const Cart = ({ cart }) => {
    let total = 0;
    let shipingCharge = 0;
    let quantity = 0;
    for (const product of cart) {
        quantity = quantity + product.quantity;
        total = total + product.price * product.quantity;
        shipingCharge = shipingCharge + product.shipping;

    }
    const tax = total * 0.1;
    const grandTotal = (total + shipingCharge + tax).toFixed(0)
    return (
        <div className='cart-container'>
            <h2>this is cart container</h2>
            <p>Selected Items {quantity}</p>
            <p>Total Price ${total}</p>
            <p>Shiping Charge ${shipingCharge}</p>
            <p>Tax ${tax.toFixed(0)}</p>
            <h3>Grand Total ${grandTotal}</h3>
        </div>
    );
};

export default Cart;