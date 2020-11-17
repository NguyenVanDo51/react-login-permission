import React, { useState, useEffect, Fragment } from 'react';
import { searchProduct, getAllProducts } from '../../axios/productData'
import styled from 'styled-components'

const ProductGuest = () => {

    const [ products, setProducts ] = useState([])
    const [ keyword, setKeyword ] = useState('')

    const [ total, setTotal ] = useState(1)

    useEffect(() => {
        if (keyword !== '') {
            searchProduct(keyword)
                .then( response => {
                    setProducts(response.data.products)
                })
        } else {
            getAllProducts()
                .then( response => {
                    setProducts(response.data.products)
                    setTotal(response.data.total)
                })
        }
    }, [keyword])

    const getProducts = (o='', i='DESC', p=1) => {
        getAllProducts(o, i, p)
            .then( response => {
                setProducts(response.data.products)
                setTotal(response.data.total)
            } )
    }

    const paginationButton = []

    for( let i = 1; i <= total; i ++ ) {
        paginationButton.push(<li key={i} className="page-item">
            <button className="page-link" onClick={ () => getProducts('', 'DESC', i)}>{i}</button>
            </li>)
    }

    return (
        <Fragment>
            <h3>Product list</h3>
            <form>
                <input type="text" value={keyword} onChange={ (e) => setKeyword(e.target.value) } placeholder="Search" />
            </form>
            <ProductList className="row">
                {
                    typeof(products) === "object" ?
                    products.map((product, index) => {
                        return (
                            <div key={index} className="col-6 col-sm-4 col-md-3 my-3">
                                <div className="card card-product">
                                    <div className="card-body-product">
                                        <div className="text-center overflow-hidden">
                                            <img className="img-product-card" alt={product.title} 
                                            width="auto" height="150px" src={`http://localhost:3000/images/${product.img}`} />
                                        </div>
                                        <span className="card-title">{product.title}</span>
                                        <p>$ {product.price}</p>
                                    </div>
                                </div>
                            </div>
                        )
                    }) : null
                }
            </ProductList>
            {
                keyword !== '' ? null : 
                <nav aria-label="Page navigation example">
                    <ul className="pagination">
                        { paginationButton }
                    </ul>
                </nav> 
            }
        </Fragment>


    );
}

export default ProductGuest;

const ProductList = styled.div`
    .card-product {
        background-color: #eae5e5;

        .card-body-product {
            padding: 0.8rem;
        }

        .img-product-card {
            max-height: 170px;
            width: auto;
            margin-bottom: .5rem;
            transition: all 0.6s;
        }

        .img-product-card:hover {
            transform: scale(1.1);
        }
    }
`
