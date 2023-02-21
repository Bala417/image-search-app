import { useState } from "react";

function SearchImage({ onSubmit }) {
  let [term, setTerm] = useState("");

  const handleOnSubmit = (e) => {
    e.preventDefault();
    onSubmit(term);
  };

  const handleChange = (e) => {
    setTerm(e.target.value);
  };

  return (
    <div>
      <form onSubmit={handleOnSubmit}>
        <input onChange={handleChange} value={term} type="text" />
      </form>
      <p>{term}</p>
    </div>
  );
}

export default SearchImage;
