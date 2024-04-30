import { Routes, Route } from "react-router-dom"
import { LoginPage } from "../Pages"



export const RouterApp = ()=>{
    return (
        <Routes>
            <Route path="/login" element={<LoginPage/>}/>
        </Routes>
    )
}