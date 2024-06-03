package com.cinebilet.cinebilet_backend.model;

import jakarta.persistence.*;
import lombok.Data;
import java.util.Date;

@Entity
@Table(name = "kampanyalar")
@Data
public class Kampanya {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long kampanyaId;

    private String baslik;
    private String aciklama;
    private Integer indirimOrani;
    private Date baslangicTarihi;
    private Date bitisTarihi;
}