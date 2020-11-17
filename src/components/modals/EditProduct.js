import React, { useState } from 'react';
import './EditProduct.css';
import axios from 'axios'
import { updateProduct } from '../../axios/productData'

const EditProduct = (props) => {

    const { isShowModal, showModalEdit, product, getProducts} = props
    const [ title, setTitle] = useState(product.title)
    const [ description, setDescription] = useState(product.description)
    const [ img ] = useState(product.img)
    const [ price, setPrice] = useState(product.price)

    const handleUpdateProduct = () => {
        updateProduct(product.id, title, description, price)
            .then( response => {
                console.log(response.data)
            }).catch( error => {
                console.log(error)
            })
        showModalEdit()
        getProducts()
    }

    if (isShowModal)
        return (
            <div className="backgound-modal">
                <div className="custom-modal p-5">
                    <h3>Update product {product.title}</h3>
                    <form>
                        <div className="form-group">
                            <label htmlFor="title">Name</label>
                            <input type="text" className="form-control" 
                                value={title} onChange={(event) => setTitle(event.target.value)} />
                        </div>
                        <div className="form-group">
                            <label htmlFor="description">Description</label>
                            <textarea className="form-control" value={description}
                                onChange={(event) => setDescription(event.target.value)}></textarea>
                        </div>
                        <div className="form-group">
                            <label htmlFor="img">Hình ảnh</label>
                            <div>
                                <img className="img-product" src={'./images/' + product.img}
                                    alt="Image" />
                                <input type="file" className="form-control-file" />
                            </div>
                            <div className="form-group">
                            <label htmlFor="price">Giá bán(vnđ)</label>
                            <input type="number" className="form-control" 
                            value={price} onChange={ event => setPrice(event.target.value)} />
                        </div>
                        </div>
                    </form>
            
                    <button type="button" className="btn btn-primary mr-3" onClick={handleUpdateProduct}>Save</button>
                    <button type="button" className="btn btn-danger" onClick={showModalEdit}>Exit</button>
                </div>
            </div>

        )
    return null
}

export default EditProduct;
