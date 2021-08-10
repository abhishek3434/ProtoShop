import React from 'react';
import {connect} from 'react-redux'
import { selectCollectionData } from '../../redux/Shop/Shop-Selector';
import CollectionMenu from '../../Resulable_components/Collection_Menu/Collection_Menu';

import './DisplayItems.scss'



const DisplayItems = ({collection,match}) => {

    return (  
        <div className='collection-page'>
          <h2 className='title'>{collection.title}</h2>
          <div className="items">
              {
                  collection.items.map(data=>(    
                      <CollectionMenu key={data.id} items={data}/>
                  ))
              }
          </div>
        </div>
    );
}

const mapStateToProps=(state,ownProps)=>({
    collection:selectCollectionData(ownProps.match.params.collectionId)(state)
})
 
export default connect(mapStateToProps)(DisplayItems);