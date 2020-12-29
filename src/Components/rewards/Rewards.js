import React from 'react';

import { motion } from 'framer-motion';

import {
    pageVariants,
    pageTransition,
} from '../../Utils/animations/pageTransition';
import Header from '../shared/Header';
import RewardList from '../rewards/RewardList';
import InputForm from '../shared/InputForm';
import Footer from '../shared/Footer';

const Rewards = (props) => {
    const headerData = {
        name: 'rewards-card',
        title: 'Rewards!',
        subtitle: 'Have some fun!',
        link: {
            text: 'Click here for Todos...',
            to: '/todos',
        },
    };

    const formData = {
        formName: 'rewards-form',
        formId: 'newReward',
        inputText: 'New Reward',
        buttonText: 'Add Reward',
    };

    return (
        <motion.div
            initial='initial'
            animate='enter'
            key='/rewards'
            variants={pageVariants}
            transition={pageTransition}
            className='main-card reward-list container'>
            <Header data={headerData} />
            <InputForm data={formData} />
            <RewardList />
            <Footer message='Add Rewards you can spend your hard earnt coins on! Don`t forget to set a fair price on your rewards!' />
        </motion.div>
    );
};

export default Rewards;
