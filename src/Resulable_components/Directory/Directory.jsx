import React from 'react';
import Menu from  "../Menu/Menu"
import "./Directory.scss"
import { selectDirectory } from '../../redux/Directory/Directory-selector';

import { createStructuredSelector } from 'reselect';

import {connect} from 'react-redux' 

const Directory = ({items}) => {
  return (  
    <div className="directory-menu">
    {
        items.map(item=>(
            <Menu key={item.id} title={item.title} imageUrl={item.imageUrl} linkUrl={item.linkUrl}/>
        ))
    }
 </div>

  );
}

const mapStateToProps=createStructuredSelector({
  items:selectDirectory
});

export default connect(mapStateToProps)(Directory);