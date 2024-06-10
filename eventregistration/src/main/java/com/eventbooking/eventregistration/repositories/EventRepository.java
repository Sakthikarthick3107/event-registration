package com.eventbooking.eventregistration.repositories;

import com.eventbooking.eventregistration.models.Event;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

@Repository
public interface EventRepository extends JpaRepository<Event , Integer> {

    @Query("SELECT e from Event e WHERE e.id = :id")
    Event getEventById(@Param("id") String id);


}
