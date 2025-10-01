import { useEffect, useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { getMovieDetails, imageUrl } from '../services/tmdb.js'
import Loader from '../components/Loader.jsx'
import ErrorMessage from '../components/ErrorMessage.jsx'

export default function MovieDetails() {
  const { id } = useParams()
  const navigate = useNavigate()
  const [movie, setMovie] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    let mounted = true
    getMovieDetails(id)
      .then((d) => { if (mounted) setMovie(d) })
      .catch((e) => { if (mounted) setError(e.message) })
      .finally(() => { if (mounted) setLoading(false) })
    return () => { mounted = false }
  }, [id])

  if (loading) return <Loader label="Carregando detalhes…" />
  if (error) return <ErrorMessage message={error} />
  if (!movie) return null

  return (
    <section className="card">
      <button className="button secondary" onClick={() => navigate(-1)}>← Voltar</button>
      <div className="row" style={{ marginTop: 12, alignItems: 'flex-start' }}>
        <img src={imageUrl(movie.poster_path)} alt={movie.title} style={{ width: 220, height: 330, objectFit: 'cover', borderRadius: 12, border: '1px solid #1f2937' }} />
        <div style={{ marginLeft: 16 }}>
          <h1>{movie.title}</h1>
          <p className="muted">{movie.release_date ? new Date(movie.release_date).toLocaleDateString('pt-BR') : '—'} • {movie.runtime || '—'} min</p>
          <p><strong>Nota:</strong> {movie.vote_average ? movie.vote_average.toFixed(1) : '—'} ({movie.vote_count} votos)</p>
          <p className="muted">{movie.overview || 'Sem sinopse disponível.'}</p>
          <p><strong>Gêneros:</strong> {movie.genres?.map(g => g.name).join(', ') || '—'}</p>
          {movie.homepage ? <p><a className="button" href={movie.homepage} target="_blank" rel="noreferrer">Site oficial</a></p> : null}
        </div>
      </div>
    </section>
  )
}
