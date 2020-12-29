import { v4 as uuid } from 'uuid';

const todoReducer = ( state, action ) => {
    switch(action.type){
        case "ADD":
            return [...state, {
                id: uuid(),
                //TODO: Change this to more consistent with the rest of the app
                todoText: action.payload,
                importance: action.importance,
                isCompleted: false
            }];
        case "REMOVE":
            return state.filter(todo => todo.id !== action.id)
        case "COMPLETE":
            return state.map(todo =>
                todo.id === action.id ? {...todo, isCompleted: !todo.isCompleted} : todo );
        case "EDIT":
            return state.map(todo => 
                todo.id === action.id ? {...todo, todoText: action.updatedTodo} : todo);
        case "CLEAR":
            return;
        case "SORT":
            return;
        case "SET_IMPORTANCE":
            return;
        default: 
            return state;
    }
}

export default todoReducer;