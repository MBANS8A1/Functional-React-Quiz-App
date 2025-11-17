import { useEffect } from "react";
import DateCounter from "./DateCounter.js";
import Header from "./Header.js";
import Main from "./Main.js";

useEffect(function () {
  async function fetchQuestions() {
    fetch("http://localhost:8000/questions");
  }
  fetchQuestions();
}, []);

function App() {
  return (
    <div className="app">
      <Header />
      <Main>
        <p>1/15</p>
        <p>Question?</p>
      </Main>
    </div>
  );
}

export default App;
