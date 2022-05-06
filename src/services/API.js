// https://api.themoviedb.org/3/trending/all?api_key=adc407dcb2a6c0a42279d4aedc8d3de0
const APIkey = 'adc407dcb2a6c0a42279d4aedc8d3de0';
const axios = require('axios').default;
axios.defaults.baseURL = 'https://api.themoviedb.org/3/';

export async function getTrending(page) {
  try {
    const response = await axios.get(
      `trending/all/week?api_key=${APIkey}&${page}`
    );
    // console.log(response.data);
    return response.data;
  } catch (error) {
    console.error(error);
  }
}

export async function getFilmsByQuery(page, query) {
  try {
    const response = await axios.get(
      `/search/movie?api_key=${APIkey}&query=${query}&page=${page}`
    );
    // console.log(response.data);
    return response.data;
  } catch (error) {
    console.error(error);
  }
}

export async function getFilmById(id) {
  try {
    const response = await axios.get(`/movie/${id}?api_key=${APIkey}`);
    // console.log(response.data);
    return response.data;
  } catch (error) {
    console.error(error);
  }
}

export async function getCast(id) {
  try {
    const response = await axios.get(`/movie/${id}/credits?api_key=${APIkey}`);
    // console.log(response.data);
    return response.data;
  } catch (error) {
    console.error(error);
  }
}

export async function getReviews(id) {
  try {
    const response = await axios.get(`/movie/${id}/reviews?api_key=${APIkey}`);
    console.log(response.data);
    return response.data;
  } catch (error) {
    console.error(error);
  }
}
