package com.cinebilet.cinebilet_backend.repository;

import com.cinebilet.cinebilet_backend.model.Bilet;
import org.springframework.data.jpa.repository.JpaRepository;

public interface BiletRepository extends JpaRepository<Bilet, Long> {
}
