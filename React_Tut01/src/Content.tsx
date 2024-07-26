import { useState } from "react";

export default function Content() {
  const [items, setItems] = useState([
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

  return (
    <main className="w-full flex flex-col flex-grow justify-center items-center overflow-y-auto">
      {items.map((item, index) => {
        <li key={index} className="">
          <input type="checkbox" checked={item.checked} />
          <label>{item.item}</label>
          <button>Delete</button>
        </li>;
      })}
    </main>
  );
}
