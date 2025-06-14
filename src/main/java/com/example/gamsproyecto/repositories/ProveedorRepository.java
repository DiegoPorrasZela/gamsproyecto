package com.example.gamsproyecto.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import com.example.gamsproyecto.entities.Proveedor;

public interface ProveedorRepository extends JpaRepository<Proveedor, Integer> {
}

