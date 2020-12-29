import React from 'react';

const RewardHelp = (props) => {
    return (
        <React.Fragment>
            <div className='modal__header modal__header--reward'>
                <h2 className='modal__title'>Add Rewards</h2>
                <p className='modal__paragraph'>
                    Add rewards to your list to motivate yourself! Hard work
                    pays off.
                </p>
            </div>
            <ul className='modal__list'>
                <li className='modal__list-item'>
                    Set a name and a coin cost to your reward. You need to pay
                    this to redeem later.
                </li>
                <li className='modal__list-item'>
                    Click on rewards to spend your coins after some hard work.
                </li>
                <li className='modal__list-item'>
                    You can edit your rewards, or delete them if you don`t need
                    anymore.
                </li>
            </ul>
            <div className="modal__button-container">
                 <button className='btn-primary modal__btn modal__btn--reward'>Close</button>
            </div>
        </React.Fragment>
    );
};

export default RewardHelp;
