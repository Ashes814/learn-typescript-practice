import React, { useState } from "react";
import ShoppingList from "./components/ShoppingList";
import ShoppingListForm from "./components/ShoppingListForm";
import ItemType from "./models/item";
import { v4 } from "uuid";
import "./App.css";

function App() {
  const initItems = [
    { id: "1", product: "lemon", quantity: 3 },
    { id: "2", product: "Chicken Breast", quantity: 2 },
  ];
  const [items, setItems] = useState<ItemType[]>(initItems);
  const addItem = (product: string, quantity: number) => {
    setItems([...items, { id: v4(), product, quantity: quantity }]);
  };

  // setItems();

  return (
    <div className="App">
      <ShoppingList items={items} />
      <ShoppingListForm onAddItem={addItem} />
    </div>
  );
}

export default App;
