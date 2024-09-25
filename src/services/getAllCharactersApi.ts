import axios from 'axios';
import { responseAPI } from '../models/RicAndMortyAPI';



export const getAllCharactersApi = async (): Promise<responseAPI> => {
    const URL = 'https://rickandmortyapi.com/api/character';
    try {
        const response = await axios.get<responseAPI>(URL);
        return response.data
    } catch (error) {
        console.error('Error fetching todos:', error);
        throw error;
    }
};