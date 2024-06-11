
import { EventType, RegisteredType } from "../types/types";
import { SET_EVENT, SET_REGISTERED_DETAILS , SHOW_NOTIFICATION , HIDE_NOTIFICATION , NOTIFICATION_MESSAGE } from "./actions";


export type State = {
    selectedEvent : null | EventType,
    registeredDetails : [] | RegisteredType[],
    notificationMessage  : string,
    showNotification : boolean
}



const initialState : State = {
    selectedEvent : null,
    registeredDetails : [],
    notificationMessage : '',
    showNotification :  false
}

export const reducers = (state = initialState , action ) : State =>{
    switch(action.type){
        case SET_EVENT:
            return{
                ...state,
                selectedEvent : action.payload
            }
        case SET_REGISTERED_DETAILS:
            return{
                ...state,
                registeredDetails : action.payload
            }
        case NOTIFICATION_MESSAGE:
            return{
                ...state,
                notificationMessage : action.payload
            }
        case SHOW_NOTIFICATION:
            return{
                ...state,
                showNotification: true
            }
        case HIDE_NOTIFICATION:
            return{
                ...state,
                showNotification  : false
            }

        default:
            return state
    }
}