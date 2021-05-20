import {
  originals,
  trending,
  toprated,
  action,
  documentary,
  movieInfo,
} from "./utils";

const API_KEY = "bb2818a2abb39fbdf6da79343e5e376b";
const API_BASE = "https://api.themoviedb.org/3";

const getData = async (endpoint) => {
  return (await fetch(`${API_BASE}${endpoint}`)).json();
};

export default {
  getHomeList: async () => {
    return [
      {
        slug: "originals",
        title: "Originais do Netflix",
        items: await getData(
          `/discover/tv/?with_network=213&language=pt-BR&api_key=${API_KEY}`
        ).catch(() => originals),
      },
      {
        slug: "trending",
        title: "Recomendados para Você",
        items: await getData(
          `/trending/all/week?language=pt-BR&api_key=${API_KEY}`
        ).catch(() => trending),
      },
      {
        slug: "toprated",
        title: "Em Alta",
        items: await getData(
          `/movie/top_rated?&language=pt-BR&api_key=${API_KEY}`
        ).catch(() => toprated),
      },
      {
        slug: "action",
        title: "Ação",
        items: await getData(
          `/discover/movie?with_genres=28&language=pt-BR&api_key=${API_KEY}`
        ).catch(() => action),
      },
      {
        slug: "documentary",
        title: "Documentários",
        items: await getData(
          `/discover/movie?with_genres=99&language=pt-BR&api_key=${API_KEY}`
        ).catch(() => documentary),
      },
    ];
  },

  getMovieInfo: async (movieId, type) => {
    if (type === "tv") {
      return await getData(
        `/tv/${movieId}?language=pt-BR&api_key=${API_KEY}`
      ).catch(() => movieInfo[movieId]);
    }

    return null;
  },
};
