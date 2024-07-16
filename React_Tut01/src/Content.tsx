export default function Content() {
  const handleNameChange = () => {
    const names = ["Daniel", "BoB", "Adam"];
    const int = Math.floor(Math.random() * 3);
    return names[int];
  };

  return (
    <main>
      <p>Hello {handleNameChange()}</p>
    </main>
  );
}
