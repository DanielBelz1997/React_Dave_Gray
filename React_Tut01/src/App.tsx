import { useState } from "react";

import Header from "./Header";
import Content from "./Content";
import Footer from "./Footer";

import { Item } from "./types/item";
import AddItem from "./AddItem";

import "./index.css";

function App() {
  const [items, setItems] = useState<Item[]>([
    {
      id: 1,
      checked: false,
      item: "one Half punt bag of Coca Covered Almonds",
    },
    {
      id: 2,
      checked: true,
      item: "Item 2",
    },
    {
      id: 3,
      checked: false,
      item: "Item 3",
    },
  ]);

  const handleShoppingList = (
    list: Item[],
    setList: React.Dispatch<React.SetStateAction<Item[]>>
  ) => {
    setList(list);
    localStorage.setItem("shopping list", JSON.stringify(list));
  };

  const handleCheck = (id: number) => {
    const listItems = items.map((item) =>
      item.id === id ? { ...item, checked: !item.checked } : item
    );
    handleShoppingList(listItems, setItems);
  };

  const handleDelete = (id: number) => {
    const listItems = items.filter((item) => item.id !== id);
    handleShoppingList(listItems, setItems);
  };

  return (
    <div className="flex flex-col justify-center items-center h-screen w-full max-w-lg m-auto border border-red-500">
      <Header title="Grocery List" />
      <AddItem />
      <Content
        items={items}
        handleCheck={handleCheck}
        handleDelete={handleDelete}
      />
      <Footer length={items.length} />
    </div>
  );
}

export default App;
