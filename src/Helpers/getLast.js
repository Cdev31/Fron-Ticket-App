


export const getLast = async ()=>{
    const res = await fetch('http://localhost:3000/last')
    const data = await res.json()

    return data.lastTickets
}