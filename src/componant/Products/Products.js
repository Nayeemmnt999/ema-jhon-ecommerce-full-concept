import React from 'react';
import './Products.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee } from '@fortawesome/free-solid-svg-icons';

const Products = ({addToCart, product }) => {
    // console.log(props.product);
    const {name, img, seller, stock, ratings,price} = product;
    // const {addToCart} = props

    
    return (
        <div className='product'>
            <img src={img} alt="" />
            <div className="product-info">
                <p className="product-name">{name}</p>
                <p className='product-price'>Price ${price}</p>
                <p  className='product-seller'><small>Menufacturer : {seller}</small></p>
                <p  className='product-seller'><small >Ratings :{ratings}</small></p>
            </div>
            <button onClick={()=>addToCart(product)} className='btn-cart'>
                <p>add to cart</p>
                <FontAwesomeIcon icon ={faCoffee}></FontAwesomeIcon>
            </button>
        </div>
    );
};

export default Products;