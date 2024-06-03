package com.cinebilet.cinebilet_backend.service;

import com.cinebilet.cinebilet_backend.model.Gosterim;
import com.cinebilet.cinebilet_backend.repository.GosterimRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class GosterimService {

    @Autowired
    private GosterimRepository gosterimRepository;

    public List<Gosterim> findAll() {
        return gosterimRepository.findAll();
    }

    public Optional<Gosterim> findById(Long id) {
        return gosterimRepository.findById(id);
    }

    public Gosterim save(Gosterim gosterim) {
        return gosterimRepository.save(gosterim);
    }

    public void deleteById(Long id) {
        gosterimRepository.deleteById(id);
    }
}
