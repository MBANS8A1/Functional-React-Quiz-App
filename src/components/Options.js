function Options({ question, dispatch, answer }) {
  return (
    <div className="options">
      {question.options.map((qOption, index) => (
        <button
          className={`btn btn-option ${index === answer ? "answer" : ""} ${
            index === question.correctOption ? "correct" : "wrong"
          }`}
          key={qOption}
          onClick={() => dispatch({ type: "newAnswer", payload: index })}
        >
          {qOption}
        </button>
      ))}
    </div>
  );
}

export default Options;
//A new comment
