package com.eventbooking.eventregistration.controllers;

import com.eventbooking.eventregistration.dtos.ParticipantDTO;
import com.eventbooking.eventregistration.models.Participant;
import com.eventbooking.eventregistration.services.ParticipantService;
import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.tags.Tag;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.UUID;

@RestController
@RequestMapping("/participants")
@Tag(name="Participants Details")
public class ParticipantController {

    @Autowired
    private ParticipantService participantService;

    @GetMapping
    @Operation(summary = "Get Participants")
    List<Participant> getAllParticipants(){
        return participantService.allParticipants();
    }

    @GetMapping("/{pid}")
    @Operation(summary = "Get Participant By Id")
    Participant getParticipantById(@PathVariable UUID pid){
        return participantService.getParticipantById(pid);
    }

    @GetMapping("/event/{eventId}")
    @Operation(summary = "Get By Event")
    List<Participant> getParticipantsByEvent(@PathVariable String eventId){
        return participantService.getParticipantByEventId(eventId);
    }

    @GetMapping("/asc")
    @Operation(summary = "Participants in Name Order")
    List<Participant> getParticipantsInOrder(){
        return participantService.participantsOrderByName();
    }

    @PostMapping
    @Operation(summary = "Register Participant")
    Participant registerEvent(@RequestBody ParticipantDTO details){
        return participantService.registerEvent(details);
    }


}
