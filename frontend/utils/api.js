import { STRAPI_ACCESS_TOKEN, STRAPI_URL } from './url';

export const fetchDataFromApi = async (endpoint) => {
    const options = {
        method: 'GET',
        headers: {
            'Authorization': `Bearer ${STRAPI_ACCESS_TOKEN}`
        }
    };

    const response = await fetch(`${STRAPI_URL}${endpoint}`, options);
    const data = await response.json();

    return data;
}