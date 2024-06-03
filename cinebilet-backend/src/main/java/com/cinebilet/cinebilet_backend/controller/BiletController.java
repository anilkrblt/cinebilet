package com.cinebilet.cinebilet_backend.controller;

import com.cinebilet.cinebilet_backend.model.Bilet;
import com.cinebilet.cinebilet_backend.service.BiletService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/api/biletler")
public class BiletController {

    @Autowired
    private BiletService biletService;

    @GetMapping
    public List<Bilet> getAllBiletler() {
        return biletService.findAll();
    }

    @GetMapping("/{id}")
    public ResponseEntity<Bilet> getBiletById(@PathVariable Long id) {
        Optional<Bilet> bilet = biletService.findById(id);
        return bilet.map(ResponseEntity::ok).orElseGet(() -> ResponseEntity.notFound().build());
    }

    @PostMapping
    public Bilet createBilet(@RequestBody Bilet bilet) {
        return biletService.save(bilet);
    }

    @PutMapping("/{id}")
    public ResponseEntity<Bilet> updateBilet(@PathVariable Long id, @RequestBody Bilet biletDetails) {
        Optional<Bilet> bilet = biletService.findById(id);
        if (bilet.isPresent()) {
            Bilet updatedBilet = bilet.get();
            updatedBilet.setMusteri(biletDetails.getMusteri());
            updatedBilet.setGosterim(biletDetails.getGosterim());
            updatedBilet.setSatisZamani(biletDetails.getSatisZamani());
            updatedBilet.setKoltukNumarasi(biletDetails.getKoltukNumarasi());
            updatedBilet.setFiyat(biletDetails.getFiyat());
            updatedBilet.setBiletTipi(biletDetails.getBiletTipi());
            return ResponseEntity.ok(biletService.save(updatedBilet));
        } else {
            return ResponseEntity.notFound().build();
        }
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteBilet(@PathVariable Long id) {
        Optional<Bilet> bilet = biletService.findById(id);
        if (bilet.isPresent()) {
            biletService.deleteById(id);
            return ResponseEntity.ok().build();
        } else {
            return ResponseEntity.notFound().build();
        }
    }
}
