import { DefaultState } from "./DefaultState";
import  { ADD_USER, DELETE_USER,UPDATE_USER} from "../actions/Actiontypes"
export const UserReducer =(state=DefaultState,action) =>{
    switch (action.type) {
        case  ADD_USER:
        const newUsers =[...state.users];
        newUsers.push(action.payload);  
        return {...state,users:newUsers};
         case  DELETE_USER:
            return  {...state,users:state.users.filter((user)=>user.email!==action.payload.email)};
            case UPDATE_USER:
            let allUsers = [...state.users];
            allUsers.forEach((user,i)=>{
                if(user.email === action.payload.email)
                allUsers[i]=action.payload;
            });
            return  {...state,users:allUsers}
        default:
            return  state;
    } 
};