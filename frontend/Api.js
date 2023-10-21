import axios from 'axios'

export const API = 'http://172.20.10.12:3000/api';

export const registerRequest = async user => {
  try {
    const response = await axios.post(`${API}/register`, user);
    return response;
  } catch (error) {
    console.error(error);
    throw error;
  }
};
  
export const loginRequest = async user => {
  try {
    const response = await axios.post(`${API}/login`, user);
    return response;
  } catch (error) {
    console.error(error);
    throw error;
  }
};