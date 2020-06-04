import React from 'react';
import { motion } from 'framer-motion';
import TrackVisibility from 'react-on-screen';

const variants = {
  hidden: {
    scaleX: 0,
  },
  visible: {
    scaleX: 1.01,
  },
};

interface Props {
  position?: string;
  altText?: string;
  img: string;
}

const Portrait: React.FC<Props> = (props) => (
  <TrackVisibility
    partialVisibility
    offset={-100}
    className={`flex ${
      props.position === 'right' ? 'justify-end order-first' : 'order-last'
    }`}
  >
    {({ isVisible }) => (
      <motion.div className="lg:w-500 overflow-hidden relative h-full">
        <picture>
          <source srcSet={`/optimized/${props.img}.webp`} type="image/webp" />
          <source srcSet={`optimized/png/${props.img}.png`} type="image/jpeg" />
          <img src={`optimized/png/${props.img}.png`} alt={props.altText} />
        </picture>
        <motion.div
          className="absolute inset-0 w-full h-full bg-black"
          animate={isVisible ? 'hidden' : 'visible'}
          variants={variants}
          style={{
            scaleX: 1,
            originX: props.position === 'right' ? 0 : 1,
            originY: props.position === 'right' ? 0 : 1,
          }}
          transition={{
            duration: 1,
            type: 'tween',
            ease: [0.85, 0.1, 0.31, 0.95],
          }}
        />
      </motion.div>
    )}
  </TrackVisibility>
);

export default Portrait;
