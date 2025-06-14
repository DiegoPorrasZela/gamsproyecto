package com.example.gamsproyecto.entities;

import java.sql.Timestamp;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.Table;
import jakarta.validation.constraints.Min;
import jakarta.validation.constraints.Max;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.ToString;

@Entity
@Table(name = "productos")
@Getter
@Setter
@NoArgsConstructor
@ToString(exclude = "proveedor") // en Producto

public class Producto {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id_productos")
    private Integer id;

    private String tipo;
    private String marca;
    private String nombre;
    private double precio;

    @Column(name = "precio_con_descuento")
    private Double precioConDescuento;

    private String descuento;
    private String imagen;
    private Boolean envioGratis;

    @Column(name = "costo_adquisicion", nullable = false)
    private double costoAdquisicion;

    private int stock;

    @Column(name = "stock_minimo")
    private Integer stockMinimo = 3;

    private String sku;

    @Column(name = "fecha_ingreso", insertable = false, updatable = false)
    private Timestamp fechaIngreso;

    @Column(name = "ubicacion_almacen")
    private String ubicacionAlmacen;

    private String temporada;

    @Column(name = "rating_interno")
    @Min(1)
    @Max(5)
    private Integer ratingInterno;

    @Column(name = "comentarios_internos")
    private String comentariosInternos;

    private boolean habilitado = true;

    @ManyToOne
    @JoinColumn(name = "proveedor_id", referencedColumnName = "id_proveedores")
    private Proveedor proveedor;
}