import { EventType } from "../App";
import { SET_EVENT } from "./actions";


type State = {
    selectedEvent : null | EventType
}



const initialState : State = {
    selectedEvent : null
}

export const reducers = (state = initialState , action ) : State =>{
    switch(action.type){
        case SET_EVENT:
            return{
                ...state,
                selectedEvent : action.payload
            }
        default:
            return state
    }
}