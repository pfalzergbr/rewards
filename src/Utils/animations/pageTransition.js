export const pageVariants = {
    initial: {
        x: '-200%',
        opacity: 0,
        scale: 0.8,

    },
    enter: { x: 0, opacity: 1, scale: 1 },
    exit: {
        x: '200%',
        // opacity: 0,
        scale: 0.8,
    },
};

export const pageTransition = {
    type: 'tween',
    duration: .3,
    transition: 'anticipate',
    // delay: .3
};
