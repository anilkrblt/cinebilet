package com.cinebilet.cinebilet_backend.service;

import com.cinebilet.cinebilet_backend.model.Kampanya;
import com.cinebilet.cinebilet_backend.repository.KampanyaRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class KampanyaService {

    @Autowired
    private KampanyaRepository kampanyaRepository;

    public List<Kampanya> findAll() {
        return kampanyaRepository.findAll();
    }

    public Optional<Kampanya> findById(Long id) {
        return kampanyaRepository.findById(id);
    }

    public Kampanya save(Kampanya kampanya) {
        return kampanyaRepository.save(kampanya);
    }

    public void deleteById(Long id) {
        kampanyaRepository.deleteById(id);
    }
}
