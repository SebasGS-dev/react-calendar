
export interface characterAPI {
    id: number;
    name: string;
    origin: {
        "name": string;
    };
}

export interface responseAPI {
    results: characterAPI[];
}