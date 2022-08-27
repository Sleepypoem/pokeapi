import React, { useState, createContext } from 'react';

export const PokemonContext = createContext();

export function PokemonContextProvider(props) {

    /* ******************************************************************** Estados ******************************************************************* */
    const [loading, setLoading] = useState(true);
    const [searching, setSearching] = useState(false);
    const [filtering, setFiltering] = useState(false);
    const [filters, setFilters] = useState([]);
    const [searchedPokemon, setSearchedPokemon] = useState("");
    /* ************************************************************************************************************************************************ */

    const contextData = {
        loading,
        searchedPokemon,
        setSearchedPokemon,
        setLoading,
        setSearching,
        searching,
        filters,
        setFilters,
        filtering,
        setFiltering
    };

    return (
        <>
            <PokemonContext.Provider value={contextData}>
                {props.children}
            </PokemonContext.Provider>
        </>
    );
}

export default PokemonContextProvider;