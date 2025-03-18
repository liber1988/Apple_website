import { useState } from "react";
import Navbar from "./components/Navbar";
import Highlifghts from "./components/Highlifghts";
import Hero from "./components/Hero";

const App = () => {
  return (
    <>
      <main className="bg-black">
        <Navbar />
        <Hero />
        <Highlifghts />
      </main>
    </>
  );
};

export default App;
