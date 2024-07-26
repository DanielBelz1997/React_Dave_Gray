export default function Footer() {
  const today = new Date();

  return (
    <footer className="w-full p-1 bg-sky-500 text-fuchsia-800 grid place-content-center text-2xl">
      <p>Copyrights &copy; {today.getFullYear()}</p>
    </footer>
  );
}
