package com.example.gamsproyecto.config;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.security.web.SecurityFilterChain;

@Configuration
@EnableWebSecurity
public class SecurityConfig {
    @Bean
    public PasswordEncoder passwordEncoder() {
        return new BCryptPasswordEncoder();
    }

    @Bean
    public SecurityFilterChain securityFilterChain(HttpSecurity http) throws Exception {
        http
            .authorizeHttpRequests(auth -> auth
                .requestMatchers("/css/**", "/js/**", "/img/**", "/estilos/**", "/", "/index", "/hombres", "/niños", "/anime", "/deporte", "/login", "/register").permitAll()
                .requestMatchers("/admin/**", "/productos/añadir", "/productos/editar/**", "/productos/eliminar/**").hasRole("ADMIN")
                .anyRequest().authenticated()
            )
            .formLogin(form -> form
                .loginPage("/login")
                .loginProcessingUrl("/login")
                .failureUrl("/login.html?error=true")
                .defaultSuccessUrl("/index", true)
                .permitAll()
            )
            .logout(logout -> logout
                .logoutSuccessUrl("/index")
                .permitAll()
            );
        return http.build();
    }
    // Registrar el servicio de usuarios personalizados
    @Bean
    public org.springframework.security.core.userdetails.UserDetailsService userDetailsService(com.example.gamsproyecto.services.CustomUserDetailsService customUserDetailsService) {
        return customUserDetailsService;
    }
}
