package com.example.gamsproyecto.controllers;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;

import com.example.gamsproyecto.services.ProductoService;

import lombok.RequiredArgsConstructor;

import org.springframework.web.bind.annotation.GetMapping;

@Controller
@RequestMapping
@RequiredArgsConstructor
public class NavigationController {

    private final ProductoService productoService;

    @GetMapping
    public String Inicio(Model model){
        model.addAttribute("descuentoActivo", true);
        return "index";
    }

    @GetMapping("/hombres")
    public String listarHombres(Model model) {
        model.addAttribute("productos", productoService.productosPorTipo("hombres"));
        return "hombres";
    }

    @GetMapping("/niños")
    public String listarNiños(Model model) {
        model.addAttribute("productos", productoService.productosPorTipo("niños"));
        return "niños";
    }

    @GetMapping("/colecciones/anime")
    public String listarAnime(Model model) {
        model.addAttribute("productos", productoService.productosPorTipo("anime"));
        return "anime";
    }

    @GetMapping("/colecciones/deporte")
    public String listarDeporte(Model model) {
        model.addAttribute("productos", productoService.productosPorTipo("deporte"));
        return "deporte";
    }

    @GetMapping("/conocenos")
    public String conocenos(){
        return "conocenos";
    }

    @GetMapping("/login")
    public String login(){
        return "login";
    }
}
