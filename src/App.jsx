import { useState } from "react";
import Navbar from "./components/Navbar/Navbar";

import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Products from "./components/Categories/Categories";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Navbar />
      <Products />
      <ItemListContainer greeting={"Welcome to our jewelry shop"} />
    </>
  );
}

export default App;
