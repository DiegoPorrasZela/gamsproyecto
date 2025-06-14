package com.example.gamsproyecto.controllers;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.servlet.mvc.support.RedirectAttributes;

import com.example.gamsproyecto.entities.Producto;
import com.example.gamsproyecto.entities.Proveedor;
import com.example.gamsproyecto.repositories.ProveedorRepository;

import lombok.RequiredArgsConstructor;

@Controller
@RequestMapping("/proveedores")
@RequiredArgsConstructor
public class ProveedorController {
    private final ProveedorRepository proveedorRepository;

    @PostMapping("/guardar")
    public String guardarProveedor(@ModelAttribute Proveedor proveedor,
            @RequestParam(required = false) String redirect,
            RedirectAttributes redirectAttributes,
            @ModelAttribute Producto productoActual) {
        proveedorRepository.save(proveedor);

        // Guardar los datos del producto actual como flash attributes
        redirectAttributes.addFlashAttribute("producto", productoActual);
        redirectAttributes.addFlashAttribute("mensajeProveedor", "Proveedor añadido con éxito.");

        return "redirect:/productos/" + (redirect != null ? redirect : "nuevo");
    }

}
