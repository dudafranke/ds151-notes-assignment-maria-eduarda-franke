import React, { useState, useReducer, createContext } from "react";
import notesReducer from '../reducers/notesReducer';

const NotesContext = createContext();

const NotesProvider = ({ children }) => {

    const [notes, dispatch] = useReducer(notesReducer, [
        { id: 0, title: 'UFPR', content: 'Análise e Desenvolvimento de Sistemas' },
        { id: 1, title: 'ToDo', content: 'Eat. > Sleep. >\nCode. > Repeat.' },
        { id: 2, title: 'Facebook', content: 'Password: potato123' },
    ]);

    const [id, setId] = useState(4);

    const createNote = (newTitle, newContent) => {
        dispatch({
            type:'createNote',
            id: id,
            title: newTitle,
            content: newContent,
        })
        setId((prevId) => prevId + 1);
    }

    const editNote = (actualId, newTitle, newContent) => {
        dispatch({
            type:'editNote',
            id: actualId,
            title: newTitle,
            content: newContent
        });
    }

    const deleteNote = (actualId) => {
        dispatch({
            type:'deleteNote',
            id: actualId 
        });
    }

    function getIndex(id) {

        let index = notes.findIndex(notes => notes.id === id);

        return (index);
    }

    return (
        <NotesContext.Provider value = {{ notes, createNote, editNote, deleteNote, getIndex }} >
            {children}
        </NotesContext.Provider>
    )
}

export { NotesContext, NotesProvider };