import { json } from "react-router-dom";

const fakedata = (id) => {
    let shopingCart = {};
    const storedCart = localStorage.getItem('shoping-cart');
    if (storedCart) {
        shopingCart = JSON.parse(storedCart)
    }
    else {
        shopingCart = {};
    }
    const quantity = shopingCart[id];
    if (quantity) {
        const newQuantity = + quantity + 1;
        shopingCart[id] = newQuantity
        // localStorage.setItem(id, newQuantity)
    }
    else {
        // localStorage.setItem(id, 1)
        shopingCart[id] = 1;
    }
    localStorage.setItem('shoping-cart', JSON.stringify(shopingCart))

}
const getStoredCart = () => {
    let shopingCart = {};
    const storedCart = localStorage.getItem('shoping-cart');
    if (storedCart) {
        shopingCart = JSON.parse(storedCart)
    }
    return shopingCart;

}

const removeIdInCart = id => {
    const getStoredCart = localStorage.getItem('shoping-cart')
    if (getStoredCart) {
        const shopingCart = JSON.parse(getStoredCart)
        if (id in shopingCart) {
            delete shopingCart[id]
            localStorage.setItem('shoping-cart', JSON.stringify(shopingCart))
        }
    }
}
export {
    fakedata,
    getStoredCart,
    removeIdInCart
}