package com.example.gamsproyecto.controllers;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;

import lombok.RequiredArgsConstructor;

import com.example.gamsproyecto.entities.Producto;
import com.example.gamsproyecto.repositories.ProveedorRepository;
import com.example.gamsproyecto.services.ProductoService;

import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.servlet.mvc.support.RedirectAttributes;

@Controller
@RequestMapping("/productos")
@RequiredArgsConstructor
public class ProductoController {
    private final ProductoService productoService;
    private final ProveedorRepository proveedorRepository;

    @GetMapping("")
    public String listarProductos(Model model) {
        model.addAttribute("productos", productoService.productoSel());
        return "productos";
    }

    @GetMapping("/nuevo")
    public String mostrarFormularioNuevo(Model model) {
        if (!model.containsAttribute("producto")) {
            model.addAttribute("producto", new Producto());
        }
        model.addAttribute("proveedores", proveedorRepository.findAll());
        return "añadir-productos";
    }

    @PostMapping("/guardar")
    public String guardarProducto(@ModelAttribute Producto producto) {
        productoService.guardar(producto);
        return "redirect:/";
    }

@GetMapping("/editar/{id}")
public String mostrarFormularioEditar(@PathVariable Integer id, Model model) {
    Producto producto = productoService.buscarPorId(id);
    if (producto == null) {
        return "redirect:/";
    }
    model.addAttribute("producto", producto);
    model.addAttribute("proveedores", proveedorRepository.findAll());
    return "editar-productos";
}

// Actualizar producto
@PostMapping("/actualizar/{id}")
public String actualizarProducto(@PathVariable Integer id, @ModelAttribute Producto producto, 
                               RedirectAttributes redirectAttributes) {
    producto.setId(id); // Asegurar que el ID se mantenga
    productoService.actualizar(producto);
    redirectAttributes.addFlashAttribute("mensaje", "Producto actualizado exitosamente");
    return "redirect:/";
}

// Eliminar producto
@PostMapping("/eliminar/{id}")
public String eliminarProducto(@PathVariable Integer id, RedirectAttributes redirectAttributes) {
    productoService.eliminar(id);
    redirectAttributes.addFlashAttribute("mensaje", "Producto eliminado exitosamente");
    return "redirect:/";
}

}
