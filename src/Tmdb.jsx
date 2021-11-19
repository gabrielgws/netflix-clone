const API_KEY = '8d0635aead71f16b8884629dfc6366a4';
const API_BASE = 'https://api.themoviedb.org/3';

/*
- originais da netflix
- recomendados (trending)
- ação (top rated)
- comédia
- terror
- romance
- documentários
*/

const basicFetch = async (endpoint) => {
  const req = await fetch(`${API_BASE}${endpoint}`);
  const json = await req.json();
  return json;
}

const list = {
  getHomeList: async () =>{
    return[{
      slug: 'originals',
      title: 'Originals da Netflix',
      items: await basicFetch(`/discover/tv?with_network=213&language=pt-BR&api_key=${API_KEY}`)
    },
    {
      slug: 'trending',
      title: 'Recomendados para você',
      items: await basicFetch(`/trending/all/week?language=pt-BR&api_key=${API_KEY}`)
    },
    {
      slug: 'toprated',
      title: 'Em alta',
      items: await basicFetch(`/movie/top_rated?language=pt-BR&api_key=${API_KEY}`)
    },
    {
      slug: 'action',
      title: 'Ação',
      items: await basicFetch(`/discover/movie?with_genrs=28&language=pt-BR&api_key=${API_KEY}`)
    },
    {
      slug: 'comedy',
      title: 'Comédia',
      items: await basicFetch(`/discover/movie?with_genrs=35&language=pt-BR&api_key=${API_KEY}`)
    },
    {
      slug: 'horror',
      title: 'Terror',
      items: await basicFetch(`/discover/movie?with_genrs=27&language=pt-BR&api_key=${API_KEY}`)
    },
    {
      slug: 'romance',
      title: 'Romance',
      items: await basicFetch(`/discover/movie?with_genrs=10749&language=pt-BR&api_key=${API_KEY}`)
    },
    {
      slug: 'documentary',
      title: 'Documantário',
      items: await basicFetch(`/discover/movie?with_genrs=99&language=pt-BR&api_key=${API_KEY}`)
    },
  ]
  },
  getMovieInfo: async (movieId, type) => {
    let info = {};

    if(movieId) {
      switch(type) {
        case 'movie':
          info = await basicFetch(`/movie/${movieId}?language=pt-BR&api_key=${API_KEY}`);
        break;
        case 'tv': 
          info = await basicFetch(`/tv/${movieId}?language=pt-BR&api_key=${API_KEY}`);
        break;
        default:
          info = null;
        break;
      }
    }

    return info
  }
}

export default list;