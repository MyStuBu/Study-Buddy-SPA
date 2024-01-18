import React from 'react';
import {Routes, Route} from 'react-router-dom';
import PrivateRoutes from './PrivateRoutes';
import StudyBuddy from '../Pages/StudyBuddy/StuddyBuddy';
import Login from '../Pages/Login/Login';

const AppRoutes = () => {
    return (
        <Routes>
            <Route
                element={<PrivateRoutes/>}
            >
                <Route
                    path="/"
                    element={<StudyBuddy/>}
                />
            </Route>
            <Route
                path="/login"
                element={<Login/>}
            />
        </Routes>
    );
};

export default AppRoutes;
