package com.cinebilet.cinebilet_backend.model;

import jakarta.persistence.*;
import lombok.Data;
import java.util.List;

@Entity
@Table(name = "salonlar")
@Data
public class Salon {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long salonId;

    private String salonAdi;
    private Integer koltukSayisi;

    @OneToMany(mappedBy = "salon")
    private List<Gosterim> gosterimler;
}