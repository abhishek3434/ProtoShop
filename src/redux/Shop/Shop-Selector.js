import { createSelector } from "reselect";


const selectShop=(state)=>state.shop

export const selectShopData=createSelector(
    [selectShop],
    shop=>shop.shopData
)
export const selectCollectionHome=createSelector(
    [selectShopData],
    shopData=>Object.keys(shopData).map(key=>shopData[key])
)


export const selectCollectionData=(CollectionId)=>createSelector(
    [selectShopData],
    shopData=>shopData[CollectionId] 
)
