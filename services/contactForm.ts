import axios from "axios";

export interface ContactUsRequest {
  contact_us_request: {
    name: string
    email: string
    message: string
  }
}

const API = axios.create({
  baseURL: 'https://api.onlyreels.com',
});

export const sendContactFrom = async (credentials: ContactUsRequest) => {
  try {
    const response = await API.post('/contact_us_requests', credentials);
    
    return response;
  } catch (error) {
    throw error;
  }
};
