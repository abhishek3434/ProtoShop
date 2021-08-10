import  {selectCollectionHome}  from '../../redux/Shop/Shop-Selector';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import Collections from '../Collections/Collections';
import './CollectionsOverview.scss'

const CollectionOverview = ({Shop}) => {
    return ( 
        <div className="collection-overview">
              {Shop.map(collection=>(
                    <Collections key={collection.id} title={collection.title} items={collection.items}/>
                ))}

        </div>
     );
}
const mapStateToProps=createStructuredSelector({
    Shop:selectCollectionHome
});
export default connect(mapStateToProps)(CollectionOverview);