import { v4 as uuid } from 'uuid';

const rewardReducer = ( state, action ) => {
    switch(action.type) {
        case "ADD":
            return [...state, {
                id: uuid(),
                rewardText: action.payload,
                value: action.rewardValue
            }];
        case "REMOVE":
            return state.filter(reward => reward.id !== action.id);
        case "EDIT":
            return state.map(reward => 
                reward.id === action.id ? {...reward, rewardText: action.updatedReward} : reward);
        default:
            return state;
    }
}

export default rewardReducer