import axios from 'axios'

export function getAllProducts (orderBy1='', index1='DESC', currentPage1=1) {
    return axios.get('/products', {
            params: {
                controller: 'Product',
                action: "index",
                orderby: orderBy1,
                index: index1,
                page: currentPage1
            }
        })
}

export function RemoveProduct (productId = null) {
    return axios.get('/remove?controller=Product&action=remove', {
        params: {
            controller: 'Product',
            action: 'remove',
            product_id: productId
        }
    })
}

export function createNewProduct(title1, description1, price1) {
    return axios.get('/create', {
        params: {
            controller: 'Product',
            action: 'create',
            title: title1,
            description: description1,
            img: "img4.jpg",
            price: price1
        }
    })
}

export function updateProduct(productId, title1, description1, price1) {
    return axios.get('/update', {
        params: {
            controller: 'Product',
            action: 'update',
            product_id: productId,
            title: title1,
            img: 'img2.jpeg',
            description: description1,
            price: price1
        }
    })
}

export function searchProduct(title1) {
    return axios.get('/search', {
        params: {
            controller: 'Product',
            action: 'search',
            search: title1
        }
    })
}