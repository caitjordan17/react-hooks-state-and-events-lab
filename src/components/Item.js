import React, {useState} from "react";

function Item({ name, category }) {
  const [inCart, setCart] = useState(false)    
  
  function handleItem(){
    setCart(!inCart)
  }

  const itemClass = inCart ? "in-cart" : ""
  const buttonText = inCart ? "Remove from Cart" : "Add to Cart"
  
  return (
    <li className={itemClass}>
      <span>{name}</span>
      <span className="category">{category}</span>
      <button className="add" onClick={handleItem}>{buttonText}</button>
    </li>
  );
}

export default Item;
