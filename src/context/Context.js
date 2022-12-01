import {useReducer,createContext,useContext,useEffect} from "react"

import Reducer from "./reducer"

const INITIAL_STATE={
    user:JSON.parse(localStorage.getItem("user"))||null,
    isFetching:false,
    error:false
}


const context=createContext(INITIAL_STATE)

export const ContextProvider=({children})=>{
    const [state, dispatch] = useReducer(Reducer,INITIAL_STATE)

    useEffect(() => {
      localStorage.setItem("user",JSON.stringify(state.user))
    }, [state.user]);


    return (
        <context.Provider value={{
            user:state.user,
            isFetching:state.isFetching,
            error:state.error,
            dispatch
        }} >
            {children}
        </context.Provider>
    )
}

export const Concun=()=>{
    return useContext(context);
} 