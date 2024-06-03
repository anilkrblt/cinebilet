package com.cinebilet.cinebilet_backend.service;
import com.cinebilet.cinebilet_backend.model.Bilet;
import com.cinebilet.cinebilet_backend.repository.BiletRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class BiletService {

    @Autowired
    private BiletRepository biletRepository;

    public List<Bilet> findAll() {
        return biletRepository.findAll();
    }

    public Optional<Bilet> findById(Long id) {
        return biletRepository.findById(id);
    }

    public Bilet save(Bilet bilet) {
        return biletRepository.save(bilet);
    }

    public void deleteById(Long id) {
        biletRepository.deleteById(id);
    }
}
