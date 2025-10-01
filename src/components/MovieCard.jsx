import { Link } from 'react-router-dom'

const IMG = (path) => path ? `https://image.tmdb.org/t/p/w500${path}` : 'https://placehold.co/500x750?text=Sem+Imagem'

export default function MovieCard({ movie }) {
  return (
    <article className="movie-card">
      <img src={IMG(movie.poster_path)} alt={movie.title} />
      <div className="content">
        <div className="space-between">
          <strong>{movie.title}</strong>
          {movie.vote_average ? <span className="badge">★ {movie.vote_average.toFixed(1)}</span> : null}
        </div>
        <p className="muted" style={{ marginTop: 6 }}>
          {movie.release_date ? new Date(movie.release_date).getFullYear() : '—'}
        </p>
      </div>
      <div className="row" style={{ padding: 12, justifyContent: 'space-between' }}>
        <Link className="button secondary" to={`/filmes/${movie.id}`}>Detalhes</Link>
        <a className="button" href={`https://www.themoviedb.org/movie/${movie.id}`} target="_blank" rel="noreferrer">TMDB</a>
      </div>
    </article>
  )
}
