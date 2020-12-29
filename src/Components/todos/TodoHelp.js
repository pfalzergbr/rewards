import React from 'react';

const RewardHelp = (props) => {
    return (
        <React.Fragment>
            <div className='modal__header modal__header--todo'>
                <h2 className='modal__title'>Add Todos</h2>
                <p className='modal__paragraph'>
                    Add tasks to manage your daily workload.
                </p>
            </div>
            <ul className='modal__list'>
                <li className='modal__list-item'>
                    Set priority on your tasks from A to E, A being the most important. 
                </li>
                <li className='modal__list-item'>
                    Always start working on your most important task first. 
                </li>
                <li className='modal__list-item'>
                    You can edit or delete todos, if you change your mind. 
                </li>
                <li className='modal__list-item'>
                    Click on todos to complete. You recieve coins for every task completed. More important more coins!
                </li>
                <li className='modal__list-item'>
                    Keep your life in balance! Spend coins in the rewards tab. Enjoy!
                </li>
            </ul>
            <div className='modal__button-container'>
                <button className='btn-primary modal__btn modal__btn--todo'>Close</button>
            </div>
        </React.Fragment>
    );
};

export default RewardHelp;
