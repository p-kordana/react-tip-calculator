import { useState } from "react";
import PartySlider from "./PartySlider";
import { Summary } from "./Summary";
import { ServiceInput } from "./ServiceInput";
import { BillInput } from "./BillInput";

function App() {
  const [bill, setBill] = useState(0);
  const [party, setParty] = useState([
    { Id: 1, Rating: 5 },
    { Id: 2, Rating: 5 },
  ]);

  const avgService =
    party.reduce((a, c) => {
      return a + c.Rating;
    }, 0) / party.length;

  function handlePartyChange(value) {
    if (value > party.length) {
      let toAdd = Array.from({ length: value }, (_, i) => i + 1).map((o) => ({
        Id: o,
        Rating: 5,
      }));
      toAdd = toAdd.filter((i) => i.Id > party.length);
      setParty((pa) => [...pa, ...toAdd]);
    }

    if (value < party.length) {
      setParty((pa) => pa.filter((i) => i.Id <= value));
    }
  }

  function handleBillChange(value) {
    setBill((c) => (c = value));
  }

  function handleServiceChange(updateId, newRating) {
    console.log(updateId);
    console.log(newRating);
    setParty(() =>
      party.map((p) => (p.Id === updateId ? { ...p, Rating: newRating } : p))
    );
  }

  function handleReset() {
    setParty(
      (ca) =>
        (ca = [
          { Id: 1, Rating: 5 },
          { Id: 2, Rating: 5 },
        ])
    );
    setBill((c) => (c = 0));
  }

  return (
    <div className="App">
      <PartySlider value={party.length} onPartyChange={handlePartyChange} />

      <BillInput bill={bill} onBillChange={handleBillChange} />
      <ul>
        {party.map((p) => (
          <ServiceInput
            person={p}
            key={p.Id}
            onServiceChange={handleServiceChange}
          />
        ))}
      </ul>

      <Summary bill={bill} avgService={avgService} />

      <button onClick={handleReset}>Reset</button>
    </div>
  );
}

export default App;
