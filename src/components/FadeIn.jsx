'use client';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

export default function FadeIn({ children, delay = 0, direction = 'up', className = '', style = {} }) {
    const ref = useRef(null);
    const inView = useInView(ref, { once: true, margin: '-80px 0px' });

    const dirs = {
        up: { y: 32, x: 0 },
        down: { y: -32, x: 0 },
        left: { y: 0, x: 40 },
        right: { y: 0, x: -40 },
        none: { y: 0, x: 0 },
    };
    const { x, y } = dirs[direction] || dirs.up;

    return (
        <motion.div
            ref={ref}
            className={className}
            style={style}
            initial={{ opacity: 0, y, x }}
            animate={inView ? { opacity: 1, y: 0, x: 0 } : {}}
            transition={{ duration: 0.65, delay, ease: [0.25, 0.46, 0.45, 0.94] }}
        >
            {children}
        </motion.div>
    );
}
