import { FormEvent, useState } from "react";

import Header from "./Header";
import SearchItem from "./SearchItem";
import Content from "./Content";
import Footer from "./Footer";

import { Item } from "./types/item";
import AddItem from "./AddItem";

import "./index.css";

function App() {
  const [items, setItems] = useState<Item[] | null>(
    JSON.parse(localStorage.getItem("shopping list") || "{}")
  );
  const [newItem, setNewItem] = useState("");
  const [search, setSearch] = useState("");

  const handleShoppingList = (list: Item[]) => {
    setItems(list);
    localStorage.setItem("shopping list", JSON.stringify(list));
  };

  const addItem = (item: Item["item"]) => {
    if (Array.isArray(items)) {
      const id = items?.length ? items[items.length - 1].id + 1 : 1;
      const myNewItem = { id, checked: false, item };
      const listItems = items ? [...items, myNewItem] : [myNewItem];
      handleShoppingList(listItems);
    } else {
      const id = 1;
      const myNewItem = { id, checked: false, item };
      handleShoppingList([myNewItem]);
    }
  };

  const handleCheck = (id: Item["id"]) => {
    const listItems = items?.map((item) =>
      item.id === id ? { ...item, checked: !item.checked } : item
    );
    if (listItems) handleShoppingList(listItems);
  };

  const handleDelete = (id: Item["id"]) => {
    const listItems = items?.filter((item) => item.id !== id);
    if (listItems) handleShoppingList(listItems);
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!newItem) return;
    // add new Item
    addItem(newItem);
    setNewItem("");
  };

  return (
    <div className="flex flex-col justify-center items-center h-screen w-full max-w-lg m-auto border border-red-500">
      <Header title="Grocery List" />
      <AddItem
        newItem={newItem}
        setNewItem={setNewItem}
        handleSubmit={handleSubmit}
      />
      <SearchItem search={search} setSearch={setSearch} />
      <Content
        items={items?.filter((item) =>
          item.item.toLowerCase().includes(search.toLowerCase())
        )}
        handleCheck={handleCheck}
        handleDelete={handleDelete}
      />
      <Footer length={items?.length} />
    </div>
  );
}

export default App;
