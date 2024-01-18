import React from 'react';
import Chat from './Chat/Chat';
import Navigation from './Navigation/Navigation';
import Toolbar from './Toolbar/Toolbar';

function StudyBuddy() {
    return (
        <div>
            <Navigation />
            <Chat />
            <Toolbar />
        </div>
    );
}

export default StudyBuddy;