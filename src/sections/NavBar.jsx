import React from 'react';
import { Link } from "react-router-dom";
import SearchPokemon from '../components/SearchPokemon';


function NavBar() {
    return (
        <div className='container'>
            <nav className="navbar fixed-top navbar-expand-xxl navbar-dark bg-dark">
                <div className="container-fluid">
                    <Link className="navbar-brand" to="/">POKEAPP || Anibal Alexander Garcia Blanco</Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <div className="navbar-nav me-auto mb-2 mb-lg-0">

                        </div>
                        <SearchPokemon />
                    </div>
                </div>
            </nav>
        </div>
    );
}

export default NavBar;