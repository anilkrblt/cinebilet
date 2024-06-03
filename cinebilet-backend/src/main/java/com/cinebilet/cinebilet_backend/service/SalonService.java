package com.cinebilet.cinebilet_backend.service;

import com.cinebilet.cinebilet_backend.model.Salon;
import com.cinebilet.cinebilet_backend.repository.SalonRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class SalonService {

    @Autowired
    private SalonRepository salonRepository;

    public List<Salon> findAll() {
        return salonRepository.findAll();
    }

    public Optional<Salon> findById(Long id) {
        return salonRepository.findById(id);
    }

    public Salon save(Salon salon) {
        return salonRepository.save(salon);
    }

    public void deleteById(Long id) {
        salonRepository.deleteById(id);
    }
}
