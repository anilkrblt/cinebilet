package com.cinebilet.cinebilet_backend.model;

import jakarta.persistence.*;
import lombok.Data;
import java.util.List;

@Entity
@Table(name = "musteriler")
@Data
public class Musteri {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long musteriId;

    private String ad;
    private String soyad;
    private String eposta;
    private String telefon;

    @OneToMany(mappedBy = "musteri")
    private List<Bilet> biletler;
}