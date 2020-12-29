import React from 'react';

const EditButtonGroup = (props) => {
    const {toggleEdit, handleRemove} = props;

    return (
        <div className='list-item__button-container'>
            <button className='btn list-item__btn' onClick={toggleEdit}>
                <i className='fa fa-pencil' aria-hidden='true'></i>
            </button>
            <button className='btn list-item__btn' onClick={handleRemove}>
                <i className='fa fa-trash' aria-hidden='true'></i>
            </button>
        </div>
    );
};

export default EditButtonGroup;
