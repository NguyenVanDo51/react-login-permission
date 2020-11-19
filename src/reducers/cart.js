const cart = (state = [], action = {}) => {
    switch (action.type) {
        case 'ADD_CART':
            // 1. cart rong
            // 2. san pham moi
            // 3. Da ton tai san pham roi
            if (state.length > 0) {         // neu cart khong rong
                // Neu san pham da ton tai
                if (state.find(product => product.id === action.product.id)) {
                    return [
                        ...state.map(product => {
                            if (product.id === action.product.id) {
                                return {
                                    ...product,
                                    amount: product.amount + action.amount
                                }
                            }
                            return product
                        }
                        )
                    ]
                } else
                    // Neu san pham chua ton tai
                    return [
                        ...state,
                        {
                            ...action.product,
                            amount: 1
                        }
                    ]
            } else {            // Neu cart rong
                return [
                    {
                        ...action.product,
                        amount: 1
                    }
                ]
            }
        case "REMOVE_CART":
            console.log(action.id)
            return [
                ...state.filter(product => product.id !== action.id)
            ]

        case "REMOVE_ALL":
            return []

        default:
            return state
    }
}

export default cart