import { EventType } from "../App";

export const SET_EVENT =  'SET_EVENT';



export const setEvent = (event : EventType) => ({
    type :  SET_EVENT,
    payload : event
})