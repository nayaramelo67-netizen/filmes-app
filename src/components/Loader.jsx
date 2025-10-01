export default function Loader({ label = 'Carregando…' }) {
  return (
    <div className="card" role="status" aria-live="polite">
      <span className="muted">{label}</span>
    </div>
  )
}
