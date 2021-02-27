import React, {createContext, useEffect, useReducer } from 'react';
import { saveItems } from '../Utils/localStorage'
import todoReducer from '../Reducers/todoReducer'
import rewardReducer from '../Reducers/rewardReducer'
import coinReducer from '../Reducers/coinReducer'
import { loadItems } from '../Utils/localStorage'

export const TodosContext = createContext();
export const RewardsContext = createContext();
export const CoinsContext = createContext();
export const DispatchContext = createContext();

export const TodosProvider = (props) => {
    const [ todos, dispatchTodos ] = useReducer(todoReducer, loadItems('todos') || []);
    const [ rewards, dispatchRewards ] = useReducer(rewardReducer, loadItems('rewards') || [] );
    const [ coins, dispatchCoins ] = useReducer(coinReducer, loadItems('coins') || {coins: 0});

    const dispatchGroup = { dispatchTodos, dispatchRewards, dispatchCoins };

    useEffect(() => {
        saveItems(todos, 'todos');
    }, [ todos ]);

    useEffect(() => {
        saveItems(rewards, 'rewards');
    }, [ rewards ]);

    useEffect(() => {
        saveItems(coins, 'coins');
    }, [ coins ]);

 
    return(
        <TodosContext.Provider value={todos}>
            <RewardsContext.Provider value={rewards}>
                <CoinsContext.Provider value={coins}>
                    <DispatchContext.Provider value={dispatchGroup}>
                        {props.children}
                    </DispatchContext.Provider>
                </CoinsContext.Provider>
            </RewardsContext.Provider>
        </TodosContext.Provider>
    )
}