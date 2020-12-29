import React from 'react';
import {motion} from 'framer-motion';

const Footer = (props) => {
    return ( 
        <motion.div initial={{opacity: 0, scale: .2}} animate={{ opacity: 1, scale: 1}} transition={{duration: .3, delay: .5}} className="footer">
            <p className="footer__paragraph">{props.message}</p>
            <p className="footer__paragraph footer__paragraph--copyright">Coins, 2020, Gabor Pfalzer</p>
        </motion.div>
    );
}
 
export default Footer;