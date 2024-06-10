package com.eventbooking.eventregistration.exceptions;


import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.RestControllerAdvice;

@RestControllerAdvice
public class GlobalExceptionHandler {

    @ExceptionHandler(NoSeatsAvailableException.class)
    public ResponseEntity<String> handleNoSeatsAvailableException(NoSeatsAvailableException ex){
        return ResponseEntity.status(HttpStatus.BAD_REQUEST).body("{\"err\": \"" + ex.getMessage() + "\"}");
    }

    @ExceptionHandler(EventNotFoundException.class)
    public ResponseEntity<String> handleEventNotFoundException(EventNotFoundException ex){
        return ResponseEntity.status(HttpStatus.BAD_REQUEST).body("{\"err\" : \"" + ex.getMessage() + "\"}");
    }
}
