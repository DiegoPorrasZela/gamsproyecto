package com.example.gamsproyecto.config;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.web.SecurityFilterChain;

@Configuration
@EnableWebSecurity
public class SecurityConfig {
    @Bean
    public SecurityFilterChain defaultSecurityFilterChain(HttpSecurity http)
        throws Exception {
            http.authorizeHttpRequests(
                auth -> auth
                .requestMatchers("/","/index","/login","/hombres","/estilos/**","/img/**","/js/**")
                .permitAll().anyRequest().authenticated())
                .formLogin(
                    login -> login.loginPage("/login")
                    .loginProcessingUrl("/login")
                    .failureUrl("/login.html?error=true")   
                    .defaultSuccessUrl("/conocenos")
                    );
            return http.build();
        }
}
