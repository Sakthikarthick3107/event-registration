package com.eventbooking.eventregistration.controllers;

import com.eventbooking.eventregistration.models.Event;
import com.eventbooking.eventregistration.services.EventService;
import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.tags.Tag;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/events")
@Tag(name = "Event Management" , description = "API for Events")
public class EventController {

    @Autowired
    private EventService eventService;

    @GetMapping
    @Operation(summary = "Get all events", description = "Retrieve a list of all events")
    public List<Event> allEvents(){
        return  eventService.allEvents();
    }

    @GetMapping("/{id}")
    @Operation(summary = "Get event by ID", description = "Retrieve event details by event ID")
    public Event getEventById(@PathVariable String id){
        return eventService.getEventById(id);
    }

    @PostMapping
    @Operation(summary = "Create a New Event")
    public Event createNewEvent(@RequestBody Event eventData){
        return eventService.createEvent(eventData);
    }

}
