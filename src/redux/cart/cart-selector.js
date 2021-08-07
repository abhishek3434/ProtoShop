import { createSelector } from "reselect";

const selectCart = (state) => state.cart;

export const selectCartItems = createSelector(
  [selectCart],
  (cart) => cart.collections
);

export const selectCartCount = createSelector([selectCartItems], (cartItem) =>
  cartItem.reduce(
    (accumlate, collections) => accumlate + collections.quantity,
    0
  )
);
 
export const selectCartHidden = createSelector(
  [selectCart],
  (cart) => cart.show
);

export const selectTotal = createSelector([selectCartItems], (cartItem) =>
  cartItem.reduce(
    (total, collections) => total + collections.quantity * collections.price,0
  )
);
