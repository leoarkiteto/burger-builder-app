import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://burger-builder-de3b3.firebaseio.com/',
});

export default instance;
