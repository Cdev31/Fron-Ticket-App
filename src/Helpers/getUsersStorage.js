


export const getUsersStorage = ()=>{
    return {
        agente: localStorage.getItem('agente'),
        escritorio: localStorage.getItem('escritorio'),
        authenticated: localStorage.getItem('auth')
    }
}