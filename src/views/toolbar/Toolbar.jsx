import React, {useState} from 'react';
import {FaChevronRight, FaMagic, FaPlus, FaSearch} from 'react-icons/fa';

const Toolbar = () => {
    const [isMenuVisible, setMenuVisible] = useState(false);

    const handleToggleClick = () => {
        setMenuVisible(!isMenuVisible);
    };


    return (
        <div className={`col-span-${isMenuVisible ? 1 : 4}`}>
            <div className="toolbar-area">
                <button onClick={handleToggleClick} className={`toolbar-toggle ${isMenuVisible ? 'hidden' : 'show'}`} title="Toggle het menu" aria-expanded={isMenuVisible} aria-controls="utilize-toolbar" role="button">
                    <span className="chevron-icon">
                        <FaChevronRight />
                    </span>
                </button>
            </div>

            <div id="utilize-toolbar" aria-hidden={!isMenuVisible} className={isMenuVisible ? 'hidden' : 'show'}>
                <div className="">
                    <h2 className="bold text-left font-sans text-[32px] font-bold text-darkgreen mt-[14px]">Voor jou</h2>
                    <div className="relative h-full mt-[24px] mb-[30px]">
                        <input className="w-full py-[12px] px-[18px] rounded-[8px] text-darkgreen" placeholder="Zoeken..." type="text"/>
                        <FaSearch className="absolute top-[50%] translate-y-[-50%] right-3 text-darkgreen"/>
                    </div>
                </div>

                <div className="w-full">
                    <h4 className="font-sans text-md mb-[10px] text-darkgreen ">Voorgesteld</h4>
                    <div  className="news-item">
                        <div className="bg-image"></div>
                        <div className="body-text">
                            <p className="text-md">Het Dot-framework stap voor stap</p>
                            <a href="" className="text-sm">Bekijk meer</a>
                        </div>
                    </div>

                    <div  className="news-item">
                        <div className="bg-image"></div>
                        <div className="body-text">
                            <p className="text-md">Het Dot-framework stap voor stap</p>
                            <a href="" className="text-sm">Bekijk meer</a>
                        </div>
                    </div>
                </div>

                <div>
                    <h4 className="font-sans text-md mb-[10px] text-darkgreen ">Tech-update</h4>
                    <div className="flex justify-between">
                        <div className="tech-item">
                            <a href="">
                                <div className="bg-image"></div>
                                <div className="text-body text-sm font-serif">
                                    <p className="text-xs">11 okt 2023</p>
                                    <p>Het Dot-framework stap voor stap</p>
                                </div>
                            </a>
                        </div>

                        <div className="tech-item">
                            <a href="">
                                <div className="bg-image"></div>
                                <div className="text-body text-sm font-serif">
                                    <p className="text-xs">11 okt 2023</p>
                                    <p>Het Dot-framework stap voor stap</p>
                                </div>
                            </a>
                        </div>

                    </div>
                </div>

                <div>
                    <h4 className="bold text-left font-sans text-md font-bold text-primary mt-[30px] mb-[10px]">Snel naar...</h4>

                    <div className="flex justify-between">
                        <div className="quick-menu bg-white rounded-[20px]">
                            <h4 className="bold text-left font-sans text-md font-bold text-primary ml-[16px] mt-[15px] mb-[15px]">Start een groepchat</h4>

                            <div className="flex justify-between mx-[10px] mb-2">
                                <img src="profile.jpeg" alt=""/>
                                <p className="text-xs text-primary">Tom Janssen</p>
                                <a className="bg-primary flex items-center text-creme rounded-[6px] ml-5" href="">
                                    <FaPlus className="pl-2 text-lg" />
                                    <span className="py-1 px-[6px] text-xs">Uitnodigen</span>
                                </a>
                            </div>


                            <div className="flex justify-between mx-[10px]">
                                <img src="profile.jpeg" alt=""/>
                                <p className="text-xs text-primary">Anna Bakker</p>
                                <a className="bg-primary flex items-center text-creme rounded-[6px] ml-5" href="">
                                    <FaPlus className="pl-2 text-lg" />
                                    <span className="py-1 px-[6px] text-xs">Uitnodigen</span>
                                </a>
                            </div>
                        </div>
                        <div className="bg-primary rounded-[20px] max-w-[115px] text-creme flex flex-col items-center justify-center">
                            <FaMagic className="text-2xl mb-[9px]" />
                            <p className="font-sans font-bold text-[12px]">Geef meer inspiratie</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Toolbar;