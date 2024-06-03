package com.cinebilet.cinebilet_backend.model;

import jakarta.persistence.*;
import lombok.Data;

import java.time.LocalDateTime;

@Entity
@Table(name = "gosterimler")
@Data
public class Gosterim {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long gosterimId;

    @ManyToOne
    @JoinColumn(name = "film_id")
    private Film film;

    @ManyToOne
    @JoinColumn(name = "salon_id")
    private Salon salon;

    private LocalDateTime baslangicZamani;
    private LocalDateTime bitisZamani;
}
