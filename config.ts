// Base URL
const API_URL: string = 'http://localhost:8070/';
const LOCAL_API: string = 'http://localhost:3000/'

// Specific URL with endpoints
const SEARCH_BASE_URL: string = `${API_URL}product?productName=`;
const PRODUCT_BASE_URL: string = `${API_URL}product`;

const USER_BASE_URL: string = `${API_URL}user`;
const LOGIN_BASE_URL: string = `${API_URL}login`;
const LOGOUT_BASE_URL: string = `${API_URL}logout`;

export {
    API_URL,
    SEARCH_BASE_URL,
    PRODUCT_BASE_URL,
    USER_BASE_URL,
    LOGIN_BASE_URL,
    LOCAL_API,
    LOGOUT_BASE_URL,
}