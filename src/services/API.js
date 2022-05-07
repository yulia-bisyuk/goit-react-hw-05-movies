const APIkey = 'adc407dcb2a6c0a42279d4aedc8d3de0';

const axios = require('axios').default;
axios.defaults.baseURL = 'https://api.themoviedb.org/3/';

export async function getTrending(page) {
  const response = await axios.get(
    `trending/all/week?api_key=${APIkey}&page=${page}`
  );
  return response.data;
}

export async function getFilmsByQuery(query, page) {
  const response = await axios.get(
    `/search/movie?api_key=${APIkey}&query=${query}&page=${page}`
  );
  return response.data;
}

export async function getFilmById(id) {
  const response = await axios.get(`/movie/${id}?api_key=${APIkey}`);
  return response.data;
}

export async function getCast(id) {
  const response = await axios.get(`/movie/${id}/credits?api_key=${APIkey}`);
  return response.data;
}

export async function getReviews(id) {
  const response = await axios.get(`/movie/${id}/reviews?api_key=${APIkey}`);
  return response.data;
}
