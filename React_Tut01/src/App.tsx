import "./index.css";

import Content from "./Content";
import Footer from "./Footer";
import Header from "./Header";

function App() {
  return (
    <div className="flex flex-col justify-center items-center h-screen w-full max-w-lg m-auto border border-red-500">
      <Header />
      <Content />
      <Footer />
    </div>
  );
}

export default App;
