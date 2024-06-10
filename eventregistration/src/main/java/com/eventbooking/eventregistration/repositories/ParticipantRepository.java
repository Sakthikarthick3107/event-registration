package com.eventbooking.eventregistration.repositories;

import com.eventbooking.eventregistration.models.Participant;
import jakarta.servlet.http.Part;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.UUID;

@Repository
public interface ParticipantRepository extends JpaRepository<Participant,UUID> {

//    @Query("SELECT p from Participant p WHERE p.eventid = :event")
//    List<Participant> getParticipantsByEventId(@Param("event") String event);

    List<Participant> findByEventId(String eventId);


    @Query("SELECT p FROM Participant p WHERE p.pid=:pid")
    Participant getParticipantById(@Param("pid")UUID pid);


}
