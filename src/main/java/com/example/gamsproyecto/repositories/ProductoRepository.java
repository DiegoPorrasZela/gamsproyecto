package com.example.gamsproyecto.repositories;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.gamsproyecto.entities.Producto;


public interface ProductoRepository extends JpaRepository<Producto,Integer> {
    List<Producto> findByTipoIgnoreCase(String tipo);

    // NUEVO MÉTODO - Filtrar por tipo y habilitado
    List<Producto> findByTipoAndHabilitado(String tipo, Boolean habilitado);
    
}
