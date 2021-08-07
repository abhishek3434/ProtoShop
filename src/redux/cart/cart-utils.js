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

export const deleteItems=(state,itemRem)=>{
  const existingItem=state.find(item=>item.id===itemRem.id);

  if(existingItem.quantity===1){
    return state.filter(item=>item.id!==itemRem.id);
  }
  return state.map(
    item=>item.id===itemRem.id? {...item,quantity:item.quantity-1}:item
  )
};
