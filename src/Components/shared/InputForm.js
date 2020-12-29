
import React, { useContext } from 'react';


import Stepper from './Stepper';
import useInputState from '../../Hooks/useInputState';
import useInputScale from '../../Hooks/useInputScale'
import { RewardsContext, TodosContext } from '../../Context/todosContext'
import { DispatchContext } from '../../Context/todosContext';
import { toast } from 'react-toastify';
import { getToastMessage } from '../../Utils/toastMessages'

const InputForm = (props) => {
    const {formName, formId, inputText, buttonText} = props.data;
    const [input, handleChange, reset] = useInputState('')
    const [ dispatchTodos , dispatchRewards] = useContext(DispatchContext)

    const [ currentImportance, stepImportanceUp, stepImportanceDown] = useInputScale(['A', 'B', 'C', 'D', 'E'])
    const [ currentCoinValue, stepCoinValueUp, stepCoinValueDown ] = useInputScale([1, 2, 3, 4, 5 ])

    const todos = useContext(TodosContext);
    const rewards = useContext(RewardsContext);

    const handleSubmit = (event) => {
        event.preventDefault()
        if (formName === "todo-form"){
            if (todos.length >= 10) 
                return toast.warning("Too many things to do! Try less than 10.")
            if (input.length === 0) 
                return toast.warning('Please enter a todo text!')
            toast.info(getToastMessage("newTodo"));

            dispatchTodos({type: 'ADD', payload: input, importance: currentImportance});
     
        } else {
            if (rewards.length >= 10) 
                return toast.warning('Don`t be greedy! 10 rewards max.')
            if (input.length === 0) 
                return toast.warning('Please enter a reward text!')
            toast.info(getToastMessage("newReward"))
            dispatchRewards({type: 'ADD', payload: input, rewardValue: currentCoinValue})
        }
        reset();
    }
    

    return ( 
        <form 
            onSubmit={handleSubmit}
            className="form ">
            <div className="form-wrapper">
                <div className="input-wrapper">       
                { formName === "todo-form" ? 
                    <Stepper stepUp={stepImportanceUp} stepDown={stepImportanceDown} currentValue={currentImportance} stepperVariant='importance' /> :
                    <Stepper stepUp={stepCoinValueUp} stepDown={stepCoinValueDown} currentValue={currentCoinValue} stepperVariant='coin-value' /> 
                  }

                <input 
                    type="text"
                    id={formId}
                    name={formId}
                    placeholder={inputText} 
                    value={input}
                    onChange={handleChange}
                    className={`form__input ${formName}`}/>

                </div>
                <button 
                    type="submit"
                    className={`btn btn-primary btn--${formName}`}>{buttonText}</button>
            </div>
        </form> 
    );
}
 
export default InputForm;