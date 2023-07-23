import axios from 'axios';

const API_KEY = '36718800-865d7f109e5b1a08d99b671a9';
const per_page = 12;

export const fetchItems = async (query, page) => {
  const response = await axios.get(
    `https://pixabay.com/api/?key=${API_KEY}&q=${query}&page=${page}&image_type=photo&orientation=horizontal&per_page=${per_page}`
  );

  return response;
};