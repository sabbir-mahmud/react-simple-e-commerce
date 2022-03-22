import React from 'react';
import './Product.css';

const Product = (props) => {
    console.log(props.product);
    const { category, img, name, price, ratings, seller } = props.product;
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
            <button className='btn btn-cart'>Add to Cart</button>


        </div>
    );
};

export default Product;