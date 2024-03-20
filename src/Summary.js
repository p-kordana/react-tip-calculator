export function Summary({ bill, avgService }) {
  return (
    <div>
      <p>
        Tip %: {avgService.toFixed(2)}
        <br />
        Bill: ${bill}
        <br />
        Tip $: {(bill * (avgService / 100)).toFixed(2)}
      </p>
      <p style={{ fontWeight: "bold" }}>
        Total to Pay: ${(bill * (1 + avgService / 100)).toFixed(2)}
      </p>
    </div>
  );
}
