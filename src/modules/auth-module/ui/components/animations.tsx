import React, { PropsWithChildren } from 'react';
import { motion } from 'framer-motion';

export const FromLeftAppearAnimation: React.FC<PropsWithChildren> = ({ children }) => {
    return (
        <motion.div
            initial={{ x: -500 }}
            animate={{ x: 0 }}
            transition={{
                duration: 0.8
            }}
        >
            {children}
        </motion.div>
    )
}