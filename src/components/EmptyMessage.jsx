import React from "react";

const EmptyMessage = ({ items }) => {
  return <>{items.length === 0 && <h2>The List is Empty</h2>}</>;
};

export default EmptyMessage;
