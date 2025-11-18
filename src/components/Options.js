function Options({ question }) {
  return (
    <div className="options">
      {question.options.map((qOption) => (
        <button className="btn btn-option" key={qOption}>
          {qOption}
        </button>
      ))}
    </div>
  );
}

export default Options;
