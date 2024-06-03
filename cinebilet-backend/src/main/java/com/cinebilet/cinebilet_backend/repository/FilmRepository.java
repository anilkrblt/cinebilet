package com.cinebilet.cinebilet_backend.repository;

import com.cinebilet.cinebilet_backend.model.Film;
import org.springframework.data.jpa.repository.JpaRepository;

public interface FilmRepository extends JpaRepository<Film, Long> {
}
