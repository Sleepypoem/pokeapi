import React, { useState, useEffect } from 'react';
import { getPokemons, searchPokemon, getPokemonData } from '../js/data';
import { LoadingMessage } from './LoadingMessage';
import PokemonCard from './PokemonCard';

function PokedexList() {

    /* ******************************************************************** Estados ******************************************************************* */
    const [page, setPage] = useState(0);
    const [pokemonList, setPokemonList] = useState([]);
    const [loading, setLoading] = useState(true);
    const [pokemons, setPokemons] = useState([]);
    const [nextPage, setNextPage] = useState("");
    const [prevPage, setPrevPage] = useState(null);
    /* ************************************************************************************************************************************************ */
    /* *********************************************** Funcion para traer los pokemons y llenar el array ********************************************** */

    //crea la lista de los nombres y url de los pokemon
    const createPokemonList = async (amount, offset) => {
        setLoading(true);
        let response = await getPokemons(amount, offset);
        setNextPage(response.data.next)
        setPokemonList(response.data.results)
        setLoading(false);
    }

    //se encarga de traer los pokemons por sus url y meterlos a la lista
    const loadPokemon = async (list) => {
        setLoading(true);
        let pokemonList = Promise.all(list?.map(async (ele) => {

            let pokemonResponse = await searchPokemon(ele.name);
            return pokemonResponse.data;
        }))
        pokemonList.then((p) => {
            setPokemons(p);
            setLoading(false);
        })
    }

    useEffect(() => {
        createPokemonList(8, 0);
    }, [])

    useEffect(() => {
        loadPokemon(pokemonList);
    }, [pokemonList])

    //retrocede la pagina y llena la lista
    const prev = async () => {
        if (prevPage === null) return;
        let newList = await getPokemonData(prevPage);
        setPrevPage(newList?.data?.previous)
        setNextPage(newList?.data?.next)
        setPokemonList(newList.data.results)
        setPage(page - 1);

    }


    //avanza la pagina y llena la lista
    const next = async () => {

        if (nextPage === null) return;
        let newList = await getPokemonData(nextPage);
        setNextPage(newList?.data?.next)
        setPrevPage(newList?.data?.previous)
        setPokemonList(newList.data.results)
        setPage(page + 1);

    }

    return (
        <>
            <div className='w-100 mt-1 container d-flex justify-content-around' >
                <button className='btn btn-primary btn-circle' onClick={prev}>&lt;</button>
                <button className='btn btn-primary btn-circle' onClick={next}>&gt;</button>
            </div>
            <div className='container d-flex flex-row flex-wrap mx-auto  p-4 justify-content-around'>

                {loading ? <LoadingMessage /> :
                    pokemons.map((ele, idx) => {
                        return <PokemonCard key={idx} pokemon={ele} />
                    })
                }
            </div>


        </>
    );
}

export default PokedexList;