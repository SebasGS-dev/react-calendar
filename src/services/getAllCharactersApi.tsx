import axios from 'axios';

export const getAllCharactersApi = async () => {
    const URL = 'https://rickandmortyapi.com/api/character';
    try {
        const response = await axios.get(URL);
        // console.log(response);
        return response;
    } catch (error) {
        console.error('Error fetching todos:', error);
        throw error;
    }
};