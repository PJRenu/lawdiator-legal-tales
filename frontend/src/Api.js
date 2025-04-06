import axios from 'axios';

const API_BASE = process.env.REACT_APP_API_BASE || 'http://localhost:5000';

export const searchCases = async (query) => {
    try {
        const response = await axios.post(`${API_BASE}/search`, { query });
        return response.data;
    } catch (error) {
        console.error('API Error:', error);
        return [];
    }
};