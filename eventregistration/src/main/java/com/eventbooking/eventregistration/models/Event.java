package com.eventbooking.eventregistration.models;


import jakarta.persistence.*;
import lombok.*;

@Data
@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@Entity
@Table(name = "event")
public class Event {

    @Id
    private String id;

    private String name;
    private String location;
    private Integer participants;
    private Integer availability;
}
