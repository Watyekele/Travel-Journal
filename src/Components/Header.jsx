import React from "react";
export default function Header() {
  return (
    <header className="bg-red-500 flex flex-row p-4 items-center gap-4 justify-center ">
      <img src="/images/Globe.png" alt="Global image" />
      <span className="title">my travel journal.</span>
    </header>
  );
}
