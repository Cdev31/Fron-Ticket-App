import { Navigate } from 'react-router-dom';


export const PublicRoute = ({ children }) => {

    const status = 'no-authenticated'
   
    return (status !== 'authenticated')
        ? children
        : <Navigate to="/" />
}