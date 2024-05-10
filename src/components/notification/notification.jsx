export default function Notification({ amount }) {
  return <p>{!amount && "No feedback yet"}</p>;
}
