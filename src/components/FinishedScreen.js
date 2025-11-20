function FinishedScreen({ points, maxPossiblePoints }) {
  const scorePercentage = (points / maxPossiblePoints) * 100;
  let emoji;
  if (scorePercentage === 100) emoji = "🥇";
  if (scorePercentage >= 80 && scorePercentage < 100) emoji = "🎉";
  if (scorePercentage >= 50 && scorePercentage < 80) emoji = "😊";
  if (scorePercentage >= 0 && scorePercentage < 50) emoji = "🤔";
  if (scorePercentage === 0) emoji = "🤦‍♂️";

  return (
    <p className="result">
      <span>{emoji}</span>You scored <strong>{points}</strong> out of{" "}
      {maxPossiblePoints} ({Math.ceil(scorePercentage)}%)
    </p>
  );
}

export default FinishedScreen;
