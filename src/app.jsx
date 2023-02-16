import { useState } from "react";

function SearchForm(props) {
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

export function App() {
  const [rates, setRates] = useState(null);

  const search = (currency) => {
    fetch(`https://open.er-api.com/v6/latest/${currency}`)
      .then((response) => response.json())
      .then((data) => setRates(data.rates));
  };

  return (
    <div className="app">
      <main>
        <h1>Exchange Rates</h1>
        <h2>Search by currency</h2>
        <SearchForm onSubmit={search} />
        <h2>Results</h2>
        {rates ? (
          <table>
            <tbody>
              {Object.keys(rates).map((rate) => (
                <tr key={rate}>
                  <th style={{ textAlign: "left", paddingRight: 16 }}>
                    {rate}
                  </th>
                  <td>{rates[rate]}</td>
                </tr>
              ))}
            </tbody>
          </table>
        ) : (
          <i>No exchange rates loaded yet. Try searching first</i>
        )}
      </main>
      <footer>
        <i>ExchangeRates &copy; 2023 Marek Zelinka</i>
      </footer>
    </div>
  );
}
