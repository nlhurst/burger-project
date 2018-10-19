import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://burger-project-bcbef.firebaseio.com/'
});

export default instance;
