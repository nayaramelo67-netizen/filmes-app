import Button from './ui/Button'

export default function Pagination({ page, totalPages, onChange }) {
  const prev = () => onChange?.(Math.max(1, page - 1))
  const next = () => onChange?.(Math.min(totalPages, page + 1))
  const disablePrev = page <= 1
  const disableNext = page >= totalPages

  return (
    <div className="row" role="navigation" aria-label="Paginação">
      <Button variant="secondary" onClick={prev} disabled={disablePrev}>← Anterior</Button>
      <span className="muted" style={{ padding: '0 8px' }}>
        Página {page} de {totalPages || '—'}
      </span>
      <Button onClick={next} disabled={disableNext}>Próxima →</Button>
    </div>
  )
}
