package com.danielcepeda.backend.entidades;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;

@Data
@NoArgsConstructor
@AllArgsConstructor
@Entity
@Table(name = "listas_de_deseos")
public class ListaDeseo {
    @Id
    private Integer idProducto;
    private String nombreProducto;
    private Long precio;
    private Integer cantidad;

}
