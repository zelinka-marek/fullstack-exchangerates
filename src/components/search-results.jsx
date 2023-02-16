export function SearchResults(props) {
  const { rates } = props;

  return (
    <div>
      {rates ? (
        <table>
          <tbody>
            {Object.keys(rates).map((rate) => (
              <tr key={rate}>
                <th style={{ textAlign: "left", paddingRight: 16 }}>{rate}</th>
                <td>{rates[rate]}</td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <i>No exchange rates loaded yet. Try searching first</i>
      )}
    </div>
  );
}
