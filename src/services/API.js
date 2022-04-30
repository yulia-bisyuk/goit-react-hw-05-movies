// https://api.themoviedb.org/3/trending/all?api_key=adc407dcb2a6c0a42279d4aedc8d3de0
// adc407dcb2a6c0a42279d4aedc8d3de0 - api_key
const axios = require('axios').default;
axios.defaults.baseURL = 'https://api.themoviedb.org/3/';

export async function getTrending() {
  try {
    const response = await axios.get(
      'trending/all/week?api_key=adc407dcb2a6c0a42279d4aedc8d3de0'
    );
    console.log(response.data);
    return response.data;
  } catch (error) {
    console.error(error);
  }
}

// export async function getPosters(id) {
//     try {
//     const response = await axios.get('/movie/{id}/images?api_key=adc407dcb2a6c0a42279d4aedc8d3de0');
//       console.log(response.data);
//       return response.data;
//   } catch (error) {
//     console.error(error);
//   }
// }
