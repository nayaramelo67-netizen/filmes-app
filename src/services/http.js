import axios from 'axios'

const KEY = import.meta.env.VITE_TMDB_API_KEY

export const http = axios.create({
  baseURL: 'https://api.themoviedb.org/3',
  params: {
    api_key: KEY,
    language: 'pt-BR',
    include_adult: false
  },
  // Opcional: timeout para evitar travar
  timeout: 15000,
})

// Interceptador simples de erro para mensagens mais amigáveis
http.interceptors.response.use(
  (res) => res,
  (err) => {
    const msg =
      err.response?.data?.status_message ||
      err.message ||
      'Erro ao comunicar com o TMDB.'
    return Promise.reject(new Error(msg))
  }
)
