import React from 'react';
import './cartInformation.css'
const CartInformation = ({ product, removeFormCart }) => {
    console.log(product);
    const {id, name, img, quantity, price } = product;
    return (
        <div className='mian-container'>

            <img className=' w-24' src={img} alt="" />


            <div className='review-container'>
                <div>
                    <p>{name}</p>
                    <p><small> Price: {price}</small></p>
                    <p><small>Quantity {quantity}</small></p>

                </div>
                <div>
                    <button onClick={()=>removeFormCart(id)} className=' bg-red-700 p-2 rounded text-cyan-50'>Delet</button>
                </div>

            </div>



        </div>
    );
};

export default CartInformation;