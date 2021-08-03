import { CartType } from "./cart-types";
const Initial_state = {
  show: false,
};

const cartReducer = (state = Initial_state, action) => {
  switch (action.type) {
    case CartType.SHOW_HIDDEN:
      return {
        ...state,
        show: !state.show,
      };
    default:
      return state;
  }
};
export default cartReducer;
