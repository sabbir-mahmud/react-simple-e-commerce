import React, { useState, useEffect } from 'react';
import Cart from '../Cart/Cart';
import Product from '../Product/Product';
import { addToDb, getShoppingCart } from '../../utilities/fakedb';
import './Shop.css';

const Shop = () => {
    // product and cart list 
    const [products, setProducts] = useState([]);
    const [carts, setCart] = useState([]);
    const [cart, setCarts] = useState([])

    // fetch data from DataBase
    useEffect(() => {
        fetch('products.json')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, []);

    // get stored cart data from local storage
    useEffect(() => {
        const storedCart = getShoppingCart()
        const newCart = [];
        for (const id in storedCart) {
            const addedCart = products.find(product => product.id === id);
            if (addedCart) {
                addedCart.quantity = storedCart[id];
                newCart.push(addedCart)
            }
        };
        setCart(newCart);
    }, [products, cart]);


    // handle product add to cart
    const handleAddToCart = (product) => {
        addToDb(product.id);
        setCarts(cart => [...cart, product]);
    };


    return (
        <div className='container shop-body'>
            <div className="product-container">
                {products.map(product => <Product
                    key={product.id}
                    product={product}
                    handleAddToCart={handleAddToCart} ></Product>)}
            </div>
            <div className="cart-container">
                <Cart carts={carts}></Cart>
            </div>
        </div>
    );
};

export default Shop;