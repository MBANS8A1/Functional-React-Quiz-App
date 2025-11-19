function Progress({ index, numQuestions, points }) {
  return (
    <header className="progress">
      <p>
        Question <strong>{index + 1}</strong>/{numQuestions}
      </p>
      <p>
        <strong>{points}</strong>/x
      </p>
    </header>
  );
}

export default Progress;
