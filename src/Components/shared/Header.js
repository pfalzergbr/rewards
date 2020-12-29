import React, { useState, useContext } from 'react';
import { useHistory } from 'react-router-dom';

import RewardHelp from '../rewards/RewardHelp';
import TodoHelp from '../todos/TodoHelp';
import { AnimatePresence, motion } from 'framer-motion';
import Modal from './Modal';
import { CoinsContext } from '../../Context/todosContext';

const Header = (props) => {
    const { name, title, link } = props.data;
    const [isModalOpen, setIsModalOpen] = useState(false);
    const coins = useContext(CoinsContext);
    const history = useHistory();

    const openModal = () => {
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
    };

    return (
        <React.Fragment>
            <AnimatePresence>
                {isModalOpen && (
                    <Modal closeModal={closeModal}>
                        {name === 'todo-card' && <TodoHelp />}
                        {name === 'rewards-card' && <RewardHelp />}
                    </Modal>
                )}
            </AnimatePresence>
            <header className={`header ${name}`}>
                <div className='header__column'>
                    <h1 className='header__title'>{title}</h1>
                    <motion.button
                        whileHover={{ opacity: 0.7 }}
                        transition={{ duration: 0.1 }}
                        onClick={() => history.push(link.to)}
                        className='btn header__link'>
                        {link.text}
                    </motion.button>
                </div>
                <div className='header__column'>
                    <div className='coin-container'>
                        <span className='coin'>c</span>
                        <span> x </span>
                        <span className='coin-number'>{coins.coins}</span>
                    </div>
                    <motion.button
                        whileHover={{ opacity: 0.7 }}
                        transition={{ duration: 0.1 }}
                        onClick={openModal}
                        className='btn header__link'>
                        Click for help
                    </motion.button>
                </div>
            </header>
        </React.Fragment>
    );
};

export default Header;
