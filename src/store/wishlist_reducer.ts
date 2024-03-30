
interface WishedItem {
    productId: number
}

interface WishedItemState {
    wishList: WishedItem[]
}

const wishListInitialState: WishedItemState = {
    wishList: []
}

interface WishListActionType {
    type: string,
    Payload: {}
}

export function wishListReducer(state: WishedItemState = wishListInitialState, action: WishListActionType) {
    return state
}