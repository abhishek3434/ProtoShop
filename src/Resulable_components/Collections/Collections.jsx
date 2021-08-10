import React from "react";
import CollectionMenu from "../Collection_Menu/Collection_Menu";
import "./Collection.scss"

const Collections = ({ title, items }) => {
  return (
    <div className="collection-preview">
      <h1 className="title">{title.toUpperCase()}</h1>
      <div className="preview">
        {items
          .filter((item, id) => id < 4)
          .map((item) => (
            <CollectionMenu
              key={item.id}
              items={item} 
            />
          ))}
      </div>
    </div>
  );
};

export default Collections;
