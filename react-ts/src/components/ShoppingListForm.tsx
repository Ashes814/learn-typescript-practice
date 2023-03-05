import React, { useRef } from "react";

interface ShoppingListProps {
  onAddItem: (item: string, quantity: number) => void;
}

export default function ShoppingListForm({
  onAddItem,
}: ShoppingListProps): JSX.Element {
  const productInputRef = useRef<HTMLInputElement>(null);
  const quantityInputRef = useRef<HTMLInputElement>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const newProduct = productInputRef.current!.value;
    const quantity = +quantityInputRef.current!.value;

    onAddItem(newProduct, quantity);
    productInputRef.current!.value = "";
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" placeholder="Product Name" ref={productInputRef} />
      <input type="number" min={0} ref={quantityInputRef} />
      <button type="submit">Add Item</button>
    </form>
  );
}
