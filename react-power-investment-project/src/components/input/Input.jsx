
export default function Input({type = 'text', name, value, id, onChange, required = true}) {
  return (
    <p>
      <label>{name}</label>
      <input
        type={type}
        value={value}
        onChange={(event) => onChange(id, event.target.value)}
        required={required}
      />
    </p>
  );
}