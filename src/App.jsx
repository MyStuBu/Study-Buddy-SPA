import React from 'react';
import './styles/App.css';
import Routes from './Routes/Routes';
import PrivateRoutes from './Routes/PrivateRoutes';
import Login from './Pages/Login/Login';
import StudyBuddy from './Pages/StudyBuddy/StuddyBuddy';
import {BrowserRouter, Route} from 'react-router-dom';



function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route element={ <PrivateRoutes />}>
                    <Route path="/" element={ <StudyBuddy/> } />
                </Route>
                <Route path="/login" element={ <Login />  }/>
            </Routes>
        </BrowserRouter>
    );
}

export default App;
