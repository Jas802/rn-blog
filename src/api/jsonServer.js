import axios from 'axios';

export default axios.create({
  baseURL: 'http://8664c8260696.ngrok.io', //ngrok requires url to be updated upon expires session
});
