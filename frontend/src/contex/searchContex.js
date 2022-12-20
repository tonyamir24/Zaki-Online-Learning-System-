import { createContext, useReducer } from "react";

export const SearchContext = createContext()
export const searchReducer =(state,action) =>{
    switch (action.type){
        case 'SET_RESULTS':
            return{
                search: action.payload
            }
            case 'NO_RESULTS':
            return{
                search: []
            }
            default:
                return state
    }
}
export const SearchContextProvider =({ Children})=>{
    const [state, dispatch]=useReducer(searchReducer,{
        Course :null
    })
    // dispatch({type:'SET_RESULTS',payload :})
    return(
        <SearchContext.Provider value={{...state,dispatch}}>
            {Children}
        </SearchContext.Provider>

    )
}