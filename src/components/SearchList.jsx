import React, { useContext, useEffect, useState } from 'react';
import { PokemonContext } from '../context/PokemonContextProvider';
import { searchPokemon } from '../js/data';
import { LoadingMessage } from './LoadingMessage';
import PokemonCard from './PokemonCard';

function SearchList() {

    const { loading, setLoading, searchedPokemon } = useContext(PokemonContext);
    const [pokemon, setPokemon] = useState(null);
    const [notFound, setNotFound] = useState(false);

    const getPokemon = async () => {
        setLoading(true);
        let response = await searchPokemon(searchedPokemon);
        if (response.response === 404) {
            setNotFound(true);
        }
        setPokemon(response.data);
        setLoading(false);

    }

    useEffect(() => {
        getPokemon();
    }, [searchedPokemon])

    var returnElement = <PokemonCard pokemon={pokemon} />;
    if (notFound) {
        returnElement = <h1>No se encontro</h1>
    }

    return (
        <div className='container d-flex flex-row flex-wrap mx-auto my-5 p-5 justify-content-around'>{loading ? <LoadingMessage /> :
            returnElement
        }
        </div>
    );
}

export default SearchList;