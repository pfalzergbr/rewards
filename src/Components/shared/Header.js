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
            className='btn header__link'
          >
            {link.text}
          </motion.button>
        </div>
        <div className='header__column'>
          <div className='coin-container'>
            <span className='coin'>
              <svg
                width='32'
                height='32'
                viewBox='0 0 32 32'
                // fill='#eee'
                xmlns='http://www.w3.org/2000/svg'
              >
                <path
                  d='M14.6666 20.4773H14.5986C14.263 20.4773 13.9412 20.344 13.7039 20.1067C13.4666 19.8694 13.3333 19.5476 13.3333 19.212C13.3333 18.8584 13.1928 18.5192 12.9428 18.2692C12.6927 18.0191 12.3536 17.8786 12 17.8786C11.6463 17.8786 11.3072 18.0191 11.0572 18.2692C10.8071 18.5192 10.6666 18.8584 10.6666 19.212C10.6666 20.2548 11.0809 21.2549 11.8183 21.9923C12.5557 22.7297 13.5558 23.144 14.5986 23.144H14.6666V24.4773C14.6666 24.8309 14.8071 25.1701 15.0572 25.4201C15.3072 25.6702 15.6463 25.8106 16 25.8106C16.3536 25.8106 16.6927 25.6702 16.9428 25.4201C17.1928 25.1701 17.3333 24.8309 17.3333 24.4773V23.144C18.3942 23.144 19.4116 22.7226 20.1617 21.9724C20.9119 21.2223 21.3333 20.2048 21.3333 19.144C21.3333 18.0831 20.9119 17.0657 20.1617 16.3156C19.4116 15.5654 18.3942 15.144 17.3333 15.144V12.4773H17.3626C18.0826 12.4773 18.6666 13.0613 18.6666 13.7813C18.6666 14.1349 18.8071 14.4741 19.0572 14.7241C19.3072 14.9742 19.6463 15.1146 20 15.1146C20.3536 15.1146 20.6927 14.9742 20.9428 14.7241C21.1928 14.4741 21.3333 14.1349 21.3333 13.7813C21.3333 12.7282 20.915 11.7183 20.1703 10.9736C19.4257 10.229 18.4157 9.81065 17.3626 9.81065H17.3333V8.47732C17.3333 8.12369 17.1928 7.78455 16.9428 7.53451C16.6927 7.28446 16.3536 7.14398 16 7.14398C15.6463 7.14398 15.3072 7.28446 15.0572 7.53451C14.8071 7.78455 14.6666 8.12369 14.6666 8.47732V9.81065C13.6058 9.81065 12.5883 10.2321 11.8382 10.9822C11.0881 11.7324 10.6666 12.7498 10.6666 13.8106C10.6666 14.8715 11.0881 15.8889 11.8382 16.6391C12.5883 17.3892 13.6058 17.8106 14.6666 17.8106V20.4773ZM17.3333 20.4773V17.8106C17.6869 17.8106 18.0261 17.9511 18.2761 18.2012C18.5262 18.4512 18.6666 18.7904 18.6666 19.144C18.6666 19.4976 18.5262 19.8367 18.2761 20.0868C18.0261 20.3368 17.6869 20.4773 17.3333 20.4773ZM14.6666 12.4773V15.144C14.313 15.144 13.9739 15.0035 13.7238 14.7535C13.4738 14.5034 13.3333 14.1643 13.3333 13.8106C13.3333 13.457 13.4738 13.1179 13.7238 12.8678C13.9739 12.6178 14.313 12.4773 14.6666 12.4773V12.4773ZM16 29.8106C8.63596 29.8106 2.66663 23.8413 2.66663 16.4773C2.66663 9.11332 8.63596 3.14398 16 3.14398C23.364 3.14398 29.3333 9.11332 29.3333 16.4773C29.3333 23.8413 23.364 29.8106 16 29.8106Z'
                //   fill='black'
                />
              </svg>
            </span>
            <span> x </span>
            <span className='coin-number'>{coins.coins}</span>
          </div>
          <motion.button
            whileHover={{ opacity: 0.7 }}
            transition={{ duration: 0.1 }}
            onClick={openModal}
            className='btn header__link'
          >
            Click for help
          </motion.button>
        </div>
      </header>
    </React.Fragment>
  );
};

export default Header;
