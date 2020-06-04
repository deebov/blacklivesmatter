import React from 'react';
import { motion } from 'framer-motion';
import TrackVisibility from 'react-on-screen';
import Portrait from '../components/portrait';

interface Props {
  position?: string;
  name: string;
  img: string;
}

const Row: React.FC<Props> = (props) => (
  <TrackVisibility
    partialVisibility
    offset={-100}
    className="py-32 min-h-screen grid grid-rows-auto-fr lg:grid-rows-1 grid-cols-1 lg:grid-cols-2 gap-24"
  >
    {({ isVisible }) => (
      <>
        <Portrait img={props.img} position={props.position} />
        <div
          className={`order-last lg:order-1 ${
            props.position !== 'right' ? 'text-right' : ''
          }`}
        >
          <h1 className="text-3xl lg:text-6xl font-bold lg:leading-12">
            {props.name.split(' ').map((word, index) => (
              <div key={index} className="overflow-hidden">
                <motion.div
                  animate={{ y: isVisible ? 0 : -76 }}
                  transition={{
                    type: 'tween',
                    ease: [0.85, 0.1, 0.31, 0.95],
                    duration: 0.8,
                    delay: index * 0.1,
                  }}
                >
                  {word}
                </motion.div>
              </div>
            ))}
          </h1>
          <div className="text-2xl mt-12 lg:mt-32">
            <p
              className={`text-justify lg:w-2/3 ${
                props.position !== 'right' ? 'float-right' : ''
              }`}
            >
              {props.children}
            </p>
          </div>
        </div>
      </>
    )}
  </TrackVisibility>
);

export default Row;
