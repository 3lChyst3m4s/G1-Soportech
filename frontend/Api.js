import axios from 'axios'

const API = 'http://192.168.30.1:3000/api';

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