import React, {useState, createContext} from 'react';

export const MovieContext = createContext();


export const MovieProvider = props => {
    const [movies, setMovies] = useState([
        {
            name:'Harry Potter',
            price: '$10',
            id:23124
        },
        {
            name:'Gay Mostron',
            price: '$10',
            id:2566124
        },
        {
            name:'Inseccion',
            price: '$10',
            id:23524
        }
    ]);
      

    return (
        <MovieContext.Provider value={[movies, setMovies]}>
            {props.children}
        </MovieContext.Provider>
    );
}
