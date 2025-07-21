package com.example.gamsproyecto.config;

import org.springframework.context.annotation.Configuration;
import org.springframework.web.servlet.config.annotation.ViewControllerRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

@Configuration
public class MvcConfig implements WebMvcConfigurer{
 @Override
 
 public void addViewControllers(ViewControllerRegistry registry) {
     
     WebMvcConfigurer.super.addViewControllers(registry);
     registry.addViewController("index").setViewName("inicio");
     registry.addViewController("hombres").setViewName("hombres");
     registry.addViewController("niños").setViewName("niños");
     registry.addViewController("anime").setViewName("anime");
     registry.addViewController("deporte").setViewName("deporte");
     registry.addViewController("deporte").setViewName("deporte");
     registry.addRedirectViewController("", "inicio");
 }
}
