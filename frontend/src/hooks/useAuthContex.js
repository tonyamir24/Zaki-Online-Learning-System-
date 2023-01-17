import { AuthContex } from "../contex/AuthContex";
import { useContext } from "react";
export const useAuthContex =()=>{
    const context =useContext(AuthContex)

    if(!context){
        throw Error('useAuthContex must be used inside an AuthContextProvider')
    }
    return context
}
