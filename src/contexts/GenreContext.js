import React, {createContext, useReducer} from 'react';
import rootReducer from '../reducers/rootReducer';

export const GenreContext = createContext();

const GenreContextProvider = (props) => {
    const [genre, setGenre] = useReducer(rootReducer);
}