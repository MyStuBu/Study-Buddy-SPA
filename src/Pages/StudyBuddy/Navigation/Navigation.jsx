import React from 'react';
import { FaUserCircle } from 'react-icons/fa';
import { FaGear } from 'react-icons/fa6';
import { FaUserGroup } from 'react-icons/fa6';
import { MdSpaceDashboard } from 'react-icons/md';
import { FaHistory } from 'react-icons/fa';

const Navigation = () => {
    return (
        <nav className="col-span-1 bg-white rounded-r-lg flex flex-col justify-between items-center py-6">
            <div>
                <FaUserCircle />
            </div>
            <div>
                <ul>
                    <li className="py-2">
                        <a href="">
                            <span><MdSpaceDashboard /></span>
                        </a>
                    </li>
                    <li className="py-2">
                        <a href=""><FaHistory /></a>
                    </li>
                    <li className="py-2">
                        <a href="">
                            <span><FaUserGroup /></span>
                        </a>
                    </li>
                </ul>
            </div>
            <div>
                <FaGear />
            </div>
        </nav>
    );
};

export default Navigation;
