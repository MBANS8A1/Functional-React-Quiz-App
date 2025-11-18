function Options({ question, dispatch, answer }) {
  return (
    <div className="options">
      {question.options.map((qOption, index) => (
        <button
          className="btn btn-option"
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
