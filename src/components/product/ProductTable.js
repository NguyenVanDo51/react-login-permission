import React from 'react';

const ProductTable = ({ products, showModalEdit, removeProduct }) => {
    return (
        <table className="table">
            <thead>
                <tr>
                    <th>ID</th>
                    <th>Title</th>
                    <th>Description</th>
                    <th>Image</th>
                    <th>Price</th>
                    <th>Action</th>
                </tr>
            </thead>
            <tbody>
                {products.map((product, index) => {
                    return <tr key={index}>
                        <td>{product.id}</td>
                        <td>{product.title}</td>
                        <td>{product.description}</td>
                        <td><img src={`http://localhost:3000/images/${product.img}`} alt="Product img" style={{ height: '70px', width: 'auto' }} /></td>
                        <td>{product.price}</td>
                        {
                            showModalEdit ?
                                <td>
                                    <button
                                        onClick={() => showModalEdit(product)} className="btn btn-primary mr-2">Edit</button>
                                    <button className="btn btn-danger" onClick={() => removeProduct(product.id)}>Remove</button>
                                </td> : null
                        }

                    </tr>
                })}
            </tbody>
        </table>
    );
}

export default ProductTable;
