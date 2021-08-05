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
