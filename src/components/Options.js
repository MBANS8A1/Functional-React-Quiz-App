import { useQuiz } from "../contexts/QuizContext";

function Options() {
  const { questions, dispatch, answer, index } = useQuiz();
  const question = questions[index];
  const hasAnswered = answer !== null;
  return (
    <div className="options">
      {question.options.map((qOption, index) => (
        <button
          className={`btn btn-option ${index === answer ? "answer" : ""} ${
            hasAnswered
              ? index === question.correctOption
                ? "correct"
                : "wrong"
              : ""
          }`}
          key={qOption}
          onClick={() => dispatch({ type: "newAnswer", payload: index })}
          disabled={answer !== null}
        >
          {qOption}
        </button>
      ))}
    </div>
  );
}

export default Options;
//A new comment
