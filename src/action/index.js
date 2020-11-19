export function updateUserAction(id1, email1, role1) {
    return {
        type: "UPDATE USER",
        user: {
            id: id1,
            email: email1,
            role: role1
        },
    }
}

export function addToCart(p, a = 1) {
    return {
        type: "ADD_CART",
        product: p,
        amount: a
    }
}