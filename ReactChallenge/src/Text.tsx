const Text = ({
  text,
  hexValue,
  isDarkText,
}: {
  text: string;
  hexValue: string;
  isDarkText: boolean;
}) => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        marginInline: "auto",
        marginTop: "7vh",
        fontSize: "35px",
        alignItems: "center",
        color: isDarkText ? "#000" : "#FFF",
      }}
    >
      <p>{text ? text : "No Value"}</p>
      <p>{hexValue ?? null}</p>
    </div>
  );
};

export default Text;
