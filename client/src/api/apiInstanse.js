import axios from "axios";

const instance = axios.create({
  baseURL:'http://localhost:8088',
  headers: {
    post: {
      'Access-Control-Allow-Origin': 'X-Requested-With, content-type'
    }
  }
});

export default instance;
