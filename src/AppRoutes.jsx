import React, { useContext } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import { AuthContext, AuthProvider } from './contexts/auth';
import LoginPage from './pages/LoginPage';
import MainPage from './pages/MainPage';
import Teste from './pages/teste';




const AppRoutes = () => {

    const Private = ({children}) => {
        const { authenticated} = useContext(AuthContext);

        // if (loading) {
        //     return <div className="loading">Carregando teste...</div>
        // }

        if (!authenticated) {
            return <Navigate to='/login' />
        };
        return children
    };

    return (
        <Router>
            <AuthProvider>
                <Routes>
                    <Route exact path='/login' element={<LoginPage />} />
                    <Route exact path='/' element={<Private>  <MainPage /> </Private>} />
                    <Route exact path='/teste' element={<Private>  <Teste /> </Private>} />
                </Routes>
            </AuthProvider>
        </Router>
    )
}

export default AppRoutes;