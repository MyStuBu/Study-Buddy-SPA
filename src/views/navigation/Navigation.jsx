import React, { useState } from 'react';
import { FaGear, FaUserGroup, FaClipboardList } from 'react-icons/fa6';
import { FaHistory, FaComment, FaBell, FaChevronLeft } from 'react-icons/fa';

export default function Navigation() {
    const [isMenuVisible, setMenuVisible] = useState(true);

    const handleToggleClick = () => {
        setMenuVisible(!isMenuVisible);
    };

    return (
        <nav className={`col-span-${isMenuVisible ? 4 : 1}`}>
            <div className="menu-area">
                <button onClick={handleToggleClick} className={`utilize-toggle ${isMenuVisible ? 'show' : 'hidden'}`} title="Toggle het menu" aria-expanded={isMenuVisible} aria-controls="utilize-menu" role="button">
                    <span className="chevron-icon">
                        <FaChevronLeft />
                    </span>
                    <span className="label">Sluiten</span>
                </button>
            </div>

            <div id="utilize-menu" aria-hidden={!isMenuVisible} className={isMenuVisible ? 'show' : 'hidden'}>
                <div className="w-full">
                    <a className="profile-button" href="#">
                        <img src="profile.jpeg" alt="user"/>
                        <span className="label">Naam naam</span>
                    </a>
                </div>
                <div>
                    <ul>
                        <li className="py-2">
                            <a className="active" href="">
                                <span><FaComment /></span>
                                <span className="label">Buddy</span>
                            </a>
                        </li>
                        <li className="py-2">
                            <a className="" href="">
                                <span><FaClipboardList /></span>
                                <span className="label">Mijn dashboard</span>
                            </a>
                        </li>
                        <li className="py-2">
                            <a href="">
                            <span><FaHistory /></span>
                            <span className="label">Chatgeschiedenis</span>
                            </a>

                        </li>
                        <li className="py-2">
                            <a href="">
                                <span><FaUserGroup /></span>
                                <span className="label">Groepchat</span>
                            </a>
                        </li>
                    </ul>
                </div>
                <div>
                    <ul>
                        <li className="py-2">
                            <a href="">
                                <span><FaBell/></span>
                                <span className="label">Notificaties</span>
                            </a>
                        </li>
                        <li className="py-2">
                            <a href="">
                               <span> <FaGear /></span>
                                <span className="label">Instellingen</span>
                            </a>
                        </li>
                    </ul>

                    <label className="darkmode-toggle">
                            <input type="checkbox"/>
                                <span className="toggle-button"> </span>
                    </label>
                </div>
            </div>
        </nav>
    );
}




