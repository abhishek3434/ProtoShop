export const addItemsToCart = (previousState, newItem) => {
  const check = previousState.find((cartItem) => cartItem.id === newItem.id);
  
  if (check) {
    return previousState.map((cartItem) =>
      cartItem.id === newItem.id
        ? { ...cartItem, quantity:cartItem.quantity + 1 }
        : cartItem
    );
  }
  return [...previousState,{...newItem,quantity:1}]

};
