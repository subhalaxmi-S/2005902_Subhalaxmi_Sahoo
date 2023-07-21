import axios from 'axios';

const BASE_URL = 'http://20.244.56.144';

// API function to register your company
export const registerCompany = async (companyName, ownerName, ownerEmail, rollNo, accessCode) => {
  try {
    const response = await axios.post(`${BASE_URL}/train/register`, {
      companyName,
      ownerName,
      ownerEmail,
      rollNo,
      accessCode
    });
    return response.data;
  } catch (error) {
    console.error('Error registering company:', error.message);
    throw error;
  }
};

// API function to obtain the authorization token
export const getAuthToken = async (companyName, clientID, ownerName, ownerEmail, rollNo, clientSecret) => {
  try {
    const response = await axios.post(`${BASE_URL}/train/auth`, {
      companyName,
      clientID,
      ownerName,
      ownerEmail,
      rollNo,
      clientSecret
    });
    return response.data.access_token;
  } catch (error) {
    console.error('Error obtaining authorization token:', error.message);
    throw error;
  }
};

// API function to fetch all train details
export const getAllTrains = async (token) => {
  try {
    const response = await axios.get(`${BASE_URL}/train/trains`, {
      headers: {
        Authorization: `Bearer ${token}`
      }
    });
    return response.data;
  } catch (error) {
    console.error('Error fetching all trains:', error.message);
    throw error;
  }
};

// API function to fetch details of a specific train
export const getTrainDetails = async (trainNumber, token) => {
  try {
    const response = await axios.get(`${BASE_URL}/train/trains/${trainNumber}`, {
      headers: {
        Authorization: `Bearer ${token}`
      }
    });
    return response.data;
  } catch (error) {
    console.error('Error fetching train details:', error.message);
    throw error;
  }
};
