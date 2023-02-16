export function getExchangeRates(currency) {
  return fetch(`https://open.er-api.com/v6/latest/${currency}`)
    .then((response) => response.json())
    .then((data) => data.rates);
}
