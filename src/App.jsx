import { useState } from "react";
import React from "react";
import Header from "./Components/Header";
import Syd from "./Components/Syd";
import "./App.css";

import TravelData from "./Components/TravelData";

function App() {
  const JournalElements = TravelData.map((Data) => {
    return <Syd key={Data.id} Data={Data} />;
  });

  return (
    <div className="App max-w-120 p-2rem text-center mx-auto border bg-gray-300 text-black ">
      <Header />
      {JournalElements}
    </div>
  );
}

export default App;
