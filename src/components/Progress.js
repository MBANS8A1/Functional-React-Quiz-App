function Progress({ index, numQuestions }) {
  return (
    <header className="progress">
      <p>
        Question <strong>{index + 1}</strong>/{numQuestions}
      </p>
      <p>
        <strong>{points}</strong>/{totalNumberOfPoints}
      </p>
    </header>
  );
}

export default Progress;
