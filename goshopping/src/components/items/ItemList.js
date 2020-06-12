import React from "react";
import ItemSummary from "./ItemSummary";

const ItemList = ({ items }) => {
  return (
    <div className="Item-list section">
      {items &&
        items.map((item) => {
          return <ItemSummary item={item} key={item.id} />;
        })}
    </div>
  );
};

export default ItemList;
