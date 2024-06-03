package com.cinebilet.cinebilet_backend.model;

import jakarta.persistence.*;
import lombok.Data;

import java.time.LocalDateTime;

@Entity
@Table(name = "biletler")
@Data
public class Bilet {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long biletId;

    @ManyToOne
    @JoinColumn(name = "musteri_id")
    private Musteri musteri;

    @ManyToOne
    @JoinColumn(name = "gosterim_id")
    private Gosterim gosterim;

    private LocalDateTime satisZamani;
    private String koltukNumarasi;
    private Double fiyat;
    private String biletTipi;
}
