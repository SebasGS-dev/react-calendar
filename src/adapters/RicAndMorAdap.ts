import { characterAPI } from "../models/RicAndMortyAPI";
import { characterDOM } from "../models/RicAndMortyDOM";

export const characterAdapter = (characters:characterAPI[]): characterDOM[] => {
    return characters.map((character) => ({
        id: character.id,
        name: character.name,
        originName: character.origin.name,
    }));
}