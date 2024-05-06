import { createContext, useEffect, useState } from "react";
import { getUsersStorage } from "../Helpers/getUsersStorage";




export const UiContext = createContext()


export const UiProvider = ({ children }) =>{

    const [ user ] = useState( getUsersStorage() )
    const [ closeMenu, setCloseMenu ] = useState(true)
    const [ status, setStatus ] = useState('no-authenticated')


    const showMenu = ()=>{
        setCloseMenu( false )
    }

    const hideMenu = ()=>{
        setCloseMenu( true )
    }

    const login = ()=>{
        setStatus( user.authenticated )
    }

    const logout = ()=>{
        localStorage.removeItem('agente')
        localStorage.removeItem('escritorio')
        localStorage.removeItem('auth')
        setStatus('no-authenticated')
    }
    return (
        <UiContext.Provider 
          value={{
            showMenu,
            hideMenu,
            closeMenu,
            status,
            logout,
            login
          }}
        > 
            { children }
        </UiContext.Provider>
    )
}