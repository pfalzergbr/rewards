import { AnimatePresence } from 'framer-motion';
import React, { useContext } from 'react';

import { RewardsContext } from '../../Context/todosContext'
import RewardItem from '../rewards/RewardItem'


const RewardList = () => {
    const items = useContext(RewardsContext);
    
    return ( 
        <div className={`container`}>
        <AnimatePresence>
        {
            items.map( reward => 
                <RewardItem 
                        key={reward.id}
                        id={reward.id}
                        rewardText={reward.rewardText}
                        rewardValue={reward.value}
                    />
                )
            }
            </AnimatePresence>
        </div>
     );
}

export default RewardList;