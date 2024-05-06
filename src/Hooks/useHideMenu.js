import { useContext, useEffect } from "react"
import { UiContext } from "../Context/UiContext"



export const useHideMenu = ( hide )=>{

    const { hideMenu, showMenu } = useContext( UiContext )

    useEffect(()=>{
        if( hide ){
            hideMenu()
        } 
        else {
            showMenu()
        }
    }, [ showMenu, hideMenu ])
}