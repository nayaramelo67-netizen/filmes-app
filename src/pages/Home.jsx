// src/pages/Home.jsx
import { useEffect, useState } from 'react'
import { getPopularMovies, searchMovies } from '../services/tmdb.js'
import SearchBar from '../components/SearchBar.jsx'
import MovieCard from '../components/MovieCard.jsx'
import Loader from '../components/Loader.jsx'
import ErrorMessage from '../components/ErrorMessage.jsx'
import Pagination from '../components/Pagination.jsx'

export default function Home() {
  const [query, setQuery] = useState('')
  const [movies, setMovies] = useState([])
  const [page, setPage] = useState(1)                 // ← página atual
  const [totalPages, setTotalPages] = useState(1)     // ← total de páginas (da API)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    let active = true

    async function load() {
      setLoading(true)
      setError(null)
      try {
        const data = query
          ? await searchMovies(query, '', page)       // ← busca paginada
          : await getPopularMovies(page)              // ← populares paginados

        if (!active) return
        setMovies(data.results || [])
        // TMDB limita total_pages a 500 — garantimos o teto.
        setTotalPages(Math.min(data.total_pages || 1, 500))
      } catch (e) {
        if (active) setError(e.message)
      } finally {
        if (active) setLoading(false)
      }
    }

    load()
    return () => { active = false }
  }, [query, page])                                    // ← recarrega quando busca/página mudam

  function onSearch(q) {
    setQuery(q)
    setPage(1)                                         // ← ao mudar a busca, volta para página 1
  }

  if (loading) return <Loader label="Carregando filmes populares…" />
  if (error) return <ErrorMessage message={error} />

  return (
    <section>
      <div className="card" style={{ marginBottom: 16 }}>
        <h1>Catálogo de Filmes</h1>
        <p className="muted">
          Consumo de API pública <strong>TMDB</strong>, roteamento, hooks, eventos e paginação.
        </p>
        <SearchBar
          value={query}
          onChange={onSearch}
          placeholder="Busque por título (ex.: Inception)…"
        />
        <p className="muted" style={{ marginTop: 8 }}>
          Dica: pressione <span className="kbd">CTRL</span> + <span className="kbd">K</span> para focar a busca.
        </p>
      </div>

      <div className="grid">
        {movies.map((m) => <MovieCard key={m.id} movie={m} />)}
      </div>

      <div style={{ marginTop: 16 }}>
        <Pagination
          page={page}
          totalPages={totalPages}
          onChange={setPage}                           // ← atualiza a página
        />
      </div>
    </section>
  )
}
