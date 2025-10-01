import { http } from './http'

// POPULARES
export async function getPopularMovies(page = 1) {
  const { data } = await http.get('/movie/popular', { params: { page } })
  return data
}

// DISCOVER (catálogo + filtro por ano)
export async function discoverMovies(year = '', page = 1) {
  const params = { sort_by: 'popularity.desc', page }
  if (year) params.primary_release_year = year
  const { data } = await http.get('/discover/movie', { params })
  return data
}

// BUSCA (com ano opcional)
export async function searchMovies(query, year = '', page = 1) {
  const params = { query, page }
  if (year) params.year = year
  const { data } = await http.get('/search/movie', { params })
  return data
}

// DETALHES
export async function getMovieDetails(id) {
  const { data } = await http.get(`/movie/${id}`, {
    params: { append_to_response: 'videos,images' },
  })
  return data
}

// IMAGENS
export function imageUrl(path, size = 'w500') {
  return path
    ? `https://image.tmdb.org/t/p/${size}${path}`
    : 'https://placehold.co/500x750?text=Sem+Imagem'
}
