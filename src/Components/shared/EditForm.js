import React from 'react';
import { motion } from 'framer-motion';
import useInputState from '../../Hooks/useInputState';
import {
  itemVariants,
  itemTransition,
} from '../../Utils/animations/listItemTransition';

const EditForm = (props) => {
  const { setIsEditing, inputText, handleEdit, type } = props;
  const [input, setInput, reset] = useInputState(inputText);

  const handleSubmit = (event) => {
    event.preventDefault();
    handleEdit(input);
    setIsEditing();
    reset();
  };

  return (
    <motion.form
      exit={'out'}
      animate={'in'}
      initial={'start'}
      variants={itemVariants}
      pageTransition={itemTransition}
      className='input-wrapper edit-form'
      onSubmit={handleSubmit}
    >
      <input
        type='text'
        placeholder={props.inputText}
        className={`form__input ${type}-form`}
        name='itemText'
        id={`edit-${type}`}
        value={input}
        onChange={setInput}
      ></input>
      <div className='list-item__button-container--edit'>
        <button
          className='btn btn-primary'
          type='button'
          onClick={setIsEditing}
        >
          Cancel
        </button>
        <button className='btn btn-primary' type='submit'>
          Save
        </button>
      </div>
    </motion.form>
  );
};

export default EditForm;
