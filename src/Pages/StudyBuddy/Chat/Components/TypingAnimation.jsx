import React, { useEffect, useState } from 'react';
import { TbRobot } from 'react-icons/tb';

const TypingAnimation = () => {
    const [activeDot, setActiveDot] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setActiveDot(prevDot => (prevDot + 1) % 3); // Cycle through 0, 1, 2
        }, 500);

        return () => clearInterval(interval);
    }, []);

    return (
        <div className="w-full mt-4 flex justify-center">
            <TbRobot size={24} className='text-sky-500'/>

            <div className='flex justify-center items-center'>
                <div className='w-5 h-5 flex justify-center items-center'>
                    <div className={`w-3 h-3 bg-sky-500 rounded-full mr-1 ${activeDot === 0 ? 'dotAnimated' : ''}`}></div>
                </div>
                <div className='w-5 h-5 flex justify-center items-center'>
                    <div className={`w-3 h-3 bg-sky-500 rounded-full mr-1 ${activeDot === 1 ? 'dotAnimated' : ''}`}></div>
                </div>
                <div className='w-5 h-5 flex justify-center items-center'>
                    <div className={`w-3 h-3 bg-sky-500 rounded-full mr-1 ${activeDot === 2 ? 'dotAnimated' : ''}`}></div>
                </div>
            </div>
        
        </div>
    );
};

export default TypingAnimation;

