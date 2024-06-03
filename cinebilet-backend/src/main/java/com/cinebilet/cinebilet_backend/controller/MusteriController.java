package com.cinebilet.cinebilet_backend.controller;

import com.cinebilet.cinebilet_backend.model.Musteri;
import com.cinebilet.cinebilet_backend.service.MusteriService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/api/musteriler")
public class MusteriController {

    @Autowired
    private MusteriService musteriService;

    @GetMapping
    public List<Musteri> getAllMusteriler() {
        return musteriService.findAll();
    }

    @GetMapping("/{id}")
    public ResponseEntity<Musteri> getMusteriById(@PathVariable Long id) {
        Optional<Musteri> musteri = musteriService.findById(id);
        return musteri.map(ResponseEntity::ok).orElseGet(() -> ResponseEntity.notFound().build());
    }

    @PostMapping
    public Musteri createMusteri(@RequestBody Musteri musteri) {
        return musteriService.save(musteri);
    }

    @PutMapping("/{id}")
    public ResponseEntity<Musteri> updateMusteri(@PathVariable Long id, @RequestBody Musteri musteriDetails) {
        Optional<Musteri> musteri = musteriService.findById(id);
        if (musteri.isPresent()) {
            Musteri updatedMusteri = musteri.get();
            updatedMusteri.setAd(musteriDetails.getAd());
            updatedMusteri.setSoyad(musteriDetails.getSoyad());
            updatedMusteri.setEposta(musteriDetails.getEposta());
            updatedMusteri.setTelefon(musteriDetails.getTelefon());
            return ResponseEntity.ok(musteriService.save(updatedMusteri));
        } else {
            return ResponseEntity.notFound().build();
        }
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteMusteri(@PathVariable Long id) {
        Optional<Musteri> musteri = musteriService.findById(id);
        if (musteri.isPresent()) {
            musteriService.deleteById(id);
            return ResponseEntity.ok().build();
        } else {
            return ResponseEntity.notFound().build();
        }
    }
}
