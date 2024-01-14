import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { IoMdSend } from 'react-icons/io';
import { FaPaperclip } from "react-icons/fa";

export default function MessageForm({ onSendMessage }) {
    const [message, setMessage] = useState('');

    function handleSubmit(e) {
        e.preventDefault();
        if (message.trim() !== '') {
            onSendMessage(message);
            setMessage('');
        }
    }

    return (
        <form onSubmit={handleSubmit} className="flex items-center bg-primary pt-6 pb-4 rounded-t-[50px]">
            <div className="relative bg-white w-[45px] h-[45px] ml-[30px] rounded-full">
                <FaPaperclip className="absolute w-full h-full p-3 text-primary" />
                <input className="opacity-0 w-[45px]" type="file"/>
            </div>

            <input
                type="text"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Type your message..."
                className="w-full bg-white ml-[12px] mr-[10px] py-2 px-4 rounded-lg font-sans text-darkgreen"
            />
            <button className="mr-[60px] text-white text-2xl" type="submit">
                <IoMdSend />
            </button>
        </form>
    );
}

MessageForm.propTypes = {
    onSendMessage: PropTypes.func.isRequired,
};