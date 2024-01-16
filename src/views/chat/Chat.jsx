import React from 'react';
import ChatContainer from './containers/ChatContainer';

const Chat = () => {
    return (
        <div className="col-span-7">
            <div className="flex flex-col justify-between h-full">
                <div className="p-20">
                    <h2>Chat Room</h2>
                </div>

                <ChatContainer />
            </div>
        </div>
    );
};

export default Chat;