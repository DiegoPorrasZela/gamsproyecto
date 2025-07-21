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

    // Método existente - obtener todos los productos (para admin)
    public List<Producto> productoSel() {
        return repository.findAll();
    }

    // Método para guardar producto
    public void guardar(Producto producto) {
        repository.save(producto);
    }

    // MÉTODO A MODIFICAR - Solo productos habilitados para usuarios
    public List<Producto> productosPorTipo(String tipo) {
        // Cambiar esta línea para filtrar solo productos habilitados
        return repository.findByTipoAndHabilitado(tipo, true);
    }

    // Agregar estos métodos a tu ProductoService existente:

    // Buscar producto por ID
    public Producto buscarPorId(Integer id) {
        return repository.findById(id).orElse(null);
    }

    // Actualizar producto
    public void actualizar(Producto producto) {
        repository.save(producto);
    }

    // Eliminar producto
    public void eliminar(Integer id) {
        repository.deleteById(id);
    }

    // Método para deshabilitar en lugar de eliminar (recomendado)
    public void deshabilitar(Integer id) {
        Producto producto = buscarPorId(id);
        if (producto != null) {
            producto.setHabilitado(false);
            repository.save(producto);
        }
    }
}
