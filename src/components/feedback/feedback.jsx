export default function Feedback({ obj, amount }) {
  return (
    amount != 0 && (
      <ul className="result">
        <li>
          <p>Good: {obj.good}</p>
        </li>
        <li>
          <p>Neutral: {obj.neutral}</p>
        </li>
        <li>
          <p>Bad: {obj.bad}</p>
        </li>
        <li>
          <p>Total: {amount}</p>
        </li>
        <li>
          <p>Positive: {Math.round((obj.good / amount) * 100)}%</p>
        </li>
      </ul>
    )
  );
}
