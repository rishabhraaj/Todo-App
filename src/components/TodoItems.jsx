import React from "react";
import Item from "./Item";
function TodoItems({ items, onDeleteClick }) {
  return (
    <>
      <div className="container text-center">
        {items.map((item, index) => {
          return <Item item={item} key={index} onDeleteClick={onDeleteClick} />;
        })}
      </div>
    </>
  );
}

export default TodoItems;
