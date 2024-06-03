package com.cinebilet.cinebilet_backend.service;

import com.cinebilet.cinebilet_backend.model.Musteri;
import com.cinebilet.cinebilet_backend.repository.MusteriRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class MusteriService {

    @Autowired
    private MusteriRepository musteriRepository;

    public List<Musteri> findAll() {
        return musteriRepository.findAll();
    }

    public Optional<Musteri> findById(Long id) {
        return musteriRepository.findById(id);
    }

    public Musteri save(Musteri musteri) {
        return musteriRepository.save(musteri);
    }

    public void deleteById(Long id) {
        musteriRepository.deleteById(id);
    }
}
