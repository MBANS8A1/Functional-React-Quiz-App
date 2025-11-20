function FinishedScreen({ points, maxPossiblePoints }) {
  const scorePercentage = (points / maxPossiblePoints) * 100;
  return (
    <p className="result">
      You scored <strong>{points}</strong> out of {maxPossiblePoints} (
      {Math.ceil(scorePercentage)})
    </p>
  );
}

export default FinishedScreen;
