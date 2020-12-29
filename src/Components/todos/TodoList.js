import React, { useContext } from 'react';
import {AnimatePresence} from 'framer-motion';

import { TodosContext } from '../../Context/todosContext';
import TodoItem from '../todos/TodoItem';

const Todolist = () => {
    const items = useContext(TodosContext);

    return (
        <React.Fragment>
            <AnimatePresence>
            {items.map((todo) => (
                <TodoItem
                    key={todo.id}
                    id={todo.id}
                    todoText={todo.todoText}
                    isCompleted={todo.isCompleted}
                    importance={todo.importance}
                />
            ))}
            </AnimatePresence>
        </React.Fragment>
    );
};

export default Todolist;
