import { getStoredCart } from "../../componant/Database/Database";

export const LoadApi = async () => {
    const apiData = await fetch('products.json');
    const products = await apiData.json();
    // console.log(products);

    const saveCart = getStoredCart();
    // console.log(saveCart);
    const previousCart =[]
    for (const id in saveCart) {
        const addedProduct = products.find(product => product.id === id);
        if(addedProduct){
            const quantity = saveCart[id];
            // console.log(quantity);
            addedProduct.quantity = quantity;
            previousCart.push(addedProduct)
        }
    }

    return {products, previousCart};
}