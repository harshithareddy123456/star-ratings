import { useRef, useState } from "react";
import "./styles.css";
import Star from "./component/Star";

export default function App() {
  const [rating, setRating] = useState(null);
  const [error, setError] = useState(null);
  const inputref = useRef();
  const handlesubmit = () => {
    const rate = parseFloat(inputref.current.value);
    if (rate >= 1 && rate <= 5) {
      setRating(rate);
      setError(null);
    } else {
      setRating(null);
      setError("Ratings are only restricted from 1 to 5");
    }
  };
  return (
    <div className="App">
      <h1>Star Ratings</h1>
      <label>please provide the rating:</label>
      <input type="number" ref={inputref} />
      <button onClick={handlesubmit}>submit</button>
      <Star ratings={rating} />
      {error ? <h3>{error}</h3> : null}
    </div>
  );
}
