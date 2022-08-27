

export const searchPokemon = async (pokemon) => {
    try {
        let responseObject = { data: null, response: null }
        let url = `https://pokeapi.co/api/v2/pokemon/${pokemon}`;
        const response = await fetch(url);
        const data = await response.json();
        responseObject = { data, response: 200 }

        return responseObject;
    } catch (err) {
        let responseObject = { data: null, response: 404 }
        return responseObject;
    }
};

export const getPokemons = async (limit = 12, offset = 0) => {
    try {
        let responseObject = { data: null, response: null }
        let url = `https://pokeapi.co/api/v2/pokemon?limit=${limit}&offset=${offset}`;
        const response = await fetch(url);
        const data = await response.json();
        responseObject = { data, response: 200 }

        return responseObject;
    } catch (err) {
        let responseObject = { data: null, response: 404 }
        return responseObject;
    }
};

export const getPokemonData = async (url) => {
    try {
        let responseObject = { data: null, response: null }
        const response = await fetch(url);
        const data = await response.json();
        responseObject = { data, response: 200 }

        return responseObject;
    } catch (err) {
        let responseObject = { data: null, response: 404 }
        return responseObject;
    }
};