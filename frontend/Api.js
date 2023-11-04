import axios from 'axios'

export const API = 'http://192.168.1.13:3000/api';

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

export const createRequest = async request => {
  try {
    const response = await axios.post(`${API}/requests`, request);
    return response;
  } catch (error) {
    console.error(error);
    throw error;
  }
};

export const getRequests = async () => {
  try {
    const response = await axios.get(`${API}/requests`);
    return response;
  } catch (error) {
    console.error(error);
    throw error;
  }
};

export const getRequest = async id => {
  try {
    const response = await axios.get(`${API}/requests/${id}`);
    return response;
  } catch (error) {
    console.error(error);
    throw error;
  }
}

export const createLog = async log => {
  try {
    const response = await axios.post(`${API}/logs`, log);
    return response;
  } catch (error) {
    console.error(error);
    throw error;
  }
}

export const getLog = async id => {
  try {
    const response = await axios.get(`${API}/logs/${id}`);
    return response;
  } catch (error) {
    console.error(error);
    throw error;
  }
}

export const createMessage = async message => {
  try {
    const response = await axios.post(`${API}/messages`, message);
    return response;
  } catch (error) {
    console.error(error);
    throw error;
  }
};

export const getMessages = async id => {
  try {
    const response = await axios.get(`${API}/messages/${id}`);
    return response;
  } catch (error) {
    console.error(error);
    throw error;
  }
};