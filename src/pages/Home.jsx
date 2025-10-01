import { useEffect, useState } from 'react'
import { getPopularMovies, searchMovies } from '../services/tmdb.js'
import SearchBar from '../components/SearchBar.jsx'
import MovieCard from '../components/MovieCard.jsx'
import Loader from '../components/Loader.jsx'
import ErrorMessage from '../components/ErrorMessage.jsx'

export default function Home() {
  const [query, setQuery] = useState('')
  const [movies, setMovies] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    let mounted = true
    getPopularMovies()
      .then((data) => { if (mounted) setMovies(data.results) })
      .catch((e) => { if (mounted) setError(e.message) })
      .finally(() => { if (mounted) setLoading(false) })
    return () => { mounted = false }
  }, [])

  async function onSearch(q) {
    setQuery(q)
    if (!q) {
      setLoading(true)
      try {
        const data = await getPopularMovies()
        setMovies(data.results)
      } catch (e) { setError(e.message) }
      finally { setLoading(false) }
      return
    }
    setLoading(true)
    try {
      const data = await searchMovies(q)
      setMovies(data.results)
    } catch (e) { setError(e.message) }
    finally { setLoading(false) }
  }

  if (loading) return <Loader label="Carregando filmes populares…" />
  if (error) return <ErrorMessage message={error} />

  return (
    <section>
      <div className="card" style={{ marginBottom: 16 }}>
        <h1>Catálogo de Filmes</h1>
        <p className="muted">Consumo de API pública <strong>TMDB</strong>, roteamento, hooks e eventos.</p>
        <SearchBar value={query} onChange={onSearch} placeholder="Busque por título (ex.: Inception)…" />
        <p className="muted" style={{ marginTop: 8 }}>Dica: pressione <span className="kbd">CTRL</span> + <span className="kbd">K</span> para focar a busca.</p>
      </div>
      <div className="grid">
        {movies.map((m) => <MovieCard key={m.id} movie={m} />)}
      </div>
    </section>
  )
}
