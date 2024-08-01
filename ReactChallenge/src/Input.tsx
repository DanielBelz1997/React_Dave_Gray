import { SetStateAction } from "react";
import colorNames from "colornames";

const Input = ({
  text,
  setText,
  setHexValue,
}: {
  text: string;
  setText: React.Dispatch<SetStateAction<string>>;
  setHexValue: React.Dispatch<SetStateAction<string>>;
}) => {
  return (
    <input
      style={{ outline: "none", border: "white", fontSize: "20px" }}
      id="search"
      type="text"
      placeholder="Color.."
      role="searchbox"
      value={text}
      onChange={(e) => {
        setText(e.target.value);
        const hex = colorNames(e.target.value) || "";
        setHexValue(hex);
      }}
    />
  );
};

export default Input;
