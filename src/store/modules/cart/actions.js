export function addToCart(product) {
    return {
        type: '@cart/Add',
        product,
    }
}

export function removeFromCart(id) {
    return {
        type: '@cart/Remove',
        id
    }
}