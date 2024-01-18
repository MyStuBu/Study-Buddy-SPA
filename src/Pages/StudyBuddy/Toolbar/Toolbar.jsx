import React from 'react';
import { FaChevronRight } from 'react-icons/fa';

const Toolbar = () => {
    return (
        <div className="col-span-4 bg-white rounded-s-lg px-9">
            <a className="mt-4 flex justify-end" href=""><span><FaChevronRight /></span></a>
            <h2 className="bold text-left">For you</h2>
            <div>
                <input type="text"/>
            </div>
        </div>
    );
};

export default Toolbar;