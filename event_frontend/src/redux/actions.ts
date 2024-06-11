import { EventType, RegisteredType } from "../types/types";

export const SET_EVENT =  'SET_EVENT';
export const SET_REGISTERED_DETAILS = 'SET_REGISTERED_DETAILS';
export const SHOW_NOTIFICATION = 'SHOW_NOTIFICATION';
export const HIDE_NOTIFICATION = 'HIDE_NOTIFICATION';
export const NOTIFICATION_MESSAGE = 'NOTIFICATION_MESSAGE';


export const setEvent = (event : EventType) => ({
    type :  SET_EVENT,
    payload : event
});

export const setRegisteredDetails= (data : RegisteredType) => ({
    type : SET_REGISTERED_DETAILS,
    payload : data
});

export const showNotificationPop = () => ({
    type : SHOW_NOTIFICATION
});

export const setNotificationMessage =  (message : string) => ({
    type : NOTIFICATION_MESSAGE,
    payload : message
})

export const hideNotification = () => ({
    type : HIDE_NOTIFICATION
})