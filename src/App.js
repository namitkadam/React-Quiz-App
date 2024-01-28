import { useEffect, useState } from "react";
// import "./App.css";
import Header from "./components/Header";
import Quiz from "./components/Quiz";
import List from "./components/List";
import { containerStyle } from "./styles/container";
import { useMemo } from "react";

function App() {
  return (
    <>
      <Header />
      <main>
        <Quiz />
      </main>
    </>
  );
}

export default App;
