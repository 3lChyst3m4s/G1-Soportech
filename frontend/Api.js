import axios from 'axios'

const API = 'http://localhost:3000';

export const getUsers = async () => {
  const res = await fetch(API);
  return await res.json();
}
export const registerRequest = user => axios.post(`${API}/register`, user);
export const loginRequest = user => axios.post(`${API}/login`, user);