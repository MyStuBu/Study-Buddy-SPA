import React, { useState } from 'react';
import MessageList from './Components/MessageList';
import MessageForm from './Components/MessageForm';
import TypingAnimation from './Components/TypingAnimation';
import api from './../../../services/api';

const Chat = () => {
    const [conversation, setConversation] = useState([]);
    const [isTyping, setIsTyping] = useState(false);

    const sendMessage = (userMessage) => {
        setConversation(prevConversation => [
            ...prevConversation,
            {
                entity: 'user',
                name: 'User',
                message: userMessage
            }
        ]);

        setIsTyping(true);

        api.PostMessage(userMessage).then(response => {
            const botResponse = response.message;

            setConversation(prevConversation => [
                ...prevConversation,
                {
                    entity: 'bot',
                    name: 'Study buddy',
                    message: botResponse
                }
            ]);

            setIsTyping(false);
        });
    };

    return (
        <div className="col-span-7 flex flex-col justify-between">
            <div className="p-20">
                <h2>Chat Room</h2>
            </div>

            <div className='flex flex-col justify-between h-full'>
                <div>
                    <MessageList messages={conversation}/>
                    {isTyping && <TypingAnimation />}
                </div>

                <MessageForm onSendMessage={sendMessage}/>
            </div>
        </div>
    );
};

export default Chat;
