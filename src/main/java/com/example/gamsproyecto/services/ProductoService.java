package com.example.gamsproyecto.services;

import java.util.List;

import org.springframework.stereotype.Service;

import com.example.gamsproyecto.entities.Producto;
import com.example.gamsproyecto.repositories.ProductoRepository;

import lombok.RequiredArgsConstructor;

@Service
@RequiredArgsConstructor // Crea el constructor automatico
public class ProductoService {

    private final ProductoRepository repository;

    // select * from productos;
    public List<Producto> productoSel() {
        return repository.findAll();
    }

    public void guardar(Producto producto) {
        repository.save(producto);
    }

    public List<Producto> productosPorTipo(String tipo) {
        return repository.findByTipoIgnoreCase(tipo);
    }

}
