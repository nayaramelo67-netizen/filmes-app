# Catálogo de Filmes (React + TMDB)

Aplicação React (Vite) para a disciplina **Frameworks Web I**:

- **Roteamento** com React Router (Início, Filmes, Detalhes, Sobre)
- **Hooks** (estado, efeito) + atalho de teclado **CTRL+K**
- **Eventos** (clique, input, submit)
- **Consumo da API**: The Movie Database (TMDB)
- **Filtro por ano** e **busca por título**
- **CSS custom** aplicado em todos os componentes
- **Deploy** simples no CodeSandbox

## 🔑 Configuração da chave TMDB

1. Crie uma conta em https://www.themoviedb.org/ e gere uma **API Key (v3)**.
2. Crie um arquivo **`.env`** na raiz do projeto com:
```
VITE_TMDB_API_KEY=SEU_TOKEN_AQUI
```
> Em CodeSandbox, vá em **Project Settings → Environment Variables** e adicione `VITE_TMDB_API_KEY`.

⚠️ A chave ficará no front-end (exposta). Para trabalhos acadêmicos é aceitável. Em produção, use um backend/proxy.

## ▶️ Rodar localmente

```bash
npm install
npm run dev
```

## Rotas principais
- `/` — Página inicial com **populares** e busca
- `/filmes` — Catálogo com **filtro por ano** e busca
- `/filmes/:id` — **Detalhes** do filme
- `/sobre` — Descrição do que o projeto demonstra

Boa entrega! 🎬
