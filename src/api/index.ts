type ENDPOINTS = 'data';

export type RESPONSE_DATA = {
    greeting: string;
};

const getJson = async <T>(endpoint: ENDPOINTS): Promise<T> => {
    const path =
        process.env.NODE_ENV === 'development'
            ? `http://localhost:3001/api/${endpoint}`
            : `https://raw.githubusercontent.com/cowboygh/gh-pages-demo/gh-pages/static/db/${endpoint}.json`;

    const response = await fetch(path);
    return await response.json();
};

const api = {
    get: {
        data: () => getJson<RESPONSE_DATA>('data'),
    },
};

export default api;
