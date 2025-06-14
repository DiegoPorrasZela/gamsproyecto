package com.example.gamsproyecto.entities;

import jakarta.persistence.*;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.ToString;

import java.util.List;

@Entity
@Table(name = "proveedores")
@Getter
@Setter
@NoArgsConstructor
@ToString(exclude = "productos") // en Proveedor

public class Proveedor {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id_proveedores")
    private Integer id;

    private String nombre;
    private String ruc;
    private String direccion;

    @OneToMany(mappedBy = "proveedor")
    private List<Producto> productos;
}
