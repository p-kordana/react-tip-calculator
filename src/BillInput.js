export function BillInput({ bill, onBillChange }) {
  return (
    <div>
      How much was the bill?{" "}
      <input
        type="number"
        value={bill}
        onChange={(e) => onBillChange(Number(e.target.value))}
      ></input>
    </div>
  );
}
