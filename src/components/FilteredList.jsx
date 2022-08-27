import React, { useEffect, useState } from 'react';
import { getPokemonData, getPokemons, searchPokemon } from '../js/data';
import { LoadingMessage } from './LoadingMessage';
import PokemonCard from './PokemonCard';

function FilteredList({ filters }) {

    /* ******************************************************************** Estados ******************************************************************* */
    const [filteredList, setFilteredList] = useState([]);
    const [slicedList, setSlicedList] = useState([]);
    const [pokemonList, setPokemonList] = useState([]);
    const [loading, setLoading] = useState(true);
    const [pokemons, setPokemons] = useState([]);
    const [nextPage, setNextPage] = useState(0);
    const [page, setPage] = useState(0);
    /* ************************************************************************************************************************************************ */

    //Funcion para traer los pokemons y llenar el array 
    const createPokemonList = async (amount, offset) => {
        let response = await getPokemons(amount, offset);
        setNextPage(response.data.next);
        setPokemonList(response.data.results)
    }

    const sliceList = async (start, end) => {
        setSlicedList(filteredList.slice(start, end));
    }

    //se encarga de traer los pokemons por sus url y meterlos a la lista
    const loadPokemon = async (list) => {
        let pokemonList = Promise.all(list.map(async (ele) => {

            let pokemonResponse = await searchPokemon(ele.name);
            return pokemonResponse.data;
        }))
        pokemonList.then((p) => {
            setPokemons(p);
            fillFilterList();
        })
    }

    const fillList = async () => {
        if (nextPage === null) {
            setLoading(false);
            return;
        }
        setLoading(true);
        let newList = await getPokemonData(nextPage);
        setNextPage(newList?.data?.next)
        setPokemonList(newList?.data?.results)
    }

    const prev = async () => {
        if (page === 0) return;
        setPage(page - 1);
    }

    const next = async () => {
        if (page >= Math.floor(filteredList.length / 8)) {
            setPokemons([]);
            setPokemonList([]);
            return;

        }
        setPage(page + 1)
    }

    /* ************************************************************************************************************************************************ */
    const filterPokemon = async (pokemons) => {
        let arrayFilteredList = pokemons.filter(p => {
            if (p?.types?.length > 0) {
                if (filters.includes(p?.types[0]?.type?.name) || filters.includes(p?.types[1]?.type?.name)) {
                    return p;
                }
            } else {
                if (filters.includes(p?.types[0]?.type?.name)) {
                    return p;
                }
            }

        })

        let tempArray = filteredList;
        let merged = tempArray.concat(arrayFilteredList);
        setFilteredList(merged);
    }

    const fillFilterList = async () => {
        fillList()
        filterPokemon(pokemons);
    }

    useEffect(() => {
        sliceList(page * 8, (page * 8) + 8);
    }, [page, loading])

    useEffect(() => {
        createPokemonList(64, 0);
        loadPokemon(pokemonList);
    }, [])

    useEffect(() => {
        setPage(0)
        setPokemonList([]);
        setPokemons([]);
        setFilteredList([]);
        setSlicedList([])
        createPokemonList(64, 0);
        loadPokemon(pokemonList);
    }, [filters])

    useEffect(() => {
        loadPokemon(pokemonList);

    }, [pokemonList])

    return (<>
        <div className='w-100 mt-1 container d-flex justify-content-around' >
            <button className='btn btn-primary btn-circle' onClick={prev}>&lt;</button>
            <button className='btn btn-primary btn-circle' onClick={next}>&gt;</button>
        </div>
        <div className='container d-flex flex-row flex-wrap mx-auto p-4 justify-content-around'>


            {loading ? <LoadingMessage /> : slicedList.map((ele, idx) => {
                return < PokemonCard key={idx} pokemon={ele} />
            })}
        </div>
    </>
    );
}

export default FilteredList;