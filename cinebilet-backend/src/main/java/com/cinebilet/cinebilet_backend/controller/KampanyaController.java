package com.cinebilet.cinebilet_backend.controller;

import com.cinebilet.cinebilet_backend.model.Kampanya;
import com.cinebilet.cinebilet_backend.service.KampanyaService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/api/kampanyalar")
public class KampanyaController {

    @Autowired
    private KampanyaService kampanyaService;

    @GetMapping
    public List<Kampanya> getAllKampanyalar() {
        return kampanyaService.findAll();
    }

    @GetMapping("/{id}")
    public ResponseEntity<Kampanya> getKampanyaById(@PathVariable Long id) {
        Optional<Kampanya> kampanya = kampanyaService.findById(id);
        return kampanya.map(ResponseEntity::ok).orElseGet(() -> ResponseEntity.notFound().build());
    }

    @PostMapping
    public Kampanya createKampanya(@RequestBody Kampanya kampanya) {
        return kampanyaService.save(kampanya);
    }

    @PutMapping("/{id}")
    public ResponseEntity<Kampanya> updateKampanya(@PathVariable Long id, @RequestBody Kampanya kampanyaDetails) {
        Optional<Kampanya> kampanya = kampanyaService.findById(id);
        if (kampanya.isPresent()) {
            Kampanya updatedKampanya = kampanya.get();
            updatedKampanya.setBaslik(kampanyaDetails.getBaslik());
            updatedKampanya.setAciklama(kampanyaDetails.getAciklama());
            updatedKampanya.setIndirimOrani(kampanyaDetails.getIndirimOrani());
            updatedKampanya.setBaslangicTarihi(kampanyaDetails.getBaslangicTarihi());
            updatedKampanya.setBitisTarihi(kampanyaDetails.getBitisTarihi());
            return ResponseEntity.ok(kampanyaService.save(updatedKampanya));
        } else {
            return ResponseEntity.notFound().build();
        }
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteKampanya(@PathVariable Long id) {
        Optional<Kampanya> kampanya = kampanyaService.findById(id);
        if (kampanya.isPresent()) {
            kampanyaService.deleteById(id);
            return ResponseEntity.ok().build();
        } else {
            return ResponseEntity.notFound().build();
        }
    }
}
