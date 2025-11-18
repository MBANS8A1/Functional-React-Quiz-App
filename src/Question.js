function Question({ question }) {
  console.log(question);
  return (
    <div>
      <h4>{question.question}</h4>
      <div className="options">
        {question.options.map((qOption) => (
          <button className="btn btn-option">{qOption}</button>
        ))}
      </div>
    </div>
  );
}

export default Question;
