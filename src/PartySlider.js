export default function PartySlider({ value, onPartyChange }) {
  return (
    <p>
      Party Size:
      <input
        type="range"
        min="2"
        max="10"
        value={value}
        onChange={(e) => onPartyChange(Number(e.target.value))}
      />
      {value}
    </p>
  );
}
