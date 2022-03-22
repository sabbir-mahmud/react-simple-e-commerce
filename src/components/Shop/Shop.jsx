import React, { useEffect } from 'react';
import Product from '../Product/Product';
import './Shop.css';

const Shop = () => {
    const [products, setProducts] = React.useState([]);
    useEffect(() => {
        fetch('products.json')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [])
    return (
        <div className='container shop-body'>
            <div className="product-container">
                {products.map(product => <Product key={product.id} product={product}></Product>)}
            </div>
            <div className="cart-container">
                <h3>Cart Area:</h3>
            </div>



        </div>
    );
};

export default Shop;