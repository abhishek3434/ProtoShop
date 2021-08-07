import { CartType } from "./cart-types";

export const showCart=()=>({
    type:CartType.SHOW_HIDDEN,
})

export const addItems=(item)=>({
    type:CartType.ADD_TO_CART,
    payload:item
})

export const removeItem=(item)=>({
    type:CartType.REMOVE_ITEM,
    payload:item
})

export const decreaseItem=(item)=>({
    type:CartType.DECREASE_ITEM,
    payload:item
})