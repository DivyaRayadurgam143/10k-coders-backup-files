import { DELETE_USER ,ADD_USER,UPDATE_USER} from "./Actiontypes"

export const addUseraction = (user) =>{
    return{
        type:ADD_USER,
        payload:user
    }
}

export const deleteUseraction = (user)=>{
    return{
        type:DELETE_USER,
        payload:user
    }

}

export const updateUseraction = (user) =>{
    return{
        type:UPDATE_USER,
        payload:user
    }
}