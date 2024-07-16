export default function Footer() {
  const today = new Date();

  return (
    <footer>
      <p>Copyrights &copy; {today.getFullYear()}</p>
    </footer>
  );
}
