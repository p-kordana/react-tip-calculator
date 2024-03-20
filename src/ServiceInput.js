export function ServiceInput({ person, onServiceChange }) {
  return (
    <li>
      <span>How did person {person.Id} enjoy the service? </span>
      <select
        value={person.Rating}
        onChange={(e) => onServiceChange(person.Id, Number(e.target.value))}
      >
        <option value={0}>(0%) Never coming back</option>
        <option value={5}>(5%) Horrible </option>
        <option value={10}>(10%) Lacking</option>
        <option value={15}>(15%) Not bad</option>
        <option value={20}>(20%) Pretty good</option>
        <option value={25}>(25%) Outstanding</option>
      </select>
    </li>
  );
}
