import { CartType } from "./cart-types";

export const showCart=()=>({
    type:CartType.SHOW_HIDDEN,
})

export const addItems=(item)=>({
    type:CartType.ADD_TO_CART,
    payload:item
})