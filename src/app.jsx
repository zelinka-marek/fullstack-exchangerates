import { useState } from "react";
import { SearchForm } from "./components/search-form";
import { SearchResults } from "./components/search-results";

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
        <SearchResults rates={rates} />
      </main>
      <footer>
        <i>ExchangeRates &copy; 2023 Marek Zelinka</i>
      </footer>
    </div>
  );
}
