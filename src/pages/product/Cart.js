import React from 'react';
import { useStore, useDispatch } from 'react-redux'
import { Button, FormControl } from 'react-bootstrap'

const Cart = () => {

    const store = useStore()
    const dispatch = useDispatch()

    const products = store.getState().cart

    console.log(products)

    return (
        <table className="table">
            <thead>
                <tr>
                    <th>Title</th>
                    <th>Description</th>
                    <th>Image</th>
                    <th>Price</th>
                    <th>Amount</th>
                    <th>Action</th>
                </tr>
            </thead>
            <tbody>
                {products.map((product, index) => {
                    return <tr key={index}>
                        <td>{product.title}</td>
                        <td>{product.description}</td>
                        <td><img src={`http://localhost:3000/images/${product.img}`} alt="Product img" style={{ height: '70px', width: 'auto' }} /></td>
                        <td>{product.price}</td>
                        <td>
                            <Button size="sm" style={{ width: '2rem' }}>+</Button>
                            <FormControl style={{ width: '4rem', display: 'inline', padding: '0 1rem' }} type="number" min={1} defaultValue={product.amount} />
                            <Button size="sm" style={{ width: '2rem' }}>-</Button>
                        </td>
                        <td><Button size="sm"><i className="fas fa-trash" /></Button></td>
                    </tr>
                })}
            </tbody>
        </table>
    );
}

export default Cart;
