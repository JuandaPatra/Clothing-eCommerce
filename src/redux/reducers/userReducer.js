const INITIAL_STATE ={
    id : null,
    email : "",
    cart : []
}

const userReducer =(state=INITIAL_STATE, action)=>{
    switch(action.type){
        case "LOGIN" :
            return {
                ...state,
                id : action.payload.id,
                email : action.payload.email,
            }
            default :
                return state
    }
}

export default userReducer