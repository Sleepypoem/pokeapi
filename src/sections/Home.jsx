import React, { useContext, useEffect, useState } from 'react';
import FilteredList from '../components/FilteredList';
import Filters from '../components/Filters';
import { LoadingMessage } from '../components/LoadingMessage';
import PokedexList from '../components/PokedexList';
import SearchList from '../components/SearchList';
import { PokemonContext } from '../context/PokemonContextProvider';

function Home() {

    /* ******************************************************************** Estados ******************************************************************* */
    const { searching, filtering, filters } = useContext(PokemonContext);
    const [stateFilters, setStateFilters] = useState([])
    /* ************************************************************************************************************************************************ */

    useEffect(() => {
        setStateFilters(filters);
    }, [filters])

    var returnElement = <PokedexList />;
    if (searching) {
        returnElement = <SearchList />;
    } else if (filtering) {
        returnElement = <FilteredList filters={stateFilters} />;
    }

    return (
        <div>{searching ? <div></div> : <Filters />}
            {
                returnElement
            }
        </div>
    );

}

export default Home;