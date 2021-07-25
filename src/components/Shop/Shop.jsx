import React, { Component } from 'react';
import Data from "./Shop_Data"
import Collections from "../../Resulable_components/Collections/Collections"

class Shop extends Component {
    constructor(props){
        super(props);

        this.state={
            Shop:Data
        };
    }
    render() { 
        return ( 
            <div className="shop-page">
                {this.state.Shop.map(collection=>(
                    <Collections key={collection.id} title={collection.title} items={collection.items}/>
                ))}
            </div>

         );
    }
}
 
export default Shop;