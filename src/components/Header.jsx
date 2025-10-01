import { NavLink } from 'react-router-dom'

export default function Header() {
  return (
    <header className="header">
      <nav className="nav">
        <div className="brand">
          🎬 Catálogo <span className="badge">TMDB</span>
        </div>
        <NavLink to="/" end>Início</NavLink>
        <NavLink to="/filmes">Filmes</NavLink>
        <NavLink to="/sobre">Sobre</NavLink>
      </nav>
    </header>
  )
}
