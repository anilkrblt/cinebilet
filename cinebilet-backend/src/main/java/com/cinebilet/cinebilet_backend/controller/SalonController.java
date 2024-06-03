package com.cinebilet.cinebilet_backend.controller;

import com.cinebilet.cinebilet_backend.model.Salon;
import com.cinebilet.cinebilet_backend.service.SalonService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/api/salonlar")
public class SalonController {

    @Autowired
    private SalonService salonService;

    @GetMapping
    public List<Salon> getAllSalonlar() {
        return salonService.findAll();
    }

    @GetMapping("/{id}")
    public ResponseEntity<Salon> getSalonById(@PathVariable Long id) {
        Optional<Salon> salon = salonService.findById(id);
        return salon.map(ResponseEntity::ok).orElseGet(() -> ResponseEntity.notFound().build());
    }

    @PostMapping
    public Salon createSalon(@RequestBody Salon salon) {
        return salonService.save(salon);
    }

    @PutMapping("/{id}")
    public ResponseEntity<Salon> updateSalon(@PathVariable Long id, @RequestBody Salon salonDetails) {
        Optional<Salon> salon = salonService.findById(id);
        if (salon.isPresent()) {
            Salon updatedSalon = salon.get();
            updatedSalon.setSalonAdi(salonDetails.getSalonAdi());
            updatedSalon.setKoltukSayisi(salonDetails.getKoltukSayisi());
            return ResponseEntity.ok(salonService.save(updatedSalon));
        } else {
            return ResponseEntity.notFound().build();
        }
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteSalon(@PathVariable Long id) {
        Optional<Salon> salon = salonService.findById(id);
        if (salon.isPresent()) {
            salonService.deleteById(id);
            return ResponseEntity.ok().build();
        } else {
            return ResponseEntity.notFound().build();
        }
    }
}
