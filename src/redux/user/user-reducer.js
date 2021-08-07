import { UserTypes } from "./user-types";


const Initial_state={
    user:null
}

const userReducer=(state=Initial_state,action)=>{
    switch(action.type){
        case UserTypes.SET_CURRENT_USER:
            return{
                ...state,
                user:action.payload
            };
        default:
            return state;
    }
}
export default userReducer;



