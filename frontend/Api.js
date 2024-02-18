import axios from 'axios'

export const API = 'https://g1-soportech.vercel.app/api';

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

export const getRequests = async id => {
  try {
    const response = await axios.get(`${API}/requestsglobal/${id}`);
    return response;
  } catch (error) {
    console.error(error);
    throw error;
  }
};

export const getRequestsFiltered = async id => {
  try {
    const response = await axios.get(`${API}/requestsfiltered/${id}`);
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

export const updateRequest = async (id, request) => {
  try {
    const response = await axios.put(`${API}/requests/${id}`, request);
    return response;
  } catch (error) {
    console.error(error);
    throw error;
  }
}

export const getCountRequests = async id => {
  try {
    const response = await axios.get(`${API}/countrequests/${id}`);
    const data = await response.data;
    const { count } = data;
    return count;
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

export const createForm = async form => {
  try {
    const response = await axios.post(`${API}/forms`, form);
    return response;
  } catch (error) {
    console.error(error);
    throw error;
  }
};

export const getForm = async id => {
  try {
    const response = await axios.get(`${API}/forms/${id}`);
    return response;
  } catch (error) {
    console.error(error);
    throw error;
  }
};