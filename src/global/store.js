
import {createContext,useContext,useState} from "react"

const GlobalContext=createContext()

export const GlobalContextProvider=({children})=>{
    
    const[currentDashboard,setCurrentDashboard]=useState(null)

    return(
        <GlobalContext.Provider value={{currentDashboard,setCurrentDashboard}} >  
            {children}
        </GlobalContext.Provider>
    )
}

export const useGlobalContext=()=>useContext(GlobalContext);