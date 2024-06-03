package com.cinebilet.cinebilet_backend.controller;

import com.cinebilet.cinebilet_backend.model.Gosterim;
import com.cinebilet.cinebilet_backend.service.GosterimService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/api/gosterimler")
public class GosterimController {

    @Autowired
    private GosterimService gosterimService;

    @GetMapping
    public List<Gosterim> getAllGosterimler() {
        return gosterimService.findAll();
    }

    @GetMapping("/{id}")
    public ResponseEntity<Gosterim> getGosterimById(@PathVariable Long id) {
        Optional<Gosterim> gosterim = gosterimService.findById(id);
        return gosterim.map(ResponseEntity::ok).orElseGet(() -> ResponseEntity.notFound().build());
    }

    @PostMapping
    public Gosterim createGosterim(@RequestBody Gosterim gosterim) {
        return gosterimService.save(gosterim);
    }

    @PutMapping("/{id}")
    public ResponseEntity<Gosterim> updateGosterim(@PathVariable Long id, @RequestBody Gosterim gosterimDetails) {
        Optional<Gosterim> gosterim = gosterimService.findById(id);
        if (gosterim.isPresent()) {
            Gosterim updatedGosterim = gosterim.get();
            updatedGosterim.setFilm(gosterimDetails.getFilm());
            updatedGosterim.setSalon(gosterimDetails.getSalon());
            updatedGosterim.setBaslangicZamani(gosterimDetails.getBaslangicZamani());
            updatedGosterim.setBitisZamani(gosterimDetails.getBitisZamani());
            return ResponseEntity.ok(gosterimService.save(updatedGosterim));
        } else {
            return ResponseEntity.notFound().build();
        }
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteGosterim(@PathVariable Long id) {
        Optional<Gosterim> gosterim = gosterimService.findById(id);
        if (gosterim.isPresent()) {
            gosterimService.deleteById(id);
            return ResponseEntity.ok().build();
        } else {
            return ResponseEntity.notFound().build();
        }
    }
}
