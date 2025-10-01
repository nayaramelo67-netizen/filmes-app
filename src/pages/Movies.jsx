import { useEffect, useState } from 'react'
import { discoverMovies, searchMovies } from '../services/tmdb.js'
import SearchBar from '../components/SearchBar.jsx'
import MovieCard from '../components/MovieCard.jsx'
import Loader from '../components/Loader.jsx'
import ErrorMessage from '../components/ErrorMessage.jsx'

export default function Movies() {
  const [query, setQuery] = useState('')
  const [year, setYear] = useState('')
  const [movies, setMovies] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    let mounted = True = true
    discoverMovies()
      .then((d) => { if (mounted) setMovies(d.results) })
      .catch((e) => { if (mounted) setError(e.message) })
      .finally(() => { if (mounted) setLoading(false) })
    return () => { mounted = false }
  }, [])

  async function applyFilters() {
    setLoading(true)
    try {
      if (query) {
        const d = await searchMovies(query, year)
        setMovies(d.results)
      } else {
        const d = await discoverMovies(year)
        setMovies(d.results)
      }
    } catch (e) { setError(e.message) }
    finally { setLoading(false) }
  }

  useEffect(() => {
    function onKey(e) {
      if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === 'k') {
        const el = document.querySelector('input[type="search"]')
        if (el) el.focus()
        e.preventDefault()
      }
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [])

  if (loading) return <Loader label="Carregando catálogo…" />
  if (error) return <ErrorMessage message={error} />

  return (
    <section>
      <div className="card" style={{ marginBottom: 16 }}>
        <h1>Filmes</h1>
        <div className="row">
          <SearchBar value={query} onChange={(v)=>{ setQuery(v); }} placeholder="Buscar por título…" />
          <input className="input" type="number" min="1900" max="2100" value={year} onChange={(e)=>setYear(e.target.value)} placeholder="Ano" />
          <button className="button" onClick={applyFilters}>Filtrar</button>
          <button className="button secondary" onClick={()=>{ setQuery(''); setYear(''); applyFilters(); }}>Limpar</button>
        </div>
        <div className="muted" style={{ marginTop: 8 }}>
          Resultados: {movies.length} {year ? `• Ano: ${year}` : ''}
        </div>
      </div>
      <div className="grid">
        {movies.map((m) => <MovieCard key={m.id} movie={m} />)}
      </div>
    </section>
  )
}
