import { useState } from "react";
import Header from "./Components/Header";
import Fuji from "./Components/Fuji";
import Sydney from "./Components/Sydney";
import Geiranger from "./Components/Geiranger";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Header />
      <Fuji />
      <Sydney />
      <Geiranger />
    </div>
  );
}

export default App;
