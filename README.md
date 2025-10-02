# 🎬 Catálogo de Filmes — React + TMDB

Aplicação desenvolvida para a disciplina **Frameworks Web I**.

## 📌Descrição
Catálogo de filmes com **React (Vite)** consumindo a **API do The Movie Database (TMDB v3)**.  
Demonstra **componentização**, **hooks** (`useState`, `useEffect`), **manipulação de eventos**, **consumo de API com axios**, **roteamento** (`react-router-dom`), **paginação**, **tratamento de loading/erro**, e **deploy** na Vercel.

## 👥 Integrantes
- Nome: Nayara de Melo Costa

## ✨ Funcionalidades
- Listagem de **filmes populares** (TMDB).
- **Busca** por título e **filtro por ano** (página “Filmes”).
- **Paginação** (Anterior/Próxima) usando `total_pages` da TMDB.
- Página de **Detalhes** do filme com nota, duração, gêneros e sinopse.
- **Roteamento**: `/` (Home), `/filmes`, `/filmes/:id`, `/sobre`, `*` (404).
- **UI**: componentes reutilizáveis (Header, Button, Card, SearchBar, MovieCard, Pagination, Loader, ErrorMessage).
- **Acessibilidade**: labels/aria básicos e foco via **Ctrl+K** na busca.

## 🏗️ Tecnologias
- **React + Vite**
- **Axios** (cliente HTTP centralizado)
- **React Router DOM**
- CSS simples (grid responsiva, cards/botões)

## 📁 Estrutura (resumo)
```
src/
  components/
    ui/Button.jsx
    ui/Card.jsx
    Header.jsx
    SearchBar.jsx
    MovieCard.jsx
    Pagination.jsx
    Loader.jsx
    ErrorMessage.jsx
  pages/
    Home.jsx
    Movies.jsx
    MovieDetails.jsx
    About.jsx
    NotFound.jsx
  services/
    http.js       # axios preconfigurado
    tmdb.js       # funções da API (popular, search, discover, details)
  index.css
  main.jsx
  App.jsx
```

## ▶️ Como executar (local)
1. Clone o repositório
   ```bash
   git clone https://github.com/nayaramelo67-netizen/filmes-app.git
   cd filmes-app
   ```
2. Instale as dependências
   ```bash
   npm install
   ```
3. Crie o arquivo **.env** na raiz com sua chave v3 do TMDB:
   ```ini
   VITE_TMDB_API_KEY=SUA_CHAVE_TMDB_V3
   ```
4. Rode em desenvolvimento
   ```bash
   npm run dev
   ```
5. Acesse: `http://localhost:5173`

> **Importante:** não faça commit do `.env`. Um **`.env.example`** é fornecido como referência.

## 🔗 Links
- **Aplicação (Vercel):** https://filmes-app-phi.vercel.app/
- **Repositório (GitHub):** https://github.com/nayaramelo67-netizen/filmes-app.git
- **Sandbox (CodeSandbox):** https://codesandbox.io/p/github/nayaramelo67-netizen/filmes-app/main?import=true

---

### Licença
Projeto acadêmico — uso didático.
