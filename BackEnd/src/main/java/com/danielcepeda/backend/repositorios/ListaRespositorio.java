package com.danielcepeda.backend.repositorios;

import com.danielcepeda.backend.entidades.ListaDeseo;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ListaRespositorio extends JpaRepository<ListaDeseo, Integer> {
}
