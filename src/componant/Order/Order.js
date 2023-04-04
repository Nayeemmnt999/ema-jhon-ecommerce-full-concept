import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import Cart from '../Cart/Cart';
import CartInformation from './CartInformation';
import { removeIdInCart } from '../Database/Database';

const Order = () => {
    const { products, previousCart } = useLoaderData();
    // console.log(products);
    const [cart, setCart] = useState(previousCart)

    const removeFormCart = (id) => {
        const removeCart = cart.filter(product => product.id !== id)
        setCart(removeCart)
        removeIdInCart(id)
    }
    return (
        <div className='main-contianer'>
            <div className="order-container ">
                {
                    cart.map(product => <CartInformation
                        key={product.id}
                        product={product}
                        removeFormCart={removeFormCart}
                    ></CartInformation>)
                }
            </div>
            <div className="cart-container">
                {/* <Cart cart={cart}></Cart> */}
                <Cart cart={cart}></Cart>
            </div>
        </div>
    );
};

export default Order;