import { useContext } from 'react';
import { Navigate } from 'react-router-dom';
import { UiContext } from '../Context/UiContext';


export const PublicRoute = ({ children }) => {

    const { status } = useContext( UiContext )
    
   
    return (status !== 'authenticated')
        ? children
        : <Navigate to="/" />
}