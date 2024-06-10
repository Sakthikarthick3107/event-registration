package com.eventbooking.eventregistration.exceptions;

public class NoSeatsAvailableException extends RuntimeException{
    public NoSeatsAvailableException(String message){
        super(message);
    }
}
