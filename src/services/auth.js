import axios from 'axios';
export default {
  getToken: (data) => axios.post('https://face.ox-sys.com/security/auth_check', data, {
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' }
  }),
};
