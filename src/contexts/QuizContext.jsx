import { createContext, useReducer } from "react";

const QuizContext = createContext();

function reducer(state, action) {}
function QuizProvider({ children }) {
  const [state, dispatch] = useReducer(reducer, initialState);
}
