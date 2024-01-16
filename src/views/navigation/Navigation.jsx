import React, { useState } from 'react';
import { FaGear, FaUserGroup, FaClipboardList } from 'react-icons/fa6';
import {FaHistory, FaComment, FaBell, FaChevronLeft, FaMoon, FaSun} from 'react-icons/fa';

export default function Navigation() {
    const [isMenuVisible, setMenuVisible] = useState(true);

    const handleToggleClick = () => {
        setMenuVisible(!isMenuVisible);
    };

    return (
        <nav className={`col-span-${isMenuVisible ? 1 : 4}`}>
            <div className="menu-area">
                <button onClick={handleToggleClick} className={`utilize-toggle ${isMenuVisible ? 'hidden' : 'show'}`} title="Toggle het menu" aria-expanded={isMenuVisible} aria-controls="utilize-menu" role="button">
                    <span className="chevron-icon">
                        <FaChevronLeft />
                    </span>
                    <span className={`label ${isMenuVisible ? 'hidden' : 'show'}`}>Sluiten</span>
                </button>
            </div>

            <div id="utilize-menu" aria-hidden={!isMenuVisible} className={isMenuVisible ? 'hidden' : 'show'}>
                <div className="">
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
                        <li className="">
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
                </div>
                <div className="wrapper">
                    <div className="darkmode-toggle">
                        <input type="checkbox"/>
                        <label className="toggle-button">
                            <span className="icon-sun"><FaSun /></span>
                            <span className="icon-moon"><FaMoon /></span>
                        </label>
                    </div>
                </div>
            </div>
        </nav>
    );
}




