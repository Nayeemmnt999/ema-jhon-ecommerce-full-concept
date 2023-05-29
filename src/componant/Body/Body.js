import React, { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';
import { fakedata, getStoredCart } from '../Database/Database';
import Products from '../Products/Products';
import './Body.css'
import { Link, useLoaderData } from 'react-router-dom';

const Body = () => {
    // const products = useLoaderData();
    // console.log(products);
    const {products} = useLoaderData()
    const [cart, setCart] = useState([])

    // get cart
    useEffect(() => {

        const storedCart = getStoredCart();
        const saveCart = [];
        for (const id in storedCart) {
            const getProduct = products.find(product => product.id === id);
            if (getProduct) {
                const quantity = storedCart[id];
                getProduct.quantity = quantity;
                saveCart.push(getProduct)
                // console.log(getProduct);
            }
        }
        setCart(saveCart)
    }, [products])
    const addToCart = (selectedProducts) => {
        // console.log(products);
        let newCart = [];
        const exist = cart.find(product => product.id === selectedProducts.id);
        if (!exist) {
            selectedProducts.quantity = 1;
            newCart = [...cart, selectedProducts];
        }
        else {
            const rest = cart.filter(product => product.id !== selectedProducts.id);
            exist.quantity = exist.quantity + 1;
            newCart = [...rest, exist]
        }
        setCart(newCart);
        fakedata(selectedProducts.id)
    }
    return (
        <div className='main-contianer'>
            <div className="shop-container">
                {
                    products.map(product => <Products
                        key={product.id}
                        product={product}
                        addToCart={addToCart}
                    ></Products>)
                }
            </div>
            <div className="cart-container">
                <Cart cart={cart}></Cart>
                <Link to={'/order'}>Maneg order</Link>
            </div>
        </div>
    );
};

export default Body;