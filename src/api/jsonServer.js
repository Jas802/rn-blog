import axios from 'axios';

export default axios.create({
  baseURL: 'http://23c9b73a3fd7.ngrok.io', //ngrok requires url to be updated upon expires session
});
