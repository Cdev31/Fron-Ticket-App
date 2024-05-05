import { Navigate } from 'react-router-dom';



export const PrivateRoute = ({ children }) => {
    
    const status = 'no-authenticated'

    return (status === 'authenticated')
        ? children
        : <Navigate to="/auth/login" />
}