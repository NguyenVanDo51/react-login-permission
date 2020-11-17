import React, { useState, useEffect } from 'react';
import { getAllProducts, RemoveProduct, searchProduct } from '../../axios/productData'
import EditProduct from '../../components/modals/EditProduct';
import CreateModal from '../../components/modals/CreateModal';

const Home = () => {
    const [ products, setProducts ] = useState([])
    const [ editModal, setEditModal ] = useState({status: false, product: {}})
    const [ createModal, setCreateModal ] = useState(false)
    const [ orderByTitle, setOrderByTitle ] = useState({ index: "DESC", orderBy: "title" })
    const [ orderByPrice, setOrderByPrice ] = useState({ index: "DESC", orderBy: "price" })
    const [ total, setTotal ] = useState(1)
    const [ keyword, setKeyword ] = useState('')

    const getProducts = (o='', i='DESC', p=1) => {
        getAllProducts(o, i, p)
            .then( response => {
                setProducts(response.data.products)
                setTotal(response.data.total)
            } )
    }

    useEffect(() => {
        if (keyword !== '') {
            searchProduct(keyword)
                .then( response => {
                    setProducts(response.data.products)
                })
        } else {
            getProducts()
        }
    }, [keyword])

    const showModalEdit = (product = {}) => {
        setEditModal({status: !editModal.status, product: product})
    }

    const showModalCreate = () => {
        setCreateModal(!createModal)
    }

    const paginationButton = []

    for( let i = 1; i <= total; i ++ ) {
        paginationButton.push(<li key={i} className="page-item">
            <button className="page-link" onClick={ () => getProducts('', 'DESC', i)}>{i}</button>
            </li>)
    }

    function removeProduct (productId) {
        RemoveProduct(productId)
            .then( response => {
            
            }).catch( error => {
                console.log("Error when remove product:", error)
            })
        getProducts()
    }

    function handleSortByTitle() {
        getAllProducts('title')
            .then( response => {
                setProducts(response.data.products)
            })
    }

    return (
        <div className="container">
            <h3>Products list</h3>
            <div className="d-flex my-2 justify-content-between">
                <button onClick={showModalCreate} className="btn btn-primary">Add new product</button>
                <form>
                    <input type="text" className="form-control" value={keyword} onChange={ (e) => setKeyword(e.target.value) } placeholder="Search" />
                </form>
            </div>
            <div>
                <table className="table">
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th onCLick={handleSortByTitle}>Title</th>
                            <th>Description</th>
                            <th>Image</th>
                            <th>Price</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        { products.map((product, index) => {
                            return <tr key={index}>
                                <td>{product.id}</td>
                                <td>{product.title}</td>
                                <td>{product.description}</td>
                                <td><img src={`http://localhost:3000/images/${product.img}`} alt="Product img" style={{height: '70px', width: 'auto'}} /></td>
                                <td>{product.price}</td>
                                <td>
                                    <button 
                                    onClick={() => showModalEdit(product)} className="btn btn-primary mr-2">Edit</button>
                                    <button className="btn btn-danger" onClick={() => removeProduct(product.id)}>Remove</button>
                                </td>
                            </tr>
                        }) }
                    </tbody>
                </table>
                {
                    keyword !== '' ? null : 
                    <nav aria-label="Page navigation example">
                        <ul className="pagination">
                            { paginationButton }
                        </ul>
                    </nav>
                }
                
            </div>
            {
                editModal.status ? 
                <EditProduct isShowModal={editModal.status} showModalEdit={showModalEdit} product={editModal.product} getProducts={getProducts} /> 
                : null
            }
            {
                createModal ? <CreateModal showModalCreate={showModalCreate} getProducts={getProducts} /> : null
            }
        </div>
    );
}

export default Home;
