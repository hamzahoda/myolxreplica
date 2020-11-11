

const INITIAL_STATE = {
    users:[],
    current_user:{},
    history:{},
    search_location:"",
}

export default (state=INITIAL_STATE,action) =>{
    switch(action.type){
        case "SETUSER":
            return ({
                ...state,
                current_user:action.payload
            })
        case "SETFIREBASEUSERS":
            return ({
                ...state,
                users:[...state.users,action.payload]
            })
        case "SETHISTORY":
            return ({
                ...state,
                history:action.payload
            })        
        case "SEARCHLOCATION":
            return ({
                ...state,
                search_location:action.payload
            })            
    }



    return state
}