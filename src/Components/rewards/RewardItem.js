import React, { useContext } from 'react';
import { motion } from 'framer-motion';
import { itemVariants, itemTransition } from '../../Utils/animations/listItemTransition';
import { toast } from 'react-toastify';

import SingleButton from '../shared/buttons/SingleButton';
import EditButtonGroup from '../shared/buttons/EditButtonGroup';
import useToggle from '../../Hooks/useToggle';
import EditForm from '../shared/EditForm';

import { getToastMessage } from '../../Utils/toastMessages';
import { CoinsContext, DispatchContext } from '../../Context/todosContext';


const RewardItem = (props) => {
    const { id, rewardText, rewardValue } = props;
    const { dispatchRewards, dispatchCoins} = useContext(
        DispatchContext,
    );
    const [isEditing, setIsEditing] = useToggle(false);
    const [isClaiming, setIsClaiming] = useToggle(false);

    const coins = useContext(CoinsContext);

    const handleRedeem = () => {
        if (rewardValue <= coins.coins) {
            toast.success(getToastMessage('reward'));
            dispatchCoins({ type: 'SPEND_COIN', value: rewardValue });
            setIsClaiming();
        } else {
            toast.error('Uh-Oh. Not enough coins left! #dosomework');
        }
    };

    const handleRemove = () => {
        toast.warning('Reward Removed!');
        dispatchRewards({ type: 'REMOVE', id });
    };

    const handleEdit = (input) => {
        toast.warning('Edit successful. Yeey.');
        dispatchRewards({ type: 'EDIT', updatedReward: input, id });
    };

    return (
        <React.Fragment>
            {isEditing ? (
                <EditForm
                    handleEdit={handleEdit}
                    setIsEditing={setIsEditing}
                    inputText={rewardText}
                    type='reward'
                />
            ) :  (
                <motion.div
                    exit={'out'}
                    animate={'in'}
                    initial={'start'}
                    variants={itemVariants}
                    pageTransition={itemTransition}
                    className={`list-item__wrapper list-item__wrapper--reward ${isClaiming && 'list-item__wrapper--claiming' }`}>
                    <div id={id} className='list-item__container'>
                        <span className='coin'>
                            <span>{rewardValue}</span>
                        </span>
                        <p className='list-item__item' onClick={setIsClaiming}>
                            {rewardText}
                        </p>
                        {isClaiming ? (
                            <SingleButton
                                onClick={handleRedeem}
                                icon='fas fa-coins'
                                text='Claim'
                            />
                        ) : (
                            <EditButtonGroup
                                toggleEdit={setIsEditing}
                                handleRemove={handleRemove}
                            />
                        )}
                    </div>
                </motion.div>
            )
        }
        </React.Fragment>
    );
};

export default RewardItem;
