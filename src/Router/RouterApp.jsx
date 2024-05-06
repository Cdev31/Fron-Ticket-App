import { Routes, Route, Navigate } from "react-router-dom"
import { DeskPage, LoginPage, QueuePage } from "../Pages"
import { CreateTicketPage } from "../Pages/CreateTicketPage"
import { PrivateRoute } from "./PrivateRouter"
import { PublicRoute } from "./PublicRouter"



export const RouterApp = ()=>{
    return (
        <Routes>
            <Route path="/home/*" element={
                <PrivateRoute>
                    <Routes>
                      <Route path="/desk" element={<DeskPage/>}/>
                    </Routes>
                </PrivateRoute>
            } />
            <Route path="/auth/*" element={
                <PublicRoute>
                   <Routes>
                      <Route path="/login" element={<LoginPage/>}/>
                   </Routes>
                </PublicRoute>
            }/>
            <Route path="/client/create-ticket" element={<CreateTicketPage/>} />
            <Route path="/client/queue" element={<QueuePage/>}/>
        </Routes>
    )
}