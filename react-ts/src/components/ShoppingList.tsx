import React from "react";
import ItemType from "../models/item";

interface ShoppingListProps {
  items: ItemType[];
}

export default function ShoppingList({
  items,
}: ShoppingListProps): JSX.Element {
  return (
    <div>
      <h1>Shopping List</h1>
      <ul>
        {items.map((item) => (
          <li key={item.id}>
            {item.product}:{item.quantity}
          </li>
        ))}
      </ul>
    </div>
  );
}
