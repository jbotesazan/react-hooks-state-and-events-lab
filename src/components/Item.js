import React, { useState } from "react";

function Item({ name, category }) {

  const [add, setAdd] = useState(false)

  const addition = add ? 'in-cart' : ''

  function handleAddition () {
    setAdd((add) => !add)
  }

  return (
    <li className={addition}>
      <span>{name}</span>
      <span className="category">{category}</span>
      <button className="add" onClick={handleAddition}>{ addition ? "Remove from Cart" : "Add to Cart" }</button>
    </li>
  );
}

export default Item;
