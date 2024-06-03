package com.cinebilet.cinebilet_backend.model;

import jakarta.persistence.*;
import lombok.Data;
import java.util.List;

@Entity
@Table(name = "filmler")
@Data
public class Film {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long filmId;

    private String ad;
    private String yonetmen;
    private String filmAciklama;
    private Integer sure;
    private String fragman;
    private String coverImg;
    private String tur;

    @OneToMany(mappedBy = "film")
    private List<Gosterim> gosterimler;
}