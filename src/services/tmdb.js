const API = 'https://api.themoviedb.org/3'
const KEY = import.meta.env.VITE_TMDB_API_KEY

if (!KEY) {
  console.warn('VITE_TMDB_API_KEY não definido. Crie um .env com sua chave do TMDB.')
}

function params(obj = {}) {
  const p = new URLSearchParams({ api_key: KEY, language: 'pt-BR', include_adult: 'false', ...obj })
  return p.toString()
}

export async function getPopularMovies(page = 1) {
  const res = await fetch(`${API}/movie/popular?${params({ page })}`)
  if (!res.ok) throw new Error('Falha ao carregar filmes populares.')
  return res.json()
}

export async function discoverMovies(year = '', page = 1) {
  const query = {}
  if (year) query.primary_release_year = year
  const res = await fetch(`${API}/discover/movie?${params({ sort_by: 'popularity.desc', page, ...query })}`)
  if (!res.ok) throw new Error('Falha ao carregar catálogo.')
  return res.json()
}

export async function searchMovies(query, year = '', page = 1) {
  const res = await fetch(`${API}/search/movie?${params({ query, year, page })}`)
  if (!res.ok) throw new Error('Falha na busca.')
  return res.json()
}

export async function getMovieDetails(id) {
  const res = await fetch(`${API}/movie/${id}?${params({ append_to_response: 'videos,images' })}`)
  if (!res.ok) throw new Error('Filme não encontrado.')
  return res.json()
}

export function imageUrl(path, size = 'w500') {
  return path ? `https://image.tmdb.org/t/p/${size}${path}` : 'https://placehold.co/500x750?text=Sem+Imagem'
}
