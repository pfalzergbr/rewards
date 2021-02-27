import React from 'react';
import { motion } from 'framer-motion';

import {
    pageVariants,
    pageTransition,
} from '../../Utils/animations/pageTransition';
import Header from '../shared/Header';
import InputForm from '../shared/InputForm';
import TodoList from '../todos/TodoList';
import Footer from '../shared/Footer';

// Renders the Todo Page

const Todos = () => {
    const headerData = {
        name: 'todo-card',
        title: 'Todos...',
        subtitle: 'Do some work!',
        link: {
            text: 'Click for Rewards!',
            to: '/rewards',
        },
    };

    const formData = {
        formName: 'todo-form',
        formId: 'newTodo',
        inputText: 'New Todo',
        buttonText: 'Add Todo!',
    };


    return (
        <motion.div
            initial='initial'
            animate='enter'
            key='/todos'
            variants={pageVariants}
            transition={pageTransition}
            className='main-card todo-list container'>
            <Header data={headerData} />
            <InputForm data={formData} />
            <TodoList />
            <Footer message='Give your tasks a priority as you add them. Get things done to earn coins. You can spend them to reward yourself!' />
        </motion.div>
    );
};

export default Todos;
