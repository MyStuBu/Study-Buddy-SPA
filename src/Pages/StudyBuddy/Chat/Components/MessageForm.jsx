import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { IoMdSend } from 'react-icons/io';

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
        <form onSubmit={handleSubmit} className="flex bg-slate-400 pt-6 pb-4 rounded-t-[50px]">
            <input
                type="text"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Type your message..."
                className="w-full ml-[60px] mr-[10px] p-1 rounded-lg"
            />
            <button className="mr-[60px]" type="submit">
                <IoMdSend />
            </button>
        </form>
    );
}

MessageForm.propTypes = {
    onSendMessage: PropTypes.func.isRequired,
};