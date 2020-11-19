import React, { useState } from 'react';
import './EditProduct.css'
import { createNewProduct } from '../../axios/productData'

const CreateModal = (props) => {

    const { showModalCreate, getProducts } = props

    const [title, setTitle] = useState('')
    const [description, setDescription] = useState('')
    const [price, setPrice] = useState('')

    const createProduct = () => {
        createNewProduct(title, description, price)
            .then(response => {
            }).catch(error => {
                console.log(error)
            })
        showModalCreate()
        getProducts()
    }

    return (
        <div className="backgound-modal">
            <div className="custom-modal p-5">
                <h3>Add new product</h3>
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
                        <div className="mb-3">
                            <input type="file" className="form-control-file" />
                        </div>
                        <div className="form-group">
                            <label htmlFor="price">Giá bán(vnđ)</label>
                            <input type="number" className="form-control"
                                value={price} onChange={event => setPrice(event.target.value)} />
                        </div>
                    </div>
                </form>
                <button type="button" className="btn btn-primary mr-3" onClick={createProduct}>Save</button>
                <button type="button" className="btn btn-danger" onClick={showModalCreate}>Exit</button>
            </div>
        </div>
    );
}

export default CreateModal;
