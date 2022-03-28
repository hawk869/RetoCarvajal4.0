package com.danielcepeda.backend.repositorios;

import com.danielcepeda.backend.entidades.Catalogo;
import org.springframework.data.jpa.repository.JpaRepository;

public interface CatalogoRepositorio extends JpaRepository<Catalogo, Integer> {
}
