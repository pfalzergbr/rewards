import React from 'react';
import { motion } from 'framer-motion';

//TODO - CHECK transforms in CSS to make it more predictable
const Modal = (props) => {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={props.closeModal}
            className='modal'>
            <motion.div
                initial={{ scale: 0, opacity: 0, y: '-100%' }}
                animate={{ scale: 1, opacity: 1, x: '-50%' , y: '-50%' }}
                exit={{ scale: 0, opacity: 0, y: '-100%' }}
                className='modal__content'>
                {props.children}
            </motion.div>
        </motion.div>
    );
};

export default Modal;
