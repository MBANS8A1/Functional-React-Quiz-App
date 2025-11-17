import { useEffect } from "react";
import DateCounter from "./DateCounter.js";
import Header from "./Header.js";
import Main from "./Main.js";

function App() {
  useEffect(function () {
    async function fetchQuestions() {
      try {
        const res = await fetch("http://localhost:8000/questions");
        const data = await res.json();
        console.log(data);
      } catch (err) {
        console.error(err);
      }
    }
    fetchQuestions();
  }, []);
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
