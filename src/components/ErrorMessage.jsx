export default function ErrorMessage({ message }) {
  return (
    <div className="card" role="alert">
      <strong>Ocorreu um erro:</strong>
      <div className="muted">{message}</div>
    </div>
  )
}
