const notesReducer = (state, action) => {
    switch(action.type) {    

        case 'createNote':
            return( [ ...state, { id: action.id, title: action.title, content: action.content } ] );

        case 'editNote':
            let aux = [ ...state ];

            let index = aux.findIndex(aux => aux.id === action.id);

            aux[index].title = action.title;
            aux[index].content = action.content;

            return( aux );

        case 'deleteNote':
            aux = [ ...state ];

            index = aux.findIndex(aux => aux.id === action.id);

            aux.splice(index, 1);

            return( aux );

        default:
            return( [ ...state ] );

    }
}

export default notesReducer;