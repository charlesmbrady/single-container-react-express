import axios from "axios";

export default {
  getCheck: function() {
      return axios.get('/api/check');
  },
  newCheck: function(check) {
      return axios.post('/api/check', check);
  }
};