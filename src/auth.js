import { jwtDecode } from 'jwt-decode';

export const login = (email, password) => {
  if (email === 'user@example.com' && password === 'password') {
    const token = 'fake-jwt-token';
    localStorage.setItem('token', token);
    return true;
  }
  return false;
};

export const logout = () => {
  localStorage.removeItem('token');
};

export const getToken = () => {
  return localStorage.getItem('token');
};

export const getUser = () => {
  const token = getToken();
  if (!token) return null;
  return jwtDecode(token);
};

export const isAuthenticated = () => {
  return !!getToken();
};
