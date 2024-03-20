function App() {
  return (
    <div className="App">
      <div>
        How much was the bill? <input type="number"></input>
      </div>
      <div>
        How did you like the service?{" "}
        <select>
          <option value={5}>Horrible</option>
          <option value={10}>Not bad</option>
          <option value={20}>Pretty good</option>
          <option value={25}>Amazing</option>
        </select>
      </div>
      <div>
        How did your companion like the service?{" "}
        <select>
          <option value={5}>Horrible</option>
          <option value={10}>Not bad</option>
          <option value={20}>Pretty good</option>
          <option value={25}>Amazing</option>
        </select>
      </div>

      <div>Summary</div>

      <button>Reset</button>
    </div>
  );
}

export default App;
