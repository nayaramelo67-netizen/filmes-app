export default function SearchBar({ value, onChange, placeholder = 'Buscar…' }) {
  return (
    <div className="searchbar">
      <input
        className="input"
        type="search"
        value={value}
        placeholder={placeholder}
        onChange={(e) => onChange(e.target.value)}
        aria-label="Buscar"
      />
    </div>
  )
}
