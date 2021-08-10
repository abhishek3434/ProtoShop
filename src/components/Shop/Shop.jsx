import React  from 'react';
import { Route } from 'react-router';


import CollectionsOverview from '../../Resulable_components/CollectionOverview/CollectionsOverview'; 

import DisplayItems from '../DisplayItems/DisplayItems';

const Shop = ({match}) => {

    return ( 
        <div className="shop-page">
              <Route exact path={`${match.path}`} component={CollectionsOverview} />
              <Route  path={`${match.path}/:collectionId`} component={DisplayItems} />
           
        </div>
     );
}

export default Shop;