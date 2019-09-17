import axios from 'axios';

// Build a module that "creates" a new "instamce" of axios object
// -baseURL
// -header object -> authorization header with the  token

export const axiosWithAuth = () => {
    const token = localStorage.getItem('token');
  
    return axios.create({
      baseURL: 'http://localhost:5000/api',
      headers: {
        Authorization: token
      }
    });
  };
  