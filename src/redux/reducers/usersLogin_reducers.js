const initialState={
    age:null,
    city:null,
    name:null,
    position:null,
    securityNumber:null
}


export default function usersReducer(state=initialState, action){
    switch(action.type){
        case 'LOGIN_AUTHENTICATED':
            return{...state, 
                age: action.payload.age,
                city: action.payload.city,
                name: action.payload.name,
                position: action.payload.position,
                securityNumber: action.payload.securityNumber,
  
            }

        case 'LOGOUT':
            return{...state,
                age:null,
                city:null,
                name:null,
                position:null,
                securityNumber:null
        }
                
                
            // return initialState;
        
        default:
            return state;

        
    }
}