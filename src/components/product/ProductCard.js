import React from 'react';
import { useStore, useDispatch } from 'react-redux'
import { addToCart } from '../../action'

const ProductCard = ({ product }) => {

    const dispatch = useDispatch()

    return (
        <div className="col-6 col-sm-4 col-md-3 my-3">
            <div className="card card-product">
                <div className="card-body-product">
                    <div className="text-center overflow-hidden">
                        <img className="img-product-card" alt={product.title}
                            width="auto" height="150px" src={`http://localhost:3000/images/${product.img}`} />
                    </div>
                    <span className="card-title">{product.title}</span>
                    <p>$ {product.price}</p>
                    <button className="btn btn-primary btn-sm"
                        onClick={() => dispatch(addToCart(product))}>
                        Add to cart
                            < i className="fas fa-cart-plus" ></i>
                    </button>
                </div>
            </div >
        </div >
    );
}

export default ProductCard;
