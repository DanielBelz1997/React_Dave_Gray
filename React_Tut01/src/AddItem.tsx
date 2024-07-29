import { FaPlus } from "react-icons/fa";

const AddItem = () => {
  return (
    <form className="w-11/12 flex  justify-start mt-2 mb-2 p-1 border rounded-lg border-b-1 border-solid border-black">
      <input
        className="flex-grow max-w-calc-100%-50px min-h-48px text-1rem p-1 rounded mr-1 outline-none"
        autoFocus
        id="AddItem"
        type="text"
        placeholder="Add Item"
        required
      />
      <button
        className="transition h-48px min-w-48px rounded p-2 text-1rem bg-blue-100 text-mediumblue cursor-pointer hover:text-[white] hover:bg-[limegreen] hover:outline-[none] active:bg-lime-700"
        type="submit"
        aria-label="Add Item"
      >
        <FaPlus />
      </button>
    </form>
  );
};

export default AddItem;
