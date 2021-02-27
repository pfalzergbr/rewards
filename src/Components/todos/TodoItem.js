import React, { useContext } from 'react';
import { motion } from 'framer-motion';
import {
  itemVariants,
  itemTransition,
} from '../../Utils/animations/listItemTransition';
import { toast } from 'react-toastify';

import useToggle from '../../Hooks/useToggle';
import EditForm from '../shared/EditForm';
import SingleButton from '../shared/buttons/SingleButton';
import EditButtonGroup from '../shared/buttons/EditButtonGroup';

import { DispatchContext } from '../../Context/todosContext';
import { coinMap } from '../../Utils/coinMap';
import { getToastMessage } from '../../Utils/toastMessages';

const TodoItem = (props) => {
  const { id, todoText, isCompleted, importance } = props;
  const { dispatchTodos, dispatchCoins } = useContext(DispatchContext);
  const [isEditing, setIsEditing] = useToggle(false);

  const handleRemove = () => {
    toast.warning('Scratch that. Todo Removed.');
    dispatchTodos({ type: 'REMOVE', id });
  };

  const handleClick = () => {
    dispatchTodos({ type: 'COMPLETE', id });
  };

  const handleComplete = () => {
    toast.info(getToastMessage('complete'));
    dispatchTodos({ type: 'REMOVE', id });
    dispatchCoins({ type: 'ADD_COIN', value: coinMap[importance] });
  };

  const handleEdit = (input) => {
    toast.warning('Edit successful. Yeey.');
    dispatchTodos({ type: 'EDIT', updatedTodo: input, id });
  };

  return (
    <React.Fragment>
      {isEditing ? (
        <EditForm
          handleEdit={handleEdit}
          setIsEditing={setIsEditing}
          inputText={todoText}
          type='todo'
        />
      ) : (
        <motion.div
          exit={'out'}
          animate={'in'}
          initial={'start'}
          variants={itemVariants}
          pageTransition={itemTransition}
          className={
            isCompleted
              ? 'list-item__wrapper list-item__wrapper--completed '
              : 'list-item__wrapper list-item__wrapper--todo'
          }
        >
          <div id={id} className='list-item__container'>
            <span className='importance'>
              <span>{importance}</span>
            </span>
            <p
              className={
                isCompleted
                  ? 'list-item__item list-item__item--completed'
                  : 'list-item__item list-item__item--incomplete'
              }
              onClick={handleClick}
            >
              {todoText}
            </p>
            {isCompleted ? (
              <SingleButton
                onClick={handleComplete}
                icon='far fa-check-circle'
                text='Complete'
              />
            ) : (
              <EditButtonGroup
                toggleEdit={setIsEditing}
                handleRemove={handleRemove}
              />
            )}
          </div>
        </motion.div>
      )}
    </React.Fragment>
  );
};

export default TodoItem;
