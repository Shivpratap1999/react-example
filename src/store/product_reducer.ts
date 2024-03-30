
const PRODUCT_FETCH_ACTION = 'product/fetch'

interface Rating {
    rate: number,
    count: number
}
interface Product {
    id: number,
    title: string,
    price: number,
    description: string,
    category: string,
    image: string,
    rating: Rating
}

interface ProductState {
    products: Product[]
}


const productInitialState: ProductState = {
    products: []
}


interface ProductActionType {
    type: string;
    payload?: {};
}

export function createProductFetchAction(){
    let action: ProductActionType = { type: PRODUCT_FETCH_ACTION}
    return action
}

export function productReducer(state: ProductState = productInitialState, action: ProductActionType) {
    return state
}