import axios from 'axios'

const API = 'http://localhost:4000/api';

export const registerRequest = async user => {
  try {
    const response = await axios.post(`${API}/register`, user);
    console.log(response.data);
    return response;
  } catch (error) {
    console.error(error);
    throw error;
  }
};
  
export const loginRequest = async user => {
  try {
    const response = await axios.post(`${API}/login`, user);
    console.log(response.data);
    return response;
  } catch (error) {
    console.error(error);
    throw error;
  }
};