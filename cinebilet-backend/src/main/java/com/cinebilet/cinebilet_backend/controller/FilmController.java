package com.cinebilet.cinebilet_backend.controller;

import com.cinebilet.cinebilet_backend.model.Film;
import com.cinebilet.cinebilet_backend.service.FilmService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/api/filmler")
public class FilmController {

    @Autowired
    private FilmService filmService;

    @GetMapping
    public List<Film> getAllFilmler() {
        return filmService.findAll();
    }

    @GetMapping("/{id}")
    public ResponseEntity<Film> getFilmById(@PathVariable Long id) {
        Optional<Film> film = filmService.findById(id);
        return film.map(ResponseEntity::ok).orElseGet(() -> ResponseEntity.notFound().build());
    }

    @PostMapping
    public Film createFilm(@RequestBody Film film) {
        return filmService.save(film);
    }

    @PutMapping("/{id}")
    public ResponseEntity<Film> updateFilm(@PathVariable Long id, @RequestBody Film filmDetails) {
        Optional<Film> film = filmService.findById(id);
        if (film.isPresent()) {
            Film updatedFilm = film.get();
            updatedFilm.setAd(filmDetails.getAd());
            updatedFilm.setYonetmen(filmDetails.getYonetmen());
            updatedFilm.setFilmAciklama(filmDetails.getFilmAciklama());
            updatedFilm.setSure(filmDetails.getSure());
            updatedFilm.setFragman(filmDetails.getFragman());
            updatedFilm.setCoverImg(filmDetails.getCoverImg());
            updatedFilm.setTur(filmDetails.getTur());
            return ResponseEntity.ok(filmService.save(updatedFilm));
        } else {
            return ResponseEntity.notFound().build();
        }
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteFilm(@PathVariable Long id) {
        Optional<Film> film = filmService.findById(id);
        if (film.isPresent()) {
            filmService.deleteById(id);
            return ResponseEntity.ok().build();
        } else {
            return ResponseEntity.notFound().build();
        }
    }
}
