package com.eventbooking.eventregistration.services;

import com.eventbooking.eventregistration.models.Event;
import com.eventbooking.eventregistration.repositories.EventRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class EventService {

    @Autowired
    private EventRepository eventRepository;

    public List<Event> allEvents(){
        return eventRepository.findAll();
    }

    public Event getEventById(String id){
        return eventRepository.getEventById(id);
    }

    public Event createEvent(Event eventData){
        return eventRepository.save(eventData);
    }

}
