import axios from 'axios';

export function getCookie(name: string) {
    const value = `; ${document.cookie}`;
    const parts: string[] = value.split(`; ${name}=`);
    if (parts.length === 2) return parts.pop()?.split(';').shift();
    return null;
}

export function clearCookie(name: string) {
    document.cookie = `${name}=; expires=Thu, 01 Jan 1970 00:00:00 GMT; path=/;`;
}

const apiClient = axios.create({
  baseURL: 'https://g-cup-be.vercel.app',
  headers: {
    'Content-Type': 'application/json',
  },
  withCredentials: true
});

export default apiClient;