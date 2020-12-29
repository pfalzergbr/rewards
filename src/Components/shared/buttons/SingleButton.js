import React from 'react';

const SingleButton = (props) => {
    const { onClick, icon, text } = props

    return (
        <button className='btn btn-primary complete-btn' onClick={onClick}>
            <i className={icon} aria-hidden='true'></i>
            <span className='btn-primary__text'>{text}</span>
        </button>
    );
};

export default SingleButton;
