import React, {useContext} from 'react';
import {MovieContext} from './MovieContext';


const Nav = () => {

    const[movies, setMovies] = useContext(MovieContext);
    return(
        <div>
            <h3>Miwel</h3>
            <p>Lista de peliculas:{movies.length} </p>
        </div>
    );
}

export default Nav;