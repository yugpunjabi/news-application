// import { create } from 'apisauce';

// const api = create({
//   baseURL: 'https://newsapi.org/v2',
// });

// const apiKey = '8dfc38fc20214de8b3f9e54d4f907d0f';

// // Get top headlines
// const getTopHeadline = () =>
//   api.get(`/top-headlines?country=us&apiKey=${apiKey}`);

// // Get articles by category (or keyword)
// const getByCategory = (category) =>
//   api.get(`/everything?q=${category}&apiKey=${apiKey}`);

// export default {
//   getTopHeadline,
//   getByCategory,
// };

import { create } from 'apisauce';

const api = create({
  baseURL: 'https://gnews.io/api/v4',
});

const apiKey = '00e7c27b40bd23a10cc8093b6eafdd36'; // replace with your real key

// Fetch top headlines
const getTopHeadline = () =>
  api.get(`/top-headlines?lang=en&max=70&&token=${apiKey}`);

// Fetch by category (or keyword)
const getByCategory = (category) =>
  api.get(`/search?q=${category}&lang=en&max=70&token=${apiKey}`);

export default {
  getTopHeadline,
  getByCategory,
};

