package com.danielcepeda.backend.controladores;

import com.danielcepeda.backend.entidades.Catalogo;
import com.danielcepeda.backend.entidades.ListaDeseo;
import com.danielcepeda.backend.repositorios.CatalogoRepositorio;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@CrossOrigin(origins = "*")
@RestController
@RequestMapping("/catalogo")
public class CatalogoControlador {

    @Autowired
    CatalogoRepositorio catalogoRepositorio;

    @GetMapping
    public ResponseEntity<?> obtenerTodoElCatalogo(){
        try {
            List<Catalogo> catalogos = catalogoRepositorio.findAll();
            if (catalogos.isEmpty()){
                return new ResponseEntity<>(HttpStatus.NO_CONTENT);
            }return new ResponseEntity<>(catalogos,HttpStatus.OK);
        }catch (Exception e){
            return new ResponseEntity<>(null, HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
    @GetMapping("/{id}")
    public ResponseEntity<?> obtenerProductoPorId (@PathVariable Integer id){
        Catalogo aux= catalogoRepositorio.findById(id).get();
        Optional<Catalogo> listaData =  Optional.of(aux);
        if (listaData.isPresent()){
            return new ResponseEntity<>(listaData,HttpStatus.OK);
        }return new ResponseEntity<>(HttpStatus.NO_CONTENT);
    }
}
