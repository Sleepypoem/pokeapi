import { useContext } from "react";
import { PokemonContext } from "../context/PokemonContextProvider";


function SearchPokemon() {

    const { setSearchedPokemon, setSearching, setFiltering } = useContext(PokemonContext);
    const handleSubmit = async (e) => {
        let text = e.target[0].value;
        e.preventDefault();

        if (text.length === 0) {
            setSearching(false);
        } else {
            setSearchedPokemon(text);
            setSearching(true);
        }
    }

    const returnToList = (e) => {
        let text = e.target.value;
        if (text.length === 0) {
            setSearching(false);
        }
    }

    return (<>
        <form className="d-flex" onSubmit={handleSubmit}>
            <input onChange={returnToList} className="form-control me-2" type="search" placeholder="Buscar" aria-label="Search" />
            <button className="btn btn-outline-success" type="submit">Buscar</button>
        </form>
    </>);

}

export default SearchPokemon;