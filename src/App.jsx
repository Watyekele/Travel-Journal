import { useState } from "react";
import Header from "./Components/Header";
import Syd from "./Components/Syd";
import "./App.css";
import TravelData from "./Components/TravelData";

function App() {
  const JournalElements = TravelData.map((Data) => {
    return <Syd key={Data.id} Data={Data} />;
  });

  console.log(JournalElements);

  return (
    <div className="App">
      <Header />
      {JournalElements}
    </div>
  );
}

export default App;
