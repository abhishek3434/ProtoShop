import { CartType } from "./cart-types";
import { addItemsToCart,deleteItems } from "./cart-utils";

const Initial_state = {
  show: false,
  collections:[]
};

const cartReducer = (state = Initial_state, action) => {
  switch (action.type) {
    case CartType.SHOW_HIDDEN:
      return {
        ...state,
        show: !state.show,
      };
    case CartType.ADD_TO_CART:
      return{
        ...state,
        collections:addItemsToCart(state.collections,action.payload)
      };
    case CartType.REMOVE_ITEM:
      return{
        ...state,
        collections:state.collections.filter(item=>item.id!==action.payload.id)
      }
    case CartType.DECREASE_ITEM:
      return{
        ...state,
        collections:deleteItems(state.collections,action.payload)
      }
    default:
      return state;
  }
};
export default cartReducer;
