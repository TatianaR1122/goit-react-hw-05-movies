import axios from 'axios';

const API_KEY = 'ecbb02bdf25345a36505e43f9c0e7ce1';
axios.defaults.baseURL = 'https://api.themoviedb.org/3/';

export const getTrending = async () => {
  const response = await axios.get(`trending/movie/day?api_key=${API_KEY}`);
  return response.data.results;
};

export const getDetails = async movieId => {
  const response = await axios.get(`movie/${movieId}?api_key=${API_KEY}`);
  return response.data;
};

export const getCast = async movieId => {
  const response = await axios.get(
    `movie/${movieId}/credits?api_key=${API_KEY}`
  );
  return response.data.cast;
};

export const getReviews = async movieId => {
  const response = await axios.get(
    `movie/${movieId}/reviews?api_key=${API_KEY}`
  );
  return response.data.results;
};

export const getQuery = async query => {
  const response = await axios.get(
    `search/movie?api_key=${API_KEY}&query=${query}`
  );
  return response.data.results;
};
