import { useState } from "react";

export function SearchForm(props) {
  const { onSubmit } = props;
  const [currency, setCurrency] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    if (currency.trim().length) {
      onSubmit(currency);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        required
        value={currency}
        onChange={(event) => setCurrency(event.target.value)}
        aria-label="Currency"
      />
      <button type="submit">Search</button>
    </form>
  );
}
