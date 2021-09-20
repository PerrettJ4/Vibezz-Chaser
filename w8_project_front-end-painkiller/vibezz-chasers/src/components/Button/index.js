import "./index.css";

export default function Button({ buttonText, handleClick }) {
  return (
    <button type="button" onClick={handleClick}>
      {buttonText}
    </button>
  );
}
