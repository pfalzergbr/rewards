const coinReducer = ( state, action ) => {
    switch(action.type) {
        case "ADD_COIN":
            const increasedState = {
                coins: state.coins + action.value
            }
            return increasedState;
        case "SPEND_COIN":
            const reducedState = {
                coins: state.coins - action.value
            }
            return reducedState;
        default:
            return state;
    }
}

export default coinReducer;