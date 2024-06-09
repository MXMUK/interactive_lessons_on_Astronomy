import axios from "axios";

interface Credentials {
  admin: {
    email: string
    password: string
  }
}

const API = axios.create({
  baseURL: 'https://onlyreels-be-2ad7ba6db5a8.herokuapp.com/',
});

// API.interceptors.request.use(
//   (config) => {
//     const token = '{TOKEN}'
//     const auth = token ? `Bearer ${token}` : '';
//     config.headers.common['Authorization'] = auth;
//     return config;
//   },
//   (error) => Promise.reject(error),
// );

// Function to retrieve token from session storage
// const getToken = (): string | null => {
//   return sessionStorage.getItem('jwtToken');
// };

// Automatically add the JWT token to the Authorization header
API.interceptors.request.use((config) => {
  // const token = getToken();

  // if (token) {
  //   config.headers.Authorization = `Bearer ${token}`;
  // } 
  
  return config;
});

export const adminLogin = async (credentials: Credentials) => {
  try {
    const response = await API.post('/admin/login', credentials);
    
    return response;
  } catch (error) {
    throw error;
  }
};

// export const saveToken = (token: string) => {
//   sessionStorage.setItem('jwtToken', token);
// };

// export const removeToken = () => {
//   sessionStorage.removeItem('jwtToken');
// };
