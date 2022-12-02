import axios from 'axios';

axios.defaults.baseURL = 'https://api.themoviedb.org/3/';

const API_KEY = '003c13e6e40e640c229ce092669f5920';

export async function getTrendingMovies() {
  try {
    const response = await axios.get(`trending/movie/day?api_key=${API_KEY}`);
    return response.data.results;
  } catch (error) {
    console.error(error);
  }
}

export async function getMovieByName(query) {
  try {
    const response = await axios.get(`search/movie?api_key=${API_KEY}`);
    return response.data.results;
  } catch (error) {
    console.error(error);
  }
}

export async function getMovieInfo(movieId) {
  try {
    const response = await axios.get(`movie/${movieId}?api_key=${API_KEY}`);
    return response.data.results;
  } catch (error) {
    console.error(error);
  }
}

export async function getMovieCast(movieId) {
  try {
    const response = await axios.get(
      `movie/${movieId}/credits?api_key=${API_KEY}`
    );
    return response.data.results;
  } catch (error) {
    console.error(error);
  }
}

export async function getMovieReviews(movieId) {
  try {
    const response = await axios.get(
      `movie/${movieId}/reviews?api_key=${API_KEY}`
    );
    return response.data.results;
  } catch (error) {
    console.error(error);
  }
}
