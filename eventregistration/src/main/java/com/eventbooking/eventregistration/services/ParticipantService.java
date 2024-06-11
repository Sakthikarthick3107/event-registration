package com.eventbooking.eventregistration.services;


import com.eventbooking.eventregistration.dtos.ParticipantDTO;
import com.eventbooking.eventregistration.exceptions.EventNotFoundException;
import com.eventbooking.eventregistration.exceptions.NoSeatsAvailableException;
import com.eventbooking.eventregistration.models.Event;
import com.eventbooking.eventregistration.models.Participant;
import com.eventbooking.eventregistration.repositories.EventRepository;
import com.eventbooking.eventregistration.repositories.ParticipantRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.UUID;

@Service
public class ParticipantService {

    @Autowired
    private ParticipantRepository participantRepository;

    @Autowired
    private EventRepository eventRepository;

    public List<Participant> allParticipants(){
        return participantRepository.findAll();
    }

    public List<Participant> participantsOrderByName() { return participantRepository.getParticipantsOrderByName();}

    public Participant getParticipantById(UUID pid){
        return participantRepository.getParticipantById(pid);
    }

    public List<Participant> getParticipantByEventId(String eventId){
        return participantRepository.findByEventId(eventId);
    }

    public Participant registerEvent(ParticipantDTO details){
        Event event = eventRepository.getEventById(details.getEventId());

        if(event == null){
            throw new EventNotFoundException("Event with this id " + details.getEventId() + " not found !");
        }
        if(event.getAvailability() > 0){
            event.setAvailability(event.getAvailability() - 1);
            eventRepository.save(event);

            Participant participant = new Participant();
            participant.setName(details.getName());
            participant.setEmail(details.getEmail());
            participant.setEvent(event);

            return participantRepository.save(participant);

        }
        else{
            throw new NoSeatsAvailableException("No seats available for this event ! ");
        }

    }
}
