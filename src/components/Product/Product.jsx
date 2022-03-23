import React from 'react';
import './Product.css';

const Product = (props) => {
    const { product, handleAddToCart } = props;
    const { category, img, name, price, ratings, seller } = product;
    return (
        <div className='product-area'>
            <div className="img-wrapper">
                <img src={img} alt="" />
            </div>
            <div className="product product-title">
                <h3>{name}</h3>
                <h4>Price: ${price}</h4>
            </div>
            <div className="product product-body">
                <p>Category: {category}</p>
                <p>Seller: {seller}</p>
                <p>Ratings: {ratings}</p>
            </div>
            <button onClick={() => { handleAddToCart(product) }} className='btn btn-cart'>Add to Cart</button>


        </div>
    );
};

export default Product;