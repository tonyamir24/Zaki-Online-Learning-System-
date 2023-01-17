import { useAuthContex } from "./useAuthContex"

export const useLogout = () =>{
    const {dispatch}=useAuthContex()

    const logout = () =>{

        // remove user from storage 
        localStorage.removeItem('user')

        dispatch({type:'LOGOUT'})
    }
    return {logout}
}