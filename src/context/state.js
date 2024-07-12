import { createContext, useState } from "react";

export const StateContext= createContext()

function State({children}){
    const [currentUserId, setCurrentUserId ]=useState("")
    const [currentUser, setCurrentUser]= useState("")
    const [cart, setCart]=useState([])
    const [subTotal, setSubTotal]=useState(0)

    return(
        <StateContext.Provider value={{currentUserId,setCurrentUserId, currentUser, setCurrentUser, cart, setCart,subTotal, setSubTotal}}>
            {children}
        </StateContext.Provider>
    )
}
export default State;