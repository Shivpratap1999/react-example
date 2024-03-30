
interface CartItem {
    productId:number
    quantity:number
}

interface CartState {
    cartItems: CartItem[]
}

const cartInitialState: CartState = {
    cartItems: []
}

interface CartActionType {
    type: string,
    Payload: {}
}

export function cartReducer(state: CartState = cartInitialState, action: CartActionType) {
    return state
}